import {html} from 'element-vir';
import {viraIconCssVars} from '../../icon-css-vars.js';
import {defineIcon} from '../../icon-svg.js';

/**
 * A status icon that indicates a warning.
 *
 * @category Icon
 * @category SVG
 * @see https://electrovir.github.io/vira/book/icons/statuswarning24icon
 */
export const StatusWarning24Icon = defineIcon({
    name: 'StatusWarning24Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                cx="12"
                cy="12"
                r="9"
                fill=${viraIconCssVars['vira-icon-fill-color'].value}
                stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
                stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
            />
            <circle
                cx="12"
                cy="16"
                r="1"
                fill=${viraIconCssVars['vira-icon-stroke-color'].value}
                stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
                stroke-width="calc(${viraIconCssVars['vira-icon-stroke-width'].value} - 1px)"
            />
            <path
                d="m12 14 .2-7h-.4l.2 7Z"
                fill="none"
                stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
                stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
            />
        </svg>
    `,
});
