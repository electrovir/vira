import {html} from 'element-vir';
import {viraIconCssVars} from '../../icon-css-vars.js';
import {defineIcon} from '../../icon-svg.js';

/**
 * A plus icon.
 *
 * @category Icon
 * @category SVG
 * @see https://electrovir.github.io/vira/book/icons/plus24icon
 */
export const Plus24Icon = defineIcon({
    name: 'Plus24Icon',
    svgTemplate: html`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M12 5v14M5 12h14"
                fill="none"
                stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
                stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
            />
        </svg>
    `,
});
