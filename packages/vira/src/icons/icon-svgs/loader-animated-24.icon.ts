import {css, html} from 'element-vir';
import {viraAnimationDurations} from '../../styles/durations';
import {viraIconCssVars} from '../icon-css-vars';
import {defineIcon} from '../icon-svg';

const animatedLoaderStyles = css`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg.loader-animated-24-icon {
        animation: ${viraAnimationDurations['vira-extended-animation-duration'].value} linear
            loader-animated-spin infinite;
    }
`;

export const LoaderAnimated24Icon = defineIcon({
    name: 'LoaderAnimated24Icon',
    svgTemplate: html`
        <style>
            ${animatedLoaderStyles}
        </style>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="loader-animated-24-icon"
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            style=${animatedLoaderStyles}
        >
            <path
                d="M12 8V2M16 12h6M12 16v6M8 12H2M9.17 9.17 4.93 4.93M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"
                stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
            />
        </svg>
    `,
});
