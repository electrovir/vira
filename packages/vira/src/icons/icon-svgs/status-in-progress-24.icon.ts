import {html} from 'element-vir';
import {viraIconColorCssVars} from '../icon-color-css-vars';
import {defineIcon} from '../icon-svg';

export const StatusInProgress24Icon = defineIcon({
    name: 'StatusInProgress24Icon',
    svgTemplate: html`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke=${viraIconColorCssVars['vira-icon-stroke-color'].value}
                fill="none"
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${viraIconColorCssVars['vira-icon-stroke-color'].value}
                stroke="none"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${viraIconColorCssVars['vira-icon-stroke-color'].value}
                stroke="none"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${viraIconColorCssVars['vira-icon-stroke-color'].value}
                stroke="none"
            />
        </svg>
    `,
});
