import {css, html} from 'element-vir';
import {viraAnimationDurations} from '../../../styles/durations.js';
import {defineIcon} from '../../icon-svg.js';
import {LucideLoaderIcon} from '../../lucide/loader.icon.js';

const animatedLoaderStyles = css`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        width: 24px;
        height: 24px;
        animation: ${viraAnimationDurations['vira-extended-animation-duration'].value} linear
            loader-animated-spin infinite;
    }
`;

/**
 * Lucide's `Loader` icon at 24px, spinning on its own.
 *
 * @category Icon
 * @category SVG
 * @see https://electrovir.github.io/vira/book/icons/loaderanimated24icon
 */
export const LoaderAnimated24Icon = defineIcon({
    name: 'LoaderAnimated24Icon',
    svgTemplate: html`
        <style>
            ${animatedLoaderStyles}
        </style>
        ${LucideLoaderIcon.svgTemplate}
    `,
});
