import {html} from 'element-vir';
import {viraIconCssVars} from '../../icon-css-vars.js';
import {defineIcon} from '../../icon-svg.js';

/**
 * A chevron that points upwards. See ChevronUp24Icon or one pointing upwards.
 *
 * @category Icon
 * @category SVG
 * @see https://electrovir.github.io/vira/book/icons/chevrondown24icon
 */
export const ChevronDown24Icon = defineIcon({
    name: 'ChevronDown24Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
                d="M6 8 L12 15 18 8"
            />
        </svg>
    `,
});
