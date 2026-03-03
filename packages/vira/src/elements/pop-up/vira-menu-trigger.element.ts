import {type PartialWithUndefined} from '@augment-vir/common';
import {type NavController} from 'device-navigation';
import {classMap, css, defineElementEvent, html, listen, nothing} from 'element-vir';
import {defineViraElement} from '../../util/define-vira-element.js';
import {type PopUpManager, type ShowPopUpResult} from '../../util/pop-up-manager.js';
import {ViraMenu, ViraMenuPopUpDirection, type ViraMenuCornerStyle} from './vira-menu.element.js';
import {
    HorizontalAnchor,
    ViraPopUpTrigger,
    type PopUpOffset,
    type PopUpTriggerPosition,
} from './vira-pop-up-trigger.element.js';

/**
 * Test ids for {@link ViraMenuTrigger}.
 *
 * @category Internal
 */
export const viraMenuTriggerTestIds = {
    menu: 'menu-trigger-menu',
};

/**
 * A more specific wrapper of `ViraPopUpTrigger` that always opens a menu.
 *
 * @category PopUp
 * @category Elements
 */
export const ViraMenuTrigger = defineViraElement<
    PartialWithUndefined<
        {
            isDisabled: boolean;
            z_debug_forceOpenState: boolean;
            popUpOffset: PopUpOffset;
            keepOpenAfterInteraction: boolean;
            menuCornerStyle: ViraMenuCornerStyle;
        } & PopUpTriggerPosition
    >
>()({
    tagName: 'vira-menu-trigger',
    slotNames: [
        'trigger',
    ],
    styles: css`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            max-width: 100%;
        }

        ${ViraPopUpTrigger} {
            width: 100%;
        }

        .full-width-menu {
            width: 100%;
        }
    `,
    events: {
        itemActivate: defineElementEvent<PropertyKey[]>(),
        openChange: defineElementEvent<ShowPopUpResult | undefined>(),
    },
    state() {
        return {
            navController: undefined as undefined | NavController,
            popUpManager: undefined as undefined | PopUpManager,
            /** `undefined` means the pop up is not currently showing. */
            showPopUpResult: undefined as ShowPopUpResult | undefined,
        };
    },
    render({inputs, state, updateState, dispatch, events, slotNames}) {
        return html`
            <${ViraPopUpTrigger.assign({
                ...inputs,
            })}
                class=${classMap({
                    open: !!state.showPopUpResult,
                })}
                ${listen(ViraPopUpTrigger.events.init, (event) => {
                    updateState({
                        navController: event.detail.navController,
                        popUpManager: event.detail.popUpManager,
                    });
                })}
                ${listen(ViraPopUpTrigger.events.openChange, (event) => {
                    if (!!state.showPopUpResult !== !!event.detail) {
                        dispatch(new events.openChange(event.detail));
                    }
                    updateState({
                        showPopUpResult: event.detail,
                    });
                })}
            >
                <slot name=${slotNames.trigger} slot=${ViraPopUpTrigger.slotNames.trigger}></slot>
                ${state.navController && state.showPopUpResult
                    ? html`
                          <${ViraMenu.assign({
                              direction: state.showPopUpResult.popDown
                                  ? ViraMenuPopUpDirection.Downwards
                                  : ViraMenuPopUpDirection.Upwards,
                              cornerStyle: inputs.menuCornerStyle,
                          })}
                              slot=${ViraPopUpTrigger.slotNames.popUp}
                              class=${classMap({
                                  'full-width-menu':
                                      inputs.horizontalAnchor === HorizontalAnchor.Both,
                              })}
                          >
                              <slot></slot>
                          </${ViraMenu}>
                      `
                    : nothing}
            </${ViraPopUpTrigger}>
        `;
    },
});
