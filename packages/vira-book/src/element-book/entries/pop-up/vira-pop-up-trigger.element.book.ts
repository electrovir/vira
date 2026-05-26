import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {HorizontalAnchor, viraFormCssVars, ViraPopUpTrigger} from 'vira';
import {elementsBookPage} from '../../top-level-pages.js';

export const viraPopUpTriggerBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraPopUpTrigger.tagName,
    defineExamples({defineExample}) {
        defineExample({
            title: 'basic',
            styles: css`
                ${ViraPopUpTrigger} {
                    ${viraFormCssVars['vira-form-focus-outline-border-radius'].name}: 0;
                }

                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .pop-up {
                    border: 4px solid #eee;
                    border-top: none;
                    padding: 8px 16px;
                    background-color: #eef9ff;
                }
            `,
            render() {
                return html`
                    <${ViraPopUpTrigger.assign({
                        keepOpenAfterInteraction: true,
                    })}>
                        <div
                            class="trigger"
                            slot=${ViraPopUpTrigger.slotNames['vira-pop-up-trigger-trigger']}
                        >
                            Trigger Pop Up
                        </div>
                        <div
                            class="pop-up"
                            slot=${ViraPopUpTrigger.slotNames['vira-pop-up-trigger-pop-up']}
                        >
                            Pop up!
                        </div>
                    </${ViraPopUpTrigger}>
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

                .pop-up {
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
                    <${ViraPopUpTrigger.assign({
                        keepOpenAfterInteraction: true,
                    })}>
                        <div slot=${ViraPopUpTrigger.slotNames['vira-pop-up-trigger-trigger']}>
                            Trigger Long Clipped Pop Up
                        </div>
                        <div
                            class="pop-up"
                            slot=${ViraPopUpTrigger.slotNames['vira-pop-up-trigger-pop-up']}
                        >
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${ViraPopUpTrigger}>
                `;
            },
        });
        defineExample({
            title: 'long right anchored content',
            styles: css`
                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .pop-up {
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
                    <${ViraPopUpTrigger.assign({
                        keepOpenAfterInteraction: true,
                        horizontalAnchor: HorizontalAnchor.Right,
                    })}>
                        <div slot=${ViraPopUpTrigger.slotNames['vira-pop-up-trigger-trigger']}>
                            Trigger Long Right Anchored Pop Up
                        </div>
                        <div
                            class="pop-up"
                            slot=${ViraPopUpTrigger.slotNames['vira-pop-up-trigger-pop-up']}
                        >
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${ViraPopUpTrigger}>
                `;
            },
        });
        defineExample({
            title: 'long left anchored content',
            styles: css`
                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .pop-up {
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
                    <${ViraPopUpTrigger.assign({
                        keepOpenAfterInteraction: true,
                        horizontalAnchor: HorizontalAnchor.Left,
                    })}>
                        <div slot=${ViraPopUpTrigger.slotNames['vira-pop-up-trigger-trigger']}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div
                            class="pop-up"
                            slot=${ViraPopUpTrigger.slotNames['vira-pop-up-trigger-pop-up']}
                        >
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${ViraPopUpTrigger}>
                `;
            },
        });
        defineExample({
            title: 'short right anchored content',
            styles: css`
                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .pop-up {
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
                    <${ViraPopUpTrigger.assign({
                        keepOpenAfterInteraction: true,
                        horizontalAnchor: HorizontalAnchor.Right,
                    })}>
                        <div slot=${ViraPopUpTrigger.slotNames['vira-pop-up-trigger-trigger']}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div
                            class="pop-up"
                            slot=${ViraPopUpTrigger.slotNames['vira-pop-up-trigger-pop-up']}
                        >
                            not long
                        </div>
                    </${ViraPopUpTrigger}>
                `;
            },
        });
        defineExample({
            title: 'ignoreMaxWidth wide content',
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

                .pop-up {
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
                        <${ViraPopUpTrigger.assign({
                            keepOpenAfterInteraction: true,
                            // z_debug_forceOpenState: true,
                            // ignoreMaxWidth: true,
                        })}>
                            <div
                                class="trigger"
                                slot=${ViraPopUpTrigger.slotNames['vira-pop-up-trigger-trigger']}
                            >
                                Trigger
                            </div>
                            <div
                                class="pop-up"
                                slot=${ViraPopUpTrigger.slotNames['vira-pop-up-trigger-pop-up']}
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
                        </${ViraPopUpTrigger}>
                    </div>
                `;
            },
        });
    },
});
