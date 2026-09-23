import {type PartialWithUndefined} from '@augment-vir/common';

/**
 * Options for `ViraDropdown`.
 *
 * @category Dropdown
 * @category Elements
 */
export type ViraDropdownOption = {
    /** A value or id, used to keep track of which option is selected. */
    value: string;
    label: string;
} & PartialWithUndefined<{
    disabled: boolean;
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
