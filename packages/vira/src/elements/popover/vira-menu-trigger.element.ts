import {type PartialWithUndefined} from '@augment-vir/common';
import {type NavController} from 'device-navigation';
import {classMap, css, defineElementEvent, html, listen, nothing, testId} from 'element-vir';
import {type PopoverManager, type ShowPopoverResult} from '../../util/popover-manager.js';
import {defineViraElement} from '../define-vira-element.js';
import {updateSelectedItems} from './popover-helpers.js';
import {type MenuItem} from './popover-menu-item.js';
import {ViraMenu} from './vira-menu.element.js';
import {
    PopoverMenuDirection,
    ViraPopoverMenu,
    type PopoverMenuCornerStyle,
} from './vira-popover-menu.element.js';
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
    {
        items: ReadonlyArray<Readonly<MenuItem>>;
    } & PartialWithUndefined<{
        /** The selected item ids from the given `items` object. */
        selected: ReadonlyArray<PropertyKey>;
        isDisabled: boolean;
        isMultiSelect: boolean;
        z_debug_forceOpenState: boolean;
        popoverOffset: PopoverOffset;
        /** Hide menu item check mark icons. */
        hideCheckIcons: boolean;
        menuCornerStyle: PopoverMenuCornerStyle;
    }>
>()({
    tagName: 'vira-menu-trigger',
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

        .full-width-menu {
            width: 100%;
        }
    `,
    events: {
        itemActivate: defineElementEvent<PropertyKey[]>(),
        openChange: defineElementEvent<ShowPopoverResult | undefined>(),
    },
    state() {
        return {
            navController: undefined as undefined | NavController,
            popoverManager: undefined as undefined | PopoverManager,
            /** `undefined` means the popover is not currently showing. */
            showPopoverResult: undefined as ShowPopoverResult | undefined,
        };
    },
    render({inputs, state, updateState, dispatch, events}) {
        return html`
            <${ViraPopoverTrigger.assign({
                isDisabled: inputs.isDisabled,
                keepOpenAfterInteraction: true,
                z_debug_forceOpenState: inputs.z_debug_forceOpenState,
                popoverOffset: inputs.popoverOffset,
            })}
                class=${classMap({
                    open: !!state.showPopoverResult,
                })}
                ${listen(ViraPopoverTrigger.events.init, (event) => {
                    updateState({
                        navController: event.detail.navController,
                        popoverManager: event.detail.popoverManager,
                    });
                })}
                ${listen(ViraPopoverTrigger.events.openChange, (event) => {
                    if (!!state.showPopoverResult !== !!event.detail) {
                        dispatch(new events.openChange(event.detail));
                    }
                    updateState({
                        showPopoverResult: event.detail,
                    });
                })}
                ${listen(ViraPopoverTrigger.events.navSelect, (event) => {
                    const itemIndex = event.detail.x;
                    const item = inputs.items[itemIndex];
                    if (!item) {
                        throw new Error(`Found no dropdown option at index '${itemIndex}'`);
                    }

                    dispatch(
                        new events.itemActivate(
                            updateSelectedItems(item, inputs.selected, inputs.isMultiSelect),
                        ),
                    );
                    if (!inputs.isMultiSelect) {
                        /**
                         * Defer popover removal to prevent race conditions with element-internal
                         * click handlers.
                         */
                        globalThis.setTimeout(() => state.popoverManager?.removePopover());
                    }
                })}
            >
                <slot slot=${ViraPopoverTrigger.slotNames.trigger}></slot>
                ${state.navController && state.showPopoverResult
                    ? html`
                          <${ViraPopoverMenu.assign({
                              direction: state.showPopoverResult.popDown
                                  ? PopoverMenuDirection.Downwards
                                  : PopoverMenuDirection.Upwards,
                              cornerStyle: inputs.menuCornerStyle,
                          })}
                              slot=${ViraPopoverTrigger.slotNames.popover}
                          >
                              <${ViraMenu.assign({
                                  items: inputs.items,
                                  selected: inputs.selected,
                                  navController: state.navController,
                                  isMultiSelect: !!inputs.isMultiSelect,
                                  hideCheckIcons: inputs.hideCheckIcons,
                              })}
                                  ${testId(viraMenuTriggerTestIds.menu)}
                              ></${ViraMenu}>
                          </${ViraPopoverMenu}>
                      `
                    : nothing}
            </${ViraPopoverTrigger}>
        `;
    },
});
