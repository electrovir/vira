import {css} from 'element-vir';
import {viraIconColorCssVars} from '../../icons/icon-color-css-vars';
import {ViraIconSvg} from '../../icons/icon-svg';
import {defineViraElement} from '../define-vira-element';

export const ViraIcon = defineViraElement<{
    icon: Pick<ViraIconSvg, 'svgTemplate'> | undefined;
    /** Ignores the given icon's embedded size and causes the <svg> element to fill its parent. */
    fitContainer?: boolean | undefined;
}>()({
    tagName: 'vira-icon',
    hostClasses: {
        /** Ignores the given icon's embedded size and causes the <svg> element to fill its parent. */
        'vira-icon-fit-container': ({inputs}) => !!inputs.fitContainer,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: inline-block;
            color: ${viraIconColorCssVars['vira-icon-color'].value};
            fill: ${viraIconColorCssVars['vira-icon-fill-color'].value};
            stroke: ${viraIconColorCssVars['vira-icon-stroke-color'].value};
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${hostClasses['vira-icon-fit-container'].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,
    renderCallback: ({inputs}) => {
        if (!inputs.icon) {
            return '';
        }

        return inputs.icon.svgTemplate;
    },
});
