import {assert, assertWrap, waitUntil} from '@augment-vir/assert';
import {createArray} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {waitForAnimationFrame} from '@augment-vir/web';
import {css, html, listen} from 'element-vir';
import {renderMenuItemEntries} from '../../util/menu-helpers.js';
import {ViraMenu} from './vira-menu.element.js';

async function setupMenuTest(itemCount: number) {
    const events = {
        wrapperClicks: 0,
    };

    const fixture = await testWeb.render(html`
        <div
            style=${css`
                display: flex;
                flex-direction: column;
                height: 200px;
            `}
            ${listen('click', () => {
                events.wrapperClicks++;
            })}
        >
            <${ViraMenu}>
                ${renderMenuItemEntries(
                    createArray(itemCount, (index) => {
                        return {
                            content: `Item ${index}`,
                        };
                    }),
                )}
            </${ViraMenu}>
        </div>
    `);

    const menu = assertWrap.instanceOf(fixture.querySelector(ViraMenu.tagName), ViraMenu);
    await waitForAnimationFrame(2);

    return {
        events,
        scrollArea: assertWrap.instanceOf(
            menu.shadowRoot.querySelector('.scroll-area'),
            HTMLElement,
        ),
        upArrow: assertWrap.instanceOf(
            menu.shadowRoot.querySelector('.scroll-arrow.up'),
            HTMLElement,
        ),
        downArrow: assertWrap.instanceOf(
            menu.shadowRoot.querySelector('.scroll-arrow.down'),
            HTMLElement,
        ),
    };
}

function isShown(element: Readonly<HTMLElement>) {
    return element.getBoundingClientRect().height > 0;
}

describe(ViraMenu.tagName, () => {
    it('hides both arrows when nothing overflows', async () => {
        const {upArrow, downArrow} = await setupMenuTest(2);

        assert.deepEquals(
            [
                isShown(upArrow),
                isShown(downArrow),
            ],
            [
                false,
                false,
            ],
        );
    });

    it('hides the up arrow until the first item is more than half hidden', async () => {
        const {upArrow, scrollArea} = await setupMenuTest(50);
        const firstItemHeight = assertWrap
            .isDefined(
                assertWrap.instanceOf(scrollArea.parentNode, ShadowRoot).host.firstElementChild,
            )
            .getBoundingClientRect().height;

        scrollArea.scrollTop = firstItemHeight / 4;
        await waitForAnimationFrame(2);
        const isShownWhenBarelyScrolled = isShown(upArrow);

        scrollArea.scrollTop = firstItemHeight;
        await waitForAnimationFrame(2);

        assert.deepEquals(
            [
                isShownWhenBarelyScrolled,
                isShown(upArrow),
            ],
            [
                false,
                true,
            ],
        );
    });

    it('scrolls down while the down arrow is hovered', async () => {
        const {upArrow, downArrow, scrollArea} = await setupMenuTest(50);

        assert.deepEquals(
            [
                isShown(upArrow),
                isShown(downArrow),
            ],
            [
                false,
                true,
            ],
        );

        await testWeb.moveMouseTo(downArrow);
        await waitUntil.isTruthy(
            () => scrollArea.scrollTop > 0 && isShown(upArrow),
            {
                timeout: {
                    seconds: 2,
                },
            },
            'hovering the down arrow never scrolled',
        );
    });

    it('stops clicks on an arrow from bubbling out of the menu', async () => {
        const {downArrow, events} = await setupMenuTest(50);

        await testWeb.click(downArrow);

        assert.strictEquals(events.wrapperClicks, 0);
    });
});
