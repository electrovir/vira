import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {HorizontalAnchor, viraFocusCssVars, ViraPopoverTrigger} from 'vira';
import {elementsBookPage} from '../../top-level-pages.js';

export const viraPopoverTriggerBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraPopoverTrigger.tagName,
    defineExamples({defineExample}) {
        defineExample({
            title: 'basic',
            styles: css`
                ${ViraPopoverTrigger} {
                    ${viraFocusCssVars['vira-focus-outline-border-radius'].name}: 0;
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
                    <${ViraPopoverTrigger.assign({keepOpenAfterInteraction: true})}>
                        <div class="trigger" slot=${ViraPopoverTrigger.slotNames.trigger}>
                            Trigger Popover
                        </div>
                        <div class="popover" slot=${ViraPopoverTrigger.slotNames.popover}>
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
                        <div slot=${ViraPopoverTrigger.slotNames.trigger}>
                            Trigger Long Clipped Popover
                        </div>
                        <div class="popover" slot=${ViraPopoverTrigger.slotNames.popover}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${ViraPopoverTrigger}>
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
                        horizontalAnchor: HorizontalAnchor.Right,
                    })}>
                        <div slot=${ViraPopoverTrigger.slotNames.trigger}>
                            Trigger Long Right Anchored Popover
                        </div>
                        <div class="popover" slot=${ViraPopoverTrigger.slotNames.popover}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${ViraPopoverTrigger}>
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
                        horizontalAnchor: HorizontalAnchor.Left,
                    })}>
                        <div slot=${ViraPopoverTrigger.slotNames.trigger}>
                            Trigger Long Left Anchored Popover
                        </div>
                        <div class="popover" slot=${ViraPopoverTrigger.slotNames.popover}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${ViraPopoverTrigger}>
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
                        horizontalAnchor: HorizontalAnchor.Right,
                    })}>
                        <div slot=${ViraPopoverTrigger.slotNames.trigger}>
                            Trigger Long Left Anchored Popover
                        </div>
                        <div class="popover" slot=${ViraPopoverTrigger.slotNames.popover}>
                            not long
                        </div>
                    </${ViraPopoverTrigger}>
                `;
            },
        });
    },
});
