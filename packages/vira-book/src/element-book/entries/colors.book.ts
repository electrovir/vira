import {createColorPaletteBookPages, createColorThemeBookPages} from 'theme-vir';
import {viraColorPalette, viraTheme, viraThemeDarkOverride} from 'vira';
import {stylesBookPage} from '../top-level-pages.js';

export const viraThemePages = createColorThemeBookPages({
    parent: stylesBookPage,
    theme: viraTheme,
    title: 'Vira Theme',
    hideInverseColors: true,
    overrides: [viraThemeDarkOverride],
    hideCopyCode: true,
});

export const viraPalettePages = createColorPaletteBookPages({
    parent: stylesBookPage,
    title: 'Vira Palette',
    colors: viraColorPalette,
});
