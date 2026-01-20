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
        'vira-red-background-small-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-red-90'],
        },
        'vira-red-background-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-red-80'],
        },
        'vira-red-background-non-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-red-60'],
        },
        'vira-red-background-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-red-40'],
        },
        'vira-red-background-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-red-30'],
        },
        'vira-red-background-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-red-20'],
        },
        'vira-red-background-invisible': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-red-5'],
        },
        'vira-red-on-self-body': {
            foreground: viraColorPalette['vira-red-90'],
            background: '#ffe9e6',
        },
        'vira-red-on-self-non-body': {
            foreground: viraColorPalette['vira-red-80'],
            background: '#ffe9e6',
        },
        'vira-red-on-self-header': {
            foreground: viraColorPalette['vira-red-60'],
            background: '#ffe9e6',
        },
        'vira-red-on-self-placeholder': {
            foreground: viraColorPalette['vira-red-50'],
            background: '#ffe9e6',
        },
        'vira-red-on-self-decoration': {
            foreground: viraColorPalette['vira-red-30'],
            background: '#ffe9e6',
        },
        'vira-red-on-self-invisible': {
            foreground: viraColorPalette['vira-red-20'],
            background: '#ffe9e6',
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
        'vira-orange-background-small-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-orange-90'],
        },
        'vira-orange-background-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-orange-80'],
        },
        'vira-orange-background-non-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-orange-60'],
        },
        'vira-orange-background-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-orange-40'],
        },
        'vira-orange-background-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-orange-30'],
        },
        'vira-orange-background-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-orange-20'],
        },
        'vira-orange-background-invisible': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-orange-5'],
        },
        'vira-orange-on-self-body': {
            foreground: viraColorPalette['vira-orange-90'],
            background: '#ffebd1',
        },
        'vira-orange-on-self-non-body': {
            foreground: viraColorPalette['vira-orange-80'],
            background: '#ffebd1',
        },
        'vira-orange-on-self-header': {
            foreground: viraColorPalette['vira-orange-60'],
            background: '#ffebd1',
        },
        'vira-orange-on-self-placeholder': {
            foreground: viraColorPalette['vira-orange-50'],
            background: '#ffebd1',
        },
        'vira-orange-on-self-decoration': {
            foreground: viraColorPalette['vira-orange-30'],
            background: '#ffebd1',
        },
        'vira-orange-on-self-invisible': {
            foreground: viraColorPalette['vira-orange-20'],
            background: '#ffebd1',
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
        'vira-yellow-background-small-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-yellow-90'],
        },
        'vira-yellow-background-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-yellow-70'],
        },
        'vira-yellow-background-non-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-yellow-60'],
        },
        'vira-yellow-background-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-yellow-40'],
        },
        'vira-yellow-background-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-yellow-30'],
        },
        'vira-yellow-background-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-yellow-20'],
        },
        'vira-yellow-background-invisible': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-yellow-5'],
        },
        'vira-yellow-on-self-body': {
            foreground: viraColorPalette['vira-yellow-90'],
            background: '#f7eeca',
        },
        'vira-yellow-on-self-non-body': {
            foreground: viraColorPalette['vira-yellow-80'],
            background: '#f7eeca',
        },
        'vira-yellow-on-self-header': {
            foreground: viraColorPalette['vira-yellow-60'],
            background: '#f7eeca',
        },
        'vira-yellow-on-self-placeholder': {
            foreground: viraColorPalette['vira-yellow-50'],
            background: '#f7eeca',
        },
        'vira-yellow-on-self-decoration': {
            foreground: viraColorPalette['vira-yellow-30'],
            background: '#f7eeca',
        },
        'vira-yellow-on-self-invisible': {
            foreground: viraColorPalette['vira-yellow-20'],
            background: '#f7eeca',
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
        'vira-green-background-small-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-green-90'],
        },
        'vira-green-background-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-green-70'],
        },
        'vira-green-background-non-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-green-60'],
        },
        'vira-green-background-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-green-40'],
        },
        'vira-green-background-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-green-30'],
        },
        'vira-green-background-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-green-20'],
        },
        'vira-green-background-invisible': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-green-5'],
        },
        'vira-green-on-self-body': {
            foreground: viraColorPalette['vira-green-90'],
            background: '#d3f8cf',
        },
        'vira-green-on-self-non-body': {
            foreground: viraColorPalette['vira-green-70'],
            background: '#d3f8cf',
        },
        'vira-green-on-self-header': {
            foreground: viraColorPalette['vira-green-60'],
            background: '#d3f8cf',
        },
        'vira-green-on-self-placeholder': {
            foreground: viraColorPalette['vira-green-40'],
            background: '#d3f8cf',
        },
        'vira-green-on-self-decoration': {
            foreground: viraColorPalette['vira-green-30'],
            background: '#d3f8cf',
        },
        'vira-green-on-self-invisible': {
            foreground: viraColorPalette['vira-green-20'],
            background: '#d3f8cf',
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
        'vira-teal-background-small-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-teal-90'],
        },
        'vira-teal-background-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-teal-80'],
        },
        'vira-teal-background-non-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-teal-60'],
        },
        'vira-teal-background-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-teal-40'],
        },
        'vira-teal-background-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-teal-30'],
        },
        'vira-teal-background-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-teal-20'],
        },
        'vira-teal-background-invisible': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-teal-5'],
        },
        'vira-teal-on-self-body': {
            foreground: viraColorPalette['vira-teal-90'],
            background: '#d4f5f3',
        },
        'vira-teal-on-self-non-body': {
            foreground: viraColorPalette['vira-teal-70'],
            background: '#d4f5f3',
        },
        'vira-teal-on-self-header': {
            foreground: viraColorPalette['vira-teal-60'],
            background: '#d4f5f3',
        },
        'vira-teal-on-self-placeholder': {
            foreground: viraColorPalette['vira-teal-40'],
            background: '#d4f5f3',
        },
        'vira-teal-on-self-decoration': {
            foreground: viraColorPalette['vira-teal-30'],
            background: '#d4f5f3',
        },
        'vira-teal-on-self-invisible': {
            foreground: viraColorPalette['vira-teal-10'],
            background: '#d4f5f3',
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
        'vira-blue-background-small-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-blue-90'],
        },
        'vira-blue-background-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-blue-80'],
        },
        'vira-blue-background-non-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-blue-60'],
        },
        'vira-blue-background-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-blue-40'],
        },
        'vira-blue-background-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-blue-30'],
        },
        'vira-blue-background-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-blue-20'],
        },
        'vira-blue-background-invisible': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-blue-5'],
        },
        'vira-blue-on-self-body': {
            foreground: viraColorPalette['vira-blue-90'],
            background: '#daf2ff',
        },
        'vira-blue-on-self-non-body': {
            foreground: viraColorPalette['vira-blue-80'],
            background: '#daf2ff',
        },
        'vira-blue-on-self-header': {
            foreground: viraColorPalette['vira-blue-60'],
            background: '#daf2ff',
        },
        'vira-blue-on-self-placeholder': {
            foreground: viraColorPalette['vira-blue-50'],
            background: '#daf2ff',
        },
        'vira-blue-on-self-decoration': {
            foreground: viraColorPalette['vira-blue-30'],
            background: '#daf2ff',
        },
        'vira-blue-on-self-invisible': {
            foreground: viraColorPalette['vira-blue-10'],
            background: '#daf2ff',
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
        'vira-purple-background-small-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-purple-90'],
        },
        'vira-purple-background-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-purple-80'],
        },
        'vira-purple-background-non-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-purple-60'],
        },
        'vira-purple-background-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-purple-40'],
        },
        'vira-purple-background-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-purple-30'],
        },
        'vira-purple-background-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-purple-20'],
        },
        'vira-purple-background-invisible': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-purple-5'],
        },
        'vira-purple-on-self-body': {
            foreground: viraColorPalette['vira-purple-90'],
            background: '#f6eaff',
        },
        'vira-purple-on-self-non-body': {
            foreground: viraColorPalette['vira-purple-70'],
            background: '#f6eaff',
        },
        'vira-purple-on-self-header': {
            foreground: viraColorPalette['vira-purple-60'],
            background: '#f6eaff',
        },
        'vira-purple-on-self-placeholder': {
            foreground: viraColorPalette['vira-purple-40'],
            background: '#f6eaff',
        },
        'vira-purple-on-self-decoration': {
            foreground: viraColorPalette['vira-purple-30'],
            background: '#f6eaff',
        },
        'vira-purple-on-self-invisible': {
            foreground: viraColorPalette['vira-purple-10'],
            background: '#f6eaff',
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
        'vira-pink-background-small-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-pink-90'],
        },
        'vira-pink-background-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-pink-80'],
        },
        'vira-pink-background-non-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-pink-60'],
        },
        'vira-pink-background-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-pink-40'],
        },
        'vira-pink-background-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-pink-30'],
        },
        'vira-pink-background-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-pink-20'],
        },
        'vira-pink-background-invisible': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-pink-5'],
        },
        'vira-pink-on-self-body': {
            foreground: viraColorPalette['vira-pink-90'],
            background: '#ffe7fb',
        },
        'vira-pink-on-self-non-body': {
            foreground: viraColorPalette['vira-pink-80'],
            background: '#ffe7fb',
        },
        'vira-pink-on-self-header': {
            foreground: viraColorPalette['vira-pink-60'],
            background: '#ffe7fb',
        },
        'vira-pink-on-self-placeholder': {
            foreground: viraColorPalette['vira-pink-50'],
            background: '#ffe7fb',
        },
        'vira-pink-on-self-decoration': {
            foreground: viraColorPalette['vira-pink-30'],
            background: '#ffe7fb',
        },
        'vira-pink-on-self-invisible': {
            foreground: viraColorPalette['vira-pink-20'],
            background: '#ffe7fb',
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
        'vira-grey-background-small-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-grey-90'],
        },
        'vira-grey-background-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-grey-80'],
        },
        'vira-grey-background-non-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-grey-60'],
        },
        'vira-grey-background-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-grey-40'],
        },
        'vira-grey-background-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-grey-30'],
        },
        'vira-grey-background-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-grey-20'],
        },
        'vira-grey-background-invisible': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-grey-5'],
        },
        'vira-grey-on-self-body': {
            foreground: viraColorPalette['vira-grey-90'],
            background: '#eceff0',
        },
        'vira-grey-on-self-non-body': {
            foreground: viraColorPalette['vira-grey-70'],
            background: '#eceff0',
        },
        'vira-grey-on-self-header': {
            foreground: viraColorPalette['vira-grey-60'],
            background: '#eceff0',
        },
        'vira-grey-on-self-placeholder': {
            foreground: viraColorPalette['vira-grey-40'],
            background: '#eceff0',
        },
        'vira-grey-on-self-decoration': {
            foreground: viraColorPalette['vira-grey-30'],
            background: '#eceff0',
        },
        'vira-grey-on-self-invisible': {
            foreground: viraColorPalette['vira-grey-10'],
            background: '#eceff0',
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
            background: 'black',
        },
        'vira-red-foreground-body': {
            foreground: viraColorPalette['vira-red-20'],
            background: 'black',
        },
        'vira-red-foreground-non-body': {
            foreground: viraColorPalette['vira-red-30'],
            background: 'black',
        },
        'vira-red-foreground-header': {
            background: 'black',
        },
        'vira-red-foreground-placeholder': {
            foreground: viraColorPalette['vira-red-60'],
            background: 'black',
        },
        'vira-red-foreground-decoration': {
            foreground: viraColorPalette['vira-red-80'],
            background: 'black',
        },
        'vira-red-foreground-invisible': {
            foreground: viraColorPalette['vira-red-90'],
            background: 'black',
        },
        'vira-red-background-small-body': {
            foreground: 'black',
            background: viraColorPalette['vira-red-5'],
        },
        'vira-red-background-body': {
            foreground: 'black',
            background: viraColorPalette['vira-red-20'],
        },
        'vira-red-background-non-body': {
            foreground: 'black',
            background: viraColorPalette['vira-red-30'],
        },
        'vira-red-background-header': {
            foreground: 'black',
            background: viraColorPalette['vira-red-50'],
        },
        'vira-red-background-placeholder': {
            foreground: 'black',
            background: viraColorPalette['vira-red-60'],
        },
        'vira-red-background-decoration': {
            foreground: 'black',
            background: viraColorPalette['vira-red-80'],
        },
        'vira-red-background-invisible': {
            foreground: 'black',
            background: viraColorPalette['vira-red-90'],
        },
        'vira-red-on-self-body': {
            foreground: viraColorPalette['vira-red-10'],
            background: '#760003',
        },
        'vira-red-on-self-non-body': {
            foreground: viraColorPalette['vira-red-20'],
            background: '#760003',
        },
        'vira-red-on-self-header': {
            foreground: viraColorPalette['vira-red-40'],
            background: '#760003',
        },
        'vira-red-on-self-placeholder': {
            background: '#760003',
        },
        'vira-red-on-self-decoration': {
            foreground: viraColorPalette['vira-red-70'],
            background: '#760003',
        },
        'vira-red-on-self-invisible': {
            foreground: viraColorPalette['vira-red-80'],
            background: '#760003',
        },
        'vira-orange-foreground-small-body': {
            foreground: viraColorPalette['vira-orange-5'],
            background: 'black',
        },
        'vira-orange-foreground-body': {
            foreground: viraColorPalette['vira-orange-20'],
            background: 'black',
        },
        'vira-orange-foreground-non-body': {
            foreground: viraColorPalette['vira-orange-30'],
            background: 'black',
        },
        'vira-orange-foreground-header': {
            background: 'black',
        },
        'vira-orange-foreground-placeholder': {
            foreground: viraColorPalette['vira-orange-60'],
            background: 'black',
        },
        'vira-orange-foreground-decoration': {
            foreground: viraColorPalette['vira-orange-80'],
            background: 'black',
        },
        'vira-orange-foreground-invisible': {
            foreground: viraColorPalette['vira-orange-90'],
            background: 'black',
        },
        'vira-orange-background-small-body': {
            foreground: 'black',
            background: viraColorPalette['vira-orange-5'],
        },
        'vira-orange-background-body': {
            foreground: 'black',
            background: viraColorPalette['vira-orange-20'],
        },
        'vira-orange-background-non-body': {
            foreground: 'black',
            background: viraColorPalette['vira-orange-30'],
        },
        'vira-orange-background-header': {
            foreground: 'black',
            background: viraColorPalette['vira-orange-50'],
        },
        'vira-orange-background-placeholder': {
            foreground: 'black',
            background: viraColorPalette['vira-orange-60'],
        },
        'vira-orange-background-decoration': {
            foreground: 'black',
            background: viraColorPalette['vira-orange-80'],
        },
        'vira-orange-background-invisible': {
            foreground: 'black',
            background: viraColorPalette['vira-orange-90'],
        },
        'vira-orange-on-self-body': {
            foreground: viraColorPalette['vira-orange-10'],
            background: '#6a2500',
        },
        'vira-orange-on-self-non-body': {
            foreground: viraColorPalette['vira-orange-20'],
            background: '#6a2500',
        },
        'vira-orange-on-self-header': {
            foreground: viraColorPalette['vira-orange-40'],
            background: '#6a2500',
        },
        'vira-orange-on-self-placeholder': {
            background: '#6a2500',
        },
        'vira-orange-on-self-decoration': {
            foreground: viraColorPalette['vira-orange-70'],
            background: '#6a2500',
        },
        'vira-orange-on-self-invisible': {
            foreground: viraColorPalette['vira-orange-80'],
            background: '#6a2500',
        },
        'vira-yellow-foreground-small-body': {
            foreground: viraColorPalette['vira-yellow-5'],
            background: 'black',
        },
        'vira-yellow-foreground-body': {
            foreground: viraColorPalette['vira-yellow-20'],
            background: 'black',
        },
        'vira-yellow-foreground-non-body': {
            foreground: viraColorPalette['vira-yellow-30'],
            background: 'black',
        },
        'vira-yellow-foreground-header': {
            background: 'black',
        },
        'vira-yellow-foreground-placeholder': {
            foreground: viraColorPalette['vira-yellow-60'],
            background: 'black',
        },
        'vira-yellow-foreground-decoration': {
            foreground: viraColorPalette['vira-yellow-80'],
            background: 'black',
        },
        'vira-yellow-foreground-invisible': {
            foreground: viraColorPalette['vira-yellow-90'],
            background: 'black',
        },
        'vira-yellow-background-small-body': {
            foreground: 'black',
            background: viraColorPalette['vira-yellow-5'],
        },
        'vira-yellow-background-body': {
            foreground: 'black',
            background: viraColorPalette['vira-yellow-20'],
        },
        'vira-yellow-background-non-body': {
            foreground: 'black',
            background: viraColorPalette['vira-yellow-30'],
        },
        'vira-yellow-background-header': {
            foreground: 'black',
            background: viraColorPalette['vira-yellow-50'],
        },
        'vira-yellow-background-placeholder': {
            foreground: 'black',
            background: viraColorPalette['vira-yellow-60'],
        },
        'vira-yellow-background-decoration': {
            foreground: 'black',
            background: viraColorPalette['vira-yellow-80'],
        },
        'vira-yellow-background-invisible': {
            foreground: 'black',
            background: viraColorPalette['vira-yellow-90'],
        },
        'vira-yellow-on-self-body': {
            foreground: viraColorPalette['vira-yellow-10'],
            background: '#4c3b00',
        },
        'vira-yellow-on-self-non-body': {
            foreground: viraColorPalette['vira-yellow-20'],
            background: '#4c3b00',
        },
        'vira-yellow-on-self-header': {
            foreground: viraColorPalette['vira-yellow-40'],
            background: '#4c3b00',
        },
        'vira-yellow-on-self-placeholder': {
            background: '#4c3b00',
        },
        'vira-yellow-on-self-decoration': {
            foreground: viraColorPalette['vira-yellow-70'],
            background: '#4c3b00',
        },
        'vira-yellow-on-self-invisible': {
            foreground: viraColorPalette['vira-yellow-80'],
            background: '#4c3b00',
        },
        'vira-green-foreground-small-body': {
            foreground: viraColorPalette['vira-green-5'],
            background: 'black',
        },
        'vira-green-foreground-body': {
            foreground: viraColorPalette['vira-green-20'],
            background: 'black',
        },
        'vira-green-foreground-non-body': {
            foreground: viraColorPalette['vira-green-30'],
            background: 'black',
        },
        'vira-green-foreground-header': {
            background: 'black',
        },
        'vira-green-foreground-placeholder': {
            foreground: viraColorPalette['vira-green-60'],
            background: 'black',
        },
        'vira-green-foreground-decoration': {
            foreground: viraColorPalette['vira-green-80'],
            background: 'black',
        },
        'vira-green-foreground-invisible': {
            foreground: viraColorPalette['vira-green-90'],
            background: 'black',
        },
        'vira-green-background-small-body': {
            foreground: 'black',
            background: viraColorPalette['vira-green-5'],
        },
        'vira-green-background-body': {
            foreground: 'black',
            background: viraColorPalette['vira-green-20'],
        },
        'vira-green-background-non-body': {
            foreground: 'black',
            background: viraColorPalette['vira-green-30'],
        },
        'vira-green-background-header': {
            foreground: 'black',
            background: viraColorPalette['vira-green-50'],
        },
        'vira-green-background-placeholder': {
            foreground: 'black',
            background: viraColorPalette['vira-green-60'],
        },
        'vira-green-background-decoration': {
            foreground: 'black',
            background: viraColorPalette['vira-green-80'],
        },
        'vira-green-background-invisible': {
            foreground: 'black',
            background: viraColorPalette['vira-green-90'],
        },
        'vira-green-on-self-body': {
            foreground: viraColorPalette['vira-green-10'],
            background: '#004700',
        },
        'vira-green-on-self-non-body': {
            foreground: viraColorPalette['vira-green-20'],
            background: '#004700',
        },
        'vira-green-on-self-header': {
            foreground: viraColorPalette['vira-green-40'],
            background: '#004700',
        },
        'vira-green-on-self-placeholder': {
            foreground: viraColorPalette['vira-green-50'],
            background: '#004700',
        },
        'vira-green-on-self-decoration': {
            foreground: viraColorPalette['vira-green-70'],
            background: '#004700',
        },
        'vira-green-on-self-invisible': {
            foreground: viraColorPalette['vira-green-80'],
            background: '#004700',
        },
        'vira-teal-foreground-small-body': {
            foreground: viraColorPalette['vira-teal-5'],
            background: 'black',
        },
        'vira-teal-foreground-body': {
            foreground: viraColorPalette['vira-teal-20'],
            background: 'black',
        },
        'vira-teal-foreground-non-body': {
            foreground: viraColorPalette['vira-teal-30'],
            background: 'black',
        },
        'vira-teal-foreground-header': {
            background: 'black',
        },
        'vira-teal-foreground-placeholder': {
            foreground: viraColorPalette['vira-teal-60'],
            background: 'black',
        },
        'vira-teal-foreground-decoration': {
            foreground: viraColorPalette['vira-teal-80'],
            background: 'black',
        },
        'vira-teal-foreground-invisible': {
            foreground: viraColorPalette['vira-teal-90'],
            background: 'black',
        },
        'vira-teal-background-small-body': {
            foreground: 'black',
            background: viraColorPalette['vira-teal-5'],
        },
        'vira-teal-background-body': {
            foreground: 'black',
            background: viraColorPalette['vira-teal-20'],
        },
        'vira-teal-background-non-body': {
            foreground: 'black',
            background: viraColorPalette['vira-teal-30'],
        },
        'vira-teal-background-header': {
            foreground: 'black',
            background: viraColorPalette['vira-teal-50'],
        },
        'vira-teal-background-placeholder': {
            foreground: 'black',
            background: viraColorPalette['vira-teal-60'],
        },
        'vira-teal-background-decoration': {
            foreground: 'black',
            background: viraColorPalette['vira-teal-80'],
        },
        'vira-teal-background-invisible': {
            foreground: 'black',
            background: viraColorPalette['vira-teal-90'],
        },
        'vira-teal-on-self-body': {
            foreground: viraColorPalette['vira-teal-10'],
            background: '#004442',
        },
        'vira-teal-on-self-non-body': {
            foreground: viraColorPalette['vira-teal-20'],
            background: '#004442',
        },
        'vira-teal-on-self-header': {
            foreground: viraColorPalette['vira-teal-40'],
            background: '#004442',
        },
        'vira-teal-on-self-placeholder': {
            foreground: viraColorPalette['vira-teal-50'],
            background: '#004442',
        },
        'vira-teal-on-self-decoration': {
            foreground: viraColorPalette['vira-teal-70'],
            background: '#004442',
        },
        'vira-teal-on-self-invisible': {
            foreground: viraColorPalette['vira-teal-80'],
            background: '#004442',
        },
        'vira-blue-foreground-small-body': {
            foreground: viraColorPalette['vira-blue-5'],
            background: 'black',
        },
        'vira-blue-foreground-body': {
            foreground: viraColorPalette['vira-blue-20'],
            background: 'black',
        },
        'vira-blue-foreground-non-body': {
            foreground: viraColorPalette['vira-blue-30'],
            background: 'black',
        },
        'vira-blue-foreground-header': {
            background: 'black',
        },
        'vira-blue-foreground-placeholder': {
            foreground: viraColorPalette['vira-blue-60'],
            background: 'black',
        },
        'vira-blue-foreground-decoration': {
            foreground: viraColorPalette['vira-blue-80'],
            background: 'black',
        },
        'vira-blue-foreground-invisible': {
            foreground: viraColorPalette['vira-blue-90'],
            background: 'black',
        },
        'vira-blue-background-small-body': {
            foreground: 'black',
            background: viraColorPalette['vira-blue-5'],
        },
        'vira-blue-background-body': {
            foreground: 'black',
            background: viraColorPalette['vira-blue-20'],
        },
        'vira-blue-background-non-body': {
            foreground: 'black',
            background: viraColorPalette['vira-blue-30'],
        },
        'vira-blue-background-header': {
            foreground: 'black',
            background: viraColorPalette['vira-blue-50'],
        },
        'vira-blue-background-placeholder': {
            foreground: 'black',
            background: viraColorPalette['vira-blue-60'],
        },
        'vira-blue-background-decoration': {
            foreground: 'black',
            background: viraColorPalette['vira-blue-80'],
        },
        'vira-blue-background-invisible': {
            foreground: 'black',
            background: viraColorPalette['vira-blue-90'],
        },
        'vira-blue-on-self-body': {
            foreground: viraColorPalette['vira-blue-10'],
            background: '#00358a',
        },
        'vira-blue-on-self-non-body': {
            foreground: viraColorPalette['vira-blue-20'],
            background: '#00358a',
        },
        'vira-blue-on-self-header': {
            foreground: viraColorPalette['vira-blue-40'],
            background: '#00358a',
        },
        'vira-blue-on-self-placeholder': {
            background: '#00358a',
        },
        'vira-blue-on-self-decoration': {
            foreground: viraColorPalette['vira-blue-70'],
            background: '#00358a',
        },
        'vira-blue-on-self-invisible': {
            foreground: viraColorPalette['vira-blue-80'],
            background: '#00358a',
        },
        'vira-purple-foreground-small-body': {
            foreground: viraColorPalette['vira-purple-5'],
            background: 'black',
        },
        'vira-purple-foreground-body': {
            foreground: viraColorPalette['vira-purple-20'],
            background: 'black',
        },
        'vira-purple-foreground-non-body': {
            foreground: viraColorPalette['vira-purple-30'],
            background: 'black',
        },
        'vira-purple-foreground-header': {
            background: 'black',
        },
        'vira-purple-foreground-placeholder': {
            foreground: viraColorPalette['vira-purple-60'],
            background: 'black',
        },
        'vira-purple-foreground-decoration': {
            foreground: viraColorPalette['vira-purple-80'],
            background: 'black',
        },
        'vira-purple-foreground-invisible': {
            foreground: viraColorPalette['vira-purple-90'],
            background: 'black',
        },
        'vira-purple-background-small-body': {
            foreground: 'black',
            background: viraColorPalette['vira-purple-5'],
        },
        'vira-purple-background-body': {
            foreground: 'black',
            background: viraColorPalette['vira-purple-20'],
        },
        'vira-purple-background-non-body': {
            foreground: 'black',
            background: viraColorPalette['vira-purple-30'],
        },
        'vira-purple-background-header': {
            foreground: 'black',
            background: viraColorPalette['vira-purple-50'],
        },
        'vira-purple-background-placeholder': {
            foreground: 'black',
            background: viraColorPalette['vira-purple-60'],
        },
        'vira-purple-background-decoration': {
            foreground: 'black',
            background: viraColorPalette['vira-purple-80'],
        },
        'vira-purple-background-invisible': {
            foreground: 'black',
            background: viraColorPalette['vira-purple-90'],
        },
        'vira-purple-on-self-body': {
            foreground: viraColorPalette['vira-purple-10'],
            background: '#500095',
        },
        'vira-purple-on-self-non-body': {
            foreground: viraColorPalette['vira-purple-20'],
            background: '#500095',
        },
        'vira-purple-on-self-header': {
            foreground: viraColorPalette['vira-purple-40'],
            background: '#500095',
        },
        'vira-purple-on-self-placeholder': {
            foreground: viraColorPalette['vira-purple-50'],
            background: '#500095',
        },
        'vira-purple-on-self-decoration': {
            foreground: viraColorPalette['vira-purple-70'],
            background: '#500095',
        },
        'vira-purple-on-self-invisible': {
            foreground: viraColorPalette['vira-purple-80'],
            background: '#500095',
        },
        'vira-pink-foreground-small-body': {
            foreground: viraColorPalette['vira-pink-5'],
            background: 'black',
        },
        'vira-pink-foreground-body': {
            foreground: viraColorPalette['vira-pink-20'],
            background: 'black',
        },
        'vira-pink-foreground-non-body': {
            foreground: viraColorPalette['vira-pink-30'],
            background: 'black',
        },
        'vira-pink-foreground-header': {
            background: 'black',
        },
        'vira-pink-foreground-placeholder': {
            foreground: viraColorPalette['vira-pink-60'],
            background: 'black',
        },
        'vira-pink-foreground-decoration': {
            foreground: viraColorPalette['vira-pink-80'],
            background: 'black',
        },
        'vira-pink-foreground-invisible': {
            foreground: viraColorPalette['vira-pink-90'],
            background: 'black',
        },
        'vira-pink-background-small-body': {
            foreground: 'black',
            background: viraColorPalette['vira-pink-5'],
        },
        'vira-pink-background-body': {
            foreground: 'black',
            background: viraColorPalette['vira-pink-20'],
        },
        'vira-pink-background-non-body': {
            foreground: 'black',
            background: viraColorPalette['vira-pink-30'],
        },
        'vira-pink-background-header': {
            foreground: 'black',
            background: viraColorPalette['vira-pink-50'],
        },
        'vira-pink-background-placeholder': {
            foreground: 'black',
            background: viraColorPalette['vira-pink-60'],
        },
        'vira-pink-background-decoration': {
            foreground: 'black',
            background: viraColorPalette['vira-pink-80'],
        },
        'vira-pink-background-invisible': {
            foreground: 'black',
            background: viraColorPalette['vira-pink-90'],
        },
        'vira-pink-on-self-body': {
            foreground: viraColorPalette['vira-pink-10'],
            background: '#6e004f',
        },
        'vira-pink-on-self-non-body': {
            foreground: viraColorPalette['vira-pink-20'],
            background: '#6e004f',
        },
        'vira-pink-on-self-header': {
            foreground: viraColorPalette['vira-pink-40'],
            background: '#6e004f',
        },
        'vira-pink-on-self-placeholder': {
            background: '#6e004f',
        },
        'vira-pink-on-self-decoration': {
            foreground: viraColorPalette['vira-pink-70'],
            background: '#6e004f',
        },
        'vira-pink-on-self-invisible': {
            foreground: viraColorPalette['vira-pink-80'],
            background: '#6e004f',
        },
        'vira-grey-foreground-small-body': {
            foreground: viraColorPalette['vira-grey-5'],
            background: 'black',
        },
        'vira-grey-foreground-body': {
            foreground: viraColorPalette['vira-grey-20'],
            background: 'black',
        },
        'vira-grey-foreground-non-body': {
            foreground: viraColorPalette['vira-grey-30'],
            background: 'black',
        },
        'vira-grey-foreground-header': {
            background: 'black',
        },
        'vira-grey-foreground-placeholder': {
            foreground: viraColorPalette['vira-grey-60'],
            background: 'black',
        },
        'vira-grey-foreground-decoration': {
            foreground: viraColorPalette['vira-grey-80'],
            background: 'black',
        },
        'vira-grey-foreground-invisible': {
            foreground: viraColorPalette['vira-grey-90'],
            background: 'black',
        },
        'vira-grey-background-small-body': {
            foreground: 'black',
            background: viraColorPalette['vira-grey-5'],
        },
        'vira-grey-background-body': {
            foreground: 'black',
            background: viraColorPalette['vira-grey-20'],
        },
        'vira-grey-background-non-body': {
            foreground: 'black',
            background: viraColorPalette['vira-grey-30'],
        },
        'vira-grey-background-header': {
            foreground: 'black',
            background: viraColorPalette['vira-grey-50'],
        },
        'vira-grey-background-placeholder': {
            foreground: 'black',
            background: viraColorPalette['vira-grey-60'],
        },
        'vira-grey-background-decoration': {
            foreground: 'black',
            background: viraColorPalette['vira-grey-80'],
        },
        'vira-grey-background-invisible': {
            foreground: 'black',
            background: viraColorPalette['vira-grey-90'],
        },
        'vira-grey-on-self-body': {
            foreground: viraColorPalette['vira-grey-10'],
            background: '#363f43',
        },
        'vira-grey-on-self-non-body': {
            foreground: viraColorPalette['vira-grey-20'],
            background: '#363f43',
        },
        'vira-grey-on-self-header': {
            foreground: viraColorPalette['vira-grey-40'],
            background: '#363f43',
        },
        'vira-grey-on-self-placeholder': {
            foreground: viraColorPalette['vira-grey-50'],
            background: '#363f43',
        },
        'vira-grey-on-self-decoration': {
            foreground: viraColorPalette['vira-grey-70'],
            background: '#363f43',
        },
        'vira-grey-on-self-invisible': {
            foreground: viraColorPalette['vira-grey-80'],
            background: '#363f43',
        },
    },
});
