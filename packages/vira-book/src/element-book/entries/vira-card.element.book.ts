import {defineBookPage} from 'element-book';
import {css, html, type HtmlInterpolation} from 'element-vir';
import {noNativeSpacing, ViraCard, ViraCardState} from 'vira';
import {elementsBookPage} from '../top-level-pages.js';

const examples: {
    title: string;
    inputs?: typeof ViraCard.InputsType | undefined;
    content?: HtmlInterpolation | undefined;
}[] = [
    {
        title: 'basic',
    },
    {
        title: 'success',
        inputs: {
            cardState: ViraCardState.Success,
        },
    },
    {
        title: 'error',
        inputs: {
            cardState: ViraCardState.Error,
        },
    },
    {
        title: 'long',
        content: html`
            <p
                style=${css`
                    ${noNativeSpacing}
                `}
            >
                Longer form content to fill out the card.
                <br />
                Some more content.
                <br />
                This is what it looks like.
            </p>
        `,
    },
];

export const viraCardBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraCard.tagName,
    descriptionParagraphs: [
        'A simple wrapper "card" element that is just a <slot> with some styles.',
    ],
    defineExamples({defineExample}) {
        examples.forEach((example) => {
            defineExample({
                title: example.title,
                render() {
                    return html`
                        <${ViraCard.assign(example.inputs || {})}>
                            ${example.content || 'Content'}
                        </${ViraCard}>
                    `;
                },
            });
        });
    },
});
