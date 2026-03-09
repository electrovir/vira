import {defineColorThemeOverride} from 'theme-vir/dist/color-theme/color-theme-override.js';
import {defineColorTheme} from 'theme-vir/dist/color-theme/color-theme.js';
import {viraColorPalette} from './vira-color-palette.js';

/**
 * A color theme from Vira.
 *
 * @category Color
 */
export const viraTheme = defineColorTheme(
    {
        foreground: 'black',
        background: 'white',
        prefix: 'vira',
    },
    {
        'vira-red-foreground-small-body': {
            foreground: viraColorPalette['vira-red-1000'],
        },
        'vira-red-foreground-body': {
            foreground: viraColorPalette['vira-red-750'],
        },
        'vira-red-foreground-non-body': {
            foreground: viraColorPalette['vira-red-650'],
        },
        'vira-red-foreground-header': {
            foreground: viraColorPalette['vira-red-500'],
        },
        'vira-red-foreground-placeholder': {
            foreground: viraColorPalette['vira-red-400'],
        },
        'vira-red-foreground-decoration': {
            foreground: viraColorPalette['vira-red-350'],
        },
        'vira-red-foreground-invisible': {
            foreground: viraColorPalette['vira-red-250'],
        },
        'vira-red-behind-bg-small-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-red-1000'],
        },
        'vira-red-behind-bg-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-red-700'],
        },
        'vira-red-behind-bg-non-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-red-600'],
        },
        'vira-red-behind-bg-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-red-450'],
        },
        'vira-red-behind-bg-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-red-400'],
        },
        'vira-red-behind-bg-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-red-350'],
        },
        'vira-red-behind-bg-invisible': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-red-200'],
        },
        'vira-red-behind-fg-small-body': {
            background: viraColorPalette['vira-red-250'],
        },
        'vira-red-behind-fg-body': {
            background: viraColorPalette['vira-red-350'],
        },
        'vira-red-behind-fg-non-body': {
            background: viraColorPalette['vira-red-400'],
        },
        'vira-red-behind-fg-header': {
            background: viraColorPalette['vira-red-500'],
        },
        'vira-red-behind-fg-placeholder': {
            background: viraColorPalette['vira-red-650'],
        },
        'vira-red-behind-fg-decoration': {
            background: viraColorPalette['vira-red-750'],
        },
        'vira-red-behind-fg-invisible': {
            background: viraColorPalette['vira-red-1000'],
        },
        'vira-red-on-self-small-body': {
            foreground: viraColorPalette['vira-red-850'],
            background: viraColorPalette['vira-red-100'],
        },
        'vira-red-on-self-body': {
            foreground: viraColorPalette['vira-red-850'],
            background: viraColorPalette['vira-red-250'],
        },
        'vira-red-on-self-non-body': {
            foreground: viraColorPalette['vira-red-850'],
            background: viraColorPalette['vira-red-350'],
        },
        'vira-red-on-self-header': {
            foreground: viraColorPalette['vira-red-850'],
            background: viraColorPalette['vira-red-450'],
        },
        'vira-red-on-self-placeholder': {
            foreground: viraColorPalette['vira-red-850'],
            background: viraColorPalette['vira-red-500'],
        },
        'vira-red-on-self-decoration': {
            foreground: viraColorPalette['vira-red-850'],
            background: viraColorPalette['vira-red-650'],
        },
        'vira-red-on-self-invisible': {
            foreground: viraColorPalette['vira-red-850'],
            background: viraColorPalette['vira-red-1000'],
        },
        'vira-yellow-foreground-small-body': {
            foreground: viraColorPalette['vira-yellow-1000'],
        },
        'vira-yellow-foreground-body': {
            foreground: viraColorPalette['vira-yellow-750'],
        },
        'vira-yellow-foreground-non-body': {
            foreground: viraColorPalette['vira-yellow-650'],
        },
        'vira-yellow-foreground-header': {
            foreground: viraColorPalette['vira-yellow-500'],
        },
        'vira-yellow-foreground-placeholder': {
            foreground: viraColorPalette['vira-yellow-400'],
        },
        'vira-yellow-foreground-decoration': {
            foreground: viraColorPalette['vira-yellow-350'],
        },
        'vira-yellow-foreground-invisible': {
            foreground: viraColorPalette['vira-yellow-250'],
        },
        'vira-yellow-behind-bg-small-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-yellow-1000'],
        },
        'vira-yellow-behind-bg-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-yellow-700'],
        },
        'vira-yellow-behind-bg-non-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-yellow-600'],
        },
        'vira-yellow-behind-bg-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-yellow-450'],
        },
        'vira-yellow-behind-bg-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-yellow-400'],
        },
        'vira-yellow-behind-bg-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-yellow-350'],
        },
        'vira-yellow-behind-bg-invisible': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-yellow-250'],
        },
        'vira-yellow-behind-fg-small-body': {
            background: viraColorPalette['vira-yellow-250'],
        },
        'vira-yellow-behind-fg-body': {
            background: viraColorPalette['vira-yellow-350'],
        },
        'vira-yellow-behind-fg-non-body': {
            background: viraColorPalette['vira-yellow-400'],
        },
        'vira-yellow-behind-fg-header': {
            background: viraColorPalette['vira-yellow-500'],
        },
        'vira-yellow-behind-fg-placeholder': {
            background: viraColorPalette['vira-yellow-650'],
        },
        'vira-yellow-behind-fg-decoration': {
            background: viraColorPalette['vira-yellow-750'],
        },
        'vira-yellow-behind-fg-invisible': {
            background: viraColorPalette['vira-yellow-1000'],
        },
        'vira-yellow-on-self-small-body': {
            foreground: viraColorPalette['vira-yellow-850'],
            background: viraColorPalette['vira-yellow-100'],
        },
        'vira-yellow-on-self-body': {
            foreground: viraColorPalette['vira-yellow-850'],
            background: viraColorPalette['vira-yellow-300'],
        },
        'vira-yellow-on-self-non-body': {
            foreground: viraColorPalette['vira-yellow-850'],
            background: viraColorPalette['vira-yellow-350'],
        },
        'vira-yellow-on-self-header': {
            foreground: viraColorPalette['vira-yellow-850'],
            background: viraColorPalette['vira-yellow-450'],
        },
        'vira-yellow-on-self-placeholder': {
            foreground: viraColorPalette['vira-yellow-850'],
            background: viraColorPalette['vira-yellow-550'],
        },
        'vira-yellow-on-self-decoration': {
            foreground: viraColorPalette['vira-yellow-850'],
            background: viraColorPalette['vira-yellow-650'],
        },
        'vira-yellow-on-self-invisible': {
            foreground: viraColorPalette['vira-yellow-850'],
            background: viraColorPalette['vira-yellow-1000'],
        },
        'vira-green-foreground-small-body': {
            foreground: viraColorPalette['vira-green-1000'],
        },
        'vira-green-foreground-body': {
            foreground: viraColorPalette['vira-green-800'],
        },
        'vira-green-foreground-non-body': {
            foreground: viraColorPalette['vira-green-650'],
        },
        'vira-green-foreground-header': {
            foreground: viraColorPalette['vira-green-550'],
        },
        'vira-green-foreground-placeholder': {
            foreground: viraColorPalette['vira-green-450'],
        },
        'vira-green-foreground-decoration': {
            foreground: viraColorPalette['vira-green-350'],
        },
        'vira-green-foreground-invisible': {
            foreground: viraColorPalette['vira-green-250'],
        },
        'vira-green-behind-bg-small-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-green-1000'],
        },
        'vira-green-behind-bg-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-green-750'],
        },
        'vira-green-behind-bg-non-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-green-650'],
        },
        'vira-green-behind-bg-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-green-500'],
        },
        'vira-green-behind-bg-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-green-400'],
        },
        'vira-green-behind-bg-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-green-350'],
        },
        'vira-green-behind-bg-invisible': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-green-250'],
        },
        'vira-green-behind-fg-small-body': {
            background: viraColorPalette['vira-green-250'],
        },
        'vira-green-behind-fg-body': {
            background: viraColorPalette['vira-green-350'],
        },
        'vira-green-behind-fg-non-body': {
            background: viraColorPalette['vira-green-450'],
        },
        'vira-green-behind-fg-header': {
            background: viraColorPalette['vira-green-550'],
        },
        'vira-green-behind-fg-placeholder': {
            background: viraColorPalette['vira-green-650'],
        },
        'vira-green-behind-fg-decoration': {
            background: viraColorPalette['vira-green-800'],
        },
        'vira-green-behind-fg-invisible': {
            background: viraColorPalette['vira-green-1000'],
        },
        'vira-green-on-self-small-body': {
            foreground: viraColorPalette['vira-green-850'],
            background: viraColorPalette['vira-green-100'],
        },
        'vira-green-on-self-body': {
            foreground: viraColorPalette['vira-green-850'],
            background: viraColorPalette['vira-green-300'],
        },
        'vira-green-on-self-non-body': {
            foreground: viraColorPalette['vira-green-850'],
            background: viraColorPalette['vira-green-400'],
        },
        'vira-green-on-self-header': {
            foreground: viraColorPalette['vira-green-850'],
            background: viraColorPalette['vira-green-450'],
        },
        'vira-green-on-self-placeholder': {
            foreground: viraColorPalette['vira-green-850'],
            background: viraColorPalette['vira-green-550'],
        },
        'vira-green-on-self-decoration': {
            foreground: viraColorPalette['vira-green-850'],
            background: viraColorPalette['vira-green-700'],
        },
        'vira-green-on-self-invisible': {
            foreground: viraColorPalette['vira-green-850'],
            background: viraColorPalette['vira-green-1000'],
        },
        'vira-teal-foreground-small-body': {
            foreground: viraColorPalette['vira-teal-1000'],
        },
        'vira-teal-foreground-body': {
            foreground: viraColorPalette['vira-teal-800'],
        },
        'vira-teal-foreground-non-body': {
            foreground: viraColorPalette['vira-teal-650'],
        },
        'vira-teal-foreground-header': {
            foreground: viraColorPalette['vira-teal-550'],
        },
        'vira-teal-foreground-placeholder': {
            foreground: viraColorPalette['vira-teal-450'],
        },
        'vira-teal-foreground-decoration': {
            foreground: viraColorPalette['vira-teal-350'],
        },
        'vira-teal-foreground-invisible': {
            foreground: viraColorPalette['vira-teal-250'],
        },
        'vira-teal-behind-bg-small-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-teal-1000'],
        },
        'vira-teal-behind-bg-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-teal-750'],
        },
        'vira-teal-behind-bg-non-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-teal-600'],
        },
        'vira-teal-behind-bg-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-teal-500'],
        },
        'vira-teal-behind-bg-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-teal-400'],
        },
        'vira-teal-behind-bg-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-teal-350'],
        },
        'vira-teal-behind-bg-invisible': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-teal-250'],
        },
        'vira-teal-behind-fg-small-body': {
            background: viraColorPalette['vira-teal-250'],
        },
        'vira-teal-behind-fg-body': {
            background: viraColorPalette['vira-teal-350'],
        },
        'vira-teal-behind-fg-non-body': {
            background: viraColorPalette['vira-teal-450'],
        },
        'vira-teal-behind-fg-header': {
            background: viraColorPalette['vira-teal-500'],
        },
        'vira-teal-behind-fg-placeholder': {
            background: viraColorPalette['vira-teal-650'],
        },
        'vira-teal-behind-fg-decoration': {
            background: viraColorPalette['vira-teal-750'],
        },
        'vira-teal-behind-fg-invisible': {
            background: viraColorPalette['vira-teal-1000'],
        },
        'vira-teal-on-self-small-body': {
            foreground: viraColorPalette['vira-teal-850'],
            background: viraColorPalette['vira-teal-100'],
        },
        'vira-teal-on-self-body': {
            foreground: viraColorPalette['vira-teal-850'],
            background: viraColorPalette['vira-teal-300'],
        },
        'vira-teal-on-self-non-body': {
            foreground: viraColorPalette['vira-teal-850'],
            background: viraColorPalette['vira-teal-400'],
        },
        'vira-teal-on-self-header': {
            foreground: viraColorPalette['vira-teal-850'],
            background: viraColorPalette['vira-teal-450'],
        },
        'vira-teal-on-self-placeholder': {
            foreground: viraColorPalette['vira-teal-850'],
            background: viraColorPalette['vira-teal-550'],
        },
        'vira-teal-on-self-decoration': {
            foreground: viraColorPalette['vira-teal-850'],
            background: viraColorPalette['vira-teal-700'],
        },
        'vira-teal-on-self-invisible': {
            foreground: viraColorPalette['vira-teal-850'],
            background: viraColorPalette['vira-teal-1000'],
        },
        'vira-blue-foreground-small-body': {
            foreground: viraColorPalette['vira-blue-1000'],
        },
        'vira-blue-foreground-body': {
            foreground: viraColorPalette['vira-blue-750'],
        },
        'vira-blue-foreground-non-body': {
            foreground: viraColorPalette['vira-blue-650'],
        },
        'vira-blue-foreground-header': {
            foreground: viraColorPalette['vira-blue-500'],
        },
        'vira-blue-foreground-placeholder': {
            foreground: viraColorPalette['vira-blue-450'],
        },
        'vira-blue-foreground-decoration': {
            foreground: viraColorPalette['vira-blue-350'],
        },
        'vira-blue-foreground-invisible': {
            foreground: viraColorPalette['vira-blue-250'],
        },
        'vira-blue-behind-bg-small-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-blue-1000'],
        },
        'vira-blue-behind-bg-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-blue-750'],
        },
        'vira-blue-behind-bg-non-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-blue-600'],
        },
        'vira-blue-behind-bg-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-blue-450'],
        },
        'vira-blue-behind-bg-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-blue-400'],
        },
        'vira-blue-behind-bg-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-blue-350'],
        },
        'vira-blue-behind-bg-invisible': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-blue-250'],
        },
        'vira-blue-behind-fg-small-body': {
            background: viraColorPalette['vira-blue-250'],
        },
        'vira-blue-behind-fg-body': {
            background: viraColorPalette['vira-blue-350'],
        },
        'vira-blue-behind-fg-non-body': {
            background: viraColorPalette['vira-blue-400'],
        },
        'vira-blue-behind-fg-header': {
            background: viraColorPalette['vira-blue-500'],
        },
        'vira-blue-behind-fg-placeholder': {
            background: viraColorPalette['vira-blue-650'],
        },
        'vira-blue-behind-fg-decoration': {
            background: viraColorPalette['vira-blue-750'],
        },
        'vira-blue-behind-fg-invisible': {
            background: viraColorPalette['vira-blue-1000'],
        },
        'vira-blue-on-self-small-body': {
            foreground: viraColorPalette['vira-blue-850'],
            background: viraColorPalette['vira-blue-100'],
        },
        'vira-blue-on-self-body': {
            foreground: viraColorPalette['vira-blue-850'],
            background: viraColorPalette['vira-blue-300'],
        },
        'vira-blue-on-self-non-body': {
            foreground: viraColorPalette['vira-blue-850'],
            background: viraColorPalette['vira-blue-350'],
        },
        'vira-blue-on-self-header': {
            foreground: viraColorPalette['vira-blue-850'],
            background: viraColorPalette['vira-blue-450'],
        },
        'vira-blue-on-self-placeholder': {
            foreground: viraColorPalette['vira-blue-850'],
            background: viraColorPalette['vira-blue-550'],
        },
        'vira-blue-on-self-decoration': {
            foreground: viraColorPalette['vira-blue-850'],
            background: viraColorPalette['vira-blue-650'],
        },
        'vira-blue-on-self-invisible': {
            foreground: viraColorPalette['vira-blue-850'],
            background: viraColorPalette['vira-blue-1000'],
        },
        'vira-accent-foreground-small-body': {
            foreground: viraColorPalette['vira-accent-1000'],
        },
        'vira-accent-foreground-body': {
            foreground: viraColorPalette['vira-accent-750'],
        },
        'vira-accent-foreground-non-body': {
            foreground: viraColorPalette['vira-accent-650'],
        },
        'vira-accent-foreground-header': {
            foreground: viraColorPalette['vira-accent-500'],
        },
        'vira-accent-foreground-placeholder': {
            foreground: viraColorPalette['vira-accent-450'],
        },
        'vira-accent-foreground-decoration': {
            foreground: viraColorPalette['vira-accent-350'],
        },
        'vira-accent-foreground-invisible': {
            foreground: viraColorPalette['vira-accent-250'],
        },
        'vira-accent-behind-bg-small-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-accent-1000'],
        },
        'vira-accent-behind-bg-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-accent-750'],
        },
        'vira-accent-behind-bg-non-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-accent-600'],
        },
        'vira-accent-behind-bg-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-accent-450'],
        },
        'vira-accent-behind-bg-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-accent-400'],
        },
        'vira-accent-behind-bg-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-accent-350'],
        },
        'vira-accent-behind-bg-invisible': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-accent-250'],
        },
        'vira-accent-behind-fg-small-body': {
            background: viraColorPalette['vira-accent-250'],
        },
        'vira-accent-behind-fg-body': {
            background: viraColorPalette['vira-accent-350'],
        },
        'vira-accent-behind-fg-non-body': {
            background: viraColorPalette['vira-accent-400'],
        },
        'vira-accent-behind-fg-header': {
            background: viraColorPalette['vira-accent-500'],
        },
        'vira-accent-behind-fg-placeholder': {
            background: viraColorPalette['vira-accent-650'],
        },
        'vira-accent-behind-fg-decoration': {
            background: viraColorPalette['vira-accent-750'],
        },
        'vira-accent-behind-fg-invisible': {
            background: viraColorPalette['vira-accent-1000'],
        },
        'vira-accent-on-self-small-body': {
            foreground: viraColorPalette['vira-accent-850'],
            background: viraColorPalette['vira-accent-100'],
        },
        'vira-accent-on-self-body': {
            foreground: viraColorPalette['vira-accent-850'],
            background: viraColorPalette['vira-accent-300'],
        },
        'vira-accent-on-self-non-body': {
            foreground: viraColorPalette['vira-accent-850'],
            background: viraColorPalette['vira-accent-350'],
        },
        'vira-accent-on-self-header': {
            foreground: viraColorPalette['vira-accent-850'],
            background: viraColorPalette['vira-accent-450'],
        },
        'vira-accent-on-self-placeholder': {
            foreground: viraColorPalette['vira-accent-850'],
            background: viraColorPalette['vira-accent-550'],
        },
        'vira-accent-on-self-decoration': {
            foreground: viraColorPalette['vira-accent-850'],
            background: viraColorPalette['vira-accent-650'],
        },
        'vira-accent-on-self-invisible': {
            foreground: viraColorPalette['vira-accent-850'],
            background: viraColorPalette['vira-accent-1000'],
        },
        'vira-purple-foreground-small-body': {
            foreground: viraColorPalette['vira-purple-1000'],
        },
        'vira-purple-foreground-body': {
            foreground: viraColorPalette['vira-purple-750'],
        },
        'vira-purple-foreground-non-body': {
            foreground: viraColorPalette['vira-purple-650'],
        },
        'vira-purple-foreground-header': {
            foreground: viraColorPalette['vira-purple-500'],
        },
        'vira-purple-foreground-placeholder': {
            foreground: viraColorPalette['vira-purple-400'],
        },
        'vira-purple-foreground-decoration': {
            foreground: viraColorPalette['vira-purple-350'],
        },
        'vira-purple-foreground-invisible': {
            foreground: viraColorPalette['vira-purple-250'],
        },
        'vira-purple-behind-bg-small-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-purple-1000'],
        },
        'vira-purple-behind-bg-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-purple-700'],
        },
        'vira-purple-behind-bg-non-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-purple-600'],
        },
        'vira-purple-behind-bg-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-purple-450'],
        },
        'vira-purple-behind-bg-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-purple-400'],
        },
        'vira-purple-behind-bg-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-purple-350'],
        },
        'vira-purple-behind-bg-invisible': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-purple-200'],
        },
        'vira-purple-behind-fg-small-body': {
            background: viraColorPalette['vira-purple-250'],
        },
        'vira-purple-behind-fg-body': {
            background: viraColorPalette['vira-purple-350'],
        },
        'vira-purple-behind-fg-non-body': {
            background: viraColorPalette['vira-purple-400'],
        },
        'vira-purple-behind-fg-header': {
            background: viraColorPalette['vira-purple-500'],
        },
        'vira-purple-behind-fg-placeholder': {
            background: viraColorPalette['vira-purple-600'],
        },
        'vira-purple-behind-fg-decoration': {
            background: viraColorPalette['vira-purple-750'],
        },
        'vira-purple-behind-fg-invisible': {
            background: viraColorPalette['vira-purple-1000'],
        },
        'vira-purple-on-self-small-body': {
            foreground: viraColorPalette['vira-purple-850'],
            background: viraColorPalette['vira-purple-100'],
        },
        'vira-purple-on-self-body': {
            foreground: viraColorPalette['vira-purple-850'],
            background: viraColorPalette['vira-purple-300'],
        },
        'vira-purple-on-self-non-body': {
            foreground: viraColorPalette['vira-purple-850'],
            background: viraColorPalette['vira-purple-350'],
        },
        'vira-purple-on-self-header': {
            foreground: viraColorPalette['vira-purple-850'],
            background: viraColorPalette['vira-purple-450'],
        },
        'vira-purple-on-self-placeholder': {
            foreground: viraColorPalette['vira-purple-850'],
            background: viraColorPalette['vira-purple-500'],
        },
        'vira-purple-on-self-decoration': {
            foreground: viraColorPalette['vira-purple-850'],
            background: viraColorPalette['vira-purple-650'],
        },
        'vira-purple-on-self-invisible': {
            foreground: viraColorPalette['vira-purple-850'],
            background: viraColorPalette['vira-purple-1000'],
        },
        'vira-pink-foreground-small-body': {
            foreground: viraColorPalette['vira-pink-1000'],
        },
        'vira-pink-foreground-body': {
            foreground: viraColorPalette['vira-pink-750'],
        },
        'vira-pink-foreground-non-body': {
            foreground: viraColorPalette['vira-pink-650'],
        },
        'vira-pink-foreground-header': {
            foreground: viraColorPalette['vira-pink-500'],
        },
        'vira-pink-foreground-placeholder': {
            foreground: viraColorPalette['vira-pink-400'],
        },
        'vira-pink-foreground-decoration': {
            foreground: viraColorPalette['vira-pink-350'],
        },
        'vira-pink-foreground-invisible': {
            foreground: viraColorPalette['vira-pink-250'],
        },
        'vira-pink-behind-bg-small-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-pink-1000'],
        },
        'vira-pink-behind-bg-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-pink-700'],
        },
        'vira-pink-behind-bg-non-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-pink-550'],
        },
        'vira-pink-behind-bg-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-pink-450'],
        },
        'vira-pink-behind-bg-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-pink-400'],
        },
        'vira-pink-behind-bg-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-pink-350'],
        },
        'vira-pink-behind-bg-invisible': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-pink-200'],
        },
        'vira-pink-behind-fg-small-body': {
            background: viraColorPalette['vira-pink-200'],
        },
        'vira-pink-behind-fg-body': {
            background: viraColorPalette['vira-pink-350'],
        },
        'vira-pink-behind-fg-non-body': {
            background: viraColorPalette['vira-pink-400'],
        },
        'vira-pink-behind-fg-header': {
            background: viraColorPalette['vira-pink-500'],
        },
        'vira-pink-behind-fg-placeholder': {
            background: viraColorPalette['vira-pink-600'],
        },
        'vira-pink-behind-fg-decoration': {
            background: viraColorPalette['vira-pink-750'],
        },
        'vira-pink-behind-fg-invisible': {
            background: viraColorPalette['vira-pink-1000'],
        },
        'vira-pink-on-self-small-body': {
            foreground: viraColorPalette['vira-pink-850'],
            background: viraColorPalette['vira-pink-100'],
        },
        'vira-pink-on-self-body': {
            foreground: viraColorPalette['vira-pink-850'],
            background: viraColorPalette['vira-pink-250'],
        },
        'vira-pink-on-self-non-body': {
            foreground: viraColorPalette['vira-pink-850'],
            background: viraColorPalette['vira-pink-350'],
        },
        'vira-pink-on-self-header': {
            foreground: viraColorPalette['vira-pink-850'],
            background: viraColorPalette['vira-pink-450'],
        },
        'vira-pink-on-self-placeholder': {
            foreground: viraColorPalette['vira-pink-850'],
            background: viraColorPalette['vira-pink-500'],
        },
        'vira-pink-on-self-decoration': {
            foreground: viraColorPalette['vira-pink-850'],
            background: viraColorPalette['vira-pink-650'],
        },
        'vira-pink-on-self-invisible': {
            foreground: viraColorPalette['vira-pink-850'],
            background: viraColorPalette['vira-pink-1000'],
        },
        'vira-grey-foreground-small-body': {
            foreground: viraColorPalette['vira-grey-1000'],
        },
        'vira-grey-foreground-body': {
            foreground: viraColorPalette['vira-grey-750'],
        },
        'vira-grey-foreground-non-body': {
            foreground: viraColorPalette['vira-grey-650'],
        },
        'vira-grey-foreground-header': {
            foreground: viraColorPalette['vira-grey-500'],
        },
        'vira-grey-foreground-placeholder': {
            foreground: viraColorPalette['vira-grey-450'],
        },
        'vira-grey-foreground-decoration': {
            foreground: viraColorPalette['vira-grey-350'],
        },
        'vira-grey-foreground-invisible': {
            foreground: viraColorPalette['vira-grey-250'],
        },
        'vira-grey-behind-bg-small-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-grey-1000'],
        },
        'vira-grey-behind-bg-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-grey-750'],
        },
        'vira-grey-behind-bg-non-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-grey-600'],
        },
        'vira-grey-behind-bg-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-grey-500'],
        },
        'vira-grey-behind-bg-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-grey-400'],
        },
        'vira-grey-behind-bg-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-grey-350'],
        },
        'vira-grey-behind-bg-invisible': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-grey-250'],
        },
        'vira-grey-behind-fg-small-body': {
            background: viraColorPalette['vira-grey-250'],
        },
        'vira-grey-behind-fg-body': {
            background: viraColorPalette['vira-grey-350'],
        },
        'vira-grey-behind-fg-non-body': {
            background: viraColorPalette['vira-grey-400'],
        },
        'vira-grey-behind-fg-header': {
            background: viraColorPalette['vira-grey-500'],
        },
        'vira-grey-behind-fg-placeholder': {
            background: viraColorPalette['vira-grey-650'],
        },
        'vira-grey-behind-fg-decoration': {
            background: viraColorPalette['vira-grey-750'],
        },
        'vira-grey-behind-fg-invisible': {
            background: viraColorPalette['vira-grey-1000'],
        },
        'vira-grey-on-self-small-body': {
            foreground: viraColorPalette['vira-grey-850'],
            background: viraColorPalette['vira-grey-100'],
        },
        'vira-grey-on-self-body': {
            foreground: viraColorPalette['vira-grey-850'],
            background: viraColorPalette['vira-grey-300'],
        },
        'vira-grey-on-self-non-body': {
            foreground: viraColorPalette['vira-grey-850'],
            background: viraColorPalette['vira-grey-350'],
        },
        'vira-grey-on-self-header': {
            foreground: viraColorPalette['vira-grey-850'],
            background: viraColorPalette['vira-grey-450'],
        },
        'vira-grey-on-self-placeholder': {
            foreground: viraColorPalette['vira-grey-850'],
            background: viraColorPalette['vira-grey-550'],
        },
        'vira-grey-on-self-decoration': {
            foreground: viraColorPalette['vira-grey-850'],
            background: viraColorPalette['vira-grey-650'],
        },
        'vira-grey-on-self-invisible': {
            foreground: viraColorPalette['vira-grey-850'],
            background: viraColorPalette['vira-grey-1000'],
        },
    },
);

