import {css, unsafeCSS} from 'element-vir';
import {defineCssVars} from 'lit-css-vars';
import {themeDefaultKey} from 'theme-vir/dist/color-theme/color-theme.js';
import {viraColorPalette} from './vira-color-palette.js';
import {viraTheme} from './vira-color-theme.js';

const defaultViraFormRadius = '8px';

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
        viraTheme.colors['vira-blue-behind-bg-decoration'].background.value,
    'vira-form-selection-hover-color':
        viraTheme.colors['vira-blue-behind-bg-invisible'].background.value,
    'vira-form-selection-active-color':
        viraTheme.colors['vira-blue-behind-bg-decoration'].background.value,

    'vira-form-error-color': viraTheme.colors['vira-red-behind-bg-non-body'].background.value,
    'vira-form-error-hover-color': viraTheme.colors['vira-red-behind-bg-header'].background.value,
    'vira-form-error-active-color': viraTheme.colors['vira-red-behind-bg-body'].background.value,

    'vira-form-success-color': viraTheme.colors['vira-green-behind-bg-non-body'].background.value,

    'vira-form-label-font-weight': 'bold',
    'vira-form-small-text-size': '12px',
    'vira-form-medium-text-size': '16px',
    'vira-form-large-text-size': '16px',

    'vira-form-radius': defaultViraFormRadius,
    'vira-form-wrapper-radius': '16px',

    'vira-form-focus-outline-color':
        viraTheme.colors['vira-blue-foreground-header'].foreground.value,
    'vira-form-focus-outline-border-radius': css`calc(var(--vira-form-radius, ${unsafeCSS(defaultViraFormRadius)}) + 2px)`,

    'vira-form-plain-color': viraColorPalette['vira-grey-0'].value,
    'vira-form-plain-hover-color':
        viraTheme.colors['vira-grey-foreground-invisible'].foreground.value,
    'vira-form-plain-active-color':
        viraTheme.colors['vira-grey-foreground-decoration'].foreground.value,

    'vira-form-accent-primary-color':
        viraTheme.colors['vira-blue-behind-bg-non-body'].background.value,
    'vira-form-accent-primary-hover-color':
        viraTheme.colors['vira-blue-behind-bg-header'].background.value,
    'vira-form-accent-primary-active-color':
        viraTheme.colors['vira-blue-behind-bg-body'].background.value,

    'vira-form-danger-color': viraTheme.colors['vira-red-behind-bg-non-body'].background.value,
    'vira-form-danger-hover-color': viraTheme.colors['vira-red-behind-bg-header'].background.value,
    'vira-form-danger-active-color': viraTheme.colors['vira-red-behind-bg-body'].background.value,

    'vira-form-filled-background-color':
        viraTheme.colors['vira-grey-foreground-invisible'].foreground.value,
    'vira-form-filled-active-background-color':
        viraTheme.colors['vira-grey-foreground-decoration'].foreground.value,
});
