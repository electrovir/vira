import {assertWrap} from '@augment-vir/assert';
import {type PartialWithUndefined} from '@augment-vir/common';
import {css, defineElementEvent, html} from 'element-vir';
import {listenTo} from 'typed-event-target';
import {type ViraIconSvg} from '../../icons/icon-svg.js';
import {Check24Icon} from '../../icons/icon-svgs/24/check-24.icon.js';
import {viraFormCssVars} from '../../styles/form-styles.js';
import {noUserSelect} from '../../styles/index.js';
import {defineViraElement} from '../../util/define-vira-element.js';
import {ViraIcon} from '../vira-icon.element.js';

/**
 * An element for an individual menu item.
 *
 * @category PopUp
 * @category Elements
 */
export const ViraMenuItem = defineViraElement<
    PartialWithUndefined<{
        selected: boolean;
        disabled: boolean;
        /**
         * Set this to `true` to disable the default `ViraMenuItem` hover and active styles so you
         * can apply your own.
         */
        disablePointerStyles: boolean;
        /**
         * If provided, this will override the checkmark icon. If this is provided, the icon will
         * _always_ be shown, even if `selected` is set to `false`.
         */
        iconOverride: ViraIconSvg;
        /**
         * When `true`, activating this item will _not_ close the containing pop-up.
         *
         * @default false
         */
        keepOpenAfterInteraction: boolean;
    }>
>()({
    tagName: 'vira-menu-item',
    state() {
        return {
            /** Removes event listeners registered during init. */
            cleanupListeners: undefined as undefined | (() => void),
        };
    },
    events: {
        /**
         * Fired when this menu item is activated by the user (a non-disabled click). Pop-up
         * containers (e.g. `ViraPopUpTrigger`) listen to this to close the pop-up on selection,
         * gated by `keepOpenAfterInteraction`.
         */
        activate: defineElementEvent<undefined>(),
    },
    hostClasses: {
        'vira-menu-item-selected': ({inputs}) => !!inputs.selected || !!inputs.iconOverride,
        'vira-menu-item-disabled': ({inputs}) => !!inputs.disabled,
        'vira-menu-item-enabled': ({inputs}) => !inputs.disabled,
        'vira-menu-item-default-icon': ({inputs}) => !inputs.iconOverride,
        'vira-menu-item-default-styles': ({inputs}) => !inputs.disablePointerStyles,
    },
    cssVars: {
        /** Horizontal gap between a menu item's icon and its label. */
        'vira-menu-item-icon-gap': '3px',
    },
    styles: ({hostClasses, cssVars}) => css`
        :host {
            display: flex;
            flex-shrink: 0;
            ${noUserSelect};
            box-sizing: border-box;
            max-width: 100%;
            gap: ${cssVars['vira-menu-item-icon-gap'].value};
            overflow: hidden;
            padding: 8px 3px;
            padding-right: 16px;
            align-items: center;
            text-align: left;
        }

        ${hostClasses['vira-menu-item-disabled'].selector}${hostClasses[
            'vira-menu-item-default-styles'
        ].selector} {
            cursor: not-allowed;

            & .slot-wrapper,
            & ${ViraIcon} {
                opacity: 0.3;
                pointer-events: none;
            }
        }

        :host(:focus),
        :host(:active) {
            outline: none;
        }

        ${hostClasses['vira-menu-item-enabled'].selector}${hostClasses[
            'vira-menu-item-default-styles'
        ].selector} {
            cursor: pointer;

            &:host(:focus) {
                background-color: ${viraFormCssVars['vira-form-selection-hover-color'].value};
            }

            &:host(:active) {
                background-color: ${viraFormCssVars['vira-form-selection-active-color'].value};
            }
        }

        ${ViraIcon} {
            width: 24px;
            aspect-ratio: 1;
            align-items: center;
            justify-content: center;
        }

        ${hostClasses['vira-menu-item-default-icon'].selector} {
            ${ViraIcon} {
                visibility: hidden;
            }
        }

        ${hostClasses['vira-menu-item-selected'].selector} ${ViraIcon} {
            visibility: visible;
        }

        .slot-wrapper {
            display: flex;
            flex-grow: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            min-width: 0;
        }
    `,
    init({state, updateState, host, inputs, dispatch, events}) {
        host.setAttribute('role', 'menuitem');
        host.setAttribute('tabindex', inputs.disabled ? '-1' : '0');
        host.setAttribute('aria-selected', String(!!inputs.selected));
        host.setAttribute('aria-disabled', String(!!inputs.disabled));
        state.cleanupListeners?.();
        const propagating: Record<string, boolean> = {};

        function propagateMouseEvent(event: Event) {
            if (propagating[event.type]) {
                return;
            } else if (inputs.disabled) {
                event.preventDefault();
                event.stopPropagation();
                return;
            }

            /**
             * Only forward `click`. Slotted content is activated by a single forwarded click, so
             * forwarding `mousedown` as well would double-trigger interactions: a `<select>`, for
             * example, opens its picker via `showPicker()` on both `mousedown` and `click`, and the
             * first call consumes the transient user activation so the second throws
             * `NotAllowedError`. `mousedown` still reaches this handler so disabled items can block
             * it above.
             */
            if (event.type !== 'click') {
                return;
            }

            if (inputs.keepOpenAfterInteraction) {
                event.stopPropagation();
            }

            const slotElement = assertWrap.instanceOf(
                host.shadowRoot.querySelector('slot'),
                HTMLSlotElement,
            );

            slotElement
                .assignedElements({
                    flatten: true,
                })
                .forEach((element) => {
                    if (element instanceof HTMLElement && !event.composedPath().includes(element)) {
                        event.preventDefault();
                        event.stopPropagation();
                        propagating[event.type] = true;
                        const hasModifiers =
                            event instanceof MouseEvent &&
                            (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey);

                        if (hasModifiers) {
                            /**
                             * If modifier keys are present, dispatch a synthetic MouseEvent so that
                             * the modifier keys are preserved. This is needed so that cmd+click
                             * opens links in a new tab.
                             */
                            element.dispatchEvent(new MouseEvent('click', event));
                        } else {
                            /**
                             * Use `.click()` instead of dispatching a synthetic MouseEvent so that
                             * the resulting event carries user activation. This is required for
                             * APIs like `showPicker()` on `<select>` elements.
                             */
                            element.click();
                        }
                        delete propagating[event.type];
                    }
                });
        }

        const listenerRemovers = [
            listenTo(host, 'click', propagateMouseEvent),
            listenTo(host, 'mousedown', propagateMouseEvent),
            listenTo(
                host,
                'click',
                (event) => {
                    if (
                        propagating[event.type] ||
                        inputs.disabled ||
                        inputs.keepOpenAfterInteraction
                    ) {
                        return;
                    }
                    dispatch(new events.activate(undefined));
                },
                {
                    capture: true,
                },
            ),
            listenTo(host, 'mouseenter', () => {
                if (!inputs.disabled) {
                    host.focus();
                }
            }),
            listenTo(host, 'mouseleave', () => {
                if (!inputs.disabled) {
                    host.blur();
                }
            }),
        ];

        updateState({
            cleanupListeners: () => {
                listenerRemovers.forEach((remover) => remover());
            },
        });
    },
    cleanup({state, updateState}) {
        state.cleanupListeners?.();
        updateState({
            cleanupListeners: undefined,
        });
    },
    render({inputs}) {
        return html`
            <${ViraIcon.assign({
                icon: inputs.iconOverride || Check24Icon,
            })}></${ViraIcon}>
            <div class="slot-wrapper">
                <slot>&nbsp;</slot>
            </div>
        `;
    },
});
