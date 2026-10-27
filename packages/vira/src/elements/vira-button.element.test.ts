import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {html} from 'element-vir';
import {internalLucideIcons} from '../icons/internal-lucide-icons.js';
import {createSizedIcon} from '../icons/sized-icon.js';
import {ViraEmphasis, ViraSize} from '../styles/form-variants.js';
import {ViraButton} from './vira-button.element.js';
import {ViraIcon} from './vira-icon.element.js';

describe(ViraButton.tagName, () => {
    it('renders leading and right-side icons', async () => {
        const fixture = await testWeb.render(html`
            <${ViraButton.assign({
                text: 'Button',
                icon: internalLucideIcons.Check16,
                rightSideIcon: internalLucideIcons.ChevronDown16,
            })}></${ViraButton}>
        `);

        assert.instanceOf(fixture, ViraButton);

        const button = fixture.shadowRoot.querySelector('button');

        assert.instanceOf(button, HTMLButtonElement);
        assert.deepEquals(
            Array.from(button.children).map(({tagName}) => {
                return tagName.toLowerCase();
            }),
            [
                ViraIcon.tagName,
                'span',
                ViraIcon.tagName,
            ],
        );
    });

    it('does not overflow when it only has an icon', async () => {
        const fixture = await testWeb.render(html`
            <${ViraButton.assign({
                icon: createSizedIcon(internalLucideIcons.Check16, 20),
                buttonEmphasis: ViraEmphasis.Subtle,
                buttonSize: ViraSize.Small,
            })}></${ViraButton}>
        `);

        assert.instanceOf(fixture, ViraButton);

        const button = fixture.shadowRoot.querySelector('button');

        assert.instanceOf(button, HTMLButtonElement);
        assert.isAtMost(button.scrollWidth, button.clientWidth);
    });
});
