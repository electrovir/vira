import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {html} from 'element-vir';
import {isMouseEventOnScrollbar, isPointInPopoverHoverArea} from './popover-manager.js';

/**
 * Scrollbar clicks cannot be synthesized (a `MouseEvent` at scrollbar coordinates still reports the
 * element itself as its target, which is exactly what a real scrollbar click does), so these tests
 * dispatch events at the coordinates a real scrollbar occupies.
 */
function dispatchMouseDownAt(
    element: Readonly<Element>,
    coords: Readonly<{
        clientX: number;
        clientY: number;
    }>,
) {
    const events: MouseEvent[] = [];
    element.addEventListener(
        'mousedown',
        (event) => {
            assert.instanceOf(event, MouseEvent);
            events.push(event);
        },
        {
            once: true,
        },
    );
    element.dispatchEvent(
        new MouseEvent('mousedown', {
            ...coords,
            bubbles: true,
            composed: true,
        }),
    );

    assert.isLengthExactly(events, 1);

    return events[0];
}

describe(isMouseEventOnScrollbar.name, () => {
    async function renderScrollableFixture() {
        const fixture = await testWeb.render(html`
            <div style="overflow: auto; width: 100px; height: 50px;">
                <div style="width: 40px; height: 500px;"></div>
            </div>
        `);
        assert.instanceOf(fixture, HTMLDivElement);

        return fixture;
    }

    it('detects a click on a vertical scrollbar', async () => {
        const fixture = await renderScrollableFixture();
        const rect = fixture.getBoundingClientRect();

        /**
         * Without a scrollbar there is nothing to test, which some platforms (overlay scrollbars)
         * do.
         */
        if (fixture.clientWidth >= rect.width) {
            return;
        }

        assert.isTrue(
            isMouseEventOnScrollbar(
                dispatchMouseDownAt(fixture, {
                    clientX: rect.right - 1,
                    clientY: rect.top + 10,
                }),
            ),
        );
    });

    it('ignores a click on scrollable content', async () => {
        const fixture = await renderScrollableFixture();
        const rect = fixture.getBoundingClientRect();

        assert.isFalse(
            isMouseEventOnScrollbar(
                dispatchMouseDownAt(fixture, {
                    clientX: rect.left + 10,
                    clientY: rect.top + 10,
                }),
            ),
        );
    });

    it('ignores a click on an element that cannot scroll', async () => {
        const fixture = await testWeb.render(html`
            <div style="width: 100px; height: 50px; border: 4px solid black;"></div>
        `);
        assert.instanceOf(fixture, HTMLDivElement);
        const rect = fixture.getBoundingClientRect();

        assert.isFalse(
            isMouseEventOnScrollbar(
                dispatchMouseDownAt(fixture, {
                    clientX: rect.right - 1,
                    clientY: rect.top + 1,
                }),
            ),
        );
    });

    it('ignores a click on inline content', async () => {
        const fixture = await testWeb.render(html`
            <div style="overflow: hidden;"><b>Bold label</b></div>
        `);
        const inlineElement = fixture.querySelector('b');
        assert.instanceOf(inlineElement, HTMLElement);
        const rect = inlineElement.getBoundingClientRect();

        const results: boolean[] = [];
        inlineElement.addEventListener('mousedown', (event) => {
            results.push(isMouseEventOnScrollbar(event));
        });
        inlineElement.dispatchEvent(
            new MouseEvent('mousedown', {
                clientX: rect.left + rect.width / 2,
                clientY: rect.top + rect.height / 2,
                bubbles: true,
                composed: true,
            }),
        );

        assert.deepEquals(results, [
            false,
        ]);
    });
});

describe(isPointInPopoverHoverArea.name, () => {
    /** A small anchor below a wider popover, with a gap between them. */
    const rects = {
        anchorRect: {
            top: 100,
            bottom: 120,
            left: 100,
            right: 120,
        },
        popoverRect: {
            top: 0,
            bottom: 80,
            left: 0,
            right: 220,
        },
    };

    it('includes both rects and the cone between their facing edges', () => {
        assert.deepEquals(
            [
                {
                    x: 110,
                    y: 110,
                },
                {
                    x: 10,
                    y: 10,
                },
                {
                    x: 110,
                    y: 90,
                },
                {
                    x: 60,
                    y: 85,
                },
            ].map((point) => {
                return isPointInPopoverHoverArea({
                    ...rects,
                    point,
                });
            }),
            [
                true,
                true,
                true,
                true,
            ],
        );
    });

    it('excludes points beside the cone or beside the anchor', () => {
        assert.deepEquals(
            [
                {
                    x: 20,
                    y: 100,
                },
                {
                    x: 200,
                    y: 110,
                },
                {
                    x: 110,
                    y: 130,
                },
                {
                    x: 90,
                    y: 110,
                },
            ].map((point) => {
                return isPointInPopoverHoverArea({
                    ...rects,
                    point,
                });
            }),
            [
                false,
                false,
                false,
                false,
            ],
        );
    });
});
