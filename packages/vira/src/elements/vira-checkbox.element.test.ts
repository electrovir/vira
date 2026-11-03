import {assert, check, waitUntil} from '@augment-vir/assert';
import {awaitedBlockingMap} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {html, listen} from 'element-vir';
import {internalLucideIcons} from '../icons/internal-lucide-icons.js';
import {ViraCheckbox} from './vira-checkbox.element.js';
import {ViraIcon} from './vira-icon.element.js';

describe(ViraCheckbox.tagName, () => {
    async function renderTestCheckbox(inputs: Parameters<typeof ViraCheckbox.assign>[0]) {
        const valueChangeEvents: InstanceType<typeof ViraCheckbox.events.valueChange>[] = [];
        const nullableValueChangeEvents: InstanceType<
            typeof ViraCheckbox.events.nullableValueChange
        >[] = [];

        const fixture = await testWeb.render(html`
            <${ViraCheckbox.assign(inputs)}
                ${listen(ViraCheckbox.events.valueChange, (event) => {
                    valueChangeEvents.push(event);
                })}
                ${listen(ViraCheckbox.events.nullableValueChange, (event) => {
                    nullableValueChangeEvents.push(event);
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
            nullableEvents: nullableValueChangeEvents,
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

    it('renders a dash in the checked style when indeterminate', async () => {
        const {customCheckbox, icon} = await renderTestCheckbox({
            value: false,
            isIndeterminate: true,
        });

        assert.isTrue(customCheckbox.classList.contains('checked'));
        assert.strictEquals(customCheckbox.getAttribute('aria-checked'), 'mixed');
        assert.strictEquals(icon.instanceInputs.icon, internalLucideIcons.Minus16);
    });

    it('dispatches the negation of value when an indeterminate box is clicked', async () => {
        const {customCheckbox, events} = await renderTestCheckbox({
            value: false,
            isIndeterminate: true,
        });

        await testWeb.click(customCheckbox);

        assert.deepEquals(
            events.map((event) => event.detail),
            [
                true,
            ],
        );
    });

    it('renders an X mark in the blocked style when blocked', async () => {
        const {customCheckbox, icon} = await renderTestCheckbox({
            value: false,
            allowBlocked: true,
        });

        assert.deepEquals(
            {
                isBlocked: customCheckbox.classList.contains('blocked'),
                isChecked: customCheckbox.classList.contains('checked'),
                ariaChecked: customCheckbox.getAttribute('aria-checked'),
            },
            {
                isBlocked: true,
                isChecked: false,
                ariaChecked: 'false',
            },
        );
        assert.strictEquals(icon.instanceInputs.icon, internalLucideIcons.X16);
    });

    it('marks an unset tri-state box as mixed', async () => {
        const {customCheckbox} = await renderTestCheckbox({
            value: null,
            allowBlocked: true,
        });

        assert.deepEquals(
            {
                isBlocked: customCheckbox.classList.contains('blocked'),
                isChecked: customCheckbox.classList.contains('checked'),
                ariaChecked: customCheckbox.getAttribute('aria-checked'),
            },
            {
                isBlocked: false,
                isChecked: false,
                ariaChecked: 'mixed',
            },
        );
    });

    it('cycles empty, checked, then blocked when blocking is allowed', async () => {
        const dispatched = await awaitedBlockingMap(
            [
                null,
                true,
                false,
            ],
            async (value) => {
                const {customCheckbox, events, nullableEvents} = await renderTestCheckbox({
                    value,
                    allowBlocked: true,
                });

                await testWeb.click(customCheckbox);

                assert.isEmpty(events);
                return nullableEvents.map((event) => event.detail);
            },
        );

        assert.deepEquals(dispatched, [
            [
                true,
            ],
            [
                false,
            ],
            [
                null,
            ],
        ]);
    });

    it('cycles a tri-state box from the keyboard', async () => {
        const {customCheckbox, nullableEvents} = await renderTestCheckbox({
            value: null,
            allowBlocked: true,
        });

        customCheckbox.focus();
        await testWeb.typeText(' ');

        assert.deepEquals(
            nullableEvents.map((event) => event.detail),
            [
                true,
            ],
        );
    });

    it('does not cycle a disabled tri-state box', async () => {
        const {customCheckbox, nullableEvents} = await renderTestCheckbox({
            value: null,
            allowBlocked: true,
            isDisabled: true,
        });

        await testWeb.click(customCheckbox);

        assert.isEmpty(nullableEvents);
    });

    it('only dispatches valueChange without allowBlocked', async () => {
        const {customCheckbox, events, nullableEvents} = await renderTestCheckbox({
            value: false,
        });

        await testWeb.click(customCheckbox);

        assert.isEmpty(nullableEvents);
        assert.deepEquals(
            events.map((event) => event.detail),
            [
                true,
            ],
        );
    });
});
