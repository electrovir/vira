import {type JsonValue} from '@augment-vir/common';
import {defineBookPage} from 'element-book';
import {css, html, listen, type HTMLTemplateResult} from 'element-vir';
import {viraFontCssVars, ViraJsonForm, viraTheme, type ViraJsonSchema} from 'vira';
import {elementsBookPage} from '../top-level-pages.js';

const exampleStyles = css`
    .json-pre {
        width: 480px;
        max-width: 100%;
        margin: 0;
        padding: 10px 12px;
        background-color: ${viraTheme.colors['vira-grey-foreground-lowest-contrast'].foreground
            .value};
        border-radius: 8px;
        font-family: ${viraFontCssVars['vira-monospace'].value};
        font-size: 12px;
        white-space: pre-wrap;
        word-break: break-word;
        overflow-x: auto;
        box-sizing: border-box;
    }

    .example-stack {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    ${ViraJsonForm} {
        width: 480px;
    }
`;

function renderExampleLayout({
    schema,
    value,
    isDisabled,
    onChange,
}: {
    schema?: ViraJsonSchema | undefined;
    value: JsonValue;
    isDisabled?: boolean;
    onChange: (value: JsonValue) => void;
}): HTMLTemplateResult {
    return html`
        <div class="example-stack">
            <pre class="json-pre">
${schema === undefined ? '(no schema)' : JSON.stringify(schema, undefined, 4)}</pre
            >
            <${ViraJsonForm.assign({
                value,
                schema,
                isDisabled,
            })}
                ${listen(ViraJsonForm.events.valueChange, (event) => onChange(event.detail))}
            ></${ViraJsonForm}>
            <pre class="json-pre">${JSON.stringify(value, undefined, 4)}</pre>
        </div>
    `;
}

