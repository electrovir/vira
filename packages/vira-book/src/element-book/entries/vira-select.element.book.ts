import {defineBookPage} from 'element-book';
import {css, type CSSResult, html, listen} from 'element-vir';
import {type SetOptional} from 'type-fest';
import {Element24Icon, ViraSelect, type ViraSelectOption} from 'vira';
import {elementsBookPage} from '../top-level-pages.js';

const mockExamples: ReadonlyArray<Readonly<ViraSelectOption>> = [
    {
        value: '1',
        label: 'one',
    },
    {
        value: '2',
        label: 'two',
    },
    {
        value: '3',
        label: 'three',
    },
    {
        value: '4',
        label: 'four',
    },
    {
        value: '5',
        label: 'five',
    },
];

const examples: {
    title: string;
    inputs: SetOptional<typeof ViraSelect.InputsType, 'value'>;
    styles?: CSSResult;
}[] = [
    {
        title: 'basic',
        inputs: {
            options: mockExamples,
        },
    },
    {
        title: 'with really long option',
        inputs: {
            options: [
                ...mockExamples,
                {
                    label: 'really really really really really really really really long option',
                    value: 'something',
                },
            ],
        },
    },
    {
        title: 'with placeholder',
        inputs: {
            options: mockExamples,
            placeholder: 'pick an option...',
        },
    },
    {
        title: 'disabled',
        inputs: {
            options: mockExamples,
            disabled: true,
        },
    },
    {
        title: 'error',
        inputs: {
            options: mockExamples,
            hasError: true,
        },
    },
    {
        title: 'with icon',
        inputs: {
            options: mockExamples,
            icon: Element24Icon,
        },
    },
    {
        title: 'custom width',
        inputs: {
            options: mockExamples,
        },
        styles: css`
            ${ViraSelect} {
                width: 100px;
            }
        `,
    },
    {
        title: 'custom short height',
        inputs: {
            options: mockExamples,
            icon: Element24Icon,
        },
        styles: css`
            ${ViraSelect} {
                height: 26px;
            }
        `,
    },
    {
        title: 'custom tall height',
        inputs: {
            options: mockExamples,
            icon: Element24Icon,
        },
        styles: css`
            ${ViraSelect} {
                height: 42px;
            }
        `,
    },
    {
        title: 'with label',
        inputs: {
            options: mockExamples,
            label: 'Pick an option',
        },
    },
    {
        title: 'with long label',
        inputs: {
            options: mockExamples,
            label: 'Pick a really really really really long option',
        },
    },
    {
        title: 'with unbound long label',
        inputs: {
            options: mockExamples,
            label: 'Pick a really really really really long option',
        },
        styles: css`
            ${ViraSelect} {
                width: unset;
            }
        `,
    },
];

export const viraSelectBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraSelect.tagName,
    defineExamples({defineExample}) {
        examples.forEach((example) => {
            defineExample({
                title: example.title,
                styles: css`
                    ${example.styles || css``}
                `,
                state() {
                    return {
                        selected: undefined as string | undefined,
                    };
                },
                render({state, updateState}) {
                    return html`
                        <${ViraSelect.assign({
                            ...example.inputs,
                            value: state.selected ?? example.inputs.value,
                        })}
                            ${listen(ViraSelect.events.valueChange, (event) => {
                                updateState({
                                    selected: event.detail,
                                });
                            })}
                        ></${ViraSelect}>
                    `;
                },
            });
        });
    },
});
