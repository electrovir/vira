import {assert, assertWrap} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {waitForAnimationFrame} from '@augment-vir/web';
import {createUtcFullDate, TimezoneName, utcTimezone} from 'date-vir';
import {html} from 'element-vir';
import {formatAbsoluteTime, ViraAbsoluteTime} from './vira-absolute-time.element.js';

const exampleTime = createUtcFullDate('2026-06-03T14:30:00Z');

describe(formatAbsoluteTime.name, () => {
    it('formats both date and time by default', () => {
        assert.strictEquals(
            formatAbsoluteTime(exampleTime, {
                timezone: utcTimezone,
            }),
            'Jun 3, 2026 14:30 UTC',
        );
    });

    it('formats the date only', () => {
        assert.strictEquals(
            formatAbsoluteTime(exampleTime, {
                showDateOnly: true,
                timezone: utcTimezone,
            }),
            'Jun 3, 2026',
        );
    });

    it('formats the time only', () => {
        assert.strictEquals(
            formatAbsoluteTime(exampleTime, {
                showTimeOnly: true,
                timezone: utcTimezone,
            }),
            '14:30 UTC',
        );
    });

    it('converts to the given timezone', () => {
        /**
         * The trailing zone abbreviation (`EDT` vs `GMT-4`) is browser dependent, so only the
         * converted date and time (14:30 UTC becomes 10:30 in New York) is asserted here.
         */
        assert.startsWith(
            formatAbsoluteTime(exampleTime, {
                timezone: TimezoneName['America/New_York'],
            }),
            'Jun 3, 2026 10:30',
        );
    });

    it('renders nothing when both date and time are hidden', () => {
        assert.strictEquals(
            formatAbsoluteTime(exampleTime, {
                showDateOnly: true,
                showTimeOnly: true,
                timezone: utcTimezone,
            }),
            '',
        );
    });
});

describe(ViraAbsoluteTime.tagName, () => {
    async function renderTime(inputs: Parameters<typeof ViraAbsoluteTime.assign>[0]) {
        const fixture = await testWeb.render(html`
            <div>
                <${ViraAbsoluteTime.assign(inputs)}></${ViraAbsoluteTime}>
            </div>
        `);
        const instance = assertWrap.instanceOf(
            fixture.querySelector(ViraAbsoluteTime.tagName),
            ViraAbsoluteTime,
        );
        await waitForAnimationFrame();

        return instance;
    }

    it('renders the full timestamp', async () => {
        const instance = await renderTime({
            time: exampleTime,
            timezone: utcTimezone,
        });

        assert.strictEquals(instance.shadowRoot.textContent.trim(), 'Jun 3, 2026 14:30 UTC');
    });

    it('renders the date only', async () => {
        const instance = await renderTime({
            time: exampleTime,
            showDateOnly: true,
            timezone: utcTimezone,
        });

        assert.strictEquals(instance.shadowRoot.textContent.trim(), 'Jun 3, 2026');
    });

    it('renders the time only', async () => {
        const instance = await renderTime({
            time: exampleTime,
            showTimeOnly: true,
            timezone: utcTimezone,
        });

        assert.strictEquals(instance.shadowRoot.textContent.trim(), '14:30 UTC');
    });
});
