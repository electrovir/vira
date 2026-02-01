import {css, html} from 'element-vir';
import {viraFormCssVars} from '../styles/form-styles.js';
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
        'vira-card-border': css`1px solid ${viraFormCssVars['vira-form-border-color'].value}`,
        'vira-card-padding': viraFormCssVars['vira-form-wrapper-radius'].value,
    },
    styles: ({hostClasses, cssVars}) => css`
        :host {
            display: block;
            border: ${cssVars['vira-card-border'].value};
            border-radius: ${viraFormCssVars['vira-form-wrapper-radius'].value};
            padding: ${cssVars['vira-card-padding'].value};
        }

        ${hostClasses['vira-card-error'].selector} {
            border-color: ${viraFormCssVars['vira-form-error-color'].value};
        }
        ${hostClasses['vira-card-success'].selector} {
            border-color: ${viraFormCssVars['vira-form-success-color'].value};
        }
    `,
    render() {
        return html`
            <slot></slot>
        `;
    },
});
