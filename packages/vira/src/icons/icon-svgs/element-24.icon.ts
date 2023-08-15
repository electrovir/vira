import {html} from 'element-vir';
import {viraIconCssVars} from '../icon-css-vars';
import {defineIcon} from '../icon-svg';

export const Element24Icon = defineIcon({
    name: 'Element24Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
        >
            <path
                stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
            />
        </svg>
    `,
});
