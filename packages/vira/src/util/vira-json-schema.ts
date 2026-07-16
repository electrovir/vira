import {assertWrap, check} from '@augment-vir/assert';
import {omitObjectKeys, removeDuplicates, removePrefix} from '@augment-vir/common';
import {type JSONSchema} from 'json-schema-to-ts';
import {type JsonValue} from 'type-fest';

/**
 * The JSON Schema type used by `ViraJsonForm`. Re-exported from `json-schema-to-ts` so that callers
 * can pass standard JSON Schema objects.
 *
 * @category Internal
 */
export type ViraJsonSchema = JSONSchema;

/**
 * A non-boolean JSON Schema object. Boolean schemas (`true` / `false`) are valid JSON Schemas but
 * don't constrain the editor in useful ways, so we normalize them away during traversal.
 *
 * @category Internal
 */
export type ViraJsonSchemaObject = Exclude<ViraJsonSchema, boolean>;

/**
 * The JSON types supported by `ViraJsonForm`.
 *
 * @category Internal
 */
export enum ViraJsonType {
    String = 'string',
    Number = 'number',
    Integer = 'integer',
    Boolean = 'boolean',
    Null = 'null',
    Object = 'object',
    Array = 'array',
}

/**
 * Human-friendly labels for each {@link ViraJsonType}.
 *
 * @category Internal
 */
export const viraJsonTypeLabels: Readonly<Record<ViraJsonType, string>> = {
    [ViraJsonType.String]: 'string',
    [ViraJsonType.Number]: 'number',
    [ViraJsonType.Integer]: 'integer',
    [ViraJsonType.Boolean]: 'boolean',
    [ViraJsonType.Null]: 'null',
    [ViraJsonType.Object]: 'object',
    [ViraJsonType.Array]: 'array',
};

const allJsonTypes: ReadonlyArray<ViraJsonType> = [
    ViraJsonType.String,
    ViraJsonType.Number,
    ViraJsonType.Integer,
    ViraJsonType.Boolean,
    ViraJsonType.Null,
    ViraJsonType.Object,
    ViraJsonType.Array,
];

/**
 * Classifies a JSON value's runtime type. Note that {@link ViraJsonType.Integer} is never returned;
 * it only appears in schemas. All numbers (whole or fractional) classify as
 * {@link ViraJsonType.Number}, since JSON has no separate integer type at runtime.
 *
 * @category Internal
 */
export function getJsonType(value: JsonValue | undefined): ViraJsonType {
    if (value === null) {
        return ViraJsonType.Null;
    } else if (check.isArray(value)) {
        return ViraJsonType.Array;
    } else if (check.isObject(value)) {
        return ViraJsonType.Object;
    } else if (check.isBoolean(value)) {
        return ViraJsonType.Boolean;
    } else if (check.isNumber(value)) {
        return ViraJsonType.Number;
    } else {
        return ViraJsonType.String;
    }
}

/**
 * Normalizes a schema to a non-boolean object form. `true` becomes an unconstrained schema (`{}`),
 * `false` becomes `undefined` (nothing is allowed; treated as "no schema available").
 *
 * @category Internal
 */
export function normalizeSchema(
    schema: ViraJsonSchema | undefined,
): ViraJsonSchemaObject | undefined {
    if (schema === undefined || schema === false) {
        return undefined;
    } else if (schema === true) {
        return {};
    }
    return schema;
}

function jsonTypeFromSchemaType(type: string): ViraJsonType | undefined {
    if (allJsonTypes.includes(type as ViraJsonType)) {
        return type as ViraJsonType;
    }
    return undefined;
}

/**
 * Context used while resolving `$ref` entries against a root schema's `$defs` (or `definitions`)
 * map. A stack of seen refs prevents infinite recursion from cyclical schemas.
 *
 * @category Internal
 */
export type SchemaResolveContext = {
    root: ViraJsonSchemaObject | undefined;
    seenRefs: ReadonlySet<string>;
};

/** @category Internal */
export function createResolveContext(schema: ViraJsonSchema | undefined): SchemaResolveContext {
    return {
        root: normalizeSchema(schema),
        seenRefs: new Set(),
    };
}

