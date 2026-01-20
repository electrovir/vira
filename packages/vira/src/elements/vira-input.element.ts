import {assertWrap} from '@augment-vir/assert';
import {type PartialWithUndefined, randomString} from '@augment-vir/common';
import {extractEventTarget} from '@augment-vir/web';
import {
    attributes,
    css,
    defineElementEvent,
    html,
    ifDefined,
    listen,
    nothing,
    onResize,
    renderIf,
} from 'element-vir';
import {CloseX24Icon} from '../icons/icon-svgs/close-x-24.icon.js';
import {EyeClosed24Icon, EyeOpen24Icon, type ViraIconSvg} from '../icons/index.js';
import {createFocusStyles} from '../styles/focus.js';
import {viraFormCssVars} from '../styles/form-styles.js';
import {noUserSelect, viraAnimationDurations, viraDisabledStyles} from '../styles/index.js';
import {noNativeFormStyles} from '../styles/native-styles.js';
import {defineViraElement} from './define-vira-element.js';
import {
    type SharedTextInputElementInputs,
    filterTextInputValue,
    textInputListener,
} from './shared-text-input-logic.js';
import {ViraIcon} from './vira-icon.element.js';

export * from './shared-text-input-logic.js';

/**
 * Input types for {@link ViraInput}.
 *
 * @category Internal
 */
export enum ViraInputType {
    Default = 'text',
    Password = 'password',
    Email = 'email',
}

/**
 * A single line input element with all listeners properly attached. Multiple types are allowed with
 * {@link ViraInputType}.
 *
 * @category Input
 * @category Elements
 * @see https://electrovir.github.io/vira/book/elements/vira-input
 */
export const ViraInput = defineViraElement<
    Readonly<
        PartialWithUndefined<{
            icon: Pick<ViraIconSvg, 'svgTemplate'>;
            /** A suffix that, if provided, is shown following the input field. */
            suffix: string;
            /** A label that is shown above the input, if provided. */
            label: string;
            /** If true, applies error styling. */
            hasError: boolean;
            showClearButton: boolean;
            type: ViraInputType;
        }> &
            SharedTextInputElementInputs
    >
