/* node:coverage disable */

import {getObjectTypedKeys, getObjectTypedValues} from '@augment-vir/common';
import {colorFormatsBySpace} from '@electrovir/color/dist/data/color-class/color-formats.js';
import {type Color} from '@electrovir/color/dist/data/color-class/color.js';
import {css, defineElement, defineElementEvent, html, listen} from 'element-vir';
import {ViraColorFormatSliders} from './vira-color-format-sliders.element.js';

/**
 * Color sliders for all color spaces.
 *
 * @category Elements
 */
export const ViraAllColorSpaceSliders = defineElement<{color: Readonly<Color>}>()({
    tagName: 'vira-all-color-space-sliders',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .color-space {
            display: flex;
            flex-wrap: wrap;
            column-gap: 32px;
            row-gap: 8px;
        }
    `,
    events: {
        colorChange: defineElementEvent<string>(),
    },
    render({inputs, dispatch, events}) {
        const colorSpaceTemplates = getObjectTypedValues(colorFormatsBySpace).map(
            (colorSpaceFormats) => {
                const formatTemplates = getObjectTypedKeys(colorSpaceFormats).map(
                    (colorFormatName) => {
                        return html`
                            <${ViraColorFormatSliders.assign({
                                color: inputs.color,
                                colorFormatName,
                                showFormatName: true,
                            })}
                                ${listen(ViraColorFormatSliders.events.colorChange, (event) => {
                                    dispatch(
                                        new events.colorChange({
                                            detail: event.detail,
                                        }),
                                    );
                                })}
                            ></${ViraColorFormatSliders}>
                        `;
                    },
                );

                return html`
                    <section class="color-space">${formatTemplates}</section>
                `;
            },
        );

        return html`
            ${colorSpaceTemplates}
        `;
    },
});
