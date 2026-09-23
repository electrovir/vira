import {assert, assertWrap, waitUntil} from '@augment-vir/assert';
import {randomString} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {queryThroughShadow, waitForAnimationFrame} from '@augment-vir/web';
import {css, html, listen} from 'element-vir';
import {renderMenuItemEntries} from '../../util/menu-helpers.js';
import {ViraThemeClient, ViraThemeSelection} from '../../util/vira-theme-client.js';
import {ViraThemeSwitcher} from '../vira-theme-switcher.element.js';
import {ViraMenuItem} from './vira-menu-item.element.js';
import {ViraMenuTrigger} from './vira-menu-trigger.element.js';
import {ViraMenu} from './vira-menu.element.js';

/**
 * Mimics interactive menu-item content (e.g. a `ViraLink`) that handles the click itself and
 * prevents it from bubbling up to the popover's own close handler. A direct click on such content
 * used to leave the popover open because the only close path was the bubbled click.
 */
const interactiveContentClass = 'interactive-content';
const interactiveTextClass = 'interactive-text';

async function setupMenuTest(
    inputs?: Partial<(typeof ViraMenuTrigger)['InputsType']>,
    plainItemKeepOpen?: boolean,
) {
    const events: {
        openChange: boolean[];
        plainItemClicks: number;
    } = {
        openChange: [],
        plainItemClicks: 0,
    };

    const fixture = await testWeb.render(html`
        <div
            style=${css`
                height: 1000px;
            `}
        >
            <${ViraMenuTrigger.assign({
                ...inputs,
            })}
                ${listen(ViraMenuTrigger.events.openChange, (event) => {
                    events.openChange.push(event.detail);
                })}
            >
                <button
                    class="trigger"
                    slot=${ViraMenuTrigger.slotNames['vira-menu-trigger-trigger']}
                >
                    Open
                </button>
                ${renderMenuItemEntries([
                    {
                        content: html`
                            <a
                                class=${interactiveContentClass}
                                href="#"
                                ${listen('click', (event) => {
                                    event.preventDefault();
                                    event.stopPropagation();
                                })}
                            >
                                <span class=${interactiveTextClass}>Interactive</span>
                            </a>
                        `,
                    },
                    {
                        content: 'Plain',
                        keepOpenAfterInteraction: plainItemKeepOpen,
                        onClick() {
                            events.plainItemClicks++;
                        },
                    },
                ])}
            </${ViraMenuTrigger}>
        </div>
    `);

    const instance = assertWrap.instanceOf(
        fixture.querySelector(ViraMenuTrigger.tagName),
        ViraMenuTrigger,
    );

    function findMenu() {
        return queryThroughShadow(instance, ViraMenu.tagName);
    }

    const triggerButton = assertWrap.instanceOf(instance.querySelector('.trigger'), HTMLElement);

    assert.isNullish(findMenu());

    return {
        events,
        fixture,
        instance,
        findMenu,
        triggerButton,
        async open(this: void) {
            await testWeb.click(triggerButton);
            await waitUntil.isTruthy(
                () => !!findMenu(),
                {
                    timeout: {
                        seconds: 1,
                    },
                },
                'the menu never popped up',
            );
        },
    };
}

