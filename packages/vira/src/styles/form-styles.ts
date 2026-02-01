import {css} from 'element-vir';
import {defineCssVars} from 'lit-css-vars';
import {themeDefaultKey} from 'theme-vir/dist/color-theme/color-theme.js';
import {viraTheme} from './vira-color-theme.js';

/**
 * CSS vars for vira form elements.
 *
 * @category CSS Vars
 * @category Styles
 */
export const viraFormCssVars = defineCssVars({
    'vira-form-border-color': viraTheme.colors['vira-grey-foreground-decoration'].foreground.value,
    'vira-form-placeholder-color':
        viraTheme.colors['vira-grey-foreground-placeholder'].foreground.value,

    'vira-form-background-color': viraTheme.colors[themeDefaultKey].background.value,
    'vira-form-foreground-color': viraTheme.colors[themeDefaultKey].foreground.value,

    'vira-form-modal-backdrop-color': 'rgba(0, 0, 0, 0.35)',
    'vira-form-secondary-body-foreground':
        viraTheme.colors['vira-grey-foreground-header'].foreground.value,

    'vira-form-text-selection-color':
        viraTheme.colors['vira-blue-background-decoration'].background.value,
    'vira-form-selection-hover-color':
        viraTheme.colors['vira-blue-background-invisible'].background.value,
    'vira-form-selection-active-color':
        viraTheme.colors['vira-blue-background-decoration'].background.value,

    'vira-form-error-color': viraTheme.colors['vira-red-background-non-body'].background.value,
    'vira-form-error-hover-color': viraTheme.colors['vira-red-background-header'].background.value,
    'vira-form-error-active-color': viraTheme.colors['vira-red-background-body'].background.value,

    'vira-form-success-color': viraTheme.colors['vira-green-background-non-body'].background.value,

    'vira-form-label-font-weight': 'bold',

    'vira-form-radius': '8px',
    'vira-form-wrapper-radius': '16px',

    'vira-form-focus-outline-color':
        viraTheme.colors['vira-blue-foreground-header'].foreground.value,
    'vira-form-focus-outline-border-radius': css`calc(var(--vira-form-input-radius) + 2px)`,

    'vira-form-accent-primary-color':
        viraTheme.colors['vira-blue-background-non-body'].background.value,
    'vira-form-accent-primary-hover-color':
        viraTheme.colors['vira-blue-background-header'].background.value,
    'vira-form-accent-primary-active-color':
        viraTheme.colors['vira-blue-background-body'].background.value,

    'vira-form-danger-color': viraTheme.colors['vira-red-background-non-body'].background.value,
    'vira-form-danger-hover-color': viraTheme.colors['vira-red-background-header'].background.value,
    'vira-form-danger-active-color': viraTheme.colors['vira-red-background-body'].background.value,

    'vira-form-filled-background-color':
        viraTheme.colors['vira-grey-foreground-invisible'].foreground.value,
    'vira-form-filled-active-background-color':
        viraTheme.colors['vira-grey-foreground-decoration'].foreground.value,
});
