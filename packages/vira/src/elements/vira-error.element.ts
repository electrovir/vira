import {css, html} from 'element-vir';
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
        'vira-error-color': 'red',
        'vira-error-font-weight': 'bold',
    },
    styles: ({cssVars}) => css`
        :host {
            color: ${cssVars['vira-error-color'].value};
            font-weight: ${cssVars['vira-error-font-weight'].value};
        }
    `,
    render() {
        return html`
            <slot></slot>
        `;
    },
});
