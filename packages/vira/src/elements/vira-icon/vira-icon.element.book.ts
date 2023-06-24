import {defineBookPage} from 'element-book';
import {assign, html} from 'element-vir';
import {Element24Icon} from '../../icons';
import {elementsBookChapter} from '../elements.book';
import {ViraIcon} from './vira-icon.element';

const viraIconBookChapter = defineBookPage({
    title: 'Icon',
    parent: elementsBookChapter,
});

const viraIconBookPage = defineBookPage({
    title: ViraIcon.tagName,
    parent: viraIconBookChapter,
    descriptionParagraphs: [
        "See the 'All Icons' section for a list of all included icons.",
    ],
    elementExamplesCallback({defineExample}) {
        defineExample({
            title: 'basic',
            renderCallback() {
                return html`
                    <${ViraIcon} ${assign(ViraIcon, {icon: Element24Icon})}></${ViraIcon}>
                `;
            },
        });
    },
});

export const viraIconBookEntries = [
    viraIconBookChapter,
    viraIconBookPage,
];
