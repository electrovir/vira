import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {
    allowsFreeformString,
    createResolveContext,
    getStringEnumValues,
    type ViraJsonSchema,
} from './vira-json-schema.js';

const mixedSchema = {
    anyOf: [
        {
            enum: [
                'red',
                'green',
                'blue',
            ],
        },
        {
            type: 'string',
        },
    ],
} as const satisfies ViraJsonSchema;

const pureEnumSchema = {
    type: 'string',
    enum: [
        'small',
        'medium',
        'large',
    ],
} as const satisfies ViraJsonSchema;

function contextFor(schema: ViraJsonSchema) {
    return createResolveContext(schema);
}

describe(getStringEnumValues.name, () => {
    it('collects enum values from a mixed enum-or-string schema', () => {
        assert.deepEquals(getStringEnumValues(mixedSchema, contextFor(mixedSchema)), [
            'red',
            'green',
            'blue',
        ]);
    });

    it('collects enum values from a plain enum schema', () => {
        assert.deepEquals(getStringEnumValues(pureEnumSchema, contextFor(pureEnumSchema)), [
            'small',
            'medium',
            'large',
        ]);
    });

    it('collects const values as a single-entry list', () => {
        const schema = {
            const: 'only',
        } as const satisfies ViraJsonSchema;
        assert.deepEquals(getStringEnumValues(schema, contextFor(schema)), ['only']);
    });

    it('excludes non-string enum entries', () => {
        const schema = {
            enum: [
                'keep',
                1,
                true,
                'also',
            ],
        } as const satisfies ViraJsonSchema;
        assert.deepEquals(getStringEnumValues(schema, contextFor(schema)), [
            'keep',
            'also',
        ]);
    });

    it('deduplicates values shared across branches', () => {
        const schema = {
            anyOf: [
                {
                    enum: [
                        'a',
                        'b',
                    ],
                },
                {
                    enum: [
                        'b',
                        'c',
                    ],
                },
            ],
        } as const satisfies ViraJsonSchema;
        assert.deepEquals(getStringEnumValues(schema, contextFor(schema)), [
            'a',
            'b',
            'c',
        ]);
    });

    it('returns an empty list for a plain string schema', () => {
        const schema = {
            type: 'string',
        } as const satisfies ViraJsonSchema;
        assert.deepEquals(getStringEnumValues(schema, contextFor(schema)), []);
    });
});

describe(allowsFreeformString.name, () => {
    it('is true when an enum branch is paired with a free-form string branch', () => {
        assert.isTrue(allowsFreeformString(mixedSchema, contextFor(mixedSchema)));
    });

    it('is true for a plain string schema', () => {
        const schema = {
            type: 'string',
        } as const satisfies ViraJsonSchema;
        assert.isTrue(allowsFreeformString(schema, contextFor(schema)));
    });

    it('is false for an enum-only schema', () => {
        assert.isFalse(allowsFreeformString(pureEnumSchema, contextFor(pureEnumSchema)));
    });

    it('is false for a const-only schema', () => {
        const schema = {
            const: 'only',
        } as const satisfies ViraJsonSchema;
        assert.isFalse(allowsFreeformString(schema, contextFor(schema)));
    });

    it('is false when no branch allows a string', () => {
        const schema = {
            anyOf: [
                {
                    type: 'number',
                },
                {
                    type: 'boolean',
                },
            ],
        } as const satisfies ViraJsonSchema;
        assert.isFalse(allowsFreeformString(schema, contextFor(schema)));
    });
});
