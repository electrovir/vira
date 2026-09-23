import {assert, assertWrap, waitUntil} from '@augment-vir/assert';
import {wait} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {waitForAnimationFrame} from '@augment-vir/web';
import {sendMouse} from '@web/test-runner-commands';
import {css, defineElement, html, type CSSResult, type HtmlInterpolation} from 'element-vir';
import {ViraTooltip} from '../elements/popover/vira-tooltip.element.js';
import {PopoverTrigger} from '../util/popover-manager.js';
import {tooltip, type TooltipOptions} from './tooltip.directive.js';

/** Puts the anchor inside a shadow root so that the tooltip must pick up that shadow root's styles. */
const TooltipTestHost = defineElement<{
    anchorStyle: CSSResult;
    content: HtmlInterpolation;
    options?: TooltipOptions | undefined;
}>()({
    tagName: 'tooltip-test-host',
    styles: css`
        .anchor {
            position: fixed;
            width: 20px;
            height: 20px;
        }

        b {
            color: rgb(255, 0, 0);
        }
    `,
    render({inputs}) {
        return html`
            <span
                class="anchor"
                style=${inputs.anchorStyle}
                ${tooltip(inputs.content, inputs.options)}
            ></span>
        `;
    },
});

async function setupTooltipTest(
    anchorStyle: CSSResult,
    content: HtmlInterpolation = 'Tooltip text',
    options?: TooltipOptions,
) {
    const host = assertWrap.instanceOf(
        await testWeb.render(html`
            <${TooltipTestHost.assign({
                anchorStyle,
                content,
                options,
            })}></${TooltipTestHost}>
        `),
        TooltipTestHost,
    );
    const anchor = assertWrap.instanceOf(host.shadowRoot.querySelector('.anchor'), HTMLElement);

    function findTooltip() {
        return host.shadowRoot.querySelector(ViraTooltip.tagName) || undefined;
    }

    function getCaretRect(caretClass: string) {
        return assertWrap
            .isDefined(findTooltip()?.shadowRoot?.querySelector(`.${caretClass}`))
            .getBoundingClientRect();
    }

    function findOpenTooltip() {
        const tooltipElement = findTooltip();
        return tooltipElement?.matches(':popover-open') ? tooltipElement : undefined;
    }

    return {
        host,
        anchor,
        findTooltip,
        findOpenTooltip,
        async hover(this: void) {
            await testWeb.moveMouseTo(anchor);
            await waitUntil.isDefined(findOpenTooltip, {
                timeout: {
                    seconds: 2,
                },
            });
            await waitForAnimationFrame(2);

            return {
                popoverRect: assertWrap.isDefined(findOpenTooltip()).getBoundingClientRect(),
                anchorRect: anchor.getBoundingClientRect(),
                caretDownRect: getCaretRect('caret-down'),
                caretUpRect: getCaretRect('caret-up'),
            };
        },
    };
}

