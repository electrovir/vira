import {type PartialWithUndefined} from '@augment-vir/common';
import {type NavController} from 'device-navigation';
import {classMap, css, defineElementEvent, html, listen, nothing} from 'element-vir';
import {defineViraElement} from '../../util/define-vira-element.js';
import {type PopoverTrigger} from '../../util/popover-manager.js';
import {ViraMenu, ViraMenuCornerStyle} from './vira-menu.element.js';
import {ViraPopoverTrigger, type PopoverOffset} from './vira-popover-trigger.element.js';

/**
 * Test ids for {@link ViraMenuTrigger}.
 *
 * @category Internal
 */
export const viraMenuTriggerTestIds = {
    menu: 'menu-trigger-menu',
};

/**
 * A more specific wrapper of `ViraPopoverTrigger` that always opens a menu.
 *
 * @category Popover
 * @category Elements
 */
export const ViraMenuTrigger = defineViraElement<
    PartialWithUndefined<{
        isDisabled: boolean;
        /**
         * Defaults to {@link PopoverTrigger.Mousedown}. `true` or `false` force the popover open or
         * closed.
         */
        trigger: boolean | PopoverTrigger;
        popoverOffset: PopoverOffset;
        keepOpenAfterInteraction: boolean;
        /** @default ViraMenuCornerStyle.Round */
        menuCornerStyle: ViraMenuCornerStyle;
        /**
         * Passed to {@link ViraMenu}'s `hoverScrollSpeed` input. How many menu items per second
         * hovering a scroll arrow scrolls through.
         *
         * @default 24
         */
        menuHoverScrollSpeed: number;
        /**
         * If true, the focus outline is moved inside the element.
         *
         * @default false
         */
        useInsideFocus: boolean;
        /**
         * When `true`, the trigger will focus itself when the popover closes.
         *
         * @default false
         */
        focusOnClose: boolean;
    }>
>()({
    tagName: 'vira-menu-trigger',
    slotNames: [
        'vira-menu-trigger-trigger',
    ],
    styles: css`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            max-width: 100%;
        }

        ${ViraPopoverTrigger} {
            width: 100%;
        }
    `,
    events: {
        /** `true` when the popover just opened, `false` when it just closed. */
        openChange: defineElementEvent<boolean>(),
    },
    state() {
        return {
            navController: undefined as undefined | NavController,
            isOpen: false,
        };
    },
    render({inputs, state, updateState, dispatch, events, slotNames}) {
        return html`
            <${ViraPopoverTrigger.assign({
                ...inputs,
            })}
                class=${classMap({
                    open: state.isOpen,
                })}
                ${listen(ViraPopoverTrigger.events.init, (event) => {
                    updateState({
                        navController: event.detail.navController,
                    });
                })}
                ${listen(ViraPopoverTrigger.events.openChange, (event) => {
                    if (state.isOpen !== event.detail) {
                        dispatch(
                            new events.openChange({
                                detail: event.detail,
                            }),
                        );
                    }
                    updateState({
                        isOpen: event.detail,
                    });
                })}
            >
                <slot
                    name=${slotNames['vira-menu-trigger-trigger']}
                    slot=${ViraPopoverTrigger.slotNames['vira-popover-trigger-trigger']}
                ></slot>
                ${state.navController && state.isOpen
                    ? html`
                          <${ViraMenu.assign({
                              cornerStyle: inputs.menuCornerStyle || ViraMenuCornerStyle.Round,
                              hoverScrollSpeed: inputs.menuHoverScrollSpeed,
                          })}
                              slot=${ViraPopoverTrigger.slotNames['vira-popover-trigger-popover']}
                          >
                              <slot></slot>
                          </${ViraMenu}>
                      `
                    : nothing}
            </${ViraPopoverTrigger}>
        `;
    },
});
