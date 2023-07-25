import {classMap, css, defineElementEvent, html, listen, onResize, renderIf} from 'element-vir';
import {TemplateResult} from 'lit';
import {ViraIconSvg} from '../../icons';
import {noUserSelect, viraAnimationDurations, viraDisabledStyles} from '../../styles';
import {createFocusStyles, viraFocusCssVars} from '../../styles/focus';
import {removeNativeFormStyles} from '../../styles/native-styles';
import {viraCssVars} from '../../styles/vira-css-vars';
import {defineViraElement} from '../define-vira-element';
import {ViraIcon} from '../vira-icon/vira-icon.element';

function doesMatch({input, matcher}: {input: string; matcher: string | RegExp}): boolean {
    if (!input || !matcher) {
        return true;
    }
    if (input.length > 1) {
        return !!input.split('').every((singleInput) => doesMatch({input: singleInput, matcher}));
    }

    if (matcher instanceof RegExp) {
        return !!input.match(matcher);
    } else {
        return matcher.includes(input);
    }
}

type IsAllowedInputs = {
    value: string;
    allowed: string | RegExp | undefined;
    blocked: string | RegExp | undefined;
};

function isAllowed({value, allowed, blocked}: IsAllowedInputs) {
    const isAllowedCharacter = allowed
        ? doesMatch({
              input: value,
              matcher: allowed,
          })
        : true;
    const isBlockedCharacter = blocked
        ? doesMatch({
              input: value,
              matcher: blocked,
          })
        : false;

    return isAllowedCharacter && !isBlockedCharacter;
}

function filterToAllowedCharactersOnly(inputs: IsAllowedInputs): {
    filtered: string;
    blocked: string;
} {
    if (!inputs.value) {
        return {filtered: inputs.value, blocked: ''};
    }
    const {filtered, blocked} = inputs.value.split('').reduce(
        (accum, letter) => {
            const allowed = isAllowed({...inputs, value: letter});

            if (allowed) {
                accum.filtered.push(letter);
            } else {
                accum.blocked.push(letter);
            }
            return accum;
        },
        {
            filtered: [] as string[],
            blocked: [] as string[],
        },
    );

    return {
        filtered: filtered.join(''),
        blocked: blocked.join(''),
    };
}

