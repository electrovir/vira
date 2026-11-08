import {assert, assertWrap, waitUntil} from '@augment-vir/assert';
import {type ArrayElement} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {waitForAnimationFrame} from '@augment-vir/web';
import {css, html, listen} from 'element-vir';
import {PathTree, type FullSpaRoute} from 'spa-router-vir';
import {ViraMenuItem} from './popover/vira-menu-item.element.js';
import {ViraButton} from './vira-button.element.js';
import {
    buildClusters,
    ViraTabs,
    ViraTabsBarDirection,
    ViraTabsOverflowBehavior,
    type ViraTab,
} from './vira-tabs.element.js';

const mockPathTree = new PathTree({
    allowBare: true,
    children: {
        ask: {},
        settings: {},
        one: {},
        two: {},
        three: {},
        four: {},
        five: {},
    },
});

function createMockRoute(paths: ReadonlyArray<string>): FullSpaRoute {
    return {
        paths,
        search: {},
        hash: '',
    };
}

const mockRouter = {
    createRouteUrl() {
        return {
            url: window.location.href,
            route: createMockRoute([]),
        };
    },
    setRouteOnDirectNavigation() {
        return false;
    },
};

const mockTabs = [
    {
        label: 'Ask AI',
        paths: mockPathTree.paths.children.ask,
    },
    {
        label: 'Settings',
        paths: mockPathTree.paths.children.settings,
    },
] satisfies ReadonlyArray<Readonly<ViraTab>>;

const manyTabs = [
    {
        label: 'One',
        paths: mockPathTree.paths.children.one,
    },
    {
        label: 'Two',
        paths: mockPathTree.paths.children.two,
    },
    {
        label: 'Three',
        paths: mockPathTree.paths.children.three,
    },
    {
        label: 'Four',
        paths: mockPathTree.paths.children.four,
    },
    {
        label: 'Five',
        paths: mockPathTree.paths.children.five,
    },
] satisfies ReadonlyArray<Readonly<ViraTab>>;

/**
 * Render {@link manyTabs} in a narrow container so they overflow, then wait until the overflow
 * "more" trigger appears.
 */
async function renderOverflowFixture(
    currentRoute: FullSpaRoute,
    {
        width = 200,
        overflowLabel,
        tabs = manyTabs,
    }: {
        width?: number;
        overflowLabel?: string;
        tabs?: ReadonlyArray<Readonly<ViraTab>>;
    } = {},
) {
    const fixture = await testWeb.render(html`
        <div
            style=${css`
                width: ${width}px;
            `}
        >
            <${ViraTabs.assign({
                tabs,
                router: mockRouter,
                currentRoute,
                overflowLabel,
            })}></${ViraTabs}>
        </div>
    `);

    const instance = assertWrap.instanceOf(fixture.querySelector(ViraTabs.tagName), ViraTabs);

    function visibleContainer() {
        return assertWrap.instanceOf(
            instance.shadowRoot.querySelector('.tabs-container:not(.tabs-measure)'),
            HTMLElement,
        );
    }
    function moreButtonLabel() {
        const textContent = visibleContainer().querySelector(ViraButton.tagName)?.textContent;
        return (textContent ?? '').trim();
    }

    await waitUntil.isTruthy(
        () => !!visibleContainer().querySelector(ViraButton.tagName),
        {
            timeout: {
                seconds: 2,
            },
        },
        'overflowing tabs never collapsed into a menu',
    );

    return {
        instance,
        visibleContainer,
        moreButtonLabel,
    };
}

function createGroupedTabs(
    entries: ReadonlyArray<Readonly<{label: string; group?: string | undefined}>>,
): ReadonlyArray<Readonly<ViraTab>> {
    return entries.map(({label, group}) => {
        return {
            label,
            paths: mockPathTree.paths.children.one,
            group,
        };
    });
}

/** Reduce clusters to just their group and member labels for readable, path-independent asserts. */
function summarizeClusters(
    clusters: ReadonlyArray<ArrayElement<ReturnType<typeof buildClusters>>>,
) {
    return clusters.map((cluster) => {
        return {
            group: cluster.group,
            labels: cluster.tabs.map((tab) => tab.label),
        };
    });
}

