import {getEnumValues} from '@augment-vir/common';
import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {PopoverMenuCornerStyle, PopoverMenuDirection, ViraPopoverMenu} from 'vira';
import {elementsBookPage} from '../../top-level-pages.js';

const examples: {title: string; inputs: typeof ViraPopoverMenu.InputsType}[] = [];

getEnumValues(PopoverMenuDirection).forEach((direction) => {
    getEnumValues(PopoverMenuCornerStyle).forEach((cornerStyle) => {
        examples.push({
            title: [
                direction,
                cornerStyle,
            ].join(' '),
            inputs: {
                cornerStyle,
                direction,
            },
        });
    });
});

export const viraPopoverMenuBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraPopoverMenu.tagName,
    defineExamples({defineExample}) {
        examples.forEach((example) => {
            defineExample({
                title: example.title,
                styles: css`
                    .content {
                        padding: 8px 16px;
                    }
                `,
                render() {
                    return html`
                        <${ViraPopoverMenu.assign(example.inputs)}>
                            <div class="content">Contents</div>
                        </${ViraPopoverMenu}>
                    `;
                },
            });
        });
    },
});
