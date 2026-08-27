import {assert, assertWrap, check} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {queryThroughShadow, waitForAnimationFrame} from '@augment-vir/web';
import {createUtcFullDate, utcTimezone} from 'date-vir';
import {html} from 'element-vir';
import {ViraFormFieldType, type ViraFormField} from '../util/vira-form-fields.js';
import {ViraAbsoluteTime} from './vira-absolute-time.element.js';
import {ViraForm} from './vira-form.element.js';

describe(ViraForm.tagName, () => {
    async function renderReadonlyDateForm(
        field: Readonly<Omit<Extract<ViraFormField, {type: ViraFormFieldType.Date}>, 'type'>>,
    ) {
        const fixture = await testWeb.render(html`
            <div>
                <${ViraForm.assign({
                    isReadonly: true,
                    fields: {
                        birthday: {
                            ...field,
                            type: ViraFormFieldType.Date,
                        },
                    },
                })}></${ViraForm}>
            </div>
        `);
        await waitForAnimationFrame();

        return assertWrap.instanceOf(
            queryThroughShadow(fixture, ViraAbsoluteTime.tagName),
            ViraAbsoluteTime,
        );
    }

    it('forwards showDateOnly to a readonly date field', async () => {
        const absoluteTime = await renderReadonlyDateForm({
            label: 'Birthday',
            value: createUtcFullDate('1942-06-15'),
            timezone: utcTimezone,
            showDateOnly: true,
        });

        assert.strictEquals(absoluteTime.shadowRoot.textContent.trim(), 'Jun 15, 1942');
    });

    it('vertically centers every readonly horizontal label against its value', async () => {
        const fixture = await testWeb.render(html`
            <div>
                <${ViraForm.assign({
                    isReadonly: true,
                    useHorizontalLabels: true,
                    fields: {
                        birthday: {
                            label: 'Birthday',
                            type: ViraFormFieldType.Date,
                            value: createUtcFullDate('1942-06-15'),
                            timezone: utcTimezone,
                            showDateOnly: true,
                        },
                        city: {
                            label: 'City',
                            type: ViraFormFieldType.Text,
                            value: 'Example City',
                        },
                        /**
                         * A readonly select renders plain text like the other fields, so its row
                         * must match their height instead of keeping the taller select chrome.
                         */
                        state: {
                            label: 'State',
                            type: ViraFormFieldType.Select,
                            value: 'colorado',
                            options: [
                                {
                                    label: 'Colorado',
                                    value: 'colorado',
                                },
                                {
                                    label: 'Kansas',
                                    value: 'kansas',
                                },
                            ],
                        },
                    },
                })}></${ViraForm}>
            </div>
        `);
        await waitForAnimationFrame();

        /**
         * Measured on the text itself rather than on the cells: the cells always line up, and it is
         * the glyphs inside an over-tall field that drift away from the label.
         */
        function measureTextCenter(root: Node) {
            const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
            const centers: number[] = [];

            while (walker.nextNode()) {
                if (!walker.currentNode.textContent?.trim()) {
                    continue;
                }

                const range = document.createRange();
                range.selectNodeContents(walker.currentNode);
                const box = range.getBoundingClientRect();

                if (box.height) {
                    centers.push(box.top + box.height / 2);
                }
            }

            return centers.length ? centers[0] : undefined;
        }

        function findValueTextCenter(element: Element): number | undefined {
            return (
                measureTextCenter(element) ??
                (element.shadowRoot
                    ? (measureTextCenter(element.shadowRoot) ??
                      Array.from(element.shadowRoot.querySelectorAll('*'))
                          .map((child) => findValueTextCenter(child))
                          .find(check.isNumber))
                    : undefined)
            );
        }

        const table = assertWrap.instanceOf(queryThroughShadow(fixture, 'table'), HTMLTableElement);
        const rowOffsets = Array.from(table.querySelectorAll('tr')).map((row) => {
            const labelCell = assertWrap.instanceOf(row.querySelector('th'), HTMLElement);
            const labelCenter = assertWrap.isNumber(measureTextCenter(labelCell));
            const valueCenter = assertWrap.isNumber(
                findValueTextCenter(
                    assertWrap.instanceOf(
                        assertWrap.instanceOf(row.querySelector('td'), HTMLElement)
                            .firstElementChild,
                        HTMLElement,
                    ),
                ),
            );

            return {
                label: labelCell.textContent.trim(),
                /** Sub-pixel text metrics differ per browser, so allow a rounding pixel. */
                isCentered: Math.abs(labelCenter - valueCenter) <= 1,
            };
        });

        assert.deepEquals(rowOffsets, [
            {
                label: 'Birthday',
                isCentered: true,
            },
            {
                label: 'City',
                isCentered: true,
            },
            {
                label: 'State',
                isCentered: true,
            },
        ]);
    });

    it('shows the time and timezone on a readonly date field by default', async () => {
        const absoluteTime = await renderReadonlyDateForm({
            label: 'Birthday',
            value: createUtcFullDate('1942-06-15'),
            timezone: utcTimezone,
        });

        assert.strictEquals(absoluteTime.shadowRoot.textContent.trim(), 'Jun 15, 1942 00:00 UTC');
    });
});
