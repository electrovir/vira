import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {queryThroughShadow} from '@augment-vir/web';
import {html} from 'element-vir';
import {ViraColorPicker} from './vira-color-picker.element.js';
import {ViraColorSwatch} from './vira-color-swatch.element.js';

describe(ViraColorPicker.tagName, () => {
    it('renders the supplied color', async () => {
        const fixture = await testWeb.render(html`
            <${ViraColorPicker.assign({
                color: '#112233',
            })}></${ViraColorPicker}>
        `);

        assert.instanceOf(fixture, ViraColorPicker);

        const colorSwatch = queryThroughShadow(fixture, ViraColorSwatch.tagName);

        assert.instanceOf(colorSwatch, ViraColorSwatch);

        const colorContainer = colorSwatch.shadowRoot.querySelector('div');

        assert.instanceOf(colorContainer, HTMLDivElement);
        assert.strictEquals(colorContainer.style.backgroundColor, 'rgb(17, 34, 51)');
    });
});
