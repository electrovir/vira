import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {html} from 'element-vir';
import {ViraIcon} from '../elements/vira-icon.element.js';
import {createColoredIcon} from './colored-icon.js';
import {internalLucideIcons} from './internal-lucide-icons.js';
import {createSizedIcon} from './sized-icon.js';

describe(createColoredIcon.name, () => {
    it('renders at the size of a sized icon', async () => {
        const fixture = await testWeb.render(html`
            <${ViraIcon.assign({
                icon: createColoredIcon(createSizedIcon(internalLucideIcons.Check16, 24), {
                    'vira-icon-stroke-color': 'red',
                }),
            })}></${ViraIcon}>
        `);

        assert.instanceOf(fixture, ViraIcon);

        const internalSvg = fixture.shadowRoot.querySelector('svg');
        assert.instanceOf(internalSvg, SVGSVGElement);
        assert.deepEquals(
            {
                width: internalSvg.getBoundingClientRect().width,
                height: internalSvg.getBoundingClientRect().height,
            },
            {
                width: 24,
                height: 24,
            },
        );
    });
});