>()({
    tagName: 'vira-input',
    cssVars: {
        'vira-input-padding-horizontal': '10px',
        'vira-input-padding-vertical': '6px',
    },
    styles: ({hostClasses, cssVars}) => {
        return css`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
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

                & .input-label {
                    font-weight: ${viraFormCssVars['vira-form-label-font-weight'].value};
                    text-align: left;
                    flex-shrink: 0;
                    flex-wrap: wrap;
                }
            }

            ${hostClasses['vira-input-fit-text'].selector} {
                width: unset;
            }
            ${hostClasses['vira-input-fit-text'].selector} input {
                flex-grow: 0;
            }
            ${hostClasses['vira-input-fit-text'].selector} input.has-value {
                /*
                    Account for weird Safari <input> behavior with text alignment and size. so we
                    don't lose a pixel on the left side.
                    Only apply this when <input> has a value, otherwise externally-set width and a
                    placeholder input will cause the text selector bar to initially be in the center
                    of the element.
                */
                text-align: center;
            }
            ${hostClasses['vira-input-fit-text'].selector} .size-span {
                ${noNativeFormStyles};
                font-family: inherit;
                display: inline-block;
                font-size: inherit;
                line-height: inherit;
                box-sizing: border-box;
                position: absolute;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                z-index: -1;
                width: min-content;
                ${noUserSelect};
                vertical-align: middle;
                max-height: 100%;
            }

            ${hostClasses['vira-input-clear-button-shown'].selector} .input-wrapper {
                padding-right: 4px;
            }

            pre {
                ${noNativeFormStyles};
                font: inherit;
                /*
                    Leave at least a few pixels for the cursor bar when there is no text at all.
                    This also accounts for a weird Safari <input> behavior where the text moves
                    around if it's not given a tiny bit of padding.
                */
                padding-left: 2px;
                display: block;
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

            .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${viraFormCssVars['vira-form-border-color'].value};
            }

            .input-wrapper {
                ${noNativeFormStyles};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${cssVars['vira-input-padding-horizontal'].value};
                border-radius: ${viraFormCssVars['vira-form-radius'].value};
                background-color: ${viraFormCssVars['vira-form-background-color'].value};
                /*
                    Border colors are actually applied via the .wrapper-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            .left-side-icon {
                margin-right: calc(${cssVars['vira-input-padding-horizontal'].value} - 4px);
            }

            input {
                ${noNativeFormStyles};
                cursor: text;
                margin: ${cssVars['vira-input-padding-vertical'].value} 0;
                flex-grow: 1;
                max-width: 100%;
                text-align: inherit;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
                outline: none;

                &:focus:focus-visible:not([disabled]) ~ .focus-border {
                    ${createFocusStyles({
                        elementBorderSize: 0,
                        noNesting: true,
                    })}
                }
            }

            ::selection {
                background: ${viraFormCssVars['vira-form-text-selection-color']
                    .value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${viraFormCssVars['vira-form-text-selection-color']
                    .value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input::placeholder {
                color: ${viraFormCssVars['vira-form-placeholder-color'].value};
            }

            .suffix {
                font-weight: bold;
                ${noUserSelect};
            }

            button {
                ${noNativeFormStyles};
                cursor: pointer;
                display: flex;
                transition: color
                    ${viraAnimationDurations['vira-interaction-animation-duration'].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${viraFormCssVars['vira-form-placeholder-color'].value};
            }

            .clear-x-button:hover {
                color: ${viraFormCssVars['vira-form-error-color'].value};
            }

            .clear-x-button:active {
                color: ${viraFormCssVars['vira-form-error-active-color'].value};
            }

            .show-password-button:hover {
                color: ${viraFormCssVars['vira-form-accent-primary-color'].value};
            }

            .show-password-button:active {
                color: ${viraFormCssVars['vira-form-accent-primary-active-color'].value};
            }

            ${hostClasses['vira-input-error'].selector} {
                & .wrapper-border {
                    border-color: ${viraFormCssVars['vira-form-error-color'].value};
                }
            }

            ${hostClasses['vira-input-disabled'].selector} {
                cursor: not-allowed;

                & * {
                    cursor: not-allowed;
                }

                & > * {
                    ${viraDisabledStyles};
                }

                & .show-password-button {
                    pointer-events: none;
                }

                & .focus-border {
                    display: none;
                }
            }
        `;
    },
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
            forcedInputWidth: 0,
            showPassword: false,
            /**
             * Used to couple the label and input together. This is not applied if no label is
             * provided.
             */
            randomId: randomString(32),
        };
    },
    hostClasses: {
        'vira-input-disabled': ({inputs}) => !!inputs.disabled,
        'vira-input-fit-text': ({inputs}) => !!inputs.fitText,
        'vira-input-clear-button-shown': ({inputs}) => !!inputs.showClearButton,
        'vira-input-error': ({inputs}) => !!inputs.hasError,
    },
    render: ({inputs, dispatch, state, updateState, events, host}) => {
        const {filtered: filteredValue} = filterTextInputValue({
            value: inputs.value,
            allowed: inputs.allowedInputs,
            blocked: inputs.blockedInputs,
        });

        const iconTemplate = inputs.icon
            ? html`
                  <${ViraIcon.assign({icon: inputs.icon})} class="left-side-icon"></${ViraIcon}>
              `
            : nothing;

        const forcedInputWidthStyles = inputs.fitText
            ? css`
                  width: ${state.forcedInputWidth}px;
              `
            : nothing;

        const mousedownListener = listen('mousedown', (event) => {
            const eventTarget = extractEventTarget(event, HTMLElement, {
                useOriginalTarget: true,
            });
            const inputElement = assertWrap.instanceOf(
                host.shadowRoot.querySelector('input'),
                HTMLInputElement,
            );

            if (eventTarget !== inputElement) {
                event.preventDefault();
                inputElement.focus();
            }
        });

        const shouldBlockBrowserHelps =
            inputs.disableBrowserHelps ||
            /**
             * Some browsers leaks passwords with their browser helps (like Chrome with
             * spellchecking).
             */
            inputs.type === ViraInputType.Password;

        const inputTemplate = html`
            <span class="input-wrapper" ${inputs.label ? nothing : mousedownListener}>
                ${iconTemplate}
                ${renderIf(
                    !!inputs.fitText,
                    html`
                        <span
                            class="size-span"
                            ${onResize(({contentRect}) => {
                                updateState({forcedInputWidth: contentRect.width});
                            })}
                        >
                            <pre>${filteredValue || inputs.placeholder || nothing}</pre>
                        </span>
                    `,
                )}

                <input
                    id=${ifDefined(inputs.label ? state.randomId : undefined)}
                    aria-label=${ifDefined(inputs.label || undefined)}
                    autofocus=${false}
                    type=${calculateEffectiveInputType(inputs.type, state.showPassword)}
                    style=${forcedInputWidthStyles}
                    autocomplete=${ifDefined(shouldBlockBrowserHelps ? 'off' : undefined)}
                    autocorrect=${ifDefined(shouldBlockBrowserHelps ? 'off' : undefined)}
                    autocapitalize=${ifDefined(shouldBlockBrowserHelps ? 'off' : undefined)}
                    spellcheck=${ifDefined(shouldBlockBrowserHelps ? 'false' : undefined)}
                    ?disabled=${inputs.disabled}
                    .value=${filteredValue}
                    ${listen('input', (event) => {
                        textInputListener({
                            inputs,
                            previousValue: filteredValue,
                            event,
                            inputBlockedCallback(blockedInput) {
                                dispatch(new events.inputBlocked(blockedInput));
                            },
                            newValueCallback(newValue) {
                                dispatch(new events.valueChange(newValue));
                            },
                        });
                    })}
                    placeholder=${ifDefined(inputs.placeholder || undefined)}
                    ${attributes(inputs.attributePassthrough)}
                />

                ${renderIf(
                    !!(inputs.showClearButton && inputs.value),
                    html`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${listen('mousedown', (event) => {
                                event.stopImmediatePropagation();
                                event.preventDefault();
                            })}
                            ${listen('click', () => {
                                if (inputs.disabled) {
                                    return;
                                }
                                dispatch(new events.valueChange(''));
                            })}
                        >
                            <${ViraIcon.assign({icon: CloseX24Icon})}></${ViraIcon}>
                        </button>
                    `,
                )}
                ${renderIf(
                    inputs.type === ViraInputType.Password,
                    html`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${listen('mousedown', (event) => {
                                /** Prevent focus of the input. */
                                event.stopImmediatePropagation();
                                event.preventDefault();
                            })}
                            ${listen('click', () => {
                                updateState({showPassword: !state.showPassword});
                            })}
                        >
                            <${ViraIcon.assign({
                                icon: state.showPassword ? EyeOpen24Icon : EyeClosed24Icon,
                            })}></${ViraIcon}>
                        </button>
                    `,
                )}
                ${renderIf(
                    !!inputs.suffix,
                    html`
                        <div class="suffix">${inputs.suffix}</div>
                    `,
                )}

                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->

                <div class="border-style focus-border"></div>

                <div class="border-style wrapper-border"></div>
            </span>
        `;

        if (inputs.label) {
            return html`
                <label for=${state.randomId} ${mousedownListener}>
                    <span class="input-label">${inputs.label}</span>
                    ${inputTemplate}
                </label>
            `;
        } else {
            return inputTemplate;
        }
    },
});

function calculateEffectiveInputType(
    type: ViraInputType | undefined,
    showPassword: boolean,
): ViraInputType {
    if (type === ViraInputType.Password && showPassword) {
        return ViraInputType.Default;
    }

    return type || ViraInputType.Default;
}
