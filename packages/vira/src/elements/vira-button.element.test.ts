import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {html} from 'element-vir';
import {internalLucideIcons} from '../icons/internal-lucide-icons.js';
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
});
