import {assert, check, waitUntil} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {html} from 'element-vir';
import {ViraCheckbox} from './vira-checkbox.element.js';

describe(ViraCheckbox.tagName, () => {
    it('falls back to the label input when the slot is not filled', async () => {
        const fixture = await testWeb.render(html`
            <${ViraCheckbox.assign({
                value: false,
                label: 'fallback label',
            })}></${ViraCheckbox}>
        `);

        assert.instanceOf(fixture, ViraCheckbox);

        const labelText = fixture.shadowRoot.querySelector('.label-text');
        assert.instanceOf(labelText, HTMLSpanElement);
        assert.isFalse(labelText.classList.contains('empty'));
        assert.strictEquals(labelText.textContent.trim(), 'fallback label');
    });

    it('renders slotted label content over the label input', async () => {
        const fixture = await testWeb.render(html`
            <${ViraCheckbox.assign({
                value: false,
                label: 'fallback label',
            })}>
                <span slot=${ViraCheckbox.slotNames['vira-checkbox-label']}>slotted label</span>
            </${ViraCheckbox}>
        `);

        assert.instanceOf(fixture, ViraCheckbox);

        const slotElement = fixture.shadowRoot.querySelector('slot');
        assert.instanceOf(slotElement, HTMLSlotElement);

        const assignedNodes = slotElement.assignedNodes();
        assert.isLengthExactly(assignedNodes, 1);
        assert.strictEquals(assignedNodes[0].textContent?.trim(), 'slotted label');
    });

    it('hides the label area when there is no label or slotted content', async () => {
        const fixture = await testWeb.render(html`
            <${ViraCheckbox.assign({
                value: false,
            })}></${ViraCheckbox}>
        `);

        assert.instanceOf(fixture, ViraCheckbox);

        const labelText = fixture.shadowRoot.querySelector('.label-text');
        assert.instanceOf(labelText, HTMLSpanElement);
        assert.isTrue(labelText.classList.contains('empty'));
    });

    it('reveals the label area once slotted content is present', async () => {
        const fixture = await testWeb.render(html`
            <${ViraCheckbox.assign({
                value: false,
            })}>
                <span slot=${ViraCheckbox.slotNames['vira-checkbox-label']}>slotted label</span>
            </${ViraCheckbox}>
        `);

        assert.instanceOf(fixture, ViraCheckbox);

        await waitUntil.isTruthy(() => {
            const labelText = fixture.shadowRoot.querySelector('.label-text');
            return check.isDefined(labelText) && !labelText.classList.contains('empty');
        });
    });
});
