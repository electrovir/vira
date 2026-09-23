import {assert, assertWrap, waitUntil} from '@augment-vir/assert';
import {type PartialWithUndefined} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {waitForAnimationFrame} from '@augment-vir/web';
import {sendKeys, setViewport} from '@web/test-runner-commands';
import {css, html, type CSSResult} from 'element-vir';
import {PopoverTrigger} from '../../util/popover-manager.js';
import {ViraPopoverTrigger} from './vira-popover-trigger.element.js';

const triggerClass = 'trigger';
const popoverClass = 'popover';

async function setupPopoverTest({
    inputs,
    wrapperStyle,
    popoverHeight = 50,
    popoverWidth = 100,
}: Readonly<
    PartialWithUndefined<{
        inputs: Partial<(typeof ViraPopoverTrigger)['InputsType']>;
        wrapperStyle: CSSResult;
        popoverHeight: number;
        popoverWidth: number;
    }>
> = {}) {
    const fixture = await testWeb.render(html`
        <div
            style=${wrapperStyle ||
            css`
                padding: 100px;
            `}
        >
            <${ViraPopoverTrigger.assign({
                ...inputs,
            })}>
                <div
                    class=${triggerClass}
                    slot=${ViraPopoverTrigger.slotNames['vira-popover-trigger-trigger']}
                    style=${css`
                        width: 150px;
                        height: 30px;
                    `}
                >
                    Open
                </div>
                <div
                    class=${popoverClass}
                    slot=${ViraPopoverTrigger.slotNames['vira-popover-trigger-popover']}
                    style=${css`
                        width: ${popoverWidth}px;
                        height: ${popoverHeight}px;
                    `}
                >
                    Popover
                </div>
            </${ViraPopoverTrigger}>
        </div>
    `);

    const instance = assertWrap.instanceOf(
        fixture.querySelector(ViraPopoverTrigger.tagName),
        ViraPopoverTrigger,
    );
    const trigger = assertWrap.instanceOf(fixture.querySelector(`.${triggerClass}`), HTMLElement);
    const popover = assertWrap.instanceOf(fixture.querySelector(`.${popoverClass}`), HTMLElement);
    const positioner = assertWrap.instanceOf(
        instance.shadowRoot.querySelector('.popover-positioner'),
        HTMLElement,
    );

    function isPopoverOpen() {
        return positioner.matches(':popover-open');
    }

    return {
        wrapper: fixture,
        trigger,
        popover,
        positioner,
        isPopoverOpen,
        async open(this: void) {
            await testWeb.click(trigger);
            await waitUntil.isTrue(isPopoverOpen, {
                timeout: {
                    seconds: 2,
                },
            });
            /** Positions are applied in the render after the popover opens. */
            await waitForAnimationFrame(2);
        },
    };
}

