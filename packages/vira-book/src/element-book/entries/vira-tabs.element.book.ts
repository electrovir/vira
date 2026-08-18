import {checkWrap} from '@augment-vir/assert';
import {addPx, removePx} from '@augment-vir/common';
import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {readCssVarValue, setCssVarValue} from 'lit-css-vars';
import {PathTree, type FullSpaRoute} from 'spa-router-vir';
import {
    Bell24Icon,
    Chat24Icon,
    defineViraElement,
    Element24Icon,
    Star24Icon,
    ViraColorVariant,
    ViraTabs,
    ViraTabsBarDirection,
    ViraTabsIconLayout,
    viraTheme,
    ViraThemeColorName,
    type ViraTab,
} from 'vira';
import {elementsBookPage} from '../top-level-pages.js';

const mockPathTree = new PathTree({
    allowBare: true,
    children: {
        tab1: {},
        tab2: {},
        tab3: {},
        tab4: {},
        tab5: {},
        tab6: {},
        tab7: {},
        tab8: {},
    },
});

const mockRouter = {
    createRouteUrl() {
        return {
            url: window.location.href,
            route: {} as FullSpaRoute,
        };
    },
    setRouteOnDirectNavigation() {
        return false;
    },
};

function createMockRoute(paths: ReadonlyArray<string>) {
    return {
        paths,
        search: {},
        hash: '',
    };
}

const tabsWithIcons: ReadonlyArray<Readonly<ViraTab>> = [
    {
        label: 'Dashboard',
        paths: mockPathTree.paths.children.tab1,
        icon: Element24Icon,
    },
    {
        label: 'Notifications',
        paths: mockPathTree.paths.children.tab2,
        icon: Bell24Icon,
    },
    {
        label: 'Messages',
        paths: mockPathTree.paths.children.tab3,
        icon: Chat24Icon,
    },
    {
        label: 'Favorites',
        paths: mockPathTree.paths.children.tab4,
        icon: Star24Icon,
    },
];

const tabsWithoutIcons: ReadonlyArray<Readonly<ViraTab>> = [
    {
        label: 'Dashboard',
        paths: mockPathTree.paths.children.tab1,
    },
    {
        label: 'Notifications',
        paths: mockPathTree.paths.children.tab2,
    },
    {
        label: 'Messages',
        paths: mockPathTree.paths.children.tab3,
    },
    {
        label: 'Favorites',
        paths: mockPathTree.paths.children.tab4,
    },
];

const tabsWithGroups: ReadonlyArray<Readonly<ViraTab>> = [
    {
        label: 'Overview',
        paths: mockPathTree.paths.children.tab1,
        group: 'General',
    },
    {
        label: 'Details',
        paths: mockPathTree.paths.children.tab2,
        group: 'General',
    },
    {
        label: 'Settings',
        paths: mockPathTree.paths.children.tab3,
        group: 'General',
    },
    {
        label: 'Reports',
        paths: mockPathTree.paths.children.tab4,
        group: 'Data',
    },
    {
        label: 'Exports',
        paths: mockPathTree.paths.children.tab5,
        group: 'Data',
    },
    {
        label: 'Members',
        paths: mockPathTree.paths.children.tab6,
        group: 'Team',
    },
    {
        label: 'Roles',
        paths: mockPathTree.paths.children.tab7,
        group: 'Team',
    },
    {
        label: 'History',
        paths: mockPathTree.paths.children.tab8,
    },
];

const selectedRoute = createMockRoute(mockPathTree.paths.children.tab2.fullPaths);

const selectedGroupedRoute = createMockRoute(mockPathTree.paths.children.tab6.fullPaths);

