import {html} from 'element-vir';
import {viraIconCssVars} from '../icon-css-vars';
import {defineIcon} from '../icon-svg';

export const StatusSuccess24Icon = defineIcon({
    name: 'StatusSuccess24Icon',
    svgTemplate: html`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
                stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
                fill="none"
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
                stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
            />
        </svg>
    `,
});
