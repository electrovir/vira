import {html} from 'element-vir';
import {viraIconCssVars} from '../../icon-css-vars.js';
import {defineIcon} from '../../icon-svg.js';

/**
 * A sparkle icon.
 *
 * @category Icon
 * @category SVG
 * @see https://electrovir.github.io/vira/book/icons/sparkle24icon
 */
export const Sparkle24Icon = defineIcon({
    name: 'Sparkle24Icon',
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
            <path d="M9 6l2 4 4 2-4 2-2 4-2-4-4-2 4-2z" />
            <path d="M18 3l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" />
            <path d="M18 15l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" />
        </svg>
    `,
});
