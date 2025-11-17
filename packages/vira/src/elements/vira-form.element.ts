import {getObjectTypedEntries, type PartialWithUndefined} from '@augment-vir/common';
import {css, defineElementEvent, html, listen} from 'element-vir';
import {type ViraIconSvg} from '../icons/icon-svg.js';
import {defineViraElement} from './define-vira-element.js';
import {ViraCheckbox} from './vira-checkbox.element.js';
import {ViraInput, ViraInputType} from './vira-input.element.js';
import {ViraSelect, type ViraSelectOption} from './vira-select.element.js';

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
    Email = 'email',
    Select = 'select',
    Checkbox = 'checkbox',
}

/**
 * An individual form field for {@link ViraFormFields}.
 *
 * @category Internal
 */
export type ViraFormField =
    | {
          type:
              | ViraFormFieldType.Text
              | ViraFormFieldType.ExistingPassword
              | ViraFormFieldType.NewPassword
              | ViraFormFieldType.Email;
          label: string;
          value: string;
          placeholder?: string | undefined;
          disabled?: boolean | undefined;
          icon?: ViraIconSvg | undefined;
          hasError?: boolean | undefined;
          isUsername?: boolean | undefined;
      }
    | {
          type: ViraFormFieldType.Select;
          label: string;
          value: string | undefined;
          options: ReadonlyArray<Readonly<ViraSelectOption>>;
          placeholder?: string | undefined;
          disabled?: boolean | undefined;
          icon?: ViraIconSvg | undefined;
          hasError?: boolean | undefined;
      }
    | {
          type: ViraFormFieldType.Checkbox;
          label: string;
          value: boolean;
          disabled?: boolean | undefined;
          hasError?: boolean | undefined;
      };

/**
 * A collection of form fields for {@link ViraForm}.
 *
 * @category Internal
 */
export type ViraFormFields = Record<string, ViraFormField>;

/**
 * A form element.
 *
 * @category Elements
 * @see https://electrovir.github.io/vira/book/elements/vira-form
 */
export const ViraForm = defineViraElement<
    Readonly<
        {
            fields: Readonly<ViraFormFields>;
        } & PartialWithUndefined<{
            showClearButtons: boolean;
        }>
    >
>()({
    tagName: 'vira-form',
    events: {
        valueChange: defineElementEvent<
            {
                key: string;
            } & ViraFormField
        >(),
    },
    styles: css`
        form {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    `,
    render({inputs, dispatch, events}) {
        const formFields = getObjectTypedEntries(inputs.fields).map(
            ([
                key,
                field,
            ]) => {
                if (field.type === ViraFormFieldType.Checkbox) {
                    return html`
                        <${ViraCheckbox.assign({
                            value: field.value,
                            disabled: field.disabled,
                            hasError: field.hasError,
                            label: field.label,
                        })}
                            ${listen(ViraCheckbox.events.valueChange, (event) => {
                                dispatch(
                                    new events.valueChange({
                                        key,
                                        ...field,
                                        value: event.detail,
                                    }),
                                );
                            })}
                        ></${ViraCheckbox}>
                    `;
                } else if (field.type === ViraFormFieldType.Select) {
                    return html`
                        <${ViraSelect.assign({
                            options: field.options,
                            value: field.value,
                            placeholder: field.placeholder,
                            disabled: field.disabled,
                            label: field.label,
                            hasError: field.hasError,
                            icon: field.icon,
                        })}
                            ${listen(ViraSelect.events.valueChange, (event) => {
                                dispatch(
                                    new events.valueChange({
                                        key,
                                        ...field,
                                        value: event.detail,
                                    }),
                                );
                            })}
                        ></${ViraSelect}>
                    `;
                } else {
                    return html`
                        <${ViraInput.assign({
                            value: field.value,
                            disabled: field.disabled,
                            hasError: field.hasError,
                            icon: field.icon,
                            label: field.label,
                            placeholder: field.placeholder,
                            showClearButton: inputs.showClearButtons,
                            attributePassthrough: field.isUsername
                                ? {
                                      autocomplete: 'username',
                                  }
                                : field.type === ViraFormFieldType.NewPassword
                                  ? {
                                        autocomplete: 'new-password',
                                    }
                                  : field.type === ViraFormFieldType.ExistingPassword
                                    ? {
                                          autocomplete: 'password',
                                      }
                                    : field.type === ViraFormFieldType.Email
                                      ? {
                                            autocomplete: 'email',
                                        }
                                      : {},
                            type: [
                                ViraFormFieldType.NewPassword,
                                ViraFormFieldType.ExistingPassword,
                            ].includes(field.type)
                                ? ViraInputType.Password
                                : field.type === ViraFormFieldType.Email
                                  ? ViraInputType.Email
                                  : ViraInputType.Default,
                        })}
                            ${listen(ViraInput.events.valueChange, (event) => {
                                dispatch(
                                    new events.valueChange({
                                        key,
                                        ...field,
                                        value: event.detail,
                                    }),
                                );
                            })}
                        ></${ViraInput}>
                    `;
                }
            },
        );

        return html`
            <form ${listen('submit', (event) => event.preventDefault())}>
                ${formFields}
                <slot></slot>
            </form>
        `;
    },
});
