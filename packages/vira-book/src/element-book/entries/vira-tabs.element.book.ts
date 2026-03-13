import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {PathTree} from 'spa-router-vir';
import {
    Bell24Icon,
    Chat24Icon,
    Element24Icon,
    Star24Icon,
    ViraColorVariant,
    ViraTabs,
    ViraTabsBarDirection,
    ViraTabsIconLayout,
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
    },
});

const mockRouter = {
    createRouteUrl() {
        return window.location.href;
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

const selectedRoute = createMockRoute(mockPathTree.paths.children.tab2.fullPaths);

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
        colorVariant: ViraColorVariant.Plain as ViraColorVariant.Accent | ViraColorVariant.Plain,
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
            title: 'overflow into menu',
            styles: css`
                :host {
                    max-width: 200px;
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
            title: 'all combinations',
            styles: css`
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
                    ViraColorVariant.Accent,
                    ViraColorVariant.Plain,
                ] as const;

                return html`
                    ${colorVariants.map(
                        (colorVariant) => html`
                            <h4>${colorVariant} variant</h4>
                            <div class="grid">
                                ${barDirections.map(
                                    (barDirection) => html`
                                        <span>${barDirection}</span>
                                        <${ViraTabs.assign({
                                            tabs: tabsWithIcons,
                                            router: mockRouter,
                                            currentRoute: selectedRoute,
                                            barDirection,
                                            colorVariant,
                                        })}></${ViraTabs}>
                                    `,
                                )}
                            </div>
                        `,
                    )}
                `;
            },
        });
    },
});
