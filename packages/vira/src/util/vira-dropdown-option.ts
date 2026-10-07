import {type PartialWithUndefined} from '@augment-vir/common';
import {type HtmlInterpolation} from 'element-vir';
import {type ViraIconSvg} from '../icons/icon-svg.js';

/**
 * Options for `ViraDropdown`.
 *
 * @category Dropdown
 * @category Elements
 */
export type ViraDropdownOption = {
    /** A value or id, used to keep track of which option is selected. */
    value: string;
    /**
     * Plain text for the option. Still used for search filtering, tooltips, and the search input's
     * text when `labelTemplate` is set.
     */
    label: string;
} & PartialWithUndefined<{
    disabled: boolean;
    /** Drawn before the label. Not drawn inside a searchable dropdown's text input. */
    icon: ViraIconSvg;
    /** Rendered instead of `label`. Not rendered inside a searchable dropdown's text input. */
    labelTemplate: HtmlInterpolation;
}>;

/**
 * A group of options for `ViraDropdown`, rendered under a group label.
 *
 * @category Dropdown
 * @category Elements
 */
export type ViraDropdownOptionGroup = {
    groupName: string;
    options: ReadonlyArray<Readonly<ViraDropdownOption>>;
};

/**
 * Type guard to determine if a `ViraDropdown` options entry is a group.
 *
 * @category Internal
 */
export function isViraDropdownOptionGroup(
    entry: Readonly<ViraDropdownOption> | Readonly<ViraDropdownOptionGroup>,
): entry is Readonly<ViraDropdownOptionGroup> {
    return 'groupName' in entry;
}
