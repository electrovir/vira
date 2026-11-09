import {
    filterMap,
    joinWithFinalConjunction,
    type MaybePromise,
    type PartialWithUndefined,
} from '@augment-vir/common';
import {nav, type NavController} from 'device-navigation';
import {css, html, ifDefined, listen, nothing, type HtmlInterpolation} from 'element-vir';
import {ViraMenuItem} from '../elements/popover/vira-menu-item.element.js';
import {viraFormCssVars} from '../styles/form-styles.js';
import {noUserSelect} from '../styles/user-select.js';
import {viraTheme} from '../styles/vira-color-theme.js';

/**
 * Styles for a group name shown above a group of menu items: not selectable, and indented to line
 * up with the items' check icons.
 *
 * @category Internal
 */
export const menuGroupLabelStyles = css`
    ${noUserSelect};
    text-align: left;
    color: ${viraTheme.colors['vira-grey-foreground-placeholder'].foreground.value};
    padding: 8px 12px 4px calc(${ViraMenuItem.cssVars['vira-menu-item-icon-gap'].value} * 2);
    font-weight: ${viraFormCssVars['vira-form-label-font-weight'].value};
`;

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
    /** Added to the rendered `ViraMenuItem`'s `class` attribute. */
    className: string;
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
export function renderMenuItemEntries(
    items: ReadonlyArray<Readonly<ViraMenuItemEntry>>,
    /** Enables arrow key navigation between the menu items. */
    navController?: NavController | undefined,
) {
    return filterMap(
        items,
        (item, index) => {
            return html`
                <${ViraMenuItem.assign({
                    ...item,
                })}
                    class=${ifDefined(item.className)}
                    ${navController
                        ? nav(navController, {
                              disabled: item.disabled,
                          })
                        : nothing}
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
