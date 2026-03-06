import {defineBookPage} from 'element-book';
import {css, html, listen} from 'element-vir';
import {
    ViraButton,
    ViraColorVariant,
    ViraEmphasis,
    ViraForm,
    type ViraFormFields,
    ViraFormFieldType,
    ViraInput,
    type ViraSelectOption,
} from 'vira';
import {elementsBookPage} from '../top-level-pages.js';

const mockRoleOptions: ViraSelectOption[] = [
    {
        label: 'Admin',
        value: 'admin',
    },
    {
        label: 'User Manager',
        value: 'user-manager',
    },
    {
        label: 'Billing Manager',
        value: 'billing-manager',
    },
    {
        label: 'Member',
        value: 'member',
    },
];

export const viraFormBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraForm.tagName,
    defineExamples({defineExample}) {
        defineExample({
            title: 'basic',
            state() {
                return {
                    firstName: '',
                    lastName: '',
                    subscribe: true,
                    email: '',
                    password: '',
                    userRole: undefined as string | undefined,
                    quantity: 0,
                };
            },
            styles: css`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,
            render({state, updateState}) {
                const formFields = {
                    firstName: {
                        type: ViraFormFieldType.Text,
                        label: 'First Name',
                        value: state.firstName,
                        isRequired: true,
                        placeholder: 'placeholder',
                    },
                    lastName: {
                        type: ViraFormFieldType.Text,
                        label: 'Last Name',
                        value: state.lastName,
                        isRequired: true,
                    },
                    subscribe: {
                        type: ViraFormFieldType.Checkbox,
                        label: 'Subscribe to updates',
                        value: state.subscribe,
                    },
                    email: {
                        type: ViraFormFieldType.Email,
                        label: 'Email Address',
                        value: state.email,
                    },
                    password: {
                        type: ViraFormFieldType.NewPassword,
                        label: 'Password',
                        value: state.password,
                    },
                    userRole: {
                        type: ViraFormFieldType.Select,
                        label: 'Role',
                        options: mockRoleOptions,
                        value: state.userRole,
                        placeholder: 'placeholder',
                    },
                    quantity: {
                        type: ViraFormFieldType.Number,
                        label: 'Quantity',
                        value: state.quantity,
                        min: 0,
                        max: 100,
                        step: 2,
                        placeholder: 'Enter quantity',
                    },
                    disabledField: {
                        type: ViraFormFieldType.Text,
                        label: 'Disabled Field',
                        value: 'should be disabled',
                        isDisabled: true,
                    },
                    hidden: {
                        type: ViraFormFieldType.Text,
                        label: 'Should be hidden',
                        value: 'Should be hidden',
                        isHidden: true,
                    },
                } satisfies ViraFormFields;

                return html`
                    <${ViraForm.assign({
                        fields: formFields,
                    })}
                        ${listen(ViraForm.events.valueChange, (event) => {
                            updateState({
                                ...state,
                                [event.detail.key]: event.detail.value,
                            });
                        })}
                    >
                        <div class="buttons">
                            <${ViraButton.assign({
                                text: 'Cancel',
                                buttonEmphasis: ViraEmphasis.Subtle,
                                colorVariant: ViraColorVariant.Neutral,
                            })}></${ViraButton}>
                            <${ViraButton.assign({
                                text: 'Submit',
                            })}></${ViraButton}>
                        </div>
                    </${ViraForm}>
                `;
            },
        });

        defineExample({
            title: 'with extra slot elements',
            state() {
                return {
                    firstName: '',
                    lastName: '',
                };
            },
            styles: css`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,
            render({state, updateState}) {
                const formFields = {
                    firstName: {
                        type: ViraFormFieldType.Text,
                        label: 'First Name',
                        value: state.firstName,
                    },
                    lastName: {
                        type: ViraFormFieldType.Text,
                        label: 'Last Name',
                        value: state.lastName,
                    },
                } satisfies ViraFormFields;

                return html`
                    <${ViraForm.assign({
                        fields: formFields,
                    })}
                        ${listen(ViraForm.events.valueChange, (event) => {
                            updateState({
                                ...state,
                                [event.detail.key]: event.detail.value,
                            });
                        })}
                    >
                        <${ViraInput.assign({
                            value: '',
                            label: 'More stuff',
                        })}></${ViraInput}>
                        <div class="buttons">
                            <${ViraButton.assign({
                                text: 'Cancel',
                                buttonEmphasis: ViraEmphasis.Subtle,
                                colorVariant: ViraColorVariant.Neutral,
                            })}></${ViraButton}>
                            <${ViraButton.assign({
                                text: 'Submit',
                            })}></${ViraButton}>
                        </div>
                    </${ViraForm}>
                `;
            },
        });
        defineExample({
            title: 'custom width',
            state() {
                return {
                    firstName: '',
                    lastName: '',
                    subscribe: true,
                    email: '',
                    password: '',
                    userRole: undefined as string | undefined,
                };
            },
            styles: css`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }

                ${ViraForm} {
                    width: 400px;
                }
            `,
            render({state, updateState}) {
                const formFields = {
                    firstName: {
                        type: ViraFormFieldType.Text,
                        label: 'First Name',
                        value: state.firstName,
                    },
                    lastName: {
                        type: ViraFormFieldType.Text,
                        label: 'Last Name',
                        value: state.lastName,
                    },
                    subscribe: {
                        type: ViraFormFieldType.Checkbox,
                        label: 'Subscribe to updates',
                        value: state.subscribe,
                    },
                    email: {
                        type: ViraFormFieldType.Email,
                        label: 'Email Address',
                        value: state.email,
                    },
                    password: {
                        type: ViraFormFieldType.NewPassword,
                        label: 'Password',
                        value: state.password,
                    },
                    userRole: {
                        type: ViraFormFieldType.Select,
                        label: 'Role',
                        options: mockRoleOptions,
                        value: state.userRole,
                    },
                } satisfies ViraFormFields;

                return html`
                    <${ViraForm.assign({
                        fields: formFields,
                    })}
                        ${listen(ViraForm.events.valueChange, (event) => {
                            updateState({
                                ...state,
                                [event.detail.key]: event.detail.value,
                            });
                        })}
                    >
                        <div class="buttons">
                            <${ViraButton.assign({
                                text: 'Cancel',
                                buttonEmphasis: ViraEmphasis.Subtle,
                                colorVariant: ViraColorVariant.Neutral,
                            })}></${ViraButton}>
                            <${ViraButton.assign({
                                text: 'Submit',
                            })}></${ViraButton}>
                        </div>
                    </${ViraForm}>
                `;
            },
        });
        defineExample({
            title: 'disabled',
            state() {
                return {
                    firstName: '',
                    lastName: '',
                    subscribe: true,
                    email: '',
                    password: '',
                    userRole: undefined as string | undefined,
                };
            },
            styles: css`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,
            render({state, updateState}) {
                const formFields = {
                    firstName: {
                        type: ViraFormFieldType.Text,
                        label: 'First Name',
                        value: state.firstName,
                    },
                    lastName: {
                        type: ViraFormFieldType.Text,
                        label: 'Last Name',
                        value: state.lastName,
                    },
                    subscribe: {
                        type: ViraFormFieldType.Checkbox,
                        label: 'Subscribe to updates',
                        value: state.subscribe,
                    },
                    email: {
                        type: ViraFormFieldType.Email,
                        label: 'Email Address',
                        value: state.email,
                    },
                    password: {
                        type: ViraFormFieldType.NewPassword,
                        label: 'Password',
                        value: state.password,
                    },
                    userRole: {
                        type: ViraFormFieldType.Select,
                        label: 'Role',
                        options: mockRoleOptions,
                        value: state.userRole,
                    },
                } satisfies ViraFormFields;

                return html`
                    <${ViraForm.assign({
                        fields: formFields,
                        isDisabled: true,
                    })}
                        ${listen(ViraForm.events.valueChange, (event) => {
                            updateState({
                                ...state,
                                [event.detail.key]: event.detail.value,
                            });
                        })}
                    >
                        <div class="buttons">
                            <${ViraButton.assign({
                                text: 'Cancel',
                                buttonEmphasis: ViraEmphasis.Subtle,
                                colorVariant: ViraColorVariant.Neutral,
                            })}></${ViraButton}>
                            <${ViraButton.assign({
                                text: 'Submit',
                            })}></${ViraButton}>
                        </div>
                    </${ViraForm}>
                `;
            },
        });
    },
});
