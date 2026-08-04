import {assert, assertWrap} from '@augment-vir/assert';
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

    it('shows the time and timezone on a readonly date field by default', async () => {
        const absoluteTime = await renderReadonlyDateForm({
            label: 'Birthday',
            value: createUtcFullDate('1942-06-15'),
            timezone: utcTimezone,
        });

        assert.strictEquals(absoluteTime.shadowRoot.textContent.trim(), 'Jun 15, 1942 00:00 UTC');
    });
});