function resolveRef(
    ref: string,
    context: SchemaResolveContext,
): {resolved: ViraJsonSchemaObject | undefined; context: SchemaResolveContext} {
    if (context.seenRefs.has(ref) || !context.root) {
        return {
            resolved: undefined,
            context,
        };
    }

    const defsKey = ref.startsWith('#/$defs/')
        ? removePrefix({
              value: ref,
              prefix: '#/$defs/',
          })
        : ref.startsWith('#/definitions/')
          ? removePrefix({
                value: ref,
                prefix: '#/definitions/',
            })
          : undefined;

    if (!defsKey) {
        return {
            resolved: undefined,
            context,
        };
    }

    const defsRecord =
        (context.root as {$defs?: Record<string, ViraJsonSchema>}).$defs ??
        (context.root as {definitions?: Record<string, ViraJsonSchema>}).definitions;
    const resolved = normalizeSchema(defsRecord?.[defsKey]);

    return {
        resolved,
        context: {
            root: context.root,
            seenRefs: new Set([
                ...context.seenRefs,
                ref,
            ]),
        },
    };
}

/**
 * Resolves a schema through `$ref` (via its root's `$defs`/`definitions`), returning the resolved
 * schema and an updated resolve context. Non-ref schemas are returned as-is.
 *
 * @category Internal
 */
export function resolveSchema(
    schema: ViraJsonSchema | undefined,
    context: SchemaResolveContext,
): {resolved: ViraJsonSchemaObject | undefined; context: SchemaResolveContext} {
    const normalized = normalizeSchema(schema);
    if (!normalized) {
        return {
            resolved: undefined,
            context,
        };
    }
    const ref = (normalized as {$ref?: string}).$ref;
    if (check.isString(ref)) {
        return resolveRef(ref, context);
    }
    return {
        resolved: normalized,
        context,
    };
}

/**
 * Flattens `anyOf` / `oneOf` branches into a single list of non-union schemas so that the editor
 * can treat them uniformly.
 *
 * @category Internal
 */
export function expandSchemaBranches(
    schema: ViraJsonSchema | undefined,
    context: SchemaResolveContext,
): ReadonlyArray<ViraJsonSchemaObject> {
    const {resolved} = resolveSchema(schema, context);
    if (!resolved) {
        return [];
    }
    const branches = [
        ...((resolved as {anyOf?: ReadonlyArray<ViraJsonSchema>}).anyOf ?? []),
        ...((resolved as {oneOf?: ReadonlyArray<ViraJsonSchema>}).oneOf ?? []),
    ];
    if (branches.length === 0) {
        return [resolved];
    }
    return branches.flatMap((branch) =>
        expandSchemaBranches(branch, {
            root: context.root,
            seenRefs: context.seenRefs,
        }),
    );
}

/**
 * Computes the set of JSON types that a given schema allows.
 *
 * @category Internal
 */
export function getAllowedJsonTypes(
    schema: ViraJsonSchema | undefined,
    context: SchemaResolveContext,
): ReadonlyArray<ViraJsonType> {
    const branches = expandSchemaBranches(schema, context);
    if (branches.length === 0) {
        return allJsonTypes;
    }
    const collected: ViraJsonType[] = [];
    for (const branch of branches) {
        const schemaType = branch.type;
        if (schemaType == undefined) {
            if ('const' in branch || 'enum' in branch) {
                const source =
                    'enum' in branch && check.isArray(branch.enum) ? branch.enum : [branch.const];
                for (const entry of source) {
                    collected.push(getJsonType(entry as JsonValue | undefined));
                }
            } else {
                return allJsonTypes;
            }
        } else if (check.isArray(schemaType)) {
            for (const entry of schemaType) {
                const mapped = jsonTypeFromSchemaType(entry);
                if (mapped) {
                    collected.push(mapped);
                }
            }
        } else {
            const mapped = jsonTypeFromSchemaType(schemaType);
            if (mapped) {
                collected.push(mapped);
            }
        }
    }
    return removeDuplicates(collected);
}

