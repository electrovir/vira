import {assertWrap} from '@augment-vir/assert';
import {type SetOptional} from '@augment-vir/common';
import {defineBookPage} from 'element-book';
import {css, type CSSResult, html, listen} from 'element-vir';
import {
    defineViraElement,
    Element24Icon,
    ViraSelect,
    type ViraSelectOption,
    type ViraSelectOptionGroup,
} from 'vira';
import {elementsBookPage} from '../top-level-pages.js';

const mockGroupedOptions: ReadonlyArray<
    Readonly<ViraSelectOption> | Readonly<ViraSelectOptionGroup>
> = [
    {
        value: 'none',
        label: 'No group',
    },
    {
        groupName: 'Fruits',
        options: [
            {
                value: 'apple',
                label: 'Apple',
            },
            {
                value: 'banana',
                label: 'Banana',
            },
            {
                value: 'cherry',
                label: 'Cherry',
            },
        ],
    },
    {
        groupName: 'Vegetables',
        options: [
            {
                value: 'carrot',
                label: 'Carrot',
            },
            {
                value: 'broccoli',
                label: 'Broccoli',
            },
            {
                value: 'spinach',
                label: 'Spinach',
            },
        ],
    },
];

const mockOptions: ReadonlyArray<Readonly<ViraSelectOption>> = [
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
            options: mockOptions,
        },
    },
    {
        title: 'with really long option',
        inputs: {
            options: [
                ...mockOptions,
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
            options: mockOptions,
            placeholder: 'pick an option...',
        },
    },
    {
        title: 'disabled',
        inputs: {
            options: mockOptions,
            disabled: true,
        },
    },
    {
        title: 'readonly',
        inputs: {
            options: mockOptions,
            label: 'Pick an option',
            value: '3',
            isReadonly: true,
        },
    },
    {
        title: 'error',
        inputs: {
            options: mockOptions,
            hasError: true,
        },
    },
    {
        title: 'with icon',
        inputs: {
            options: mockOptions,
            icon: Element24Icon,
        },
    },
    {
        title: 'custom width',
        inputs: {
            options: mockOptions,
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
            options: mockOptions,
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
            options: mockOptions,
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
            options: mockOptions,
            label: 'Pick an option',
        },
    },
    {
        title: 'with long label',
        inputs: {
            options: mockOptions,
            label: 'Pick a really really really really long option',
        },
    },
    {
        title: 'with unbound long label',
        inputs: {
            options: mockOptions,
            label: 'Pick a really really really really long option',
        },
        styles: css`
            ${ViraSelect} {
                width: unset;
            }
        `,
    },
    {
        title: 'raw',
        inputs: {
            options: [
                ...mockOptions,
                {
                    label: 'really really really really really really really really long option',
                    value: 'something',
                },
            ],
            rawSelect: true,
            icon: Element24Icon,
        },
    },
    {
        title: 'with option groups',
        inputs: {
            options: mockGroupedOptions,
        },
    },
    {
        title: 'option groups with placeholder',
        inputs: {
            options: mockGroupedOptions,
            placeholder: 'Select a food...',
        },
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
        defineExample({
            title: 'no listener',
            descriptionParagraphs: [
                'All user input should be blocked if there is nothing updating the state.',
            ],
            render() {
                return html`
                    <${ViraSelect.assign({
                        options: mockOptions,
                        value: mockOptions[0]?.value,
                    })}></${ViraSelect}>
                `;
            },
        });

        defineExample({
            title: 'force update',
            render() {
                return html`
                    <${ViraSelectForceUpdateExample}></${ViraSelectForceUpdateExample}>
                `;
            },
        });
    },
});

const ViraSelectForceUpdateExample = defineViraElement()({
    tagName: 'vira-select-force-update-example',
    state() {
        return {
            intervalId: undefined as undefined | ReturnType<typeof globalThis.setInterval>,
            value: undefined as string | undefined,
        };
    },
    init({updateState, state}) {
        updateState({
            intervalId: globalThis.setInterval(() => {
                const currentValueIndex = mockOptions.findIndex(
                    (option) => option.value === state.value,
                );
                const nextValue = assertWrap.isDefined(
                    mockOptions[(currentValueIndex + 1) % mockOptions.length],
                ).value;

                updateState({
                    value: nextValue,
                });
                console.info(`Forcing select to ${nextValue}`);
            }, 500),
        });
    },
    cleanup({state}) {
        globalThis.clearInterval(state.intervalId);
    },
    render({state}) {
        return html`
            <${ViraSelect.assign({
                options: mockOptions,
                value: state.value,
            })}></${ViraSelect}>
        `;
    },
});
