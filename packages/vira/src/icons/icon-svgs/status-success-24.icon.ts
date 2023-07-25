import {html} from 'element-vir';
import {viraIconColorCssVars} from '../icon-color-css-vars';
import {defineIcon} from '../icon-svg';

export const StatusSuccess24Icon = defineIcon({
    name: 'StatusSuccess24Icon',
    svgTemplate: html`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke=${viraIconColorCssVars['vira-icon-stroke-color'].value}
                fill="none"
            />
            <path
                d="m6.64 13.81.7-.7 2.63 2.62 6.65-7.6.74.66-7.35 8.4-3.37-3.38Z"
                fill=${viraIconColorCssVars['vira-icon-stroke-color'].value}
                stroke="none"
            />
        </svg>
    `,
});
