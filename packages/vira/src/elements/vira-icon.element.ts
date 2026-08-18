import {addPx} from '@augment-vir/common';
import {css} from 'element-vir';
import {type ViraIconSvg} from '../icons/icon-svg.js';
import {defineViraElement} from '../util/define-vira-element.js';

/**
 * An element that renders a single {@link ViraIconSvg}.
 *
 * @category Icon
 * @category Elements
 * @see https://electrovir.github.io/vira/book/elements/vira-icon
 */
export const ViraIcon = defineViraElement<{
    icon: Pick<ViraIconSvg, 'svgTemplate' | 'size'> | undefined;
    /** Ignores the given icon's embedded size and causes the <svg> element to fill its parent. */
    fitContainer?: boolean | undefined;
}>()({
    tagName: 'vira-icon',
    hostClasses: {
        /** Ignores the given icon's embedded size and causes the <svg> element to fill its parent. */
        'vira-icon-fit-container': ({inputs}) => !!inputs.fitContainer || !!inputs.icon?.size,
    },
    styles: ({hostClasses}) => {
        return css`
            :host {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                flex-shrink: 0;
            }

            svg {
                /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
                display: block;
            }

            svg * {
                vector-effect: non-scaling-stroke;
            }

            ${hostClasses['vira-icon-fit-container'].selector} {
                > *,
                svg {
                    height: 100%;
                    width: 100%;
                }
            }
        `;
    },
    render({inputs, host}) {
        if (!inputs.icon) {
            return '';
        } else if (inputs.icon.size) {
            host.style.width = addPx(inputs.icon.size);
            host.style.height = addPx(inputs.icon.size);
        }

        return inputs.icon.svgTemplate;
    },
});
