import {html} from 'element-vir';
import {viraIconCssVars} from '../../icon-css-vars.js';
import {defineIcon} from '../../icon-svg.js';

/**
 * An x icon.
 *
 * @category Icon
 * @category SVG
 * @see https://electrovir.github.io/vira/book/icons/x16icon
 */
export const X16Icon = defineIcon({
    name: 'X16Icon',
    svgTemplate: html`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 4l8 8M12 4l-8 8"
                fill="none"
                stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
                stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
            />
        </svg>
    `,
});