/**
 * Dark mode override for {@link viraTheme}.
 *
 * @category Color
 */
export const viraThemeDarkOverride = defineColorThemeOverride(viraTheme, 'dark', {
    defaultOverride: {
        foreground: 'white',
        background: 'black',
    },
    colorOverrides: {
        'vira-red-foreground-small-body': {
            foreground: viraColorPalette['vira-red-250'],
        },
        'vira-red-foreground-body': {
            foreground: viraColorPalette['vira-red-350'],
        },
        'vira-red-foreground-non-body': {
            foreground: viraColorPalette['vira-red-400'],
        },
        'vira-red-foreground-header': {
            foreground: viraColorPalette['vira-red-450'],
        },
        'vira-red-foreground-placeholder': {
            foreground: viraColorPalette['vira-red-600'],
        },
        'vira-red-foreground-decoration': {
            foreground: viraColorPalette['vira-red-750'],
        },
        'vira-red-foreground-invisible': {
            foreground: viraColorPalette['vira-red-1000'],
        },
        'vira-red-behind-bg-small-body': {
            background: viraColorPalette['vira-red-250'],
        },
        'vira-red-behind-bg-body': {
            background: viraColorPalette['vira-red-350'],
        },
        'vira-red-behind-bg-non-body': {
            background: viraColorPalette['vira-red-400'],
        },
        'vira-red-behind-bg-header': {
            background: viraColorPalette['vira-red-500'],
        },
        'vira-red-behind-bg-placeholder': {
            background: viraColorPalette['vira-red-650'],
        },
        'vira-red-behind-bg-decoration': {
            background: viraColorPalette['vira-red-750'],
        },
        'vira-red-behind-bg-invisible': {
            background: viraColorPalette['vira-red-1000'],
        },
        'vira-red-behind-fg-small-body': {
            background: viraColorPalette['vira-red-1000'],
        },
        'vira-red-behind-fg-body': {
            background: viraColorPalette['vira-red-700'],
        },
        'vira-red-behind-fg-non-body': {
            background: viraColorPalette['vira-red-600'],
        },
        'vira-red-behind-fg-header': {
            background: viraColorPalette['vira-red-450'],
        },
        'vira-red-behind-fg-placeholder': {
            background: viraColorPalette['vira-red-400'],
        },
        'vira-red-behind-fg-decoration': {
            background: viraColorPalette['vira-red-350'],
        },
        'vira-red-behind-fg-invisible': {
            background: viraColorPalette['vira-red-200'],
        },
        'vira-red-on-self-small-body': {
            foreground: viraColorPalette['vira-red-200'],
            background: viraColorPalette['vira-red-1000'],
        },
        'vira-red-on-self-body': {
            foreground: viraColorPalette['vira-red-200'],
            background: viraColorPalette['vira-red-950'],
        },
        'vira-red-on-self-non-body': {
            foreground: viraColorPalette['vira-red-200'],
            background: viraColorPalette['vira-red-700'],
        },
        'vira-red-on-self-header': {
            foreground: viraColorPalette['vira-red-200'],
            background: viraColorPalette['vira-red-550'],
        },
        'vira-red-on-self-placeholder': {
            foreground: viraColorPalette['vira-red-200'],
            background: viraColorPalette['vira-red-450'],
        },
        'vira-red-on-self-decoration': {
            foreground: viraColorPalette['vira-red-200'],
            background: viraColorPalette['vira-red-400'],
        },
        'vira-red-on-self-invisible': {
            foreground: viraColorPalette['vira-red-200'],
            background: viraColorPalette['vira-red-350'],
        },
        'vira-yellow-foreground-small-body': {
            foreground: viraColorPalette['vira-yellow-250'],
        },
        'vira-yellow-foreground-body': {
            foreground: viraColorPalette['vira-yellow-350'],
        },
        'vira-yellow-foreground-non-body': {
            foreground: viraColorPalette['vira-yellow-400'],
        },
        'vira-yellow-foreground-placeholder': {
            foreground: viraColorPalette['vira-yellow-600'],
        },
        'vira-yellow-foreground-decoration': {
            foreground: viraColorPalette['vira-yellow-750'],
        },
        'vira-yellow-foreground-invisible': {
            foreground: viraColorPalette['vira-yellow-1000'],
        },
        'vira-yellow-behind-bg-small-body': {
            background: viraColorPalette['vira-yellow-250'],
        },
        'vira-yellow-behind-bg-body': {
            background: viraColorPalette['vira-yellow-350'],
        },
        'vira-yellow-behind-bg-non-body': {
            background: viraColorPalette['vira-yellow-400'],
        },
        'vira-yellow-behind-bg-header': {
            background: viraColorPalette['vira-yellow-500'],
        },
        'vira-yellow-behind-bg-placeholder': {
            background: viraColorPalette['vira-yellow-650'],
        },
        'vira-yellow-behind-bg-decoration': {
            background: viraColorPalette['vira-yellow-750'],
        },
        'vira-yellow-behind-bg-invisible': {
            background: viraColorPalette['vira-yellow-1000'],
        },
        'vira-yellow-behind-fg-small-body': {
            background: viraColorPalette['vira-yellow-1000'],
        },
        'vira-yellow-behind-fg-body': {
            background: viraColorPalette['vira-yellow-700'],
        },
        'vira-yellow-behind-fg-non-body': {
            background: viraColorPalette['vira-yellow-600'],
        },
        'vira-yellow-behind-fg-header': {
            background: viraColorPalette['vira-yellow-450'],
        },
        'vira-yellow-behind-fg-placeholder': {
            background: viraColorPalette['vira-yellow-400'],
        },
        'vira-yellow-behind-fg-decoration': {
            background: viraColorPalette['vira-yellow-350'],
        },
        'vira-yellow-behind-fg-invisible': {
            background: viraColorPalette['vira-yellow-250'],
        },
        'vira-yellow-on-self-small-body': {
            foreground: viraColorPalette['vira-yellow-200'],
            background: viraColorPalette['vira-yellow-1000'],
        },
        'vira-yellow-on-self-body': {
            foreground: viraColorPalette['vira-yellow-200'],
            background: viraColorPalette['vira-yellow-900'],
        },
        'vira-yellow-on-self-non-body': {
            foreground: viraColorPalette['vira-yellow-200'],
            background: viraColorPalette['vira-yellow-700'],
        },
        'vira-yellow-on-self-header': {
            foreground: viraColorPalette['vira-yellow-200'],
            background: viraColorPalette['vira-yellow-550'],
        },
        'vira-yellow-on-self-placeholder': {
            foreground: viraColorPalette['vira-yellow-200'],
            background: viraColorPalette['vira-yellow-450'],
        },
        'vira-yellow-on-self-decoration': {
            foreground: viraColorPalette['vira-yellow-200'],
            background: viraColorPalette['vira-yellow-400'],
        },
        'vira-yellow-on-self-invisible': {
            foreground: viraColorPalette['vira-yellow-200'],
            background: viraColorPalette['vira-yellow-350'],
        },
        'vira-green-foreground-small-body': {
            foreground: viraColorPalette['vira-green-250'],
        },
        'vira-green-foreground-body': {
            foreground: viraColorPalette['vira-green-350'],
        },
        'vira-green-foreground-non-body': {
            foreground: viraColorPalette['vira-green-450'],
        },
        'vira-green-foreground-header': {
            foreground: viraColorPalette['vira-green-500'],
        },
        'vira-green-foreground-placeholder': {
            foreground: viraColorPalette['vira-green-650'],
        },
        'vira-green-foreground-decoration': {
            foreground: viraColorPalette['vira-green-750'],
        },
        'vira-green-foreground-invisible': {
            foreground: viraColorPalette['vira-green-1000'],
        },
        'vira-green-behind-bg-small-body': {
            background: viraColorPalette['vira-green-250'],
        },
        'vira-green-behind-bg-body': {
            background: viraColorPalette['vira-green-350'],
        },
        'vira-green-behind-bg-non-body': {
            background: viraColorPalette['vira-green-450'],
        },
        'vira-green-behind-bg-header': {
            background: viraColorPalette['vira-green-550'],
        },
        'vira-green-behind-bg-placeholder': {
            background: viraColorPalette['vira-green-650'],
        },
        'vira-green-behind-bg-decoration': {
            background: viraColorPalette['vira-green-800'],
        },
        'vira-green-behind-bg-invisible': {
            background: viraColorPalette['vira-green-1000'],
        },
        'vira-green-behind-fg-small-body': {
            background: viraColorPalette['vira-green-1000'],
        },
        'vira-green-behind-fg-body': {
            background: viraColorPalette['vira-green-750'],
        },
        'vira-green-behind-fg-non-body': {
            background: viraColorPalette['vira-green-650'],
        },
        'vira-green-behind-fg-header': {
            background: viraColorPalette['vira-green-500'],
        },
        'vira-green-behind-fg-placeholder': {
            background: viraColorPalette['vira-green-400'],
        },
        'vira-green-behind-fg-decoration': {
            background: viraColorPalette['vira-green-350'],
        },
        'vira-green-behind-fg-invisible': {
            background: viraColorPalette['vira-green-250'],
        },
        'vira-green-on-self-small-body': {
            foreground: viraColorPalette['vira-green-200'],
            background: viraColorPalette['vira-green-1000'],
        },
        'vira-green-on-self-body': {
            foreground: viraColorPalette['vira-green-200'],
            background: viraColorPalette['vira-green-900'],
        },
        'vira-green-on-self-non-body': {
            foreground: viraColorPalette['vira-green-200'],
            background: viraColorPalette['vira-green-700'],
        },
        'vira-green-on-self-header': {
            foreground: viraColorPalette['vira-green-200'],
            background: viraColorPalette['vira-green-600'],
        },
        'vira-green-on-self-placeholder': {
            foreground: viraColorPalette['vira-green-200'],
            background: viraColorPalette['vira-green-450'],
        },
        'vira-green-on-self-decoration': {
            foreground: viraColorPalette['vira-green-200'],
            background: viraColorPalette['vira-green-400'],
        },
        'vira-green-on-self-invisible': {
            foreground: viraColorPalette['vira-green-200'],
            background: viraColorPalette['vira-green-350'],
        },
        'vira-teal-foreground-small-body': {
            foreground: viraColorPalette['vira-teal-250'],
        },
        'vira-teal-foreground-body': {
            foreground: viraColorPalette['vira-teal-350'],
        },
        'vira-teal-foreground-non-body': {
            foreground: viraColorPalette['vira-teal-450'],
        },
        'vira-teal-foreground-header': {
            foreground: viraColorPalette['vira-teal-500'],
        },
        'vira-teal-foreground-placeholder': {
            foreground: viraColorPalette['vira-teal-650'],
        },
        'vira-teal-foreground-decoration': {
            foreground: viraColorPalette['vira-teal-750'],
        },
        'vira-teal-foreground-invisible': {
            foreground: viraColorPalette['vira-teal-1000'],
        },
        'vira-teal-behind-bg-small-body': {
            background: viraColorPalette['vira-teal-250'],
        },
        'vira-teal-behind-bg-body': {
            background: viraColorPalette['vira-teal-350'],
        },
        'vira-teal-behind-bg-non-body': {
            background: viraColorPalette['vira-teal-450'],
        },
        'vira-teal-behind-bg-placeholder': {
            background: viraColorPalette['vira-teal-650'],
        },
        'vira-teal-behind-bg-decoration': {
            background: viraColorPalette['vira-teal-750'],
        },
        'vira-teal-behind-bg-invisible': {
            background: viraColorPalette['vira-teal-1000'],
        },
        'vira-teal-behind-fg-small-body': {
            background: viraColorPalette['vira-teal-1000'],
        },
        'vira-teal-behind-fg-body': {
            background: viraColorPalette['vira-teal-750'],
        },
        'vira-teal-behind-fg-non-body': {
            background: viraColorPalette['vira-teal-600'],
        },
        'vira-teal-behind-fg-placeholder': {
            background: viraColorPalette['vira-teal-400'],
        },
        'vira-teal-behind-fg-decoration': {
            background: viraColorPalette['vira-teal-350'],
        },
        'vira-teal-behind-fg-invisible': {
            background: viraColorPalette['vira-teal-250'],
        },
        'vira-teal-on-self-small-body': {
            foreground: viraColorPalette['vira-teal-200'],
            background: viraColorPalette['vira-teal-1000'],
        },
        'vira-teal-on-self-body': {
            foreground: viraColorPalette['vira-teal-200'],
            background: viraColorPalette['vira-teal-900'],
        },
        'vira-teal-on-self-non-body': {
            foreground: viraColorPalette['vira-teal-200'],
            background: viraColorPalette['vira-teal-700'],
        },
        'vira-teal-on-self-header': {
            foreground: viraColorPalette['vira-teal-200'],
            background: viraColorPalette['vira-teal-600'],
        },
        'vira-teal-on-self-placeholder': {
            foreground: viraColorPalette['vira-teal-200'],
            background: viraColorPalette['vira-teal-450'],
        },
        'vira-teal-on-self-decoration': {
            foreground: viraColorPalette['vira-teal-200'],
            background: viraColorPalette['vira-teal-400'],
        },
        'vira-teal-on-self-invisible': {
            foreground: viraColorPalette['vira-teal-200'],
            background: viraColorPalette['vira-teal-350'],
        },
        'vira-blue-foreground-small-body': {
            foreground: viraColorPalette['vira-blue-250'],
        },
        'vira-blue-foreground-body': {
            foreground: viraColorPalette['vira-blue-350'],
        },
        'vira-blue-foreground-non-body': {
            foreground: viraColorPalette['vira-blue-400'],
        },
        'vira-blue-foreground-placeholder': {
            foreground: viraColorPalette['vira-blue-600'],
        },
        'vira-blue-foreground-decoration': {
            foreground: viraColorPalette['vira-blue-750'],
        },
        'vira-blue-foreground-invisible': {
            foreground: viraColorPalette['vira-blue-1000'],
        },
        'vira-blue-behind-bg-small-body': {
            background: viraColorPalette['vira-blue-250'],
        },
        'vira-blue-behind-bg-body': {
            background: viraColorPalette['vira-blue-350'],
        },
        'vira-blue-behind-bg-non-body': {
            background: viraColorPalette['vira-blue-400'],
        },
        'vira-blue-behind-bg-header': {
            background: viraColorPalette['vira-blue-500'],
        },
        'vira-blue-behind-bg-placeholder': {
            background: viraColorPalette['vira-blue-650'],
        },
        'vira-blue-behind-bg-decoration': {
            background: viraColorPalette['vira-blue-750'],
        },
        'vira-blue-behind-bg-invisible': {
            background: viraColorPalette['vira-blue-1000'],
        },
        'vira-blue-behind-fg-small-body': {
            background: viraColorPalette['vira-blue-1000'],
        },
        'vira-blue-behind-fg-body': {
            background: viraColorPalette['vira-blue-750'],
        },
        'vira-blue-behind-fg-non-body': {
            background: viraColorPalette['vira-blue-600'],
        },
        'vira-blue-behind-fg-header': {
            background: viraColorPalette['vira-blue-450'],
        },
        'vira-blue-behind-fg-placeholder': {
            background: viraColorPalette['vira-blue-400'],
        },
        'vira-blue-behind-fg-decoration': {
            background: viraColorPalette['vira-blue-350'],
        },
        'vira-blue-behind-fg-invisible': {
            background: viraColorPalette['vira-blue-250'],
        },
        'vira-blue-on-self-small-body': {
            foreground: viraColorPalette['vira-blue-200'],
            background: viraColorPalette['vira-blue-1000'],
        },
        'vira-blue-on-self-body': {
            foreground: viraColorPalette['vira-blue-200'],
            background: viraColorPalette['vira-blue-900'],
        },
        'vira-blue-on-self-non-body': {
            foreground: viraColorPalette['vira-blue-200'],
            background: viraColorPalette['vira-blue-700'],
        },
        'vira-blue-on-self-header': {
            foreground: viraColorPalette['vira-blue-200'],
            background: viraColorPalette['vira-blue-550'],
        },
        'vira-blue-on-self-placeholder': {
            foreground: viraColorPalette['vira-blue-200'],
            background: viraColorPalette['vira-blue-450'],
        },
        'vira-blue-on-self-decoration': {
            foreground: viraColorPalette['vira-blue-200'],
            background: viraColorPalette['vira-blue-400'],
        },
        'vira-blue-on-self-invisible': {
            foreground: viraColorPalette['vira-blue-200'],
            background: viraColorPalette['vira-blue-350'],
        },
        'vira-accent-foreground-small-body': {
            foreground: viraColorPalette['vira-accent-250'],
        },
        'vira-accent-foreground-body': {
            foreground: viraColorPalette['vira-accent-350'],
        },
        'vira-accent-foreground-non-body': {
            foreground: viraColorPalette['vira-accent-400'],
        },
        'vira-accent-foreground-placeholder': {
            foreground: viraColorPalette['vira-accent-600'],
        },
        'vira-accent-foreground-decoration': {
            foreground: viraColorPalette['vira-accent-750'],
        },
        'vira-accent-foreground-invisible': {
            foreground: viraColorPalette['vira-accent-1000'],
        },
        'vira-accent-behind-bg-small-body': {
            background: viraColorPalette['vira-accent-250'],
        },
        'vira-accent-behind-bg-body': {
            background: viraColorPalette['vira-accent-350'],
        },
        'vira-accent-behind-bg-non-body': {
            background: viraColorPalette['vira-accent-400'],
        },
        'vira-accent-behind-bg-header': {
            background: viraColorPalette['vira-accent-500'],
        },
        'vira-accent-behind-bg-placeholder': {
            background: viraColorPalette['vira-accent-650'],
        },
        'vira-accent-behind-bg-decoration': {
            background: viraColorPalette['vira-accent-750'],
        },
        'vira-accent-behind-bg-invisible': {
            background: viraColorPalette['vira-accent-1000'],
        },
        'vira-accent-behind-fg-small-body': {
            background: viraColorPalette['vira-accent-1000'],
        },
        'vira-accent-behind-fg-body': {
            background: viraColorPalette['vira-accent-750'],
        },
        'vira-accent-behind-fg-non-body': {
            background: viraColorPalette['vira-accent-600'],
        },
        'vira-accent-behind-fg-header': {
            background: viraColorPalette['vira-accent-450'],
        },
        'vira-accent-behind-fg-placeholder': {
            background: viraColorPalette['vira-accent-400'],
        },
        'vira-accent-behind-fg-decoration': {
            background: viraColorPalette['vira-accent-350'],
        },
        'vira-accent-behind-fg-invisible': {
            background: viraColorPalette['vira-accent-250'],
        },
        'vira-accent-on-self-small-body': {
            foreground: viraColorPalette['vira-accent-200'],
            background: viraColorPalette['vira-accent-1000'],
        },
        'vira-accent-on-self-body': {
            foreground: viraColorPalette['vira-accent-200'],
            background: viraColorPalette['vira-accent-900'],
        },
        'vira-accent-on-self-non-body': {
            foreground: viraColorPalette['vira-accent-200'],
            background: viraColorPalette['vira-accent-700'],
        },
        'vira-accent-on-self-header': {
            foreground: viraColorPalette['vira-accent-200'],
            background: viraColorPalette['vira-accent-550'],
        },
        'vira-accent-on-self-placeholder': {
            foreground: viraColorPalette['vira-accent-200'],
            background: viraColorPalette['vira-accent-450'],
        },
        'vira-accent-on-self-decoration': {
            foreground: viraColorPalette['vira-accent-200'],
            background: viraColorPalette['vira-accent-400'],
        },
        'vira-accent-on-self-invisible': {
            foreground: viraColorPalette['vira-accent-200'],
            background: viraColorPalette['vira-accent-350'],
        },
        'vira-purple-foreground-small-body': {
            foreground: viraColorPalette['vira-purple-250'],
        },
        'vira-purple-foreground-body': {
            foreground: viraColorPalette['vira-purple-350'],
        },
        'vira-purple-foreground-non-body': {
            foreground: viraColorPalette['vira-purple-400'],
        },
        'vira-purple-foreground-header': {
            foreground: viraColorPalette['vira-purple-450'],
        },
        'vira-purple-foreground-placeholder': {
            foreground: viraColorPalette['vira-purple-600'],
        },
        'vira-purple-foreground-decoration': {
            foreground: viraColorPalette['vira-purple-750'],
        },
        'vira-purple-foreground-invisible': {
            foreground: viraColorPalette['vira-purple-1000'],
        },
        'vira-purple-behind-bg-small-body': {
            background: viraColorPalette['vira-purple-250'],
        },
        'vira-purple-behind-bg-body': {
            background: viraColorPalette['vira-purple-350'],
        },
        'vira-purple-behind-bg-non-body': {
            background: viraColorPalette['vira-purple-400'],
        },
        'vira-purple-behind-bg-header': {
            background: viraColorPalette['vira-purple-500'],
        },
        'vira-purple-behind-bg-placeholder': {
            background: viraColorPalette['vira-purple-600'],
        },
        'vira-purple-behind-bg-decoration': {
            background: viraColorPalette['vira-purple-750'],
        },
        'vira-purple-behind-bg-invisible': {
            background: viraColorPalette['vira-purple-1000'],
        },
        'vira-purple-behind-fg-small-body': {
            background: viraColorPalette['vira-purple-1000'],
        },
        'vira-purple-behind-fg-body': {
            background: viraColorPalette['vira-purple-700'],
        },
        'vira-purple-behind-fg-non-body': {
            background: viraColorPalette['vira-purple-600'],
        },
        'vira-purple-behind-fg-header': {
            background: viraColorPalette['vira-purple-450'],
        },
        'vira-purple-behind-fg-placeholder': {
            background: viraColorPalette['vira-purple-400'],
        },
        'vira-purple-behind-fg-decoration': {
            background: viraColorPalette['vira-purple-350'],
        },
        'vira-purple-behind-fg-invisible': {
            background: viraColorPalette['vira-purple-200'],
        },
        'vira-purple-on-self-small-body': {
            foreground: viraColorPalette['vira-purple-200'],
            background: viraColorPalette['vira-purple-1000'],
        },
        'vira-purple-on-self-body': {
            foreground: viraColorPalette['vira-purple-200'],
            background: viraColorPalette['vira-purple-900'],
        },
        'vira-purple-on-self-non-body': {
            foreground: viraColorPalette['vira-purple-200'],
            background: viraColorPalette['vira-purple-700'],
        },
        'vira-purple-on-self-header': {
            foreground: viraColorPalette['vira-purple-200'],
            background: viraColorPalette['vira-purple-550'],
        },
        'vira-purple-on-self-placeholder': {
            foreground: viraColorPalette['vira-purple-200'],
            background: viraColorPalette['vira-purple-450'],
        },
        'vira-purple-on-self-decoration': {
            foreground: viraColorPalette['vira-purple-200'],
            background: viraColorPalette['vira-purple-400'],
        },
        'vira-purple-on-self-invisible': {
            foreground: viraColorPalette['vira-purple-200'],
            background: viraColorPalette['vira-purple-350'],
        },
        'vira-pink-foreground-small-body': {
            foreground: viraColorPalette['vira-pink-200'],
        },
        'vira-pink-foreground-body': {
            foreground: viraColorPalette['vira-pink-350'],
        },
        'vira-pink-foreground-non-body': {
            foreground: viraColorPalette['vira-pink-400'],
        },
        'vira-pink-foreground-header': {
            foreground: viraColorPalette['vira-pink-450'],
        },
        'vira-pink-foreground-placeholder': {
            foreground: viraColorPalette['vira-pink-600'],
        },
        'vira-pink-foreground-decoration': {
            foreground: viraColorPalette['vira-pink-750'],
        },
        'vira-pink-foreground-invisible': {
            foreground: viraColorPalette['vira-pink-1000'],
        },
        'vira-pink-behind-bg-small-body': {
            background: viraColorPalette['vira-pink-200'],
        },
        'vira-pink-behind-bg-body': {
            background: viraColorPalette['vira-pink-350'],
        },
        'vira-pink-behind-bg-non-body': {
            background: viraColorPalette['vira-pink-400'],
        },
        'vira-pink-behind-bg-header': {
            background: viraColorPalette['vira-pink-500'],
        },
        'vira-pink-behind-bg-placeholder': {
            background: viraColorPalette['vira-pink-600'],
        },
        'vira-pink-behind-bg-decoration': {
            background: viraColorPalette['vira-pink-750'],
        },
        'vira-pink-behind-bg-invisible': {
            background: viraColorPalette['vira-pink-1000'],
        },
        'vira-pink-behind-fg-small-body': {
            background: viraColorPalette['vira-pink-1000'],
        },
        'vira-pink-behind-fg-body': {
            background: viraColorPalette['vira-pink-700'],
        },
        'vira-pink-behind-fg-non-body': {
            background: viraColorPalette['vira-pink-550'],
        },
        'vira-pink-behind-fg-header': {
            background: viraColorPalette['vira-pink-450'],
        },
        'vira-pink-behind-fg-placeholder': {
            background: viraColorPalette['vira-pink-400'],
        },
        'vira-pink-behind-fg-decoration': {
            background: viraColorPalette['vira-pink-350'],
        },
        'vira-pink-behind-fg-invisible': {
            background: viraColorPalette['vira-pink-200'],
        },
        'vira-pink-on-self-small-body': {
            foreground: viraColorPalette['vira-pink-200'],
            background: viraColorPalette['vira-pink-1000'],
        },
        'vira-pink-on-self-body': {
            foreground: viraColorPalette['vira-pink-200'],
            background: viraColorPalette['vira-pink-950'],
        },
        'vira-pink-on-self-non-body': {
            foreground: viraColorPalette['vira-pink-200'],
            background: viraColorPalette['vira-pink-700'],
        },
        'vira-pink-on-self-header': {
            foreground: viraColorPalette['vira-pink-200'],
            background: viraColorPalette['vira-pink-550'],
        },
        'vira-pink-on-self-placeholder': {
            foreground: viraColorPalette['vira-pink-200'],
            background: viraColorPalette['vira-pink-450'],
        },
        'vira-pink-on-self-decoration': {
            foreground: viraColorPalette['vira-pink-200'],
            background: viraColorPalette['vira-pink-400'],
        },
        'vira-pink-on-self-invisible': {
            foreground: viraColorPalette['vira-pink-200'],
            background: viraColorPalette['vira-pink-300'],
        },
        'vira-grey-foreground-small-body': {
            foreground: viraColorPalette['vira-grey-250'],
        },
        'vira-grey-foreground-body': {
            foreground: viraColorPalette['vira-grey-350'],
        },
        'vira-grey-foreground-non-body': {
            foreground: viraColorPalette['vira-grey-400'],
        },
        'vira-grey-foreground-placeholder': {
            foreground: viraColorPalette['vira-grey-600'],
        },
        'vira-grey-foreground-decoration': {
            foreground: viraColorPalette['vira-grey-750'],
        },
        'vira-grey-foreground-invisible': {
            foreground: viraColorPalette['vira-grey-1000'],
        },
        'vira-grey-behind-bg-small-body': {
            background: viraColorPalette['vira-grey-250'],
        },
        'vira-grey-behind-bg-body': {
            background: viraColorPalette['vira-grey-350'],
        },
        'vira-grey-behind-bg-non-body': {
            background: viraColorPalette['vira-grey-400'],
        },
        'vira-grey-behind-bg-placeholder': {
            background: viraColorPalette['vira-grey-650'],
        },
        'vira-grey-behind-bg-decoration': {
            background: viraColorPalette['vira-grey-750'],
        },
        'vira-grey-behind-bg-invisible': {
            background: viraColorPalette['vira-grey-1000'],
        },
        'vira-grey-behind-fg-small-body': {
            background: viraColorPalette['vira-grey-1000'],
        },
        'vira-grey-behind-fg-body': {
            background: viraColorPalette['vira-grey-750'],
        },
        'vira-grey-behind-fg-non-body': {
            background: viraColorPalette['vira-grey-600'],
        },
        'vira-grey-behind-fg-placeholder': {
            background: viraColorPalette['vira-grey-400'],
        },
        'vira-grey-behind-fg-decoration': {
            background: viraColorPalette['vira-grey-350'],
        },
        'vira-grey-behind-fg-invisible': {
            background: viraColorPalette['vira-grey-250'],
        },
        'vira-grey-on-self-small-body': {
            foreground: viraColorPalette['vira-grey-200'],
            background: viraColorPalette['vira-grey-1000'],
        },
        'vira-grey-on-self-body': {
            foreground: viraColorPalette['vira-grey-200'],
            background: viraColorPalette['vira-grey-900'],
        },
        'vira-grey-on-self-non-body': {
            foreground: viraColorPalette['vira-grey-200'],
            background: viraColorPalette['vira-grey-700'],
        },
        'vira-grey-on-self-header': {
            foreground: viraColorPalette['vira-grey-200'],
            background: viraColorPalette['vira-grey-600'],
        },
        'vira-grey-on-self-placeholder': {
            foreground: viraColorPalette['vira-grey-200'],
            background: viraColorPalette['vira-grey-450'],
        },
        'vira-grey-on-self-decoration': {
            foreground: viraColorPalette['vira-grey-200'],
            background: viraColorPalette['vira-grey-400'],
        },
        'vira-grey-on-self-invisible': {
            foreground: viraColorPalette['vira-grey-200'],
            background: viraColorPalette['vira-grey-350'],
        },
    },
});
