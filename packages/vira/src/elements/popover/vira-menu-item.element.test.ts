import {assert, assertWrap, waitUntil} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {resetMouse} from '@web/test-runner-commands';
import {css, html, type HtmlInterpolation, listen} from 'element-vir';
import {viraFormCssVars} from '../../styles/form-styles.js';
import {ViraMenuItem} from './vira-menu-item.element.js';

describe(ViraMenuItem.tagName, () => {
    async function renderMenuItemWithRawContent() {
        const received = {
            click: 0,
            mousedown: 0,
        };

        const fixture = await testWeb.render(html`
            <${ViraMenuItem.assign({})}>
                <button
                    ${listen('click', () => {
                        received.click++;
                    })}
                    ${listen('mousedown', () => {
                        received.mousedown++;
                    })}
                >
                    raw content
                </button>
            </${ViraMenuItem}>
        `);

        assert.instanceOf(fixture, ViraMenuItem);

        return {
            instance: fixture,
            received,
        };
    }

    it('forwards a padding click into slotted content exactly once', async () => {
        const {instance, received} = await renderMenuItemWithRawContent();

        /**
         * Dispatching directly on the host (rather than the slotted content) simulates a click that
         * lands on the menu item's padding. A real click is a `mousedown` followed by a `click`;
         * only the `click` should reach the content. Forwarding `mousedown` as well would
         * double-trigger the content (e.g. `<select>.showPicker()` firing twice).
         */
        instance.dispatchEvent(
            new MouseEvent('mousedown', {
                bubbles: true,
                composed: true,
                cancelable: true,
            }),
        );
        instance.dispatchEvent(
            new MouseEvent('click', {
                bubbles: true,
                composed: true,
                cancelable: true,
            }),
        );

        assert.deepEquals(received, {
            click: 1,
            mousedown: 0,
        });
    });

    it('fires host click listeners once for a padding click', async () => {
        const received = {
            hostClick: 0,
            contentClick: 0,
        };

        const fixture = await testWeb.render(html`
            <${ViraMenuItem.assign({})}
                ${listen('click', () => {
                    received.hostClick++;
                })}
            >
                <span
                    ${listen('click', () => {
                        received.contentClick++;
                    })}
                >
                    content
                </span>
            </${ViraMenuItem}>
        `);

        assert.instanceOf(fixture, ViraMenuItem);

        fixture.dispatchEvent(
            new MouseEvent('click', {
                bubbles: true,
                composed: true,
                cancelable: true,
            }),
        );

        assert.deepEquals(received, {
            hostClick: 1,
            contentClick: 1,
        });
    });

    it('does not forward a click that already landed on the content', async () => {
        const {instance, received} = await renderMenuItemWithRawContent();

        const button = assertWrap.instanceOf(instance.querySelector('button'), HTMLButtonElement);
        button.click();

        assert.deepEquals(received, {
            click: 1,
            mousedown: 0,
        });
    });

    it('truncates long slotted text with an ellipsis', async () => {
        const fixture = await testWeb.render(html`
            <div
                style=${css`
                    width: 100px;
                `}
            >
                <${ViraMenuItem.assign({})}>
                    A very long menu item label that must not expand the menu.
                </${ViraMenuItem}>
            </div>
        `);
        const item = assertWrap.instanceOf(
            fixture.querySelector(ViraMenuItem.tagName),
            ViraMenuItem,
        );
        const slot = assertWrap.instanceOf(item.shadowRoot.querySelector('slot'), HTMLSlotElement);

        assert.isBelow(slot.clientWidth, slot.scrollWidth);
    });

    it('omits default pointer styles when overridden', async () => {
        const fixture = await testWeb.render(html`
            <div
                style=${css`
                    ${viraFormCssVars['vira-form-selection-hover-color'].name}: red;
                `}
            >
                <${ViraMenuItem.assign({})}>Default styles</${ViraMenuItem}>
                <${ViraMenuItem.assign({
                    disablePointerStyles: true,
                })}>
                    Overridden styles
                </${ViraMenuItem}>
            </div>
        `);
        const items = Array.from(fixture.querySelectorAll(ViraMenuItem.tagName));
        assert.isLengthExactly(items, 2);
        assert.isDefined(items[0]);
        assert.isDefined(items[1]);

        const overriddenBackground = globalThis.getComputedStyle(items[1]).backgroundColor;
        await testWeb.moveMouseTo(items[0]);
        const defaultHoverBackground = globalThis.getComputedStyle(items[0]).backgroundColor;
        await testWeb.moveMouseTo(items[1]);

        assert.notStrictEquals(defaultHoverBackground, overriddenBackground);
        assert.strictEquals(
            globalThis.getComputedStyle(items[1]).backgroundColor,
            overriddenBackground,
        );
    });

    describe('text overflow', () => {
        const longText = 'this text is much too long to fit in a narrow menu item';

        async function renderNarrowMenuItem(
            inputs: typeof ViraMenuItem.InputsType,
            content: HtmlInterpolation = longText,
        ) {
            const fixture = await testWeb.render(html`
                <${ViraMenuItem.assign(inputs)}
                    style=${css`
                        width: 120px;
                    `}
                >
                    ${content}
                </${ViraMenuItem}>
            `);

            const instance = assertWrap.instanceOf(fixture, ViraMenuItem);
            const slotWrapper = assertWrap.instanceOf(
                instance.shadowRoot.querySelector('.slot-wrapper'),
                HTMLElement,
            );

            return {
                instance,
                slotWrapper,
            };
        }

        async function hover(element: Element) {
            try {
                await testWeb.moveMouseTo(element);
            } finally {
                await resetMouse();
            }
        }

        it('cuts long text off with an ellipsis by default', async () => {
            const {instance, slotWrapper} = await renderNarrowMenuItem({});
            const singleLine = await renderNarrowMenuItem({}, 'short');

            assert.strictEquals(getComputedStyle(slotWrapper).whiteSpace, 'nowrap');
            assert.isApproximately(
                instance.getBoundingClientRect().height,
                singleLine.instance.getBoundingClientRect().height,
                1,
            );
        });

        it('shows the full text on hover when it is cut off', async () => {
            const {instance, slotWrapper} = await renderNarrowMenuItem({});

            assert.isFalse(slotWrapper.hasAttribute('title'));
            await hover(instance);

            await waitUntil.strictEquals(longText, () => slotWrapper.getAttribute('title'));
        });

        it('shows the full text on hover when slotted content cuts itself off', async () => {
            const {instance, slotWrapper} = await renderNarrowMenuItem(
                {},
                html`
                    <span
                        style=${css`
                            display: block;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        `}
                    >
                        ${longText}
                    </span>
                `,
            );

            await hover(instance);

            await waitUntil.strictEquals(longText, () => slotWrapper.getAttribute('title'));
        });

        it('shows no hover text when the text fits', async () => {
            const {instance, slotWrapper} = await renderNarrowMenuItem({}, 'short');

            await hover(instance);

            assert.isFalse(slotWrapper.hasAttribute('title'));
        });

        it('wraps long text with wrapText', async () => {
            const {instance, slotWrapper} = await renderNarrowMenuItem({
                wrapText: true,
            });
            const singleLine = await renderNarrowMenuItem({}, 'short');

            assert.isAbove(
                instance.getBoundingClientRect().height,
                singleLine.instance.getBoundingClientRect().height * 1.5,
            );
            assert.isAtMost(slotWrapper.scrollWidth, slotWrapper.clientWidth);

            await hover(instance);

            assert.isFalse(slotWrapper.hasAttribute('title'));
        });
    });
});
