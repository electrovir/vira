import {html} from 'element-vir';
import {viraIconCssVars} from '../icon-css-vars.js';
import {defineIcon} from '../icon-svg.js';

/**
 * An icon symbol that represents filtering.
 *
 * @category Icon
 * @category SVG
 * @see https://electrovir.github.io/vira/book/icons/filter24icon
 */
export const Filter24Icon = defineIcon({
    name: 'Filter24Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                d="M4 6h16l-6 12h-4z"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="0"
                fill=${viraIconCssVars['vira-icon-fill-color'].value}
            />
            <path
                d="M3 6h18M6 12h12M9 18h6"
                stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
                stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
                fill="none"
                fill-rule="nonzero"
            />
        </svg>
    `,
});
