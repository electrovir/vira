import {check} from '@augment-vir/assert';
import {getObjectTypedEntries, type PartialWithUndefined} from '@augment-vir/common';
import {
    classMap,
    css,
    defineElementEvent,
    html,
    listen,
    nothing,
    testId,
    type HtmlInterpolation,
    type HTMLTemplateResult,
} from 'element-vir';
import {
    dragReorderGhost,
    dragReorderHandle,
    dragReorderRows,
} from '../directives/drag-reorder.directive.js';
import {lucideIcons} from '../icons/lucide-icons.js';
import {viraFormCssVars} from '../styles/form-styles.js';
import {defineViraElement} from '../util/define-vira-element.js';
import {DragReorderManager, type DragReorderMove} from '../util/drag-reorder-manager.js';
import {
    applyRequiredLabel,
    areFormFieldsValid,
    moveFormFieldKey,
    ViraFormFieldType,
    type ViraFormField,
    type ViraFormFields,
} from '../util/vira-form-fields.js';
import {ViraCheckbox} from './vira-checkbox.element.js';
import {ViraDateInput} from './vira-date-input.element.js';
import {ViraDropdown} from './vira-dropdown.element.js';
import {ViraIcon} from './vira-icon.element.js';
import {ViraInput, ViraInputType} from './vira-input.element.js';
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
        /**
         * When `true`, each visible field gets a drag handle. Dropping a field emits
         * `fieldOrderChange` with every field key in its new order. The form does not reorder
         * `fields` itself: pass them back in the emitted order.
         *
         * @default false
         */
        isReorderable: boolean;
    }>
