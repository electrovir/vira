import {assert} from '@augment-vir/assert';
import {type PartialWithUndefined} from '@augment-vir/common';
import {NavController, type Coords} from 'device-navigation';
import {css, defineElementEvent, html, listen, onDomRendered, renderIf} from 'element-vir';
import {viraDisabledStyles} from '../../styles/disabled.js';
import {createFocusStyles} from '../../styles/focus.js';
import {noNativeFormStyles} from '../../styles/native-styles.js';
import {noUserSelect} from '../../styles/user-select.js';
import {
    HidePopoverEvent,
    NavSelectEvent,
    PopoverManager,
    type ShowPopoverResult,
} from '../../util/pop-over-manager.js';
import {defineViraElement} from '../define-vira-element.js';
import {triggerPopoverState} from './popover-helpers.js';

/**
 * Offsets applied to any menu opened by {@link ViraPopoverTrigger}.
 *
 * @category Internal
 */
export type PopoverOffset = PartialWithUndefined<{
    vertical: number;
    right: number;
    left: number;
}>;

/**
 * Anchor options for popovers.
 *
 * @category Internal
 */
export enum HorizontalAnchor {
    /**
     * The left side of the popover will be anchored to the left side of the trigger, allowing the
     * popover to grow on the right side of the trigger.
     */
    Left = 'left',
    /**
     * The Right side of the popover will be anchored to the right side of the trigger, allowing the
     * popover to grow on the left side of the trigger.
     */
    Right = 'right',
    /**
     * Restrict the popover on both sides.
     *
     * This is the default anchor for {@link ViraPopoverTrigger}.
     */
    Both = 'both',
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
        /** For debugging purposes only. Very bad for actual production code use. */
        z_debug_forceOpenState: boolean;
        /** Set to `true` to keep the popover open if it is interacted with. */
        keepOpenAfterInteraction: boolean;
        /** All values in px. */
        popoverOffset?: PopoverOffset;
    }>
