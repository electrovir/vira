import {html} from 'element-vir';
import {viraIconCssVars} from '../../icon-css-vars.js';
import {defineIcon} from '../../icon-svg.js';

/**
 * A ring progress icon with 3 of 4 ring segments filled and a center dot.
 *
 * @category Icon
 * @category SVG
 * @see https://electrovir.github.io/vira/book/icons/ring3dot16icon
 */
export const Ring3Dot16Icon = defineIcon({
    name: 'Ring3Dot16Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill=${viraIconCssVars['vira-icon-fill-color'].value}
            stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
            stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path d="M9.75 1.22A7 7 0 0 1 14.78 6.25" fill="none" />
            <g
                fill="var(${viraIconCssVars['vira-icon-fill-color'].name}, ${viraIconCssVars[
                    'vira-icon-stroke-color'
                ].value})"
                stroke="var(${viraIconCssVars['vira-icon-fill-color'].name}, ${viraIconCssVars[
                    'vira-icon-stroke-color'
                ].value})"
            >
                <path d="M1.22 6.25A7 7 0 0 1 6.25 1.22L6.25 3.32A5 5 0 0 0 3.32 6.25Z" />
                <path d="M6.25 14.78A7 7 0 0 1 1.22 9.75L3.32 9.75A5 5 0 0 0 6.25 12.68Z" />
                <path d="M14.78 9.75A7 7 0 0 1 9.75 14.78L9.75 12.68A5 5 0 0 0 12.68 9.75Z" />
                <circle cx="8" cy="8" r="1.5" />
            </g>
        </svg>
    `,
});