>()({
    tagName: 'vira-form',
    state() {
        return {
            lastIsValid: false,
            dragReorder: new DragReorderManager(),
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
        /** Every field key, hidden ones included, in the order the user dropped them. */
        fieldOrderChange: defineElementEvent<string[]>(),
    },
    testIds: [
        'dragHandle',
    ],
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

        .drag-ghost {
            opacity: 0.6;

            & .drop-above,
            & .drop-above > *,
            & .drop-below,
            & .drop-below > * {
                box-shadow: none;
            }

            & .horizontal-fields {
                border-spacing: 0;
                table-layout: fixed;
            }
        }

        .reorder-rows {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .reorder-row {
            display: flex;
            align-items: center;
            gap: 4px;

            & > :last-child {
                flex-grow: 1;
            }
        }

        .drag-handle {
            display: flex;
            cursor: grab;
            color: ${viraFormCssVars['vira-form-placeholder-color'].value};

            &:active {
                cursor: grabbing;
            }
        }

        div.drop-above,
        tr.drop-above > * {
            box-shadow: 0 -5px 0 0 ${viraFormCssVars['vira-form-focus-outline-color'].value};
        }

        div.drop-below,
        tr.drop-below > * {
            box-shadow: 0 5px 0 0 ${viraFormCssVars['vira-form-focus-outline-color'].value};
        }

        .horizontal-fields {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0 10px;

            & th,
            & td {
                padding: 0;
            }

            & .handle-cell {
                width: 0;
                vertical-align: middle;
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

                &
                    > ${ViraCheckbox},
                    &
                    > ${ViraDateInput},
                    &
                    > ${ViraDropdown},
                    &
                    > ${ViraInput},
                    &
                    > ${ViraTextArea} {
                    width: 100%;
                }
            }
        }
    `,
    render({inputs, dispatch, events, state, updateState, testIds}) {
        const currentIsValid = areFormFieldsValid(inputs.fields);
        if (currentIsValid !== state.lastIsValid) {
            updateState({
                lastIsValid: currentIsValid,
            });
            dispatch(
                new events.validChange({
                    detail: {
                        allFieldsAreValid: currentIsValid,
                    },
                }),
            );
        }

        const visibleKeys = getObjectTypedEntries(inputs.fields)
            .filter(
                ([
                    ,
                    field,
                ]) => !field.isHidden,
            )
            .map(([key]) => key);

        function dropField({fromIndex, toIndex}: Readonly<DragReorderMove>) {
            const movedKey = visibleKeys[fromIndex];
            if (movedKey == undefined) {
                return;
            }

            dispatch(
                new events.fieldOrderChange({
                    detail: moveFormFieldKey({
                        keys: Object.keys(inputs.fields),
                        movedKey,
                        beforeKey: visibleKeys[toIndex],
                    }),
                }),
            );
        }

        function wrapFormField({
            fieldTemplate,
            label,
            key,
        }: Readonly<{
            fieldTemplate: HTMLTemplateResult;
            label: HtmlInterpolation;
            key: string;
        }>) {
            const dropLine = state.dragReorder.readDropLine(visibleKeys.indexOf(key));
            const rowClasses = classMap({
                'reorder-row': !inputs.useHorizontalLabels,
                'drop-above': dropLine.isAbove,
                'drop-below': dropLine.isBelow,
            });
            const dragHandle = inputs.isReorderable
                ? html`
                      <div
                          class="drag-handle"
                          title="drag to reorder"
                          ${testId(testIds.dragHandle)}
                          ${dragReorderHandle(state.dragReorder)}
                      >
                          <${ViraIcon.assign({
                              icon: lucideIcons.GripVertical,
                          })}></${ViraIcon}>
                      </div>
                  `
                : nothing;

            if (inputs.useHorizontalLabels) {
                return html`
                    <tr class=${rowClasses}>
                        ${inputs.isReorderable
                            ? html`
                                  <td class="handle-cell">${dragHandle}</td>
                              `
                            : nothing}
                        <th scope="row">${label}</th>
                        <td>${fieldTemplate}</td>
                    </tr>
                `;
            } else if (inputs.isReorderable) {
                return html`
                    <div class=${rowClasses}>${dragHandle} ${fieldTemplate}</div>
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
                const isDisabled = !!(inputs.isDisabled || field.isDisabled);
                const showRequiredMarker = !!field.isRequired && !inputs.hideRequiredMarkers;

                if (field.isHidden) {
                    return nothing;
                } else if (field.type === ViraFormFieldType.Checkbox) {
                    const checkboxLabel = applyRequiredLabel(field.label, showRequiredMarker);
                    return wrapFormField({
                        key,
                        label: checkboxLabel,
                        fieldTemplate: html`
                            <${ViraCheckbox.assign({
                                value: field.value || false,
                                isDisabled: !!(isDisabled || inputs.isReadonly),
                                hasError: field.hasError,
                                useHorizontalLabel: inputs.horizontalCheckboxes,
                                fillWhenChecked: field.fillWhenChecked,
                                fillWhenUnchecked: field.fillWhenUnchecked,
                            })}
                                ${field.testId ? testId(field.testId) : nothing}
                                ${listen(ViraCheckbox.events.valueChange, (event) => {
                                    dispatch(
                                        new events.valueChange({
                                            detail: {
                                                key,
                                                ...field,
                                                value: event.detail,
                                            },
                                        }),
                                    );
                                })}
                            >
                                ${inputs.useHorizontalLabels
                                    ? nothing
                                    : html`
                                          <span
                                              slot=${ViraCheckbox.slotNames['vira-checkbox-label']}
                                          >
                                              ${checkboxLabel}
                                          </span>
                                      `}
                            </${ViraCheckbox}>
                        `,
                    });
                }

                const label = applyRequiredLabel(field.label, showRequiredMarker);
                const childLabel = inputs.useHorizontalLabels ? undefined : label;
                const horizontalLabelAttributes =
                    inputs.useHorizontalLabels && check.isString(label) && label
                        ? {
                              'aria-label': label,
                          }
                        : {};

                if (field.type === ViraFormFieldType.Select) {
                    return wrapFormField({
                        key,
                        label,
                        fieldTemplate: html`
                            <${ViraDropdown.assign({
                                options: field.options,
                                selected: field.value ? [field.value] : [],
                                placeholder: field.placeholder,
                                isDisabled,
                                isReadonly: inputs.isReadonly,
                                label: childLabel,
                                hasError: field.hasError,
                                icon: field.icon,
                                attributePassthrough: horizontalLabelAttributes,
                            })}
                                ${field.testId ? testId(field.testId) : nothing}
                                ${listen(ViraDropdown.events.selectedValuesChange, (event) => {
                                    dispatch(
                                        new events.valueChange({
                                            detail: {
                                                key,
                                                ...field,
                                                value: event.detail[0],
                                            },
                                        }),
                                    );
                                })}
                            ></${ViraDropdown}>
                        `,
                    });
                } else if (field.type === ViraFormFieldType.TextArea) {
                    return wrapFormField({
                        key,
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
                                            detail: {
                                                key,
                                                ...field,
                                                value: event.detail,
                                            },
                                        }),
                                    );
                                })}
                            ></${ViraTextArea}>
                        `,
                    });
                } else if (field.type === ViraFormFieldType.Number) {
                    return wrapFormField({
                        key,
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
                                    ...(field.min == undefined
                                        ? {}
                                        : {
                                              min: String(field.min),
                                          }),
                                    ...(field.max == undefined
                                        ? {}
                                        : {
                                              max: String(field.max),
                                          }),
                                    ...(field.step == undefined
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
                                            detail: {
                                                key,
                                                ...field,
                                                value: numericValue,
                                            },
                                        }),
                                    );
                                })}
                            ></${ViraInput}>
                        `,
                    });
                } else if (field.type === ViraFormFieldType.Date) {
                    return wrapFormField({
                        key,
                        label,
                        fieldTemplate: html`
                            <${ViraDateInput.assign({
                                value: field.value,
                                min: field.min,
                                max: field.max,
                                timezone: field.timezone,
                                showDateOnly: field.showDateOnly,
                                showTimeOnly: field.showTimeOnly,
                                isDisabled,
                                hasError: field.hasError,
                                isReadonly: inputs.isReadonly,
                                label: childLabel,
                            })}
                                ${field.testId ? testId(field.testId) : nothing}
                                ${listen(ViraDateInput.events.valueChange, (event) => {
                                    dispatch(
                                        new events.valueChange({
                                            detail: {
                                                key,
                                                ...field,
                                                value: event.detail,
                                            },
                                        }),
                                    );
                                })}
                            ></${ViraDateInput}>
                        `,
                    });
                } else {
                    return wrapFormField({
                        key,
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
                                            detail: {
                                                key,
                                                ...field,
                                                value: event.detail,
                                            },
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
                      <tbody ${dragReorderRows(state.dragReorder, dropField)}>
                          ${formFieldTemplates}
                      </tbody>
                  </table>
              `
            : inputs.isReorderable
              ? html`
                    <div class="reorder-rows" ${dragReorderRows(state.dragReorder, dropField)}>
                        ${formFieldTemplates}
                    </div>
                `
              : formFieldTemplates;

        const draggedKey =
            state.dragReorder.value.draggedIndex == undefined
                ? undefined
                : visibleKeys[state.dragReorder.value.draggedIndex];
        const draggedRow =
            draggedKey == undefined
                ? undefined
                : formFieldTemplates[Object.keys(inputs.fields).indexOf(draggedKey)];
        const dragGhost = draggedRow
            ? html`
                  <div class="drag-ghost" ${dragReorderGhost(state.dragReorder)}>
                      ${inputs.useHorizontalLabels
                          ? html`
                                <table class="horizontal-fields">
                                    <colgroup>
                                        ${state.dragReorder.value.draggedCellWidths.map(
                                            (cellWidth) => {
                                                return html`
                                                    <col
                                                        style=${css`
                                                            width: ${cellWidth}px;
                                                        `}
                                                    />
                                                `;
                                            },
                                        )}
                                    </colgroup>
                                    <tbody>${draggedRow}</tbody>
                                </table>
                            `
                          : draggedRow}
                  </div>
              `
            : nothing;

        return html`
            <form ${listen('submit', (event) => event.preventDefault())}>
                ${formFieldsWrapper}
                <slot></slot>
                ${dragGhost}
            </form>
        `;
    },
});
