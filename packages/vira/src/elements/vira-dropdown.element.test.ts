import {assert, assertWrap, waitUntil} from '@augment-vir/assert';
import {createArray, mapObjectValues, randomString} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {extractElementText, queryThroughShadow, waitForAnimationFrame} from '@augment-vir/web';
import {resetMouse, sendKeys, sendMouse} from '@web/test-runner-commands';
import {css, html, listen, testIdSelector} from 'element-vir';
import {setCssVarValue} from 'lit-css-vars';
import {internalLucideIcons} from '../icons/internal-lucide-icons.js';
import {createSizedIcon} from '../icons/sized-icon.js';
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
        createOption: string[];
        openChange: boolean[];
        selectedValuesChange: string[][];
    } = {
        createOption: [],
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
                ${listen(ViraDropdown.events.createOption, (event) => {
                    events.createOption.push(event.detail);
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

function findFocusedMenuItem(instance: Readonly<Element>) {
    return queryThroughShadow(instance, ViraMenuItem.tagName, {
        all: true,
    }).find((menuItem) => menuItem.matches(':focus'));
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

    it('navigates and selects options with arrow keys', async () => {
        const {instance, events, findMenu} = await setupDropdownTest();

        /**
         * Focus the trigger directly instead of pressing Tab: macOS WebKit does not Tab to buttons
         * by default, so Tab moves focus out of the page, which marks the page inactive and makes
         * every later popover in this file close as soon as it opens.
         */
        assertWrap.instanceOf(queryThroughShadow(instance, 'button'), HTMLButtonElement).focus();
        await sendKeys({
            press: 'ArrowDown',
        });
        await waitUntil.isTruthy(findMenu);
        await sendKeys({
            press: 'ArrowDown',
        });
        await sendKeys({
            press: 'ArrowDown',
        });
        await waitForAnimationFrame();

        assert.strictEquals(
            extractElementText(assertWrap.isDefined(findFocusedMenuItem(instance))),
            'Option B',
        );

        await sendKeys({
            press: 'Enter',
        });

        await waitUntil.isFalsy(findMenu);
        assert.deepEquals(events.selectedValuesChange, [
            ['1'],
        ]);
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
            icon: internalLucideIcons.CodeXml24,
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

    it('renders option icons and label templates in the menu and trigger', async () => {
        const {instance, triggerElement, toggle} = await setupDropdownTest({
            options: [
                {
                    value: 'templated',
                    label: 'Plain label',
                    icon: internalLucideIcons.CodeXml24,
                    labelTemplate: html`
                        <b>Bold label</b>
                    `,
                },
                ...mockMenuItems,
            ],
            selected: ['templated'],
        });

        assert.isTruthy(triggerElement.querySelector('.option-icon'));
        assert.strictEquals(
            extractElementText(assertWrap.isTruthy(triggerElement.querySelector('b'))),
            'Bold label',
        );
        assert.strictEquals(
            assertWrap
                .isTruthy(triggerElement.querySelector('.selection-display'))
                .getAttribute('title'),
            'Plain label',
        );

        await toggle();
        const menuItems = queryThroughShadow(instance, ViraMenuItem.tagName, {
            all: true,
        });

        assert.isLengthExactly(menuItems, mockMenuItems.length + 1);
        assert.isDefined(menuItems[0]);
        assert.isDefined(menuItems[1]);
        assert.isTruthy(menuItems[0].querySelector('.option-icon'));
        assert.strictEquals(extractElementText(menuItems[0]), 'Bold label');
        assert.isNull(menuItems[1].querySelector('.option-icon'));
    });

    it('renders a placeholder', async () => {
        const placeholder = randomString();
        const {triggerElement} = await setupDropdownTest({
            placeholder,
        });

        assert.strictEquals(extractElementText(triggerElement), placeholder);
    });

    it('shows the placeholder at the top of the menu while something is selected', async () => {
        const placeholder = randomString();
        const {toggle, events, queryByTestId} = await setupDropdownTest({
            placeholder,
            selected: [
                '1',
            ],
        });

        await toggle();
        await testWeb.click(assertWrap.instanceOf(queryByTestId.placeholderOption(), HTMLElement));

        assert.deepEquals(
            {
                text: extractElementText(
                    assertWrap.instanceOf(queryByTestId.placeholderOption(), HTMLElement),
                ),
                selectedValuesChange: events.selectedValuesChange,
            },
            {
                text: placeholder,
                selectedValuesChange: [],
            },
        );
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
        /** Playwright's Windows WebKit build does not support `overscroll-behavior` at all. */
        if (!CSS.supports('overscroll-behavior-y', 'contain')) {
            return;
        }

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

    describe('selectionLabel', () => {
        it('replaces a single selection', async () => {
            const {triggerElement} = await setupDropdownTest({
                selectionLabel: 'Custom',
                selected: ['1'],
            });

            assert.strictEquals(extractElementText(triggerElement), 'Custom');
        });

        it('replaces the multi select count', async () => {
            const {triggerElement} = await setupDropdownTest({
                isMultiSelect: true,
                selectionLabel: 'Custom',
                selected: [
                    '0',
                    '1',
                ],
            });

            assert.strictEquals(extractElementText(triggerElement), 'Custom');
        });

        it('renders a template', async () => {
            const {triggerElement} = await setupDropdownTest({
                selectionLabel: html`
                    <b>Bold</b>
                `,
                selected: ['1'],
            });

            assert.strictEquals(
                extractElementText(assertWrap.isTruthy(triggerElement.querySelector('b'))),
                'Bold',
            );
        });

        it('still shows the placeholder when nothing is selected', async () => {
            const {triggerElement} = await setupDropdownTest({
                selectionLabel: 'Custom',
                placeholder: 'Pick one',
            });

            assert.strictEquals(extractElementText(triggerElement), 'Pick one');
        });

        it('fills the closed search input', async () => {
            const {queryByTestId} = await setupDropdownTest({
                isSearchable: true,
                selectionLabel: 'Custom',
                selected: ['1'],
            });

            assert.strictEquals(
                assertWrap.instanceOf(queryByTestId.searchInput(), HTMLInputElement).value,
                'Custom',
            );
        });
    });

    describe('isRaw', () => {
        async function setupRawTest(inputs?: Partial<(typeof ViraDropdown)['InputsType']>) {
            const fixture = await testWeb.render(html`
                <div
                    style=${css`
                        color: rgb(1, 2, 3);
                        font-size: 30px;
                        width: 500px;
                    `}
                >
                    <${ViraDropdown.assign({
                        options: mockMenuItems,
                        selected: ['1'],
                        isRaw: true,
                        ...inputs,
                    })}></${ViraDropdown}>
                </div>
            `);
            const instance = assertWrap.instanceOf(
                fixture.querySelector(ViraDropdown.tagName),
                ViraDropdown,
            );
            const triggerElement = assertWrap.instanceOf(
                instance.shadowRoot.querySelector(testIdSelector(ViraDropdown.testIds.trigger)),
                HTMLElement,
            );

            return {
                instance,
                triggerElement,
            };
        }

        it('removes the trigger box styles and inherits color', async () => {
            const {triggerElement} = await setupRawTest();
            const styles = getComputedStyle(triggerElement);

            assert.deepEquals(
                {
                    borderTopWidth: styles.borderTopWidth,
                    backgroundColor: styles.backgroundColor,
                    paddingLeft: styles.paddingLeft,
                    color: styles.color,
                    fontSize: styles.fontSize,
                },
                {
                    borderTopWidth: '0px',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    paddingLeft: '0px',
                    color: 'rgb(1, 2, 3)',
                    fontSize: '30px',
                },
            );
        });

        it('shrinks to its content with the chevron right after the text', async () => {
            const {instance, triggerElement} = await setupRawTest();
            const hostWidth = instance.getBoundingClientRect().width;

            assert.isBelow(hostWidth, 224);

            const textRect = assertWrap
                .isTruthy(triggerElement.querySelector('.selection-display'))
                .getBoundingClientRect();
            const chevronRect = assertWrap
                .isTruthy(triggerElement.querySelector('.trigger-icon'))
                .getBoundingClientRect();

            /** The 8px trigger gap. */
            assert.isApproximately(chevronRect.left - textRect.right, 8, 1);
            assert.isApproximately(chevronRect.right, instance.getBoundingClientRect().right, 1);
        });

        it('grows taller than the default height to fit large text', async () => {
            const {instance, triggerElement} = await setupRawTest();
            const hostHeight = instance.getBoundingClientRect().height;

            assert.isAbove(hostHeight, 30);
            assert.isApproximately(hostHeight, triggerElement.getBoundingClientRect().height, 1);
        });

        it('does not exceed its container', async () => {
            const {instance} = await setupRawTest({
                options: [
                    {
                        value: 'long',
                        label: createArray(50, () => 'long').join(' '),
                    },
                ],
                selected: ['long'],
            });

            assert.isApproximately(instance.getBoundingClientRect().width, 500, 1);
        });

        it('still opens the menu', async () => {
            const {toggle, instance} = await setupDropdownTest({
                isRaw: true,
            });

            await toggle();

            assert.isLengthExactly(
                queryThroughShadow(instance, ViraMenuItem.tagName, {
                    all: true,
                }),
                mockMenuItems.length,
            );
        });
    });

    it('renders a 24px chevron by default', async () => {
        const {triggerElement} = await setupDropdownTest();

        assert.strictEquals(
            assertWrap
                .isTruthy(triggerElement.querySelector('.trigger-icon'))
                .getBoundingClientRect().width,
            24,
        );
    });

    it('renders a custom trigger icon at its own size', async () => {
        const {triggerElement} = await setupDropdownTest({
            triggerIcon: createSizedIcon(internalLucideIcons.ChevronUp16, 16),
        });

        assert.strictEquals(
            assertWrap
                .isTruthy(triggerElement.querySelector('.trigger-icon'))
                .getBoundingClientRect().width,
            16,
        );
    });

    it('applies trigger font cssVars to the trigger but not the menu', async () => {
        const {instance, triggerElement, toggle} = await setupDropdownTest();
        instance.style.fontSize = '15px';
        instance.style.fontWeight = '400';
        setCssVarValue({
            forCssVar: ViraDropdown.cssVars['vira-dropdown-trigger-font-size'],
            onElement: instance,
            toValue: '30px',
        });
        setCssVarValue({
            forCssVar: ViraDropdown.cssVars['vira-dropdown-trigger-font-weight'],
            onElement: instance,
            toValue: '700',
        });

        await toggle();

        const menuItem = assertWrap.isDefined(
            queryThroughShadow(instance, ViraMenuItem.tagName, {
                all: true,
            })[0],
        );
        const triggerStyles = getComputedStyle(triggerElement);
        const menuItemStyles = getComputedStyle(menuItem);

        assert.deepEquals(
            {
                triggerFontSize: triggerStyles.fontSize,
                triggerFontWeight: triggerStyles.fontWeight,
                menuItemFontSize: menuItemStyles.fontSize,
                menuItemFontWeight: menuItemStyles.fontWeight,
            },
            {
                triggerFontSize: '30px',
                triggerFontWeight: '700',
                menuItemFontSize: '15px',
                menuItemFontWeight: '400',
            },
        );
    });

    describe('isSearchable', () => {
        async function setupSearchTest(inputs?: Partial<(typeof ViraDropdown)['InputsType']>) {
            const dropdownTest = await setupDropdownTest({
                isSearchable: true,
                ...inputs,
            });

            return {
                ...dropdownTest,
                searchInput: assertWrap.instanceOf(
                    dropdownTest.queryByTestId.searchInput(),
                    HTMLInputElement,
                ),
                readOptionLabels(this: void) {
                    return queryThroughShadow(dropdownTest.instance, ViraMenuItem.tagName, {
                        all: true,
                    }).map((option) => extractElementText(option));
                },
            };
        }

        it('clears the selection from the input when clicked into', async () => {
            const {searchInput, findMenu} = await setupSearchTest({
                selected: ['1'],
            });

            assert.strictEquals(searchInput.value as string, 'Option B');
            await testWeb.click(searchInput);
            await waitUntil.isTruthy(findMenu);

            assert.deepEquals(
                {
                    value: searchInput.value,
                    placeholder: searchInput.placeholder,
                    isFocused: searchInput.matches(':focus'),
                },
                {
                    value: '',
                    placeholder: 'Option B',
                    isFocused: true,
                },
            );
        });

        it('draws the focus ring around the whole trigger instead of the input', async () => {
            const {searchInput, triggerElement, findMenu} = await setupSearchTest();

            await testWeb.click(searchInput);
            await waitUntil.isTruthy(findMenu);

            assert.deepEquals(
                {
                    inputOutline: getComputedStyle(searchInput).outlineStyle,
                    triggerRing: getComputedStyle(triggerElement, '::after').borderTopStyle,
                },
                {
                    inputOutline: 'none',
                    triggerRing: 'solid',
                },
            );
        });

        it('focuses the input when opened from the chevron', async () => {
            const {instance, searchInput, findMenu} = await setupSearchTest();

            await testWeb.click(
                assertWrap.instanceOf(
                    instance.shadowRoot.querySelector('.trigger-icon'),
                    HTMLElement,
                ),
            );
            await waitUntil.isTruthy(findMenu);
            await waitUntil.isTrue(() => searchInput.matches(':focus'));
        });

        it('filters options by fuzzy matching the typed text', async () => {
            const {searchInput, findMenu, readOptionLabels} = await setupSearchTest({
                options: [
                    ...mockMenuItems,
                    {
                        value: 'other',
                        label: 'Something else',
                    },
                ],
            });

            await testWeb.click(searchInput);
            await waitUntil.isTruthy(findMenu);
            await testWeb.typeText('opc');

            await waitUntil.deepEquals(
                [
                    'Option C',
                ],
                readOptionLabels,
            );
        });

        it('opens and types into the input when typing on the focused trigger', async () => {
            const {instance, searchInput, findMenu, readOptionLabels} = await setupSearchTest();

            assertWrap
                .instanceOf(queryThroughShadow(instance, 'button'), HTMLButtonElement)
                .focus();
            await testWeb.typeText('b');

            await waitUntil.isTruthy(findMenu);
            await waitUntil.deepEquals(
                [
                    'Option B',
                ],
                readOptionLabels,
            );
            assert.strictEquals(searchInput.value, 'b');
        });

        it('tabs from the input into the options one at a time', async () => {
            const {instance, searchInput, findMenu} = await setupSearchTest();

            await testWeb.click(searchInput);
            await waitUntil.isTruthy(findMenu);
            await sendKeys({
                press: 'Tab',
            });
            await waitForAnimationFrame();

            assert.strictEquals(
                extractElementText(assertWrap.isDefined(findFocusedMenuItem(instance))),
                'Option A',
            );

            await sendKeys({
                press: 'Tab',
            });
            await waitForAnimationFrame();

            assert.strictEquals(
                extractElementText(assertWrap.isDefined(findFocusedMenuItem(instance))),
                'Option B',
            );
        });

        it('selects the first match on Enter', async () => {
            const {searchInput, findMenu, events} = await setupSearchTest();

            await testWeb.click(searchInput);
            await waitUntil.isTruthy(findMenu);
            await testWeb.typeText('c');
            await sendKeys({
                press: 'Enter',
            });

            await waitUntil.isFalsy(findMenu);
            assert.deepEquals(events.selectedValuesChange, [
                ['2'],
            ]);
        });

        describe('isCreatable', () => {
            async function typeIntoSearch(
                setup: Awaited<ReturnType<typeof setupSearchTest>>,
                text: string,
            ) {
                await testWeb.click(setup.searchInput);
                await waitUntil.isTruthy(setup.findMenu);
                await testWeb.typeText(text);
            }

            it('does nothing without isCreatable', async () => {
                const setup = await setupSearchTest();

                await typeIntoSearch(setup, 'zzz');

                assert.isNullish(setup.queryByTestId.createOption());
            });

            it('does not show the create option without search text', async () => {
                const setup = await setupSearchTest({
                    isCreatable: true,
                });

                await testWeb.click(setup.searchInput);
                await waitUntil.isTruthy(setup.findMenu);

                assert.isNullish(setup.queryByTestId.createOption());
            });

            it('shows the create option first when nothing matches', async () => {
                const setup = await setupSearchTest({
                    isCreatable: true,
                });

                await typeIntoSearch(setup, '  Option D ');

                await waitUntil.isTruthy(setup.queryByTestId.createOption);
                assert.strictEquals(
                    extractElementText(
                        assertWrap.instanceOf(setup.queryByTestId.createOption(), HTMLElement),
                    ),
                    'Create "Option D"',
                );
                assert.strictEquals(setup.readOptionLabels()[0], 'Create "Option D"');
            });

            it('shows the create option above partial matches', async () => {
                const setup = await setupSearchTest({
                    isCreatable: true,
                });

                await typeIntoSearch(setup, 'Option');
                await waitUntil.isTruthy(setup.queryByTestId.createOption);

                assert.deepEquals(setup.readOptionLabels(), [
                    'Create "Option"',
                    'Option A',
                    'Option B',
                    'Option C',
                ]);
            });

            it('hides the create option when a label matches exactly, ignoring case', async () => {
                const setup = await setupSearchTest({
                    isCreatable: true,
                });

                await typeIntoSearch(setup, 'option b');
                await waitUntil.deepEquals(
                    [
                        'Option B',
                    ],
                    setup.readOptionLabels,
                );

                assert.isNullish(setup.queryByTestId.createOption());
            });

            it('uses createOptionLabel', async () => {
                const setup = await setupSearchTest({
                    isCreatable: true,
                    createOptionLabel(searchText) {
                        return `Add ${searchText}!`;
                    },
                });

                await typeIntoSearch(setup, 'zzz');

                await waitUntil.isTruthy(setup.queryByTestId.createOption);
                assert.strictEquals(
                    extractElementText(
                        assertWrap.instanceOf(setup.queryByTestId.createOption(), HTMLElement),
                    ),
                    'Add zzz!',
                );
            });

            it('replaces noOptionsText', async () => {
                const setup = await setupSearchTest({
                    isCreatable: true,
                    noOptionsText: 'Nothing here',
                });

                await typeIntoSearch(setup, 'zzz');

                await waitUntil.isTruthy(setup.queryByTestId.createOption);
                assert.strictEquals(
                    extractElementText(assertWrap.isDefined(setup.findMenu())).includes(
                        'Nothing here',
                    ),
                    false,
                );
            });

            it('emits createOption on click without changing the selection', async () => {
                const setup = await setupSearchTest({
                    isCreatable: true,
                });

                await typeIntoSearch(setup, ' New thing ');
                await testWeb.click(
                    assertWrap.instanceOf(
                        await waitUntil.isTruthy(setup.queryByTestId.createOption),
                        HTMLElement,
                    ),
                );

                await waitUntil.isFalsy(setup.findMenu);
                assert.deepEquals(setup.events.createOption, [
                    'New thing',
                ]);
                assert.isEmpty(setup.events.selectedValuesChange);
            });

            it('emits createOption on Enter when nothing matches', async () => {
                const setup = await setupSearchTest({
                    isCreatable: true,
                });

                await typeIntoSearch(setup, 'zzz');
                await waitUntil.isTruthy(setup.queryByTestId.createOption);
                await sendKeys({
                    press: 'Enter',
                });

                await waitUntil.isFalsy(setup.findMenu);
                assert.deepEquals(setup.events.createOption, [
                    'zzz',
                ]);
                assert.isEmpty(setup.events.selectedValuesChange);
            });

            it('selects the first match on Enter when there are matches', async () => {
                const setup = await setupSearchTest({
                    isCreatable: true,
                });

                await typeIntoSearch(setup, 'opt');
                await waitUntil.isTruthy(setup.queryByTestId.createOption);
                await sendKeys({
                    press: 'Enter',
                });

                await waitUntil.isFalsy(setup.findMenu);
                assert.isEmpty(setup.events.createOption);
                assert.deepEquals(setup.events.selectedValuesChange, [
                    ['0'],
                ]);
            });

            it('can be reached and chosen with the keyboard', async () => {
                const setup = await setupSearchTest({
                    isCreatable: true,
                });

                await typeIntoSearch(setup, 'opt');
                await waitUntil.isTruthy(setup.queryByTestId.createOption);
                await sendKeys({
                    press: 'Tab',
                });
                await waitForAnimationFrame();

                assert.strictEquals(
                    extractElementText(assertWrap.isDefined(findFocusedMenuItem(setup.instance))),
                    'Create "opt"',
                );

                await sendKeys({
                    press: 'Enter',
                });

                await waitUntil.isFalsy(setup.findMenu);
                assert.deepEquals(setup.events.createOption, [
                    'opt',
                ]);
                assert.isEmpty(setup.events.selectedValuesChange);
            });

            it('closes a multi select menu after creating', async () => {
                const setup = await setupSearchTest({
                    isCreatable: true,
                    isMultiSelect: true,
                });

                await typeIntoSearch(setup, 'zzz');
                await testWeb.click(
                    assertWrap.instanceOf(
                        await waitUntil.isTruthy(setup.queryByTestId.createOption),
                        HTMLElement,
                    ),
                );

                await waitUntil.isFalsy(setup.findMenu);
                assert.deepEquals(setup.events.createOption, [
                    'zzz',
                ]);
            });

            it('is ignored when not searchable', async () => {
                const {toggle, queryByTestId} = await setupDropdownTest({
                    isCreatable: true,
                });

                await toggle();

                assert.isNullish(queryByTestId.createOption());
            });
        });

        describe('maxShownOptions', () => {
            const manyOptions: ReadonlyArray<Readonly<ViraDropdownOption>> = createArray(
                121,
                (index) => {
                    return {
                        value: String(index),
                        label: `Option ${index}`,
                    };
                },
            );

            it('caps the options and shows how many are hidden', async () => {
                const {searchInput, findMenu, readOptionLabels, queryByTestId} =
                    await setupSearchTest({
                        options: manyOptions,
                        maxShownOptions: 20,
                    });

                await testWeb.click(searchInput);
                await waitUntil.isTruthy(findMenu);

                assert.deepEquals(
                    {
                        optionLabels: readOptionLabels(),
                        hint: extractElementText(
                            assertWrap.instanceOf(queryByTestId.hiddenOptionsHint(), HTMLElement),
                        ),
                    },
                    {
                        optionLabels: manyOptions.slice(0, 20).map((option) => option.label),
                        hint: '+101, type to narrow your search',
                    },
                );
            });

            it('caps the matches of a search', async () => {
                const {searchInput, findMenu, readOptionLabels, queryByTestId} =
                    await setupSearchTest({
                        options: manyOptions,
                        maxShownOptions: 3,
                        hiddenOptionsText(hiddenCount) {
                            return `${hiddenCount} hidden`;
                        },
                    });

                await testWeb.click(searchInput);
                await waitUntil.isTruthy(findMenu);
                /** Matches 21 labels, from "Option 9" through "Option 119". */
                await testWeb.typeText('9');

                await waitUntil.deepEquals(
                    {
                        optionLabels: [
                            'Option 9',
                            'Option 19',
                            'Option 29',
                        ],
                        hint: '18 hidden',
                    },
                    () => {
                        const hint = queryByTestId.hiddenOptionsHint();

                        return {
                            optionLabels: readOptionLabels(),
                            hint: hint instanceof HTMLElement ? extractElementText(hint) : '',
                        };
                    },
                );
            });

            it('does not show the hint when every match fits', async () => {
                const {searchInput, findMenu, readOptionLabels, queryByTestId} =
                    await setupSearchTest({
                        options: manyOptions,
                        maxShownOptions: 20,
                    });

                await testWeb.click(searchInput);
                await waitUntil.isTruthy(findMenu);
                await testWeb.typeText('120');

                await waitUntil.deepEquals(
                    [
                        'Option 120',
                    ],
                    readOptionLabels,
                );
                assert.isNull(queryByTestId.hiddenOptionsHint());
            });

            it('does not select anything or close when the hint is clicked', async () => {
                const {searchInput, findMenu, queryByTestId, events} = await setupSearchTest({
                    options: manyOptions,
                    maxShownOptions: 5,
                });

                await testWeb.click(searchInput);
                await waitUntil.isTruthy(findMenu);
                await testWeb.click(
                    assertWrap.instanceOf(queryByTestId.hiddenOptionsHint(), HTMLElement),
                );
                await waitForAnimationFrame();

                assert.isTruthy(findMenu());
                assert.isEmpty(events.selectedValuesChange);
            });

            it('counts across groups and drops emptied groups', async () => {
                const {searchInput, findMenu, readOptionLabels, queryByTestId, instance} =
                    await setupSearchTest({
                        options: mockGroupedOptions,
                        maxShownOptions: 2,
                    });

                await testWeb.click(searchInput);
                await waitUntil.isTruthy(findMenu);

                assert.deepEquals(
                    {
                        groupLabels: Array.from(
                            instance.shadowRoot.querySelectorAll('.option-group-label'),
                        ).map((groupLabel) => extractElementText(groupLabel)),
                        optionLabels: readOptionLabels(),
                        hint: extractElementText(
                            assertWrap.instanceOf(queryByTestId.hiddenOptionsHint(), HTMLElement),
                        ),
                    },
                    {
                        groupLabels: [
                            'First',
                            'Second',
                        ],
                        optionLabels: [
                            'Option A',
                            'Option B',
                        ],
                        hint: '+2, type to narrow your search',
                    },
                );
            });

            it('drops a group the cap leaves empty', async () => {
                const {searchInput, findMenu, instance} = await setupSearchTest({
                    options: mockGroupedOptions,
                    maxShownOptions: 1,
                });

                await testWeb.click(searchInput);
                await waitUntil.isTruthy(findMenu);

                assert.deepEquals(
                    Array.from(instance.shadowRoot.querySelectorAll('.option-group-label')).map(
                        (groupLabel) => extractElementText(groupLabel),
                    ),
                    [
                        'First',
                    ],
                );
            });

            it('drag selects the right option after capping', async () => {
                const {instance, events} = await setupSearchTest({
                    options: mockGroupedOptions,
                    isMultiSelect: true,
                    maxShownOptions: 2,
                });

                try {
                    /** Drag-selecting from the search input fails in Firefox. */
                    await testWeb.moveMouseTo(
                        assertWrap.instanceOf(
                            instance.shadowRoot.querySelector('.trigger-icon'),
                            HTMLElement,
                        ),
                    );
                    await sendMouse({
                        type: 'down',
                        button: 'left',
                    });

                    /** The menu items are: "First", "Option A", "Second", "Option B". */
                    const option = await waitUntil.isTruthy(() => {
                        return queryThroughShadow(instance, ViraMenuItem.tagName, {
                            all: true,
                        })[3];
                    });
                    assert.strictEquals(extractElementText(option), 'Option B');

                    await testWeb.moveMouseTo(option);
                    await sendMouse({
                        type: 'up',
                        button: 'left',
                    });

                    await waitUntil.deepEquals(
                        [
                            ['1'],
                        ],
                        () => events.selectedValuesChange,
                    );
                } finally {
                    await resetMouse();
                }
            });
        });
    });
});
