import {css} from 'element-vir';
import {CssVarSyntaxName, defineCssVars} from 'lit-css-vars';
import {themeDefaultKey} from 'theme-vir/dist/color-theme/color-theme.js';
import {viraTheme} from './vira-color-theme.js';

/**
 * CSS vars for vira form elements.
 *
 * @category CSS Vars
 * @category Styles
 */
export const viraFormCssVars = defineCssVars({
    'vira-form-border-color': {
        default: viraTheme.colors['vira-grey-foreground-decoration'].foreground.value,
        initialValue: 'transparent',
        syntax: CssVarSyntaxName.Color,
    },
    'vira-form-placeholder-color': {
        default: viraTheme.colors['vira-grey-foreground-placeholder'].foreground.value,
        initialValue: 'transparent',
        syntax: CssVarSyntaxName.Color,
    },

    'vira-form-background-color': {
        default: viraTheme.colors[themeDefaultKey].background.value,
        initialValue: 'transparent',
        syntax: CssVarSyntaxName.Color,
    },
    'vira-form-foreground-color': {
        default: viraTheme.colors[themeDefaultKey].foreground.value,
        initialValue: 'transparent',
        syntax: CssVarSyntaxName.Color,
    },

    'vira-form-modal-backdrop-color': 'rgba(0, 0, 0, 0.35)',
    'vira-form-secondary-body-foreground': {
        syntax: CssVarSyntaxName.Color,
        default: viraTheme.colors['vira-grey-foreground-header'].foreground.value,
        initialValue: 'transparent',
    },

    'vira-form-text-selection-color': {
        default: viraTheme.colors['vira-blue-background-decoration'].background.value,
        initialValue: 'transparent',
        syntax: CssVarSyntaxName.Color,
    },
    'vira-form-selection-hover-color': {
        default: viraTheme.colors['vira-blue-background-invisible'].background.value,
        initialValue: 'transparent',
        syntax: CssVarSyntaxName.Color,
    },
    'vira-form-selection-active-color': {
        default: viraTheme.colors['vira-blue-background-decoration'].background.value,
        initialValue: 'transparent',
        syntax: CssVarSyntaxName.Color,
    },

    'vira-form-error-color': {
        default: viraTheme.colors['vira-red-background-non-body'].background.value,
        initialValue: 'transparent',
        syntax: CssVarSyntaxName.Color,
    },
    'vira-form-error-hover-color': {
        default: viraTheme.colors['vira-red-background-header'].background.value,
        initialValue: 'transparent',
        syntax: CssVarSyntaxName.Color,
    },
    'vira-form-error-active-color': {
        default: viraTheme.colors['vira-red-background-body'].background.value,
        initialValue: 'transparent',
        syntax: CssVarSyntaxName.Color,
    },

    'vira-form-success-color': {
        default: viraTheme.colors['vira-green-background-non-body'].background.value,
        initialValue: 'transparent',
        syntax: CssVarSyntaxName.Color,
    },

    'vira-form-label-font-weight': 'bold',

    'vira-form-radius': '8px',
    'vira-form-wrapper-radius': '16px',

    'vira-form-focus-outline-color': {
        default: viraTheme.colors['vira-blue-foreground-header'].foreground.value,
        initialValue: 'transparent',
        syntax: CssVarSyntaxName.Color,
    },
    'vira-form-focus-outline-border-radius': {
        initialValue: '10px',
        default: css`calc(var(--vira-form-input-radius) + 2px)`,
        syntax: CssVarSyntaxName.Length,
    },

    'vira-form-accent-primary-color': {
        default: viraTheme.colors['vira-blue-background-non-body'].background.value,
        initialValue: 'transparent',
        syntax: CssVarSyntaxName.Color,
    },
    'vira-form-accent-primary-hover-color': {
        default: viraTheme.colors['vira-blue-background-header'].background.value,
        initialValue: 'transparent',
        syntax: CssVarSyntaxName.Color,
    },
    'vira-form-accent-primary-active-color': {
        default: viraTheme.colors['vira-blue-background-body'].background.value,
        initialValue: 'transparent',
        syntax: CssVarSyntaxName.Color,
    },

    'vira-form-danger-color': {
        default: viraTheme.colors['vira-red-background-non-body'].background.value,
        initialValue: 'transparent',
        syntax: CssVarSyntaxName.Color,
    },
    'vira-form-danger-hover-color': {
        default: viraTheme.colors['vira-red-background-header'].background.value,
        initialValue: 'transparent',
        syntax: CssVarSyntaxName.Color,
    },
    'vira-form-danger-active-color': {
        default: viraTheme.colors['vira-red-background-body'].background.value,
        initialValue: 'transparent',
        syntax: CssVarSyntaxName.Color,
    },

    'vira-form-filled-background-color': {
        default: viraTheme.colors['vira-grey-foreground-invisible'].foreground.value,
        initialValue: 'transparent',
        syntax: CssVarSyntaxName.Color,
    },
    'vira-form-filled-active-background-color': {
        default: viraTheme.colors['vira-grey-foreground-decoration'].foreground.value,
        initialValue: 'transparent',
        syntax: CssVarSyntaxName.Color,
    },
});