const simpleExamples = [
    {
        title: 'basic',
        tabs: tabsWithoutIcons,
    },
    {
        title: 'with icons (vertical layout)',
        tabs: tabsWithIcons,
    },
    {
        title: 'with icons (horizontal layout)',
        tabs: tabsWithIcons,
        iconLayout: ViraTabsIconLayout.Horizontal,
    },
    {
        title: 'plain color variant',
        tabs: tabsWithIcons,
        color: ViraColorVariant.Plain,
    },
    {
        title: 'neutral color variant',
        tabs: tabsWithIcons,
        color: ViraColorVariant.Neutral,
    },
    {
        title: 'danger color variant',
        tabs: tabsWithIcons,
        color: ViraColorVariant.Danger,
    },
    {
        title: 'warning color variant',
        tabs: tabsWithIcons,
        color: ViraColorVariant.Warning,
    },
    {
        title: 'positive color variant',
        tabs: tabsWithIcons,
        color: ViraColorVariant.Positive,
    },
    {
        title: 'bar direction: top',
        tabs: tabsWithIcons,
        barDirection: ViraTabsBarDirection.Top,
    },
    {
        title: 'bar direction: left',
        tabs: tabsWithIcons,
        barDirection: ViraTabsBarDirection.Left,
    },
    {
        title: 'bar direction: right',
        tabs: tabsWithIcons,
        barDirection: ViraTabsBarDirection.Right,
    },
];

const dynamicWidths = {
    max: 600,
    min: 150,
    default: 600,
};

const ViraDynamicWidthTabsExample = defineViraElement()({
    tagName: 'vira-dynamic-width-tabs-example',
    cssVars: {
        'vira-dynamic-width-tabs-example-width': addPx(dynamicWidths.default),
    },
    state() {
        return {
            intervalId: undefined as undefined | ReturnType<typeof globalThis.setInterval>,
            increment: 2,
        };
    },
    styles: ({cssVars}) => {
        return css`
            :host {
                display: block;
                border: 1px solid
                    ${viraTheme.colors['vira-grey-foreground-decoration'].foreground.value};
                width: ${cssVars['vira-dynamic-width-tabs-example-width'].value};
            }
        `;
    },
    init({state, updateState, host, cssVars}) {
        globalThis.clearInterval(state.intervalId);
        updateState({
            intervalId: globalThis.setInterval(() => {
                const currentWidth =
                    checkWrap.isNumber(
                        removePx(
                            readCssVarValue({
                                onElement: host,
                                forCssVar: cssVars['vira-dynamic-width-tabs-example-width'],
                            }),
                        ),
                    ) || dynamicWidths.default;

                if (currentWidth >= dynamicWidths.max || currentWidth <= dynamicWidths.min) {
                    updateState({
                        increment: state.increment * -1,
                    });
                }

                setCssVarValue({
                    onElement: host,
                    forCssVar: cssVars['vira-dynamic-width-tabs-example-width'],
                    toValue: addPx(currentWidth + state.increment),
                });
            }, 10),
        });
    },
    cleanup({state, updateState}) {
        globalThis.clearInterval(state.intervalId);
        updateState({
            intervalId: undefined,
        });
    },
    render() {
        return html`
            <slot></slot>
        `;
    },
});

