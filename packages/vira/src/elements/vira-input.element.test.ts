import {assert} from '@augment-vir/assert';
import {randomString} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {html, listen} from 'element-vir';
import {type ReadonlyDeep} from 'type-fest';
import {ViraInput} from './vira-input.element.js';

describe(ViraInput.tagName, () => {
    async function renderTestViraInput(initValue: string = '') {
        const valueChangeEvents: InstanceType<typeof ViraInput.events.valueChange>[] = [];

        const fixture = await testWeb.render(html`
            <${ViraInput.assign({
                value: initValue,
            })}
                ${listen(ViraInput.events.valueChange, (event) => {
                    valueChangeEvents.push(event);
                })}
            ></${ViraInput}>
        `);

        assert.instanceOf(fixture, ViraInput);

        return {
            instance: fixture,
            events: valueChangeEvents as ReadonlyDeep<typeof valueChangeEvents>,
        };
    }

    it('accepts user input', async () => {
        const {instance, events} = await renderTestViraInput();

        const textToType = randomString();

        await testWeb.click(instance);
        assert.strictEquals(document.activeElement, instance);

        await testWeb.typeText(textToType);

        const lastEvent = events.slice(-1)[0];

        assert.strictEquals(lastEvent?.detail, textToType);
    });

    it('renders the value as plain text when readonly', async () => {
        const value = randomString();

        const fixture = await testWeb.render(html`
            <${ViraInput.assign({
                value,
                isReadonly: true,
            })}></${ViraInput}>
        `);

        assert.instanceOf(fixture, ViraInput);
        assert.isNull(fixture.shadowRoot.querySelector('input'));

        const readonlyValue = fixture.shadowRoot.querySelector('.readonly-value');
        assert.instanceOf(readonlyValue, HTMLSpanElement);
        assert.strictEquals(readonlyValue.textContent.trim(), value);
    });
});
