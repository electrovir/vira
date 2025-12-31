import {defineColorTheme} from 'theme-vir';
import {viraColorPalette} from './vira-color-palette.js';

export const viraColorTheme = defineColorTheme(
    {
        foreground: 'black',
        background: 'white',
    },
    {
        'vira-teal-ahead-background-body': {
            foreground: viraColorPalette['vira-teal-70'],
        },
        'vira-teal-ahead-background-header': {
            foreground: viraColorPalette['vira-teal-50'],
        },
        'vira-teal-ahead-background-placeholder': {
            foreground: viraColorPalette['vira-teal-40'],
        },
        'vira-teal-ahead-background-decoration': {
            foreground: viraColorPalette['vira-teal-20'],
        },
        'vira-teal-behind-background-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-teal-70'],
        },
        'vira-teal-behind-background-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-teal-50'],
        },
        'vira-teal-behind-background-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-teal-30'],
        },
        'vira-teal-behind-background-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-teal-20'],
        },
        'vira-teal-ahead-foreground-body': {
            foreground: viraColorPalette['vira-teal-20'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-teal-ahead-foreground-header': {
            foreground: viraColorPalette['vira-teal-50'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-teal-ahead-foreground-placeholder': {
            foreground: viraColorPalette['vira-teal-60'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-teal-ahead-foreground-decoration': {
            foreground: viraColorPalette['vira-teal-70'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-teal-behind-foreground-body': {
            background: viraColorPalette['vira-teal-20'],
        },
        'vira-teal-behind-foreground-header': {
            background: viraColorPalette['vira-teal-50'],
        },
        'vira-teal-behind-foreground-placeholder': {
            background: viraColorPalette['vira-teal-60'],
        },
        'vira-teal-behind-foreground-decoration': {
            background: viraColorPalette['vira-teal-70'],
        },
        'vira-teal-self-light-front-body': {
            foreground: '#c9f6ee',
            background: viraColorPalette['vira-teal-80'],
        },
        'vira-teal-self-light-front-header': {
            foreground: '#c9f6ee',
            background: viraColorPalette['vira-teal-60'],
        },
        'vira-teal-self-light-front-placeholder': {
            foreground: '#c9f6ee',
            background: viraColorPalette['vira-teal-50'],
        },
        'vira-teal-self-light-front-decoration': {
            foreground: '#c9f6ee',
            background: viraColorPalette['vira-teal-30'],
        },
        'vira-teal-self-light-back-body': {
            foreground: viraColorPalette['vira-teal-90'],
            background: '#c9f6ee',
        },
        'vira-teal-self-light-back-header': {
            foreground: viraColorPalette['vira-teal-60'],
            background: '#c9f6ee',
        },
        'vira-teal-self-light-back-placeholder': {
            foreground: viraColorPalette['vira-teal-50'],
            background: '#c9f6ee',
        },
        'vira-teal-self-light-back-decoration': {
            foreground: viraColorPalette['vira-teal-40'],
            background: '#c9f6ee',
        },
        'vira-blue-ahead-background-body': {
            foreground: viraColorPalette['vira-blue-70'],
        },
        'vira-blue-ahead-background-header': {
            foreground: viraColorPalette['vira-blue-50'],
        },
        'vira-blue-ahead-background-placeholder': {
            foreground: viraColorPalette['vira-blue-40'],
        },
        'vira-blue-ahead-background-decoration': {
            foreground: viraColorPalette['vira-blue-30'],
        },
        'vira-blue-behind-background-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-blue-70'],
        },
        'vira-blue-behind-background-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-blue-50'],
        },
        'vira-blue-behind-background-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-blue-40'],
        },
        'vira-blue-behind-background-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-blue-20'],
        },
        'vira-blue-ahead-foreground-body': {
            foreground: viraColorPalette['vira-blue-20'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-blue-ahead-foreground-header': {
            foreground: viraColorPalette['vira-blue-50'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-blue-ahead-foreground-placeholder': {
            foreground: viraColorPalette['vira-blue-60'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-blue-ahead-foreground-decoration': {
            foreground: viraColorPalette['vira-blue-70'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-blue-behind-foreground-body': {
            background: viraColorPalette['vira-blue-20'],
        },
        'vira-blue-behind-foreground-header': {
            background: viraColorPalette['vira-blue-50'],
        },
        'vira-blue-behind-foreground-placeholder': {
            background: viraColorPalette['vira-blue-60'],
        },
        'vira-blue-behind-foreground-decoration': {
            background: viraColorPalette['vira-blue-70'],
        },
        'vira-blue-self-light-front-body': {
            foreground: '#ddf0f9',
            background: viraColorPalette['vira-blue-80'],
        },
        'vira-blue-self-light-front-header': {
            foreground: '#ddf0f9',
            background: viraColorPalette['vira-blue-60'],
        },
        'vira-blue-self-light-front-placeholder': {
            foreground: '#ddf0f9',
            background: viraColorPalette['vira-blue-50'],
        },
        'vira-blue-self-light-front-decoration': {
            foreground: '#ddf0f9',
            background: viraColorPalette['vira-blue-30'],
        },
        'vira-blue-self-light-back-body': {
            foreground: viraColorPalette['vira-blue-80'],
            background: '#ddf0f9',
        },
        'vira-blue-self-light-back-header': {
            foreground: viraColorPalette['vira-blue-60'],
            background: '#ddf0f9',
        },
        'vira-blue-self-light-back-placeholder': {
            foreground: viraColorPalette['vira-blue-50'],
            background: '#ddf0f9',
        },
        'vira-blue-self-light-back-decoration': {
            foreground: viraColorPalette['vira-blue-40'],
            background: '#ddf0f9',
        },
        'vira-purple-ahead-background-body': {
            foreground: viraColorPalette['vira-purple-70'],
        },
        'vira-purple-ahead-background-header': {
            foreground: viraColorPalette['vira-purple-50'],
        },
        'vira-purple-ahead-background-placeholder': {
            foreground: viraColorPalette['vira-purple-40'],
        },
        'vira-purple-ahead-background-decoration': {
            foreground: viraColorPalette['vira-purple-30'],
        },
        'vira-purple-behind-background-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-purple-70'],
        },
        'vira-purple-behind-background-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-purple-50'],
        },
        'vira-purple-behind-background-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-purple-40'],
        },
        'vira-purple-behind-background-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-purple-20'],
        },
        'vira-purple-ahead-foreground-body': {
            foreground: viraColorPalette['vira-purple-20'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-purple-ahead-foreground-header': {
            foreground: viraColorPalette['vira-purple-50'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-purple-ahead-foreground-placeholder': {
            foreground: viraColorPalette['vira-purple-60'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-purple-ahead-foreground-decoration': {
            foreground: viraColorPalette['vira-purple-70'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-purple-behind-foreground-body': {
            background: viraColorPalette['vira-purple-20'],
        },
        'vira-purple-behind-foreground-header': {
            background: viraColorPalette['vira-purple-50'],
        },
        'vira-purple-behind-foreground-placeholder': {
            background: viraColorPalette['vira-purple-60'],
        },
        'vira-purple-behind-foreground-decoration': {
            background: viraColorPalette['vira-purple-70'],
        },
        'vira-purple-self-light-front-body': {
            foreground: '#f0eafb',
            background: viraColorPalette['vira-purple-80'],
        },
        'vira-purple-self-light-front-header': {
            foreground: '#f0eafb',
            background: viraColorPalette['vira-purple-60'],
        },
        'vira-purple-self-light-front-placeholder': {
            foreground: '#f0eafb',
            background: viraColorPalette['vira-purple-50'],
        },
        'vira-purple-self-light-front-decoration': {
            foreground: '#f0eafb',
            background: viraColorPalette['vira-purple-30'],
        },
        'vira-purple-self-light-back-body': {
            foreground: viraColorPalette['vira-purple-90'],
            background: '#f0eafb',
        },
        'vira-purple-self-light-back-header': {
            foreground: viraColorPalette['vira-purple-60'],
            background: '#f0eafb',
        },
        'vira-purple-self-light-back-placeholder': {
            foreground: viraColorPalette['vira-purple-50'],
            background: '#f0eafb',
        },
        'vira-purple-self-light-back-decoration': {
            foreground: viraColorPalette['vira-purple-40'],
            background: '#f0eafb',
        },
        'vira-pink-ahead-background-body': {
            foreground: viraColorPalette['vira-pink-70'],
        },
        'vira-pink-ahead-background-header': {
            foreground: viraColorPalette['vira-pink-50'],
        },
        'vira-pink-ahead-background-placeholder': {
            foreground: viraColorPalette['vira-pink-40'],
        },
        'vira-pink-ahead-background-decoration': {
            foreground: viraColorPalette['vira-pink-30'],
        },
        'vira-pink-behind-background-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-pink-70'],
        },
        'vira-pink-behind-background-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-pink-50'],
        },
        'vira-pink-behind-background-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-pink-40'],
        },
        'vira-pink-behind-background-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-pink-20'],
        },
        'vira-pink-ahead-foreground-body': {
            foreground: viraColorPalette['vira-pink-20'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-pink-ahead-foreground-header': {
            foreground: viraColorPalette['vira-pink-50'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-pink-ahead-foreground-placeholder': {
            foreground: viraColorPalette['vira-pink-60'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-pink-ahead-foreground-decoration': {
            foreground: viraColorPalette['vira-pink-70'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-pink-behind-foreground-body': {
            background: viraColorPalette['vira-pink-20'],
        },
        'vira-pink-behind-foreground-header': {
            background: viraColorPalette['vira-pink-50'],
        },
        'vira-pink-behind-foreground-placeholder': {
            background: viraColorPalette['vira-pink-60'],
        },
        'vira-pink-behind-foreground-decoration': {
            background: viraColorPalette['vira-pink-70'],
        },
        'vira-pink-self-light-front-body': {
            foreground: '#fbe7f9',
            background: viraColorPalette['vira-pink-80'],
        },
        'vira-pink-self-light-front-header': {
            foreground: '#fbe7f9',
            background: viraColorPalette['vira-pink-60'],
        },
        'vira-pink-self-light-front-placeholder': {
            foreground: '#fbe7f9',
            background: viraColorPalette['vira-pink-50'],
        },
        'vira-pink-self-light-front-decoration': {
            foreground: '#fbe7f9',
            background: viraColorPalette['vira-pink-30'],
        },
        'vira-pink-self-light-back-body': {
            foreground: viraColorPalette['vira-pink-80'],
            background: '#fbe7f9',
        },
        'vira-pink-self-light-back-header': {
            foreground: viraColorPalette['vira-pink-60'],
            background: '#fbe7f9',
        },
        'vira-pink-self-light-back-placeholder': {
            foreground: viraColorPalette['vira-pink-50'],
            background: '#fbe7f9',
        },
        'vira-pink-self-light-back-decoration': {
            foreground: viraColorPalette['vira-pink-40'],
            background: '#fbe7f9',
        },
        'vira-red-ahead-background-body': {
            foreground: viraColorPalette['vira-red-70'],
        },
        'vira-red-ahead-background-header': {
            foreground: viraColorPalette['vira-red-50'],
        },
        'vira-red-ahead-background-placeholder': {
            foreground: viraColorPalette['vira-red-40'],
        },
        'vira-red-ahead-background-decoration': {
            foreground: viraColorPalette['vira-red-30'],
        },
        'vira-red-behind-background-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-red-70'],
        },
        'vira-red-behind-background-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-red-50'],
        },
        'vira-red-behind-background-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-red-40'],
        },
        'vira-red-behind-background-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-red-20'],
        },
        'vira-red-ahead-foreground-body': {
            foreground: viraColorPalette['vira-red-20'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-red-ahead-foreground-header': {
            foreground: viraColorPalette['vira-red-50'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-red-ahead-foreground-placeholder': {
            foreground: viraColorPalette['vira-red-60'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-red-ahead-foreground-decoration': {
            foreground: viraColorPalette['vira-red-70'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-red-behind-foreground-body': {
            background: viraColorPalette['vira-red-20'],
        },
        'vira-red-behind-foreground-header': {
            background: viraColorPalette['vira-red-50'],
        },
        'vira-red-behind-foreground-placeholder': {
            background: viraColorPalette['vira-red-60'],
        },
        'vira-red-behind-foreground-decoration': {
            background: viraColorPalette['vira-red-70'],
        },
        'vira-red-self-light-front-body': {
            foreground: '#fbe8ec',
            background: viraColorPalette['vira-red-90'],
        },
        'vira-red-self-light-front-header': {
            foreground: '#fbe8ec',
            background: viraColorPalette['vira-red-60'],
        },
        'vira-red-self-light-front-placeholder': {
            foreground: '#fbe8ec',
            background: viraColorPalette['vira-red-50'],
        },
        'vira-red-self-light-front-decoration': {
            foreground: '#fbe8ec',
            background: viraColorPalette['vira-red-30'],
        },
        'vira-red-self-light-back-body': {
            foreground: viraColorPalette['vira-red-90'],
            background: '#fbe8ec',
        },
        'vira-red-self-light-back-header': {
            foreground: viraColorPalette['vira-red-60'],
            background: '#fbe8ec',
        },
        'vira-red-self-light-back-placeholder': {
            foreground: viraColorPalette['vira-red-50'],
            background: '#fbe8ec',
        },
        'vira-red-self-light-back-decoration': {
            foreground: viraColorPalette['vira-red-40'],
            background: '#fbe8ec',
        },
        'vira-orange-ahead-background-body': {
            foreground: viraColorPalette['vira-orange-70'],
        },
        'vira-orange-ahead-background-header': {
            foreground: viraColorPalette['vira-orange-50'],
        },
        'vira-orange-ahead-background-placeholder': {
            foreground: viraColorPalette['vira-orange-40'],
        },
        'vira-orange-ahead-background-decoration': {
            foreground: viraColorPalette['vira-orange-30'],
        },
        'vira-orange-behind-background-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-orange-70'],
        },
        'vira-orange-behind-background-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-orange-50'],
        },
        'vira-orange-behind-background-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-orange-40'],
        },
        'vira-orange-behind-background-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-orange-20'],
        },
        'vira-orange-ahead-foreground-body': {
            foreground: viraColorPalette['vira-orange-20'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-orange-ahead-foreground-header': {
            foreground: viraColorPalette['vira-orange-50'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-orange-ahead-foreground-placeholder': {
            foreground: viraColorPalette['vira-orange-60'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-orange-ahead-foreground-decoration': {
            foreground: viraColorPalette['vira-orange-70'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-orange-behind-foreground-body': {
            background: viraColorPalette['vira-orange-20'],
        },
        'vira-orange-behind-foreground-header': {
            background: viraColorPalette['vira-orange-50'],
        },
        'vira-orange-behind-foreground-placeholder': {
            background: viraColorPalette['vira-orange-60'],
        },
        'vira-orange-behind-foreground-decoration': {
            background: viraColorPalette['vira-orange-70'],
        },
        'vira-orange-self-light-front-body': {
            foreground: '#f8ebd9',
            background: viraColorPalette['vira-orange-80'],
        },
        'vira-orange-self-light-front-header': {
            foreground: '#f8ebd9',
            background: viraColorPalette['vira-orange-60'],
        },
        'vira-orange-self-light-front-placeholder': {
            foreground: '#f8ebd9',
            background: viraColorPalette['vira-orange-50'],
        },
        'vira-orange-self-light-front-decoration': {
            foreground: '#f8ebd9',
            background: viraColorPalette['vira-orange-30'],
        },
        'vira-orange-self-light-back-body': {
            foreground: viraColorPalette['vira-orange-80'],
            background: '#f8ebd9',
        },
        'vira-orange-self-light-back-header': {
            foreground: viraColorPalette['vira-orange-60'],
            background: '#f8ebd9',
        },
        'vira-orange-self-light-back-placeholder': {
            foreground: viraColorPalette['vira-orange-50'],
            background: '#f8ebd9',
        },
        'vira-orange-self-light-back-decoration': {
            foreground: viraColorPalette['vira-orange-40'],
            background: '#f8ebd9',
        },
        'vira-green-ahead-background-body': {
            foreground: viraColorPalette['vira-green-70'],
        },
        'vira-green-ahead-background-header': {
            foreground: viraColorPalette['vira-green-50'],
        },
        'vira-green-ahead-background-placeholder': {
            foreground: viraColorPalette['vira-green-40'],
        },
        'vira-green-ahead-background-decoration': {
            foreground: viraColorPalette['vira-green-30'],
        },
        'vira-green-behind-background-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-green-70'],
        },
        'vira-green-behind-background-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-green-50'],
        },
        'vira-green-behind-background-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-green-30'],
        },
        'vira-green-behind-background-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-green-20'],
        },
        'vira-green-ahead-foreground-body': {
            foreground: viraColorPalette['vira-green-20'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-green-ahead-foreground-header': {
            foreground: viraColorPalette['vira-green-50'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-green-ahead-foreground-placeholder': {
            foreground: viraColorPalette['vira-green-60'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-green-ahead-foreground-decoration': {
            foreground: viraColorPalette['vira-green-70'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-green-behind-foreground-body': {
            background: viraColorPalette['vira-green-20'],
        },
        'vira-green-behind-foreground-header': {
            background: viraColorPalette['vira-green-50'],
        },
        'vira-green-behind-foreground-placeholder': {
            background: viraColorPalette['vira-green-60'],
        },
        'vira-green-behind-foreground-decoration': {
            background: viraColorPalette['vira-green-70'],
        },
        'vira-green-self-light-front-body': {
            foreground: '#e2f4bd',
            background: viraColorPalette['vira-green-80'],
        },
        'vira-green-self-light-front-header': {
            foreground: '#e2f4bd',
            background: viraColorPalette['vira-green-60'],
        },
        'vira-green-self-light-front-placeholder': {
            foreground: '#e2f4bd',
            background: viraColorPalette['vira-green-50'],
        },
        'vira-green-self-light-front-decoration': {
            foreground: '#e2f4bd',
            background: viraColorPalette['vira-green-30'],
        },
        'vira-green-self-light-back-body': {
            foreground: viraColorPalette['vira-green-90'],
            background: '#e2f4bd',
        },
        'vira-green-self-light-back-header': {
            foreground: viraColorPalette['vira-green-60'],
            background: '#e2f4bd',
        },
        'vira-green-self-light-back-placeholder': {
            foreground: viraColorPalette['vira-green-50'],
            background: '#e2f4bd',
        },
        'vira-green-self-light-back-decoration': {
            foreground: viraColorPalette['vira-green-40'],
            background: '#e2f4bd',
        },
        'vira-yellow-ahead-background-body': {
            foreground: viraColorPalette['vira-yellow-70'],
        },
        'vira-yellow-ahead-background-header': {
            foreground: viraColorPalette['vira-yellow-50'],
        },
        'vira-yellow-ahead-background-placeholder': {
            foreground: viraColorPalette['vira-yellow-40'],
        },
        'vira-yellow-ahead-background-decoration': {
            foreground: viraColorPalette['vira-yellow-30'],
        },
        'vira-yellow-behind-background-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-yellow-70'],
        },
        'vira-yellow-behind-background-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-yellow-50'],
        },
        'vira-yellow-behind-background-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-yellow-40'],
        },
        'vira-yellow-behind-background-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-yellow-20'],
        },
        'vira-yellow-ahead-foreground-body': {
            foreground: viraColorPalette['vira-yellow-20'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-yellow-ahead-foreground-header': {
            foreground: viraColorPalette['vira-yellow-50'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-yellow-ahead-foreground-placeholder': {
            foreground: viraColorPalette['vira-yellow-60'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-yellow-ahead-foreground-decoration': {
            foreground: viraColorPalette['vira-yellow-70'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-yellow-behind-foreground-body': {
            background: viraColorPalette['vira-yellow-20'],
        },
        'vira-yellow-behind-foreground-header': {
            background: viraColorPalette['vira-yellow-50'],
        },
        'vira-yellow-behind-foreground-placeholder': {
            background: viraColorPalette['vira-yellow-60'],
        },
        'vira-yellow-behind-foreground-decoration': {
            background: viraColorPalette['vira-yellow-70'],
        },
        'vira-yellow-self-light-front-body': {
            foreground: '#f3f199',
            background: viraColorPalette['vira-yellow-90'],
        },
        'vira-yellow-self-light-front-header': {
            foreground: '#f3f199',
            background: viraColorPalette['vira-yellow-60'],
        },
        'vira-yellow-self-light-front-placeholder': {
            foreground: '#f3f199',
            background: viraColorPalette['vira-yellow-50'],
        },
        'vira-yellow-self-light-front-decoration': {
            foreground: '#f3f199',
            background: viraColorPalette['vira-yellow-30'],
        },
        'vira-yellow-self-light-back-body': {
            foreground: viraColorPalette['vira-yellow-90'],
            background: '#f3f199',
        },
        'vira-yellow-self-light-back-header': {
            foreground: viraColorPalette['vira-yellow-60'],
            background: '#f3f199',
        },
        'vira-yellow-self-light-back-placeholder': {
            foreground: viraColorPalette['vira-yellow-50'],
            background: '#f3f199',
        },
        'vira-yellow-self-light-back-decoration': {
            foreground: viraColorPalette['vira-yellow-40'],
            background: '#f3f199',
        },
        'vira-grey-ahead-background-body': {
            foreground: viraColorPalette['vira-grey-70'],
        },
        'vira-grey-ahead-background-header': {
            foreground: viraColorPalette['vira-grey-50'],
        },
        'vira-grey-ahead-background-placeholder': {
            foreground: viraColorPalette['vira-grey-40'],
        },
        'vira-grey-ahead-background-decoration': {
            foreground: viraColorPalette['vira-grey-20'],
        },
        'vira-grey-behind-background-body': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-grey-70'],
        },
        'vira-grey-behind-background-header': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-grey-50'],
        },
        'vira-grey-behind-background-placeholder': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-grey-30'],
        },
        'vira-grey-behind-background-decoration': {
            foreground: {
                refDefaultBackground: true,
            },
            background: viraColorPalette['vira-grey-20'],
        },
        'vira-grey-ahead-foreground-body': {
            foreground: viraColorPalette['vira-grey-20'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-grey-ahead-foreground-header': {
            foreground: viraColorPalette['vira-grey-50'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-grey-ahead-foreground-placeholder': {
            foreground: viraColorPalette['vira-grey-60'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-grey-ahead-foreground-decoration': {
            foreground: viraColorPalette['vira-grey-70'],
            background: {
                refDefaultForeground: true,
            },
        },
        'vira-grey-behind-foreground-body': {
            background: viraColorPalette['vira-grey-20'],
        },
        'vira-grey-behind-foreground-header': {
            background: viraColorPalette['vira-grey-50'],
        },
        'vira-grey-behind-foreground-placeholder': {
            background: viraColorPalette['vira-grey-60'],
        },
        'vira-grey-behind-foreground-decoration': {
            background: viraColorPalette['vira-grey-70'],
        },
        'vira-grey-self-light-front-body': {
            foreground: '#ededed',
            background: viraColorPalette['vira-grey-80'],
        },
        'vira-grey-self-light-front-header': {
            foreground: '#ededed',
            background: viraColorPalette['vira-grey-60'],
        },
        'vira-grey-self-light-front-placeholder': {
            foreground: '#ededed',
            background: viraColorPalette['vira-grey-50'],
        },
        'vira-grey-self-light-front-decoration': {
            foreground: '#ededed',
            background: viraColorPalette['vira-grey-30'],
        },
        'vira-grey-self-light-back-body': {
            foreground: viraColorPalette['vira-grey-80'],
            background: '#ededed',
        },
        'vira-grey-self-light-back-header': {
            foreground: viraColorPalette['vira-grey-60'],
            background: '#ededed',
        },
        'vira-grey-self-light-back-placeholder': {
            foreground: viraColorPalette['vira-grey-50'],
            background: '#ededed',
        },
        'vira-grey-self-light-back-decoration': {
            foreground: viraColorPalette['vira-grey-40'],
            background: '#ededed',
        },
    },
);
