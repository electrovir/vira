import {assert, assertWrap, waitUntil} from '@augment-vir/assert';
import {mapObjectValues, randomString} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {extractElementText, queryThroughShadow, waitForAnimationFrame} from '@augment-vir/web';
import {resetMouse, sendMouse} from '@web/test-runner-commands';
import {css, html, listen, testIdSelector} from 'element-vir';
import {Element24Icon} from '../icons/index.js';
import {
    type ViraDropdownOption,
    type ViraDropdownOptionGroup,
} from '../util/vira-dropdown-option.js';
import {ViraMenuItem} from './popover/vira-menu-item.element.js';
import {ViraMenu} from './popover/vira-menu.element.js';
import {ViraPopoverTrigger} from './popover/vira-popover-trigger.element.js';
import {ViraDropdown} from './vira-dropdown.element.js';
import {ViraInput} from './vira-input.element.js';

const mockMenuItems: ReadonlyArray<Readonly<ViraDropdownOption>> = [
    {
        value: '0',
        label: 'Option A',
    },
    {
        value: '1',
        label: 'Option B',
    },
    {
        value: '2',
        label: 'Option C',
    },
];

const mockGroupedOptions: ReadonlyArray<Readonly<ViraDropdownOptionGroup>> = [
    {
        groupName: 'First',
        options: mockMenuItems.slice(0, 1),
    },
    {
        groupName: 'Second',
        options: [
            ...mockMenuItems.slice(1),
            {
                value: 'disabled',
                label: 'Disabled',
                disabled: true,
            },
        ],
    },
];

async function setupDropdownTest(inputs?: Partial<(typeof ViraDropdown)['InputsType']>) {
    const events: {
        openChange: boolean[];
        selectedValuesChange: string[][];
    } = {
        openChange: [],
        selectedValuesChange: [],
    };
    const fixture = await testWeb.render(html`
        <div
            style=${css`
                height: 1000px;
            `}
        >
            <${ViraDropdown.assign({
                options: mockMenuItems,
                selected: [],
                ...inputs,
            })}
                ${listen(ViraDropdown.events.openChange, (event) => {
                    events.openChange.push(event.detail);
                })}
                ${listen(ViraDropdown.events.selectedValuesChange, (event) => {
                    events.selectedValuesChange.push(event.detail);
                })}
            ></${ViraDropdown}>
        </div>
    `);

    const instance = assertWrap.instanceOf(
        fixture.querySelector(ViraDropdown.tagName),
        ViraDropdown,
    );

    function findMenu() {
        return queryThroughShadow(instance, ViraMenu.tagName);
    }

    const triggerElement = instance.shadowRoot.querySelector(
        testIdSelector(ViraDropdown.testIds.trigger),
    );
    assert.instanceOf(triggerElement, HTMLElement);

    assert.isNullish(findMenu());
    assert.isEmpty(events.openChange);
    assert.isEmpty(events.selectedValuesChange);

    return {
        events,
        fixture,
        instance,
        triggerElement,
        findMenu,
        queryByTestId: mapObjectValues(ViraDropdown.testIds, (testIdKey, testId) => {
            return () => {
                return instance.shadowRoot.querySelector(testIdSelector(testId));
            };
        }),
        async toggle(this: void) {
            const menuExisted: boolean = !!findMenu();

            await testWeb.click(triggerElement);

            await waitUntil.isTruthy(
                () => {
                    const menuExistsNow = !!findMenu();

                    return menuExisted !== menuExistsNow;
                },
                {
                    timeout: {
                        seconds: 1,
                    },
                },
                'the options never popped up',
            );
        },
    };
}

