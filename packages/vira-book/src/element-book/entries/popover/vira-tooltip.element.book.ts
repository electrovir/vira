import {defineBookPage} from 'element-book';
import {css, html, onDomCreated} from 'element-vir';
import {
    getPopoverHoverArea,
    PopoverTrigger,
    tooltip,
    ViraButton,
    viraTheme,
    ViraTooltip,
} from 'vira';
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
            title: 'hover area',
            styles: css`
                .hover-area-demo {
                    position: relative;
                    display: flex;
                    padding-top: 80px;
                }

                svg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    overflow: visible;
                    pointer-events: none;
                }

                polygon {
                    fill: ${viraTheme.colors['vira-blue-behind-bg-body'].background.value};
                    stroke: ${viraTheme.colors['vira-blue-foreground-body'].foreground.value};
                    stroke-dasharray: 4 4;
                }
            `,
            render() {
                return html`
                    <div
                        class="hover-area-demo"
                        ${onDomCreated((demoElement) => {
                            demoElement.addEventListener(
                                'toggle',
                                () => {
                                    const polygon = demoElement.querySelector('polygon');
                                    const anchor = demoElement.querySelector(ViraButton.tagName);
                                    const tooltipElement = demoElement.querySelector(
                                        `${ViraTooltip.tagName}:popover-open`,
                                    );
                                    const demoRect = demoElement.getBoundingClientRect();

                                    polygon?.setAttribute(
                                        'points',
                                        anchor && tooltipElement
                                            ? getPopoverHoverArea({
                                                  anchorRect: anchor.getBoundingClientRect(),
                                                  popoverRect:
                                                      tooltipElement.getBoundingClientRect(),
                                              })
                                                  .map((corner) => {
                                                      return [
                                                          corner.x - demoRect.left,
                                                          corner.y - demoRect.top,
                                                      ].join(',');
                                                  })
                                                  .join(' ')
                                            : '',
                                    );
                                },
                                /** `toggle` does not bubble, so only a capture listener sees it. */
                                {
                                    capture: true,
                                },
                            );
                        })}
                    >
                        <svg><polygon></polygon></svg>
                        <${ViraButton.assign({
                            text: 'Hover',
                        })}
                            ${tooltip(
                                'Moving the pointer anywhere in the outlined area keeps this tooltip open.',
                            )}
                        ></${ViraButton}>
                    </div>
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