describe(ViraMenuTrigger.tagName, () => {
    it('closes when a plain menu item is clicked', async () => {
        const {open, findMenu, instance, events} = await setupMenuTest();

        await open();

        const items = Array.from(instance.querySelectorAll(ViraMenuItem.tagName));
        assert.isLengthExactly(items, 2);
        assert.isDefined(items[1]);
        await testWeb.click(items[1]);

        await waitUntil(
            () => !findMenu(),
            {
                timeout: {
                    seconds: 1,
                },
            },
            'the menu never closed',
        );
        assert.deepEquals(events.openChange, [
            true,
            false,
        ]);
    });

    it('closes when interactive menu-item content is clicked directly', async () => {
        const {open, findMenu, instance, events} = await setupMenuTest();

        await open();

        /**
         * Click the text _inside_ the interactive content. The content stops the click from
         * bubbling to the popover, so the close must be driven by the menu item's `select` event.
         */
        const interactiveText = assertWrap.instanceOf(
            instance.querySelector(`.${interactiveTextClass}`),
            HTMLElement,
        );
        await testWeb.click(interactiveText);

        await waitUntil(
            () => !findMenu(),
            {
                timeout: {
                    seconds: 1,
                },
            },
            'the menu stayed open after clicking interactive content',
        );
        assert.deepEquals(events.openChange, [
            true,
            false,
        ]);
    });

    it('keeps the popover open when a menu item sets keepOpenAfterInteraction', async () => {
        const {open, findMenu, instance, events} = await setupMenuTest(undefined, true);

        await open();

        const items = Array.from(instance.querySelectorAll(ViraMenuItem.tagName));
        assert.isLengthExactly(items, 2);
        assert.isDefined(items[1]);
        await testWeb.click(items[1]);

        /** Give the popover a chance to (incorrectly) close before asserting it stayed open. */
        await waitForAnimationFrame(5);

        assert.isTruthy(
            findMenu(),
            'the menu should stay open when the clicked item sets keepOpenAfterInteraction',
        );
        assert.deepEquals(events.openChange, [
            true,
        ]);
        assert.strictEquals(
            events.plainItemClicks,
            1,
            'the consumer onClick should still fire for a kept-open item',
        );
    });

    it('keeps an overridden theme picker open', async () => {
        const themeClient = new ViraThemeClient({
            applyTheme() {},
            storeName: randomString(),
        });

        try {
            const events = {
                openChange: [] as boolean[],
            };
            const fixture = await testWeb.render(html`
                <div
                    style=${css`
                        height: 1000px;
                    `}
                >
                    <${ViraMenuTrigger.assign({})}
                        ${listen(ViraMenuTrigger.events.openChange, (event) => {
                            events.openChange.push(event.detail);
                        })}
                    >
                        <button slot=${ViraMenuTrigger.slotNames['vira-menu-trigger-trigger']}>
                            Open
                        </button>
                        ${renderMenuItemEntries([
                            {
                                content: html`
                                    <${ViraThemeSwitcher.assign({
                                        themeClient,
                                    })}></${ViraThemeSwitcher}>
                                `,
                                disablePointerStyles: true,
                                keepOpenAfterInteraction: true,
                            },
                        ])}
                    </${ViraMenuTrigger}>
                </div>
            `);
            const trigger = assertWrap.instanceOf(
                fixture.querySelector('button'),
                HTMLButtonElement,
            );
            const instance = assertWrap.instanceOf(
                fixture.querySelector(ViraMenuTrigger.tagName),
                ViraMenuTrigger,
            );

            await testWeb.click(trigger);
            await waitUntil.isTruthy(() => {
                return queryThroughShadow(instance, ViraMenu.tagName);
            });

            const themeSwitcher = assertWrap.instanceOf(
                instance.querySelector(ViraThemeSwitcher.tagName),
                ViraThemeSwitcher,
            );
            const darkThemeButton = assertWrap.instanceOf(
                themeSwitcher.shadowRoot.querySelectorAll('button')[1],
                HTMLButtonElement,
            );

            await testWeb.click(darkThemeButton);
            await waitForAnimationFrame(5);

            assert.deepEquals(events.openChange, [true]);
            assert.strictEquals(themeClient.getCurrentTheme(), ViraThemeSelection.Dark);
            assert.isTruthy(queryThroughShadow(instance, ViraMenu.tagName));
        } finally {
            themeClient.destroy();
        }
    });

    it('still closes for sibling items when only one item keeps the popover open', async () => {
        const {open, findMenu, instance, events} = await setupMenuTest(undefined, true);

        await open();

        const interactiveText = assertWrap.instanceOf(
            instance.querySelector(`.${interactiveTextClass}`),
            HTMLElement,
        );
        await testWeb.click(interactiveText);

        await waitUntil(
            () => !findMenu(),
            {
                timeout: {
                    seconds: 1,
                },
            },
            'the menu never closed for a sibling item without keepOpenAfterInteraction',
        );
        assert.deepEquals(events.openChange, [
            true,
            false,
        ]);
    });

    it('keeps the popover open when keepOpenAfterInteraction is set', async () => {
        const {open, findMenu, instance, events} = await setupMenuTest({
            keepOpenAfterInteraction: true,
        });

        await open();

        const interactiveText = assertWrap.instanceOf(
            instance.querySelector(`.${interactiveTextClass}`),
            HTMLElement,
        );
        await testWeb.click(interactiveText);

        /** Give the popover a chance to (incorrectly) close before asserting it stayed open. */
        await waitForAnimationFrame(5);

        assert.isTruthy(findMenu(), 'the menu should stay open with keepOpenAfterInteraction');
        assert.deepEquals(events.openChange, [
            true,
        ]);
    });
});
