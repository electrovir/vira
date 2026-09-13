/* node:coverage disable */

import {checkWrap} from '@augment-vir/assert';
import {getObjectTypedValues, type PartialWithUndefined} from '@augment-vir/common';
import {
    ColorFormatName,
    colorFormats,
} from '@electrovir/color/dist/data/color-class/color-formats.js';
import {Color} from '@electrovir/color/dist/data/color-class/color.js';
import {css, defineElement, defineElementEvent, html, listen, nothing} from 'element-vir';
import {CssVarSyntaxName} from 'lit-css-vars';
import {Copy24Icon} from '../../icons/icon-svgs/24/copy-24.icon.js';
import {viraFontCssVars} from '../../styles/font.js';
import {viraFormCssVars} from '../../styles/form-styles.js';
import {noNativeFormStyles} from '../../styles/native-styles.js';
import {viraShadows} from '../../styles/shadows.js';
import {colorLocalStorageClient} from '../../util/color-local-storage.client.js';
import {type ViraSelectOption} from '../../util/vira-select-option.js';
import {ViraPopUpTrigger} from '../pop-up/vira-pop-up-trigger.element.js';
import {ViraIcon} from '../vira-icon.element.js';
import {ViraInput} from '../vira-input.element.js';
import {ViraSelect} from '../vira-select.element.js';
import {ViraColorFormatSliders} from './vira-color-format-sliders.element.js';
import {ViraColorSwatch} from './vira-color-swatch.element.js';

const colorFormatOptions: ReadonlyArray<Readonly<ViraSelectOption>> = getObjectTypedValues(
    ColorFormatName,
).map((formatName) => {
    return {
        value: formatName,
        label: formatName.toUpperCase(),
    };
});

/**
 * A color picker element with a swatch that opens a popup with color format sliders.
 *
 * Set the width and height of the swatch using the provided CSS variables.
 *
 * @category Elements
 */
export const ViraColorPicker = defineElement<
    Readonly<
        {
            color: string | Readonly<Color> | undefined;
        } & PartialWithUndefined<{
            alwaysShowPicker: boolean;
            showHexValue: boolean;
        }>
    >
