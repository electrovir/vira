import {
    joinWithFinalConjunction,
    type MaybePromise,
    type PartialWithUndefined,
} from '@augment-vir/common';
import {html, listen, type HtmlInterpolation} from 'element-vir';
import {ViraMenuItem} from '../elements/pop-up/vira-menu-item.element.js';
import {
    type PopUpManager,
    type PopUpManagerOptions,
    type ShowPopUpResult,
} from './pop-up-manager.js';

/**
 * Verifies that all items have unique ids.
 *
 * @category Internal
 */
export function assertUniqueIdProps(items: ReadonlyArray<Readonly<{id: PropertyKey}>>) {
    const usedIds = new Set<PropertyKey>();
    const duplicateIds: PropertyKey[] = [];
    items.forEach((option) => {
        if (usedIds.has(option.id)) {
            duplicateIds.push(option.id);
        } else {
            usedIds.add(option.id);
        }
    });

    if (duplicateIds.length) {
        throw new Error(
            `Duplicate option ids were given: ${joinWithFinalConjunction(duplicateIds)}`,
        );
    }
}

/**
 * Handles toggling pop up state for `ViraDropdown`.
 *
 * @category Internal
 */
export function triggerPopUpState({
    open,
    callback,
    popUpManager,
    host,
    options,
}: Readonly<
    {
        open: boolean;
        popUpManager: PopUpManager;
        host: HTMLElement;
    } & PartialWithUndefined<{
        callback?: ((showPopUpResult: ShowPopUpResult | undefined) => void) | undefined;
        options?: Partial<PopUpManagerOptions> | undefined;
    }>
>) {
    if (open) {
        const showPopUpResult = popUpManager.showPopUp(host, options);
        callback?.(showPopUpResult);
    } else {
        popUpManager.removePopUp();
        callback?.(undefined);
    }
}

/**
 * A helper type to be used with {@link renderMenuItemEntries}.
 *
 * @category PopUp
 */
export type ViraMenuItemEntry = {
    content: HtmlInterpolation;
} & PartialWithUndefined<{
    selected: boolean;
    /** Called when any item is activated. */
    activate: MenuItemActivateCallback;
}> &
    typeof ViraMenuItem.InputsType;

/**
 * A callback for menu items getting activated, to be used with {@link renderMenuItemEntries}.
 *
 * @category PopUp
 */
export type MenuItemActivateCallback = (
    params: Readonly<{
        /** The menu item's index in the array. */
        index: number;
        event: MouseEvent;
    }>,
) => MaybePromise<void>;

/**
 * A helper for rendering a bunch of menu items.
 *
 * @category PopUp
 */
export function renderMenuItemEntries(items: ReadonlyArray<Readonly<ViraMenuItemEntry>>) {
    return items.map((item, index) => {
        return html`
            <${ViraMenuItem.assign({
                ...item,
            })}
                ${listen('mousedown', async (event) => {
                    await item.activate?.({
                        event,
                        index,
                    });
                })}
            >
                ${item.content}
            </${ViraMenuItem}>
        `;
    });
}