describe(buildClusters.name, () => {
    it('returns no clusters for an empty tab list', () => {
        assert.deepEquals(buildClusters([]), []);
    });

    it('places each ungrouped tab in its own cluster', () => {
        const clusters = buildClusters(
            createGroupedTabs([
                {
                    label: 'One',
                },
                {
                    label: 'Two',
                },
                {
                    label: 'Three',
                },
            ]),
        );

        assert.deepEquals(summarizeClusters(clusters), [
            {
                group: undefined,
                labels: ['One'],
            },
            {
                group: undefined,
                labels: ['Two'],
            },
            {
                group: undefined,
                labels: ['Three'],
            },
        ]);
    });

    it('merges consecutive tabs that share a group', () => {
        const clusters = buildClusters(
            createGroupedTabs([
                {
                    label: 'One',
                    group: 'a',
                },
                {
                    label: 'Two',
                    group: 'a',
                },
                {
                    label: 'Three',
                    group: 'a',
                },
                {
                    label: 'Four',
                    group: 'b',
                },
            ]),
        );

        assert.deepEquals(summarizeClusters(clusters), [
            {
                group: 'a',
                labels: [
                    'One',
                    'Two',
                    'Three',
                ],
            },
            {
                group: 'b',
                labels: ['Four'],
            },
        ]);
    });

    it('keeps non-consecutive tabs of the same group in separate clusters', () => {
        const clusters = buildClusters(
            createGroupedTabs([
                {
                    label: 'One',
                    group: 'a',
                },
                {
                    label: 'Two',
                    group: 'b',
                },
                {
                    label: 'Three',
                    group: 'a',
                },
            ]),
        );

        assert.deepEquals(summarizeClusters(clusters), [
            {
                group: 'a',
                labels: ['One'],
            },
            {
                group: 'b',
                labels: ['Two'],
            },
            {
                group: 'a',
                labels: ['Three'],
            },
        ]);
    });

    it('never merges adjacent ungrouped tabs into a grouped cluster', () => {
        const clusters = buildClusters(
            createGroupedTabs([
                {
                    label: 'One',
                    group: 'a',
                },
                {
                    label: 'Two',
                },
                {
                    label: 'Three',
                },
                {
                    label: 'Four',
                    group: 'a',
                },
            ]),
        );

        assert.deepEquals(summarizeClusters(clusters), [
            {
                group: 'a',
                labels: ['One'],
            },
            {
                group: undefined,
                labels: ['Two'],
            },
            {
                group: undefined,
                labels: ['Three'],
            },
            {
                group: 'a',
                labels: ['Four'],
            },
        ]);
    });
});

