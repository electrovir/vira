import {type PartialWithUndefined} from '@augment-vir/common';
import {
    type AnyDuration,
    type AtLeastOneDuration,
    convertDuration,
    type FullDate,
    getNowInUtcTimezone,
    toRelativeString,
} from 'date-vir';
import {css, html, nothing} from 'element-vir';
import {viraTheme} from '../styles/vira-color-theme.js';
import {defineViraElement} from '../util/define-vira-element.js';
import {formatAbsoluteTime, ViraAbsoluteTime} from './vira-absolute-time.element.js';

/**
 * Displays a date/time as a live, relative timestamp (for example `5 minutes ago`). The relative
 * string automatically updates over time. Optionally renders the absolute timestamp beneath the
 * relative string.
 *
 * @category Time
 * @category Elements
 * @see https://electrovir.github.io/vira/book/elements/vira-relative-time
 */
export const ViraRelativeTime = defineViraElement<
    {
        time: Readonly<FullDate>;
    } & PartialWithUndefined<{
        /** When true, the absolute timestamp is rendered beneath the relative string. */
        showAbsoluteTime: boolean;
        /**
         * How long before the relative time updates.
         *
         * @default {seconds: 5}
         */
        updateInterval: Readonly<AtLeastOneDuration>;
        /**
         * Timezone the absolute time is displayed in. Defaults to the user's timezone. Set this for
         * values that are conceptually anchored to a specific timezone (e.g. a date-only value
         * stored at midnight UTC), where converting to the user's timezone would shift the
         * displayed date/time.
         */
        timezone: string;
    }>
>()({
    tagName: 'vira-relative-time',
    styles: css`
        :host {
            display: inline-flex;
            flex-direction: column;
            white-space: nowrap;
        }

        ${ViraAbsoluteTime} {
            font-size: 12px;
            color: ${viraTheme.colors['vira-grey-foreground-non-body'].foreground.value};
        }
    `,
    state() {
        return {
            now: getNowInUtcTimezone(),
            timeoutId: undefined as undefined | ReturnType<typeof globalThis.setTimeout>,
        };
    },
    init({inputs, updateState}) {
        /**
         * Reschedule with a fresh timeout after each update so the delay always reflects the
         * current `updateInterval` input.
         */
        function scheduleNextUpdate() {
            const updateInterval: AnyDuration = inputs.updateInterval || {
                seconds: 5,
            };
            updateState({
                timeoutId: globalThis.setTimeout(
                    () => {
                        updateState({
                            now: getNowInUtcTimezone(),
                        });
                        scheduleNextUpdate();
                    },
                    convertDuration(updateInterval, {
                        milliseconds: true,
                    }).milliseconds,
                ),
            });
        }

        scheduleNextUpdate();
    },
    cleanup({state, updateState}) {
        globalThis.clearTimeout(state.timeoutId);
        updateState({
            timeoutId: undefined,
        });
    },
    render({state, inputs}) {
        const relativeTime = toRelativeString(
            {
                start: state.now,
                end: inputs.time,
            },
            {
                years: true,
                months: true,
                days: true,
                hours: true,
                minutes: true,
                seconds: true,
            },
            {
                useOnlyLargestUnit: true,
                decimalCount: 0,
            },
        );

        return html`
            <span
                title=${formatAbsoluteTime(inputs.time, {
                    timezone: inputs.timezone,
                })}
            >
                ${relativeTime}
            </span>
            ${inputs.showAbsoluteTime
                ? html`
                      <${ViraAbsoluteTime.assign({
                          time: inputs.time,
                          timezone: inputs.timezone,
                      })}></${ViraAbsoluteTime}>
                  `
                : nothing}
        `;
    },
});
