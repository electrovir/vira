/* node:coverage disable */

import {getObjectTypedKeys} from '@augment-vir/common';
import {
    type ColorCoordinateName,
    type ColorFormatName,
    colorFormats,
} from '@electrovir/color/dist/data/color-class/color-formats.js';
import {type Color, type ColorUpdate} from '@electrovir/color/dist/data/color-class/color.js';
import {css, defineElement, defineElementEvent, html, listen, nothing} from 'element-vir';
import {noNativeSpacing} from '../../styles/native-styles.js';
import {ViraColorSlider} from './vira-color-slider.element.js';

/**
 * Color sliders for all coordinates within a specific color format.
 *
 * @category Elements
 */
export const ViraColorFormatSliders = defineElement<{
    color: Readonly<Color>;
    colorFormatName: ColorFormatName;
    showFormatName: boolean;
}>()({
    tagName: 'vira-color-format-sliders',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
        }

        h3 {
            ${noNativeSpacing};
        }
    `,
    events: {
        colorChange: defineElementEvent<string>(),
    },
    render({inputs, dispatch, events}) {
        const colorFormat = colorFormats[inputs.colorFormatName];

        const coordinateTemplates = getObjectTypedKeys(colorFormat.coords).map(
            (colorCoordinate: ColorCoordinateName) => {
                return html`
                    <${ViraColorSlider.assign({
                        color: inputs.color,
                        colorCoordinateName: colorCoordinate,
                        colorFormatName: inputs.colorFormatName,
                    })}
                        ${listen(ViraColorSlider.events.valueChange, (event) => {
                            const newColor = inputs.color.clone();

                            newColor.set({
                                [inputs.colorFormatName]: {
                                    [colorCoordinate]: event.detail,
                                },
                            } as ColorUpdate);
                            const newValue = newColor.toCss()[colorFormat.conversionFormat];
                            dispatch(new events.colorChange(newValue));
                        })}
                    ></${ViraColorSlider}>
                `;
            },
        );

        return html`
            ${inputs.showFormatName
                ? html`
                      <h3>${inputs.colorFormatName}</h3>
                  `
                : nothing}
            ${coordinateTemplates}
        `;
    },
});
