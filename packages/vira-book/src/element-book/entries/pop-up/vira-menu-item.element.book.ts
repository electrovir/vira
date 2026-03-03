import {defineBookPage} from 'element-book';
import {
    type CSSResult,
    type HTMLTemplateResult,
    type HtmlInterpolation,
    css,
    html,
} from 'element-vir';
import {Options24Icon, ViraMenuItem, createColoredIcon} from 'vira';
import {elementsBookPage} from '../../top-level-pages.js';

const examples: ReadonlyArray<{
    title: string;
    content: HtmlInterpolation;
    inputs: typeof ViraMenuItem.InputsType;
    customStyle?: CSSResult;
    customTemplate?: HTMLTemplateResult;
}> = [
    {
        title: 'unselected',
        content: 'my label',
        inputs: {
            selected: false,
        },
    },
    {
        title: 'selected',
        content: 'my label',
        inputs: {
            selected: true,
        },
    },
    {
        title: 'with custom child',
        content: 'custom child',
        inputs: {
            selected: true,
        },
        customTemplate: html`
            <b>This is custom</b>
        `,
    },
    {
        title: 'constrained width',
        content: 'has more text than is possible to fit',
        customStyle: css`
            :host {
                max-width: 100px;
            }
        `,
        inputs: {
            selected: true,
        },
    },
    {
        title: 'stretched width',
        content: 'wide',
        customStyle: css`
            ${ViraMenuItem} {
                width: 400px;
            }
        `,
        inputs: {
            selected: true,
        },
    },
    {
        title: 'disabled',
        content: 'my label',
        inputs: {
            selected: true,
            disabled: true,
        },
    },
    {
        title: 'no default pointer styles',
        content: 'my label',
        inputs: {
            selected: true,
            disablePointerStyles: true,
        },
    },
    {
        title: 'icon override',
        content: 'my label',
        inputs: {
            selected: false,
            iconOverride: createColoredIcon(Options24Icon, {
                'vira-icon-stroke-color': 'blue',
            }),
        },
    },
];

export const viraMenuItemBookPage = defineBookPage({
    title: ViraMenuItem.tagName,
    parent: elementsBookPage,
    defineExamples({defineExample}) {
        examples.forEach((example) => {
            defineExample({
                title: example.title,
                styles: example.customStyle,
                render() {
                    return html`
                        <${ViraMenuItem.assign(example.inputs)}>${example.content}</${ViraMenuItem}>
                    `;
                },
            });
        });
    },
});
