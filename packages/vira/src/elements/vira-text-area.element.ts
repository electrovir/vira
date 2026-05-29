import {type PartialWithUndefined, randomString} from '@augment-vir/common';
import {attributes, css, defineElementEvent, html, ifDefined, listen} from 'element-vir';
import {createFocusStyles} from '../styles/focus.js';
import {viraFormCssVars} from '../styles/form-styles.js';
import {viraDisabledStyles} from '../styles/index.js';
import {noNativeFormStyles} from '../styles/native-styles.js';
import {defineViraElement} from '../util/define-vira-element.js';
import {
    type SharedTextInputElementInputs,
    filterTextInputValue,
    textInputListener,
} from '../util/shared-text-input-logic.js';
import {type ViraInput} from './vira-input.element.js';

/**
 * A multi-line text area element with all listeners properly attached. Mirrors the look and feel of
 * {@link ViraInput} but for multi-line text input.
 *
 * @category Input
 * @category Elements
 * @see https://electrovir.github.io/vira/book/elements/vira-text-area
 */
export const ViraTextArea = defineViraElement<
    PartialWithUndefined<{
        /** A label that is shown above the text area, if provided. */
        label: string;
        /** If true, applies error styling. */
        hasError: boolean;
        /** Number of visible text rows. Defaults to 4. */
        rows: number;
        /** If true, blocks the user's ability to resize the text area. */
        preventResize: boolean;
    }> &
        SharedTextInputElementInputs
>()({
    tagName: 'vira-text-area',
    cssVars: {
        'vira-text-area-padding-horizontal': '10px',
        'vira-text-area-padding-vertical': '6px',
    },
    styles: ({hostClasses, cssVars}) => css`
        :host {
            position: relative;
            display: inline-flex;
            width: 320px;
            box-sizing: border-box;
            color: ${viraFormCssVars['vira-form-foreground-color'].value};
        }

        label {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 2px;
            width: 100%;
            max-width: 100%;
            cursor: text;

            & .text-area-label {
                font-weight: ${viraFormCssVars['vira-form-label-font-weight'].value};
                text-align: left;
                flex-shrink: 0;
                flex-wrap: wrap;
            }
        }

        .text-area-wrapper {
            position: relative;
            display: inline-flex;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
        }

        textarea {
            ${noNativeFormStyles};
            overscroll-behavior: contain;
            font: inherit;
            cursor: text;
            width: 100%;
            box-sizing: border-box;
            padding: ${cssVars['vira-text-area-padding-vertical'].value}
                ${cssVars['vira-text-area-padding-horizontal'].value};
            border-radius: ${viraFormCssVars['vira-form-radius'].value};
            background-color: ${viraFormCssVars['vira-form-background-color'].value};
            border: 1px solid ${viraFormCssVars['vira-form-border-color'].value};
            color: inherit;
            resize: vertical;
            outline: none;

            &::placeholder {
                color: ${viraFormCssVars['vira-form-placeholder-color'].value};
            }

            &::selection {
                background: ${viraFormCssVars['vira-form-text-selection-color'].value};
            }

            &:focus:focus-visible:not([disabled]) ~ .focus-border {
                ${createFocusStyles({
                    elementBorderSize: '1px',
                    noNesting: true,
                })}
            }
        }

        .border-style {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: ${viraFormCssVars['vira-form-radius'].value};
            z-index: 0;
            pointer-events: none;
        }

        .readonly-value {
            white-space: pre-wrap;
            overflow-wrap: anywhere;
        }

        ${hostClasses['vira-text-area-prevent-resize'].selector} textarea {
            resize: none;
        }

        ${hostClasses['vira-text-area-error'].selector} textarea {
            border-color: ${viraFormCssVars['vira-form-error-color'].value};
        }

        ${hostClasses['vira-text-area-disabled'].selector} {
            cursor: not-allowed;

            & * {
                cursor: not-allowed;
            }

            & > * {
                ${viraDisabledStyles};
            }

            & .focus-border {
                display: none;
            }
        }
    `,
    events: {
        /**
         * Fires whenever a user input created a new value. Does not fire if all input letters are
         * filtered out due to input restrictions.
         */
        valueChange: defineElementEvent<string>(),
        /**
         * Fires when inputs are blocked. Useful for showing warnings or error messages to inform
         * the user why their input did not propagate if it was blocked. This does not fire for text
         * that was blocked out of programmatic "value" property assignments.
         */
        inputBlocked: defineElementEvent<string>(),
    },
    state() {
        return {
            /**
             * Used to couple the label and text area together. This is not applied if no label is
             * provided.
             */
            randomId: randomString(32),
        };
    },
    hostClasses: {
        'vira-text-area-disabled': ({inputs}) => !!inputs.disabled,
        'vira-text-area-error': ({inputs}) => !!inputs.hasError,
        'vira-text-area-prevent-resize': ({inputs}) => !!inputs.preventResize || !!inputs.disabled,
    },
    render({inputs, dispatch, state, events}) {
        const {filtered: filteredValue} = filterTextInputValue({
            value: inputs.value,
            allowed: inputs.allowedInputs,
            blocked: inputs.blockedInputs,
        });

        if (inputs.isReadonly) {
            const readonlyValueTemplate = html`
                <span class="readonly-value">${filteredValue}</span>
            `;

            if (inputs.label) {
                return html`
                    <label>
                        <span class="text-area-label">${inputs.label}</span>
                        ${readonlyValueTemplate}
                    </label>
                `;
            } else {
                return readonlyValueTemplate;
            }
        }

        const textAreaTemplate = html`
            <span class="text-area-wrapper">
                <textarea
                    id=${ifDefined(inputs.label ? state.randomId : undefined)}
                    aria-label=${ifDefined(inputs.label || undefined)}
                    rows=${inputs.rows ?? 4}
                    ?disabled=${inputs.disabled}
                    autocomplete=${ifDefined(inputs.disableBrowserHelps ? 'off' : undefined)}
                    autocorrect=${ifDefined(inputs.disableBrowserHelps ? 'off' : undefined)}
                    autocapitalize=${ifDefined(inputs.disableBrowserHelps ? 'off' : undefined)}
                    spellcheck=${ifDefined(inputs.disableBrowserHelps ? 'false' : undefined)}
                    placeholder=${ifDefined(inputs.placeholder || undefined)}
                    .value=${filteredValue}
                    ${listen('input', (event) => {
                        textInputListener({
                            inputs,
                            previousValue: filteredValue,
                            event,
                            elementConstructor: HTMLTextAreaElement,
                            inputBlockedCallback(blockedInput) {
                                dispatch(new events.inputBlocked(blockedInput));
                            },
                            newValueCallback(newValue) {
                                dispatch(new events.valueChange(newValue));
                            },
                        });
                    })}
                    ${attributes(inputs.attributePassthrough)}
                ></textarea>

                <div class="border-style focus-border"></div>
            </span>
        `;

        if (inputs.label) {
            return html`
                <label for=${state.randomId}>
                    <span class="text-area-label">${inputs.label}</span>
                    ${textAreaTemplate}
                </label>
            `;
        } else {
            return textAreaTemplate;
        }
    },
});
