import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {PopoverTrigger, tooltip, ViraButton, ViraTooltip} from 'vira';
import {elementsBookPage} from '../../top-level-pages.js';

export const viraTooltipBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraTooltip.tagName,
    descriptionParagraphs: [
        'Render tooltips with the tooltip directive rather than this element directly. Hover or focus each button to see its tooltip.',
    ],
    defineExamples({defineExample}) {
        defineExample({
            title: 'string',
            render() {
                return html`
                    <${ViraButton.assign({
                        text: 'Save',
                    })}
                        ${tooltip('Save changes')}
                    ></${ViraButton}>
                `;
            },
        });
        defineExample({
            title: 'template',
            render() {
                return html`
                    <${ViraButton.assign({
                        text: 'Delete',
                    })}
                        ${tooltip(html`
                            <b>Cannot be undone.</b>
                            <br />
                            Deletes this item permanently.
                        `)}
                    ></${ViraButton}>
                `;
            },
        });
        defineExample({
            title: 'long text',
            render() {
                return html`
                    <${ViraButton.assign({
                        text: 'Details',
                    })}
                        ${tooltip(
                            'A long tooltip wraps once it reaches its max width so that it does not stretch across the whole page.',
                        )}
                    ></${ViraButton}>
                `;
            },
        });
        defineExample({
            title: 'styled by parent',
            styles: css`
                .highlight {
                    color: #ffd23f;
                }
            `,
            render() {
                return html`
                    <${ViraButton.assign({
                        text: 'Styled',
                    })}
                        ${tooltip(html`
                            <span class="highlight">Yellow</span>
                            from the example's styles
                        `)}
                    ></${ViraButton}>
                `;
            },
        });
        defineExample({
            title: 'trigger types',
            styles: css`
                :host {
                    display: flex;
                    gap: 8px;
                }
            `,
            render() {
                return html`
                    <${ViraButton.assign({
                        text: 'Click',
                    })}
                        ${tooltip('Toggled by clicking.', {
                            trigger: PopoverTrigger.Click,
                        })}
                    ></${ViraButton}>
                    <${ViraButton.assign({
                        text: 'Mousedown',
                    })}
                        ${tooltip('Toggled by pressing the mouse down.', {
                            trigger: PopoverTrigger.Mousedown,
                        })}
                    ></${ViraButton}>
                    <${ViraButton.assign({
                        text: 'Forced open',
                    })}
                        ${tooltip('Always open.', {
                            trigger: true,
                        })}
                    ></${ViraButton}>
                `;
            },
        });
        defineExample({
            title: 'delay',
            styles: css`
                :host {
                    display: flex;
                    gap: 8px;
                }
            `,
            render() {
                return html`
                    <${ViraButton.assign({
                        text: 'Hover for 1 second',
                    })}
                        ${tooltip('Shown after 1 second.', {
                            delay: {
                                seconds: 1,
                            },
                        })}
                    ></${ViraButton}>
                    <${ViraButton.assign({
                        text: 'Click and wait',
                    })}
                        ${tooltip('Shown 1 second after clicking.', {
                            trigger: PopoverTrigger.Click,
                            delay: {
                                seconds: 1,
                            },
                        })}
                    ></${ViraButton}>
                `;
            },
        });
        defineExample({
            title: 'timeout',
            styles: css`
                :host {
                    display: flex;
                    gap: 8px;
                }
            `,
            render() {
                return html`
                    <${ViraButton.assign({
                        text: 'Hover',
                    })}
                        ${tooltip('Hides after 2 seconds, even while hovered.', {
                            timeout: {
                                seconds: 2,
                            },
                        })}
                    ></${ViraButton}>
                    <${ViraButton.assign({
                        text: 'Click',
                    })}
                        ${tooltip('Hides 2 seconds after clicking.', {
                            trigger: PopoverTrigger.Click,
                            timeout: {
                                seconds: 2,
                            },
                        })}
                    ></${ViraButton}>
                `;
            },
        });
    },
});
