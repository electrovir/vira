import {createColorThemeBookPages} from 'theme-vir';
import {viraTheme, viraThemeDarkOverride} from 'vira';
import {stylesBookPage} from '../top-level-pages.js';

export const viraThemePages = createColorThemeBookPages({
    parent: stylesBookPage,
    theme: viraTheme,
    title: 'Vira Theme',
    hideInverseColors: true,
    overrides: [viraThemeDarkOverride],
    hideCopyCode: true,
});
