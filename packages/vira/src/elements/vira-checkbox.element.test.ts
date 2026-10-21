import {assert, check, waitUntil} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {html, listen} from 'element-vir';
import {internalLucideIcons} from '../icons/internal-lucide-icons.js';
import {ViraCheckbox} from './vira-checkbox.element.js';
import {ViraIcon} from './vira-icon.element.js';

describe(ViraCheckbox.tagName, () => {
    async function renderTestCheckbox(inputs: Parameters<typeof ViraCheckbox.assign>[0]) {
        const valueChangeEvents: InstanceType<typeof ViraCheckbox.events.valueChange>[] = [];

        const fixture = await testWeb.render(html`
            <${ViraCheckbox.assign(inputs)}
                ${listen(ViraCheckbox.events.valueChange, (event) => {
                    valueChangeEvents.push(event);
                })}
            ></${ViraCheckbox}>
        `);

        assert.instanceOf(fixture, ViraCheckbox);

        const customCheckbox = fixture.shadowRoot.querySelector('.custom-checkbox');
        assert.instanceOf(customCheckbox, HTMLSpanElement);
        const icon = fixture.shadowRoot.querySelector(ViraIcon.tagName);
        assert.instanceOf(icon, ViraIcon);

        return {
            customCheckbox,
            icon,
            events: valueChangeEvents,
        };
    }

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

    it('renders a check mark when checked', async () => {
        const {customCheckbox, icon} = await renderTestCheckbox({
            value: true,
        });

        assert.isTrue(customCheckbox.classList.contains('checked'));
        assert.strictEquals(customCheckbox.getAttribute('aria-checked'), 'true');
        assert.strictEquals(icon.instanceInputs.icon, internalLucideIcons.Check16);
    });

    it('renders a dash in the checked style when partly checked', async () => {
        const {customCheckbox, icon} = await renderTestCheckbox({
            value: false,
            isPartlyChecked: true,
        });

        assert.isTrue(customCheckbox.classList.contains('checked'));
        assert.strictEquals(customCheckbox.getAttribute('aria-checked'), 'mixed');
        assert.strictEquals(icon.instanceInputs.icon, internalLucideIcons.Minus16);
    });

    it('dispatches the negation of value when a partly checked box is clicked', async () => {
        const {customCheckbox, events} = await renderTestCheckbox({
            value: false,
            isPartlyChecked: true,
        });

        await testWeb.click(customCheckbox);

        assert.deepEquals(
            events.map((event) => event.detail),
            [
                true,
            ],
        );
    });
});
