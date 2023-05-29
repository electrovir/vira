import {html} from 'element-vir';
import {defineIcon} from '../icon-svg';

export const Element16Icon = defineIcon({
    name: 'Element16Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width="1"
                vector-effect="non-scaling-stroke"
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
            />
        </svg>
    `,
});
