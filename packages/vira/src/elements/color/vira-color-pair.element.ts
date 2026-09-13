/* node:coverage disable */

import {assertWrap, check} from '@augment-vir/assert';
import {type ColorPair} from '@electrovir/color/dist/data/color-css.js';
import {calculateContrast, type FontWeight} from '@electrovir/color/dist/data/contrast/contrast.js';
import {css, defineElement, html, listen, nothing, onDomCreated, unsafeCSS} from 'element-vir';
import {viraFontCssVars} from '../../styles/font.js';
import {noNativeFormStyles, noNativeSpacing} from '../../styles/native-styles.js';
import {ViraContrastIndicator} from './vira-contrast-indicator.element.js';

/**
 * Showcase a foreground/backend color pair.
 *
 * @category Elements
 */
export const ViraColorPair = defineElement<{
    color: Readonly<ColorPair>;
    showVarValues: boolean;
    showVarNames: boolean;
    showContrast: boolean;
    fontWeight: FontWeight;
}>()({
    tagName: 'vira-color-pair',
    state() {
        return {
            previewElement: undefined as undefined | HTMLElement,
            forceShowEverything: false,
        };
    },
    hostClasses: {
        'vira-color-pair-no-contrast-tips'({inputs, state}) {
            return !inputs.showContrast && !state.forceShowEverything;
        },
    },
    styles({hostClasses}) {
        return css`
            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
                max-width: 100%;
            }

            .color-preview {
                ${noNativeFormStyles};
                cursor: pointer;
                font-size: 32px;
                padding-left: 12px;
                padding-right: 0;
                border: 1px solid #ccc;
                border-radius: 8px;
                display: flex;
                gap: 8px;
                align-items: baseline;

                & b {
                    margin: 12px 0;
                    font-weight: bold;
                    text-decoration: underline;
                }

                & .square {
                    margin: 12px 0;
                    width: 24px;
                    height: 24px;
                    background-color: currentColor;
                }
            }
            ${hostClasses['vira-color-pair-no-contrast-tips'].selector} {
                & .needed-size-wrapper {
                    display: none;
                }

                & .color-preview {
                    padding: 4px 24px;
                }
            }

            .needed-size-wrapper {
                align-self: stretch;
                width: 56px;
                position: relative;
                overflow: hidden;
                border-left: 1px solid #ccc;
            }

            .needed-size {
                top: 0;
                height: 100%;
                display: flex;
                align-items: center;
                left: 6px;
                position: absolute;

                & span {
                    margin: 0 auto;
                }
            }

            .css-var-names {
                font-family: ${viraFontCssVars['vira-monospace'].value};
                display: flex;
                max-width: 100%;
                flex-direction: column;
                opacity: 0.6;
                margin-top: 4px;
            }

            p {
                ${noNativeSpacing};
                display: flex;
                gap: 0;
                flex-wrap: wrap;

                & span:last-child {
                    margin-left: 1ex;
                }
            }

            ${ViraContrastIndicator} {
                margin-top: 1px;
            }
        `;
    },
    render({state, updateState, inputs}) {
        const colorRows = (
            [
                'foreground',
                'background',
            ] as const
        ).map((layerKey) => {
            const keyString = [
                inputs.color[layerKey].name,
                inputs.showVarValues || state.forceShowEverything ? ':' : '',
            ]
                .filter(check.isTruthy)
                .join('');
            const valueTemplate =
                inputs.showVarValues || state.forceShowEverything
                    ? html`
                          <span>${inputs.color[layerKey].default}</span>
                      `
                    : nothing;

            return html`
                <p>
                    <span>${keyString}</span>
                    ${valueTemplate}
                </p>
            `;
        });

        const cssVarNamesTemplate =
            inputs.showVarNames || state.forceShowEverything
                ? html`
                      <div class="css-var-names">${colorRows}</div>
                  `
                : nothing;

        const contrast = state.previewElement
            ? calculateContrast({
                  foreground: globalThis
                      .getComputedStyle(state.previewElement)
                      .getPropertyValue('color'),
                  background: globalThis
                      .getComputedStyle(state.previewElement)
                      .getPropertyValue('background-color'),
              })
            : undefined;

        const contrastTemplate =
            contrast && (inputs.showContrast || state.forceShowEverything)
                ? html`
                      <${ViraContrastIndicator.assign({
                          contrast,
                          fontWeight: inputs.fontWeight,
                      })}></${ViraContrastIndicator}>
                  `
                : nothing;

        return html`
            <button
                ${listen('click', () => {
                    updateState({
                        forceShowEverything: !state.forceShowEverything,
                    });
                })}
                ${onDomCreated((element) => {
                    updateState({
                        previewElement: assertWrap.instanceOf(element, HTMLElement),
                    });
                })}
                class="color-preview"
                style=${css`
                    color: ${unsafeCSS(inputs.color.foreground.default)};
                    background: ${unsafeCSS(inputs.color.background.default)};
                `}
            >
                <div class="square"></div>
                <b>Aa</b>
                <div class="needed-size-wrapper">
                    <span class="needed-size">
                        <span
                            style=${css`
                                visibility: ${unsafeCSS(
                                    (contrast?.fontSizes[400] || Infinity) > 150
                                        ? 'hidden'
                                        : 'visible',
                                )};
                                font-weight: ${inputs.fontWeight};
                                font-size: ${contrast ? contrast.fontSizes[400] : 14}px;
                            `}
                        >
                            Min
                        </span>
                    </span>
                </div>
            </button>
            ${contrastTemplate} ${cssVarNamesTemplate}
        `;
    },
});
