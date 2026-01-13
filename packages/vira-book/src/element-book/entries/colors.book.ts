import {ContrastLevelName} from '@electrovir/color';
import {createColorPaletteBookPages, createColorThemeBookPages} from 'theme-vir';
import {viraColorPalette, viraTheme, viraThemeDarkOverride} from 'vira';
import {stylesBookPage} from '../top-level-pages.js';

export const viraColorPalettePages = createColorPaletteBookPages({
    colors: viraColorPalette,
    parent: stylesBookPage,
    title: 'Vira Color',
    includeContrast: true,
    includeTheme: false,
    options: {
        crossContrastLevels: [
            ContrastLevelName.BodyText,
            ContrastLevelName.Header,
            ContrastLevelName.Placeholder,
            ContrastLevelName.Decoration,
            ContrastLevelName.Invisible,
        ],
    },
});

export const viraThemePages = createColorThemeBookPages({
    parent: stylesBookPage,
    theme: viraTheme,
    title: 'Vira Theme',
    hideInverseColors: true,
    overrides: [viraThemeDarkOverride],
});
