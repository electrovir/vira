import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {createSizedIcon, LucideCodeXmlIcon, LucideStarIcon, ViraIcon, type ViraIconSvg} from 'vira';
import {utilBookPage} from '../top-level-pages.js';

const examples: {
    title: string;
    size: number;
    icon: ViraIconSvg;
}[] = [
    {
        title: 'smaller',
        size: 16,
        icon: createSizedIcon(LucideCodeXmlIcon, 24),
    },
    {
        title: 'larger',
        size: 48,
        icon: createSizedIcon(LucideStarIcon, 24),
    },
];

export const createSizedIconBookPage = defineBookPage({
    title: createSizedIcon.name,
    parent: utilBookPage,
    descriptionParagraphs: [
        'Wraps an existing icon with explicit dimensions to create a new icon that can be used anywhere the original icon can be used.',
    ],
    defineExamples({defineExample}) {
        examples.forEach((example) => {
            defineExample({
                title: example.title,
                styles: css`
                    :host {
                        display: flex;
                        gap: 16px;
                        align-items: center;
                    }
                `,
                render() {
                    const sizedIcon = createSizedIcon(example.icon, example.size);

                    return html`
                        <${ViraIcon.assign({
                            icon: example.icon,
                        })}></${ViraIcon}>
                        <span>→</span>
                        <${ViraIcon.assign({
                            icon: sizedIcon,
                        })}></${ViraIcon}>
                    `;
                },
            });
        });
    },
});
