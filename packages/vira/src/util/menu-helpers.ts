import {
    filterMap,
    joinWithFinalConjunction,
    type MaybePromise,
    type PartialWithUndefined,
} from '@augment-vir/common';
import {html, listen, type HtmlInterpolation} from 'element-vir';
import {ViraMenuItem} from '../elements/popover/vira-menu-item.element.js';

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
 * A helper type to be used with {@link renderMenuItemEntries}.
 *
 * @category Popover
 */
export type ViraMenuItemEntry = {
    content: HtmlInterpolation;
} & PartialWithUndefined<{
    selected: boolean;
    /** Called when any item is activated. */
    onClick: MenuItemClickCallback;
    /**
     * If set to `true`, this menu item won't show up at all.
     *
     * @default false
     */
    hidden: boolean;
}> &
    typeof ViraMenuItem.InputsType;

/**
 * A callback for menu items getting activated, to be used with {@link renderMenuItemEntries}.
 *
 * @category Popover
 */
export type MenuItemClickCallback = (
    params: Readonly<{
        /** The menu item's index in the array. */
        index: number;
        event: MouseEvent;
    }>,
) => MaybePromise<void>;

/**
 * A helper for rendering a bunch of menu items.
 *
 * @category Popover
 */
export function renderMenuItemEntries(items: ReadonlyArray<Readonly<ViraMenuItemEntry>>) {
    return filterMap(
        items,
        (item, index) => {
            return html`
                <${ViraMenuItem.assign({
                    ...item,
                })}
                    ${listen('click', async (event) => {
                        if (item.disabled) {
                            event.stopImmediatePropagation();
                            event.preventDefault();
                            return;
                        }

                        await item.onClick?.({
                            event,
                            index,
                        });
                    })}
                >
                    ${item.content}
                </${ViraMenuItem}>
            `;
        },
        (template, menuItem) => !menuItem.hidden,
    );
}
