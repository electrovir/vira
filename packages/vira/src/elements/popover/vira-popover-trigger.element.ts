import {assertWrap} from '@augment-vir/assert';
import {wait, type PartialWithUndefined} from '@augment-vir/common';
import {NavController, type Coords} from 'device-navigation';
import {
    classMap,
    css,
    defineElementEvent,
    html,
    listen,
    renderIf,
    unsafeCSS,
    type CSSResult,
} from 'element-vir';
import {listenTo} from 'typed-event-target';
import {popover} from '../../directives/popover.directive.js';
import {createFocusStyles} from '../../styles/focus.js';
import {noNativeFormStyles, noUserSelect, viraDisabledStyles} from '../../styles/index.js';
import {createAnchoredPopoverStyles} from '../../util/anchored-popover.js';
import {defineViraElement} from '../../util/define-vira-element.js';
import {
    isMouseEventOnScrollbar,
    isTextInputActive,
    popoverLongPressAttribute,
    popoverLongPressDuration,
    PopoverManager,
    PopoverTrigger,
} from '../../util/popover-manager.js';
import {ViraMenuItem} from './vira-menu-item.element.js';

/**
 * Offsets applied to any menu opened by {@link ViraPopoverTrigger}.
 *
 * @category Internal
 */
export type PopoverOffset = PartialWithUndefined<{
    vertical: number;
    /** Moves the popover rightwards when it opens from the trigger's left edge. */
    left: number;
    /**
     * Only shrinks the minimum width (the trigger's width) of a {@link PopoverAnchor.FullWidth}
     * popover. This never moves the popover.
     */
    right: number;
}>;

/**
 * Where {@link ViraPopoverTrigger} first tries to place its popover. A popover that doesn't fit
 * there still moves to whichever position does.
 *
 * @category Popover
 */
export enum PopoverAnchor {
    /** Lines up with the trigger's left edge and is at least as wide as the trigger. */
    FullWidth = 'full-width',
    /** Lines up with the trigger's left edge and is only as wide as its content. */
    Left = 'left',
    /** Lines up with the trigger's right edge and is only as wide as its content. */
    Right = 'right',
    /**
     * Opens at the point where the pointer pressed the trigger and is only as wide as its content.
     * When anything other than a pointer press opens it, like the keyboard, it uses
     * {@link PopoverAnchor.FullWidth} instead.
     */
    Mouse = 'mouse',
}

const fitsContent: Record<PopoverAnchor, boolean> = {
    [PopoverAnchor.FullWidth]: false,
    [PopoverAnchor.Left]: true,
    [PopoverAnchor.Right]: true,
    /** Only fits its content while {@link pointerAnchoredAttribute} is set. */
    [PopoverAnchor.Mouse]: false,
};

/** Set on the popover only while it is opened by, or opening from, the current pointer press. */
const pointerAnchoredAttribute = 'data-pointer-anchored';

function setPointerAnchored(shadowRoot: ShadowRoot, isPointerAnchored: boolean) {
    shadowRoot
        .querySelector('.popover-positioner')
        ?.toggleAttribute(pointerAnchoredAttribute, isPointerAnchored);
}

/**
 * An element with slots for a popover trigger and popover contents.
 *
 * @category Popover
 * @category Elements
 * @see https://electrovir.github.io/vira/book/elements/vira-popover-trigger
 */
export const ViraPopoverTrigger = defineViraElement<
    PartialWithUndefined<{
        isDisabled: boolean;
        /**
         * Defaults to {@link PopoverTrigger.Mousedown}. `true` or `false` force the popover open or
         * closed.
         */
        trigger: boolean | PopoverTrigger;
        /** Set to `true` to keep the popover open if it is interacted with. */
        keepOpenAfterInteraction: boolean;
        /** All values in px. */
        popoverOffset: PopoverOffset;
        /** @default PopoverAnchor.FullWidth */
        popoverAnchor: PopoverAnchor;
        /** If true, the focus outline is moved inside the element. */
        useInsideFocus: boolean;
        /** When `true`, the trigger will focus itself when the popover closes. */
        focusOnClose: boolean;
    }>
