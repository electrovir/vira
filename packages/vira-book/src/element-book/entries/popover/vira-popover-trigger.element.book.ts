import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {viraFormCssVars, ViraPopoverTrigger} from 'vira';
import {elementsBookPage} from '../../top-level-pages.js';

export const viraPopoverTriggerBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraPopoverTrigger.tagName,
    defineExamples({defineExample}) {
        defineExample({
            title: 'basic',
            styles: css`
                ${ViraPopoverTrigger} {
                    ${viraFormCssVars['vira-form-focus-outline-border-radius'].name}: 0;
                }

                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .popover {
                    border: 4px solid #eee;
                    border-top: none;
                    padding: 8px 16px;
                    background-color: #eef9ff;
                }
            `,
            render() {
                return html`
                    <${ViraPopoverTrigger.assign({
                        keepOpenAfterInteraction: true,
                    })}>
                        <div
                            class="trigger"
                            slot=${ViraPopoverTrigger.slotNames['vira-popover-trigger-trigger']}
                        >
                            Trigger Popover
                        </div>
                        <div
                            class="popover"
                            slot=${ViraPopoverTrigger.slotNames['vira-popover-trigger-popover']}
                        >
                            Popover!
                        </div>
                    </${ViraPopoverTrigger}>
                `;
            },
        });
        defineExample({
            title: 'long clipped content',
            styles: css`
                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .popover {
                    box-sizing: border-box;
                    max-width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    border: 4px solid #eee;
                    border-top: none;
                    padding: 8px 16px;
                    white-space: nowrap;
                    background-color: white;
                }
            `,
            render() {
                return html`
                    <${ViraPopoverTrigger.assign({
                        keepOpenAfterInteraction: true,
                    })}>
                        <div slot=${ViraPopoverTrigger.slotNames['vira-popover-trigger-trigger']}>
                            Trigger Long Clipped Popover
                        </div>
                        <div
                            class="popover"
                            slot=${ViraPopoverTrigger.slotNames['vira-popover-trigger-popover']}
                        >
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${ViraPopoverTrigger}>
                `;
            },
        });
        defineExample({
            title: 'long content',
            styles: css`
                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .popover {
                    box-sizing: border-box;
                    max-width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    border: 4px solid #eee;
                    border-top: none;
                    padding: 8px 16px;
                    white-space: nowrap;
                    background-color: white;
                }
            `,
            render() {
                return html`
                    <${ViraPopoverTrigger.assign({
                        keepOpenAfterInteraction: true,
                    })}>
                        <div slot=${ViraPopoverTrigger.slotNames['vira-popover-trigger-trigger']}>
                            Trigger Long Popover
                        </div>
                        <div
                            class="popover"
                            slot=${ViraPopoverTrigger.slotNames['vira-popover-trigger-popover']}
                        >
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${ViraPopoverTrigger}>
                `;
            },
        });
        defineExample({
            title: 'short content',
            styles: css`
                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .popover {
                    box-sizing: border-box;
                    max-width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    border: 4px solid #eee;
                    border-top: none;
                    padding: 8px 16px;
                    white-space: nowrap;
                    background-color: white;
                }
            `,
            render() {
                return html`
                    <${ViraPopoverTrigger.assign({
                        keepOpenAfterInteraction: true,
                    })}>
                        <div slot=${ViraPopoverTrigger.slotNames['vira-popover-trigger-trigger']}>
                            Trigger Short Popover
                        </div>
                        <div
                            class="popover"
                            slot=${ViraPopoverTrigger.slotNames['vira-popover-trigger-popover']}
                        >
                            not long
                        </div>
                    </${ViraPopoverTrigger}>
                `;
            },
        });
        defineExample({
            title: 'wide content',
            styles: css`
                .container {
                    width: 300px;
                    overflow: auto;
                    border: 2px solid #999;
                    padding: 16px;
                }

                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .popover {
                    box-sizing: border-box;
                    border: 4px solid #eee;
                    border-top: none;
                    padding: 8px 16px;
                    background-color: #eef9ff;
                    white-space: nowrap;
                }
            `,
            render() {
                return html`
                    <div class="container">
                        <${ViraPopoverTrigger.assign({
                            keepOpenAfterInteraction: true,
                        })}>
                            <div
                                class="trigger"
                                slot=${ViraPopoverTrigger.slotNames['vira-popover-trigger-trigger']}
                            >
                                Trigger
                            </div>
                            <div
                                class="popover"
                                slot=${ViraPopoverTrigger.slotNames['vira-popover-trigger-popover']}
                            >
                                This content is much wider than the container and should overflow
                                <div>Item 1</div>
                                <div>Item 2</div>
                                <div>Item 3</div>
                                <div>Item 4</div>
                                <div>Item 5</div>
                                <div>Item 6</div>
                                <div>Item 7</div>
                                <div>Item 8</div>
                                <div>Item 9</div>
                                <div>Item 10</div>
                            </div>
                        </${ViraPopoverTrigger}>
                    </div>
                `;
            },
        });
        defineExample({
            title: 'styled by parent inside clipped container',
            styles: css`
                .clipping-container {
                    height: 48px;
                    overflow: hidden;
                    border: 2px dashed #ccc;
                    padding: 4px;
                }

                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .popover {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    border: 4px solid #eee;
                    padding: 8px 16px;
                    background-color: white;

                    & .parent-styled {
                        color: white;
                        background-color: #663399;
                        padding: 4px 8px;
                        border-radius: 4px;
                    }

                    & b {
                        color: crimson;
                    }
                }
            `,
            render() {
                return html`
                    <div class="clipping-container">
                        <${ViraPopoverTrigger.assign({
                            keepOpenAfterInteraction: true,
                        })}>
                            <div
                                class="trigger"
                                slot=${ViraPopoverTrigger.slotNames['vira-popover-trigger-trigger']}
                            >
                                Trigger
                            </div>
                            <div
                                class="popover"
                                slot=${ViraPopoverTrigger.slotNames['vira-popover-trigger-popover']}
                            >
                                <div class="parent-styled">Purple from the parent's styles</div>
                                <div>
                                    <b>Crimson</b>
                                    from the parent's styles
                                </div>
                                <div>Escapes the dashed container's overflow: hidden</div>
                            </div>
                        </${ViraPopoverTrigger}>
                    </div>
                `;
            },
        });
    },
});