>()({
    tagName: 'vira-color-picker',
    cssVars: {
        'vira-color-picker-swatch-width': {
            default: '100px',
            syntax: CssVarSyntaxName.Length,
        },
        'vira-color-picker-swatch-height': {
            default: '100px',
            syntax: CssVarSyntaxName.Length,
        },
    },
    state() {
        return {
            selectedFormatName: colorLocalStorageClient.get.lastFormat() || ColorFormatName.rgb,
            rawInput: undefined as undefined | string,
        };
    },
    hostClasses: {
        'vira-color-picker-always-show'({inputs}) {
            return !!inputs.alwaysShowPicker;
        },
    },
    styles({cssVars, hostClasses}) {
        return css`
            :host {
                display: inline-flex;
            }

            ${hostClasses['vira-color-picker-always-show'].selector} {
                flex-direction: column;
                align-items: center;
                gap: 4px;
            }

            button {
                ${noNativeFormStyles}
                cursor: pointer;
                display: flex;
            }

            ${ViraPopUpTrigger} {
                width: 100%;
                height: 100%;
                box-sizing: border-box;
            }

            .swatch-wrapper {
                display: flex;
                flex-direction: column;
                gap: 4px;
                align-items: center;

                & ${ViraColorSwatch} {
                    width: ${cssVars['vira-color-picker-swatch-width'].value};
                    height: ${cssVars['vira-color-picker-swatch-height'].value};
                    box-sizing: border-box;
                }
            }

            .code-button {
                font-family: ${viraFontCssVars['vira-monospace'].value};
                font-size: 12px;
                color: #666;
                display: flex;
                justify-content: center;
                gap: 2px;
                align-items: center;

                & ${ViraIcon} {
                    width: 18px;
                    aspect-ratio: 1;
                }

                &:hover {
                    color: #000;
                }

                &:active {
                    color: dodgerblue;
                }
            }

            .picker {
                display: flex;
                flex-direction: column;
                gap: 4px;
                padding: 16px;
                background: white;
                border: 1px solid #ccc;
                border-radius: 8px;
            }

            .pop-up .picker {
                ${viraShadows.menuShadow}
            }

            .raw-input-wrapper {
                text-align: left;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                font-size: 12px;
                ${viraFormCssVars['vira-form-border-color'].name}: #ddd;
                color: #666;

                & ${ViraInput} {
                    flex-grow: 1;
                    width: unset;
                    color: inherit;
                    height: 20px;
                    border: none;
                }
            }
        `;
    },
    events: {
        colorChange: defineElementEvent<string>(),
    },
    render({inputs, dispatch, events, state, updateState}) {
        const color: Readonly<Color> = Color.isColor(inputs.color)
            ? inputs.color
            : new Color(inputs.color || 'black');
        const formatDefinition = colorFormats[state.selectedFormatName];

        const rawInput = state.rawInput ?? color.toCss()[formatDefinition.rawSyntax];

        const rawInputTemplate = html`
            <div class="raw-input-wrapper">
                <${ViraInput.assign({
                    value: rawInput,
                })}
                    ${listen(ViraInput.events.valueChange, (event) => {
                        const rawInput = event.detail;
                        updateState({
                            rawInput,
                        });
                        if (Color.isValidColorString(rawInput)) {
                            dispatch(
                                new events.colorChange({
                                    detail: rawInput,
                                }),
                            );
                        }
                    })}
                ></${ViraInput}>
                <button
                    class="code-button"
                    ${listen('click', async () => {
                        await globalThis.navigator.clipboard.writeText(rawInput);
                    })}
                >
                    <${ViraIcon.assign({
                        icon: Copy24Icon,
                        fitContainer: true,
                    })}></${ViraIcon}>
                </button>
            </div>
        `;

        const hexValueTemplate = html`
            <button
                class="code-button"
                ${listen('click', async () => {
                    await globalThis.navigator.clipboard.writeText(color.hexString);
                })}
            >
                <span>${color.hexString}</span>
                <${ViraIcon.assign({
                    icon: Copy24Icon,
                    fitContainer: true,
                })}></${ViraIcon}>
            </button>
        `;

        const swatchTemplate = html`
            <div class="swatch-wrapper">
                <${ViraColorSwatch.assign({
                    backgroundColor: color,
                })}></${ViraColorSwatch}>
                ${inputs.showHexValue ? hexValueTemplate : nothing}
            </div>
        `;

        const pickerTemplate = html`
            <div class="picker">
                <${ViraSelect.assign({
                    options: colorFormatOptions,
                    value: state.selectedFormatName,
                })}
                    ${listen(ViraSelect.events.valueChange, (event) => {
                        const selectedFormat = checkWrap.isEnumValue(event.detail, ColorFormatName);
                        if (selectedFormat) {
                            updateState({
                                selectedFormatName: selectedFormat,
                            });
                            colorLocalStorageClient.set.lastFormat(selectedFormat);
                        }
                    })}
                ></${ViraSelect}>
                ${rawInputTemplate}
                <${ViraColorFormatSliders.assign({
                    color,
                    colorFormatName: state.selectedFormatName,
                    showFormatName: false,
                })}
                    ${listen(ViraColorFormatSliders.events.colorChange, (event) => {
                        dispatch(
                            new events.colorChange({
                                detail: event.detail,
                            }),
                        );
                        updateState({
                            rawInput: undefined,
                        });
                    })}
                ></${ViraColorFormatSliders}>
            </div>
        `;

        if (inputs.alwaysShowPicker) {
            return html`
                ${swatchTemplate} ${pickerTemplate}
            `;
        } else {
            return html`
                <${ViraPopUpTrigger.assign({
                    keepOpenAfterInteraction: true,
                })}>
                    <button
                        class="trigger"
                        slot=${ViraPopUpTrigger.slotNames['vira-pop-up-trigger-trigger']}
                        ${listen('mousedown', () => {
                            const storedFormat = colorLocalStorageClient.get.lastFormat();
                            if (storedFormat) {
                                updateState({
                                    selectedFormatName: storedFormat,
                                });
                            }
                        })}
                    >
                        ${swatchTemplate}
                    </button>
                    <div
                        class="pop-up"
                        slot=${ViraPopUpTrigger.slotNames['vira-pop-up-trigger-pop-up']}
                    >
                        ${pickerTemplate}
                    </div>
                </${ViraPopUpTrigger}>
            `;
        }
    },
});