/** @category Internal */
export function createDefaultForJsonType(type: ViraJsonType): JsonValue {
    const defaults: Readonly<Record<ViraJsonType, JsonValue>> = {
        [ViraJsonType.String]: '',
        [ViraJsonType.Number]: 0,
        [ViraJsonType.Integer]: 0,
        [ViraJsonType.Boolean]: false,
        [ViraJsonType.Null]: null,
        [ViraJsonType.Object]: {},
        [ViraJsonType.Array]: [],
    };
    return defaults[type];
}

/**
 * Picks the first schema branch whose `type` contains (or is) the given JSON type. Used to narrow
 * the schema when traversing into a concrete value.
 *
 * @category Internal
 */
export function pickBranchForType(
    schema: ViraJsonSchema | undefined,
    valueType: ViraJsonType,
    context: SchemaResolveContext,
): ViraJsonSchemaObject | undefined {
    const branches = expandSchemaBranches(schema, context);
    for (const branch of branches) {
        const branchTypes = getAllowedJsonTypes(branch, context);
        if (branchTypes.length === 0 || branchTypes.includes(valueType)) {
            return branch;
        }
    }
    const numericFallback =
        valueType === ViraJsonType.Number
            ? ViraJsonType.Integer
            : valueType === ViraJsonType.Integer
              ? ViraJsonType.Number
              : undefined;
    if (numericFallback) {
        for (const branch of branches) {
            const branchTypes = getAllowedJsonTypes(branch, context);
            if (branchTypes.includes(numericFallback)) {
                return branch;
            }
        }
    }
    return branches[0];
}

/**
 * Finds the sub-schema for a given object property key, considering `properties`,
 * `patternProperties`, and `additionalProperties`.
 *
 * @category Internal
 */
export function getPropertySchema(
    parentSchema: ViraJsonSchema | undefined,
    key: string,
    context: SchemaResolveContext,
): ViraJsonSchema | undefined {
    const branch = pickBranchForType(parentSchema, ViraJsonType.Object, context);
    if (!branch) {
        return undefined;
    }
    const propertySchema = branch.properties?.[key];
    if (propertySchema !== undefined) {
        return propertySchema;
    }
    const patternProperties = branch.patternProperties;
    if (patternProperties) {
        for (const [
            pattern,
            subSchema,
        ] of Object.entries(patternProperties)) {
            try {
                if (new RegExp(pattern).test(key)) {
                    return subSchema;
                }
            } catch {
                continue;
            }
        }
    }
    return branch.additionalProperties;
}

/**
 * Finds the sub-schema for an array item at a given index, considering tuple `items` arrays and
 * `additionalItems` fallbacks.
 *
 * @category Internal
 */
export function getItemSchema(
    parentSchema: ViraJsonSchema | undefined,
    index: number,
    context: SchemaResolveContext,
): ViraJsonSchema | undefined {
    const branch = pickBranchForType(parentSchema, ViraJsonType.Array, context);
    if (!branch) {
        return undefined;
    }
    const items = branch.items;
    if (check.isArray(items)) {
        return items[index] ?? branch.additionalItems;
    }
    return items;
}

/**
 * Returns the schema used when appending a new item to an array. Falls back to `additionalItems`
 * when `items` is a tuple array and the new index is beyond the tuple's length.
 *
 * @category Internal
 */
export function getNewItemSchema(
    parentSchema: ViraJsonSchema | undefined,
    currentLength: number,
    context: SchemaResolveContext,
): ViraJsonSchema | undefined {
    return getItemSchema(parentSchema, currentLength, context);
}

/**
 * Returns the schema used when adding an arbitrary new field to an object. When no schema is
 * provided at all the editor is unconstrained, so additions are allowed; once a schema is provided,
 * additions are only allowed when the schema explicitly opts in via `additionalProperties: true` or
 * an `additionalProperties` sub-schema. This is stricter than JSON Schema's `true` default — UI
 * authors must opt in.
 *
 * @category Internal
 */
export function getAdditionalPropertiesSchema(
    parentSchema: ViraJsonSchema | undefined,
    context: SchemaResolveContext,
): {allowed: boolean; schema: ViraJsonSchema | undefined} {
    if (parentSchema === undefined) {
        return {
            allowed: true,
            schema: undefined,
        };
    }
    const branch = pickBranchForType(parentSchema, ViraJsonType.Object, context);
    if (!branch) {
        return {
            allowed: false,
            schema: undefined,
        };
    }
    const additional = branch.additionalProperties;
    if (additional === undefined || additional === false) {
        return {
            allowed: false,
            schema: undefined,
        };
    }
    return {
        allowed: true,
        schema: additional === true ? undefined : additional,
    };
}

