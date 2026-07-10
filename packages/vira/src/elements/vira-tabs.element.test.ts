import {assert, assertWrap, waitUntil} from '@augment-vir/assert';
import {type ArrayElement} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {css, html} from 'element-vir';
import {PathTree, type FullSpaRoute} from 'spa-router-vir';
import {ViraButton} from './vira-button.element.js';
import {buildClusters, ViraTabs, type ViraTab} from './vira-tabs.element.js';

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
    {width = 260, overflowLabel}: {width?: number; overflowLabel?: string} = {},
) {
    const fixture = await testWeb.render(html`
        <div
            style=${css`
                width: ${width}px;
            `}
        >
            <${ViraTabs.assign({
                tabs: manyTabs,
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
        const textContent = visibleContainer()
            .querySelector(ViraButton.tagName)
            ?.shadowRoot?.querySelector('.text-template')?.textContent;
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
                ?.shadowRoot?.querySelector('.text-template'),
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
});
