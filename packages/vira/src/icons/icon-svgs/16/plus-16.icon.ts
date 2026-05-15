import {html} from 'element-vir';
import {viraIconCssVars} from '../../icon-css-vars.js';
import {defineIcon} from '../../icon-svg.js';

/**
 * A plus icon.
 *
 * @category Icon
 * @category SVG
 * @see https://electrovir.github.io/vira/book/icons/plus16icon
 */
export const Plus16Icon = defineIcon({
    name: 'Plus16Icon',
    svgTemplate: html`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M8 3v10M3 8h10"
                fill="none"
                stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
                stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
            />
        </svg>
    `,
});
