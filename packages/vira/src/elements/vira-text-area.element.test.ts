import {assert} from '@augment-vir/assert';
import {randomString} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {html, listen} from 'element-vir';
import {type ReadonlyDeep} from 'type-fest';
import {ViraTextArea} from './vira-text-area.element.js';

describe(ViraTextArea.tagName, () => {
    async function renderTestViraTextArea(initValue: string = '') {
        const valueChangeEvents: InstanceType<typeof ViraTextArea.events.valueChange>[] = [];

        const fixture = await testWeb.render(html`
            <${ViraTextArea.assign({
                value: initValue,
            })}
                ${listen(ViraTextArea.events.valueChange, (event) => {
                    valueChangeEvents.push(event);
                })}
            ></${ViraTextArea}>
        `);

        assert.instanceOf(fixture, ViraTextArea);

        return {
            instance: fixture,
            events: valueChangeEvents as ReadonlyDeep<typeof valueChangeEvents>,
        };
    }

    it('accepts user input', async () => {
        const {instance, events} = await renderTestViraTextArea();

        const textToType = randomString();

        const textareaElement = instance.shadowRoot.querySelector('textarea');
        assert.instanceOf(textareaElement, HTMLTextAreaElement);

        textareaElement.focus();
        assert.strictEquals(document.activeElement, instance);

        await testWeb.typeText(textToType);

        const lastEvent = events.slice(-1)[0];

        assert.strictEquals(lastEvent?.detail, textToType);
    });
});
