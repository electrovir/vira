import {type PartialWithUndefined, randomString} from '@augment-vir/common';
import {extractEventTarget} from '@augment-vir/web';
import {
    calculateRelativeDate,
    createUtcFullDate,
    type FullDate,
    FullDatePart,
    getNowInUtcTimezone,
    parseInputElementValue,
    toHtmlInputString,
    userTimezone,
} from 'date-vir';
import {css, defineElementEvent, html, ifDefined, listen} from 'element-vir';
import {viraDisabledStyles} from '../styles/disabled.js';
import {viraFormCssVars} from '../styles/form-styles.js';
import {defineViraElement} from '../util/define-vira-element.js';
import {ViraAbsoluteTime} from './vira-absolute-time.element.js';

/**
 * A native date picker input that emits `FullDate` values. Fires `valueChange` whenever the user
 * selects (or clears) a date.
 *
 * @category Input
 * @category Elements
 * @see https://electrovir.github.io/vira/book/elements/vira-date-input
 */
export const ViraDateInput = defineViraElement<
    {
        value: FullDate | undefined;
    } & PartialWithUndefined<{
        /** Lower bound for selectable dates. Defaults to `1800-01-01` when omitted. */
        min: FullDate;
        /** Upper bound for selectable dates. Defaults to 10 years from now when omitted. */
        max: FullDate;
        /** If true, applies error styling. */
        hasError: boolean;
        /** A label that is shown above the input, if provided. */
        label: string;
        /** If true, the input is disabled and cannot be edited. */
        isDisabled: boolean;
        /** If true, the current value is rendered as plain text instead of an editable input. */
        isReadonly: boolean;
        /** Timezone used to interpret the selected date. Defaults to the user's timezone. */
        timezone: string;
        /** Only show the date part of the selected date when in readonly mode. */
        showDateOnly: boolean;
        /** Only show the time part of the selected date when in readonly mode. */
        showTimeOnly: boolean;
    }>
>()({
    tagName: 'vira-date-input',
    events: {
        /** Fires whenever the user selects or clears a date. */
        valueChange: defineElementEvent<FullDate | undefined>(),
    },
    state() {
        return {
            /** Used to couple the label and input together. Not applied when no label is provided. */
            randomId: randomString(32),
        };
    },
    hostClasses: {
        'vira-date-input-error': ({inputs}) => !!inputs.hasError,
        'vira-date-input-disabled': ({inputs}) => !!inputs.isDisabled,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: inline-block;
            width: 224px;
            color: ${viraFormCssVars['vira-form-foreground-color'].value};
        }

        label {
            display: flex;
            flex-direction: column;
            gap: 2px;
            width: 100%;
        }

        .input-label {
            font-weight: ${viraFormCssVars['vira-form-label-font-weight'].value};
            text-align: left;
        }

        input {
            box-sizing: border-box;
            width: 100%;
            padding: 4px 8px;
            font-size: inherit;
            border: 1px solid ${viraFormCssVars['vira-form-border-color'].value};
            border-radius: ${viraFormCssVars['vira-form-radius'].value};
            background-color: ${viraFormCssVars['vira-form-background-color'].value};
            color: ${viraFormCssVars['vira-form-foreground-color'].value};
        }

        ${hostClasses['vira-date-input-error'].selector} input {
            border-color: ${viraFormCssVars['vira-form-error-color'].value};
        }

        ${hostClasses['vira-date-input-disabled'].selector} {
            cursor: not-allowed;

            & input {
                ${viraDisabledStyles};
            }
        }
    `,
    render({inputs, state, dispatch, events}) {
        if (inputs.isReadonly) {
            const readonlyTemplate = inputs.value
                ? html`
                      <${ViraAbsoluteTime.assign({
                          time: inputs.value,
                          showDateOnly: inputs.showDateOnly,
                          showTimeOnly: inputs.showTimeOnly,
                          timezone: inputs.timezone,
                      })}></${ViraAbsoluteTime}>
                  `
                : html`
                      <span class="readonly-value">&nbsp;</span>
                  `;

            if (inputs.label) {
                return html`
                    <label>
                        <span class="input-label">${inputs.label}</span>
                        ${readonlyTemplate}
                    </label>
                `;
            } else {
                return readonlyTemplate;
            }
        }

        const inputValue = inputs.value ? toHtmlInputString(inputs.value, FullDatePart.Date) : '';
        const minDate = toHtmlInputString(
            inputs.min || createUtcFullDate('1800-01-01'),
            FullDatePart.Date,
        );
        const maxDate = toHtmlInputString(
            inputs.max ||
                calculateRelativeDate(getNowInUtcTimezone(), {
                    years: 10,
                }),
            FullDatePart.Date,
        );

        const inputTemplate = html`
            <input
                id=${ifDefined(inputs.label ? state.randomId : undefined)}
                aria-label=${ifDefined(inputs.label || undefined)}
                type="date"
                min=${minDate}
                max=${maxDate}
                ?disabled=${inputs.isDisabled}
                .value=${inputValue}
                ${listen('input', (event) => {
                    const element = extractEventTarget(event, HTMLInputElement);
                    dispatch(
                        new events.valueChange(
                            parseInputElementValue(element, inputs.timezone || userTimezone),
                        ),
                    );
                })}
            />
        `;

        if (inputs.label) {
            return html`
                <label for=${state.randomId}>
                    <span class="input-label">${inputs.label}</span>
                    ${inputTemplate}
                </label>
            `;
        } else {
            return inputTemplate;
        }
    },
});