export const viraJsonFormBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraJsonForm.tagName,
    descriptionParagraphs: [
        'An editor for arbitrary JSON values, optionally constrained by a standard JSON Schema.',
        'When the schema allows multiple types for a new field, a ViraSelect is shown for choosing the type. When exactly one type is allowed, a neutral ViraButton is shown instead.',
        'Each example below shows the JSON Schema (or "(no schema)") above the editor and the live JSON output below it.',
    ],
    defineExamples({defineExample}) {
        defineExample({
            title: 'no schema',
            styles: exampleStyles,
            state() {
                return {
                    value: {
                        name: 'Ada',
                        admin: true,
                    } as JsonValue,
                };
            },
            render({state, updateState}) {
                return renderExampleLayout({
                    value: state.value,
                    onChange: (value) =>
                        updateState({
                            value,
                        }),
                });
            },
        });

        defineExample({
            title: 'schema with required fields',
            styles: exampleStyles,
            state() {
                return {
                    value: {
                        firstName: 'Ada',
                        lastName: 'Lovelace',
                    } as JsonValue,
                };
            },
            render({state, updateState}) {
                const schema = {
                    title: 'Person',
                    type: 'object',
                    required: [
                        'firstName',
                        'lastName',
                    ],
                    properties: {
                        firstName: {
                            type: 'string',
                            title: 'First name',
                        },
                        lastName: {
                            type: 'string',
                            title: 'Last name',
                        },
                        age: {
                            type: 'integer',
                        },
                        subscribed: {
                            type: 'boolean',
                        },
                    },
                    additionalProperties: false,
                } as const satisfies ViraJsonSchema;

                return renderExampleLayout({
                    schema,
                    value: state.value,
                    onChange: (value) =>
                        updateState({
                            value,
                        }),
                });
            },
        });

        defineExample({
            title: 'schema allowing additional properties',
            styles: exampleStyles,
            state() {
                return {
                    value: {
                        id: 'abc-123',
                        nickname: 'Ada',
                    } as JsonValue,
                };
            },
            render({state, updateState}) {
                const schema = {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'string',
                            title: 'ID',
                        },
                    },
                    required: [
                        'id',
                    ],
                    additionalProperties: {
                        type: 'string',
                    },
                } as const satisfies ViraJsonSchema;

                return renderExampleLayout({
                    schema,
                    value: state.value,
                    onChange: (value) =>
                        updateState({
                            value,
                        }),
                });
            },
        });

        defineExample({
            title: 'nested objects and arrays',
            styles: exampleStyles,
            state() {
                return {
                    value: {
                        title: 'My playlist',
                        tracks: [
                            {
                                name: 'First song',
                                durationSeconds: 123,
                            },
                        ],
                        metadata: {
                            public: true,
                            tags: [
                                'demo',
                            ],
                        },
                    } as JsonValue,
                };
            },
            render({state, updateState}) {
                return renderExampleLayout({
                    value: state.value,
                    onChange: (value) =>
                        updateState({
                            value,
                        }),
                });
            },
        });

        defineExample({
            title: 'enum values',
            styles: exampleStyles,
            state() {
                return {
                    value: {
                        status: 'pending',
                        priority: 2,
                    } as JsonValue,
                };
            },
            render({state, updateState}) {
                const schema = {
                    type: 'object',
                    properties: {
                        status: {
                            type: 'string',
                            enum: [
                                'pending',
                                'active',
                                'archived',
                            ],
                        },
                        priority: {
                            type: 'integer',
                            enum: [
                                1,
                                2,
                                3,
                            ],
                        },
                    },
                    required: [
                        'status',
                    ],
                } as const satisfies ViraJsonSchema;

                return renderExampleLayout({
                    schema,
                    value: state.value,
                    onChange: (value) =>
                        updateState({
                            value,
                        }),
                });
            },
        });

        defineExample({
            title: 'enum or free-form string',
            styles: exampleStyles,
            state() {
                return {
                    value: {
                        color: 'red',
                        size: 'custom-42',
                    } as JsonValue,
                };
            },
            render({state, updateState}) {
                const stringOrEnum = {
                    anyOf: [
                        {
                            enum: [
                                'small',
                                'medium',
                                'large',
                            ],
                        },
                        {
                            type: 'string',
                        },
                    ],
                } as const satisfies ViraJsonSchema;
                const schema = {
                    type: 'object',
                    properties: {
                        color: {
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
                        },
                        size: stringOrEnum,
                    },
                    required: [
                        'color',
                    ],
                } as const satisfies ViraJsonSchema;

                return renderExampleLayout({
                    schema,
                    value: state.value,
                    onChange: (value) =>
                        updateState({
                            value,
                        }),
                });
            },
        });

        defineExample({
            title: 'array with single-type items',
            styles: exampleStyles,
            state() {
                return {
                    value: [
                        'one',
                        'two',
                    ] as JsonValue,
                };
            },
            render({state, updateState}) {
                const schema = {
                    type: 'array',
                    items: {
                        type: 'string',
                    },
                } as const satisfies ViraJsonSchema;

                return renderExampleLayout({
                    schema,
                    value: state.value,
                    onChange: (value) =>
                        updateState({
                            value,
                        }),
                });
            },
        });

        defineExample({
            title: 'union of types (anyOf)',
            styles: exampleStyles,
            state() {
                return {
                    value: {
                        id: 'abc',
                        payload: 42,
                    } as JsonValue,
                };
            },
            render({state, updateState}) {
                const schema = {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'string',
                        },
                        payload: {
                            anyOf: [
                                {
                                    type: 'string',
                                },
                                {
                                    type: 'number',
                                },
                                {
                                    type: 'boolean',
                                },
                            ],
                        },
                    },
                    required: [
                        'id',
                        'payload',
                    ],
                } as const satisfies ViraJsonSchema;

                return renderExampleLayout({
                    schema,
                    value: state.value,
                    onChange: (value) =>
                        updateState({
                            value,
                        }),
                });
            },
        });

        defineExample({
            title: 'recursive schema with $ref',
            styles: exampleStyles,
            state() {
                return {
                    value: {
                        name: 'root',
                        children: [
                            {
                                name: 'child-a',
                                children: [],
                            },
                        ],
                    } as JsonValue,
                };
            },
            render({state, updateState}) {
                const schema = {
                    definitions: {
                        node: {
                            type: 'object',
                            required: [
                                'name',
                            ],
                            properties: {
                                name: {
                                    type: 'string',
                                },
                                children: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/definitions/node',
                                    },
                                },
                            },
                            additionalProperties: false,
                        },
                    },
                    $ref: '#/definitions/node',
                } as const satisfies ViraJsonSchema;

                return renderExampleLayout({
                    schema,
                    value: state.value,
                    onChange: (value) =>
                        updateState({
                            value,
                        }),
                });
            },
        });

        defineExample({
            title: 'schema mismatch shows ViraError',
            styles: exampleStyles,
            state() {
                return {
                    value: {
                        firstName: 'Ada',
                        age: 'not a number',
                    } as JsonValue,
                };
            },
            render({state, updateState}) {
                const schema = {
                    type: 'object',
                    required: [
                        'firstName',
                        'lastName',
                    ],
                    properties: {
                        firstName: {
                            type: 'string',
                        },
                        lastName: {
                            type: 'string',
                        },
                        age: {
                            type: 'integer',
                        },
                    },
                    additionalProperties: false,
                } as const satisfies ViraJsonSchema;

                return renderExampleLayout({
                    schema,
                    value: state.value,
                    onChange: (value) =>
                        updateState({
                            value,
                        }),
                });
            },
        });

        defineExample({
            title: 'disabled',
            styles: exampleStyles,
            state() {
                return {
                    value: {
                        name: 'Ada',
                        tags: [
                            'alpha',
                            'beta',
                        ],
                    } as JsonValue,
                };
            },
            render({state, updateState}) {
                return renderExampleLayout({
                    value: state.value,
                    isDisabled: true,
                    onChange: (value) =>
                        updateState({
                            value,
                        }),
                });
            },
        });
    },
});
