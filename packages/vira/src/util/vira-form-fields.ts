import {check} from '@augment-vir/assert';
import {addSuffix, getObjectTypedValues, type PartialWithUndefined} from '@augment-vir/common';
import {type FullDate} from 'date-vir';
import {type ViraIconSvg} from '../icons/icon-svg.js';
import {type ViraSelectOption} from './vira-select-option.js';

/**
 * Form field types for {@link ViraFormField}.
 *
 * @category Internal
 */
export enum ViraFormFieldType {
    Text = 'text',
    /** Allows auto complete for _existing_ passwords used on this website (for login). */
    ExistingPassword = 'existing-password',
    /** Allows auto complete for _new_ passwords used on this website (for login). */
    NewPassword = 'new-password',
    /** Uses a password input without any attributes applied for auto complete hints. */
    PlainPassword = 'plain-password',
    Email = 'email',
    Number = 'number',
    Select = 'select',
    Checkbox = 'checkbox',
    TextArea = 'text-area',
    Date = 'date',
}

/**
 * {@link ViraFormField} properties that are shared between all field types.
 *
 * @category Internal
 */
export type CommonViraFormFields = {
    label: string;
} & PartialWithUndefined<{
    /** Applies a test id to the form field element. */
    testId: string;
    /**
     * When `true`, visually indicates the form field as required and affects form validation.
     *
     * @default false
     */
    isRequired: boolean;
    /**
     * When `true`, marks this form field element with error styling.
     *
     * @default false
     */
    hasError: boolean;
    /**
     * When `true`, hides this form field entirely.
     *
     * @default false
     */
    isHidden: boolean;
    /**
     * When `true`, continues showing the form field but prevents edits.
     *
     * @default false
     */
    isDisabled: boolean;
}>;

/**
 * An individual form field for {@link ViraFormFields}.
 *
 * @category Internal
 */
export type ViraFormField =
    | ({
          type:
              | ViraFormFieldType.Text
              | ViraFormFieldType.ExistingPassword
              | ViraFormFieldType.NewPassword
              | ViraFormFieldType.PlainPassword
              | ViraFormFieldType.Email;
          value: string | undefined;
      } & PartialWithUndefined<{
          placeholder: string;
          icon: ViraIconSvg;
          isUsername: boolean;
      }> &
          CommonViraFormFields)
    | ({
          type: ViraFormFieldType.Select;
          value: string | undefined;
          options: ReadonlyArray<Readonly<ViraSelectOption>>;
      } & PartialWithUndefined<{
          placeholder: string;
          icon: ViraIconSvg;
      }> &
          CommonViraFormFields)
    | ({
          type: ViraFormFieldType.Checkbox;
          value: boolean | undefined;
      } & PartialWithUndefined<{
          /** The checkbox will be filled with a form selection color when it is checked. */
          fillWhenChecked: boolean;
          /** The checkbox will be filled with a form error color when it is unchecked. */
          fillWhenUnchecked: boolean;
      }> &
          CommonViraFormFields)
    | ({
          type: ViraFormFieldType.Number;
          value: number | undefined;
      } & PartialWithUndefined<{
          placeholder: string;
          icon: ViraIconSvg;
          min: number;
          max: number;
          step: number;
      }> &
          CommonViraFormFields)
    | ({
          type: ViraFormFieldType.TextArea;
          value: string | undefined;
      } & PartialWithUndefined<{
          placeholder: string;
          rows: number;
          preventResize: boolean;
      }> &
          CommonViraFormFields)
    | ({
          type: ViraFormFieldType.Date;
          value: FullDate | undefined;
      } & PartialWithUndefined<{
          /** Lower bound for selectable dates. Defaults to `1800-01-01` when omitted. */
          min: FullDate;
          /** Upper bound for selectable dates. Defaults to 10 years from now when omitted. */
          max: FullDate;
      }> &
          CommonViraFormFields);

/**
 * A collection of form fields for `ViraForm`.
 *
 * @category Internal
 */
export type ViraFormFields = Record<string, ViraFormField>;

/**
 * Appends a `'*'` to a label if it exist sand if it is required.
 *
 * @category Internal
 */
export function applyRequiredLabel(
    label: string | undefined,
    isRequired: boolean,
): string | undefined {
    if (label) {
        if (isRequired) {
            return addSuffix({
                value: label,
                suffix: '*',
            });
        } else {
            return label;
        }
    } else {
        return undefined;
    }
}

/**
 * Checks if all the {@link ViraFormField} entries in a given {@link ViraFormFields} are valid through
 * the following checks:
 *
 * - Checks that required fields are provided (not `undefined`)
 * - Ignores hidden fields
 *
 * @category Internal
 */
export function areFormFieldsValid(formFields: Readonly<ViraFormFields>) {
    return getObjectTypedValues(formFields).every((formField) => {
        if (formField.isHidden || !formField.isRequired) {
            return true;
        } else if (check.isString(formField.value)) {
            return !!formField.value;
        } else {
            return formField.value != undefined;
        }
    });
}
