import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {html} from 'element-vir';
import {internalLucideIcons} from '../icons/internal-lucide-icons.js';
import {createSizedIcon} from '../icons/sized-icon.js';
import {ViraEmphasis, ViraSize} from '../styles/form-variants.js';
import {ViraButton} from './vira-button.element.js';
import {ViraIcon} from './vira-icon.element.js';

async function renderInNarrowContainer(inputs: typeof ViraButton.InputsType) {
    const fixture = await testWeb.render(html`
        <div style="width: 60px">
            <${ViraButton.assign(inputs)} style="max-width: 100%"></${ViraButton}>
        </div>
    `);

    const viraButton = fixture.querySelector(ViraButton.tagName);
    assert.instanceOf(viraButton, ViraButton);

    return viraButton;
}

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

        const slot = fixture.shadowRoot.querySelector('button slot');

        assert.instanceOf(slot, HTMLSlotElement);
        assert.deepEquals(
            Array.from(slot.children).map(({tagName}) => {
                return tagName.toLowerCase();
            }),
            [
                ViraIcon.tagName,
                'span',
                ViraIcon.tagName,
            ],
        );
    });

    it('renders slotted content instead of the text and icons', async () => {
        const fixture = await testWeb.render(html`
            <${ViraButton.assign({
                text: 'Fallback',
                icon: internalLucideIcons.Check16,
            })}>
                <b>Slotted</b>
            </${ViraButton}>
        `);

        assert.instanceOf(fixture, ViraButton);

        const slot = fixture.shadowRoot.querySelector('slot');

        assert.instanceOf(slot, HTMLSlotElement);
        assert.deepEquals(
            slot.assignedElements().map(({textContent}) => {
                return textContent;
            }),
            [
                'Slotted',
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

    it('does not cut off a long word on the left in a narrow container', async () => {
        const viraButton = await renderInNarrowContainer({
            text: 'Configuration',
            rightSideIcon: internalLucideIcons.ChevronDown16,
        });

        const button = viraButton.shadowRoot.querySelector('button');
        const text = viraButton.shadowRoot.querySelector('.text-template');
        const icon = viraButton.shadowRoot.querySelector(ViraIcon.tagName);

        assert.instanceOf(button, HTMLButtonElement);
        assert.instanceOf(text, HTMLElement);
        assert.instanceOf(icon, HTMLElement);

        const textRange = document.createRange();
        textRange.selectNodeContents(text);

        assert.isAtLeast(
            textRange.getBoundingClientRect().left,
            button.getBoundingClientRect().left,
        );
        assert.strictEquals(icon.getBoundingClientRect().width, 16);
    });

    it('keeps long text on one line with truncateOnOverflow', async () => {
        const singleWord = await renderInNarrowContainer({
            text: 'Configuration',
        });
        const wrapped = await renderInNarrowContainer({
            text: 'Download the full quarterly report',
        });
        const notWrapped = await renderInNarrowContainer({
            text: 'Download the full quarterly report',
            truncateOnOverflow: true,
        });

        const singleLineHeight = singleWord.getBoundingClientRect().height;

        assert.isAbove(wrapped.getBoundingClientRect().height, singleLineHeight);
        assert.strictEquals(notWrapped.getBoundingClientRect().height, singleLineHeight);
    });
});
