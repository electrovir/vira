import {html} from 'element-vir';
import {viraIconCssVars} from '../icon-css-vars';
import {defineIcon} from '../icon-svg';

export const StatusFailure24Icon = defineIcon({
    name: 'StatusFailure24Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
                fill="none"
            />
            <path
                stroke="none"
                fill=${viraIconCssVars['vira-icon-stroke-color'].value}
                d="m11.33 12-3.7-4.17.74-.66L12 11.25l3.63-4.08.74.66-3.7 4.17 3.7 4.17-.74.66L12 12.75l-3.63 4.08-.74-.66 3.7-4.17Z"
            />
        </svg>
    `,
});
