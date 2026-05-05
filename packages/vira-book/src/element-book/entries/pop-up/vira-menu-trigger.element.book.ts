import {defineBookPage} from 'element-book';
import {css, html, listen} from 'element-vir';
import {type FullSpaRoute} from 'spa-router-vir';
import {
    HorizontalAnchor,
    renderMenuItemEntries,
    ViraLink,
    ViraMenuCornerStyle,
    ViraMenuTrigger,
    ViraSelect,
    type ViraMenuItemEntry,
    type ViraSelectOption,
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

const mockSelectOptions: ReadonlyArray<Readonly<ViraSelectOption>> = [
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
            menuCornerStyle: ViraMenuCornerStyle.AllRounded,
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
        title: 'restricted long item',
        inputs: {
            horizontalAnchor: HorizontalAnchor.Both,
        },
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
                    const rawSelectItem: ViraMenuItemEntry = {
                        content: html`
                            <${ViraSelect.assign({
                                options: mockSelectOptions,
                                value: state.selectedValue,
                                rawSelect: true,
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
                                ${listen(ViraSelect.events.valueChange, (event) => {
                                    updateState({
                                        selectedValue: event.detail,
                                    });
                                })}
                            ></${ViraSelect}>
                        `,
                    };

                    const items = [
                        rawSelectItem,
                        ...(example.menuItems || mockMenuItems),
                    ];

                    return html`
                        <${ViraMenuTrigger.assign({
                            popUpOffset: {
                                vertical: -1,
                            },
                            ...example.inputs,
                        })}>
                            <div class="trigger" slot=${ViraMenuTrigger.slotNames.trigger}>
                                Trigger Menu
                            </div>
                            ${renderMenuItemEntries(items)}
                        </${ViraMenuTrigger}>
                    `;
                },
            });
        });
    },
});
