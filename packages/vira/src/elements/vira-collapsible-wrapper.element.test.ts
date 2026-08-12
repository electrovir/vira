import {assert, waitUntil} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {html} from 'element-vir';
import {ViraCollapsibleWrapper} from './vira-collapsible-wrapper.element.js';

/**
 * The browser skips content it does not render when it serializes a selection to plain text.
 * Content that is merely `height: 0`, or hidden with `visibility`, is still rendered and still
 * contributes a line break to anything copied across it, so the check has to be that the slotted
 * content generates no boxes at all.
 */
function isSlottedContentRendered(fixture: Readonly<Element>) {
    const slottedContent = fixture.querySelector('span');
    assert.instanceOf(slottedContent, HTMLSpanElement);

    return !!slottedContent.getClientRects().length;
}

describe(ViraCollapsibleWrapper.tagName, () => {
    it('stops rendering collapsed content', async () => {
        const fixture = await testWeb.render(html`
            <${ViraCollapsibleWrapper.assign({
                expanded: false,
            })}>
                <span>collapsed content</span>
            </${ViraCollapsibleWrapper}>
        `);

        assert.instanceOf(fixture, ViraCollapsibleWrapper);
        await waitUntil.isFalse(() => {
            return isSlottedContentRendered(fixture);
        });
    });

    it('still takes its width from collapsed content', async () => {
        /**
         * Consumers rely on a collapsed wrapper being as wide as the content it will expand to
         * show, so hiding that content must not stop it from contributing width.
         */
        const fixture = await testWeb.render(html`
            <div style="display: flex; align-items: flex-start;">
                <${ViraCollapsibleWrapper.assign({
                    expanded: false,
                })}
                    style="width: max-content;"
                    class="narrow"
                >
                    <span>short</span>
                </${ViraCollapsibleWrapper}>
                <${ViraCollapsibleWrapper.assign({
                    expanded: false,
                })}
                    style="width: max-content;"
                    class="wide"
                >
                    <span>content much wider than the other wrapper's content</span>
                </${ViraCollapsibleWrapper}>
            </div>
        `);

        const narrowWrapper = fixture.querySelector('.narrow');
        const wideWrapper = fixture.querySelector('.wide');
        assert.instanceOf(narrowWrapper, ViraCollapsibleWrapper);
        assert.instanceOf(wideWrapper, ViraCollapsibleWrapper);

        await waitUntil.isFalse(() => {
            return isSlottedContentRendered(wideWrapper);
        });
        assert.isAbove(
            wideWrapper.getBoundingClientRect().width,
            narrowWrapper.getBoundingClientRect().width,
            'Collapsed content stopped contributing to the wrapper width.',
        );
    });

    it('renders content again when expanded', async () => {
        const fixture = await testWeb.render(html`
            <${ViraCollapsibleWrapper.assign({
                expanded: false,
            })}>
                <span>expanded content</span>
            </${ViraCollapsibleWrapper}>
        `);

        assert.instanceOf(fixture, ViraCollapsibleWrapper);
        await waitUntil.isFalse(() => {
            return isSlottedContentRendered(fixture);
        });

        fixture.assignInputs({
            expanded: true,
        });

        await waitUntil.isTrue(() => {
            return isSlottedContentRendered(fixture);
        });
        await waitUntil.isAbove(0, () => {
            return fixture.shadowRoot.querySelector('.collapsing-element')?.clientHeight ?? 0;
        });
    });

    it('stops rendering content collapsed before its height was painted', async () => {
        /**
         * No height change means no collapse animation, so there is no `transitionend` to hide the
         * content on.
         */
        const fixture = await testWeb.render(html`
            <${ViraCollapsibleWrapper.assign({
                expanded: true,
            })}>
                <span>content collapsed immediately</span>
            </${ViraCollapsibleWrapper}>
        `);

        assert.instanceOf(fixture, ViraCollapsibleWrapper);
        fixture.assignInputs({
            expanded: false,
        });

        await waitUntil.isFalse(() => {
            return isSlottedContentRendered(fixture);
        });
    });

    it('stops rendering content after the collapse animation finishes', async () => {
        const fixture = await testWeb.render(html`
            <${ViraCollapsibleWrapper.assign({
                expanded: true,
            })}>
                <span>content to collapse</span>
            </${ViraCollapsibleWrapper}>
        `);

        assert.instanceOf(fixture, ViraCollapsibleWrapper);
        /** Collapsing before the expanded height lands means there is no animation to wait on. */
        await waitUntil.isAbove(0, () => {
            return fixture.shadowRoot.querySelector('.collapsing-element')?.clientHeight ?? 0;
        });

        fixture.assignInputs({
            expanded: false,
        });

        await waitUntil.isFalse(() => {
            return isSlottedContentRendered(fixture);
        });
    });
});