export const ViraInput = defineViraElement<{
    icon?: undefined | Pick<ViraIconSvg, 'svgTemplate'>;
    value: string;
    /** Shown when no other text is present. Input restrictions do not apply to this property. */
    placeholder?: string;
    /** Set to true to trigger disabled styles and to block all user input. */
    disabled?: boolean;
    /**
     * Only letters in the given string or matches to the given RegExp will be allowed.
     * blockedInputs takes precedence over this input.
     *
     * For example: if allowedInputs is set to "abcd" and blockedInputs is set to "d", only "a",
     * "b", or "c" letters will be allowed.
     */
    allowedInputs?: string | RegExp;
    /** Any letters in the given string or matches to the given RegExp will be blocked. */
    blockedInputs?: string | RegExp;
    /** Disable all browser helps like spellchecking, autocomplete, etc. */
    disableBrowserHelps?: boolean;
    /** A suffix that, if provided, is shown following the user input field. */
    suffix?: string;
    /** Set this to true to make the whole element size to only fit the input text. */
    fitText?: boolean;
}>()({
    tagName: 'vira-input',
    hostClasses: {
        'vira-input-disabled': ({inputs}) => !!inputs.disabled,
        'vira-input-has-value': ({inputs}) => !!inputs.value,
        'vira-input-fit-text': ({inputs}) => !!inputs.fitText,
    },
    cssVars: {
        'vira-input-placeholder-color': '#ccc',
        'vira-input-text-color': 'black',
        'vira-input-border-color': '#ccc',
        'vira-input-focus-border-color': '#59B1FF',
        'vira-input-text-selection-color': '#CFE9FF',

        'vira-input-padding-horizontal': '10px',
        'vira-input-padding-vertical': '6px',
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
    styles: ({hostClasses, cssVars}) => {
        return css`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${viraFocusCssVars['vira-focus-outline-color'].name}: ${cssVars[
                    'vira-input-focus-border-color'
                ].value};
                color: ${cssVars['vira-input-text-color'].value};
            }

            ${hostClasses['vira-input-disabled'].selector} {
                ${viraDisabledStyles};
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
                ${removeNativeFormStyles};
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

            pre {
                ${removeNativeFormStyles};
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
                border-radius: ${viraCssVars['vira-form-input-border-radius'].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${cssVars['vira-input-border-color'].value};
                transition: border
                    ${viraAnimationDurations['vira-interaction-animation-duration'].value};
            }

            label {
                ${removeNativeFormStyles};
                max-width: 100%;
                flex-grow: 1;
                cursor: pointer;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${cssVars['vira-input-padding-horizontal'].value};
                border-radius: ${viraCssVars['vira-form-input-border-radius'].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
            }

            ${createFocusStyles({
                mainSelector:
                    'input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border',
                elementBorderSize: 0,
            })}

            ${ViraIcon} {
                margin-right: calc(${cssVars['vira-input-padding-horizontal'].value} - 4px);
            }

            input {
                ${removeNativeFormStyles};
                cursor: text;
                margin: ${cssVars['vira-input-padding-vertical'].value} 0;
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
            }

            ::selection {
                background: ${cssVars['vira-input-text-selection-color']
                    .value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${cssVars['vira-input-text-selection-color']
                    .value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${cssVars['vira-input-placeholder-color'].value};
            }

            .suffix {
                font-weight: bold;
            }
        `;
    },
    stateInitStatic: {
        forcedInputWidth: 0,
    },
    renderCallback: ({inputs, dispatch, state, updateState, events}) => {
        const {filtered: filteredValue} = filterToAllowedCharactersOnly({
            value: inputs.value ?? '',
            allowed: inputs.allowedInputs,
            blocked: inputs.blockedInputs,
        });

        const iconTemplate: TemplateResult | string = inputs.icon
            ? html`
                  <${ViraIcon.assign({icon: inputs.icon})}></${ViraIcon}>
              `
            : '';

        const forcedInputWidthStyles = inputs.fitText
            ? css`
                  width: ${state.forcedInputWidth}px;
              `
            : '';

        return html`
            <label>
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
                            <pre>${filteredValue || inputs.placeholder || ''}</pre>
                        </span>
                    `,
                )}
                <input
                    class=${classMap({
                        'have-value': !!filteredValue,
                    })}
                    style=${forcedInputWidthStyles}
                    autocomplete=${inputs.disableBrowserHelps ? 'off' : ''}
                    autocorrect=${inputs.disableBrowserHelps ? 'off' : ''}
                    autocapitalize=${inputs.disableBrowserHelps ? 'off' : ''}
                    spellcheck=${inputs.disableBrowserHelps ? 'false' : ''}
                    ?disabled=${inputs.disabled}
                    .value=${filteredValue}
                    ${listen('input', (event) => {
                        /**
                         * When attached to an input element (like here) this event type should
                         * always be InputEvent.
                         */
                        if (!(event instanceof InputEvent)) {
                            throw new Error(
                                `Input event type mismatch: "${event.constructor.name}"`,
                            );
                        }
                        const inputElement = event.target;
                        if (!(inputElement instanceof HTMLInputElement)) {
                            throw new Error(
                                `Failed to find input element target from input event.`,
                            );
                        }
                        /**
                         * This is usually a single character, but can be a bunch of characters in
                         * some circumstances. For example, when a bunch of characters are pasted,
                         * this will be the entire pasted contents.
                         */
                        const changedText = event.data;
                        const beforeChangeText = filteredValue;

                        // this will be overwritten below if blocked characters are encountered
                        let finalText = inputElement.value ?? '';

                        /**
                         * When changedText is falsy, that means an operation other than inserting
                         * characters happened. Such as: deleting, cutting the text, etc.
                         */
                        if (changedText) {
                            if (changedText.length === 1) {
                                if (
                                    !isAllowed({
                                        value: changedText,
                                        allowed: inputs.allowedInputs,
                                        blocked: inputs.blockedInputs,
                                    })
                                ) {
                                    // prevent the change from happening
                                    finalText = beforeChangeText;
                                    dispatch(new events.inputBlocked(changedText));
                                }
                            }
                            // filters out blocked pasted letters
                            else {
                                const {filtered, blocked} = filterToAllowedCharactersOnly({
                                    value: changedText,
                                    allowed: inputs.allowedInputs,
                                    blocked: inputs.blockedInputs,
                                });
                                finalText = filtered;
                                dispatch(new events.inputBlocked(blocked));
                            }
                        }

                        if (inputElement.value !== finalText) {
                            // this prevents blocked inputs by simply overwriting them
                            inputElement.value = finalText;
                        }
                        if (beforeChangeText !== finalText) {
                            dispatch(new events.valueChange(finalText));
                        }
                    })}
                    placeholder=${inputs.placeholder}
                />
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
                <div class="border-style label-border"></div>
            </label>
        `;
    },
});
