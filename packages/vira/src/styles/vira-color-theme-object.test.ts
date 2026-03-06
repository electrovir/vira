import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {ContrastLevelName} from '@electrovir/color';
import {viraThemeByKeys} from './vira-color-theme-object.js';
import {viraTheme} from './vira-color-theme.js';

describe('viraThemeByKeys', () => {
    it('has all vira theme data by keys', () => {
        assert.deepEquals(viraThemeByKeys, {
            red: {
                foreground: {
                    [ContrastLevelName.SmallBodyText]:
                        viraTheme.colors['vira-red-foreground-small-body'],
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-red-foreground-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-red-foreground-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-red-foreground-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-red-foreground-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-red-foreground-decoration'],
                    [ContrastLevelName.Invisible]:
                        viraTheme.colors['vira-red-foreground-invisible'],
                },
                'behind-bg': {
                    [ContrastLevelName.SmallBodyText]:
                        viraTheme.colors['vira-red-behind-bg-small-body'],
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-red-behind-bg-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-red-behind-bg-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-red-behind-bg-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-red-behind-bg-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-red-behind-bg-decoration'],
                    [ContrastLevelName.Invisible]: viraTheme.colors['vira-red-behind-bg-invisible'],
                },
                'behind-fg': {
                    [ContrastLevelName.SmallBodyText]:
                        viraTheme.colors['vira-red-behind-fg-small-body'],
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-red-behind-fg-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-red-behind-fg-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-red-behind-fg-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-red-behind-fg-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-red-behind-fg-decoration'],
                    [ContrastLevelName.Invisible]: viraTheme.colors['vira-red-behind-fg-invisible'],
                },
                'on-self': {
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-red-on-self-body'],
                    [ContrastLevelName.NonBodyText]: viraTheme.colors['vira-red-on-self-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-red-on-self-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-red-on-self-placeholder'],
                    [ContrastLevelName.Decoration]: viraTheme.colors['vira-red-on-self-decoration'],
                    [ContrastLevelName.Invisible]: viraTheme.colors['vira-red-on-self-invisible'],
                },
            },
            orange: {
                foreground: {
                    [ContrastLevelName.SmallBodyText]:
                        viraTheme.colors['vira-orange-foreground-small-body'],
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-orange-foreground-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-orange-foreground-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-orange-foreground-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-orange-foreground-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-orange-foreground-decoration'],
                    [ContrastLevelName.Invisible]:
                        viraTheme.colors['vira-orange-foreground-invisible'],
                },
                'behind-bg': {
                    [ContrastLevelName.SmallBodyText]:
                        viraTheme.colors['vira-orange-behind-bg-small-body'],
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-orange-behind-bg-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-orange-behind-bg-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-orange-behind-bg-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-orange-behind-bg-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-orange-behind-bg-decoration'],
                    [ContrastLevelName.Invisible]:
                        viraTheme.colors['vira-orange-behind-bg-invisible'],
                },
                'behind-fg': {
                    [ContrastLevelName.SmallBodyText]:
                        viraTheme.colors['vira-orange-behind-fg-small-body'],
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-orange-behind-fg-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-orange-behind-fg-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-orange-behind-fg-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-orange-behind-fg-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-orange-behind-fg-decoration'],
                    [ContrastLevelName.Invisible]:
                        viraTheme.colors['vira-orange-behind-fg-invisible'],
                },
                'on-self': {
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-orange-on-self-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-orange-on-self-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-orange-on-self-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-orange-on-self-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-orange-on-self-decoration'],
                    [ContrastLevelName.Invisible]:
                        viraTheme.colors['vira-orange-on-self-invisible'],
                },
            },
            yellow: {
                foreground: {
                    [ContrastLevelName.SmallBodyText]:
                        viraTheme.colors['vira-yellow-foreground-small-body'],
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-yellow-foreground-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-yellow-foreground-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-yellow-foreground-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-yellow-foreground-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-yellow-foreground-decoration'],
                    [ContrastLevelName.Invisible]:
                        viraTheme.colors['vira-yellow-foreground-invisible'],
                },
                'behind-bg': {
                    [ContrastLevelName.SmallBodyText]:
                        viraTheme.colors['vira-yellow-behind-bg-small-body'],
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-yellow-behind-bg-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-yellow-behind-bg-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-yellow-behind-bg-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-yellow-behind-bg-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-yellow-behind-bg-decoration'],
                    [ContrastLevelName.Invisible]:
                        viraTheme.colors['vira-yellow-behind-bg-invisible'],
                },
                'behind-fg': {
                    [ContrastLevelName.SmallBodyText]:
                        viraTheme.colors['vira-yellow-behind-fg-small-body'],
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-yellow-behind-fg-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-yellow-behind-fg-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-yellow-behind-fg-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-yellow-behind-fg-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-yellow-behind-fg-decoration'],
                    [ContrastLevelName.Invisible]:
                        viraTheme.colors['vira-yellow-behind-fg-invisible'],
                },
                'on-self': {
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-yellow-on-self-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-yellow-on-self-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-yellow-on-self-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-yellow-on-self-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-yellow-on-self-decoration'],
                    [ContrastLevelName.Invisible]:
                        viraTheme.colors['vira-yellow-on-self-invisible'],
                },
            },
            green: {
                foreground: {
                    [ContrastLevelName.SmallBodyText]:
                        viraTheme.colors['vira-green-foreground-small-body'],
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-green-foreground-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-green-foreground-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-green-foreground-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-green-foreground-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-green-foreground-decoration'],
                    [ContrastLevelName.Invisible]:
                        viraTheme.colors['vira-green-foreground-invisible'],
                },
                'behind-bg': {
                    [ContrastLevelName.SmallBodyText]:
                        viraTheme.colors['vira-green-behind-bg-small-body'],
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-green-behind-bg-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-green-behind-bg-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-green-behind-bg-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-green-behind-bg-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-green-behind-bg-decoration'],
                    [ContrastLevelName.Invisible]:
                        viraTheme.colors['vira-green-behind-bg-invisible'],
                },
                'behind-fg': {
                    [ContrastLevelName.SmallBodyText]:
                        viraTheme.colors['vira-green-behind-fg-small-body'],
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-green-behind-fg-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-green-behind-fg-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-green-behind-fg-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-green-behind-fg-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-green-behind-fg-decoration'],
                    [ContrastLevelName.Invisible]:
                        viraTheme.colors['vira-green-behind-fg-invisible'],
                },
                'on-self': {
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-green-on-self-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-green-on-self-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-green-on-self-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-green-on-self-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-green-on-self-decoration'],
                    [ContrastLevelName.Invisible]: viraTheme.colors['vira-green-on-self-invisible'],
                },
            },
            teal: {
                foreground: {
                    [ContrastLevelName.SmallBodyText]:
                        viraTheme.colors['vira-teal-foreground-small-body'],
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-teal-foreground-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-teal-foreground-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-teal-foreground-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-teal-foreground-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-teal-foreground-decoration'],
                    [ContrastLevelName.Invisible]:
                        viraTheme.colors['vira-teal-foreground-invisible'],
                },
                'behind-bg': {
                    [ContrastLevelName.SmallBodyText]:
                        viraTheme.colors['vira-teal-behind-bg-small-body'],
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-teal-behind-bg-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-teal-behind-bg-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-teal-behind-bg-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-teal-behind-bg-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-teal-behind-bg-decoration'],
                    [ContrastLevelName.Invisible]:
                        viraTheme.colors['vira-teal-behind-bg-invisible'],
                },
                'behind-fg': {
                    [ContrastLevelName.SmallBodyText]:
                        viraTheme.colors['vira-teal-behind-fg-small-body'],
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-teal-behind-fg-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-teal-behind-fg-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-teal-behind-fg-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-teal-behind-fg-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-teal-behind-fg-decoration'],
                    [ContrastLevelName.Invisible]:
                        viraTheme.colors['vira-teal-behind-fg-invisible'],
                },
                'on-self': {
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-teal-on-self-body'],
                    [ContrastLevelName.NonBodyText]: viraTheme.colors['vira-teal-on-self-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-teal-on-self-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-teal-on-self-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-teal-on-self-decoration'],
                    [ContrastLevelName.Invisible]: viraTheme.colors['vira-teal-on-self-invisible'],
                },
            },
            blue: {
                foreground: {
                    [ContrastLevelName.SmallBodyText]:
                        viraTheme.colors['vira-blue-foreground-small-body'],
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-blue-foreground-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-blue-foreground-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-blue-foreground-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-blue-foreground-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-blue-foreground-decoration'],
                    [ContrastLevelName.Invisible]:
                        viraTheme.colors['vira-blue-foreground-invisible'],
                },
                'behind-bg': {
                    [ContrastLevelName.SmallBodyText]:
                        viraTheme.colors['vira-blue-behind-bg-small-body'],
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-blue-behind-bg-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-blue-behind-bg-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-blue-behind-bg-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-blue-behind-bg-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-blue-behind-bg-decoration'],
                    [ContrastLevelName.Invisible]:
                        viraTheme.colors['vira-blue-behind-bg-invisible'],
                },
                'behind-fg': {
                    [ContrastLevelName.SmallBodyText]:
                        viraTheme.colors['vira-blue-behind-fg-small-body'],
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-blue-behind-fg-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-blue-behind-fg-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-blue-behind-fg-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-blue-behind-fg-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-blue-behind-fg-decoration'],
                    [ContrastLevelName.Invisible]:
                        viraTheme.colors['vira-blue-behind-fg-invisible'],
                },
                'on-self': {
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-blue-on-self-body'],
                    [ContrastLevelName.NonBodyText]: viraTheme.colors['vira-blue-on-self-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-blue-on-self-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-blue-on-self-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-blue-on-self-decoration'],
                    [ContrastLevelName.Invisible]: viraTheme.colors['vira-blue-on-self-invisible'],
                },
            },
            accent: {
                foreground: {
                    [ContrastLevelName.SmallBodyText]:
                        viraTheme.colors['vira-accent-foreground-small-body'],
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-accent-foreground-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-accent-foreground-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-accent-foreground-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-accent-foreground-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-accent-foreground-decoration'],
                    [ContrastLevelName.Invisible]:
                        viraTheme.colors['vira-accent-foreground-invisible'],
                },
                'behind-bg': {
                    [ContrastLevelName.SmallBodyText]:
                        viraTheme.colors['vira-accent-behind-bg-small-body'],
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-accent-behind-bg-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-accent-behind-bg-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-accent-behind-bg-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-accent-behind-bg-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-accent-behind-bg-decoration'],
                    [ContrastLevelName.Invisible]:
                        viraTheme.colors['vira-accent-behind-bg-invisible'],
                },
                'behind-fg': {
                    [ContrastLevelName.SmallBodyText]:
                        viraTheme.colors['vira-accent-behind-fg-small-body'],
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-accent-behind-fg-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-accent-behind-fg-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-accent-behind-fg-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-accent-behind-fg-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-accent-behind-fg-decoration'],
                    [ContrastLevelName.Invisible]:
                        viraTheme.colors['vira-accent-behind-fg-invisible'],
                },
                'on-self': {
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-accent-on-self-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-accent-on-self-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-accent-on-self-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-accent-on-self-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-accent-on-self-decoration'],
                    [ContrastLevelName.Invisible]:
                        viraTheme.colors['vira-accent-on-self-invisible'],
                },
            },
            purple: {
                foreground: {
                    [ContrastLevelName.SmallBodyText]:
                        viraTheme.colors['vira-purple-foreground-small-body'],
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-purple-foreground-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-purple-foreground-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-purple-foreground-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-purple-foreground-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-purple-foreground-decoration'],
                    [ContrastLevelName.Invisible]:
                        viraTheme.colors['vira-purple-foreground-invisible'],
                },
                'behind-bg': {
                    [ContrastLevelName.SmallBodyText]:
                        viraTheme.colors['vira-purple-behind-bg-small-body'],
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-purple-behind-bg-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-purple-behind-bg-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-purple-behind-bg-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-purple-behind-bg-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-purple-behind-bg-decoration'],
                    [ContrastLevelName.Invisible]:
                        viraTheme.colors['vira-purple-behind-bg-invisible'],
                },
                'behind-fg': {
                    [ContrastLevelName.SmallBodyText]:
                        viraTheme.colors['vira-purple-behind-fg-small-body'],
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-purple-behind-fg-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-purple-behind-fg-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-purple-behind-fg-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-purple-behind-fg-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-purple-behind-fg-decoration'],
                    [ContrastLevelName.Invisible]:
                        viraTheme.colors['vira-purple-behind-fg-invisible'],
                },
                'on-self': {
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-purple-on-self-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-purple-on-self-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-purple-on-self-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-purple-on-self-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-purple-on-self-decoration'],
                    [ContrastLevelName.Invisible]:
                        viraTheme.colors['vira-purple-on-self-invisible'],
                },
            },
            pink: {
                foreground: {
                    [ContrastLevelName.SmallBodyText]:
                        viraTheme.colors['vira-pink-foreground-small-body'],
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-pink-foreground-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-pink-foreground-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-pink-foreground-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-pink-foreground-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-pink-foreground-decoration'],
                    [ContrastLevelName.Invisible]:
                        viraTheme.colors['vira-pink-foreground-invisible'],
                },
                'behind-bg': {
                    [ContrastLevelName.SmallBodyText]:
                        viraTheme.colors['vira-pink-behind-bg-small-body'],
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-pink-behind-bg-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-pink-behind-bg-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-pink-behind-bg-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-pink-behind-bg-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-pink-behind-bg-decoration'],
                    [ContrastLevelName.Invisible]:
                        viraTheme.colors['vira-pink-behind-bg-invisible'],
                },
                'behind-fg': {
                    [ContrastLevelName.SmallBodyText]:
                        viraTheme.colors['vira-pink-behind-fg-small-body'],
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-pink-behind-fg-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-pink-behind-fg-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-pink-behind-fg-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-pink-behind-fg-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-pink-behind-fg-decoration'],
                    [ContrastLevelName.Invisible]:
                        viraTheme.colors['vira-pink-behind-fg-invisible'],
                },
                'on-self': {
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-pink-on-self-body'],
                    [ContrastLevelName.NonBodyText]: viraTheme.colors['vira-pink-on-self-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-pink-on-self-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-pink-on-self-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-pink-on-self-decoration'],
                    [ContrastLevelName.Invisible]: viraTheme.colors['vira-pink-on-self-invisible'],
                },
            },
            grey: {
                foreground: {
                    [ContrastLevelName.SmallBodyText]:
                        viraTheme.colors['vira-grey-foreground-small-body'],
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-grey-foreground-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-grey-foreground-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-grey-foreground-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-grey-foreground-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-grey-foreground-decoration'],
                    [ContrastLevelName.Invisible]:
                        viraTheme.colors['vira-grey-foreground-invisible'],
                },
                'behind-bg': {
                    [ContrastLevelName.SmallBodyText]:
                        viraTheme.colors['vira-grey-behind-bg-small-body'],
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-grey-behind-bg-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-grey-behind-bg-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-grey-behind-bg-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-grey-behind-bg-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-grey-behind-bg-decoration'],
                    [ContrastLevelName.Invisible]:
                        viraTheme.colors['vira-grey-behind-bg-invisible'],
                },
                'behind-fg': {
                    [ContrastLevelName.SmallBodyText]:
                        viraTheme.colors['vira-grey-behind-fg-small-body'],
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-grey-behind-fg-body'],
                    [ContrastLevelName.NonBodyText]:
                        viraTheme.colors['vira-grey-behind-fg-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-grey-behind-fg-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-grey-behind-fg-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-grey-behind-fg-decoration'],
                    [ContrastLevelName.Invisible]:
                        viraTheme.colors['vira-grey-behind-fg-invisible'],
                },
                'on-self': {
                    [ContrastLevelName.BodyText]: viraTheme.colors['vira-grey-on-self-body'],
                    [ContrastLevelName.NonBodyText]: viraTheme.colors['vira-grey-on-self-non-body'],
                    [ContrastLevelName.Header]: viraTheme.colors['vira-grey-on-self-header'],
                    [ContrastLevelName.Placeholder]:
                        viraTheme.colors['vira-grey-on-self-placeholder'],
                    [ContrastLevelName.Decoration]:
                        viraTheme.colors['vira-grey-on-self-decoration'],
                    [ContrastLevelName.Invisible]: viraTheme.colors['vira-grey-on-self-invisible'],
                },
            },
        });
    });

    it('does not have missing values', () => {
        viraThemeByKeys.blue['foreground'][ContrastLevelName.SmallBodyText];

        // @ts-expect-error: this contrast level does not exist here.
        viraThemeByKeys.blue['on-self'][ContrastLevelName.SmallBodyText];
    });
});
