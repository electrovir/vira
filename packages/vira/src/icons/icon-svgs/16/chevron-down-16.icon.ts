import {html} from 'element-vir';
import {viraIconCssVars} from '../../icon-css-vars.js';
import {defineIcon} from '../../icon-svg.js';

/**
 * A chevron that points downwards (16px). See ChevronDown24Icon for the 24px version.
 *
 * @category Icon
 * @category SVG
 * @see https://electrovir.github.io/vira/book/icons/chevrondown16icon
 */
export const ChevronDown16Icon = defineIcon({
    name: 'ChevronDown16Icon',
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
                d="M4 5.5 L8 10 12 5.5"
            />
        </svg>
    `,
});
