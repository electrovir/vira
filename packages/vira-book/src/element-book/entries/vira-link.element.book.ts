import {BookPageControlType, defineBookPage, definePageControl} from 'element-book';
import {css, html, unsafeCSS} from 'element-vir';
import {type FullSpaRoute} from 'spa-router-vir';
import {viraFormCssVars, ViraLink} from 'vira';
import {elementsBookPage} from '../top-level-pages.js';

export const viraLinkBookPage = defineBookPage({
    title: ViraLink.tagName,
    parent: elementsBookPage,
    descriptionParagraphs: [
        'Securely handles hyperlinks or route changes without harming right click or modifier+click functionality.',
    ],
    controls: {
        'CSS Color': definePageControl({
            controlType: BookPageControlType.Color,
            initValue: '',
        }),
        'Hover color': definePageControl({
            controlType: BookPageControlType.Color,
            initValue: '',
        }),
        'Active color': definePageControl({
            controlType: BookPageControlType.Color,
            initValue: '',
        }),
    },
    defineExamples({defineExample}) {
        function defineLinkExample({
            title,
            inputs,
        }: {
            title: string;
            inputs: (typeof ViraLink)['InputsType'];
        }) {
            defineExample({
                title,
                render({controls}) {
                    const styles = css`
                        ${viraFormCssVars['vira-form-accent-primary-color'].name}: ${unsafeCSS(
                            controls['Hover color'] || 'inherit',
                        )};
                        ${viraFormCssVars['vira-form-accent-primary-active-color']
                            .name}: ${unsafeCSS(controls['Active color'] || 'inherit')};
                        color: ${unsafeCSS(controls['CSS Color'] || 'inherit')};
                    `;

                    return html`
                        <${ViraLink.assign(inputs)} style=${styles}>My Link</${ViraLink}>
                    `;
                },
            });
        }

        defineLinkExample({
            title: 'with URL',
            inputs: {
                link: {
                    newTab: true,
                    url: 'https://www.wikipedia.org',
                },
            },
        });
        defineLinkExample({
            title: 'with route',
            inputs: {
                route: {
                    route: {
                        paths: [],
                    },
                    router: {
                        createRouteUrl() {
                            return {
                                url: window.location.href,
                                route: {} as FullSpaRoute,
                            };
                        },
                        setRouteOnDirectNavigation(route, event) {
                            console.info(route, event);
                            return false;
                        },
                    },
                },
            },
        });
        defineLinkExample({
            title: 'disabled link styles',
            inputs: {
                disableLinkStyles: true,
                link: {
                    newTab: true,
                    url: 'https://www.wikipedia.org',
                },
            },
        });
    },
});
