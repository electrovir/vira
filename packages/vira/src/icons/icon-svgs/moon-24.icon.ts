import {html} from 'element-vir';
import {viraIconCssVars} from '../icon-css-vars.js';
import {defineIcon} from '../icon-svg.js';

export const Moon24Icon = defineIcon({
    name: 'Moon24Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
            stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
            fill=${viraIconCssVars['vira-icon-fill-color'].value}
            stroke-linejoin="round"
        >
            <path d="M18.6 17.72A8 8 0 1 1 15 4.26a8 8 0 0 0 3.6 13.46Z" />
        </svg>
    `,
});
