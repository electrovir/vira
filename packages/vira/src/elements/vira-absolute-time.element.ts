import {type PartialWithUndefined} from '@augment-vir/common';
import {
    type FullDate,
    createFullDate,
    createFullDateInUserTimezone,
    toFormattedString,
} from 'date-vir';
import {css} from 'element-vir';
import {defineViraElement} from '../util/define-vira-element.js';

/**
 * Displays a `FullDate` as an absolute, human readable timestamp in the user's timezone (for
 * example `Jun 3, 2026 14:30 PDT`).
 *
 * @category Time
 * @category Elements
 * @see https://electrovir.github.io/vira/book/elements/vira-absolute-time
 */
export const ViraAbsoluteTime = defineViraElement<
    {
        time: Readonly<FullDate>;
    } & PartialWithUndefined<{
        /**
         * Show only the date part (`Jun 3, 2026`), omitting the time of day and timezone. Use this
         * for values that are conceptually dates (e.g. captured via a date-only input), where the
         * time of day would be meaningless noise.
         */
        dateOnly: boolean;
        /**
         * Timezone the value is displayed in. Defaults to the user's timezone. Set this for values
         * that are conceptually anchored to a specific timezone (e.g. a date-only value stored at
         * midnight UTC), where converting to the user's timezone would shift the displayed
         * date/time.
         */
        timezone: string;
    }>
>()({
    tagName: 'vira-absolute-time',
    styles: css`
        :host {
            white-space: nowrap;
        }
    `,
    render({inputs}) {
        return formatAbsoluteTime(inputs.time, {
            dateOnly: inputs.dateOnly,
            timezone: inputs.timezone,
        });
    },
});

/**
 * Formats a `FullDate` into the same absolute string rendered by {@link ViraAbsoluteTime}.
 *
 * @category Time
 */
export function formatAbsoluteTime(
    time: Readonly<FullDate>,
    options?: Readonly<
        PartialWithUndefined<{
            dateOnly: boolean;
            timezone: string;
        }>
    >,
) {
    return toFormattedString(
        options?.timezone
            ? createFullDate(time, options.timezone)
            : createFullDateInUserTimezone(time),
        options?.dateOnly ? 'MMM d, yyyy' : 'MMM d, yyyy HH:mm ZZZZ',
    );
}
