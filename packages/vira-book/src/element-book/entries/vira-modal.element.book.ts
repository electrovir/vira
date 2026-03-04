import {defineBookPage} from 'element-book';
import {css, html, listen} from 'element-vir';
import {viraFormCssVars, ViraModal} from 'vira';
import {elementsBookPage} from '../top-level-pages.js';

export const viraModalBookPage = defineBookPage({
    title: ViraModal.tagName,
    parent: elementsBookPage,
    defineExamples({defineExample}) {
        defineExample({
            title: 'basic',
            state() {
                return {
                    modalOpen: false,
                };
            },
            render({state, updateState}) {
                return html`
                    <button
                        ${listen('click', () => {
                            updateState({
                                modalOpen: true,
                            });
                        })}
                    >
                        Show Modal
                    </button>
                    <${ViraModal.assign({
                        open: state.modalOpen,
                        modalTitle: 'Modal title',
                        modalSubtitle: 'Modal subtitle',
                    })}
                        ${listen(ViraModal.events.modalClose, () => {
                            updateState({
                                modalOpen: false,
                            });
                        })}
                    >
                        Modal Content
                    </${ViraModal}>
                `;
            },
        });
        defineExample({
            title: 'customized',
            state() {
                return {
                    modalOpen: false,
                };
            },
            styles: css`
                ${ViraModal} {
                    min-width: 500px;
                    border-radius: 4px;
                    ${viraFormCssVars['vira-form-modal-backdrop-color']
                        .name}: rgba(255, 255, 255, 0.4);
                }
            `,
            render({state, updateState}) {
                return html`
                    <button
                        ${listen('click', () => {
                            updateState({
                                modalOpen: true,
                            });
                        })}
                    >
                        Show Modal
                    </button>
                    <${ViraModal.assign({
                        open: state.modalOpen,
                        modalTitle: 'Modal title',
                        modalSubtitle: 'Modal subtitle',
                    })}
                        ${listen(ViraModal.events.modalClose, () => {
                            updateState({
                                modalOpen: false,
                            });
                        })}
                    >
                        Modal Content
                    </${ViraModal}>
                `;
            },
        });
    },
});
