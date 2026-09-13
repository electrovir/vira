/* node:coverage disable */

import {assert, assertWrap} from '@augment-vir/assert';
import {createArray} from '@augment-vir/common';
import {extractEventTarget} from '@augment-vir/web';
import {
    type ColorCoordinateName,
    type ColorFormatDefinition,
    type ColorFormatName,
    colorFormats,
} from '@electrovir/color/dist/data/color-class/color-formats.js';
import {Color, type ColorUpdate} from '@electrovir/color/dist/data/color-class/color.js';
import {
    css,
    defineElement,
    defineElementEvent,
    html,
    listen,
    onDomRendered,
    unsafeCSS,
} from 'element-vir';
import {viraFontCssVars} from '../../styles/font.js';
import {ViraInput} from '../vira-input.element.js';

/**
 * A slider for a specific color coordinate in a specific color space in a specific color.
 *
 * @category Elements
 */
export const ViraColorSlider = defineElement<{
    color: Readonly<Color>;
    colorFormatName: ColorFormatName;
    colorCoordinateName: ColorCoordinateName;
}>()({
    tagName: 'vira-color-slider',
    cssVars: {
        'vira-color-slider-gradient': 'black',
    },
    styles({cssVars}) {
        return css`
            :host {
                display: flex;
                align-items: center;
                font-family: ${viraFontCssVars['vira-monospace'].value};
                gap: 2px;
            }

            input[type='range'] {
                flex-grow: 1;
                appearance: none;
                background: ${cssVars['vira-color-slider-gradient'].value};
                height: 9px;
                border-radius: 4px;
                cursor: pointer;
            }

            ${ViraInput} {
                width: 76px;
            }

            .coordinate {
                font-size: 18px;
                margin-top: -4px;
            }
        `;
    },
    events: {
        valueChange: defineElementEvent<number>(),
    },
    render({inputs, events, dispatch, cssVars}) {
        const formatDefinition: ColorFormatDefinition = colorFormats[inputs.colorFormatName];
        const coordinateDefinition = formatDefinition.coords[inputs.colorCoordinateName];

        if (!coordinateDefinition) {
            throw new Error(
                `Invalid color coordinate '${inputs.colorCoordinateName}' for color format '${inputs.colorFormatName}'`,
            );
        }

        const totalStops = 10;

        const colorStops: string[] = createArray(totalStops, (index) => {
            const value =
                coordinateDefinition.min +
                (coordinateDefinition.max - coordinateDefinition.min) * (index / totalStops);

            const stopColor = new Color({
                [inputs.colorFormatName]: {
                    ...inputs.color[inputs.colorFormatName],
                    [inputs.colorCoordinateName]: value,
                },
            } as ColorUpdate);

            return stopColor.toCss()[formatDefinition.conversionFormat];
        });

        const gradient = css`linear-gradient(to right, ${unsafeCSS(colorStops.join(','))})`;

        const coordinateValue = assertWrap.isNumber(
            (
                inputs.color[inputs.colorFormatName] as Record<
                    ColorCoordinateName,
                    undefined | string | number
                >
            )[inputs.colorCoordinateName],
        );

        const displayValue = coordinateDefinition.radix
            ? Math.round(coordinateValue)
                  .toString(coordinateDefinition.radix)
                  .toUpperCase()
                  .padStart(coordinateDefinition.radixPad || 0, '0')
            : String(coordinateValue);

        return html`
            <span class="coordinate">${inputs.colorCoordinateName.toUpperCase()}</span>
            <input
                type="range"
                style=${css`
                    ${cssVars['vira-color-slider-gradient'].name}: ${gradient};
                `}
                step=${Math.pow(10, coordinateDefinition.digits ? -coordinateDefinition.digits : 0)}
                ${onDomRendered((element) => {
                    /**
                     * We must set these imperatively to force the input element to match the
                     * inputs, otherwise when swapping color formats these color sliders don't
                     * update correctly.
                     */
                    assert.instanceOf(element, HTMLInputElement);

                    element.min = String(coordinateDefinition.min);
                    element.max = String(coordinateDefinition.max);
                    element.value = String(coordinateValue);
                })}
                ${listen('input', (event) => {
                    const element = extractEventTarget(event, HTMLInputElement);
                    const newValue = Number(element.value);
                    if (isNaN(newValue)) {
                        return;
                    }

                    dispatch(
                        new events.valueChange({
                            detail: newValue,
                        }),
                    );
                })}
            />
            <${ViraInput.assign({
                value: displayValue,
            })}
                ${listen(ViraInput.events.valueChange, (event) => {
                    const newValue = coordinateDefinition.radix
                        ? parseInt(event.detail, coordinateDefinition.radix)
                        : Number(event.detail);
                    if (isNaN(newValue)) {
                        return;
                    }

                    dispatch(
                        new events.valueChange({
                            detail: newValue,
                        }),
                    );
                })}
            ></${ViraInput}>
        `;
    },
});