describe('tooltip', () => {
    it('shows centered above the anchor on hover and hides on mouse leave', async () => {
        const {hover, findOpenTooltip} = await setupTooltipTest(css`
            top: 200px;
            left: 200px;
        `);

        const {popoverRect, anchorRect, caretDownRect, caretUpRect} = await hover();

        assert.isApproximately(popoverRect.bottom, anchorRect.top - 7, 1);
        assert.isApproximately(
            popoverRect.left + popoverRect.width / 2,
            anchorRect.left + anchorRect.width / 2,
            1,
        );
        assert.isApproximately(caretDownRect.top, popoverRect.bottom, 1);
        assert.isApproximately(caretDownRect.height, 5, 1);
        assert.isApproximately(
            caretDownRect.left + caretDownRect.width / 2,
            anchorRect.left + anchorRect.width / 2,
            1,
        );
        assert.strictEquals(caretUpRect.height, 0);

        await sendMouse({
            type: 'move',
            position: [
                0,
                0,
            ],
        });
        await waitUntil.isUndefined(findOpenTooltip);
    });

    it('aligns to the left edge of an anchor at the left of the viewport', async () => {
        const {hover} = await setupTooltipTest(css`
            top: 200px;
            left: 5px;
        `);

        const {popoverRect, anchorRect, caretDownRect} = await hover();

        assert.isApproximately(popoverRect.bottom, anchorRect.top - 7, 1);
        assert.isApproximately(popoverRect.left, anchorRect.left, 1);
        assert.isApproximately(
            caretDownRect.left + caretDownRect.width / 2,
            anchorRect.left + anchorRect.width / 2,
            1,
        );
    });

    it('aligns to the right edge of an anchor at the right of the viewport', async () => {
        const {hover} = await setupTooltipTest(css`
            top: 200px;
            right: 5px;
        `);

        const {popoverRect, anchorRect} = await hover();

        assert.isApproximately(popoverRect.bottom, anchorRect.top - 7, 1);
        assert.isApproximately(popoverRect.right, anchorRect.right, 1);
    });

    it('flips below an anchor at the top of the viewport', async () => {
        const {hover} = await setupTooltipTest(css`
            top: 5px;
            left: 200px;
        `);

        const {popoverRect, anchorRect, caretDownRect, caretUpRect} = await hover();

        assert.isApproximately(popoverRect.top, anchorRect.bottom + 7, 1);
        assert.isApproximately(
            popoverRect.left + popoverRect.width / 2,
            anchorRect.left + anchorRect.width / 2,
            1,
        );
        assert.isApproximately(caretUpRect.bottom, popoverRect.top, 1);
        assert.isApproximately(caretUpRect.height, 5, 1);
        assert.strictEquals(caretDownRect.height, 0);
    });

    it('renders template contents styled by the parent and updates them while shown', async () => {
        const anchorStyle = css`
            top: 200px;
            left: 200px;
        `;
        const {host, hover, findTooltip} = await setupTooltipTest(
            anchorStyle,
            html`
                <b>Bold</b>
            `,
        );

        await hover();
        const bold = assertWrap.isDefined(findTooltip()?.querySelector('b'));
        assert.deepEquals(
            {
                text: bold.textContent,
                color: getComputedStyle(bold).color,
            },
            {
                text: 'Bold',
                color: 'rgb(255, 0, 0)',
            },
        );

        host.assignInputs({
            anchorStyle,
            content: 'Updated',
        });
        await waitUntil.isTrue(() => findTooltip()?.textContent.trim() === 'Updated');
    });

    it('forces the tooltip open or closed with a boolean trigger', async () => {
        const anchorStyle = css`
            top: 200px;
            left: 200px;
        `;
        const {host, findOpenTooltip} = await setupTooltipTest(anchorStyle, 'Forced', {
            trigger: true,
        });

        await waitUntil.isDefined(findOpenTooltip);

        host.assignInputs({
            anchorStyle,
            content: 'Forced',
            options: {
                trigger: false,
            },
        });
        await waitUntil.isUndefined(findOpenTooltip);
    });

    it('waits for the delay before showing on click', async () => {
        const {anchor, findOpenTooltip} = await setupTooltipTest(
            css`
                top: 200px;
                left: 200px;
            `,
            'Delayed',
            {
                trigger: PopoverTrigger.Click,
                delay: {
                    seconds: 1,
                },
            },
        );

        await testWeb.click(anchor);
        await wait({
            milliseconds: 500,
        });
        assert.isUndefined(findOpenTooltip());
        await waitUntil.isDefined(findOpenTooltip, {
            timeout: {
                seconds: 2,
            },
        });
    });

    it('hides after the timeout while still hovered', async () => {
        const {hover, findOpenTooltip} = await setupTooltipTest(
            css`
                top: 200px;
                left: 200px;
            `,
            'Brief',
            {
                timeout: {
                    milliseconds: 500,
                },
            },
        );

        await hover();
        await waitUntil.isUndefined(findOpenTooltip, {
            timeout: {
                seconds: 2,
            },
        });
    });
});
