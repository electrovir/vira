import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {html} from 'element-vir';
import {ViraIcon} from '../elements/vira-icon.element.js';
import {featherIcons} from './feather-icons.js';

describe('featherIcons', () => {
    it('accesses a single icon', () => {
        const icon = featherIcons.check;

        assert.isDefined(icon);
        assert.strictEquals(icon.name, 'check');
        assert.isDefined(icon.svgTemplate);
    });

    it('renders with ViraIcon', async () => {
        const fixture = await testWeb.render(html`
            <${ViraIcon.assign({
                icon: featherIcons.check,
            })}></${ViraIcon}>
        `);

        assert.instanceOf(fixture, ViraIcon);

        const internalSvg = fixture.shadowRoot.querySelector('svg');
        assert.instanceOf(internalSvg, SVGSVGElement);
    });
});
