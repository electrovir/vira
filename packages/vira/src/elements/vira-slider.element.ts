import {type PartialWithUndefined} from '@augment-vir/common';
import {extractEventTarget} from '@augment-vir/web';
import {classMap, css, defineElementEvent, html, ifDefined, listen} from 'element-vir';
import {viraDisabledStyles} from '../styles/disabled.js';
import {createFocusStyles} from '../styles/focus.js';
import {viraFormCssVars} from '../styles/form-styles.js';
import {defineViraElement} from '../util/define-vira-element.js';

/**
 * Inputs for {@link ViraSlider}.
 *
 * @category Internal
 */
export type ViraSliderInputs = {
    value: number;
} & PartialWithUndefined<{
    /** Defaults to `0`. */
    min: number;
    /** Defaults to `100`. */
    max: number;
    /** Defaults to `1`. */
    step: number;
    isDisabled: boolean;
    /** The slider's accessible name. It is not rendered visibly. */
    label: string;
}>;

/**
 * A themed replacement for `<input type="range">`. The track, fill, and thumb are drawn with Vira's
 * form colors, so they follow the current theme (including dark mode) where a browser's native
 * range styling does not. An invisible native range input sits on top, so keyboard, pointer, and
 * screen reader behavior are the browser's own.
 *
 * `valueChange` fires on every change while dragging. The slider is controlled: it only moves when
 * `value` is updated in response.
 *
 * @category Input
 * @category Elements
 * @see https://electrovir.github.io/vira/book/elements/vira-slider
 */
export const ViraSlider = defineViraElement<Readonly<ViraSliderInputs>>()({
    tagName: 'vira-slider',
    cssVars: {
        'vira-slider-track-height': '4px',
        'vira-slider-thumb-size': '16px',
        'vira-slider-track-color': viraFormCssVars['vira-form-border-color'].value,
        'vira-slider-fill-color': viraFormCssVars['vira-form-accent-primary-color'].value,
        'vira-slider-thumb-color': viraFormCssVars['vira-form-accent-primary-color'].value,
        'vira-slider-thumb-hover-color':
            viraFormCssVars['vira-form-accent-primary-hover-color'].value,
        'vira-slider-thumb-active-color':
            viraFormCssVars['vira-form-accent-primary-active-color'].value,
    },
    styles({cssVars}) {
        return css`
            :host {
                display: inline-flex;
                width: 160px;
                vertical-align: middle;
            }

            .slider {
                position: relative;
                flex-grow: 1;
                height: ${cssVars['vira-slider-thumb-size'].value};

                &.disabled {
                    ${viraDisabledStyles};
                }
            }

            .track,
            .fill {
                position: absolute;
                top: 50%;
                left: 0;
                height: ${cssVars['vira-slider-track-height'].value};
                transform: translateY(-50%);
                border-radius: ${cssVars['vira-slider-track-height'].value};
                pointer-events: none;
            }

            .track {
                width: 100%;
                background-color: ${cssVars['vira-slider-track-color'].value};
            }

            .fill {
                background-color: ${cssVars['vira-slider-fill-color'].value};
            }

            .thumb {
                position: absolute;
                top: 0;
                width: ${cssVars['vira-slider-thumb-size'].value};
                height: ${cssVars['vira-slider-thumb-size'].value};
                box-sizing: border-box;
                border-radius: 50%;
                border: 2px solid ${viraFormCssVars['vira-form-background-color'].value};
                background-color: ${cssVars['vira-slider-thumb-color'].value};
                pointer-events: none;
            }

            input {
                position: absolute;
                inset: 0;
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;
                appearance: none;
                background: transparent;
                opacity: 0;
                cursor: pointer;

                /*
                    The invisible native thumb must match the drawn thumb's width so the browser
                    maps pointer positions to the same values the drawn thumb shows.
                */
                &::-webkit-slider-thumb {
                    appearance: none;
                    width: ${cssVars['vira-slider-thumb-size'].value};
                    height: ${cssVars['vira-slider-thumb-size'].value};
                }
                &::-moz-range-thumb {
                    width: ${cssVars['vira-slider-thumb-size'].value};
                    height: ${cssVars['vira-slider-thumb-size'].value};
                    border: none;
                }

                &:hover ~ .thumb {
                    background-color: ${cssVars['vira-slider-thumb-hover-color'].value};
                }
                &:active ~ .thumb {
                    background-color: ${cssVars['vira-slider-thumb-active-color'].value};
                }
                &:focus-visible:not(:active) ~ .thumb::after {
                    ${createFocusStyles({
                        elementBorderSize: '2px',
                        borderRadius: '50%',
                        noNesting: true,
                    })}
                }
            }
        `;
    },
    events: {
        valueChange: defineElementEvent<number>(),
    },
    render({inputs, dispatch, events, cssVars}) {
        const min = inputs.min ?? 0;
        const max = inputs.max ?? 100;
        const fraction =
            max > min ? Math.min(1, Math.max(0, (inputs.value - min) / (max - min))) : 0;
        const thumbOffset = css`calc((100% - ${cssVars['vira-slider-thumb-size'].value}) * ${fraction})`;

        return html`
            <div
                class="slider ${classMap({
                    disabled: !!inputs.isDisabled,
                })}"
            >
                <div class="track"></div>
                <div
                    class="fill"
                    style=${css`
                        width: calc(
                            ${thumbOffset} + ${cssVars['vira-slider-thumb-size'].value} / 2
                        );
                    `}
                ></div>
                <input
                    type="range"
                    min=${min}
                    max=${max}
                    step=${inputs.step ?? 1}
                    aria-label=${ifDefined(inputs.label || undefined)}
                    ?disabled=${inputs.isDisabled}
                    .value=${String(inputs.value)}
                    ${listen('input', (event) => {
                        const inputElement = extractEventTarget(event, HTMLInputElement);
                        const newValue = Number(inputElement.value);
                        /**
                         * Snap the native input back to the controlled value; it only moves once
                         * the new value is assigned back in.
                         */
                        inputElement.value = String(inputs.value);

                        if (newValue !== inputs.value) {
                            dispatch(
                                new events.valueChange({
                                    detail: newValue,
                                }),
                            );
                        }
                    })}
                />
                <div
                    class="thumb"
                    style=${css`
                        left: ${thumbOffset};
                    `}
                ></div>
            </div>
        `;
    },
});
