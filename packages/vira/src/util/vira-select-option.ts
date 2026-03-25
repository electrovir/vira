import {type PartialWithUndefined} from '@augment-vir/common';

/**
 * Options for `ViraSelect` and `ViraDropdown`.
 *
 * @category Dropdown
 * @category Elements
 * @see https://electrovir.github.io/vira/book/elements/vira-select
 */
export type ViraSelectOption = {
    /** A value or id, used to keep track of which option is selected. */
    value: string;
    label: string;
} & PartialWithUndefined<{
    disabled: boolean;
}>;

/**
 * A group of options for `ViraSelect`, rendered as an `<optgroup>`.
 *
 * @category Dropdown
 * @category Elements
 */
export type ViraSelectOptionGroup = {
    groupName: string;
    options: ReadonlyArray<Readonly<ViraSelectOption>>;
};

/**
 * Type guard to determine if a `ViraSelect` options entry is a group.
 *
 * @category Internal
 */
export function isViraSelectOptionGroup(
    entry: Readonly<ViraSelectOption> | Readonly<ViraSelectOptionGroup>,
): entry is Readonly<ViraSelectOptionGroup> {
    return 'groupName' in entry;
}