/**
 * Returns the `enum` values defined by any resolved branch of a schema. Aggregates across
 * `anyOf`/`oneOf` branches and includes `const` values so the editor can offer them as a select.
 *
 * @category Internal
 */
export function getSchemaEnumValues(
    schema: ViraJsonSchema | undefined,
    context: SchemaResolveContext,
): ReadonlyArray<JsonValue> | undefined {
    const branches = expandSchemaBranches(schema, context);
    if (branches.length === 0) {
        return undefined;
    }
    const collected: JsonValue[] = [];
    for (const branch of branches) {
        if ('enum' in branch && check.isArray(branch.enum)) {
            for (const entry of branch.enum) {
                collected.push(entry as JsonValue);
            }
        } else if ('const' in branch) {
            collected.push(branch.const as JsonValue);
        } else {
            return undefined;
        }
    }
    return collected.length > 0 ? collected : undefined;
}

/**
 * Collects the string `enum`/`const` values declared by any branch of a schema, ignoring branches
 * that declare no enum/const. Unlike {@link getSchemaEnumValues}, a schema that mixes an enum branch
 * with a free-form branch still yields the enum values (rather than bailing out). Non-string enum
 * entries are excluded.
 *
 * @category Internal
 */
export function getStringEnumValues(
    schema: ViraJsonSchema | undefined,
    context: SchemaResolveContext,
): ReadonlyArray<string> {
    const branches = expandSchemaBranches(schema, context);
    const values = branches.flatMap((branch): ReadonlyArray<string> => {
        if ('enum' in branch && check.isArray(branch.enum)) {
            return branch.enum.filter(check.isString);
        } else if ('const' in branch && check.isString(branch.const)) {
            return [branch.const];
        }
        return [];
    });
    return removeDuplicates(values);
}

/**
 * Returns whether the schema permits an arbitrary (non-enum, non-const) string in any of its
 * branches. Used alongside {@link getStringEnumValues} to detect fields that accept both a fixed set
 * of enum options and free-form text.
 *
 * @category Internal
 */
export function allowsFreeformString(
    schema: ViraJsonSchema | undefined,
    context: SchemaResolveContext,
): boolean {
    return expandSchemaBranches(schema, context).some((branch) => {
        if ('enum' in branch || 'const' in branch) {
            return false;
        }
        return getAllowedJsonTypes(branch, context).includes(ViraJsonType.String);
    });
}

/**
 * Returns the list of required property names declared by the object branch of a schema.
 *
 * @category Internal
 */
export function getRequiredProperties(
    schema: ViraJsonSchema | undefined,
    context: SchemaResolveContext,
): ReadonlyArray<string> {
    const branch = pickBranchForType(schema, ViraJsonType.Object, context);
    return branch?.required ?? [];
}

/**
 * Returns the `properties` map declared by the object branch of a schema, or an empty record when
 * none is defined.
 *
 * @category Internal
 */
export function getDefinedProperties(
    schema: ViraJsonSchema | undefined,
    context: SchemaResolveContext,
): Readonly<Record<string, ViraJsonSchema>> {
    const branch = pickBranchForType(schema, ViraJsonType.Object, context);
    return branch?.properties ?? {};
}

/**
 * Reads the title of a schema's first resolved branch (for display purposes).
 *
 * @category Internal
 */
export function getSchemaTitle(
    schema: ViraJsonSchema | undefined,
    context: SchemaResolveContext,
): string | undefined {
    const branches = expandSchemaBranches(schema, context);
    for (const branch of branches) {
        if (check.isString(branch.title)) {
            return branch.title;
        }
    }
    return undefined;
}

function formatPathLabel(path: ViraJsonPath): string {
    if (path.length === 0) {
        return 'root';
    }
    return path
        .map((segment) => (typeof segment === 'number' ? `[${segment}]` : `.${segment}`))
        .join('')
        .replace(/^\./, '');
}

