import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {html} from 'element-vir';
import {PathTree, type FullSpaRoute} from 'spa-router-vir';
import {ViraButton} from './vira-button.element.js';
import {ViraTabs, type ViraTab} from './vira-tabs.element.js';

const mockPathTree = new PathTree({
    allowBare: true,
    children: {
        ask: {},
        settings: {},
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

describe(ViraTabs.tagName, () => {
    it('does not wrap collapsed selector text', async () => {
        const fixture = await testWeb.render(html`
            <${ViraTabs.assign({
                tabs: mockTabs,
                router: mockRouter,
                currentRoute: createMockRoute(mockPathTree.paths.children.ask.fullPaths),
            })}></${ViraTabs}>
        `);

        assert.instanceOf(fixture, ViraTabs);

        const button = fixture.shadowRoot.querySelector(ViraButton.tagName);
        assert.instanceOf(button, ViraButton);

        assert.strictEquals(getComputedStyle(button).whiteSpace, 'nowrap');
    });
});
