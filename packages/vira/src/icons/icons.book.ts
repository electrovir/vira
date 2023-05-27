import {defineElementBookChapter, defineElementBookPage} from 'element-book';
import {assign, html} from 'element-vir';
import {ViraIcon} from '../elements/vira-icon/vira-icon.element';
import {allIconsByName} from './index';

const iconsBookChapter = defineElementBookChapter({
    parent: undefined,
    title: 'Icons',
});

const allIconsBookPage = defineElementBookPage({
    title: 'All Icons',
    parent: iconsBookChapter,
    defineExamplesCallback({defineExample}) {
        Object.values(allIconsByName).forEach((icon) => {
            defineExample({
                title: icon.name,
                renderCallback() {
                    return html`
                        <${ViraIcon} ${assign(ViraIcon, {icon})}></${ViraIcon}>
                    `;
                },
            });
        });
    },
});

export const iconBookEntries = [
    iconsBookChapter,
    allIconsBookPage,
];
