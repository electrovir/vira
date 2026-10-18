import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {html, listen} from 'element-vir';
import {ViraSlider, type ViraSliderInputs} from './vira-slider.element.js';

async function renderSlider(
    inputs: Readonly<ViraSliderInputs>,
    onValueChange?: ((value: number) => void) | undefined,
) {
    const fixture = await testWeb.render(html`
        <${ViraSlider.assign(inputs)}
            ${listen(ViraSlider.events.valueChange, (event) => {
                onValueChange?.(event.detail);
            })}
        ></${ViraSlider}>
    `);
    assert.instanceOf(fixture, ViraSlider);

    const input = fixture.shadowRoot.querySelector('input');
    assert.instanceOf(input, HTMLInputElement);

    return input;
}

describe(ViraSlider.tagName, () => {
    it('exposes the range to assistive tech through the native slider', async () => {
        const input = await renderSlider({
            value: 30,
            min: 10,
            max: 50,
            step: 5,
            label: 'Volume',
        });

        assert.deepEquals(
            {
                type: input.type,
                min: input.min,
                max: input.max,
                step: input.step,
                value: input.value,
                label: input.getAttribute('aria-label'),
            },
            {
                type: 'range',
                min: '10',
                max: '50',
                step: '5',
                value: '30',
                label: 'Volume',
            },
        );
    });

    it('emits the new value without moving until it is assigned back', async () => {
        const emitted: number[] = [];
        const input = await renderSlider(
            {
                value: 20,
            },
            (value) => emitted.push(value),
        );

        input.value = '60';
        input.dispatchEvent(new Event('input'));

        assert.deepEquals(
            {
                emitted,
                value: input.value,
            },
            {
                emitted: [
                    60,
                ],
                value: '20',
            },
        );
    });

    it('disables the native slider', async () => {
        const input = await renderSlider({
            value: 0,
            isDisabled: true,
        });

        assert.isTrue(input.disabled);
    });
});
