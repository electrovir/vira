/* node:coverage disable */

import {check} from '@augment-vir/assert';
import {getObjectTypedEntries, mapObject} from '@augment-vir/common';
import {ColorSyntaxName} from '@electrovir/color/dist/data/color-class/color-formats.js';
import {Color} from '@electrovir/color/dist/data/color-class/color.js';
import {css, defineElement, defineElementEvent, html, listen} from 'element-vir';
import {viraFontCssVars} from '../../styles/font.js';
import {noNativeSpacing} from '../../styles/native-styles.js';
import {defineTable} from '../../util/define-table.js';
import {ViraInput} from '../vira-input.element.js';
import {ViraColorSwatch} from './vira-color-swatch.element.js';

const omittedColors: ColorSyntaxName[] = [
    ColorSyntaxName.hex,
    ColorSyntaxName.name,
];

/**
 * A color swatch alongside the color in all of its different supported formats.
 *
 * @category Internal
 */
export const ViraColorDetails = defineElement<{
    color: string;
    /** Show a text input that triggers an event when it is edited, for changing the color. */
    showInput: boolean;
}>()({
    tagName: 'vira-color-details',
    styles: css`
        :host {
            display: flex;
            gap: 16px;
        }

        ${ViraColorSwatch} {
            height: 200px;
            width: 200px;
        }

        .swatch {
            display: flex;
            flex-direction: column;
            gap: 8px;
            align-items: center;
        }

        ${ViraInput} {
            font-size: 14px;
            font-family: ${viraFontCssVars['vira-monospace'].value};
            max-width: 200px;
        }

        td {
            font-weight: bold;
        }

        th {
            padding: 4px 8px;
            font-weight: normal;
            text-align: right;
        }
        pre {
            ${noNativeSpacing};
            font-family: ${viraFontCssVars['vira-monospace'].value};
        }
    `,
    events: {
        colorChange: defineElementEvent<string>(),
    },
    state() {
        return {
            inputColorString: undefined as undefined | string,
        };
    },
    render({inputs, dispatch, events, state, updateState}) {
        const color = new Color(inputs.color);
        const colorStrings = mapObject(color.toFormattedStrings(), (key, value) => {
            if (check.hasValue(omittedColors, key)) {
                return undefined;
            } else if (key === 'hexString') {
                return {
                    key: 'hex',
                    value,
                };
            } else {
                return {
                    key,
                    value,
                };
            }
        });

        if (state.inputColorString == undefined) {
            updateState({
                inputColorString: inputs.color,
            });
        }

        const {rows} = defineTable({
            headers: [
                {
                    key: 'colorFormat',
                },
                {
                    key: 'formattedString',
                },
            ],
            originalData: getObjectTypedEntries(colorStrings),
            dataMap: ([
                colorFormat,
                value,
            ]) => {
                return {
                    colorFormat: `${colorFormat}:`,
                    formattedString: html`
                        <pre>${value}</pre>
                    `,
                };
            },
        });

        const inputTemplate = inputs.showInput
            ? html`
                  <${ViraInput.assign({
                      value: state.inputColorString || '',
                      fitText: true,
                  })}
                      ${listen(ViraInput.events.valueChange, (event) => {
                          updateState({
                              inputColorString: event.detail,
                          });
                          dispatch(new events.colorChange(event.detail));
                      })}
                  ></${ViraInput}>
              `
            : '';

        return html`
            <div class="swatch">
                <${ViraColorSwatch.assign({
                    backgroundColor: inputs.color,
                })}></${ViraColorSwatch}>
                ${inputTemplate}
            </div>
            <table>
                <tbody>
                    ${rows.map((row) => {
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
        `;
    },
});
