import {css, html} from 'element-vir';
import {defineViraElement} from './define-vira-element.js';

/**
 * State options for {@link ViraCard}.
 *
 * @category Internal
 */
export enum ViraCardState {
    Error = 'error',
    Success = 'success',
}

/**
 * A simple wrapper "card" element that is just a `<slot>` with some styles.
 *
 * @category Elements
 * @see https://electrovir.github.io/vira/book/elements/vira-card
 */
export const ViraCard = defineViraElement<{
    cardState?: ViraCardState | undefined;
}>()({
    tagName: 'vira-card',
    hostClasses: {
        'vira-card-error': ({inputs}) => inputs.cardState === ViraCardState.Error,
        'vira-card-success': ({inputs}) => inputs.cardState === ViraCardState.Success,
    },
    cssVars: {
        'vira-card-border': '1px solid #d3d3d3',
        'vira-card-border-radius': '16px',
        'vira-card-error-color': 'red',
        'vira-card-success-color': 'green',
        'vira-card-padding': '16px',
    },
    styles: ({hostClasses, cssVars}) => css`
        :host {
            display: block;
            border: ${cssVars['vira-card-border'].value};
            border-radius: ${cssVars['vira-card-border-radius'].value};
            padding: ${cssVars['vira-card-padding'].value};
        }

        ${hostClasses['vira-card-error'].selector} {
            border-color: ${cssVars['vira-card-error-color'].value};
        }
        ${hostClasses['vira-card-success'].selector} {
            border-color: ${cssVars['vira-card-success-color'].value};
        }
    `,
    render() {
        return html`
            <slot></slot>
        `;
    },
});