export const viraTabsBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraTabs.tagName,
    descriptionParagraphs: [
        'A tab bar element with route-based selection. Tabs render as links for proper SPA navigation.',
    ],
    defineExamples({defineExample}) {
        simpleExamples.forEach(({title, ...extraInputs}) => {
            defineExample({
                title,
                styles: css`
                    :host {
                        display: block;
                        width: 640px;
                    }
                `,
                render() {
                    return html`
                        <${ViraTabs.assign({
                            router: mockRouter,
                            currentRoute: selectedRoute,
                            ...extraInputs,
                        })}></${ViraTabs}>
                    `;
                },
            });
        });

        defineExample({
            title: 'fill width',
            styles: css`
                :host {
                    width: 600px;
                    border: 1px solid
                        ${viraTheme.colors['vira-grey-foreground-decoration'].foreground.value};
                }
            `,
            render() {
                return html`
                    <${ViraTabs.assign({
                        tabs: tabsWithIcons,
                        router: mockRouter,
                        currentRoute: selectedRoute,
                        shouldFillWidth: true,
                    })}></${ViraTabs}>
                `;
            },
        });

        defineExample({
            title: 'overflow: selected tab collapsed into menu',
            styles: css`
                :host {
                    width: 240px;
                    border: 1px solid red;
                }
            `,
            render() {
                return html`
                    <${ViraTabs.assign({
                        tabs: tabsWithIcons,
                        router: mockRouter,
                        currentRoute: selectedRoute,
                    })}></${ViraTabs}>
                `;
            },
        });

        defineExample({
            title: 'overflow: selected tab stays inline',
            styles: css`
                :host {
                    width: 360px;
                    border: 1px solid red;
                }
            `,
            render() {
                return html`
                    <${ViraTabs.assign({
                        tabs: tabsWithIcons,
                        router: mockRouter,
                        currentRoute: selectedRoute,
                    })}></${ViraTabs}>
                `;
            },
        });

        defineExample({
            title: 'big font',
            styles: css`
                :host {
                    font-size: 32px;
                    width: 240px;
                    border: 1px solid red;
                }
            `,
            render() {
                return html`
                    <${ViraTabs.assign({
                        tabs: tabsWithIcons,
                        router: mockRouter,
                        currentRoute: selectedRoute,
                    })}></${ViraTabs}>
                `;
            },
        });

        defineExample({
            title: 'grouped tabs',
            styles: css`
                :host {
                    width: 700px;
                    border: 1px solid
                        ${viraTheme.colors['vira-grey-foreground-decoration'].foreground.value};
                }
            `,
            render() {
                return html`
                    <${ViraTabs.assign({
                        tabs: tabsWithGroups,
                        router: mockRouter,
                        currentRoute: selectedGroupedRoute,
                        color: ViraColorVariant.Plain,
                    })}></${ViraTabs}>
                `;
            },
        });

        defineExample({
            title: 'grouped overflow (selected in a collapsed cluster)',
            styles: css`
                :host {
                    width: 420px;
                    border: 1px solid red;
                }
            `,
            render() {
                return html`
                    <${ViraTabs.assign({
                        tabs: tabsWithGroups,
                        router: mockRouter,
                        currentRoute: selectedGroupedRoute,
                        color: ViraColorVariant.Plain,
                    })}></${ViraTabs}>
                `;
            },
        });

        defineExample({
            title: 'dynamic overflow',
            styles: css`
                :host {
                    width: ${dynamicWidths.max + 20}px;
                }
            `,
            render() {
                return html`
                    <${ViraDynamicWidthTabsExample}>
                        <${ViraTabs.assign({
                            tabs: tabsWithIcons,
                            router: mockRouter,
                            currentRoute: selectedRoute,
                        })}></${ViraTabs}>
                    </${ViraDynamicWidthTabsExample}>
                `;
            },
        });

        defineExample({
            title: 'all combinations',
            styles: css`
                :host {
                    display: block;
                    width: 760px;
                }

                .grid {
                    display: grid;
                    grid-template-columns: auto 1fr;
                    gap: 24px;
                    align-items: start;
                }

                h4 {
                    margin: 0;
                }
            `,
            render() {
                const barDirections = [
                    ViraTabsBarDirection.Top,
                    ViraTabsBarDirection.Bottom,
                    ViraTabsBarDirection.Left,
                    ViraTabsBarDirection.Right,
                ];

                const colorVariants = [
                    ViraColorVariant.Info,
                    ViraColorVariant.Plain,
                    ViraColorVariant.Neutral,
                    ViraColorVariant.Danger,
                    ViraColorVariant.Warning,
                    ViraColorVariant.Positive,
                ];

                return html`
                    ${colorVariants.map((colorVariant) => {
                        return html`
                            <h4>${colorVariant} variant</h4>
                            <div class="grid">
                                ${barDirections.map((barDirection) => {
                                    return html`
                                        <span>${barDirection}</span>
                                        <${ViraTabs.assign({
                                            tabs: tabsWithIcons,
                                            router: mockRouter,
                                            currentRoute: selectedRoute,
                                            barDirection,
                                            color: colorVariant,
                                        })}></${ViraTabs}>
                                    `;
                                })}
                            </div>
                        `;
                    })}
                `;
            },
        });

        defineExample({
            title: 'theme colors',
            styles: css`
                :host {
                    display: block;
                    width: 640px;
                }
            `,
            render() {
                return html`
                    ${Object.values(ViraThemeColorName).map((color) => {
                        return html`
                            <h4>${color}</h4>
                            <${ViraTabs.assign({
                                tabs: tabsWithoutIcons,
                                router: mockRouter,
                                currentRoute: selectedRoute,
                                color,
                            })}></${ViraTabs}>
                        `;
                    })}
                `;
            },
        });
    },
});
