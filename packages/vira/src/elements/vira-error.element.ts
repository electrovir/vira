import {css, html} from 'element-vir';
import {viraFormCssVars} from '../styles/form-styles.js';
import {defineViraElement} from './define-vira-element.js';

/**
 * An error wrapper that applies error coloring (red, by default).
 *
 * @category Elements
 * @see https://electrovir.github.io/vira/book/elements/vira-error
 */
export const ViraError = defineViraElement()({
    tagName: 'vira-error',
    cssVars: {
        'vira-error-font-weight': 'bold',
    },
    styles: ({cssVars}) => css`
        :host {
            color: ${viraFormCssVars['vira-form-error-color'].value};
            font-weight: ${cssVars['vira-error-font-weight'].value};
        }
    `,
    render() {
        return html`
            <slot></slot>
        `;
    },
});
