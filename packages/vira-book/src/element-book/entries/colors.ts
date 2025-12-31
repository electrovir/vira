import {createColorPaletteBookPages} from 'theme-vir';
import {viraColorPalette} from 'vira';
import {stylesBookPage} from '../top-level-pages.js';

export const viraColorPalettePages = createColorPaletteBookPages({
    colors: viraColorPalette,
    parent: stylesBookPage,
    title: 'Vira Color Palette',
    includeContrast: true,
});
