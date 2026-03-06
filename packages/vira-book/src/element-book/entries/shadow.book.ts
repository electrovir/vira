import {defineBookPage} from 'element-book';
import {css, html, type CSSResult} from 'element-vir';
import {viraShadows} from 'vira';
import {stylesBookPage} from '../top-level-pages.js';

const shadowExamples: {title: string; styles: CSSResult}[] = [
    {
        title: 'menu shadow',
        styles: viraShadows.menuShadow,
    },
    {
        title: 'modal',
        styles: viraShadows.modal,
    },
];

export const shadowBookPage = defineBookPage({
    parent: stylesBookPage,
    title: 'Shadows',
    defineExamples({defineExample}) {
        shadowExamples.forEach((example) => {
            defineExample({
                title: example.title,
                styles: css`
                    .shadow-block {
                        height: 100px;
                        width: 256px;
                        margin: 32px;
                        ${example.styles}
                        border-radius: 8px;
                        background-color: white;
                    }
                `,
                render() {
                    return html`
                        <div class="shadow-block"></div>
                    `;
                },
            });
        });
    },
});