function isJsonValueMatchingType(value: JsonValue, type: ViraJsonType): boolean {
    if (type === ViraJsonType.Integer) {
        return check.isNumber(value) && Number.isInteger(value);
    }
    return getJsonType(value) === type;
}

/**
 * Validates a JSON value against the (loose) JSON Schema subset supported by `ViraJsonForm`.
 * Returns a list of human-readable error messages; an empty array means the value is valid. Only
 * the constraints understood by the editor (`type`, `required`, `properties`, `additionalProperties
 * = false`, `items`, `enum`, `const`, `anyOf`, `oneOf`, `$ref`) are checked.
 *
 * @category Internal
 */
export function validateAgainstSchema(
    value: JsonValue,
    schema: ViraJsonSchema | undefined,
): ReadonlyArray<string> {
    if (schema === undefined) {
        return [];
    }
    const context = createResolveContext(schema);
    const errors: string[] = [];
    validateRecursive({
        value,
        schema,
        path: [],
        context,
        errors,
    });
    return errors;
}

function validateRecursive({
    value,
    schema,
    path,
    context,
    errors,
}: Readonly<{
    value: JsonValue;
    schema: ViraJsonSchema | undefined;
    path: ViraJsonPath;
    context: SchemaResolveContext;
    errors: string[];
}>): void {
    const branches = expandSchemaBranches(schema, context);
    if (branches.length === 0) {
        return;
    }
    const branchErrorSets: string[][] = [];
    for (const branch of branches) {
        const branchErrors: string[] = [];
        validateBranch({
            value,
            branch,
            path,
            context,
            errors: branchErrors,
        });
        if (branchErrors.length === 0) {
            return;
        }
        branchErrorSets.push(branchErrors);
    }
    if (branches.length === 1) {
        errors.push(...assertWrap.isDefined(branchErrorSets[0]));
    } else {
        errors.push(
            `${formatPathLabel(path)} did not match any allowed schema branch (anyOf/oneOf).`,
        );
    }
}

function validateBranch({
    value,
    branch,
    path,
    context,
    errors,
}: Readonly<{
    value: JsonValue;
    branch: ViraJsonSchemaObject;
    path: ViraJsonPath;
    context: SchemaResolveContext;
    errors: string[];
}>): void {
    const allowedTypes = getAllowedJsonTypes(branch, context);
    const concreteType = getJsonType(value);
    if (allowedTypes.length > 0) {
        const matchesAny = allowedTypes.some((type) => isJsonValueMatchingType(value, type));
        if (!matchesAny) {
            const allowedLabel = allowedTypes.map((type) => viraJsonTypeLabels[type]).join(' | ');
            errors.push(
                `${formatPathLabel(path)} expected ${allowedLabel} but got ${
                    concreteType === ViraJsonType.Number && Number.isInteger(value)
                        ? 'integer'
                        : viraJsonTypeLabels[concreteType]
                }.`,
            );
            return;
        }
    }
    if (
        'const' in branch &&
        !deepEqualsJson({
            a: value,
            b: branch.const as JsonValue,
        })
    ) {
        errors.push(`${formatPathLabel(path)} must equal const value.`);
        return;
    }
    if ('enum' in branch && check.isArray(branch.enum)) {
        const matched = branch.enum.some((entry) =>
            deepEqualsJson({
                a: value,
                b: entry as JsonValue,
            }),
        );
        if (!matched) {
            errors.push(`${formatPathLabel(path)} must be one of the enum values.`);
            return;
        }
    }
    if (check.isObject(value)) {
        const required = branch.required ?? [];
        for (const key of required) {
            if (!(key in value)) {
                errors.push(`${formatPathLabel(path)} is missing required property "${key}".`);
            }
        }
        const additional = branch.additionalProperties;
        const definedKeys = new Set(Object.keys(branch.properties ?? {}));
        for (const [
            propKey,
            propValue,
        ] of Object.entries(value)) {
            const propPath: ViraJsonPath = [
                ...path,
                propKey,
            ];
            const propSchema = branch.properties?.[propKey];
            if (propSchema !== undefined) {
                validateRecursive({
                    value: propValue,
                    schema: propSchema,
                    path: propPath,
                    context,
                    errors,
                });
            } else if (additional === false) {
                errors.push(
                    `${formatPathLabel(propPath)} is not allowed (additionalProperties is false).`,
                );
            } else if (check.isObject(additional)) {
                validateRecursive({
                    value: propValue,
                    schema: additional,
                    path: propPath,
                    context,
                    errors,
                });
            } else if (additional === undefined && definedKeys.size > 0) {
                continue;
            }
        }
    } else if (check.isArray(value)) {
        const items = branch.items;
        value.forEach((item, index) => {
            const itemPath: ViraJsonPath = [
                ...path,
                index,
            ];
            if (check.isArray(items)) {
                const tupleSchema = items[index] ?? branch.additionalItems;
                if (tupleSchema !== undefined) {
                    validateRecursive({
                        value: item,
                        schema: tupleSchema,
                        path: itemPath,
                        context,
                        errors,
                    });
                }
            } else if (items !== undefined) {
                validateRecursive({
                    value: item,
                    schema: items,
                    path: itemPath,
                    context,
                    errors,
                });
            }
        });
    }
}

