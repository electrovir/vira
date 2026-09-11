/* node:coverage disable */

import {
    type ColorSyntaxName,
    getColorSyntaxFromCssString,
} from '@electrovir/color/dist/data/color-class/color-formats.js';
import {Color} from '@electrovir/color/dist/data/color-class/color.js';
import {css, defineElement, defineElementEvent, html, listen} from 'element-vir';
import {ViraAllColorSpaceSliders} from './vira-all-color-space-sliders.element.js';
import {ViraColorDetails} from './vira-color-details.element.js';

/**
 * A color picker element that shows sliders for all supported color spaces at once, as well as all
 * the values for all supported color spaces in a table.
 *
 * @category Elements
 */
export const ViraAllSpacesColorPicker = defineElement<{color: string}>()({
    tagName: 'vira-all-spaces-color-picker',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
    `,
    events: {
        colorChange: defineElementEvent<string>(),
    },
    state() {
        return {
            inputColorString: undefined as undefined | string,
            overrideInputColor: undefined as undefined | ColorSyntaxName,
        };
    },
    render({inputs, dispatch, events, state, updateState}) {
        const color = new Color(inputs.color);

        if (state.overrideInputColor) {
            updateState({
                inputColorString: color.toCss()[state.overrideInputColor],
            });
        }

        if (state.inputColorString == undefined) {
            updateState({
                inputColorString: inputs.color,
            });
        }

        return html`
            <${ViraColorDetails.assign({
                color: inputs.color,
                showInput: true,
            })}
                ${listen(ViraColorDetails.events.colorChange, (event) => {
                    updateState({
                        inputColorString: event.detail,
                        overrideInputColor: undefined,
                    });
                    dispatch(new events.colorChange(event.detail));
                })}
            ></${ViraColorDetails}>
            <${ViraAllColorSpaceSliders.assign({
                color,
            })}
                ${listen(ViraAllColorSpaceSliders.events.colorChange, (event) => {
                    const colorSyntax = getColorSyntaxFromCssString(state.inputColorString || '#');
                    updateState({
                        overrideInputColor: colorSyntax,
                    });
                    dispatch(new events.colorChange(event.detail));
                })}
            ></${ViraAllColorSpaceSliders}>
        `;
    },
});
