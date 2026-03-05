import {html} from 'element-vir';
import {viraIconCssVars} from '../icon-css-vars.js';
import {defineIcon} from '../icon-svg.js';

/**
 * An upload icon (16×16).
 *
 * @category Icon
 * @category SVG
 * @see https://electrovir.github.io/vira/book/icons/upload16icon
 */
export const Upload16Icon = defineIcon({
    name: 'Upload16Icon',
    svgTemplate: html`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M3 10v4h10v-4"
                fill=${viraIconCssVars['vira-icon-fill-color'].value}
                stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
                stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M8 10V3m3 3-3-3-3 3"
                fill="none"
                stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
                stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    `,
});