function deepEqualsJson({a, b}: Readonly<{a: JsonValue; b: JsonValue}>): boolean {
    if (a === b) {
        return true;
    } else if (check.isArray(a) && check.isArray(b)) {
        return (
            a.length === b.length &&
            a.every((entry, i) =>
                deepEqualsJson({
                    a: entry,
                    b: b[i] ?? null,
                }),
            )
        );
    } else if (check.isObject(a) && check.isObject(b)) {
        const aKeys = Object.keys(a);
        const bKeys = Object.keys(b);
        if (aKeys.length !== bKeys.length) {
            return false;
        }
        return aKeys.every((key) =>
            deepEqualsJson({
                a: a[key] ?? null,
                b: b[key] ?? null,
            }),
        );
    }
    return false;
}

/**
 * Type of a JSON path element. `string` selects an object key; `number` selects an array index.
 *
 * @category Internal
 */
export type ViraJsonPath = ReadonlyArray<string | number>;

/** @category Internal */
export function pathToKey(path: ViraJsonPath): string {
    return JSON.stringify(path);
}

/**
 * Returns a new JSON value where the value at `path` has been replaced with `newValue`.
 *
 * @category Internal
 */
export function setValueAtPath({
    root,
    path,
    newValue,
}: Readonly<{root: JsonValue; path: ViraJsonPath; newValue: JsonValue}>): JsonValue {
    if (path.length === 0) {
        return newValue;
    }
    const head = assertWrap.isDefined(path[0]);
    const rest = path.slice(1);
    if (typeof head === 'number') {
        const array = check.isArray(root) ? root : [];
        const existing = array[head] ?? null;
        const replaced = setValueAtPath({
            root: existing,
            path: rest,
            newValue,
        });
        if (head >= array.length) {
            const extended: JsonValue[] = [...array];
            while (extended.length < head) {
                extended.push(null);
            }
            extended.push(replaced);
            return extended;
        }
        return array.map((item, index) => (index === head ? replaced : item));
    } else {
        const object = check.isObject(root) ? root : {};
        const existing = object[head] ?? null;
        return {
            ...object,
            [head]: setValueAtPath({
                root: existing,
                path: rest,
                newValue,
            }),
        };
    }
}

/**
 * Returns a new JSON value where the value at `path` has been removed. If `path` targets an object
 * key, the key is deleted; if it targets an array index, the item is spliced out.
 *
 * @category Internal
 */
export function deleteValueAtPath(root: JsonValue, path: ViraJsonPath): JsonValue {
    if (path.length === 0) {
        return root;
    }
    const head = assertWrap.isDefined(path[0]);
    const rest = path.slice(1);
    if (rest.length === 0) {
        if (typeof head === 'number' && check.isArray(root)) {
            return root.filter((unusedItem, index) => index !== head);
        } else if (typeof head === 'string' && check.isObject(root)) {
            return omitObjectKeys(root, [head]);
        }
        return root;
    } else if (typeof head === 'number' && check.isArray(root)) {
        return root.map((item, index) => (index === head ? deleteValueAtPath(item, rest) : item));
    } else if (typeof head === 'string' && check.isObject(root)) {
        return {
            ...root,
            [head]: deleteValueAtPath(root[head] ?? null, rest),
        };
    }
    return root;
}
