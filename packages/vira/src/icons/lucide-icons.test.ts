import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {html} from 'element-vir';
import {ViraIcon} from '../elements/vira-icon.element.js';
import {lucideIcons} from './lucide-icons.js';

describe('lucideIcons', () => {
    it('accesses a single icon', () => {
        const icon = lucideIcons.Check;

        assert.isDefined(icon);
        assert.strictEquals(icon.name, 'Check');
        assert.isDefined(icon.svgTemplate);
    });

    it('renders with ViraIcon', async () => {
        const fixture = await testWeb.render(html`
            <${ViraIcon.assign({
                icon: lucideIcons.Check,
            })}></${ViraIcon}>
        `);

        assert.instanceOf(fixture, ViraIcon);

        const internalSvg = fixture.shadowRoot.querySelector('svg');
        assert.instanceOf(internalSvg, SVGSVGElement);
    });
});