describe(ViraPopoverTrigger.tagName, () => {
    it('shows the popover in the top layer only while open', async () => {
        const {open, trigger, isPopoverOpen} = await setupPopoverTest();

        assert.isFalse(isPopoverOpen());
        await open();
        await testWeb.click(trigger);
        await waitUntil.isFalse(isPopoverOpen);
    });

    it('hides the popover on Escape', async () => {
        const {open, isPopoverOpen} = await setupPopoverTest();

        await open();
        await sendKeys({
            press: 'Escape',
        });
        await waitUntil.isFalse(isPopoverOpen);
    });

    it('hides the popover on an outside mousedown', async () => {
        const {open, isPopoverOpen} = await setupPopoverTest();

        await open();
        document.body.dispatchEvent(
            new MouseEvent('mousedown', {
                bubbles: true,
                composed: true,
            }),
        );
        await waitUntil.isFalse(isPopoverOpen);
    });

    it('forces the popover open or closed with a boolean trigger', async () => {
        const {wrapper, isPopoverOpen} = await setupPopoverTest({
            inputs: {
                trigger: true,
            },
        });
        const instance = assertWrap.instanceOf(
            wrapper.querySelector(ViraPopoverTrigger.tagName),
            ViraPopoverTrigger,
        );

        await waitUntil.isTrue(isPopoverOpen);
        await sendKeys({
            press: 'Escape',
        });
        await waitForAnimationFrame(2);
        assert.isTrue(isPopoverOpen());

        instance.assignInputs({
            trigger: false,
        });
        await waitUntil.isFalse(isPopoverOpen);
    });

    it('toggles on click instead of mousedown with the click trigger', async () => {
        const {trigger, isPopoverOpen} = await setupPopoverTest({
            inputs: {
                trigger: PopoverTrigger.Click,
            },
        });

        trigger.dispatchEvent(
            new MouseEvent('mousedown', {
                bubbles: true,
                composed: true,
            }),
        );
        await waitForAnimationFrame(2);
        assert.isFalse(isPopoverOpen());

        await testWeb.click(trigger);
        await waitUntil.isTrue(isPopoverOpen);
        await testWeb.click(trigger);
        await waitUntil.isFalse(isPopoverOpen);
    });

    it('opens downwards below the trigger, including the vertical offset', async () => {
        const {open, trigger, popover} = await setupPopoverTest({
            inputs: {
                popoverOffset: {
                    vertical: 7,
                },
            },
        });

        await open();

        assert.isApproximately(
            popover.getBoundingClientRect().top,
            trigger.getBoundingClientRect().bottom + 7,
            1,
        );
    });

    it('opens upwards above the trigger when there is no room below', async () => {
        const {open, trigger, popover} = await setupPopoverTest({
            inputs: {
                popoverOffset: {
                    vertical: 7,
                },
            },
            wrapperStyle: css`
                position: fixed;
                bottom: 10px;
                left: 10px;
            `,
        });

        await open();

        assert.isApproximately(
            popover.getBoundingClientRect().bottom,
            trigger.getBoundingClientRect().top - 7,
            1,
        );
    });

    it('limits the popover height to the viewport by default', async () => {
        const {open, positioner} = await setupPopoverTest({
            popoverHeight: 5000,
        });

        await open();

        assert.isApproximately(
            positioner.getBoundingClientRect().bottom,
            document.documentElement.clientHeight,
            1,
        );
    });

    it('opens upwards when a tall popover fits better above the trigger', async () => {
        const {open, trigger, positioner} = await setupPopoverTest({
            wrapperStyle: css`
                position: fixed;
                bottom: 100px;
                left: 10px;
            `,
            popoverHeight: 5000,
        });

        await open();

        assert.deepEquals(
            {
                top: Math.round(positioner.getBoundingClientRect().top),
                bottom: Math.round(positioner.getBoundingClientRect().bottom),
            },
            {
                top: 0,
                bottom: Math.round(trigger.getBoundingClientRect().top),
            },
        );
    });

    it('opens a wide popover above the trigger instead of over it', async () => {
        const {open, trigger, positioner} = await setupPopoverTest({
            wrapperStyle: css`
                position: fixed;
                bottom: 10px;
                right: 10px;
            `,
            popoverWidth: 5000,
            popoverHeight: 5000,
        });

        await open();

        assert.deepEquals(
            {
                bottom: Math.round(positioner.getBoundingClientRect().bottom),
                right: Math.round(positioner.getBoundingClientRect().right),
            },
            {
                bottom: Math.round(trigger.getBoundingClientRect().top),
                right: Math.round(trigger.getBoundingClientRect().right),
            },
        );
    });

    it('anchors to the trigger left edge', async () => {
        const {open, trigger, popover} = await setupPopoverTest({
            inputs: {
                popoverOffset: {
                    left: 5,
                },
            },
        });

        await open();

        assert.isApproximately(
            popover.getBoundingClientRect().left,
            trigger.getBoundingClientRect().left + 5,
            1,
        );
    });

    it('is at least as wide as the trigger, minus the side offsets', async () => {
        const {open, trigger, positioner} = await setupPopoverTest({
            inputs: {
                popoverOffset: {
                    left: 3,
                    right: 5,
                },
            },
        });

        await open();

        assert.isApproximately(
            positioner.getBoundingClientRect().width,
            trigger.getBoundingClientRect().width - 8,
            1,
        );
    });

    it('grows wider than the trigger up to 500px', async () => {
        const {open, positioner} = await setupPopoverTest({
            popoverWidth: 5000,
        });

        await open();

        assert.isApproximately(positioner.getBoundingClientRect().width, 500, 1);
    });

    it('anchors to the trigger right edge when there is no room right of the trigger', async () => {
        const {open, trigger, popover} = await setupPopoverTest({
            inputs: {
                popoverOffset: {
                    left: 3,
                    right: 5,
                },
            },
            popoverWidth: 300,
            wrapperStyle: css`
                position: fixed;
                top: 10px;
                right: 10px;
            `,
        });

        await open();

        assert.isApproximately(
            popover.getBoundingClientRect().right,
            trigger.getBoundingClientRect().right,
            1,
        );
    });

    it('moves to the viewport right edge when neither trigger edge has room', async () => {
        const {open, popover} = await setupPopoverTest({
            popoverWidth: 400,
            wrapperStyle: css`
                position: fixed;
                top: 10px;
                left: 225px;
            `,
        });

        const originalViewport = {
            width: window.innerWidth,
            height: window.innerHeight,
        };

        try {
            await setViewport({
                width: 600,
                height: originalViewport.height,
            });
            await open();

            assert.isApproximately(
                popover.getBoundingClientRect().right,
                document.documentElement.clientWidth,
                1,
            );
        } finally {
            await setViewport(originalViewport);
        }
    });

    it('stays attached to the trigger when the viewport resizes', async () => {
        const {open, trigger, popover} = await setupPopoverTest({
            wrapperStyle: css`
                position: fixed;
                top: 10px;
                right: 10px;
            `,
        });

        const originalViewport = {
            width: window.innerWidth,
            height: window.innerHeight,
        };

        try {
            await open();
            const triggerLeftBeforeResize = trigger.getBoundingClientRect().left;

            await setViewport({
                width: originalViewport.width - 100,
                height: originalViewport.height,
            });
            await waitForAnimationFrame(2);

            assert.isBelow(trigger.getBoundingClientRect().left, triggerLeftBeforeResize);
            assert.isApproximately(
                popover.getBoundingClientRect().left,
                trigger.getBoundingClientRect().left,
                1,
            );
        } finally {
            await setViewport(originalViewport);
        }
    });

    it('scrolls the trigger back into view when a resize moves it off screen', async () => {
        const {open, trigger} = await setupPopoverTest({
            wrapperStyle: css`
                padding-top: 500px;
                padding-bottom: 1000px;
            `,
        });

        const originalViewport = {
            width: window.innerWidth,
            height: window.innerHeight,
        };

        try {
            await open();
            await setViewport({
                width: originalViewport.width,
                height: 300,
            });

            await waitUntil.isTrue(() => {
                const triggerRect = trigger.getBoundingClientRect();
                return triggerRect.top >= 0 && triggerRect.bottom <= window.innerHeight;
            });
        } finally {
            await setViewport(originalViewport);
        }
    });

    it('returns to the trigger left edge when the viewport widens again', async () => {
        const {open, trigger, popover} = await setupPopoverTest({
            popoverWidth: 400,
            wrapperStyle: css`
                position: fixed;
                top: 10px;
                left: 300px;
            `,
        });

        const originalViewport = {
            width: window.innerWidth,
            height: window.innerHeight,
        };

        function getPopoverLeft() {
            return Math.round(popover.getBoundingClientRect().left);
        }

        try {
            await setViewport({
                width: 1000,
                height: originalViewport.height,
            });
            await open();
            const wideLeft = getPopoverLeft();

            await setViewport({
                width: 600,
                height: originalViewport.height,
            });
            await waitForAnimationFrame(3);
            const narrowLeft = getPopoverLeft();

            await setViewport({
                width: 1000,
                height: originalViewport.height,
            });
            await waitForAnimationFrame(3);

            assert.deepEquals(
                [
                    wideLeft,
                    narrowLeft,
                    getPopoverLeft(),
                ],
                [
                    Math.round(trigger.getBoundingClientRect().left),
                    Math.round(trigger.getBoundingClientRect().right) - 400,
                    Math.round(trigger.getBoundingClientRect().left),
                ],
            );
        } finally {
            await setViewport(originalViewport);
        }
    });

    it('stays attached to the trigger when a container scrolls', async () => {
        const {open, wrapper, trigger, popover} = await setupPopoverTest({
            wrapperStyle: css`
                height: 20px;
                overflow-y: scroll;
                padding: 100px 100px 0;
            `,
        });

        await open();
        const triggerTopBeforeScroll = trigger.getBoundingClientRect().top;

        wrapper.scrollBy(0, 10);
        await waitForAnimationFrame(2);

        assert.isBelow(trigger.getBoundingClientRect().top, triggerTopBeforeScroll);
        assert.isApproximately(
            popover.getBoundingClientRect().top,
            trigger.getBoundingClientRect().bottom,
            1,
        );
    });

    it('stacks a nested popover above its parent popover', async () => {
        const nestedPopoverClass = 'nested-popover';
        const fixture = await testWeb.render(html`
            <${ViraPopoverTrigger.assign({
                keepOpenAfterInteraction: true,
            })}>
                <div
                    class=${triggerClass}
                    slot=${ViraPopoverTrigger.slotNames['vira-popover-trigger-trigger']}
                >
                    Open
                </div>
                <div
                    slot=${ViraPopoverTrigger.slotNames['vira-popover-trigger-popover']}
                    style=${css`
                        width: 200px;
                        height: 200px;
                        background-color: white;
                    `}
                >
                    <${ViraPopoverTrigger}>
                        <div
                            class="nested-trigger"
                            slot=${ViraPopoverTrigger.slotNames['vira-popover-trigger-trigger']}
                        >
                            Open nested
                        </div>
                        <div
                            class=${nestedPopoverClass}
                            slot=${ViraPopoverTrigger.slotNames['vira-popover-trigger-popover']}
                            style=${css`
                                width: 100px;
                                height: 50px;
                            `}
                        >
                            Nested
                        </div>
                    </${ViraPopoverTrigger}>
                </div>
            </${ViraPopoverTrigger}>
        `);

        await testWeb.click(
            assertWrap.instanceOf(fixture.querySelector(`.${triggerClass}`), HTMLElement),
        );
        const nestedTrigger = await waitUntil.isTruthy(() => {
            return fixture.querySelector('.nested-trigger');
        });
        assert.instanceOf(nestedTrigger, HTMLElement);
        await testWeb.click(nestedTrigger);

        const nestedPopover = await waitUntil.isTruthy(() => {
            const element = fixture.querySelector(`.${nestedPopoverClass}`);
            return element && element.getBoundingClientRect().height ? element : undefined;
        });
        await waitForAnimationFrame(2);
        const nestedRect = nestedPopover.getBoundingClientRect();

        assert.strictEquals(
            document.elementFromPoint(
                nestedRect.left + nestedRect.width / 2,
                nestedRect.top + nestedRect.height / 2,
            ),
            nestedPopover,
        );
    });
});