>()({
    tagName: 'vira-popover-trigger',
    state({host}) {
        const navController = new NavController(host, {
            activateOnMouseUp: true,
        });

        return {
            isOpen: false,
            navController,
            popoverManager: new PopoverManager(navController),
        };
    },
    slotNames: [
        'vira-popover-trigger-trigger',
        'vira-popover-trigger-popover',
    ],
    hostClasses: {
        'vira-popover-trigger-disabled'({inputs}) {
            return !!inputs.isDisabled;
        },
        'vira-popover-trigger-inside-focus'({inputs}) {
            return !!inputs.useInsideFocus;
        },
        'vira-popover-trigger-outside-focus'({inputs}) {
            return !inputs.useInsideFocus;
        },
        'vira-popover-trigger-context-menu'({inputs}) {
            return inputs.trigger === PopoverTrigger.ContextMenu;
        },
        'vira-popover-trigger-fit-content'({inputs}) {
            return fitsContent[inputs.popoverAnchor || PopoverAnchor.FullWidth];
        },
        'vira-popover-trigger-anchor-right'({inputs}) {
            return inputs.popoverAnchor === PopoverAnchor.Right;
        },
    },
    cssVars: {
        'vira-popover-trigger-offset-vertical': '0px',
        'vira-popover-trigger-offset-left': '0px',
        'vira-popover-trigger-offset-right': '0px',
    },
    styles({hostClasses, cssVars}) {
        const viewportRightStyles = css`
            position-area: block-end span-all;
            justify-self: end;
            margin-left: 0;
            max-width: min(500px, 100%);
        `;

        /**
         * Each fallback has an upwards copy because a position-try-fallbacks entry can only
         * reference one @position-try rule. Every downwards entry comes before any upwards entry.
         * The last entry always fits because, when no entry fits, browsers use the first one and
         * shift it over the trigger.
         */
        function createFallbacks(otherSide: Readonly<{name: string; styles: CSSResult}>) {
            return [
                otherSide,
                {
                    /**
                     * For a popover that fits on neither side of the trigger. 100% instead of 100vw
                     * so that this always fits, even next to a scrollbar.
                     */
                    name: 'vira-popover-viewport-right',
                    styles: viewportRightStyles,
                },
                {
                    name: 'vira-popover-upwards',
                    styles: css`
                        min-height: 0;
                    `,
                    flipBlock: true,
                },
                {
                    name: `${otherSide.name}-upwards`,
                    styles: css`
                        ${otherSide.styles}
                        min-height: 0;
                    `,
                    flipBlock: true,
                },
                {
                    name: 'vira-popover-viewport-right-upwards',
                    styles: css`
                        ${viewportRightStyles}
                        min-height: 0;
                    `,
                    flipBlock: true,
                },
            ];
        }

        return css`
            :host {
                display: inline-flex;
                box-sizing: border-box;
                vertical-align: middle;
                position: relative;
                max-width: 100%;
            }

            .dropdown-wrapper {
                ${noNativeFormStyles};
                cursor: pointer;
                max-width: 100%;
                position: relative;
                flex-grow: 1;
                box-sizing: border-box;

                /* No transition back: leaving this state snaps to full size. */
                &[${unsafeCSS(popoverLongPressAttribute)}] {
                    scale: 0.92;
                    transition: scale ${popoverLongPressDuration.milliseconds}ms ease-out;
                }
            }

            ${hostClasses['vira-popover-trigger-inside-focus'].selector} .dropdown-wrapper {
                ${createFocusStyles({
                    renderInside: true,
                })}
            }
            ${hostClasses['vira-popover-trigger-outside-focus'].selector} .dropdown-wrapper {
                ${createFocusStyles()}
            }

            .dropdown-trigger {
                box-sizing: border-box;
                height: 100%;
                ${noUserSelect};
            }

            /** A left click does nothing with this trigger. */
            ${hostClasses['vira-popover-trigger-context-menu'].selector} .dropdown-wrapper {
                cursor: default;
            }

            ${hostClasses['vira-popover-trigger-disabled'].selector} {
                ${viraDisabledStyles}
                pointer-events: auto;
            }

            ${hostClasses['vira-popover-trigger-disabled'].selector} .dropdown-wrapper {
                pointer-events: none;
            }

            ${createAnchoredPopoverStyles({
                selector: css`.popover-positioner`,
                fallbacks: createFallbacks({
                    /**
                     * Used instead of flip-inline, which would move the left offset to the right
                     * side.
                     */
                    name: 'vira-popover-leftwards',
                    styles: css`
                        position-area: block-end span-inline-start;
                        margin-left: 0;
                    `,
                }),
            })}

            ${createAnchoredPopoverStyles({
                selector: css`
                    ${hostClasses['vira-popover-trigger-anchor-right'].selector} .popover-positioner
                `,
                fallbacks: createFallbacks({
                    name: 'vira-popover-rightwards',
                    styles: css`
                        position-area: block-end span-inline-end;
                        margin-left: ${cssVars['vira-popover-trigger-offset-left'].value};
                    `,
                }),
            })}

            .popover-positioner {
                pointer-events: none;
                box-sizing: border-box;
                flex-direction: column;
                align-items: stretch;

                margin-top: ${cssVars['vira-popover-trigger-offset-vertical'].value};
                /*
                    The positioner is invisible outside of its content, so this minimum only makes
                    it flip upwards when there is not much room below the trigger.
                */
                min-height: 200px;
                /*
                    Margins are not included in the percentage. The extra 4px keeps the popover off
                    the window's top or bottom edge.
                */
                max-height: calc(
                    100% - ${cssVars['vira-popover-trigger-offset-vertical'].value} - 4px
                );
                width: max-content;
                min-width: calc(
                    anchor-size(width) - ${cssVars['vira-popover-trigger-offset-left'].value} -
                        ${cssVars['vira-popover-trigger-offset-right'].value}
                );
                /*
                    Not limited to the room beside the trigger, so a popover that does not fit there
                    overflows it and moves on to the next position-try-fallbacks entry.
                */
                max-width: min(500px, 100vw);
                position-area: block-end span-inline-end;
                margin-left: ${cssVars['vira-popover-trigger-offset-left'].value};

                &:popover-open {
                    display: flex;
                }

                & > * {
                    pointer-events: auto;
                    max-width: 100%;
                }
            }

            ${hostClasses['vira-popover-trigger-fit-content'].selector} .popover-positioner {
                min-width: 0;
            }

            ${hostClasses['vira-popover-trigger-anchor-right'].selector} .popover-positioner {
                position-area: block-end span-inline-start;
                /* Repeated because the right anchor's base popover styles above reset every margin. */
                margin-top: ${cssVars['vira-popover-trigger-offset-vertical'].value};
                margin-left: 0;
            }

            .popover-positioner[${unsafeCSS(pointerAnchoredAttribute)}] {
                position-anchor: --vira-popover-pointer;
                min-width: 0;
            }

            /*
                Surrounds the pointer so the popover opens just past it. A popover under the
                pointer would get the release of the press that opened it as a click, which closes
                it or picks the menu item there.
            */
            .pointer-anchor {
                position: absolute;
                width: 2px;
                height: 2px;
                translate: -1px -1px;
                pointer-events: none;
                anchor-name: --vira-popover-pointer;
            }
        `;
    },
    events: {
        navSelect: defineElementEvent<Coords>(),
        /** `true` when the popover just opened, `false` when it just closed. */
        openChange: defineElementEvent<boolean>(),
        init: defineElementEvent<{
            navController: NavController;
            popoverManager: PopoverManager;
        }>(),
    },
    cleanup({state, updateState}) {
        updateState({
            isOpen: false,
        });
        state.popoverManager.destroy();
    },
    init({state, inputs, dispatch, events, host}) {
        /**
         * Listens on the host rather than the popover because a drag from the trigger that is
         * released in the popover fires its click on the closest element containing both.
         */
        listenTo(host, 'click', (event) => {
            const anchor = host.shadowRoot.querySelector('.dropdown-wrapper');

            if (
                inputs.keepOpenAfterInteraction ||
                (anchor && event.composedPath().includes(anchor)) ||
                (event instanceof MouseEvent && event.detail === 0
                    ? isTextInputActive()
                    : !(event instanceof MouseEvent) ||
                      event.button !== 0 ||
                      isMouseEventOnScrollbar(event))
            ) {
                return;
            }

            /** Close the popover when something in it (like a menu item) is clicked. */
            state.popoverManager.hide();
        });
        dispatch(
            new events.init({
                detail: {
                    navController: state.navController,
                    popoverManager: state.popoverManager,
                },
            }),
        );
    },
    render({dispatch, events, state, inputs, updateState, host, slotNames, cssVars}) {
        /** Clears the pointer position when the press that set it didn't open the popover. */
        async function clearUnusedPointerAnchor() {
            /** Waits for the click after a pointerup, which opens the click trigger's popover. */
            await wait({
                milliseconds: 0,
            });
            if (!state.popoverManager.isOpen()) {
                setPointerAnchored(host.shadowRoot, false);
            }
        }

        return html`
            <button
                ?disabled=${!!inputs.isDisabled}
                class="dropdown-wrapper ${classMap({
                    open: state.isOpen,
                })}"
                role="listbox"
                aria-expanded=${state.isOpen}
                ${listen('pointerdown', (event) => {
                    const pointerAnchor = host.shadowRoot.querySelector('.pointer-anchor');
                    /** A press on an open popover closes it, so it must not move it first. */
                    if (!(pointerAnchor instanceof HTMLElement) || state.popoverManager.isOpen()) {
                        return;
                    }
                    const wrapperRect = assertWrap
                        .instanceOf(event.currentTarget, HTMLElement)
                        .getBoundingClientRect();
                    /**
                     * Set directly instead of through state, because in Firefox and WebKit a
                     * re-render between this pointerdown and its mousedown keeps the popover from
                     * opening.
                     */
                    pointerAnchor.style.left = `${event.clientX - wrapperRect.left}px`;
                    pointerAnchor.style.top = `${event.clientY - wrapperRect.top}px`;
                    setPointerAnchored(host.shadowRoot, true);
                })}
                ${listen('pointerup', clearUnusedPointerAnchor)}
                ${listen('pointercancel', clearUnusedPointerAnchor)}
                ${popover(state.popoverManager, {
                    trigger: inputs.isDisabled
                        ? false
                        : (inputs.trigger ?? PopoverTrigger.Mousedown),
                    getPopover() {
                        return assertWrap.instanceOf(
                            host.shadowRoot.querySelector('.popover-positioner'),
                            HTMLElement,
                        );
                    },
                    onNavSelect(coords) {
                        if (!inputs.keepOpenAfterInteraction) {
                            state.popoverManager.hide();
                        }
                        dispatch(
                            new events.navSelect({
                                detail: coords,
                            }),
                        );
                    },
                })}
            >
                <div class="dropdown-trigger">
                    <slot name=${slotNames['vira-popover-trigger-trigger']}></slot>
                </div>
                ${renderIf(
                    inputs.popoverAnchor === PopoverAnchor.Mouse,
                    html`
                        <span class="pointer-anchor"></span>
                    `,
                )}
            </button>
            <div
                class="popover-positioner"
                popover="manual"
                style=${css`
                    ${cssVars['vira-popover-trigger-offset-vertical'].name}: ${inputs.popoverOffset
                        ?.vertical || 0}px;
                    ${cssVars['vira-popover-trigger-offset-left'].name}: ${inputs.popoverOffset
                        ?.left || 0}px;
                    ${cssVars['vira-popover-trigger-offset-right'].name}: ${inputs.popoverOffset
                        ?.right || 0}px;
                `}
                ${listen('toggle', () => {
                    const isOpen = state.popoverManager.isOpen();

                    if (isOpen === state.isOpen) {
                        return;
                    }

                    if (!isOpen) {
                        setPointerAnchored(host.shadowRoot, false);
                    }
                    updateState({
                        isOpen,
                    });
                    dispatch(
                        new events.openChange({
                            detail: isOpen,
                        }),
                    );

                    if (!isOpen && inputs.focusOnClose && !inputs.isDisabled) {
                        assertWrap
                            .instanceOf(
                                host.shadowRoot.querySelector('.dropdown-wrapper'),
                                HTMLButtonElement,
                            )
                            .focus();
                    }
                })}
                ${listen(ViraMenuItem.events.activate, () => {
                    if (!inputs.keepOpenAfterInteraction) {
                        state.popoverManager.hide();
                    }
                })}
            >
                ${renderIf(
                    state.isOpen,
                    html`
                        <slot name=${slotNames['vira-popover-trigger-popover']}></slot>
                    `,
                )}
            </div>
        `;
    },
});
