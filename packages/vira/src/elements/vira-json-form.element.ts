import {assertWrap, check} from '@augment-vir/assert';
import {
    omitObjectKeys,
    wrapInTry,
    type JsonObject,
    type JsonValue,
    type PartialWithUndefined,
} from '@augment-vir/common';
import {css, defineElementEvent, html, listen, nothing, type HTMLTemplateResult} from 'element-vir';
import {Plus16Icon, X16Icon} from '../icons/index.js';
import {viraFontCssVars} from '../styles/font.js';
import {viraFormCssVars} from '../styles/form-styles.js';
import {ViraColorVariant, ViraEmphasis, ViraSize} from '../styles/form-variants.js';
import {defineViraElement} from '../util/define-vira-element.js';
import {
    allowsFreeformString,
    createDefaultForJsonType,
    createResolveContext,
    deleteValueAtPath,
    getAdditionalPropertiesSchema,
    getAllowedJsonTypes,
    getDefinedProperties,
    getItemSchema,
    getJsonType,
    getNewItemSchema,
    getPropertySchema,
    getRequiredProperties,
    getSchemaEnumValues,
    getSchemaTitle,
    getStringEnumValues,
    pathToKey,
    pickBranchForType,
    setValueAtPath,
    validateAgainstSchema,
    ViraJsonType,
    viraJsonTypeLabels,
    type SchemaResolveContext,
    type ViraJsonPath,
    type ViraJsonSchema,
} from '../util/vira-json-schema.js';
import {type ViraSelectOption} from '../util/vira-select-option.js';
import {ViraButton} from './vira-button.element.js';
import {ViraCheckbox} from './vira-checkbox.element.js';
import {ViraError} from './vira-error.element.js';
import {ViraInput, ViraInputType} from './vira-input.element.js';
import {ViraSelect} from './vira-select.element.js';
import {ViraTextArea} from './vira-text-area.element.js';

/**
 * Editing mode for a string field that offers both a fixed set of enum options and free-form text.
 *
 * @category Internal
 */
export enum ViraJsonStringMode {
    /** Pick from the schema's enum options via a dropdown. */
    Options = 'options',
    /** Enter an arbitrary string via a text input. */
    Custom = 'custom',
}

/**
 * An editor for arbitrary JSON values, optionally constrained by a standard JSON Schema
 * ({@link ViraJsonSchema}).
 *
 * @category Elements
 */
export const ViraJsonForm = defineViraElement<
    {
        value: JsonValue;
    } & PartialWithUndefined<{
        schema: Readonly<ViraJsonSchema>;
        isDisabled: boolean;
    }>
