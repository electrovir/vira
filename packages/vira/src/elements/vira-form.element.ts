import {getObjectTypedEntries, type PartialWithUndefined} from '@augment-vir/common';
import {
    css,
    defineElementEvent,
    html,
    listen,
    nothing,
    testId,
    type HTMLTemplateResult,
} from 'element-vir';
import {viraFormCssVars} from '../styles/form-styles.js';
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
import {ViraTextArea} from './vira-text-area.element.js';

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
        /**
         * When `true`, all checkboxes in this form render horizontally.
         *
         * @default false
         */
        horizontalCheckboxes: boolean;
        /**
         * When `true`, all form field labels render to the left of their inputs instead of above
         * them.
         *
         * @default false
         */
        useHorizontalLabels: boolean;
        /**
         * When `true`, all fields in this form are prevented from user edits. Inputs, selects, and
         * text areas render their current value as plain text; checkboxes render disabled since
         * they have no native readonly mode.
         *
         * @default false
         */
        isReadonly: boolean;
    }>
>()({
    tagName: 'vira-form',
    state() {
        return {
            lastIsValid: false,
        };
    },
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

        .horizontal-fields {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0 10px;

            & th,
            & td {
                padding: 0;
            }

            & th {
                padding: 0 8px;
                vertical-align: middle;
                white-space: nowrap;
                font-weight: ${viraFormCssVars['vira-form-label-font-weight'].value};
                text-align: right;
            }

            & td {
                width: 100%;
                vertical-align: top;

                & > ${ViraCheckbox}, & > ${ViraInput}, & > ${ViraSelect}, & > ${ViraTextArea} {
                    width: 100%;
                }
            }
        }
    `,
    render({inputs, dispatch, events, state, updateState}) {
        const currentIsValid = areFormFieldsValid(inputs.fields);
        if (currentIsValid !== state.lastIsValid) {
            updateState({
                lastIsValid: currentIsValid,
            });
            dispatch(
                new events.validChange({
                    allFieldsAreValid: currentIsValid,
                }),
            );
        }

        function wrapFormField({
            fieldTemplate,
            label,
        }: Readonly<{
            fieldTemplate: HTMLTemplateResult;
            label: string | undefined;
        }>) {
            if (inputs.useHorizontalLabels) {
                return html`
                    <tr>
                        <th scope="row">${label}</th>
                        <td>${fieldTemplate}</td>
                    </tr>
                `;
            } else {
                return fieldTemplate;
            }
        }

        const formFieldTemplates = getObjectTypedEntries(inputs.fields).map(
            ([
                key,
                field,
            ]) => {
                const label = applyRequiredLabel(
                    field.label,
                    !!field.isRequired && !inputs.hideRequiredMarkers,
                );
                const isDisabled = !!(inputs.isDisabled || field.isDisabled);
                const childLabel = inputs.useHorizontalLabels ? undefined : label;
                const horizontalLabelAttributes =
                    inputs.useHorizontalLabels && label
                        ? {
                              'aria-label': label,
                          }
                        : {};

                if (field.isHidden) {
                    return nothing;
                } else if (field.type === ViraFormFieldType.Checkbox) {
                    return wrapFormField({
                        label,
                        fieldTemplate: html`
                            <${ViraCheckbox.assign({
                                value: field.value || false,
                                isDisabled: !!(isDisabled || inputs.isReadonly),
                                hasError: field.hasError,
                                useHorizontalLabel: inputs.horizontalCheckboxes,
                                fillWhenChecked: field.fillWhenChecked,
                                fillWhenUnchecked: field.fillWhenUnchecked,
                                label: childLabel,
                                ...(inputs.useHorizontalLabels && label
                                    ? {
                                          attributePassthrough: {
                                              'custom-checkbox': horizontalLabelAttributes,
                                          },
                                      }
                                    : {}),
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
                        `,
                    });
                } else if (field.type === ViraFormFieldType.Select) {
                    return wrapFormField({
                        label,
                        fieldTemplate: html`
                            <${ViraSelect.assign({
                                options: field.options,
                                value: field.value,
                                placeholder: field.placeholder,
                                disabled: isDisabled,
                                isReadonly: inputs.isReadonly,
                                label: childLabel,
                                hasError: field.hasError,
                                icon: field.icon,
                                ...(inputs.useHorizontalLabels && label
                                    ? {
                                          attributePassthrough: {
                                              select: horizontalLabelAttributes,
                                          },
                                      }
                                    : {}),
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
                        `,
                    });
                } else if (field.type === ViraFormFieldType.TextArea) {
                    return wrapFormField({
                        label,
                        fieldTemplate: html`
                            <${ViraTextArea.assign({
                                value: field.value || '',
                                disabled: isDisabled,
                                hasError: field.hasError,
                                isReadonly: inputs.isReadonly,
                                label: childLabel,
                                placeholder: field.placeholder,
                                rows: field.rows,
                                preventResize: field.preventResize,
                                attributePassthrough: horizontalLabelAttributes,
                            })}
                                ${field.testId ? testId(field.testId) : nothing}
                                ${listen(ViraTextArea.events.valueChange, (event) => {
                                    dispatch(
                                        new events.valueChange({
                                            key,
                                            ...field,
                                            value: event.detail,
                                        }),
                                    );
                                })}
                            ></${ViraTextArea}>
                        `,
                    });
                } else if (field.type === ViraFormFieldType.Number) {
                    return wrapFormField({
                        label,
                        fieldTemplate: html`
                            <${ViraInput.assign({
                                value: field.value?.toString() || '',
                                disabled: isDisabled,
                                allowedInputs: /\d/,
                                hasError: field.hasError,
                                icon: field.icon,
                                isReadonly: inputs.isReadonly,
                                label: childLabel,
                                placeholder: field.placeholder,
                                showClearButton: inputs.showClearButtons,
                                type: ViraInputType.Number,
                                attributePassthrough: {
                                    ...horizontalLabelAttributes,
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
                        `,
                    });
                } else {
                    return wrapFormField({
                        label,
                        fieldTemplate: html`
                            <${ViraInput.assign({
                                value: field.value || '',
                                disabled: isDisabled,
                                hasError: field.hasError,
                                icon: field.icon,
                                isReadonly: inputs.isReadonly,
                                label: childLabel,
                                placeholder: field.placeholder,
                                showClearButton: inputs.showClearButtons,
                                attributePassthrough: {
                                    ...horizontalLabelAttributes,
                                    ...(field.isUsername
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
                                              : {}),
                                },
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
                        `,
                    });
                }
            },
        );

        const formFieldsWrapper = inputs.useHorizontalLabels
            ? html`
                  <table class="horizontal-fields">
                      <tbody>${formFieldTemplates}</tbody>
                  </table>
              `
            : formFieldTemplates;

        return html`
            <form ${listen('submit', (event) => event.preventDefault())}>
                ${formFieldsWrapper}
                <slot></slot>
            </form>
        `;
    },
});
