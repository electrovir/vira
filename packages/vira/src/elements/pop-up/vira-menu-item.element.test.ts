import {assert, assertWrap} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {html, listen} from 'element-vir';
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

    it('does not forward a click that already landed on the content', async () => {
        const {instance, received} = await renderMenuItemWithRawContent();

        const button = assertWrap.instanceOf(instance.querySelector('button'), HTMLButtonElement);
        button.click();

        assert.deepEquals(received, {
            click: 1,
            mousedown: 0,
        });
    });
});