>()({
    tagName: 'vira-json-form',
    events: {
        valueChange: defineElementEvent<JsonValue>(),
    },
    state() {
        return {
            pendingKeys: {} as Readonly<Record<string, string>>,
            pendingTypes: {} as Readonly<Record<string, ViraJsonType>>,
            pendingArrayValues: {} as Readonly<Record<string, JsonValue>>,
            stringModes: {} as Readonly<Record<string, ViraJsonStringMode>>,
            showRaw: false,
            rawDraft: undefined as string | undefined,
            rawError: undefined as string | undefined,
        };
    },
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            gap: 10px;
            font-size: ${viraFormCssVars['vira-form-medium-text-size'].value};
            color: ${viraFormCssVars['vira-form-foreground-color'].value};
        }

        .json-toolbar {
            display: flex;
            justify-content: flex-end;
        }

        ${ViraTextArea}.json-raw-textarea {
            width: 100%;
            font-family: ${viraFontCssVars['vira-monospace'].value};
            font-size: ${viraFormCssVars['vira-form-small-text-size'].value};
        }

        .json-validation-errors {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .json-validation-errors ul {
            margin: 0;
            padding-left: 20px;
        }

        .json-group {
            border-collapse: separate;
            border-spacing: 0;
            width: 100%;
            box-sizing: border-box;
        }

        .json-group-nested {
            margin-top: 4px;
            padding-left: 12px;
            padding-bottom: 8px;
            border-left: 2px solid ${viraFormCssVars['vira-form-border-color'].value};
            border-bottom: 2px solid ${viraFormCssVars['vira-form-border-color'].value};
        }

        .json-row-primitive > td {
            padding: 4px 8px 4px 0;
            vertical-align: middle;
        }

        .json-row-primitive > td:last-child {
            padding-right: 0;
        }

        td.json-row-label {
            text-align: left;
            min-width: 80px;
            white-space: nowrap;
            font-weight: ${viraFormCssVars['vira-form-label-font-weight'].value};
        }

        td.json-row-editor {
            width: 100%;
        }

        td.json-row-editor > * {
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
        }

        td.json-row-delete {
            width: 24px;
            text-align: center;
        }

        .json-row-nested > td {
            padding: 4px 0;
        }

        .json-row-nested-header {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 4px;
        }

        .json-row-nested-header > .json-row-label {
            flex-grow: 1;
            font-weight: ${viraFormCssVars['vira-form-label-font-weight'].value};
            word-break: break-word;
        }

        .json-type-tag {
            font-weight: ${viraFontCssVars['vira-font-weight-normal'].value};
            color: ${viraFormCssVars['vira-form-secondary-body-foreground'].value};
        }

        .json-value-with-switcher {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .json-value-with-switcher > .json-value-editor-slot {
            flex-grow: 1;
            min-width: 0;
            display: flex;
        }

        .json-value-with-switcher > .json-value-editor-slot > * {
            flex-grow: 1;
            min-width: 0;
        }

        .json-value-with-switcher > ${ViraSelect} {
            flex-shrink: 0;
            width: 130px;
        }

        .json-add-row {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 6px;
            flex-wrap: wrap;
            padding: 8px 0;
        }

        .json-add-row ${ViraInput}, .json-add-row ${ViraSelect} {
            width: 160px;
        }

        .json-add-row .json-add-value-input {
            flex-grow: 1;
            width: auto;
            min-width: 160px;
        }

        .json-null-indicator {
            padding: 6px 10px;
            color: ${viraFormCssVars['vira-form-placeholder-color'].value};
            font-style: italic;
        }

        .json-empty-note {
            display: block;
            padding: 4px 0;
            color: ${viraFormCssVars['vira-form-placeholder-color'].value};
            font-style: italic;
            font-size: ${viraFormCssVars['vira-form-small-text-size'].value};
        }
    `,
    render({inputs, state, dispatch, events, updateState, host}) {
        const isDisabled = !!inputs.isDisabled;
        const resolveContext: SchemaResolveContext = createResolveContext(inputs.schema);

        function jsonPrimitiveToString(
            entry: string | number | boolean | null | undefined,
        ): string {
            return entry == undefined ? 'null' : String(entry);
        }

        function emitRoot(newRoot: JsonValue) {
            dispatch(new events.valueChange(newRoot));
        }

        function emitReplaceAt(path: ViraJsonPath, newValue: JsonValue) {
            emitRoot(
                setValueAtPath({
                    root: inputs.value,
                    path,
                    newValue,
                }),
            );
        }

        function emitDeleteAt(path: ViraJsonPath) {
            emitRoot(deleteValueAtPath(inputs.value, path));
        }

        function getPendingType(
            pathKey: string,
            allowedTypes: ReadonlyArray<ViraJsonType>,
        ): ViraJsonType {
            const current = state.pendingTypes[pathKey];
            if (current && allowedTypes.includes(current)) {
                return current;
            }
            return allowedTypes[0] ?? ViraJsonType.String;
        }

        function setPendingType(pathKey: string, type: ViraJsonType) {
            updateState({
                pendingTypes: {
                    ...state.pendingTypes,
                    [pathKey]: type,
                },
            });
        }

        function setPendingKey({pathKey, key}: Readonly<{pathKey: string; key: string}>) {
            updateState({
                pendingKeys: {
                    ...state.pendingKeys,
                    [pathKey]: key,
                },
            });
        }

        function getPendingArrayValue(pathKey: string, fallback: JsonValue): JsonValue {
            const stored = state.pendingArrayValues[pathKey];
            return stored === undefined ? fallback : stored;
        }

        function setPendingArrayValue(pathKey: string, value: JsonValue) {
            updateState({
                pendingArrayValues: {
                    ...state.pendingArrayValues,
                    [pathKey]: value,
                },
            });
        }

        function getStringMode({
            pathKey,
            value,
            enumValues,
        }: Readonly<{
            pathKey: string;
            value: string;
            enumValues: ReadonlyArray<string>;
        }>): ViraJsonStringMode {
            const stored = state.stringModes[pathKey];
            if (stored) {
                return stored;
            }
            return enumValues.includes(value)
                ? ViraJsonStringMode.Options
                : ViraJsonStringMode.Custom;
        }

        function setStringMode(pathKey: string, mode: ViraJsonStringMode) {
            updateState({
                stringModes: {
                    ...state.stringModes,
                    [pathKey]: mode,
                },
            });
        }

        function clearPending(pathKey: string) {
            updateState({
                pendingKeys: omitObjectKeys(state.pendingKeys, [pathKey]),
                pendingTypes: omitObjectKeys(state.pendingTypes, [pathKey]),
                pendingArrayValues: omitObjectKeys(state.pendingArrayValues, [pathKey]),
            });
        }

        function renderDeleteButton(onDelete: () => void): HTMLTemplateResult {
            return html`
                <${ViraButton.assign({
                    icon: X16Icon,
                    buttonEmphasis: ViraEmphasis.Subtle,
                    color: ViraColorVariant.Danger,
                    buttonSize: ViraSize.Small,
                })}
                    title="Remove"
                    ${listen('click', onDelete)}
                ></${ViraButton}>
            `;
        }

        function renderPrimitive(
            path: ViraJsonPath,
            value: JsonValue,
            schema: ViraJsonSchema | undefined,
        ): HTMLTemplateResult {
            const type = getJsonType(value);
            const enumValues = getSchemaEnumValues(schema, resolveContext);

            if (enumValues && enumValues.length > 0) {
                const options: ReadonlyArray<ViraSelectOption> = enumValues.map((entry) => {
                    const asString = jsonPrimitiveToString(entry as never);
                    return {
                        value: asString,
                        label: asString,
                    };
                });
                const isPrimitive =
                    value == undefined ||
                    check.isString(value) ||
                    check.isNumber(value) ||
                    check.isBoolean(value);
                return html`
                    <${ViraSelect.assign({
                        options,
                        value: isPrimitive ? jsonPrimitiveToString(value as never) : undefined,
                        disabled: isDisabled,
                    })}
                        ${listen(ViraSelect.events.valueChange, (event) => {
                            const selected = enumValues.find(
                                (entry) => jsonPrimitiveToString(entry as never) === event.detail,
                            );
                            emitReplaceAt(path, selected ?? event.detail);
                        })}
                    ></${ViraSelect}>
                `;
            } else if (type === ViraJsonType.Boolean) {
                return html`
                    <${ViraCheckbox.assign({
                        value: value === true,
                        isDisabled,
                    })}
                        ${listen(ViraCheckbox.events.valueChange, (event) => {
                            emitReplaceAt(path, event.detail);
                        })}
                    ></${ViraCheckbox}>
                `;
            } else if (type === ViraJsonType.Number || type === ViraJsonType.Integer) {
                const schemaAllowedTypes = getAllowedJsonTypes(schema, resolveContext);
                const isIntegerOnly =
                    schemaAllowedTypes.length === 1 &&
                    schemaAllowedTypes[0] === ViraJsonType.Integer;
                return html`
                    <${ViraInput.assign({
                        type: ViraInputType.Number,
                        value: check.isNumber(value) ? String(value) : '',
                        disabled: isDisabled,
                        allowedInputs: isIntegerOnly ? /[\d-]/ : /[\d.-]/,
                    })}
                        ${listen(ViraInput.events.valueChange, (event) => {
                            const text = event.detail;
                            const parsed = text === '' ? 0 : Number(text);
                            const clean = Number.isFinite(parsed) ? parsed : 0;
                            emitReplaceAt(path, isIntegerOnly ? Math.trunc(clean) : clean);
                        })}
                    ></${ViraInput}>
                `;
            } else if (type === ViraJsonType.Null) {
                return html`
                    <span class="json-null-indicator">null</span>
                `;
            } else {
                return html`
                    <${ViraInput.assign({
                        value: check.isString(value) ? value : '',
                        disabled: isDisabled,
                    })}
                        ${listen(ViraInput.events.valueChange, (event) => {
                            emitReplaceAt(path, event.detail);
                        })}
                    ></${ViraInput}>
                `;
            }
        }

        function renderInlineValueEditor(
            type: ViraJsonType,
            currentValue: JsonValue,
            onChange: (value: JsonValue) => void,
        ): HTMLTemplateResult | typeof nothing {
            if (type === ViraJsonType.String) {
                const text = check.isString(currentValue) ? currentValue : '';
                return html`
                    <${ViraInput.assign({
                        value: text,
                        placeholder: 'new item value',
                    })}
                        class="json-add-value-input"
                        ${listen(ViraInput.events.valueChange, (event) => {
                            onChange(event.detail);
                        })}
                    ></${ViraInput}>
                `;
            } else if (type === ViraJsonType.Number || type === ViraJsonType.Integer) {
                const isIntegerOnly = type === ViraJsonType.Integer;
                const numText = check.isNumber(currentValue) ? String(currentValue) : '';
                return html`
                    <${ViraInput.assign({
                        type: ViraInputType.Number,
                        value: numText,
                        placeholder: 'new item value',
                        allowedInputs: isIntegerOnly ? /[\d-]/ : /[\d.-]/,
                    })}
                        class="json-add-value-input"
                        ${listen(ViraInput.events.valueChange, (event) => {
                            const text = event.detail;
                            const parsed = text === '' ? 0 : Number(text);
                            const clean = Number.isFinite(parsed) ? parsed : 0;
                            onChange(isIntegerOnly ? Math.trunc(clean) : clean);
                        })}
                    ></${ViraInput}>
                `;
            } else if (type === ViraJsonType.Boolean) {
                return html`
                    <${ViraCheckbox.assign({
                        value: currentValue === true,
                    })}
                        ${listen(ViraCheckbox.events.valueChange, (event) => {
                            onChange(event.detail);
                        })}
                    ></${ViraCheckbox}>
                `;
            } else {
                return nothing;
            }
        }

        function renderPlusButton({
            isAddDisabled,
            tooltip,
            onClick,
        }: {
            isAddDisabled: boolean;
            tooltip: string;
            onClick: () => void;
        }): HTMLTemplateResult {
            return html`
                <${ViraButton.assign({
                    icon: Plus16Icon,
                    color: ViraColorVariant.Positive,
                    buttonSize: ViraSize.Small,
                    isDisabled: isAddDisabled,
                })}
                    title=${tooltip}
                    ${listen('click', () => {
                        if (isAddDisabled) {
                            return;
                        }
                        onClick();
                    })}
                ></${ViraButton}>
            `;
        }

        function renderObjectAddControl({
            pathKey,
            allowedTypes,
            canAdd,
            disabledReason,
            onAdd,
        }: {
            pathKey: string;
            allowedTypes: ReadonlyArray<ViraJsonType>;
            canAdd: boolean;
            disabledReason: string;
            onAdd: (type: ViraJsonType) => void;
        }): HTMLTemplateResult | typeof nothing {
            if (allowedTypes.length === 0) {
                return nothing;
            }
            const isAddDisabled = !canAdd;
            if (allowedTypes.length === 1) {
                const onlyType = assertWrap.isDefined(allowedTypes[0]);
                return renderPlusButton({
                    isAddDisabled,
                    tooltip: isAddDisabled ? disabledReason : `Add ${viraJsonTypeLabels[onlyType]}`,
                    onClick: () => onAdd(onlyType),
                });
            }
            const selectedType = getPendingType(pathKey, allowedTypes);
            const options: ReadonlyArray<ViraSelectOption> = allowedTypes.map((type) => {
                return {
                    value: type,
                    label: viraJsonTypeLabels[type],
                };
            });
            return html`
                <${ViraSelect.assign({
                    options,
                    value: selectedType,
                })}
                    ${listen(ViraSelect.events.valueChange, (event) => {
                        setPendingType(pathKey, event.detail as ViraJsonType);
                    })}
                ></${ViraSelect}>
                ${renderPlusButton({
                    isAddDisabled,
                    tooltip: isAddDisabled
                        ? disabledReason
                        : `Add ${viraJsonTypeLabels[selectedType]}`,
                    onClick: () => onAdd(selectedType),
                })}
            `;
        }

        function renderArrayAddControl({
            pathKey,
            allowedTypes,
            onAdd,
        }: {
            pathKey: string;
            allowedTypes: ReadonlyArray<ViraJsonType>;
            onAdd: (newValue: JsonValue) => void;
        }): HTMLTemplateResult | typeof nothing {
            if (allowedTypes.length === 0) {
                return nothing;
            } else if (allowedTypes.length === 1) {
                const onlyType = assertWrap.isDefined(allowedTypes[0]);
                const isPrimitivePrimitive =
                    onlyType === ViraJsonType.String ||
                    onlyType === ViraJsonType.Number ||
                    onlyType === ViraJsonType.Integer ||
                    onlyType === ViraJsonType.Boolean;

                if (!isPrimitivePrimitive) {
                    return renderPlusButton({
                        isAddDisabled: false,
                        tooltip: `Add ${viraJsonTypeLabels[onlyType]}`,
                        onClick: () => onAdd(createDefaultForJsonType(onlyType)),
                    });
                }

                const fallback = createDefaultForJsonType(onlyType);
                const pendingValue = getPendingArrayValue(pathKey, fallback);
                const inlineEditor = renderInlineValueEditor(onlyType, pendingValue, (value) =>
                    setPendingArrayValue(pathKey, value),
                );
                return html`
                    ${inlineEditor}
                    ${renderPlusButton({
                        isAddDisabled: false,
                        tooltip: `Add ${viraJsonTypeLabels[onlyType]}`,
                        onClick: () => {
                            onAdd(pendingValue);
                            clearPending(pathKey);
                        },
                    })}
                `;
            } else {
                const selectedType = getPendingType(pathKey, allowedTypes);
                const options: ReadonlyArray<ViraSelectOption> = allowedTypes.map((type) => {
                    return {
                        value: type,
                        label: viraJsonTypeLabels[type],
                    };
                });
                return html`
                    <${ViraSelect.assign({
                        options,
                        value: selectedType,
                    })}
                        ${listen(ViraSelect.events.valueChange, (event) => {
                            setPendingType(pathKey, event.detail as ViraJsonType);
                        })}
                    ></${ViraSelect}>
                    ${renderPlusButton({
                        isAddDisabled: false,
                        tooltip: `Add ${viraJsonTypeLabels[selectedType]}`,
                        onClick: () => onAdd(createDefaultForJsonType(selectedType)),
                    })}
                `;
            }
        }

        function getNestedTypeLabel(schema: ViraJsonSchema | undefined, value: JsonValue): string {
            const concreteType = getJsonType(value);
            const narrowedSchema = pickBranchForType(schema, concreteType, resolveContext);
            return (
                getSchemaTitle(narrowedSchema, resolveContext) || viraJsonTypeLabels[concreteType]
            );
        }

        function renderObjectGroup(
            path: ViraJsonPath,
            value: JsonObject,
            schema: ViraJsonSchema | undefined,
        ): HTMLTemplateResult {
            const pathKey = pathToKey(path);
            const isRoot = path.length === 0;
            const requiredKeys = new Set(getRequiredProperties(schema, resolveContext));
            const definedProperties = getDefinedProperties(schema, resolveContext);
            const definedKeys = new Set(Object.keys(definedProperties));
            const presentKeys = Object.keys(value);
            const additional = getAdditionalPropertiesSchema(schema, resolveContext);

            const rowTemplates = presentKeys.map((key) => {
                const childSchema = getPropertySchema(schema, key, resolveContext);
                const isRequired = requiredKeys.has(key);
                const isSchemaDefined = definedKeys.has(key);
                const canDelete = !isDisabled && !isRequired;
                const childValue: JsonValue = value[key] ?? null;
                const childType = getJsonType(childValue);
                const isChildNested =
                    childType === ViraJsonType.Object || childType === ViraJsonType.Array;
                const childPath: ViraJsonPath = [
                    ...path,
                    key,
                ];
                const childOnDelete = canDelete
                    ? () => {
                          emitDeleteAt(childPath);
                          if (!isSchemaDefined) {
                              clearPending(pathKey);
                          }
                      }
                    : undefined;

                if (isChildNested) {
                    return html`
                        <tr class="json-row-nested">
                            <td colspan="3">
                                <div class="json-row-nested-header">
                                    <span class="json-row-label">
                                        ${key}${isRequired ? '*' : ''}
                                        <span class="json-type-tag">
                                            : ${getNestedTypeLabel(childSchema, childValue)}
                                        </span>
                                    </span>
                                    ${childOnDelete ? renderDeleteButton(childOnDelete) : nothing}
                                </div>
                                ${renderValue(childPath, childValue, childSchema)}
                            </td>
                        </tr>
                    `;
                }

                return html`
                    <tr class="json-row-primitive">
                        <td class="json-row-label">${key}${isRequired ? '*' : ''}</td>
                        <td class="json-row-editor">
                            ${renderValue(childPath, childValue, childSchema)}
                        </td>
                        <td class="json-row-delete">
                            ${childOnDelete ? renderDeleteButton(childOnDelete) : nothing}
                        </td>
                    </tr>
                `;
            });

            const missingDefinedKeys = [...definedKeys].filter((key) => !(key in value));
            const suggestedKeyButtons = isDisabled
                ? []
                : missingDefinedKeys.map((key) => {
                      const childSchema = definedProperties[key];
                      const childAllowed = getAllowedJsonTypes(childSchema, resolveContext);
                      const addType = childAllowed[0] ?? ViraJsonType.String;
                      return html`
                          <${ViraButton.assign({
                              text: `"${key}"`,
                              icon: Plus16Icon,
                              color: ViraColorVariant.Positive,
                              buttonSize: ViraSize.Small,
                          })}
                              ${listen('click', () => {
                                  emitReplaceAt(
                                      [
                                          ...path,
                                          key,
                                      ],
                                      createDefaultForJsonType(addType),
                                  );
                              })}
                          ></${ViraButton}>
                      `;
                  });

            const pendingKey = state.pendingKeys[pathKey] ?? '';
            const trimmedPendingKey = pendingKey.trim();
            const canAddArbitraryField = !!trimmedPendingKey && !(trimmedPendingKey in value);
            const additionalAllowedTypes = additional.allowed
                ? getAllowedJsonTypes(additional.schema, resolveContext)
                : [];

            const arbitraryAddDisabledReason = trimmedPendingKey
                ? `Field "${trimmedPendingKey}" already exists.`
                : 'Enter a field name to add.';

            const arbitraryAddRow =
                additional.allowed && !isDisabled
                    ? html`
                          <tr>
                              <td colspan="3">
                                  <div class="json-add-row">
                                      <${ViraInput.assign({
                                          value: pendingKey,
                                          placeholder: 'new field name',
                                      })}
                                          ${listen(ViraInput.events.valueChange, (event) => {
                                              setPendingKey({
                                                  pathKey,
                                                  key: event.detail,
                                              });
                                          })}
                                      ></${ViraInput}>
                                      ${renderObjectAddControl({
                                          pathKey,
                                          allowedTypes: additionalAllowedTypes,
                                          canAdd: canAddArbitraryField,
                                          disabledReason: arbitraryAddDisabledReason,
                                          onAdd: (type) => {
                                              if (!canAddArbitraryField) {
                                                  return;
                                              }
                                              emitReplaceAt(
                                                  [
                                                      ...path,
                                                      trimmedPendingKey,
                                                  ],
                                                  createDefaultForJsonType(type),
                                              );
                                              clearPending(pathKey);
                                          },
                                      })}
                                  </div>
                              </td>
                          </tr>
                      `
                    : nothing;

            return html`
                <table class="json-group ${isRoot ? '' : 'json-group-nested'}">
                    <tbody>
                        ${rowTemplates.length === 0 && suggestedKeyButtons.length === 0
                            ? html`
                                  <tr>
                                      <td colspan="3">
                                          <span class="json-empty-note">(empty object)</span>
                                      </td>
                                  </tr>
                              `
                            : nothing}
                        ${rowTemplates}
                        ${suggestedKeyButtons.length > 0
                            ? html`
                                  <tr>
                                      <td colspan="3">
                                          <div class="json-add-row">${suggestedKeyButtons}</div>
                                      </td>
                                  </tr>
                              `
                            : nothing}
                        ${arbitraryAddRow}
                    </tbody>
                </table>
            `;
        }

        function renderArrayGroup(
            path: ViraJsonPath,
            value: ReadonlyArray<JsonValue>,
            schema: ViraJsonSchema | undefined,
        ): HTMLTemplateResult {
            const pathKey = pathToKey(path);
            const isRoot = path.length === 0;
            const newItemSchema = getNewItemSchema(schema, value.length, resolveContext);
            const allowedItemTypes = getAllowedJsonTypes(newItemSchema, resolveContext);

            const rowTemplates = value.map((item, index) => {
                const childSchema = getItemSchema(schema, index, resolveContext);
                const childType = getJsonType(item);
                const isChildNested =
                    childType === ViraJsonType.Object || childType === ViraJsonType.Array;
                const childPath: ViraJsonPath = [
                    ...path,
                    index,
                ];
                const childOnDelete = isDisabled
                    ? undefined
                    : () => {
                          emitDeleteAt(childPath);
                      };

                if (isChildNested) {
                    return html`
                        <tr class="json-row-nested">
                            <td colspan="3">
                                <div class="json-row-nested-header">
                                    <span class="json-row-label">
                                        [${index}]
                                        <span class="json-type-tag">
                                            : ${getNestedTypeLabel(childSchema, item)}
                                        </span>
                                    </span>
                                    ${childOnDelete ? renderDeleteButton(childOnDelete) : nothing}
                                </div>
                                ${renderValue(childPath, item, childSchema)}
                            </td>
                        </tr>
                    `;
                }

                return html`
                    <tr class="json-row-primitive">
                        <td class="json-row-label">[${index}]</td>
                        <td class="json-row-editor">
                            ${renderValue(childPath, item, childSchema)}
                        </td>
                        <td class="json-row-delete">
                            ${childOnDelete ? renderDeleteButton(childOnDelete) : nothing}
                        </td>
                    </tr>
                `;
            });

            const addRow = isDisabled
                ? nothing
                : html`
                      <tr>
                          <td colspan="3">
                              <div class="json-add-row">
                                  ${renderArrayAddControl({
                                      pathKey,
                                      allowedTypes: allowedItemTypes,
                                      onAdd: (newValue) => {
                                          emitReplaceAt(
                                              [
                                                  ...path,
                                                  value.length,
                                              ],
                                              newValue,
                                          );
                                      },
                                  })}
                              </div>
                          </td>
                      </tr>
                  `;

            return html`
                <table class="json-group ${isRoot ? '' : 'json-group-nested'}">
                    <tbody>
                        ${rowTemplates.length === 0
                            ? html`
                                  <tr>
                                      <td colspan="3">
                                          <span class="json-empty-note">(empty array)</span>
                                      </td>
                                  </tr>
                              `
                            : nothing}
                        ${rowTemplates} ${addRow}
                    </tbody>
                </table>
            `;
        }

        function renderStringEnumOrRaw(
            path: ViraJsonPath,
            value: string,
            enumValues: ReadonlyArray<string>,
        ): HTMLTemplateResult {
            const pathKey = pathToKey(path);
            const mode = getStringMode({
                pathKey,
                value,
                enumValues,
            });

            const editor =
                mode === ViraJsonStringMode.Options
                    ? html`
                          <${ViraSelect.assign({
                              options: enumValues.map((entry) => {
                                  return {
                                      value: entry,
                                      label: entry,
                                  };
                              }),
                              value: enumValues.includes(value) ? value : undefined,
                              disabled: isDisabled,
                          })}
                              ${listen(ViraSelect.events.valueChange, (event) => {
                                  emitReplaceAt(path, event.detail);
                              })}
                          ></${ViraSelect}>
                      `
                    : html`
                          <${ViraInput.assign({
                              value,
                              disabled: isDisabled,
                          })}
                              ${listen(ViraInput.events.valueChange, (event) => {
                                  emitReplaceAt(path, event.detail);
                              })}
                          ></${ViraInput}>
                      `;

            if (isDisabled) {
                return editor;
            }

            const modeOptions: ReadonlyArray<ViraSelectOption> = [
                {
                    value: ViraJsonStringMode.Options,
                    label: 'Options',
                },
                {
                    value: ViraJsonStringMode.Custom,
                    label: 'Custom',
                },
            ];

            return html`
                <div class="json-value-with-switcher">
                    <span class="json-value-editor-slot">${editor}</span>
                    <${ViraSelect.assign({
                        options: modeOptions,
                        value: mode,
                    })}
                        title="Choose from options or enter a custom value"
                        ${listen(ViraSelect.events.valueChange, (event) => {
                            setStringMode(pathKey, event.detail as ViraJsonStringMode);
                        })}
                    ></${ViraSelect}>
                </div>
            `;
        }

        function renderValue(
            path: ViraJsonPath,
            value: JsonValue,
            schema: ViraJsonSchema | undefined,
        ): HTMLTemplateResult {
            const concreteType = getJsonType(value);
            const allowedTypes = getAllowedJsonTypes(schema, resolveContext);
            const narrowedSchema = pickBranchForType(schema, concreteType, resolveContext);

            if (check.isArray(value)) {
                return renderArrayGroup(path, value, narrowedSchema);
            } else if (check.isObject(value)) {
                return renderObjectGroup(path, value, narrowedSchema);
            }

            /**
             * When a string field constrains values to an enum but also permits free-form strings,
             * offer both: an options dropdown plus a switcher to toggle to raw text entry.
             */
            const isStringOnlyField =
                allowedTypes.length === 1 && allowedTypes[0] === ViraJsonType.String;
            const stringEnumValues = isStringOnlyField
                ? getStringEnumValues(schema, resolveContext)
                : [];
            if (
                check.isString(value) &&
                stringEnumValues.length > 0 &&
                allowsFreeformString(schema, resolveContext)
            ) {
                return renderStringEnumOrRaw(path, value, stringEnumValues);
            }

            const editor = renderPrimitive(path, value, narrowedSchema);
            const showSwitcher =
                !isDisabled &&
                allowedTypes.length > 1 &&
                !allowedTypes.includes(ViraJsonType.Object) &&
                !allowedTypes.includes(ViraJsonType.Array);

            if (!showSwitcher) {
                return editor;
            }

            const switcherSelected = allowedTypes.includes(concreteType)
                ? concreteType
                : (allowedTypes[0] ?? concreteType);
            const switcherOptions: ReadonlyArray<ViraSelectOption> = allowedTypes.map((type) => {
                return {
                    value: type,
                    label: viraJsonTypeLabels[type],
                };
            });
            return html`
                <div class="json-value-with-switcher">
                    <span class="json-value-editor-slot">${editor}</span>
                    <${ViraSelect.assign({
                        options: switcherOptions,
                        value: switcherSelected,
                    })}
                        title="Change type"
                        ${listen(ViraSelect.events.valueChange, (event) => {
                            const newType = event.detail as ViraJsonType;
                            emitReplaceAt(path, createDefaultForJsonType(newType));
                        })}
                    ></${ViraSelect}>
                </div>
            `;
        }

        const toolbarTemplate = html`
            <div class="json-toolbar">
                <${ViraButton.assign({
                    text: state.showRaw ? 'Rich' : 'Raw',
                    buttonEmphasis: ViraEmphasis.Subtle,
                    color: ViraColorVariant.Neutral,
                    buttonSize: ViraSize.Small,
                })}
                    title=${state.showRaw ? 'Show rich editor' : 'Show raw JSON'}
                    ${listen('click', () => {
                        const goingToRaw = !state.showRaw;
                        host.style.minWidth = goingToRaw ? `${host.offsetWidth}px` : '';
                        updateState({
                            showRaw: goingToRaw,
                            rawDraft: undefined,
                            rawError: undefined,
                        });
                    })}
                ></${ViraButton}>
            </div>
        `;

        if (state.showRaw) {
            const rawText = state.rawDraft ?? JSON.stringify(inputs.value, undefined, 4);
            return html`
                ${toolbarTemplate}
                <${ViraTextArea.assign({
                    value: rawText,
                    disabled: isDisabled,
                    disableBrowserHelps: true,
                    rows: 12,
                })}
                    class="json-raw-textarea"
                    ${listen(ViraTextArea.events.valueChange, (event) => {
                        const text = event.detail;
                        const parsed = wrapInTry(() => JSON.parse(text) as JsonValue);
                        if (parsed instanceof Error) {
                            updateState({
                                rawDraft: text,
                                rawError: parsed.message,
                            });
                        } else {
                            updateState({
                                rawDraft: text,
                                rawError: undefined,
                            });
                            emitRoot(parsed);
                        }
                    })}
                ></${ViraTextArea}>
                ${state.rawError
                    ? html`
                          <${ViraError}>${state.rawError}</${ViraError}>
                      `
                    : nothing}
            `;
        }

        const validationErrors = validateAgainstSchema(inputs.value, inputs.schema);
        if (validationErrors.length > 0) {
            return html`
                ${toolbarTemplate}
                <${ViraError}>
                    <div class="json-validation-errors">
                        <div>Value does not match schema:</div>
                        <ul>
                            ${validationErrors.map(
                                (errorMessage) => html`
                                    <li>${errorMessage}</li>
                                `,
                            )}
                        </ul>
                    </div>
                </${ViraError}>
            `;
        }

        return html`
            ${toolbarTemplate} ${renderValue([], inputs.value, inputs.schema)}
        `;
    },
});
