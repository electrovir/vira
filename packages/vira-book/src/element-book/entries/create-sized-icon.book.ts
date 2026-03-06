import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {createSizedIcon, Element24Icon, Star24Icon, ViraIcon, type ViraIconSvg} from 'vira';
import {utilBookPage} from '../top-level-pages.js';

const examples: {
    title: string;
    size: number;
    icon: ViraIconSvg;
}[] = [
    {
        title: 'smaller',
        size: 16,
        icon: Element24Icon,
    },
    {
        title: 'larger',
        size: 48,
        icon: Star24Icon,
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
