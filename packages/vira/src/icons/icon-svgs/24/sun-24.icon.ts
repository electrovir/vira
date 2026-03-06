import {html} from 'element-vir';
import {viraIconCssVars} from '../../icon-css-vars.js';
import {defineIcon} from '../../icon-svg.js';

/**
 * A sun icon.
 *
 * @category Icon
 * @category SVG
 * @see https://electrovir.github.io/vira/book/icons/sun24icon
 */
export const Sun24Icon = defineIcon({
    name: 'Sun24Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            style="fill-rule:nonzero;stroke:#000;stroke-width:1px;stroke-linecap:round;clip-rule:evenodd;"
            viewBox="0 0 24 24"
        >
            <circle
                cx="12"
                cy="12"
                r="4"
                stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
                stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
                fill=${viraIconCssVars['vira-icon-fill-color'].value}
            />
            <path
                d="M12 2v3m0 14v3M4.22 4.22l2.12 2.12m11.32 11.32 2.12 2.12M2 12h3m14 0h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"
                stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
                stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
                fill="none"
            />
        </svg>
    `,
});
