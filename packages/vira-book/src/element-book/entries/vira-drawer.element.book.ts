import {defineBookPage} from 'element-book';
import {html, listen} from 'element-vir';
import {ViraDrawer} from 'vira';
import {elementsBookPage} from '../top-level-pages.js';

export const viraDrawerBookPage = defineBookPage({
    title: ViraDrawer.tagName,
    parent: elementsBookPage,
    defineExamples({defineExample}) {
        defineExample({
            title: 'basic',
            state() {
                return {
                    drawerOpen: false,
                };
            },
            render({state, updateState}) {
                return html`
                    <button
                        ${listen('click', () => {
                            updateState({
                                drawerOpen: true,
                            });
                        })}
                    >
                        Show Drawer
                    </button>
                    <${ViraDrawer.assign({
                        open: state.drawerOpen,
                        drawerTitle: 'Drawer title',
                    })}
                        ${listen(ViraDrawer.events.drawerClose, () => {
                            updateState({
                                drawerOpen: false,
                            });
                        })}
                    >
                        Drawer Content
                    </${ViraDrawer}>
                `;
            },
        });
        defineExample({
            title: 'long title',
            state() {
                return {
                    drawerOpen: false,
                };
            },
            render({state, updateState}) {
                return html`
                    <button
                        ${listen('click', () => {
                            updateState({
                                drawerOpen: true,
                            });
                        })}
                    >
                        Show Drawer
                    </button>
                    <${ViraDrawer.assign({
                        open: state.drawerOpen,
                        drawerTitle:
                            'This is a really long drawer title that should be truncated instead of pushing the close button around',
                    })}
                        ${listen(ViraDrawer.events.drawerClose, () => {
                            updateState({
                                drawerOpen: false,
                            });
                        })}
                    >
                        Drawer Content
                    </${ViraDrawer}>
                `;
            },
        });
    },
});
