import {assertWrap} from '@augment-vir/assert';
import {type PartialWithUndefined} from '@augment-vir/common';
import {NavController, type Coords} from 'device-navigation';
import {classMap, css, defineElementEvent, html, listen, renderIf} from 'element-vir';
import {listenTo} from 'typed-event-target';
import {popover} from '../../directives/popover.directive.js';
import {createFocusStyles} from '../../styles/focus.js';
import {noNativeFormStyles, noUserSelect, viraDisabledStyles} from '../../styles/index.js';
import {createAnchoredPopoverStyles} from '../../util/anchored-popover.js';
import {defineViraElement} from '../../util/define-vira-element.js';
import {
    isMouseEventOnScrollbar,
    isTextInputActive,
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
    /** Only shrinks the popover's minimum width (the trigger's width). This never moves the popover. */
    right: number;
}>;

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
    },
    cssVars: {
        'vira-popover-trigger-offset-vertical': '0px',
        'vira-popover-trigger-offset-left': '0px',
        'vira-popover-trigger-offset-right': '0px',
    },
    styles({hostClasses, cssVars}) {
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
                ${noUserSelect};
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
                /**
                 * Each fallback has an upwards copy because a position-try-fallbacks entry can only
                 * reference one @position-try rule. Every downwards entry comes before any upwards
                 * entry. The last entry always fits because, when no entry fits, browsers use the
                 * first one and shift it over the trigger.
                 */
                fallbacks: [
                    {
                        /**
                         * Used instead of flip-inline, which would move the left offset to the
                         * right side.
                         */
                        name: 'vira-popover-leftwards',
                        styles: css`
                            position-area: block-end span-inline-start;
                            margin-left: 0;
                        `,
                    },
                    {
                        /**
                         * For a popover that fits on neither side of the trigger. 100% instead of
                         * 100vw so that this always fits, even next to a scrollbar.
                         */
                        name: 'vira-popover-viewport-right',
                        styles: css`
                            position-area: block-end span-all;
                            justify-self: end;
                            margin-left: 0;
                            max-width: min(500px, 100%);
                        `,
                    },
                    {
                        name: 'vira-popover-upwards',
                        styles: css`
                            min-height: 0;
                        `,
                        flipBlock: true,
                    },
                    {
                        name: 'vira-popover-leftwards-upwards',
                        styles: css`
                            position-area: block-end span-inline-start;
                            margin-left: 0;
                            min-height: 0;
                        `,
                        flipBlock: true,
                    },
                    {
                        name: 'vira-popover-viewport-right-upwards',
                        styles: css`
                            position-area: block-end span-all;
                            justify-self: end;
                            margin-left: 0;
                            max-width: min(500px, 100%);
                            min-height: 0;
                        `,
                        flipBlock: true,
                    },
                ],
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
                /* Margins are not included in the percentage. */
                max-height: calc(100% - ${cssVars['vira-popover-trigger-offset-vertical'].value});
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
        `;
    },
    events: {
        navSelect: defineElementEvent<Coords>(),
        /** `true` when the popover just opened, `false` when it just closed. */
        openChange: defineElementEvent<boolean>(),
        init: defineElementEvent<{
            navController: NavController;
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
                },
            }),
        );
    },
    render({dispatch, events, state, inputs, updateState, host, slotNames, cssVars}) {
        return html`
            <button
                ?disabled=${!!inputs.isDisabled}
                class="dropdown-wrapper ${classMap({
                    open: state.isOpen,
                })}"
                role="listbox"
                aria-expanded=${state.isOpen}
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
