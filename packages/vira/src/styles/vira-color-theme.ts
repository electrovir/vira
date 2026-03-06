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
            foreground: viraColorPalette['vira-red-90'],
        },
        'vira-red-foreground-body': {
            foreground: viraColorPalette['vira-red-80'],
        },
        'vira-red-foreground-non-body': {
            foreground: viraColorPalette['vira-red-60'],
        },
        'vira-red-foreground-header': {
            foreground: viraColorPalette['vira-red-50'],
        },
        'vira-red-foreground-placeholder': {
            foreground: viraColorPalette['vira-red-30'],
        },
        'vira-red-foreground-decoration': {
            foreground: viraColorPalette['vira-red-20'],
        },
        'vira-red-foreground-invisible': {
            foreground: viraColorPalette['vira-red-10'],
        },
        'vira-red-behind-bg-small-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-red-90'],
        },
        'vira-red-behind-bg-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-red-80'],
        },
        'vira-red-behind-bg-non-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-red-60'],
        },
        'vira-red-behind-bg-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-red-40'],
        },
        'vira-red-behind-bg-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-red-30'],
        },
        'vira-red-behind-bg-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-red-20'],
        },
        'vira-red-behind-bg-invisible': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-red-5'],
        },
        'vira-red-behind-fg-small-body': {
            background: viraColorPalette['vira-red-5'],
        },
        'vira-red-behind-fg-body': {
            background: viraColorPalette['vira-red-20'],
        },
        'vira-red-behind-fg-non-body': {
            background: viraColorPalette['vira-red-30'],
        },
        'vira-red-behind-fg-header': {
            background: viraColorPalette['vira-red-50'],
        },
        'vira-red-behind-fg-placeholder': {
            background: viraColorPalette['vira-red-60'],
        },
        'vira-red-behind-fg-decoration': {
            background: viraColorPalette['vira-red-80'],
        },
        'vira-red-behind-fg-invisible': {
            background: viraColorPalette['vira-red-90'],
        },
        'vira-red-on-self-body': {
            foreground: viraColorPalette['vira-red-90'],
            background: viraColorPalette['vira-red-10'],
        },
        'vira-red-on-self-non-body': {
            foreground: viraColorPalette['vira-red-90'],
            background: viraColorPalette['vira-red-20'],
        },
        'vira-red-on-self-header': {
            foreground: viraColorPalette['vira-red-90'],
            background: viraColorPalette['vira-red-40'],
        },
        'vira-red-on-self-placeholder': {
            foreground: viraColorPalette['vira-red-90'],
            background: viraColorPalette['vira-red-50'],
        },
        'vira-red-on-self-decoration': {
            foreground: viraColorPalette['vira-red-90'],
            background: viraColorPalette['vira-red-70'],
        },
        'vira-red-on-self-invisible': {
            foreground: viraColorPalette['vira-red-90'],
            background: viraColorPalette['vira-red-80'],
        },
        'vira-orange-foreground-small-body': {
            foreground: viraColorPalette['vira-orange-90'],
        },
        'vira-orange-foreground-body': {
            foreground: viraColorPalette['vira-orange-80'],
        },
        'vira-orange-foreground-non-body': {
            foreground: viraColorPalette['vira-orange-60'],
        },
        'vira-orange-foreground-header': {
            foreground: viraColorPalette['vira-orange-50'],
        },
        'vira-orange-foreground-placeholder': {
            foreground: viraColorPalette['vira-orange-40'],
        },
        'vira-orange-foreground-decoration': {
            foreground: viraColorPalette['vira-orange-20'],
        },
        'vira-orange-foreground-invisible': {
            foreground: viraColorPalette['vira-orange-10'],
        },
        'vira-orange-behind-bg-small-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-orange-90'],
        },
        'vira-orange-behind-bg-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-orange-80'],
        },
        'vira-orange-behind-bg-non-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-orange-60'],
        },
        'vira-orange-behind-bg-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-orange-40'],
        },
        'vira-orange-behind-bg-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-orange-30'],
        },
        'vira-orange-behind-bg-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-orange-20'],
        },
        'vira-orange-behind-bg-invisible': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-orange-5'],
        },
        'vira-orange-behind-fg-small-body': {
            background: viraColorPalette['vira-orange-5'],
        },
        'vira-orange-behind-fg-body': {
            background: viraColorPalette['vira-orange-20'],
        },
        'vira-orange-behind-fg-non-body': {
            background: viraColorPalette['vira-orange-30'],
        },
        'vira-orange-behind-fg-header': {
            background: viraColorPalette['vira-orange-50'],
        },
        'vira-orange-behind-fg-placeholder': {
            background: viraColorPalette['vira-orange-60'],
        },
        'vira-orange-behind-fg-decoration': {
            background: viraColorPalette['vira-orange-80'],
        },
        'vira-orange-behind-fg-invisible': {
            background: viraColorPalette['vira-orange-90'],
        },
        'vira-orange-on-self-body': {
            foreground: viraColorPalette['vira-orange-90'],
            background: viraColorPalette['vira-orange-10'],
        },
        'vira-orange-on-self-non-body': {
            foreground: viraColorPalette['vira-orange-90'],
            background: viraColorPalette['vira-orange-20'],
        },
        'vira-orange-on-self-header': {
            foreground: viraColorPalette['vira-orange-90'],
            background: viraColorPalette['vira-orange-40'],
        },
        'vira-orange-on-self-placeholder': {
            foreground: viraColorPalette['vira-orange-90'],
            background: viraColorPalette['vira-orange-50'],
        },
        'vira-orange-on-self-decoration': {
            foreground: viraColorPalette['vira-orange-90'],
            background: viraColorPalette['vira-orange-70'],
        },
        'vira-orange-on-self-invisible': {
            foreground: viraColorPalette['vira-orange-90'],
            background: viraColorPalette['vira-orange-80'],
        },
        'vira-yellow-foreground-small-body': {
            foreground: viraColorPalette['vira-yellow-90'],
        },
        'vira-yellow-foreground-body': {
            foreground: viraColorPalette['vira-yellow-80'],
        },
        'vira-yellow-foreground-non-body': {
            foreground: viraColorPalette['vira-yellow-60'],
        },
        'vira-yellow-foreground-header': {
            foreground: viraColorPalette['vira-yellow-50'],
        },
        'vira-yellow-foreground-placeholder': {
            foreground: viraColorPalette['vira-yellow-40'],
        },
        'vira-yellow-foreground-decoration': {
            foreground: viraColorPalette['vira-yellow-20'],
        },
        'vira-yellow-foreground-invisible': {
            foreground: viraColorPalette['vira-yellow-5'],
        },
        'vira-yellow-behind-bg-small-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-yellow-90'],
        },
        'vira-yellow-behind-bg-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-yellow-70'],
        },
        'vira-yellow-behind-bg-non-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-yellow-60'],
        },
        'vira-yellow-behind-bg-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-yellow-40'],
        },
        'vira-yellow-behind-bg-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-yellow-30'],
        },
        'vira-yellow-behind-bg-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-yellow-20'],
        },
        'vira-yellow-behind-bg-invisible': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-yellow-5'],
        },
        'vira-yellow-behind-fg-small-body': {
            background: viraColorPalette['vira-yellow-5'],
        },
        'vira-yellow-behind-fg-body': {
            background: viraColorPalette['vira-yellow-20'],
        },
        'vira-yellow-behind-fg-non-body': {
            background: viraColorPalette['vira-yellow-30'],
        },
        'vira-yellow-behind-fg-header': {
            background: viraColorPalette['vira-yellow-50'],
        },
        'vira-yellow-behind-fg-placeholder': {
            background: viraColorPalette['vira-yellow-60'],
        },
        'vira-yellow-behind-fg-decoration': {
            background: viraColorPalette['vira-yellow-80'],
        },
        'vira-yellow-behind-fg-invisible': {
            background: viraColorPalette['vira-yellow-90'],
        },
        'vira-yellow-on-self-body': {
            foreground: viraColorPalette['vira-yellow-90'],
            background: viraColorPalette['vira-yellow-10'],
        },
        'vira-yellow-on-self-non-body': {
            foreground: viraColorPalette['vira-yellow-90'],
            background: viraColorPalette['vira-yellow-20'],
        },
        'vira-yellow-on-self-header': {
            foreground: viraColorPalette['vira-yellow-90'],
            background: viraColorPalette['vira-yellow-40'],
        },
        'vira-yellow-on-self-placeholder': {
            foreground: viraColorPalette['vira-yellow-90'],
            background: viraColorPalette['vira-yellow-50'],
        },
        'vira-yellow-on-self-decoration': {
            foreground: viraColorPalette['vira-yellow-90'],
            background: viraColorPalette['vira-yellow-70'],
        },
        'vira-yellow-on-self-invisible': {
            foreground: viraColorPalette['vira-yellow-90'],
            background: viraColorPalette['vira-yellow-80'],
        },
        'vira-green-foreground-small-body': {
            foreground: viraColorPalette['vira-green-90'],
        },
        'vira-green-foreground-body': {
            foreground: viraColorPalette['vira-green-80'],
        },
        'vira-green-foreground-non-body': {
            foreground: viraColorPalette['vira-green-60'],
        },
        'vira-green-foreground-header': {
            foreground: viraColorPalette['vira-green-50'],
        },
        'vira-green-foreground-placeholder': {
            foreground: viraColorPalette['vira-green-30'],
        },
        'vira-green-foreground-decoration': {
            foreground: viraColorPalette['vira-green-20'],
        },
        'vira-green-foreground-invisible': {
            foreground: viraColorPalette['vira-green-5'],
        },
        'vira-green-behind-bg-small-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-green-90'],
        },
        'vira-green-behind-bg-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-green-70'],
        },
        'vira-green-behind-bg-non-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-green-60'],
        },
        'vira-green-behind-bg-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-green-40'],
        },
        'vira-green-behind-bg-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-green-30'],
        },
        'vira-green-behind-bg-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-green-20'],
        },
        'vira-green-behind-bg-invisible': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-green-5'],
        },
        'vira-green-behind-fg-small-body': {
            background: viraColorPalette['vira-green-5'],
        },
        'vira-green-behind-fg-body': {
            background: viraColorPalette['vira-green-20'],
        },
        'vira-green-behind-fg-non-body': {
            background: viraColorPalette['vira-green-30'],
        },
        'vira-green-behind-fg-header': {
            background: viraColorPalette['vira-green-50'],
        },
        'vira-green-behind-fg-placeholder': {
            background: viraColorPalette['vira-green-60'],
        },
        'vira-green-behind-fg-decoration': {
            background: viraColorPalette['vira-green-80'],
        },
        'vira-green-behind-fg-invisible': {
            background: viraColorPalette['vira-green-90'],
        },
        'vira-green-on-self-body': {
            foreground: viraColorPalette['vira-green-90'],
            background: viraColorPalette['vira-green-10'],
        },
        'vira-green-on-self-non-body': {
            foreground: viraColorPalette['vira-green-90'],
            background: viraColorPalette['vira-green-20'],
        },
        'vira-green-on-self-header': {
            foreground: viraColorPalette['vira-green-90'],
            background: viraColorPalette['vira-green-40'],
        },
        'vira-green-on-self-placeholder': {
            foreground: viraColorPalette['vira-green-90'],
            background: viraColorPalette['vira-green-50'],
        },
        'vira-green-on-self-decoration': {
            foreground: viraColorPalette['vira-green-90'],
            background: viraColorPalette['vira-green-70'],
        },
        'vira-green-on-self-invisible': {
            foreground: viraColorPalette['vira-green-90'],
            background: viraColorPalette['vira-green-80'],
        },
        'vira-teal-foreground-small-body': {
            foreground: viraColorPalette['vira-teal-90'],
        },
        'vira-teal-foreground-body': {
            foreground: viraColorPalette['vira-teal-80'],
        },
        'vira-teal-foreground-non-body': {
            foreground: viraColorPalette['vira-teal-60'],
        },
        'vira-teal-foreground-header': {
            foreground: viraColorPalette['vira-teal-50'],
        },
        'vira-teal-foreground-placeholder': {
            foreground: viraColorPalette['vira-teal-30'],
        },
        'vira-teal-foreground-decoration': {
            foreground: viraColorPalette['vira-teal-20'],
        },
        'vira-teal-foreground-invisible': {
            foreground: viraColorPalette['vira-teal-5'],
        },
        'vira-teal-behind-bg-small-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-teal-90'],
        },
        'vira-teal-behind-bg-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-teal-80'],
        },
        'vira-teal-behind-bg-non-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-teal-60'],
        },
        'vira-teal-behind-bg-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-teal-40'],
        },
        'vira-teal-behind-bg-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-teal-30'],
        },
        'vira-teal-behind-bg-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-teal-20'],
        },
        'vira-teal-behind-bg-invisible': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-teal-5'],
        },
        'vira-teal-behind-fg-small-body': {
            background: viraColorPalette['vira-teal-5'],
        },
        'vira-teal-behind-fg-body': {
            background: viraColorPalette['vira-teal-20'],
        },
        'vira-teal-behind-fg-non-body': {
            background: viraColorPalette['vira-teal-30'],
        },
        'vira-teal-behind-fg-header': {
            background: viraColorPalette['vira-teal-50'],
        },
        'vira-teal-behind-fg-placeholder': {
            background: viraColorPalette['vira-teal-60'],
        },
        'vira-teal-behind-fg-decoration': {
            background: viraColorPalette['vira-teal-80'],
        },
        'vira-teal-behind-fg-invisible': {
            background: viraColorPalette['vira-teal-90'],
        },
        'vira-teal-on-self-body': {
            foreground: viraColorPalette['vira-teal-90'],
            background: viraColorPalette['vira-teal-10'],
        },
        'vira-teal-on-self-non-body': {
            foreground: viraColorPalette['vira-teal-90'],
            background: viraColorPalette['vira-teal-20'],
        },
        'vira-teal-on-self-header': {
            foreground: viraColorPalette['vira-teal-90'],
            background: viraColorPalette['vira-teal-40'],
        },
        'vira-teal-on-self-placeholder': {
            foreground: viraColorPalette['vira-teal-90'],
            background: viraColorPalette['vira-teal-50'],
        },
        'vira-teal-on-self-decoration': {
            foreground: viraColorPalette['vira-teal-90'],
            background: viraColorPalette['vira-teal-70'],
        },
        'vira-teal-on-self-invisible': {
            foreground: viraColorPalette['vira-teal-90'],
            background: viraColorPalette['vira-teal-80'],
        },
        'vira-blue-foreground-small-body': {
            foreground: viraColorPalette['vira-blue-90'],
        },
        'vira-blue-foreground-body': {
            foreground: viraColorPalette['vira-blue-80'],
        },
        'vira-blue-foreground-non-body': {
            foreground: viraColorPalette['vira-blue-70'],
        },
        'vira-blue-foreground-header': {
            foreground: viraColorPalette['vira-blue-50'],
        },
        'vira-blue-foreground-placeholder': {
            foreground: viraColorPalette['vira-blue-30'],
        },
        'vira-blue-foreground-decoration': {
            foreground: viraColorPalette['vira-blue-20'],
        },
        'vira-blue-foreground-invisible': {
            foreground: viraColorPalette['vira-blue-10'],
        },
        'vira-blue-behind-bg-small-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-blue-90'],
        },
        'vira-blue-behind-bg-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-blue-80'],
        },
        'vira-blue-behind-bg-non-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-blue-60'],
        },
        'vira-blue-behind-bg-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-blue-40'],
        },
        'vira-blue-behind-bg-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-blue-30'],
        },
        'vira-blue-behind-bg-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-blue-20'],
        },
        'vira-blue-behind-bg-invisible': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-blue-5'],
        },
        'vira-blue-behind-fg-small-body': {
            background: viraColorPalette['vira-blue-5'],
        },
        'vira-blue-behind-fg-body': {
            background: viraColorPalette['vira-blue-20'],
        },
        'vira-blue-behind-fg-non-body': {
            background: viraColorPalette['vira-blue-30'],
        },
        'vira-blue-behind-fg-header': {
            background: viraColorPalette['vira-blue-50'],
        },
        'vira-blue-behind-fg-placeholder': {
            background: viraColorPalette['vira-blue-60'],
        },
        'vira-blue-behind-fg-decoration': {
            background: viraColorPalette['vira-blue-80'],
        },
        'vira-blue-behind-fg-invisible': {
            background: viraColorPalette['vira-blue-90'],
        },
        'vira-blue-on-self-body': {
            foreground: viraColorPalette['vira-blue-90'],
            background: viraColorPalette['vira-blue-10'],
        },
        'vira-blue-on-self-non-body': {
            foreground: viraColorPalette['vira-blue-90'],
            background: viraColorPalette['vira-blue-20'],
        },
        'vira-blue-on-self-header': {
            foreground: viraColorPalette['vira-blue-90'],
            background: viraColorPalette['vira-blue-40'],
        },
        'vira-blue-on-self-placeholder': {
            foreground: viraColorPalette['vira-blue-90'],
            background: viraColorPalette['vira-blue-50'],
        },
        'vira-blue-on-self-decoration': {
            foreground: viraColorPalette['vira-blue-90'],
            background: viraColorPalette['vira-blue-70'],
        },
        'vira-blue-on-self-invisible': {
            foreground: viraColorPalette['vira-blue-90'],
            background: viraColorPalette['vira-blue-80'],
        },
        'vira-accent-foreground-small-body': {
            foreground: viraColorPalette['vira-accent-90'],
        },
        'vira-accent-foreground-body': {
            foreground: viraColorPalette['vira-accent-80'],
        },
        'vira-accent-foreground-non-body': {
            foreground: viraColorPalette['vira-accent-70'],
        },
        'vira-accent-foreground-header': {
            foreground: viraColorPalette['vira-accent-50'],
        },
        'vira-accent-foreground-placeholder': {
            foreground: viraColorPalette['vira-accent-30'],
        },
        'vira-accent-foreground-decoration': {
            foreground: viraColorPalette['vira-accent-20'],
        },
        'vira-accent-foreground-invisible': {
            foreground: viraColorPalette['vira-accent-10'],
        },
        'vira-accent-behind-bg-small-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-accent-90'],
        },
        'vira-accent-behind-bg-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-accent-80'],
        },
        'vira-accent-behind-bg-non-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-accent-60'],
        },
        'vira-accent-behind-bg-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-accent-40'],
        },
        'vira-accent-behind-bg-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-accent-30'],
        },
        'vira-accent-behind-bg-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-accent-20'],
        },
        'vira-accent-behind-bg-invisible': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-accent-5'],
        },
        'vira-accent-behind-fg-small-body': {
            background: viraColorPalette['vira-accent-5'],
        },
        'vira-accent-behind-fg-body': {
            background: viraColorPalette['vira-accent-20'],
        },
        'vira-accent-behind-fg-non-body': {
            background: viraColorPalette['vira-accent-30'],
        },
        'vira-accent-behind-fg-header': {
            background: viraColorPalette['vira-accent-50'],
        },
        'vira-accent-behind-fg-placeholder': {
            background: viraColorPalette['vira-accent-60'],
        },
        'vira-accent-behind-fg-decoration': {
            background: viraColorPalette['vira-accent-80'],
        },
        'vira-accent-behind-fg-invisible': {
            background: viraColorPalette['vira-accent-90'],
        },
        'vira-accent-on-self-body': {
            foreground: viraColorPalette['vira-accent-90'],
            background: viraColorPalette['vira-accent-10'],
        },
        'vira-accent-on-self-non-body': {
            foreground: viraColorPalette['vira-accent-90'],
            background: viraColorPalette['vira-accent-20'],
        },
        'vira-accent-on-self-header': {
            foreground: viraColorPalette['vira-accent-90'],
            background: viraColorPalette['vira-accent-40'],
        },
        'vira-accent-on-self-placeholder': {
            foreground: viraColorPalette['vira-accent-90'],
            background: viraColorPalette['vira-accent-50'],
        },
        'vira-accent-on-self-decoration': {
            foreground: viraColorPalette['vira-accent-90'],
            background: viraColorPalette['vira-accent-70'],
        },
        'vira-accent-on-self-invisible': {
            foreground: viraColorPalette['vira-accent-90'],
            background: viraColorPalette['vira-accent-80'],
        },
        'vira-purple-foreground-small-body': {
            foreground: viraColorPalette['vira-purple-90'],
        },
        'vira-purple-foreground-body': {
            foreground: viraColorPalette['vira-purple-80'],
        },
        'vira-purple-foreground-non-body': {
            foreground: viraColorPalette['vira-purple-60'],
        },
        'vira-purple-foreground-header': {
            foreground: viraColorPalette['vira-purple-50'],
        },
        'vira-purple-foreground-placeholder': {
            foreground: viraColorPalette['vira-purple-30'],
        },
        'vira-purple-foreground-decoration': {
            foreground: viraColorPalette['vira-purple-20'],
        },
        'vira-purple-foreground-invisible': {
            foreground: viraColorPalette['vira-purple-5'],
        },
        'vira-purple-behind-bg-small-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-purple-90'],
        },
        'vira-purple-behind-bg-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-purple-80'],
        },
        'vira-purple-behind-bg-non-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-purple-60'],
        },
        'vira-purple-behind-bg-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-purple-40'],
        },
        'vira-purple-behind-bg-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-purple-30'],
        },
        'vira-purple-behind-bg-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-purple-20'],
        },
        'vira-purple-behind-bg-invisible': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-purple-5'],
        },
        'vira-purple-behind-fg-small-body': {
            background: viraColorPalette['vira-purple-5'],
        },
        'vira-purple-behind-fg-body': {
            background: viraColorPalette['vira-purple-20'],
        },
        'vira-purple-behind-fg-non-body': {
            background: viraColorPalette['vira-purple-30'],
        },
        'vira-purple-behind-fg-header': {
            background: viraColorPalette['vira-purple-50'],
        },
        'vira-purple-behind-fg-placeholder': {
            background: viraColorPalette['vira-purple-60'],
        },
        'vira-purple-behind-fg-decoration': {
            background: viraColorPalette['vira-purple-80'],
        },
        'vira-purple-behind-fg-invisible': {
            background: viraColorPalette['vira-purple-90'],
        },
        'vira-purple-on-self-body': {
            foreground: viraColorPalette['vira-purple-90'],
            background: viraColorPalette['vira-purple-10'],
        },
        'vira-purple-on-self-non-body': {
            foreground: viraColorPalette['vira-purple-90'],
            background: viraColorPalette['vira-purple-20'],
        },
        'vira-purple-on-self-header': {
            foreground: viraColorPalette['vira-purple-90'],
            background: viraColorPalette['vira-purple-40'],
        },
        'vira-purple-on-self-placeholder': {
            foreground: viraColorPalette['vira-purple-90'],
            background: viraColorPalette['vira-purple-50'],
        },
        'vira-purple-on-self-decoration': {
            foreground: viraColorPalette['vira-purple-90'],
            background: viraColorPalette['vira-purple-70'],
        },
        'vira-purple-on-self-invisible': {
            foreground: viraColorPalette['vira-purple-90'],
            background: viraColorPalette['vira-purple-80'],
        },
        'vira-pink-foreground-small-body': {
            foreground: viraColorPalette['vira-pink-90'],
        },
        'vira-pink-foreground-body': {
            foreground: viraColorPalette['vira-pink-80'],
        },
        'vira-pink-foreground-non-body': {
            foreground: viraColorPalette['vira-pink-60'],
        },
        'vira-pink-foreground-header': {
            foreground: viraColorPalette['vira-pink-50'],
        },
        'vira-pink-foreground-placeholder': {
            foreground: viraColorPalette['vira-pink-40'],
        },
        'vira-pink-foreground-decoration': {
            foreground: viraColorPalette['vira-pink-20'],
        },
        'vira-pink-foreground-invisible': {
            foreground: viraColorPalette['vira-pink-10'],
        },
        'vira-pink-behind-bg-small-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-pink-90'],
        },
        'vira-pink-behind-bg-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-pink-80'],
        },
        'vira-pink-behind-bg-non-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-pink-60'],
        },
        'vira-pink-behind-bg-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-pink-40'],
        },
        'vira-pink-behind-bg-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-pink-30'],
        },
        'vira-pink-behind-bg-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-pink-20'],
        },
        'vira-pink-behind-bg-invisible': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-pink-5'],
        },
        'vira-pink-behind-fg-small-body': {
            background: viraColorPalette['vira-pink-5'],
        },
        'vira-pink-behind-fg-body': {
            background: viraColorPalette['vira-pink-20'],
        },
        'vira-pink-behind-fg-non-body': {
            background: viraColorPalette['vira-pink-30'],
        },
        'vira-pink-behind-fg-header': {
            background: viraColorPalette['vira-pink-50'],
        },
        'vira-pink-behind-fg-placeholder': {
            background: viraColorPalette['vira-pink-60'],
        },
        'vira-pink-behind-fg-decoration': {
            background: viraColorPalette['vira-pink-80'],
        },
        'vira-pink-behind-fg-invisible': {
            background: viraColorPalette['vira-pink-90'],
        },
        'vira-pink-on-self-body': {
            foreground: viraColorPalette['vira-pink-90'],
            background: viraColorPalette['vira-pink-10'],
        },
        'vira-pink-on-self-non-body': {
            foreground: viraColorPalette['vira-pink-90'],
            background: viraColorPalette['vira-pink-20'],
        },
        'vira-pink-on-self-header': {
            foreground: viraColorPalette['vira-pink-90'],
            background: viraColorPalette['vira-pink-40'],
        },
        'vira-pink-on-self-placeholder': {
            foreground: viraColorPalette['vira-pink-90'],
            background: viraColorPalette['vira-pink-50'],
        },
        'vira-pink-on-self-decoration': {
            foreground: viraColorPalette['vira-pink-90'],
            background: viraColorPalette['vira-pink-70'],
        },
        'vira-pink-on-self-invisible': {
            foreground: viraColorPalette['vira-pink-90'],
            background: viraColorPalette['vira-pink-80'],
        },
        'vira-grey-foreground-small-body': {
            foreground: viraColorPalette['vira-grey-90'],
        },
        'vira-grey-foreground-body': {
            foreground: viraColorPalette['vira-grey-80'],
        },
        'vira-grey-foreground-non-body': {
            foreground: viraColorPalette['vira-grey-60'],
        },
        'vira-grey-foreground-header': {
            foreground: viraColorPalette['vira-grey-50'],
        },
        'vira-grey-foreground-placeholder': {
            foreground: viraColorPalette['vira-grey-30'],
        },
        'vira-grey-foreground-decoration': {
            foreground: viraColorPalette['vira-grey-20'],
        },
        'vira-grey-foreground-invisible': {
            foreground: viraColorPalette['vira-grey-5'],
        },
        'vira-grey-behind-bg-small-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-grey-90'],
        },
        'vira-grey-behind-bg-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-grey-80'],
        },
        'vira-grey-behind-bg-non-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-grey-60'],
        },
        'vira-grey-behind-bg-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-grey-40'],
        },
        'vira-grey-behind-bg-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-grey-30'],
        },
        'vira-grey-behind-bg-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-grey-20'],
        },
        'vira-grey-behind-bg-invisible': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-grey-5'],
        },
        'vira-grey-behind-fg-small-body': {
            background: viraColorPalette['vira-grey-5'],
        },
        'vira-grey-behind-fg-body': {
            background: viraColorPalette['vira-grey-20'],
        },
        'vira-grey-behind-fg-non-body': {
            background: viraColorPalette['vira-grey-30'],
        },
        'vira-grey-behind-fg-header': {
            background: viraColorPalette['vira-grey-50'],
        },
        'vira-grey-behind-fg-placeholder': {
            background: viraColorPalette['vira-grey-60'],
        },
        'vira-grey-behind-fg-decoration': {
            background: viraColorPalette['vira-grey-80'],
        },
        'vira-grey-behind-fg-invisible': {
            background: viraColorPalette['vira-grey-90'],
        },
        'vira-grey-on-self-body': {
            foreground: viraColorPalette['vira-grey-90'],
            background: viraColorPalette['vira-grey-10'],
        },
        'vira-grey-on-self-non-body': {
            foreground: viraColorPalette['vira-grey-90'],
            background: viraColorPalette['vira-grey-20'],
        },
        'vira-grey-on-self-header': {
            foreground: viraColorPalette['vira-grey-90'],
            background: viraColorPalette['vira-grey-40'],
        },
        'vira-grey-on-self-placeholder': {
            foreground: viraColorPalette['vira-grey-90'],
            background: viraColorPalette['vira-grey-50'],
        },
        'vira-grey-on-self-decoration': {
            foreground: viraColorPalette['vira-grey-90'],
            background: viraColorPalette['vira-grey-70'],
        },
        'vira-grey-on-self-invisible': {
            foreground: viraColorPalette['vira-grey-90'],
            background: viraColorPalette['vira-grey-80'],
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
            foreground: viraColorPalette['vira-red-5'],
        },
        'vira-red-foreground-body': {
            foreground: viraColorPalette['vira-red-20'],
        },
        'vira-red-foreground-non-body': {
            foreground: viraColorPalette['vira-red-30'],
        },
        'vira-red-foreground-placeholder': {
            foreground: viraColorPalette['vira-red-60'],
        },
        'vira-red-foreground-decoration': {
            foreground: viraColorPalette['vira-red-80'],
        },
        'vira-red-foreground-invisible': {
            foreground: viraColorPalette['vira-red-90'],
        },
        'vira-red-behind-bg-small-body': {
            background: viraColorPalette['vira-red-5'],
        },
        'vira-red-behind-bg-body': {
            background: viraColorPalette['vira-red-20'],
        },
        'vira-red-behind-bg-non-body': {
            background: viraColorPalette['vira-red-30'],
        },
        'vira-red-behind-bg-header': {
            background: viraColorPalette['vira-red-50'],
        },
        'vira-red-behind-bg-placeholder': {
            background: viraColorPalette['vira-red-60'],
        },
        'vira-red-behind-bg-decoration': {
            background: viraColorPalette['vira-red-80'],
        },
        'vira-red-behind-bg-invisible': {
            background: viraColorPalette['vira-red-90'],
        },
        'vira-red-behind-fg-small-body': {
            background: viraColorPalette['vira-red-90'],
        },
        'vira-red-behind-fg-body': {
            background: viraColorPalette['vira-red-80'],
        },
        'vira-red-behind-fg-non-body': {
            background: viraColorPalette['vira-red-60'],
        },
        'vira-red-behind-fg-header': {
            background: viraColorPalette['vira-red-40'],
        },
        'vira-red-behind-fg-placeholder': {
            background: viraColorPalette['vira-red-30'],
        },
        'vira-red-behind-fg-decoration': {
            background: viraColorPalette['vira-red-20'],
        },
        'vira-red-behind-fg-invisible': {
            background: viraColorPalette['vira-red-5'],
        },
        'vira-red-on-self-body': {
            foreground: viraColorPalette['vira-red-5'],
            background: viraColorPalette['vira-red-90'],
        },
        'vira-red-on-self-non-body': {
            foreground: viraColorPalette['vira-red-5'],
            background: viraColorPalette['vira-red-70'],
        },
        'vira-red-on-self-header': {
            foreground: viraColorPalette['vira-red-5'],
            background: viraColorPalette['vira-red-60'],
        },
        'vira-red-on-self-placeholder': {
            foreground: viraColorPalette['vira-red-5'],
            background: viraColorPalette['vira-red-40'],
        },
        'vira-red-on-self-decoration': {
            foreground: viraColorPalette['vira-red-5'],
            background: viraColorPalette['vira-red-30'],
        },
        'vira-red-on-self-invisible': {
            foreground: viraColorPalette['vira-red-5'],
            background: viraColorPalette['vira-red-10'],
        },
        'vira-orange-foreground-small-body': {
            foreground: viraColorPalette['vira-orange-5'],
        },
        'vira-orange-foreground-body': {
            foreground: viraColorPalette['vira-orange-20'],
        },
        'vira-orange-foreground-non-body': {
            foreground: viraColorPalette['vira-orange-30'],
        },
        'vira-orange-foreground-placeholder': {
            foreground: viraColorPalette['vira-orange-60'],
        },
        'vira-orange-foreground-decoration': {
            foreground: viraColorPalette['vira-orange-80'],
        },
        'vira-orange-foreground-invisible': {
            foreground: viraColorPalette['vira-orange-90'],
        },
        'vira-orange-behind-bg-small-body': {
            background: viraColorPalette['vira-orange-5'],
        },
        'vira-orange-behind-bg-body': {
            background: viraColorPalette['vira-orange-20'],
        },
        'vira-orange-behind-bg-non-body': {
            background: viraColorPalette['vira-orange-30'],
        },
        'vira-orange-behind-bg-header': {
            background: viraColorPalette['vira-orange-50'],
        },
        'vira-orange-behind-bg-placeholder': {
            background: viraColorPalette['vira-orange-60'],
        },
        'vira-orange-behind-bg-decoration': {
            background: viraColorPalette['vira-orange-80'],
        },
        'vira-orange-behind-bg-invisible': {
            background: viraColorPalette['vira-orange-90'],
        },
        'vira-orange-behind-fg-small-body': {
            background: viraColorPalette['vira-orange-90'],
        },
        'vira-orange-behind-fg-body': {
            background: viraColorPalette['vira-orange-80'],
        },
        'vira-orange-behind-fg-non-body': {
            background: viraColorPalette['vira-orange-60'],
        },
        'vira-orange-behind-fg-header': {
            background: viraColorPalette['vira-orange-40'],
        },
        'vira-orange-behind-fg-placeholder': {
            background: viraColorPalette['vira-orange-30'],
        },
        'vira-orange-behind-fg-decoration': {
            background: viraColorPalette['vira-orange-20'],
        },
        'vira-orange-behind-fg-invisible': {
            background: viraColorPalette['vira-orange-5'],
        },
        'vira-orange-on-self-body': {
            foreground: viraColorPalette['vira-orange-5'],
            background: viraColorPalette['vira-orange-90'],
        },
        'vira-orange-on-self-non-body': {
            foreground: viraColorPalette['vira-orange-5'],
            background: viraColorPalette['vira-orange-70'],
        },
        'vira-orange-on-self-header': {
            foreground: viraColorPalette['vira-orange-5'],
            background: viraColorPalette['vira-orange-60'],
        },
        'vira-orange-on-self-placeholder': {
            foreground: viraColorPalette['vira-orange-5'],
            background: viraColorPalette['vira-orange-40'],
        },
        'vira-orange-on-self-decoration': {
            foreground: viraColorPalette['vira-orange-5'],
            background: viraColorPalette['vira-orange-30'],
        },
        'vira-orange-on-self-invisible': {
            foreground: viraColorPalette['vira-orange-5'],
            background: viraColorPalette['vira-orange-10'],
        },
        'vira-yellow-foreground-small-body': {
            foreground: viraColorPalette['vira-yellow-5'],
        },
        'vira-yellow-foreground-body': {
            foreground: viraColorPalette['vira-yellow-20'],
        },
        'vira-yellow-foreground-non-body': {
            foreground: viraColorPalette['vira-yellow-30'],
        },
        'vira-yellow-foreground-placeholder': {
            foreground: viraColorPalette['vira-yellow-60'],
        },
        'vira-yellow-foreground-decoration': {
            foreground: viraColorPalette['vira-yellow-80'],
        },
        'vira-yellow-foreground-invisible': {
            foreground: viraColorPalette['vira-yellow-90'],
        },
        'vira-yellow-behind-bg-small-body': {
            background: viraColorPalette['vira-yellow-5'],
        },
        'vira-yellow-behind-bg-body': {
            background: viraColorPalette['vira-yellow-20'],
        },
        'vira-yellow-behind-bg-non-body': {
            background: viraColorPalette['vira-yellow-30'],
        },
        'vira-yellow-behind-bg-header': {
            background: viraColorPalette['vira-yellow-50'],
        },
        'vira-yellow-behind-bg-placeholder': {
            background: viraColorPalette['vira-yellow-60'],
        },
        'vira-yellow-behind-bg-decoration': {
            background: viraColorPalette['vira-yellow-80'],
        },
        'vira-yellow-behind-bg-invisible': {
            background: viraColorPalette['vira-yellow-90'],
        },
        'vira-yellow-behind-fg-small-body': {
            background: viraColorPalette['vira-yellow-90'],
        },
        'vira-yellow-behind-fg-body': {
            background: viraColorPalette['vira-yellow-70'],
        },
        'vira-yellow-behind-fg-non-body': {
            background: viraColorPalette['vira-yellow-60'],
        },
        'vira-yellow-behind-fg-header': {
            background: viraColorPalette['vira-yellow-40'],
        },
        'vira-yellow-behind-fg-placeholder': {
            background: viraColorPalette['vira-yellow-30'],
        },
        'vira-yellow-behind-fg-decoration': {
            background: viraColorPalette['vira-yellow-20'],
        },
        'vira-yellow-behind-fg-invisible': {
            background: viraColorPalette['vira-yellow-5'],
        },
        'vira-yellow-on-self-body': {
            foreground: viraColorPalette['vira-yellow-5'],
            background: viraColorPalette['vira-yellow-90'],
        },
        'vira-yellow-on-self-non-body': {
            foreground: viraColorPalette['vira-yellow-5'],
            background: viraColorPalette['vira-yellow-70'],
        },
        'vira-yellow-on-self-header': {
            foreground: viraColorPalette['vira-yellow-5'],
            background: viraColorPalette['vira-yellow-60'],
        },
        'vira-yellow-on-self-placeholder': {
            foreground: viraColorPalette['vira-yellow-5'],
            background: viraColorPalette['vira-yellow-40'],
        },
        'vira-yellow-on-self-decoration': {
            foreground: viraColorPalette['vira-yellow-5'],
            background: viraColorPalette['vira-yellow-30'],
        },
        'vira-yellow-on-self-invisible': {
            foreground: viraColorPalette['vira-yellow-5'],
            background: viraColorPalette['vira-yellow-10'],
        },
        'vira-green-foreground-small-body': {
            foreground: viraColorPalette['vira-green-5'],
        },
        'vira-green-foreground-body': {
            foreground: viraColorPalette['vira-green-20'],
        },
        'vira-green-foreground-non-body': {
            foreground: viraColorPalette['vira-green-30'],
        },
        'vira-green-foreground-placeholder': {
            foreground: viraColorPalette['vira-green-60'],
        },
        'vira-green-foreground-decoration': {
            foreground: viraColorPalette['vira-green-80'],
        },
        'vira-green-foreground-invisible': {
            foreground: viraColorPalette['vira-green-90'],
        },
        'vira-green-behind-bg-small-body': {
            background: viraColorPalette['vira-green-5'],
        },
        'vira-green-behind-bg-body': {
            background: viraColorPalette['vira-green-20'],
        },
        'vira-green-behind-bg-non-body': {
            background: viraColorPalette['vira-green-30'],
        },
        'vira-green-behind-bg-header': {
            background: viraColorPalette['vira-green-50'],
        },
        'vira-green-behind-bg-placeholder': {
            background: viraColorPalette['vira-green-60'],
        },
        'vira-green-behind-bg-decoration': {
            background: viraColorPalette['vira-green-80'],
        },
        'vira-green-behind-bg-invisible': {
            background: viraColorPalette['vira-green-90'],
        },
        'vira-green-behind-fg-small-body': {
            background: viraColorPalette['vira-green-90'],
        },
        'vira-green-behind-fg-body': {
            background: viraColorPalette['vira-green-70'],
        },
        'vira-green-behind-fg-non-body': {
            background: viraColorPalette['vira-green-60'],
        },
        'vira-green-behind-fg-header': {
            background: viraColorPalette['vira-green-40'],
        },
        'vira-green-behind-fg-placeholder': {
            background: viraColorPalette['vira-green-30'],
        },
        'vira-green-behind-fg-decoration': {
            background: viraColorPalette['vira-green-20'],
        },
        'vira-green-behind-fg-invisible': {
            background: viraColorPalette['vira-green-5'],
        },
        'vira-green-on-self-body': {
            foreground: viraColorPalette['vira-green-5'],
            background: viraColorPalette['vira-green-90'],
        },
        'vira-green-on-self-non-body': {
            foreground: viraColorPalette['vira-green-5'],
            background: viraColorPalette['vira-green-70'],
        },
        'vira-green-on-self-header': {
            foreground: viraColorPalette['vira-green-5'],
            background: viraColorPalette['vira-green-60'],
        },
        'vira-green-on-self-placeholder': {
            foreground: viraColorPalette['vira-green-5'],
            background: viraColorPalette['vira-green-40'],
        },
        'vira-green-on-self-decoration': {
            foreground: viraColorPalette['vira-green-5'],
            background: viraColorPalette['vira-green-30'],
        },
        'vira-green-on-self-invisible': {
            foreground: viraColorPalette['vira-green-5'],
            background: viraColorPalette['vira-green-10'],
        },
        'vira-teal-foreground-small-body': {
            foreground: viraColorPalette['vira-teal-5'],
        },
        'vira-teal-foreground-body': {
            foreground: viraColorPalette['vira-teal-20'],
        },
        'vira-teal-foreground-non-body': {
            foreground: viraColorPalette['vira-teal-30'],
        },
        'vira-teal-foreground-placeholder': {
            foreground: viraColorPalette['vira-teal-60'],
        },
        'vira-teal-foreground-decoration': {
            foreground: viraColorPalette['vira-teal-80'],
        },
        'vira-teal-foreground-invisible': {
            foreground: viraColorPalette['vira-teal-90'],
        },
        'vira-teal-behind-bg-small-body': {
            background: viraColorPalette['vira-teal-5'],
        },
        'vira-teal-behind-bg-body': {
            background: viraColorPalette['vira-teal-20'],
        },
        'vira-teal-behind-bg-non-body': {
            background: viraColorPalette['vira-teal-30'],
        },
        'vira-teal-behind-bg-header': {
            background: viraColorPalette['vira-teal-50'],
        },
        'vira-teal-behind-bg-placeholder': {
            background: viraColorPalette['vira-teal-60'],
        },
        'vira-teal-behind-bg-decoration': {
            background: viraColorPalette['vira-teal-80'],
        },
        'vira-teal-behind-bg-invisible': {
            background: viraColorPalette['vira-teal-90'],
        },
        'vira-teal-behind-fg-small-body': {
            background: viraColorPalette['vira-teal-90'],
        },
        'vira-teal-behind-fg-body': {
            background: viraColorPalette['vira-teal-80'],
        },
        'vira-teal-behind-fg-non-body': {
            background: viraColorPalette['vira-teal-60'],
        },
        'vira-teal-behind-fg-header': {
            background: viraColorPalette['vira-teal-40'],
        },
        'vira-teal-behind-fg-placeholder': {
            background: viraColorPalette['vira-teal-30'],
        },
        'vira-teal-behind-fg-decoration': {
            background: viraColorPalette['vira-teal-20'],
        },
        'vira-teal-behind-fg-invisible': {
            background: viraColorPalette['vira-teal-5'],
        },
        'vira-teal-on-self-body': {
            foreground: viraColorPalette['vira-teal-5'],
            background: viraColorPalette['vira-teal-90'],
        },
        'vira-teal-on-self-non-body': {
            foreground: viraColorPalette['vira-teal-5'],
            background: viraColorPalette['vira-teal-70'],
        },
        'vira-teal-on-self-header': {
            foreground: viraColorPalette['vira-teal-5'],
            background: viraColorPalette['vira-teal-60'],
        },
        'vira-teal-on-self-placeholder': {
            foreground: viraColorPalette['vira-teal-5'],
            background: viraColorPalette['vira-teal-40'],
        },
        'vira-teal-on-self-decoration': {
            foreground: viraColorPalette['vira-teal-5'],
            background: viraColorPalette['vira-teal-30'],
        },
        'vira-teal-on-self-invisible': {
            foreground: viraColorPalette['vira-teal-5'],
            background: viraColorPalette['vira-teal-10'],
        },
        'vira-blue-foreground-small-body': {
            foreground: viraColorPalette['vira-blue-5'],
        },
        'vira-blue-foreground-body': {
            foreground: viraColorPalette['vira-blue-20'],
        },
        'vira-blue-foreground-non-body': {
            foreground: viraColorPalette['vira-blue-30'],
        },
        'vira-blue-foreground-placeholder': {
            foreground: viraColorPalette['vira-blue-60'],
        },
        'vira-blue-foreground-decoration': {
            foreground: viraColorPalette['vira-blue-80'],
        },
        'vira-blue-foreground-invisible': {
            foreground: viraColorPalette['vira-blue-90'],
        },
        'vira-blue-behind-bg-small-body': {
            background: viraColorPalette['vira-blue-5'],
        },
        'vira-blue-behind-bg-body': {
            background: viraColorPalette['vira-blue-20'],
        },
        'vira-blue-behind-bg-non-body': {
            background: viraColorPalette['vira-blue-30'],
        },
        'vira-blue-behind-bg-header': {
            background: viraColorPalette['vira-blue-50'],
        },
        'vira-blue-behind-bg-placeholder': {
            background: viraColorPalette['vira-blue-60'],
        },
        'vira-blue-behind-bg-decoration': {
            background: viraColorPalette['vira-blue-80'],
        },
        'vira-blue-behind-bg-invisible': {
            background: viraColorPalette['vira-blue-90'],
        },
        'vira-blue-behind-fg-small-body': {
            background: viraColorPalette['vira-blue-90'],
        },
        'vira-blue-behind-fg-body': {
            background: viraColorPalette['vira-blue-80'],
        },
        'vira-blue-behind-fg-non-body': {
            background: viraColorPalette['vira-blue-60'],
        },
        'vira-blue-behind-fg-header': {
            background: viraColorPalette['vira-blue-40'],
        },
        'vira-blue-behind-fg-placeholder': {
            background: viraColorPalette['vira-blue-30'],
        },
        'vira-blue-behind-fg-decoration': {
            background: viraColorPalette['vira-blue-20'],
        },
        'vira-blue-behind-fg-invisible': {
            background: viraColorPalette['vira-blue-5'],
        },
        'vira-blue-on-self-body': {
            foreground: viraColorPalette['vira-blue-5'],
            background: viraColorPalette['vira-blue-90'],
        },
        'vira-blue-on-self-non-body': {
            foreground: viraColorPalette['vira-blue-5'],
            background: viraColorPalette['vira-blue-70'],
        },
        'vira-blue-on-self-header': {
            foreground: viraColorPalette['vira-blue-5'],
            background: viraColorPalette['vira-blue-60'],
        },
        'vira-blue-on-self-placeholder': {
            foreground: viraColorPalette['vira-blue-5'],
            background: viraColorPalette['vira-blue-40'],
        },
        'vira-blue-on-self-decoration': {
            foreground: viraColorPalette['vira-blue-5'],
            background: viraColorPalette['vira-blue-30'],
        },
        'vira-blue-on-self-invisible': {
            foreground: viraColorPalette['vira-blue-5'],
            background: viraColorPalette['vira-blue-10'],
        },
        'vira-accent-foreground-small-body': {
            foreground: viraColorPalette['vira-accent-5'],
        },
        'vira-accent-foreground-body': {
            foreground: viraColorPalette['vira-accent-20'],
        },
        'vira-accent-foreground-non-body': {
            foreground: viraColorPalette['vira-accent-30'],
        },
        'vira-accent-foreground-placeholder': {
            foreground: viraColorPalette['vira-accent-60'],
        },
        'vira-accent-foreground-decoration': {
            foreground: viraColorPalette['vira-accent-80'],
        },
        'vira-accent-foreground-invisible': {
            foreground: viraColorPalette['vira-accent-90'],
        },
        'vira-accent-behind-bg-small-body': {
            background: viraColorPalette['vira-accent-5'],
        },
        'vira-accent-behind-bg-body': {
            background: viraColorPalette['vira-accent-20'],
        },
        'vira-accent-behind-bg-non-body': {
            background: viraColorPalette['vira-accent-30'],
        },
        'vira-accent-behind-bg-header': {
            background: viraColorPalette['vira-accent-50'],
        },
        'vira-accent-behind-bg-placeholder': {
            background: viraColorPalette['vira-accent-60'],
        },
        'vira-accent-behind-bg-decoration': {
            background: viraColorPalette['vira-accent-80'],
        },
        'vira-accent-behind-bg-invisible': {
            background: viraColorPalette['vira-accent-90'],
        },
        'vira-accent-behind-fg-small-body': {
            background: viraColorPalette['vira-accent-90'],
        },
        'vira-accent-behind-fg-body': {
            background: viraColorPalette['vira-accent-80'],
        },
        'vira-accent-behind-fg-non-body': {
            background: viraColorPalette['vira-accent-60'],
        },
        'vira-accent-behind-fg-header': {
            background: viraColorPalette['vira-accent-40'],
        },
        'vira-accent-behind-fg-placeholder': {
            background: viraColorPalette['vira-accent-30'],
        },
        'vira-accent-behind-fg-decoration': {
            background: viraColorPalette['vira-accent-20'],
        },
        'vira-accent-behind-fg-invisible': {
            background: viraColorPalette['vira-accent-5'],
        },
        'vira-accent-on-self-body': {
            foreground: viraColorPalette['vira-accent-5'],
            background: viraColorPalette['vira-accent-90'],
        },
        'vira-accent-on-self-non-body': {
            foreground: viraColorPalette['vira-accent-5'],
            background: viraColorPalette['vira-accent-70'],
        },
        'vira-accent-on-self-header': {
            foreground: viraColorPalette['vira-accent-5'],
            background: viraColorPalette['vira-accent-60'],
        },
        'vira-accent-on-self-placeholder': {
            foreground: viraColorPalette['vira-accent-5'],
            background: viraColorPalette['vira-accent-40'],
        },
        'vira-accent-on-self-decoration': {
            foreground: viraColorPalette['vira-accent-5'],
            background: viraColorPalette['vira-accent-30'],
        },
        'vira-accent-on-self-invisible': {
            foreground: viraColorPalette['vira-accent-5'],
            background: viraColorPalette['vira-accent-10'],
        },
        'vira-purple-foreground-small-body': {
            foreground: viraColorPalette['vira-purple-5'],
        },
        'vira-purple-foreground-body': {
            foreground: viraColorPalette['vira-purple-20'],
        },
        'vira-purple-foreground-non-body': {
            foreground: viraColorPalette['vira-purple-30'],
        },
        'vira-purple-foreground-placeholder': {
            foreground: viraColorPalette['vira-purple-60'],
        },
        'vira-purple-foreground-decoration': {
            foreground: viraColorPalette['vira-purple-80'],
        },
        'vira-purple-foreground-invisible': {
            foreground: viraColorPalette['vira-purple-90'],
        },
        'vira-purple-behind-bg-small-body': {
            background: viraColorPalette['vira-purple-5'],
        },
        'vira-purple-behind-bg-body': {
            background: viraColorPalette['vira-purple-20'],
        },
        'vira-purple-behind-bg-non-body': {
            background: viraColorPalette['vira-purple-30'],
        },
        'vira-purple-behind-bg-header': {
            background: viraColorPalette['vira-purple-50'],
        },
        'vira-purple-behind-bg-placeholder': {
            background: viraColorPalette['vira-purple-60'],
        },
        'vira-purple-behind-bg-decoration': {
            background: viraColorPalette['vira-purple-80'],
        },
        'vira-purple-behind-bg-invisible': {
            background: viraColorPalette['vira-purple-90'],
        },
        'vira-purple-behind-fg-small-body': {
            background: viraColorPalette['vira-purple-90'],
        },
        'vira-purple-behind-fg-body': {
            background: viraColorPalette['vira-purple-80'],
        },
        'vira-purple-behind-fg-non-body': {
            background: viraColorPalette['vira-purple-60'],
        },
        'vira-purple-behind-fg-header': {
            background: viraColorPalette['vira-purple-40'],
        },
        'vira-purple-behind-fg-placeholder': {
            background: viraColorPalette['vira-purple-30'],
        },
        'vira-purple-behind-fg-decoration': {
            background: viraColorPalette['vira-purple-20'],
        },
        'vira-purple-behind-fg-invisible': {
            background: viraColorPalette['vira-purple-5'],
        },
        'vira-purple-on-self-body': {
            foreground: viraColorPalette['vira-purple-5'],
            background: viraColorPalette['vira-purple-90'],
        },
        'vira-purple-on-self-non-body': {
            foreground: viraColorPalette['vira-purple-5'],
            background: viraColorPalette['vira-purple-70'],
        },
        'vira-purple-on-self-header': {
            foreground: viraColorPalette['vira-purple-5'],
            background: viraColorPalette['vira-purple-60'],
        },
        'vira-purple-on-self-placeholder': {
            foreground: viraColorPalette['vira-purple-5'],
            background: viraColorPalette['vira-purple-40'],
        },
        'vira-purple-on-self-decoration': {
            foreground: viraColorPalette['vira-purple-5'],
            background: viraColorPalette['vira-purple-30'],
        },
        'vira-purple-on-self-invisible': {
            foreground: viraColorPalette['vira-purple-5'],
            background: viraColorPalette['vira-purple-10'],
        },
        'vira-pink-foreground-small-body': {
            foreground: viraColorPalette['vira-pink-5'],
        },
        'vira-pink-foreground-body': {
            foreground: viraColorPalette['vira-pink-20'],
        },
        'vira-pink-foreground-non-body': {
            foreground: viraColorPalette['vira-pink-30'],
        },
        'vira-pink-foreground-placeholder': {
            foreground: viraColorPalette['vira-pink-60'],
        },
        'vira-pink-foreground-decoration': {
            foreground: viraColorPalette['vira-pink-80'],
        },
        'vira-pink-foreground-invisible': {
            foreground: viraColorPalette['vira-pink-90'],
        },
        'vira-pink-behind-bg-small-body': {
            background: viraColorPalette['vira-pink-5'],
        },
        'vira-pink-behind-bg-body': {
            background: viraColorPalette['vira-pink-20'],
        },
        'vira-pink-behind-bg-non-body': {
            background: viraColorPalette['vira-pink-30'],
        },
        'vira-pink-behind-bg-header': {
            background: viraColorPalette['vira-pink-50'],
        },
        'vira-pink-behind-bg-placeholder': {
            background: viraColorPalette['vira-pink-60'],
        },
        'vira-pink-behind-bg-decoration': {
            background: viraColorPalette['vira-pink-80'],
        },
        'vira-pink-behind-bg-invisible': {
            background: viraColorPalette['vira-pink-90'],
        },
        'vira-pink-behind-fg-small-body': {
            background: viraColorPalette['vira-pink-90'],
        },
        'vira-pink-behind-fg-body': {
            background: viraColorPalette['vira-pink-80'],
        },
        'vira-pink-behind-fg-non-body': {
            background: viraColorPalette['vira-pink-60'],
        },
        'vira-pink-behind-fg-header': {
            background: viraColorPalette['vira-pink-40'],
        },
        'vira-pink-behind-fg-placeholder': {
            background: viraColorPalette['vira-pink-30'],
        },
        'vira-pink-behind-fg-decoration': {
            background: viraColorPalette['vira-pink-20'],
        },
        'vira-pink-behind-fg-invisible': {
            background: viraColorPalette['vira-pink-5'],
        },
        'vira-pink-on-self-body': {
            foreground: viraColorPalette['vira-pink-5'],
            background: viraColorPalette['vira-pink-90'],
        },
        'vira-pink-on-self-non-body': {
            foreground: viraColorPalette['vira-pink-5'],
            background: viraColorPalette['vira-pink-70'],
        },
        'vira-pink-on-self-header': {
            foreground: viraColorPalette['vira-pink-5'],
            background: viraColorPalette['vira-pink-60'],
        },
        'vira-pink-on-self-placeholder': {
            foreground: viraColorPalette['vira-pink-5'],
            background: viraColorPalette['vira-pink-40'],
        },
        'vira-pink-on-self-decoration': {
            foreground: viraColorPalette['vira-pink-5'],
            background: viraColorPalette['vira-pink-30'],
        },
        'vira-pink-on-self-invisible': {
            foreground: viraColorPalette['vira-pink-5'],
            background: viraColorPalette['vira-pink-10'],
        },
        'vira-grey-foreground-small-body': {
            foreground: viraColorPalette['vira-grey-5'],
        },
        'vira-grey-foreground-body': {
            foreground: viraColorPalette['vira-grey-20'],
        },
        'vira-grey-foreground-non-body': {
            foreground: viraColorPalette['vira-grey-30'],
        },
        'vira-grey-foreground-placeholder': {
            foreground: viraColorPalette['vira-grey-60'],
        },
        'vira-grey-foreground-decoration': {
            foreground: viraColorPalette['vira-grey-80'],
        },
        'vira-grey-foreground-invisible': {
            foreground: viraColorPalette['vira-grey-90'],
        },
        'vira-grey-behind-bg-small-body': {
            background: viraColorPalette['vira-grey-5'],
        },
        'vira-grey-behind-bg-body': {
            background: viraColorPalette['vira-grey-20'],
        },
        'vira-grey-behind-bg-non-body': {
            background: viraColorPalette['vira-grey-30'],
        },
        'vira-grey-behind-bg-header': {
            background: viraColorPalette['vira-grey-50'],
        },
        'vira-grey-behind-bg-placeholder': {
            background: viraColorPalette['vira-grey-60'],
        },
        'vira-grey-behind-bg-decoration': {
            background: viraColorPalette['vira-grey-80'],
        },
        'vira-grey-behind-bg-invisible': {
            background: viraColorPalette['vira-grey-90'],
        },
        'vira-grey-behind-fg-small-body': {
            background: viraColorPalette['vira-grey-90'],
        },
        'vira-grey-behind-fg-body': {
            background: viraColorPalette['vira-grey-80'],
        },
        'vira-grey-behind-fg-non-body': {
            background: viraColorPalette['vira-grey-60'],
        },
        'vira-grey-behind-fg-header': {
            background: viraColorPalette['vira-grey-40'],
        },
        'vira-grey-behind-fg-placeholder': {
            background: viraColorPalette['vira-grey-30'],
        },
        'vira-grey-behind-fg-decoration': {
            background: viraColorPalette['vira-grey-20'],
        },
        'vira-grey-behind-fg-invisible': {
            background: viraColorPalette['vira-grey-5'],
        },
        'vira-grey-on-self-body': {
            foreground: viraColorPalette['vira-grey-5'],
            background: viraColorPalette['vira-grey-90'],
        },
        'vira-grey-on-self-non-body': {
            foreground: viraColorPalette['vira-grey-5'],
            background: viraColorPalette['vira-grey-70'],
        },
        'vira-grey-on-self-header': {
            foreground: viraColorPalette['vira-grey-5'],
            background: viraColorPalette['vira-grey-60'],
        },
        'vira-grey-on-self-placeholder': {
            foreground: viraColorPalette['vira-grey-5'],
            background: viraColorPalette['vira-grey-40'],
        },
        'vira-grey-on-self-decoration': {
            foreground: viraColorPalette['vira-grey-5'],
            background: viraColorPalette['vira-grey-30'],
        },
        'vira-grey-on-self-invisible': {
            foreground: viraColorPalette['vira-grey-5'],
            background: viraColorPalette['vira-grey-10'],
        },
    },
});
