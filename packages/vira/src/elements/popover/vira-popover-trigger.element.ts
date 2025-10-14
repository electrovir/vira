import {assert} from '@augment-vir/assert';
import {type PartialWithUndefined} from '@augment-vir/common';
import {NavController, type Coords} from 'device-navigation';
import {classMap, css, defineElementEvent, html, listen, renderIf} from 'element-vir';
import {createFocusStyles} from '../../styles/focus.js';
import {noNativeFormStyles, noUserSelect, viraDisabledStyles} from '../../styles/index.js';
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
        /**
         * - `HorizontalAnchor.Left`: popover is anchored to the left side of the trigger and the
         *   popover can grow to the right.
         * - `HorizontalAnchor.Right`: popover is anchored to the right side of the trigger and the
         *   popover can grow to the left.
         * - `HorizontalAnchor.Both`: popover is anchored on both sides of the trigger and cannot grow
         *   beyond it. (This is the default experience.)
         *
         * Note that when `HorizontalAnchor.Both` is _not_ used, this anchor will cancel out any
         * `popoverOffset` for the direction _opposite_ of the chosen anchor.
         *
         * @default HorizontalAnchor.Both
         */
        horizontalAnchor?: HorizontalAnchor;
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

            ${createFocusStyles({
                elementBorderSize: 1,
            })}
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

        .popover-positioner {
            position: absolute;
            pointer-events: none;
            display: flex;
            box-sizing: border-box;
            flex-direction: column;
            align-items: flex-start;

            /* highest possible z-index */
            z-index: 2147483647;

            & > * {
                pointer-events: auto;
                max-width: 100%;
            }

            &.right-aligned {
                align-items: flex-end;
            }
        }

        .open-upwards .popover-positioner {
            flex-direction: column-reverse;
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
        updateState({showPopoverResult: undefined});
        state.popoverManager.destroy();
    },
    init({state, updateState, host, inputs, dispatch, events}) {
        /** Refocus the trigger and set the result to `undefined` when the popover closes. */
        state.popoverManager.listen(HidePopoverEvent, () => {
            updateState({showPopoverResult: undefined});
            dispatch(new events.openChange(undefined));
            if (!inputs.isDisabled) {
                const dropdownWrapper = host.shadowRoot.querySelector('.dropdown-wrapper');

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
            {emitEvent, open}: {emitEvent: boolean; open: boolean},
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

        const leftCss =
            inputs.horizontalAnchor === HorizontalAnchor.Right && state.showPopoverResult
                ? css`
                      left: -${state.showPopoverResult.positions.diff.left}px;
                  `
                : css`
                      left: ${inputs.popoverOffset?.left || 0}px;
                  `;

        const rightCss =
            state.showPopoverResult && inputs.horizontalAnchor === HorizontalAnchor.Left
                ? css`
                      right: -${state.showPopoverResult.positions.diff.right}px;
                  `
                : css`
                      right: ${inputs.popoverOffset?.right || 0}px;
                  `;

        const horizontalPositionStyle = css`
            ${leftCss}
            ${rightCss}
        `;

        /**
         * These styles do _not_ account for window resizing while the menu is open. I decided this
         * was not a major enough problem to tackle. If it becomes major enough in the future,
         * you'll need to hook into a window _or_ container resize listener inside `PopoverManager`
         * and emit a new `ShowPopoverResult` instance when it changes.
         */
        const positionerStyles = state.showPopoverResult
            ? state.showPopoverResult.popDown
                ? /** Dropdown going down position. */
                  css`
                      bottom: -${state.showPopoverResult.positions.diff.bottom}px;
                      top: calc(100% + ${inputs.popoverOffset?.vertical || 0}px);
                      ${horizontalPositionStyle}
                  `
                : /** Dropdown going up position. */
                  css`
                      top: -${state.showPopoverResult.positions.diff.top}px;
                      bottom: calc(100% + ${inputs.popoverOffset?.vertical || 0}px);
                      ${horizontalPositionStyle}
                  `
            : undefined;

        function respondToClick(event: Event) {
            triggerPopover({emitEvent: true, open: !state.showPopoverResult}, event);
        }

        return html`
            <button
                ?disabled=${!!inputs.isDisabled}
                class="dropdown-wrapper ${classMap({
                    open: !!state.showPopoverResult,
                    'open-upwards': !state.showPopoverResult?.popDown,
                })}"
                role="listbox"
                aria-expanded=${!!state.showPopoverResult}
                ${listen('keydown', (event) => {
                    if (!state.showPopoverResult && event.code.startsWith('Arrow')) {
                        triggerPopover({emitEvent: true, open: true}, event);
                    }
                })}
                ${listen('click', (event) => {
                    /** Detail is 0 if it was a keyboard key (like Enter) that triggered this click. */
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
                <div class="dropdown-trigger">
                    <slot name=${slotNames.trigger}></slot>
                </div>

                <div
                    class="popover-positioner ${classMap({
                        'right-aligned': inputs.horizontalAnchor === HorizontalAnchor.Right,
                    })}"
                    style=${positionerStyles}
                >
                    ${renderIf(
                        !!state.showPopoverResult,
                        html`
                            <slot name=${slotNames.popover}></slot>
                        `,
                    )}
                </div>
            </button>
        `;
    },
});
