import {defineBookPage} from 'element-book';
import {css, html, listen} from 'element-vir';
import {type FullSpaRoute} from 'spa-router-vir';
import {
    renderMenuItemEntries,
    ViraDropdown,
    ViraLink,
    ViraMenuCornerStyle,
    ViraMenuTrigger,
    ViraThemeClient,
    ViraThemeSwitcher,
    type ViraDropdownOption,
    type ViraMenuItemEntry,
} from 'vira';
import {elementsBookPage} from '../../top-level-pages.js';

const mockMenuItems: ReadonlyArray<ViraMenuItemEntry> = [
    {
        content: 'one',
    },
    {
        content: 'two',
    },
    {
        content: 'three',
    },
    {
        content: 'four',
    },
    {
        content: 'five',
    },
    {
        content: 'six',
    },
];

const mockDropdownOptions: ReadonlyArray<Readonly<ViraDropdownOption>> = [
    {
        value: '1',
        label: 'Option one',
    },
    {
        value: '2',
        label: 'Option two',
    },
    {
        value: '3',
        label: 'Option three',
    },
];

const longMenuItem: ViraMenuItemEntry = {
    content: html`
        <div
            style=${css`
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            `}
        >
            This menu item is much longer than the others
        </div>
    `,
};

const examples: {
    title: string;
    inputs?: Partial<typeof ViraMenuTrigger.InputsType>;
    menuItems?: ReadonlyArray<ViraMenuItemEntry>;
}[] = [
    {
        title: 'basic',
    },
    {
        title: 'rounded',
        inputs: {
            menuCornerStyle: ViraMenuCornerStyle.Round,
        },
    },
    {
        title: 'disabled',
        inputs: {
            isDisabled: true,
        },
    },
    {
        title: 'inside focus',
        inputs: {
            useInsideFocus: true,
        },
    },
    {
        title: 'long item',
        menuItems: [
            ...mockMenuItems,
            longMenuItem,
        ],
    },
    {
        title: 'ViraLink URL item',
        menuItems: [
            ...mockMenuItems,
            {
                content: html`
                    <${ViraLink.assign({
                        link: {
                            url: 'https://www.wikipedia.org',
                            newTab: true,
                        },
                        disableLinkStyles: true,
                    })}>
                        Wikipedia link
                    </${ViraLink}>
                `,
            },
        ],
    },
    {
        title: 'ViraLink route item',
        menuItems: [
            ...mockMenuItems,
            {
                content: html`
                    <${ViraLink.assign({
                        route: {
                            route: {
                                paths: [],
                            },
                            router: {
                                createRouteUrl() {
                                    return {
                                        url: window.location.href,
                                        route: {} as FullSpaRoute,
                                    };
                                },
                                setRouteOnDirectNavigation(route, event) {
                                    console.info(route, event);
                                    return false;
                                },
                            },
                        },
                        disableLinkStyles: true,
                    })}>
                        Route link
                    </${ViraLink}>
                `,
            },
        ],
    },
    {
        title: 'keep open item',
        menuItems: [
            {
                content: 'Keeps the menu open when clicked',
                keepOpenAfterInteraction: true,
            },
            ...mockMenuItems,
        ],
    },
];

export const viraMenuTriggerBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraMenuTrigger.tagName,
    descriptionParagraphs: [
        'No selection state logic is included in these examples.',
    ],
    defineExamples({defineExample}) {
        examples.forEach((example) => {
            defineExample({
                title: example.title,
                styles: css`
                    .trigger {
                        cursor: pointer;
                        border: 4px solid #ccc;
                        padding: 8px 16px;
                    }
                `,
                state() {
                    return {
                        selectedValue: undefined as string | undefined,
                    };
                },
                render({state, updateState}) {
                    const dropdownItem: ViraMenuItemEntry = {
                        keepOpenAfterInteraction: true,
                        content: html`
                            <${ViraDropdown.assign({
                                options: mockDropdownOptions,
                                selected: state.selectedValue
                                    ? [
                                          state.selectedValue,
                                      ]
                                    : [],
                            })}
                                style=${css`
                                    width: 100%;
                                `}
                                ${listen('click', (event) => {
                                    event.stopPropagation();
                                })}
                                ${listen('mousedown', (event) => {
                                    event.stopPropagation();
                                })}
                                ${listen(ViraDropdown.events.selectedValuesChange, (event) => {
                                    updateState({
                                        selectedValue: event.detail[0],
                                    });
                                })}
                            ></${ViraDropdown}>
                        `,
                    };

                    const items = [
                        dropdownItem,
                        ...(example.menuItems || mockMenuItems),
                    ];

                    return html`
                        <${ViraMenuTrigger.assign({
                            popoverOffset: {
                                vertical: -1,
                            },
                            ...example.inputs,
                        })}>
                            <div
                                class="trigger"
                                slot=${ViraMenuTrigger.slotNames['vira-menu-trigger-trigger']}
                            >
                                Trigger Menu
                            </div>
                            ${renderMenuItemEntries(items)}
                        </${ViraMenuTrigger}>
                    `;
                },
            });
        });
        defineExample({
            title: 'theme picker item',
            styles: css`
                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .theme-picker {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 12px;
                }
            `,
            state() {
                return {
                    themeClient: new ViraThemeClient(),
                };
            },
            render({state}) {
                return html`
                    <${ViraMenuTrigger.assign({})}>
                        <div
                            class="trigger"
                            slot=${ViraMenuTrigger.slotNames['vira-menu-trigger-trigger']}
                        >
                            User
                        </div>
                        ${renderMenuItemEntries([
                            {
                                content: html`
                                    <div class="theme-picker">
                                        <span>Theme</span>
                                        <${ViraThemeSwitcher.assign({
                                            themeClient: state.themeClient,
                                        })}></${ViraThemeSwitcher}>
                                    </div>
                                `,
                                disablePointerStyles: true,
                                keepOpenAfterInteraction: true,
                            },
                            {
                                content: 'Sign out',
                            },
                        ])}
                    </${ViraMenuTrigger}>
                `;
            },
        });
    },
});
