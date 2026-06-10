import {check} from '@augment-vir/assert';
import {BookPageControlType, defineBookPage, definePageControl} from 'element-book';
import {type CSSResult, css, html, listen} from 'element-vir';
import {Element24Icon, ViraDropdown, type ViraSelectOption, allIconsByName} from 'vira';
import {elementsBookPage} from '../top-level-pages.js';

const exampleDropdownOptions = [
    {
        label: 'Option 1',
        value: '1',
    },
    {
        label: 'Option 2',
        value: '2',
    },
    {
        label: 'Option 3',
        value: '3',
    },
    {
        label: 'Really really super duper long option',
        value: '4',
    },
    {
        label: 'Really really super duper long option',
        value: '5',
    },
    {
        label: 'Really really super duper long option',
        value: '6',
    },
    {
        label: 'Really really super duper long option',
        value: '7',
    },
    {
        label: "Really really super duper long it just keeps going because it's so long option",
        value: '8',
    },
] satisfies ReadonlyArray<Readonly<ViraSelectOption>>;

const examples: ReadonlyArray<{
    title: string;
    inputs?: Partial<typeof ViraDropdown.InputsType>;
    customStyle?: CSSResult;
}> = [
    {
        title: 'default',
    },
    {
        title: 'disabled',
        inputs: {
            isDisabled: true,
        },
    },
    {
        title: 'short options',
        inputs: {
            options: [
                {
                    value: '1',
                    label: '1',
                },
                {
                    value: '2',
                    label: '2',
                },
            ],
        },
    },
    {
        title: 'multi select',
        inputs: {
            isMultiSelect: true,
        },
    },
    {
        title: 'long selection',
        inputs: {
            selected: [8],
        },
    },
    {
        title: 'with disabled item',
        inputs: {
            selected: [],
            options: [
                ...exampleDropdownOptions,
                {
                    value: '42',
                    label: 'this is disabled',
                    disabled: true,
                },
            ],
        },
    },
    {
        title: 'constrained width',
        customStyle: css`
            :host {
                max-width: 150px;
            }
        `,
    },
    {
        title: 'stretched width',
        customStyle: css`
            ${ViraDropdown} {
                width: 400px;
            }
        `,
    },
    {
        title: 'without a placeholder',
        inputs: {
            placeholder: undefined,
        },
    },
    {
        title: 'with a prefix',
        inputs: {
            selectionPrefix: 'Pre:',
            selected: [1],
        },
    },
    {
        title: 'with an icon',
        inputs: {
            icon: Element24Icon,
        },
    },
    {
        title: 'with a label',
        inputs: {
            label: 'My Label',
        },
    },
];

export const viraDropdownPage = defineBookPage({
    title: ViraDropdown.tagName,
    parent: elementsBookPage,
    controls: {
        Selected: definePageControl({
            controlType: BookPageControlType.Dropdown,
            initValue: '',
            options: [
                '',
                ...exampleDropdownOptions.map((option) => option.label),
            ],
        }),
        Prefix: definePageControl({
            controlType: BookPageControlType.Text,
            initValue: '',
        }),
        'Force State': definePageControl({
            controlType: BookPageControlType.Dropdown,
            options: [
                '',
                'force open',
                'force closed',
            ],
            initValue: '',
        }),
        'Multi Select': definePageControl({
            controlType: BookPageControlType.Dropdown,
            options: [
                '',
                'all',
                'none',
            ],
            initValue: '',
        }),
        Icon: definePageControl({
            controlType: BookPageControlType.Dropdown,
            initValue: '',
            options: [
                '',
                ...Object.keys(allIconsByName),
            ],
        }),
        Disabled: definePageControl({
            controlType: BookPageControlType.Dropdown,
            options: [
                '',
                'all',
                'none',
            ],
            initValue: '',
        }),
        Placeholder: definePageControl({
            controlType: BookPageControlType.Text,
            initValue: 'Select something',
        }),
    },
    defineExamples({defineExample}) {
        examples.forEach((example) => {
            defineExample({
                title: example.title,
                state() {
                    return {
                        selected: example.inputs?.selected || [],
                    };
                },
                styles: example.customStyle,
                render({state, updateState, controls}) {
                    const finalInputs: typeof ViraDropdown.InputsType = {
                        ...example.inputs,
                        placeholder:
                            example.inputs && 'placeholder' in example.inputs
                                ? example.inputs.placeholder
                                : controls.Placeholder,
                        options: example.inputs?.options || exampleDropdownOptions,
                        selected: controls.Selected
                            ? [
                                  exampleDropdownOptions.find(
                                      (option) => option.label === controls.Selected,
                                  )?.value,
                              ].filter(check.isTruthy)
                            : state.selected,
                        selectionPrefix: controls.Prefix || example.inputs?.selectionPrefix,
                        isDisabled: controls.Disabled
                            ? controls.Disabled === 'all'
                            : example.inputs?.isDisabled,
                        icon: controls.Icon
                            ? allIconsByName[controls.Icon as keyof typeof allIconsByName]
                            : example.inputs?.icon,
                        isMultiSelect: controls['Multi Select']
                            ? controls['Multi Select'] === 'all'
                            : example.inputs?.isMultiSelect,
                        z_debug_forceOpenState: controls['Force State']
                            ? controls['Force State'] === 'force open'
                            : example.inputs?.z_debug_forceOpenState,
                    };

                    return html`
                        <${ViraDropdown.assign(finalInputs)}
                            ${listen(ViraDropdown.events.selectedValuesChange, (event) => {
                                updateState({
                                    selected: event.detail,
                                });
                            })}
                        ></${ViraDropdown}>
                    `;
                },
            });
        });
    },
});
