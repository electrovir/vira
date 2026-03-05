import {html} from 'element-vir';
import {viraIconCssVars} from '../icon-css-vars.js';
import {defineIcon} from '../icon-svg.js';

/**
 * A chevron that points upwards (16px). See ChevronUp24Icon for the 24px version.
 *
 * @category Icon
 * @category SVG
 * @see https://electrovir.github.io/vira/book/icons/chevronup16icon
 */
export const ChevronUp16Icon = defineIcon({
    name: 'ChevronUp16Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
                d="M4 10 L8 6 12 10"
            />
        </svg>
    `,
});
