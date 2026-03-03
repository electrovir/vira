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
