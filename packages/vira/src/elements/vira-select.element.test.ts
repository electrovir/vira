import {assert, assertWrap} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {waitForAnimationFrame} from '@augment-vir/web';
import {html} from 'element-vir';
import {type ViraSelectOption} from '../util/vira-select-option.js';
import {ViraSelect} from './vira-select.element.js';

const mockOptions: ReadonlyArray<Readonly<ViraSelectOption>> = [
    {
        value: '0',
        label: 'Option A',
    },
    {
        value: '1',
        label: 'Option B',
    },
];

describe(ViraSelect.tagName, () => {
    it('does not surface showPicker errors when clicked without user activation', async () => {
        const fixture = await testWeb.render(html`
            <div>
                <${ViraSelect.assign({
                    options: mockOptions,
                    value: undefined,
                })}></${ViraSelect}>
            </div>
        `);
        const instance = assertWrap.instanceOf(
            fixture.querySelector(ViraSelect.tagName),
            ViraSelect,
        );
        await waitForAnimationFrame();

        const showPickerErrors: string[] = [];
        function trackError(event: ErrorEvent) {
            if (event.message.includes('showPicker')) {
                showPickerErrors.push(event.message);
            }
        }
        window.addEventListener('error', trackError);

        instance.dispatchEvent(
            new MouseEvent('mousedown', {
                bubbles: true,
            }),
        );
        instance.dispatchEvent(
            new MouseEvent('click', {
                bubbles: true,
            }),
        );
        await waitForAnimationFrame(5);

        window.removeEventListener('error', trackError);
        assert.isEmpty(showPickerErrors);
    });
});
