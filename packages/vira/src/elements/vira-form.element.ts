import {getObjectTypedEntries, type PartialWithUndefined} from '@augment-vir/common';
import {css, defineElementEvent, html, listen, nothing, testId} from 'element-vir';
import {defineViraElement} from '../util/define-vira-element.js';
import {
    applyRequiredLabel,
    areFormFieldsValid,
    ViraFormFieldType,
    type ViraFormField,
    type ViraFormFields,
} from '../util/vira-form-fields.js';
import {ViraCheckbox} from './vira-checkbox.element.js';
import {ViraInput, ViraInputType} from './vira-input.element.js';
import {ViraSelect} from './vira-select.element.js';

/**
 * A form element.
 *
 * @category Elements
 * @see https://electrovir.github.io/vira/book/elements/vira-form
 */
export const ViraForm = defineViraElement<
    {
        fields: Readonly<ViraFormFields>;
    } & PartialWithUndefined<{
        showClearButtons: boolean;
        /**
         * When `true`, all fields in this form are disabled. Note that this will not (and can not)
         * disable any child elements you've inserted via <slot>.
         *
         * @default false
         */
        isDisabled: boolean;
        /**
         * If true, no `'*'` is appended to required form field labels.
         *
         * @default false
         */
        hideRequiredMarkers: boolean;
    }>
>()({
    tagName: 'vira-form',
    events: {
        valueChange: defineElementEvent<
            {
                key: string;
            } & ViraFormField
        >(),
        validChange: defineElementEvent<{
            allFieldsAreValid: boolean;
        }>(),
    },
    styles: css`
        :host {
            display: flex;
        }

        form {
            display: flex;
            flex-grow: 1;
            flex-direction: column;
            align-items: stretch;
            gap: 10px;

            > * {
                width: unset;
            }
        }
    `,
    state() {
        return {
            lastIsValid: false,
        };
    },
    render({inputs, dispatch, events, state, updateState}) {
        const currentIsValid = areFormFieldsValid(inputs.fields);
        if (currentIsValid !== state.lastIsValid) {
            updateState({
                lastIsValid: currentIsValid,
            });
            dispatch(new events.validChange({allFieldsAreValid: currentIsValid}));
        }

        const formFieldTemplates = getObjectTypedEntries(inputs.fields).map(
            ([
                key,
                field,
            ]) => {
                if (field.isHidden) {
                    return nothing;
                } else if (field.type === ViraFormFieldType.Checkbox) {
                    return html`
                        <${ViraCheckbox.assign({
                            value: field.value || false,
                            disabled: inputs.isDisabled || field.isDisabled,
                            hasError: field.hasError,
                            label: applyRequiredLabel(
                                field.label,
                                !!field.isRequired && !inputs.hideRequiredMarkers,
                            ),
                        })}
                            ${field.testId ? testId(field.testId) : nothing}
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
                            disabled: inputs.isDisabled || field.isDisabled,
                            label: applyRequiredLabel(
                                field.label,
                                !!field.isRequired && !inputs.hideRequiredMarkers,
                            ),
                            hasError: field.hasError,
                            icon: field.icon,
                        })}
                            ${field.testId ? testId(field.testId) : nothing}
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
                } else if (field.type === ViraFormFieldType.Number) {
                    return html`
                        <${ViraInput.assign({
                            value: field.value?.toString() || '',
                            disabled: inputs.isDisabled || field.isDisabled,
                            allowedInputs: /\d/,
                            hasError: field.hasError,
                            icon: field.icon,
                            label: applyRequiredLabel(
                                field.label,
                                !!field.isRequired && !inputs.hideRequiredMarkers,
                            ),
                            placeholder: field.placeholder,
                            showClearButton: inputs.showClearButtons,
                            type: ViraInputType.Number,
                            attributePassthrough: {
                                ...(field.min === undefined
                                    ? {}
                                    : {
                                          min: String(field.min),
                                      }),
                                ...(field.max === undefined
                                    ? {}
                                    : {
                                          max: String(field.max),
                                      }),
                                ...(field.step === undefined
                                    ? {}
                                    : {
                                          step: String(field.step),
                                      }),
                            },
                        })}
                            ${field.testId ? testId(field.testId) : nothing}
                            ${listen(ViraInput.events.valueChange, (event) => {
                                const numericValue =
                                    event.detail === '' ? undefined : Number(event.detail);
                                dispatch(
                                    new events.valueChange({
                                        key,
                                        ...field,
                                        value: numericValue,
                                    }),
                                );
                            })}
                        ></${ViraInput}>
                    `;
                } else {
                    return html`
                        <${ViraInput.assign({
                            value: field.value || '',
                            disabled: inputs.isDisabled || field.isDisabled,
                            hasError: field.hasError,
                            icon: field.icon,
                            label: applyRequiredLabel(
                                field.label,
                                !!field.isRequired && !inputs.hideRequiredMarkers,
                            ),
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
                                ViraFormFieldType.PlainPassword,
                            ].includes(field.type)
                                ? ViraInputType.Password
                                : field.type === ViraFormFieldType.Email
                                  ? ViraInputType.Email
                                  : ViraInputType.Default,
                        })}
                            ${field.testId ? testId(field.testId) : nothing}
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
                ${formFieldTemplates}
                <slot></slot>
            </form>
        `;
    },
});
