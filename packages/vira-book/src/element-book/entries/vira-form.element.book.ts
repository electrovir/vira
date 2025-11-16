import {defineBookPage} from 'element-book';
import {css, html, listen} from 'element-vir';
import {
    ViraButton,
    ViraButtonStyle,
    ViraForm,
    type ViraFormFields,
    ViraFormFieldType,
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
                    })}
                        ${listen(ViraForm.events.valueChange, (event) => {
                            updateState({
                                ...state,
                                [event.detail.key]: event.detail.value,
                            });
                        })}
                    >
                        <div class="buttons" slot=${ViraForm.slotNames.actionButtons}>
                            <${ViraButton.assign({
                                text: 'Cancel',
                                buttonStyle: ViraButtonStyle.Outline,
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
