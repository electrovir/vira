import {html} from 'element-vir';
import {viraIconCssVars} from '../../icon-css-vars.js';
import {defineIcon} from '../../icon-svg.js';

/**
 * An auto theme icon.
 *
 * @category Icon
 * @category SVG
 * @see https://electrovir.github.io/vira/book/icons/autotheme24icon
 */
export const AutoTheme24Icon = defineIcon({
    name: 'AutoTheme24Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=${viraIconCssVars['vira-icon-fill-color'].value}
            stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
            stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <circle cx="12" cy="12" r="8" />
            <path
                d="M12 4a8 8 0 0 1 0 16z"
                fill=${viraIconCssVars['vira-icon-stroke-color'].value}
            />
        </svg>
    `,
});