describe(ViraTabs.tagName, () => {
    it('leaves no gap after a grouped tab whose group label is wider than it', async () => {
        const fixture = await testWeb.render(html`
            <${ViraTabs.assign({
                tabs: [
                    {
                        label: 'Ask',
                        paths: mockPathTree.paths.children.ask,
                        group: 'A much longer group label',
                    },
                    {
                        label: 'Settings',
                        paths: mockPathTree.paths.children.settings,
                    },
                ],
                router: mockRouter,
                currentRoute: createMockRoute(mockPathTree.paths.children.ask.fullPaths),
            })}></${ViraTabs}>
        `);

        assert.instanceOf(fixture, ViraTabs);

        const [
            groupedTab,
            nextTab,
        ] = assertWrap.isLengthExactly(
            Array.from(
                fixture.shadowRoot.querySelectorAll('.tabs-container:not(.tabs-measure) .tab-item'),
            ),
            2,
        );
        const groupLabel = assertWrap.instanceOf(
            fixture.shadowRoot.querySelector('.tabs-container:not(.tabs-measure) .tab-group-label'),
            HTMLElement,
        );

        assert.isAbove(groupLabel.scrollWidth, groupedTab.getBoundingClientRect().width);
        assert.isAtMost(
            nextTab.getBoundingClientRect().left - groupedTab.getBoundingClientRect().right,
            1,
        );
    });

    it('renders all tabs inline and shows no overflow menu when they fit', async () => {
        const fixture = await testWeb.render(html`
            <${ViraTabs.assign({
                tabs: mockTabs,
                router: mockRouter,
                currentRoute: createMockRoute(mockPathTree.paths.children.ask.fullPaths),
            })}></${ViraTabs}>
        `);

        assert.instanceOf(fixture, ViraTabs);

        const visibleContainer = fixture.shadowRoot.querySelector(
            '.tabs-container:not(.tabs-measure)',
        );
        assert.instanceOf(visibleContainer, HTMLElement);

        assert.strictEquals(visibleContainer.querySelectorAll('.tab-item').length, mockTabs.length);
        assert.strictEquals(visibleContainer.querySelector(ViraButton.tagName), null);
    });

    it('keeps the measurement mirror invisible even when it holds a selected tab', async () => {
        const fixture = await testWeb.render(html`
            <${ViraTabs.assign({
                tabs: mockTabs,
                router: mockRouter,
                currentRoute: createMockRoute(mockPathTree.paths.children.ask.fullPaths),
            })}></${ViraTabs}>
        `);

        assert.instanceOf(fixture, ViraTabs);

        const measureMirror = assertWrap.instanceOf(
            fixture.shadowRoot.querySelector('.tabs-container.tabs-measure'),
            HTMLElement,
        );

        /**
         * The mirror must stay laid out so overflow widths can be measured, but it must never
         * paint: a label template that sets `visibility: visible` on itself overrides the mirror's
         * inherited `visibility: hidden`. `opacity: 0` (which a descendant cannot override) is what
         * actually keeps the mirror invisible.
         */
        assert.isAbove(measureMirror.getBoundingClientRect().width, 0);
        assert.strictEquals(globalThis.getComputedStyle(measureMirror).opacity, '0');
    });

    it('never allows tab label text to wrap', async () => {
        const fixture = await testWeb.render(html`
            <${ViraTabs.assign({
                tabs: mockTabs,
                router: mockRouter,
                currentRoute: createMockRoute(mockPathTree.paths.children.ask.fullPaths),
            })}></${ViraTabs}>
        `);

        assert.instanceOf(fixture, ViraTabs);

        const label = assertWrap.instanceOf(
            fixture.shadowRoot.querySelector('.tabs-container:not(.tabs-measure) .tab-label'),
            HTMLElement,
        );

        assert.strictEquals(globalThis.getComputedStyle(label).whiteSpace, 'nowrap');
    });

    it('never allows the overflow trigger text to wrap', async () => {
        const {visibleContainer} = await renderOverflowFixture(
            createMockRoute(mockPathTree.paths.children.five.fullPaths),
        );

        const triggerText = assertWrap.instanceOf(
            visibleContainer()
                .querySelector(ViraButton.tagName)
                ?.querySelector('.more-button-content'),
            HTMLElement,
        );

        assert.strictEquals(globalThis.getComputedStyle(triggerText).whiteSpace, 'nowrap');
    });

    it('collapses overflowing tabs into a menu and never overflows its host', async () => {
        const {instance, visibleContainer, moreButtonLabel} = await renderOverflowFixture(
            createMockRoute(mockPathTree.paths.children.five.fullPaths),
        );

        const container = visibleContainer();

        /** Some tabs collapsed, so fewer than all are inline. */
        assert.isBelow(container.querySelectorAll('.tab-item').length, manyTabs.length);
        /** The collapsed content must never widen the host past its available width. */
        assert.isAtMost(container.scrollWidth, instance.clientWidth + 1);

        /** The selected tab (Five) is collapsed, so the more button shows its label. */
        await waitUntil.isTruthy(
            () => moreButtonLabel() === 'Five',
            {
                timeout: {
                    seconds: 2,
                },
            },
            'the more button never showed the collapsed selected tab label',
        );
    });

    it('labels each group of tabs in the overflow menu', async () => {
        const groupedTabs = manyTabs.map((tab, index) => {
            return {
                ...tab,
                group: index < 2 ? 'Alpha' : 'Beta',
            };
        });
        const {visibleContainer} = await renderOverflowFixture(
            createMockRoute(mockPathTree.paths.children.one.fullPaths),
            {
                tabs: groupedTabs,
            },
        );

        const menuTrigger = assertWrap.isDefined(
            visibleContainer().querySelector('.tab-more vira-menu-trigger'),
        );
        const menuGroups = [...menuTrigger.querySelectorAll('vira-menu-item')].map((menuItem) => {
            return assertWrap.isDefined(
                groupedTabs.find((tab) => tab.label === menuItem.textContent.trim()),
            ).group;
        });

        assert.deepEquals(
            [...menuTrigger.querySelectorAll('.menu-group-label')].map((label) => {
                return label.textContent.trim();
            }),
            menuGroups.filter((group, index) => group !== menuGroups[index - 1]),
        );
    });

    it('shows the overflow label on the trigger when the selected tab stays inline', async () => {
        const {moreButtonLabel} = await renderOverflowFixture(
            createMockRoute(mockPathTree.paths.children.one.fullPaths),
            {
                overflowLabel: 'Extra',
            },
        );

        /** The selected tab (One) stays inline, so the trigger shows the overflow label. */
        await waitUntil.isTruthy(
            () => moreButtonLabel() === 'Extra',
            {
                timeout: {
                    seconds: 2,
                },
            },
            'the more button never showed the overflow label',
        );
    });

    it('keeps showing the collapsed selected tab label even when it overflows', async () => {
        const {moreButtonLabel} = await renderOverflowFixture(
            createMockRoute(mockPathTree.paths.children.five.fullPaths),
            {
                width: 90,
            },
        );

        /**
         * At this tiny width even the selected label cannot fully fit, but it is shown anyway
         * (allowed to overflow) rather than falling back to the generic overflow label.
         */
        await waitUntil.isTruthy(
            () => moreButtonLabel() === 'Five',
            {
                timeout: {
                    seconds: 2,
                },
            },
            'the more button fell back to the overflow label instead of the selected tab',
        );
    });

    it('renders template labels inline and on the collapsed selected trigger', async () => {
        const {visibleContainer} = await renderOverflowFixture(
            createMockRoute(mockPathTree.paths.children.five.fullPaths),
            {
                tabs: manyTabs.map((tab) => {
                    return {
                        ...tab,
                        label: html`
                            <b class="template-label">${tab.label}</b>
                        `,
                    };
                }),
            },
        );

        const inlineLabel = visibleContainer().querySelector('.tab-label .template-label');
        await waitUntil.isTruthy(
            () => {
                return (
                    visibleContainer()
                        .querySelector(ViraButton.tagName)
                        ?.querySelector('.template-label')?.textContent === 'Five'
                );
            },
            {
                timeout: {
                    seconds: 2,
                },
            },
            'the collapsed selected tab never rendered its template label on the trigger',
        );
        assert.strictEquals(inlineLabel?.textContent, 'One');
    });

    it('keeps template labels level whether selected or not and whatever they hold', async () => {
        const fixture = await testWeb.render(html`
            <${ViraTabs.assign({
                tabs: mockTabs.map((tab, index) => {
                    return {
                        ...tab,
                        label: html`
                            <span
                                class="template-label"
                                style=${css`
                                    display: inline-flex;
                                    align-items: center;
                                `}
                            >
                                ${index % 2
                                    ? html`
                                          <span
                                              style=${css`
                                                  display: inline-block;
                                                  width: 14px;
                                                  height: 14px;
                                              `}
                                          ></span>
                                      `
                                    : ''}
                                ${tab.label}
                            </span>
                        `,
                    };
                }),
                router: mockRouter,
                currentRoute: createMockRoute(mockPathTree.paths.children.ask.fullPaths),
            })}></${ViraTabs}>
        `);
        const tabs = assertWrap.instanceOf(fixture, ViraTabs);
        await waitUntil.isTruthy(
            () => {
                return tabs.shadowRoot.querySelector(
                    '.tabs-container:not(.tabs-measure) .tab-item.selected',
                );
            },
            {
                timeout: {
                    seconds: 2,
                },
            },
            'no tab was ever selected',
        );

        const labelTops = [
            ...tabs.shadowRoot.querySelectorAll(
                '.tabs-container:not(.tabs-measure) .tab-item .tab-label',
            ),
        ].map((label) => {
            return assertWrap
                .isDefined(label.querySelector('[aria-hidden="false"] .template-label'))
                .getBoundingClientRect().top;
        });

        assert.isLengthExactly(labelTops, 2);
        assert.strictEquals(labelTops[0], labelTops[1]);
    });

    [
        false,
        true,
    ].forEach((shouldRotateLabels) => {
        it(`stacks grouped tabs along a vertical bar (rotated labels: ${shouldRotateLabels})`, async () => {
            const fixture = await testWeb.render(html`
                <${ViraTabs.assign({
                    tabs: manyTabs.map((tab, index) => {
                        return {
                            ...tab,
                            group: index < 3 ? 'Alpha' : 'Beta',
                        };
                    }),
                    router: mockRouter,
                    currentRoute: createMockRoute(mockPathTree.paths.children.one.fullPaths),
                    barDirection: ViraTabsBarDirection.Left,
                    shouldRotateLabels,
                })}></${ViraTabs}>
            `);

            const tabRects = [
                ...assertWrap
                    .instanceOf(fixture, ViraTabs)
                    .shadowRoot.querySelectorAll('.tabs-container:not(.tabs-measure) .tab-item'),
            ].map((tabElement) => {
                return tabElement.getBoundingClientRect();
            });

            assert.isLengthExactly(tabRects, manyTabs.length);
            assert.deepEquals(
                new Set(
                    tabRects.map(({left}) => {
                        return left;
                    }),
                ).size,
                1,
            );
        });
    });

    it('turns labels sideways in a rotated vertical bar', async () => {
        const fixture = await testWeb.render(html`
            <${ViraTabs.assign({
                tabs: mockTabs,
                router: mockRouter,
                currentRoute: createMockRoute(mockPathTree.paths.children.ask.fullPaths),
                barDirection: ViraTabsBarDirection.Right,
                shouldRotateLabels: true,
            })}></${ViraTabs}>
        `);

        assert.instanceOf(fixture, ViraTabs);

        const tabItem = assertWrap.instanceOf(
            fixture.shadowRoot.querySelector('.tabs-container:not(.tabs-measure) .tab-item'),
            HTMLElement,
        );

        assert.isAbove(
            tabItem.getBoundingClientRect().height,
            tabItem.getBoundingClientRect().width,
        );
    });

    (
        [
            ViraTabsBarDirection.Left,
            ViraTabsBarDirection.Right,
        ] as const
    ).forEach((barDirection) => {
        [
            false,
            true,
        ].forEach((shouldFillWidth) => {
            it(`lines labels up along a ${barDirection} bar (fill width: ${shouldFillWidth})`, async () => {
                const fixture = await testWeb.render(html`
                    <div
                        style=${css`
                            display: flex;
                            width: 300px;
                        `}
                    >
                        <${ViraTabs.assign({
                            tabs: mockTabs,
                            router: mockRouter,
                            currentRoute: createMockRoute(
                                mockPathTree.paths.children.ask.fullPaths,
                            ),
                            barDirection,
                            shouldFillWidth,
                        })}></${ViraTabs}>
                    </div>
                `);
                const instance = assertWrap.instanceOf(
                    fixture.querySelector(ViraTabs.tagName),
                    ViraTabs,
                );
                const hostRect = instance.getBoundingClientRect();
                const labelRects = [
                    ...instance.shadowRoot.querySelectorAll(
                        '.tabs-container:not(.tabs-measure) .tab-content',
                    ),
                ].map((label) => {
                    return label.getBoundingClientRect();
                });

                const [
                    firstLabel,
                    secondLabel,
                ] = assertWrap.isLengthExactly(labelRects, 2);
                const isLeft = barDirection === ViraTabsBarDirection.Left;
                const barEdges = labelRects.map((rect) => {
                    return isLeft ? rect.left - hostRect.left : hostRect.right - rect.right;
                });

                assert.notStrictEquals(firstLabel.width, secondLabel.width);
                assert.isAtMost(
                    Math.abs(assertWrap.isDefined(barEdges[0]) - assertWrap.isDefined(barEdges[1])),
                    0.5,
                );
                assert.isBelow(assertWrap.isDefined(barEdges[0]), 20);
            });
        });
    });

    it('puts group labels below the tabs of a top bar', async () => {
        const fixture = await testWeb.render(html`
            <${ViraTabs.assign({
                tabs: [
                    {
                        label: 'Ask AI',
                        paths: mockPathTree.paths.children.ask,
                        group: 'Alpha',
                    },
                    {
                        label: 'Settings',
                        paths: mockPathTree.paths.children.settings,
                    },
                ],
                router: mockRouter,
                currentRoute: createMockRoute(mockPathTree.paths.children.ask.fullPaths),
                barDirection: ViraTabsBarDirection.Top,
            })}></${ViraTabs}>
        `);
        const instance = assertWrap.instanceOf(fixture, ViraTabs);
        const [
            groupedTab,
            standaloneTab,
        ] = assertWrap.isLengthExactly(
            [
                ...instance.shadowRoot.querySelectorAll(
                    '.tabs-container:not(.tabs-measure) .tab-item',
                ),
            ].map((tab) => {
                return tab.getBoundingClientRect();
            }),
            2,
        );
        const groupLabel = assertWrap
            .instanceOf(
                instance.shadowRoot.querySelector(
                    '.tabs-container:not(.tabs-measure) .tab-group-label',
                ),
                HTMLElement,
            )
            .getBoundingClientRect();

        assert.isAtMost(Math.abs(groupedTab.top - standaloneTab.top), 0.5);
        assert.isAtLeast(groupLabel.top, groupedTab.bottom - 0.5);
    });

    describe('overflowBehavior', () => {
        async function renderNarrowTabs(
            overflowBehavior: ViraTabsOverflowBehavior,
            tabs: ReadonlyArray<Readonly<ViraTab>> = manyTabs,
        ) {
            const fixture = await testWeb.render(html`
                <div
                    style=${css`
                        width: 200px;
                    `}
                >
                    <${ViraTabs.assign({
                        tabs,
                        router: mockRouter,
                        currentRoute: createMockRoute(mockPathTree.paths.children.one.fullPaths),
                        overflowBehavior,
                    })}></${ViraTabs}>
                </div>
            `);
            const instance = assertWrap.instanceOf(
                fixture.querySelector(ViraTabs.tagName),
                ViraTabs,
            );
            await waitForAnimationFrame(2);

            return {
                instance,
                container: assertWrap.instanceOf(
                    instance.shadowRoot.querySelector('.tabs-container:not(.tabs-measure)'),
                    HTMLElement,
                ),
            };
        }

        it('scrolls every tab inline without a scrollbar or a measurement mirror', async () => {
            const {instance, container} = await renderNarrowTabs(ViraTabsOverflowBehavior.Scroll);

            assert.deepEquals(
                {
                    tabCount: container.querySelectorAll('.tab-item').length,
                    hasMoreButton: !!container.querySelector(ViraButton.tagName),
                    hasMirror: !!instance.shadowRoot.querySelector('.tabs-measure'),
                    isScrollable: container.scrollWidth > container.clientWidth,
                    isWithinHost: container.clientWidth <= instance.clientWidth,
                    scrollbarWidth: getComputedStyle(container).scrollbarWidth,
                },
                {
                    tabCount: manyTabs.length,
                    hasMoreButton: false,
                    hasMirror: false,
                    isScrollable: true,
                    isWithinHost: true,
                    scrollbarWidth: 'none',
                },
            );
        });

        it('wraps every tab onto more rows within its host', async () => {
            const {instance, container} = await renderNarrowTabs(ViraTabsOverflowBehavior.Wrap);
            const tabItems = Array.from(container.querySelectorAll('.tab-item'));
            const rowTops = new Set(tabItems.map((tab) => tab.getBoundingClientRect().top));

            assert.deepEquals(
                {
                    tabCount: tabItems.length,
                    hasMoreButton: !!container.querySelector(ViraButton.tagName),
                    isWithinHost: container.scrollWidth <= instance.clientWidth,
                    hasMultipleRows: rowTops.size > 1,
                },
                {
                    tabCount: manyTabs.length,
                    hasMoreButton: false,
                    isWithinHost: true,
                    hasMultipleRows: true,
                },
            );
        });
    });

    describe('contextMenuEntries', () => {
        async function renderContextMenuTabs() {
            const menuClicks: string[] = [];
            const selectedTabs: string[] = [];
            const tabs = mockTabs.map((tab) => {
                return {
                    ...tab,
                    contextMenuEntries: [
                        {
                            content: 'Close',
                            onClick() {
                                menuClicks.push(tab.label);
                            },
                        },
                    ],
                };
            });
            const fixture = await testWeb.render(html`
                <${ViraTabs.assign({
                    tabs,
                    router: mockRouter,
                    currentRoute: createMockRoute(mockPathTree.paths.children.ask.fullPaths),
                })}
                    ${listen(ViraTabs.events.tabSelect, (event) => {
                        selectedTabs.push(event.detail.paths.fullPaths.join('/'));
                    })}
                ></${ViraTabs}>
            `);
            const instance = assertWrap.instanceOf(fixture, ViraTabs);

            function listTabItems(selector: string) {
                return Array.from(instance.shadowRoot.querySelectorAll(selector)).map((element) => {
                    return assertWrap.instanceOf(element, HTMLElement);
                });
            }

            return {
                instance,
                menuClicks,
                selectedTabs,
                visibleTabs: listTabItems('.tabs-container:not(.tabs-measure) .tab-item'),
                measuredTabs: listTabItems('.tabs-measure .tab-item'),
            };
        }

        async function openContextMenu(tabItem: HTMLElement) {
            assertWrap.isDefined(tabItem.querySelector('.context-menu-trigger')).dispatchEvent(
                new MouseEvent('mousedown', {
                    button: 2,
                    bubbles: true,
                    composed: true,
                }),
            );
            /** Menu items stay in the DOM while closed, but only get a box once slotted open. */
            await waitUntil.isTrue(
                () => !!tabItem.querySelector(ViraMenuItem.tagName)?.checkVisibility(),
            );
            return assertWrap.instanceOf(tabItem.querySelector(ViraMenuItem.tagName), HTMLElement);
        }

        it('adds no length to a tab, so overflow measuring stays accurate', async () => {
            const {visibleTabs, measuredTabs} = await renderContextMenuTabs();

            assert.deepEquals(
                visibleTabs.map((tab) => tab.getBoundingClientRect().width),
                measuredTabs.map((tab) => tab.getBoundingClientRect().width),
            );
        });

        it('runs the menu item action without selecting the tab', async () => {
            const {visibleTabs, menuClicks, selectedTabs} = await renderContextMenuTabs();
            const settingsTab = assertWrap.isDefined(visibleTabs[1]);

            (await openContextMenu(settingsTab)).click();

            assert.deepEquals(
                {
                    menuClicks,
                    selectedTabs,
                },
                {
                    menuClicks: ['Settings'],
                    selectedTabs: [],
                },
            );
        });

        it('opens on the selected tab too', async () => {
            const {visibleTabs, menuClicks} = await renderContextMenuTabs();

            (await openContextMenu(assertWrap.isDefined(visibleTabs[0]))).click();

            assert.deepEquals(menuClicks, ['Ask AI']);
        });
    });
});
