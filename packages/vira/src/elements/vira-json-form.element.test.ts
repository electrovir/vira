import {assert, assertWrap} from '@augment-vir/assert';
import {type JsonValue} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {html} from 'element-vir';
import {type ViraJsonSchema} from '../util/vira-json-schema.js';
import {ViraInput} from './vira-input.element.js';
import {ViraJsonForm} from './vira-json-form.element.js';
import {ViraSelect} from './vira-select.element.js';

const stringOrEnumSchema = {
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
    },
    required: [
        'color',
    ],
} as const satisfies ViraJsonSchema;

const enumOnlySchema = {
    type: 'object',
    properties: {
        color: {
            enum: [
                'red',
                'green',
                'blue',
            ],
        },
    },
    required: [
        'color',
    ],
} as const satisfies ViraJsonSchema;

async function renderForm(
    value: JsonValue,
    {schema = stringOrEnumSchema, isDisabled}: {schema?: ViraJsonSchema; isDisabled?: boolean} = {},
) {
    const fixture = await testWeb.render(html`
        <${ViraJsonForm.assign({
            value,
            schema,
            isDisabled,
        })}></${ViraJsonForm}>
    `);
    return assertWrap.instanceOf(fixture, ViraJsonForm);
}

function editorSlotChildTag(form: InstanceType<typeof ViraJsonForm>): string {
    const slot = assertWrap.instanceOf(
        form.shadowRoot.querySelector('.json-value-editor-slot'),
        HTMLElement,
    );
    return assertWrap.instanceOf(slot.children[0], HTMLElement).tagName.toLowerCase();
}

describe(ViraJsonForm.tagName, () => {
    it('defaults to the options dropdown when the value is an enum member', async () => {
        const form = await renderForm({
            color: 'red',
        });
        assert.strictEquals(editorSlotChildTag(form), ViraSelect.tagName);
    });

    it('defaults to a text input when the value is not an enum member', async () => {
        const form = await renderForm({
            color: 'custom-value',
        });
        assert.strictEquals(editorSlotChildTag(form), ViraInput.tagName);
    });

    it('renders a mode switcher next to the value editor', async () => {
        const form = await renderForm({
            color: 'red',
        });
        assert.instanceOf(
            form.shadowRoot.querySelector(`.json-value-with-switcher > ${ViraSelect.tagName}`),
            HTMLElement,
        );
    });

    it('shows a plain enum dropdown with no switcher when free-form strings are not allowed', async () => {
        const form = await renderForm(
            {
                color: 'red',
            },
            {
                schema: enumOnlySchema,
            },
        );
        assert.isNull(form.shadowRoot.querySelector('.json-value-with-switcher'));
        assert.instanceOf(
            form.shadowRoot.querySelector(`.json-row-editor > ${ViraSelect.tagName}`),
            HTMLElement,
        );
    });

    it('hides the switcher but keeps the correct editor when disabled', async () => {
        const optionsForm = await renderForm(
            {
                color: 'red',
            },
            {
                isDisabled: true,
            },
        );
        assert.isNull(optionsForm.shadowRoot.querySelector('.json-value-with-switcher'));
        assert.instanceOf(
            optionsForm.shadowRoot.querySelector(`.json-row-editor > ${ViraSelect.tagName}`),
            HTMLElement,
        );

        const customForm = await renderForm(
            {
                color: 'custom-value',
            },
            {
                isDisabled: true,
            },
        );
        assert.instanceOf(
            customForm.shadowRoot.querySelector(`.json-row-editor > ${ViraInput.tagName}`),
            HTMLElement,
        );
    });
});
