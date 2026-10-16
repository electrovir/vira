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
            viewBox="0 0 24 24"
            fill=${viraIconCssVars['vira-icon-fill-color'].value}
            stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
            stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v3" />
            <path d="M12 19v3" />
            <path d="m4.22 4.22 2.12 2.12" />
            <path d="m17.66 17.66 2.12 2.12" />
            <path d="M2 12h3" />
            <path d="M19 12h3" />
            <path d="m6.34 17.66-2.12 2.12" />
            <path d="m19.78 4.22-2.12 2.12" />
        </svg>
    `,
});
