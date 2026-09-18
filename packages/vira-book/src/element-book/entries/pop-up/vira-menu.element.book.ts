import {defineBookPage} from 'element-book';
import {html, type HtmlInterpolation} from 'element-vir';
import {
    Copy24Icon,
    createSizedIcon,
    Pencil24Icon,
    ViraMenu,
    ViraMenuItem,
    X24Icon,
    type ViraIconSvg,
    type ViraMenuCornerStyle,
    type ViraMenuPopUpDirection,
} from 'vira';
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
        iconOverride?: ViraIconSvg;
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
        title: 'with action icons',
        items: [
            {
                content: 'copy',
                iconOverride: createSizedIcon(Copy24Icon, 16),
            },
            {
                content: 'rename',
                iconOverride: createSizedIcon(Pencil24Icon, 16),
            },
            {
                content: 'delete',
                iconOverride: createSizedIcon(X24Icon, 16),
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
                            ${example.items.map((item) => {
                                return html`
                                    <${ViraMenuItem.assign({
                                        selected: item.selected,
                                        disabled: item.disabled,
                                        disablePointerStyles: item.disablePointerStyles,
                                        iconOverride: item.iconOverride,
                                    })}>
                                        ${item.content}
                                    </${ViraMenuItem}>
                                `;
                            })}
                        </${ViraMenu}>
                    `;
                },
            });
        });
    },
});
