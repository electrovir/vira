/* node:coverage disable */

// cspell:word cqmin

import {assertWrap} from '@augment-vir/assert';
import {getObjectTypedEntries, round} from '@augment-vir/common';
import {Color} from '@electrovir/color/dist/data/color-class/color.js';
import {
    calculateContrast,
    calculateFontSizes,
    contrastLevelLabel,
    contrastLevels,
    fontWeightByName,
} from '@electrovir/color/dist/data/contrast/contrast.js';
import {classMap, css, defineElement, html, unsafeCSS} from 'element-vir';
import {viraFontCssVars} from '../../styles/font.js';
import {noNativeSpacing} from '../../styles/native-styles.js';
import {defineTable} from '../../util/define-table.js';
import {ViraBoldText} from '../vira-bold-text.element.js';
import {ViraColorSwatch} from './vira-color-swatch.element.js';
import {ViraContrastIndicator} from './vira-contrast-indicator.element.js';

/**
 * A huge summary of a color pair's contrast levels, font sizes, font weights, etc.
 *
 * @category Elements
 */
export const ViraColorPairContrastSummary = defineElement<{
    foregroundColor: string;
    backgroundColor: string;
}>()({
    tagName: 'vira-color-pair-contrast-summary',
    styles: css`
        :host {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 32px;
        }

        /* Color overlay styles */
        .color-overlay {
            display: flex;
            align-items: center;
            max-width: 100%;
            gap: 8px;
        }

        .constant-size-wrapper {
            display: flex;
            align-items: baseline;
            gap: 5cqmin;
            font-size: 20cqmin;
        }

        .square {
            margin: 12px 0;
            width: 20cqmin;
            height: 20cqmin;
            background-color: currentColor;
        }

        .foreground-content {
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .needed-size {
            display: flex;
            justify-content: center;
            top: 100%;
            left: 0;
            text-align: center;
            position: absolute;
            width: 100%;
        }

        ${ViraContrastIndicator} {
            width: 100%;
        }

        .color-overlay td {
            padding: 4px 8px;
            font-weight: bold;
        }

        .color-overlay th {
            padding: 4px 8px;
            text-align: end;
            font-weight: normal;
        }

        /* Text weights styles */
        .text-weights td {
            padding: 4px;
        }

        .size-display {
            height: 50px;
            width: 100px;
            overflow: hidden;
            display: flex;
            align-items: center;
        }

        .cell-size {
            width: 5em;
        }

        /* Contrast levels styles */
        .contrast-levels td {
            padding: 4px;
        }

        .contrast-levels tr {
            opacity: 0.4;
        }

        .contrast-levels .selected-row {
            opacity: 1;
            font-weight: bold;
        }

        pre {
            ${noNativeSpacing};
            font-family: ${viraFontCssVars['vira-monospace'].value};
        }

        .monospace-font {
            font-family: ${viraFontCssVars['vira-monospace'].value};
        }
    `,
    render({inputs}) {
        const contrast = calculateContrast({
            background: new Color(inputs.backgroundColor).toCss().rgb,
            foreground: new Color(inputs.foregroundColor).toCss().rgb,
        });

        const {rows: colorPairRows} = defineTable({
            headers: [
                {
                    key: 'colorLayer',
                },
                {
                    key: 'colorValue',
                },
            ],
            originalData: getObjectTypedEntries({
                'Foreground:': new Color(inputs.foregroundColor).toFormattedStrings().hexString,
                'Background:': new Color(inputs.backgroundColor).toFormattedStrings().hexString,
                'Contrast:': `${contrast.contrast} Lc`.padEnd(9, ' '),
            }),
            dataMap([
                colorLayer,
                value,
            ]) {
                return {
                    colorLayer,
                    colorValue: html`
                        <pre>${value}</pre>
                    `,
                };
            },
        });

        const {rows: weightRows} = defineTable({
            headers: [
                {
                    key: 'weight',
                },
                {
                    key: 'size',
                },
            ],
            originalData: Object.entries(contrast.fontSizes).map(
                ([
                    weight,
                    size,
                ]) => {
                    return {
                        weight: Number(weight),
                        size,
                    };
                },
            ),
            dataMap({size, weight}) {
                return {
                    size: `${round(size, {
                        digits: 1,
                    })}px`,
                    weight: html`
                        <span
                            style=${css`
                                font-weight: ${weight};
                            `}
                        >
                            ${weight}
                        </span>
                    `,
                };
            },
        });

        const {rows: levelRows} = defineTable({
            headers: [
                {
                    key: 'boundaryLc',
                },
                {
                    key: 'levelName',
                },
            ],
            originalData: contrastLevels,
            dataMap(contrastLevel) {
                return {
                    boundaryLc: `${contrastLevel.min} Lc`,
                    levelName: contrastLevelLabel[contrastLevel.name],
                };
            },
        });

        return html`
            <div class="color-overlay">
                <${ViraColorSwatch.assign({
                    backgroundColor: inputs.backgroundColor,
                    foregroundColor: inputs.foregroundColor,
                })}>
                    <div class="foreground-content">
                        <div class="constant-size-wrapper">
                            <div class="square"></div>
                            <b>Aa</b>
                        </div>
                        <div class="needed-size">
                            <span
                                style=${css`
                                    font-size: ${contrast.fontSizes[fontWeightByName.Normal]}px;
                                    line-height: ${contrast.fontSizes[fontWeightByName.Normal] *
                                    0.77}px;
                                    visibility: ${unsafeCSS(
                                        contrast.fontSizes[fontWeightByName.Normal] > 900
                                            ? 'hidden'
                                            : 'visible',
                                    )};
                                `}
                            >
                                Min Size
                            </span>
                        </div>
                    </div>
                </${ViraColorSwatch}>
                <div class="details">
                    <table>
                        <tbody>
                            ${colorPairRows.map((row) => {
                                const cells = row.cells.map((cell, index) => {
                                    const element = index ? 'td' : 'th';

                                    return html`
                                        <${element}>${cell.content}</${element}>
                                    `;
                                });

                                return html`
                                    <tr>${cells}</tr>
                                `;
                            })}
                        </tbody>
                    </table>

                    <${ViraContrastIndicator.assign({
                        contrast,
                        fontWeight: fontWeightByName.Normal,
                    })}></${ViraContrastIndicator}>
                </div>
            </div>

            <table class="text-weights">
                ${weightRows.map((row) => {
                    const cells = row.cells.map((cell) => {
                        return html`
                            <td class="cell-${cell.key} monospace-font">${cell.content}</td>
                        `;
                    });

                    return html`
                        <tr>
                            ${cells}
                            <td>
                                <div
                                    class="size-display"
                                    style=${css`
                                        background-color: ${unsafeCSS(inputs.backgroundColor)};
                                        color: ${unsafeCSS(inputs.foregroundColor)};
                                        font-weight: ${row.data.weight};
                                        font-size: ${row.data.size}px;
                                    `}
                                >
                                    <span>Text</span>
                                </div>
                            </td>
                        </tr>
                    `;
                })}
            </table>

            <table class="contrast-levels">
                ${levelRows.map((row) => {
                    const isSelectedRow = contrast.contrastLevel.name === row.data.name;

                    const cells = row.cells.map((cell) => {
                        return html`
                            <td><${ViraBoldText.assign({
                                bold: isSelectedRow,
                                text: assertWrap.isString(cell.content),
                            })}><${ViraBoldText}></td>
                        `;
                    });

                    const title = [
                        row.data.description,
                        '\nFont weights to font sizes:',
                        JSON.stringify(calculateFontSizes(row.data.min), null, 4),
                    ].join('\n');

                    return html`
                        <tr
                            title=${title}
                            class=${classMap({
                                'selected-row': isSelectedRow,
                            })}
                        >
                            ${cells}
                        </tr>
                    `;
                })}
            </table>
        `;
    },
});
