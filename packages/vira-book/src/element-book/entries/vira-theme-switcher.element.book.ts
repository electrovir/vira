import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {ViraThemeClient, ViraThemeSwitcher} from 'vira';
import {elementsBookPage} from '../top-level-pages.js';

export const viraThemeSwitcherBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraThemeSwitcher.tagName,
    descriptionParagraphs: [
        'A row of buttons for selecting between light, dark, and auto themes. The switcher owns a `ViraThemeClient` (either supplied via the `themeClient` input or created internally) and applies the chosen theme on click.',
    ],
    defineExamples({defineExample}) {
        defineExample({
            title: 'live (wired to ViraThemeClient)',
            state() {
                return {
                    themeClient: new ViraThemeClient(),
                };
            },
            render({state}) {
                return html`
                    <${ViraThemeSwitcher.assign({
                        themeClient: state.themeClient,
                    })}></${ViraThemeSwitcher}>
                `;
            },
        });
        defineExample({
            title: 'default (creates its own client)',
            render() {
                return html`
                    <${ViraThemeSwitcher}></${ViraThemeSwitcher}>
                `;
            },
        });
    },
});