describe(ViraDropdown.tagName, () => {
    it('opens on a click', async () => {
        const {toggle, events} = await setupDropdownTest();

        await toggle();
        assert.deepEquals(events.openChange, [true]);
    });

    it('closes on a click', async () => {
        const {toggle, events, findMenu} = await setupDropdownTest();

        await toggle();
        assert.deepEquals(events.openChange, [true]);
        await toggle();
        assert.deepEquals(events.openChange, [
            true,
            false,
        ]);
        await waitUntil(() => {
            return !findMenu();
        });
    });

    it('selects an option on click', async (testContext) => {
        const {instance, fixture, toggle, events, findMenu} = await setupDropdownTest();

        await toggle();
        const options = queryThroughShadow(instance, ViraMenuItem.tagName, {
            all: true,
        });

        assert.isLengthExactly(options, mockMenuItems.length);
        assert.isDefined(options[1]);
        await testWeb.click(options[1]);

        await waitUntil(() => {
            return !findMenu();
        });
        assert.deepEquals(events.openChange, [
            true,
            false,
        ]);
        assert.deepEquals(events.selectedValuesChange, [
            ['1'],
        ]);
    });

    it('selects an option when dragging from the trigger', async () => {
        const {instance, triggerElement, events, findMenu} = await setupDropdownTest();

        try {
            await testWeb.moveMouseTo(triggerElement);
            await sendMouse({
                type: 'down',
                button: 'left',
            });

            const option = await waitUntil.isTruthy(() => {
                return queryThroughShadow(instance, ViraMenuItem.tagName, {
                    all: true,
                })[1];
            });

            await testWeb.moveMouseTo(option);
            await sendMouse({
                type: 'up',
                button: 'left',
            });

            await waitUntil(() => {
                return !findMenu();
            });
            assert.deepEquals(events.openChange, [
                true,
                false,
            ]);
            assert.deepEquals(events.selectedValuesChange, [
                ['1'],
            ]);
        } finally {
            await resetMouse();
        }
    });

    it('emits the full selection from selectedValuesChange in multi select', async () => {
        const {instance, toggle, events} = await setupDropdownTest({
            isMultiSelect: true,
            selected: ['0'],
        });

        await toggle();
        const options = queryThroughShadow(instance, ViraMenuItem.tagName, {
            all: true,
        });

        assert.isLengthExactly(options, mockMenuItems.length);
        assert.isDefined(options[2]);
        await testWeb.click(options[2]);

        await waitUntil(() => {
            return events.selectedValuesChange.length === 1;
        });
        assert.deepEquals(events.selectedValuesChange, [
            [
                '0',
                '2',
            ],
        ]);
    });

    it('removes a value from selectedValuesChange when toggled off in multi select', async () => {
        const {instance, toggle, events} = await setupDropdownTest({
            isMultiSelect: true,
            selected: [
                '0',
                '2',
            ],
        });

        await toggle();
        const options = queryThroughShadow(instance, ViraMenuItem.tagName, {
            all: true,
        });

        assert.isDefined(options[0]);
        await testWeb.click(options[0]);

        await waitUntil(() => {
            return events.selectedValuesChange.length === 1;
        });
        assert.deepEquals(events.selectedValuesChange, [
            ['2'],
        ]);
    });

    it('does not render prefix if nothing is selected', async () => {
        const {queryByTestId} = await setupDropdownTest({
            selectionPrefix: randomString(),
        });
        await waitForAnimationFrame(5);
        assert.isNull(queryByTestId.prefixText());
    });

    it('renders a prefix', async () => {
        const prefix = randomString();
        const {queryByTestId} = await setupDropdownTest({
            selectionPrefix: prefix,
            selected: ['1'],
        });
        const prefixElement = await waitUntil.isTruthy(
            () => {
                return queryByTestId.prefixText();
            },
            {
                timeout: {
                    seconds: 1,
                },
            },
            'prefix element never showed up',
        );

        assert.strictEquals(extractElementText(prefixElement), prefix);
    });

    it('renders an icon', async () => {
        const {queryByTestId} = await setupDropdownTest({
            icon: Element24Icon,
        });
        await waitUntil.isTruthy(
            () => {
                return queryByTestId.leadingIcon();
            },
            {
                timeout: {
                    seconds: 1,
                },
            },
            'icon element never showed up',
        );
    });

    it('does not render an icon if not assigned', async () => {
        const {queryByTestId} = await setupDropdownTest();
        await waitForAnimationFrame(5);
        assert.isNull(queryByTestId.leadingIcon());
    });

    it('renders a placeholder', async () => {
        const placeholder = randomString();
        const {triggerElement} = await setupDropdownTest({
            placeholder,
        });

        assert.strictEquals(extractElementText(triggerElement), placeholder);
    });

    it('rotates the arrow without a popover when there are no options', async () => {
        const {triggerElement, events, findMenu} = await setupDropdownTest({
            options: [],
        });

        await testWeb.click(triggerElement);
        await waitUntil.deepEquals([true], () => events.openChange);

        assert.isNullish(findMenu());
        assert.deepEquals(
            {
                isOpen: triggerElement.classList.contains('open'),
                isMenuOpen: triggerElement.classList.contains('menu-open'),
            },
            {
                isOpen: true,
                isMenuOpen: false,
            },
        );
    });

    it('shows noOptionsText when there are no options', async () => {
        const {toggle, findMenu} = await setupDropdownTest({
            options: [],
            noOptionsText: 'Nothing here',
        });

        await toggle();

        assert.strictEquals(
            extractElementText(assertWrap.instanceOf(findMenu(), HTMLElement)),
            'Nothing here',
        );
    });

    it('contains menu overscroll so the page does not scroll', async () => {
        const {toggle, findMenu} = await setupDropdownTest();

        await toggle();

        assert.strictEquals(
            getComputedStyle(
                assertWrap.instanceOf(
                    assertWrap
                        .instanceOf(findMenu(), ViraMenu)
                        .shadowRoot.querySelector('.scroll-area'),
                    HTMLElement,
                ),
            ).overscrollBehaviorY,
            'contain',
        );
    });

    it('has the same default size as ViraInput', async () => {
        const fixture = await testWeb.render(html`
            <div>
                <${ViraDropdown.assign({
                    options: mockMenuItems,
                    selected: [],
                })}></${ViraDropdown}>
                <${ViraInput.assign({
                    value: '',
                })}></${ViraInput}>
            </div>
        `);

        function getSize(element: Element | null) {
            const rect = assertWrap.isDefined(element).getBoundingClientRect();

            return {
                width: rect.width,
                height: rect.height,
            };
        }

        assert.deepEquals(
            getSize(fixture.querySelector(ViraDropdown.tagName)),
            getSize(fixture.querySelector(ViraInput.tagName)),
        );
    });

    it('truncates a long selection to the dropdown width', async () => {
        const {instance, triggerElement} = await setupDropdownTest({
            options: [
                {
                    value: 'long',
                    label: 'Really really super duper long it just keeps going because it is so long',
                },
            ],
            selected: ['long'],
        });

        assert.isApproximately(
            triggerElement.getBoundingClientRect().width,
            instance.getBoundingClientRect().width,
            1,
        );
    });

    it('renders the menu outside of a clipping ancestor', async () => {
        const fixture = await testWeb.render(html`
            <div
                style=${css`
                    overflow: hidden;
                    height: 40px;
                `}
            >
                <${ViraDropdown.assign({
                    options: mockMenuItems,
                    selected: [],
                })}></${ViraDropdown}>
            </div>
        `);
        const instance = assertWrap.instanceOf(
            fixture.querySelector(ViraDropdown.tagName),
            ViraDropdown,
        );

        await testWeb.click(
            assertWrap.instanceOf(
                instance.shadowRoot.querySelector(testIdSelector(ViraDropdown.testIds.trigger)),
                HTMLElement,
            ),
        );
        const lastMenuItem = await waitUntil.isTruthy(() => {
            return queryThroughShadow(instance, ViraMenuItem.tagName, {
                all: true,
            }).at(-1);
        });
        const itemRect = lastMenuItem.getBoundingClientRect();

        assert.isAbove(itemRect.top, fixture.getBoundingClientRect().bottom);
        assert.strictEquals(
            document.elementFromPoint(
                itemRect.left + itemRect.width / 2,
                itemRect.top + itemRect.height / 2,
            ),
            instance,
        );
    });

    it('keeps the menu attached to the trigger when the page scrolls', async () => {
        const {toggle, triggerElement, findMenu} = await setupDropdownTest();

        await toggle();
        const menu = assertWrap.instanceOf(findMenu(), HTMLElement);

        function getGap() {
            return menu.getBoundingClientRect().top - triggerElement.getBoundingClientRect().bottom;
        }

        const gapBeforeScroll = getGap();
        const triggerTopBeforeScroll = triggerElement.getBoundingClientRect().top;

        try {
            window.scrollBy(0, 50);
            await waitForAnimationFrame(2);

            assert.isBelow(triggerElement.getBoundingClientRect().top, triggerTopBeforeScroll);
            assert.strictEquals(getGap(), gapBeforeScroll);
        } finally {
            window.scrollTo(0, 0);
        }
    });

    it('renders only the selected label when readonly', async () => {
        const instance = await testWeb.render(html`
            <${ViraDropdown.assign({
                options: mockMenuItems,
                selected: ['2'],
                isReadonly: true,
            })}></${ViraDropdown}>
        `);
        assert.instanceOf(instance, ViraDropdown);

        assert.isNull(
            instance.shadowRoot.querySelector(testIdSelector(ViraDropdown.testIds.trigger)),
        );
        assert.strictEquals(
            extractElementText(
                assertWrap.instanceOf(instance.shadowRoot.firstElementChild, HTMLElement),
            ),
            'Option C',
        );
    });

    it('selects every enabled item in a group when its header is clicked', async () => {
        const {instance, toggle, events} = await setupDropdownTest({
            isMultiSelect: true,
            selected: ['0'],
            options: mockGroupedOptions,
        });

        await toggle();
        const groupHeaders = queryThroughShadow(instance, '.option-group-label', {
            all: true,
        });
        assert.isLengthExactly(groupHeaders, 2);
        await testWeb.click(groupHeaders[1]);

        await waitUntil.deepEquals(
            [
                [
                    '0',
                    '1',
                    '2',
                ],
            ],
            () => events.selectedValuesChange,
        );
    });

    it('deselects a group when its header is clicked and the group is fully selected', async () => {
        const {instance, toggle, events} = await setupDropdownTest({
            isMultiSelect: true,
            selected: [
                '0',
                '1',
                '2',
            ],
            options: mockGroupedOptions,
        });

        await toggle();
        const groupHeaders = queryThroughShadow(instance, '.option-group-label', {
            all: true,
        });
        assert.isLengthExactly(groupHeaders, 2);
        await testWeb.click(groupHeaders[1]);

        await waitUntil.deepEquals(
            [
                ['0'],
            ],
            () => events.selectedValuesChange,
        );
    });

    it('does not make group headers selectable in single select', async () => {
        const {instance, toggle} = await setupDropdownTest({
            options: [
                {
                    groupName: 'First',
                    options: mockMenuItems,
                },
            ],
        });

        await toggle();

        assert.isLengthExactly(
            queryThroughShadow(instance, ViraMenuItem.tagName, {
                all: true,
            }),
            mockMenuItems.length,
        );
    });

    it('drag selects an option from a later group', async () => {
        const {instance, triggerElement, events} = await setupDropdownTest({
            options: [
                {
                    groupName: 'First',
                    options: mockMenuItems.slice(0, 2),
                },
                {
                    groupName: 'Second',
                    options: mockMenuItems.slice(2),
                },
            ],
        });

        try {
            await testWeb.moveMouseTo(triggerElement);
            await sendMouse({
                type: 'down',
                button: 'left',
            });

            const option = await waitUntil.isTruthy(() => {
                return queryThroughShadow(instance, ViraMenuItem.tagName, {
                    all: true,
                })[2];
            });

            await testWeb.moveMouseTo(option);
            await sendMouse({
                type: 'up',
                button: 'left',
            });

            await waitUntil.deepEquals(
                [
                    ['2'],
                ],
                () => events.selectedValuesChange,
            );
        } finally {
            await resetMouse();
        }
    });

    it('does not scroll its scroll container while dragging to an option', async () => {
        const fixture = await testWeb.render(html`
            <div
                style=${css`
                    height: 60px;
                    overflow: auto;
                `}
            >
                <${ViraDropdown.assign({
                    options: mockMenuItems,
                    selected: [],
                })}></${ViraDropdown}>
                <div
                    style=${css`
                        height: 1000px;
                    `}
                ></div>
            </div>
        `);
        const scrollContainer = assertWrap.instanceOf(fixture, HTMLElement);
        const instance = assertWrap.instanceOf(
            fixture.querySelector(ViraDropdown.tagName),
            ViraDropdown,
        );

        try {
            await testWeb.moveMouseTo(
                assertWrap.isDefined(
                    instance.shadowRoot.querySelector(testIdSelector(ViraDropdown.testIds.trigger)),
                ),
            );
            await sendMouse({
                type: 'down',
                button: 'left',
            });
            const isTriggerButtonFocused =
                assertWrap.instanceOf(instance.shadowRoot.activeElement, ViraPopoverTrigger)
                    .shadowRoot.activeElement instanceof HTMLButtonElement;

            const lastOption = await waitUntil.isTruthy(() => {
                return queryThroughShadow(instance, ViraMenuItem.tagName, {
                    all: true,
                }).at(-1);
            });

            await testWeb.moveMouseTo(lastOption);
            await waitForAnimationFrame(20);

            assert.deepEquals(
                {
                    isTriggerButtonFocused,
                    scrollTop: scrollContainer.scrollTop,
                },
                {
                    isTriggerButtonFocused: true,
                    scrollTop: 0,
                },
            );
        } finally {
            await resetMouse();
        }
    });
});
