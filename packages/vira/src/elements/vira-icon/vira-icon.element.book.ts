import {defineElementBookChapter, defineElementBookPage} from 'element-book';
import {assign, html} from 'element-vir';
import {Element24Icon} from '../../icons';
import {elementsBookChapter} from '../elements.book';
import {ViraIcon} from './vira-icon.element';

const viraIconBookChapter = defineElementBookChapter({
    title: 'Icon',
    parent: elementsBookChapter,
});

const viraIconBookPage = defineElementBookPage({
    title: ViraIcon.tagName,
    parent: viraIconBookChapter,
    descriptionParagraphs: [
        "See the 'All Icons' section for a list of all included icons.",
    ],
    defineExamplesCallback({defineExample}) {
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