>()({
    tagName: 'vira-popover-trigger',
    state({host}) {
        return {
            /** `undefined` means the popover is not currently showing. */
            showPopoverResult: undefined as ShowPopoverResult | undefined,
            popoverManager: new PopoverManager(new NavController(host, {activateOnMouseUp: true})),
        };
    },
    slotNames: [
        'trigger',
        'popover',
    ],
    hostClasses: {
        'vira-popover-trigger-disabled': ({inputs}) => !!inputs.isDisabled,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            max-width: 100%;
        }

        .wrapper {
            max-width: 100%;
            box-sizing: border-box;
            position: relative;
            /* Do not use display:flex. Doing so will break positioning for Firefox and Safari. */
            display: block;
        }

        .dropdown-trigger {
            ${noNativeFormStyles};
            ${noUserSelect};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;
            anchor-name: --popover-trigger;

            ${createFocusStyles({
                elementBorderSize: 1,
            })}
        }

        ${hostClasses['vira-popover-trigger-disabled'].selector} {
            ${viraDisabledStyles}
            pointer-events: auto;

            & .dropdown-wrapper {
                pointer-events: none;
            }
        }

        [popover] {
            /* More styles are set internally via JS. */

            position: absolute;
            box-sizing: border-box;
            inset: auto;
            display: flex;
            /* Allow menu shadows to overflow. Without this they are hidden. */
            overflow: visible;
            pointer-events: none;

            > * {
                pointer-events: auto;
                max-width: 100%;
            }
        }

        :popover-open {
            ${noNativeFormStyles}
        }
    `,
    events: {
        navSelect: defineElementEvent<Coords>(),
        /**
         * - `undefined` indicates that the popover just closed.
         * - {@link ShowPopoverResult} indicates that the popover just opened.
         */
        openChange: defineElementEvent<ShowPopoverResult | undefined>(),
        init: defineElementEvent<{
            navController: NavController;
            popoverManager: PopoverManager;
        }>(),
    },
    cleanup({state, updateState}) {
        updateState({
            showPopoverResult: undefined,
        });
        state.popoverManager.destroy();
    },
    init({state, updateState, host, inputs, dispatch, events}) {
        /** Refocus the trigger and set the result to `undefined` when the popover closes. */
        state.popoverManager.listen(HidePopoverEvent, () => {
            updateState({
                showPopoverResult: undefined,
            });
            dispatch(new events.openChange(undefined));
            if (!inputs.isDisabled) {
                const dropdownWrapper = host.shadowRoot.querySelector('.dropdown-trigger');

                assert.instanceOf(
                    dropdownWrapper,
                    HTMLButtonElement,
                    'failed to find dropdown wrapper child',
                );

                dropdownWrapper.focus();
            }
        });
        state.popoverManager.listen(NavSelectEvent, (event) => {
            if (!inputs.keepOpenAfterInteraction) {
                triggerPopoverState({
                    open: false,
                    callback(showPopoverResult) {
                        updateState({
                            showPopoverResult,
                        });
                    },
                    host,
                    popoverManager: state.popoverManager,
                });
            }
            dispatch(new events.navSelect(event.detail));
        });

        dispatch(
            new events.init({
                navController: state.popoverManager.navController,
                popoverManager: state.popoverManager,
            }),
        );
    },
    render({dispatch, events, state, inputs, updateState, host, slotNames}) {
        function triggerPopover(
            {
                emitEvent,
                open,
            }: {
                emitEvent: boolean;
                open: boolean;
            },
            event: Event | undefined,
        ) {
            if (state.showPopoverResult && inputs.keepOpenAfterInteraction && event) {
                const dropdownTrigger = host.shadowRoot.querySelector('.dropdown-trigger');
                if (dropdownTrigger && !event.composedPath().includes(dropdownTrigger)) {
                    /**
                     * Prevent closing the popover when `keepOpenAfterInteraction` is turned on and
                     * the popover was interacted with.
                     */
                    return;
                }
            }
            triggerPopoverState({
                open,
                callback(showPopoverResult) {
                    updateState({showPopoverResult});
                    if (emitEvent) {
                        dispatch(new events.openChange(showPopoverResult));
                    }
                },
                host,
                popoverManager: state.popoverManager,
            });
        }

        if (inputs.isDisabled) {
            triggerPopover({open: false, emitEvent: false}, undefined);
        } else if (inputs.z_debug_forceOpenState != undefined) {
            if (!inputs.z_debug_forceOpenState && state.showPopoverResult) {
                triggerPopover({emitEvent: false, open: false}, undefined);
            } else if (inputs.z_debug_forceOpenState && !state.showPopoverResult) {
                triggerPopover({emitEvent: false, open: true}, undefined);
            }
        }
        const horizontalPositionStyle = state.showPopoverResult
            ? state.showPopoverResult.popRight
                ? css`
                      width: ${state.showPopoverResult.positions.diff.rootLeftToContainerRight}px;
                      left: anchor(--popover-trigger left);
                      align-items: flex-start;
                  `
                : css`
                      width: ${state.showPopoverResult.positions.diff.rootRightToContainerLeft}px;
                      right: anchor(--popover-trigger right);
                      /* Fallback for Firefox and Safari that don't yet support anchor() */
                      right: ${state.showPopoverResult.positions.diff.right}px;
                      align-items: flex-end;
                  `
            : css`
                  display: none;
              `;

        const verticalPositionStyle = state.showPopoverResult
            ? state.showPopoverResult.popDown
                ? css`
                      top: anchor(--popover-trigger bottom);
                      height: ${state.showPopoverResult.positions.diff.bottom}px;
                      flex-direction: column;
                  `
                : css`
                      bottom: anchor(--popover-trigger top);
                      height: ${state.showPopoverResult.positions.diff.top}px;
                      flex-direction: column-reverse;
                  `
            : css`
                  display: none;
              `;

        /**
         * These styles do _not_ account for window resizing while the menu is open. I decided this
         * was not a major enough problem to tackle. If it becomes major enough in the future,
         * you'll need to hook into a window _or_ container resize listener inside `PopoverManager`
         * and emit a new `ShowPopoverResult` instance when it changes.
         *
         * Currently, the popover will simply close when the window is resized.
         */
        const positionerStyles = css`
            ${verticalPositionStyle}
            ${horizontalPositionStyle}
        `;

        function respondToClick(event: Event) {
            triggerPopover(
                {
                    emitEvent: true,
                    open: !state.showPopoverResult,
                },
                event,
            );
        }

        return html`
            <div class="wrapper">
                <button
                    ?disabled=${!!inputs.isDisabled}
                    class="dropdown-trigger"
                    role="listbox"
                    aria-expanded=${!!state.showPopoverResult}
                    ${listen('keydown', (event) => {
                        if (!state.showPopoverResult && event.code.startsWith('Arrow')) {
                            triggerPopover({emitEvent: true, open: true}, event);
                        }
                    })}
                    ${listen('click', (event) => {
                        /**
                         * Detail is 0 if it was a keyboard key (like Enter) that triggered this
                         * click.
                         */
                        if (event.detail === 0) {
                            respondToClick(event);
                        }
                    })}
                    ${listen('mousedown', (event) => {
                        /** Ignore any clicks that aren't the main button. */
                        if (event.button === 0) {
                            respondToClick(event);
                        }
                    })}
                >
                    <slot name=${slotNames.trigger}></slot>
                </button>
                <div
                    popover="manual"
                    style=${positionerStyles}
                    ${onDomRendered((popoverElement) => {
                        assert.instanceOf(popoverElement, HTMLElement);

                        if (state.showPopoverResult) {
                            popoverElement.showPopover();
                        } else {
                            popoverElement.hidePopover();
                        }
                    })}
                >
                    ${renderIf(
                        !!state.showPopoverResult,
                        html`
                            <slot name=${slotNames.popover}></slot>
                        `,
                    )}
                </div>
            </div>
        `;
    },
});
