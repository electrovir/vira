import {defineBookPage} from 'element-book';
import {html, type HtmlInterpolation} from 'element-vir';
import {ViraMenu, ViraMenuItem, type ViraMenuCornerStyle, type ViraMenuPopUpDirection} from 'vira';
import {elementsBookPage} from '../../top-level-pages.js';

const examples: ReadonlyArray<{
    title: string;
    menuInputs?: Partial<{
        direction: ViraMenuPopUpDirection;
        cornerStyle: ViraMenuCornerStyle;
    }>;
    items: ReadonlyArray<{
        content: HtmlInterpolation;
        selected?: boolean;
        disabled?: boolean;
        disablePointerStyles?: boolean;
    }>;
}> = [
    {
        title: 'basic',
        items: [
            {
                content: 'one',
            },
            {
                content: 'two',
            },
            {
                content: 'three',
            },
        ],
    },
    {
        title: 'with selection',
        items: [
            {
                content: 'one',
            },
            {
                content: 'two',
                selected: true,
            },
            {
                content: 'three',
            },
        ],
    },
    {
        title: 'with multi selection',
        items: [
            {
                content: 'one',
            },
            {
                content: 'two',
                selected: true,
            },
            {
                content: 'three',
                selected: true,
            },
        ],
    },
    {
        title: 'with disabled item',
        items: [
            {
                content: 'one',
            },
            {
                content: 'two',
                disabled: true,
            },
            {
                content: 'three',
            },
        ],
    },
];

export const viraMenuOptionsBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraMenu.tagName,
    defineExamples({defineExample}) {
        examples.forEach((example) => {
            defineExample({
                title: example.title,
                render() {
                    return html`
                        <${ViraMenu.assign({
                            ...example.menuInputs,
                        })}>
                            ${example.items.map(
                                (item) => html`
                                    <${ViraMenuItem.assign({
                                        selected: item.selected,
                                        disabled: item.disabled,
                                        disablePointerStyles: item.disablePointerStyles,
                                    })}>
                                        ${item.content}
                                    </${ViraMenuItem}>
                                `,
                            )}
                        </${ViraMenu}>
                    `;
                },
            });
        });
    },
});
