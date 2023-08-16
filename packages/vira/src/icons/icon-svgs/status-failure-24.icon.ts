import {html} from 'element-vir';
import {viraIconCssVars} from '../icon-css-vars';
import {defineIcon} from '../icon-svg';

export const StatusFailure24Icon = defineIcon({
    name: 'StatusFailure24Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
                stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
                fill="none"
            />
            <path
                stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
                stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
                fill="none"
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
            />
        </svg>
    `,
});
