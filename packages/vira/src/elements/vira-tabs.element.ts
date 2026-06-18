import {check} from '@augment-vir/assert';
import {
    arrayToObject,
    filterMap,
    getObjectTypedKeys,
    type PartialWithUndefined,
} from '@augment-vir/common';
import {ContrastLevelName} from '@electrovir/color/dist/data/contrast/contrast.js';
import {
    classMap,
    css,
    defineElementEvent,
    html,
    listen,
    nothing,
    onDomCreated,
    unsafeCSS,
    type CSSResult,
} from 'element-vir';
import {
    routeHasPaths,
    type FullSpaRoute,
    type GenericTreePaths,
    type SpaRouter,
} from 'spa-router-vir';
import {type ViraIconSvg} from '../icons/icon-svg.js';
import {createFocusStyles} from '../styles/focus.js';
import {viraFormCssVars} from '../styles/form-styles.js';
import {
    standaloneThemeColorNames,
    ViraColorVariant,
    viraColorVariantToHostClassKey,
} from '../styles/form-variants.js';
import {noNativeFormStyles, noUserSelect, viraDisabledStyles, viraTheme} from '../styles/index.js';
import {viraThemeByKeys, ViraThemeColorName} from '../styles/vira-color-theme-object.js';
import {defineViraElement} from '../util/define-vira-element.js';
import {createOverflowObserver} from '../util/overflow-observer.js';
import {renderMenuItemEntries, type ViraMenuItemEntry} from '../util/pop-up-helpers.js';
import {ViraMenuTrigger} from './pop-up/vira-menu-trigger.element.js';
import {ViraMenuCornerStyle} from './pop-up/vira-menu.element.js';
import {type HorizontalAnchor, type PopUpOffset} from './pop-up/vira-pop-up-trigger.element.js';
import {ViraBoldText} from './vira-bold-text.element.js';
import {ViraButton} from './vira-button.element.js';
import {ViraIcon} from './vira-icon.element.js';
import {ViraLink} from './vira-link.element.js';

/**
 * Controls which edge of the tab the selection indicator bar appears on.
 *
 * @category Internal
 */
export enum ViraTabsBarDirection {
    Top = 'top',
    Bottom = 'bottom',
    Left = 'left',
    Right = 'right',
}

/**
 * Controls whether tab icons render above/below or beside the label text.
 *
 * @category Internal
 */
export enum ViraTabsIconLayout {
    /** Icon renders above (or below) the label. */
    Vertical = 'vertical',
    /** Icon renders beside the label. */
    Horizontal = 'horizontal',
}

/**
 * A single tab entry for {@link ViraTabs}.
 *
 * @category Internal
 */
export type ViraTab = {
    label: string;
    paths: GenericTreePaths;
} & PartialWithUndefined<{
    icon: Readonly<ViraIconSvg>;
    isHidden: boolean;
    isDisabled: boolean;
    /**
     * When true, the tab is only considered selected when the current route's paths exactly equal
     * `paths.fullPaths`. By default a tab is considered selected when its paths are a prefix of the
     * current route.
     */
    exactMatch: boolean;
}>;

/**
 * A tab bar element that renders an array of tabs with an animated selection indicator.
 *
 * @category Elements
 */
export const ViraTabs = defineViraElement<
    {
        tabs: ReadonlyArray<Readonly<ViraTab>>;
        router: Pick<SpaRouter<any, any, any>, 'createRouteUrl' | 'setRouteOnDirectNavigation'>;
        currentRoute: Readonly<FullSpaRoute>;
    } & PartialWithUndefined<{
        /**
         * Which edge of the tab the selection bar appears on.
         *
         * @default ViraTabsBarDirection.Bottom
         */
        barDirection: ViraTabsBarDirection;
        /**
         * Color variant for the tab selection indicator and active tab text. Accepts any
         * {@link ViraColorVariant} or a {@link ViraThemeColorName} (e.g.,
         * `ViraThemeColorName.blue`).
         *
         * @default ViraColorVariant.Plain
         */
        color: ViraColorVariant | ViraThemeColorName;
        /**
         * Layout direction for icons relative to their label text.
         *
         * @default ViraTabsIconLayout.Vertical
         */
        iconLayout: ViraTabsIconLayout;
        /**
         * Horizontal anchor for the dropdown menu. Only used when tabs overflow into a dropdown.
         *
         * @default HorizontalAnchor.Left
         */
        menuHorizontalAnchor: HorizontalAnchor;
        /** Whether the dropdown trigger is disabled. Only used when tabs overflow into a dropdown. */
        menuIsDisabled: boolean;
        /** Offset for the dropdown pop-up. Only used when tabs overflow into a dropdown. */
        menuPopUpOffset: Readonly<PopUpOffset>;
        /** When true, tabs and their container expand to fill all available horizontal space. */
        shouldFillWidth: boolean;
    }>
>()({
    tagName: 'vira-tabs',
    events: {
        /** Fires when a tab is clicked with the corresponding tab entry. */
        tabSelect: defineElementEvent<Readonly<ViraTab>>(),
    },
    state() {
        return {
            isOverflowing: false,
            /** A callback to remove all internal observers. */
            cleanupObserver: undefined as undefined | (() => void),
        };
    },
    hostClasses: {
        'vira-tabs-bar-top': ({inputs}) => inputs.barDirection === ViraTabsBarDirection.Top,
        'vira-tabs-bar-bottom': ({inputs}) =>
            !inputs.barDirection || inputs.barDirection === ViraTabsBarDirection.Bottom,
        'vira-tabs-bar-left': ({inputs}) => inputs.barDirection === ViraTabsBarDirection.Left,
        'vira-tabs-bar-right': ({inputs}) => inputs.barDirection === ViraTabsBarDirection.Right,
        ...arrayToObject(
            getObjectTypedKeys(viraColorVariantToHostClassKey),
            (colorVariant) => {
                const colorKey = viraColorVariantToHostClassKey[colorVariant];
                return {
                    key: `vira-tabs-color-${colorKey}` as const,
                    value: ({
                        inputs,
                    }: {
                        inputs: Readonly<
                            PartialWithUndefined<{color: ViraColorVariant | ViraThemeColorName}>
                        >;
                    }) => {
                        return inputs.color === colorVariant || inputs.color === colorKey;
                    },
                };
            },
            {
                useRequired: true,
            },
        ),
        'vira-tabs-color-plain': ({
            inputs,
        }: {
            inputs: Readonly<PartialWithUndefined<{color: ViraColorVariant | ViraThemeColorName}>>;
        }) => !inputs.color || inputs.color === ViraColorVariant.Plain,
        'vira-tabs-color-neutral': ({
            inputs,
        }: {
            inputs: Readonly<PartialWithUndefined<{color: ViraColorVariant | ViraThemeColorName}>>;
        }) => inputs.color === ViraColorVariant.Neutral,
        ...arrayToObject(
            standaloneThemeColorNames,
            (colorName) => {
                return {
                    key: `vira-tabs-color-${colorName}` as const,
                    value: ({
                        inputs,
                    }: {
                        inputs: Readonly<
                            PartialWithUndefined<{color: ViraColorVariant | ViraThemeColorName}>
                        >;
                    }) => {
                        return inputs.color === colorName;
                    },
                };
            },
            {
                useRequired: true,
            },
        ),
        'vira-tabs-icon-layout-vertical': ({inputs}) =>
            !inputs.iconLayout || inputs.iconLayout === ViraTabsIconLayout.Vertical,
        'vira-tabs-icon-layout-horizontal': ({inputs}) =>
            inputs.iconLayout === ViraTabsIconLayout.Horizontal,
        'vira-tabs-overflowing': ({state}) => state.isOverflowing,
        'vira-tabs-fill-width': ({inputs}) => !!inputs.shouldFillWidth,
    },
    cssVars: {
        'vira-tabs-active-color':
            viraThemeByKeys[viraColorVariantToHostClassKey[ViraColorVariant.Info]]['behind-bg'][
                ContrastLevelName.NonBodyText
            ].background.value,
        'vira-tabs-active-hover-color':
            viraThemeByKeys[viraColorVariantToHostClassKey[ViraColorVariant.Info]]['behind-bg'][
                ContrastLevelName.Header
            ].background.value,
        'vira-tabs-inactive-color':
            viraTheme.colors['vira-grey-foreground-header'].foreground.value,
        'vira-tabs-inactive-hover-color':
            viraTheme.colors['vira-grey-foreground-non-body'].foreground.value,
        'vira-tabs-bar-thickness': '3px',
    },

    styles: ({hostClasses, cssVars}) => {
        function buildThemedTabsColors(colorName: ViraThemeColorName) {
            return {
                active: viraThemeByKeys[colorName]['behind-bg'][ContrastLevelName.NonBodyText]
                    .background,
                hover: viraThemeByKeys[colorName]['behind-bg'][ContrastLevelName.Header].background,
            };
        }

        function buildVariantCssRule(
            variantSelector: CSSResult,
            colors: {active: {value: CSSResult}; hover: {value: CSSResult}},
        ): CSSResult {
            return css`
                ${variantSelector} {
                    ${cssVars['vira-tabs-active-color'].name}: ${colors.active.value};
                    ${cssVars['vira-tabs-active-hover-color'].name}: ${colors.hover.value};
                }
            `;
        }

        function generateVariantCss(): CSSResult {
            const plainColors = {
                active: viraTheme.colors['vira-grey-foreground-small-body'].foreground,
                hover: viraTheme.colors['vira-grey-foreground-body'].foreground,
            };

            const themedStyles = getObjectTypedKeys(viraColorVariantToHostClassKey).map(
                (colorVariant) => {
                    const colorKey = viraColorVariantToHostClassKey[colorVariant];
                    const variantSelector = hostClasses[`vira-tabs-color-${colorKey}`].selector;
                    const colors = buildThemedTabsColors(colorKey);
                    return buildVariantCssRule(variantSelector, colors);
                },
            );
            const plainStyle = buildVariantCssRule(
                hostClasses['vira-tabs-color-plain'].selector,
                plainColors,
            );
            const neutralStyle = buildVariantCssRule(
                hostClasses['vira-tabs-color-neutral'].selector,
                buildThemedTabsColors(ViraThemeColorName.grey),
            );
            const standaloneStyles = standaloneThemeColorNames.map((colorName) => {
                const variantSelector = hostClasses[`vira-tabs-color-${colorName}`].selector;
                const colors = buildThemedTabsColors(colorName);
                return buildVariantCssRule(variantSelector, colors);
            });

            return unsafeCSS(
                [
                    ...themedStyles,
                    plainStyle,
                    neutralStyle,
                    ...standaloneStyles,
                ].join('\n'),
            );
        }

        return css`
            :host {
                display: flex;
                box-sizing: border-box;
                ${noUserSelect};
                width: 100%;
            }

            .tabs-container {
                display: flex;
                position: relative;
                list-style: none;
                overflow: hidden;
                margin: 0;
                padding: 0;
            }

            ${hostClasses['vira-tabs-bar-top'].selector},
            ${hostClasses['vira-tabs-bar-bottom'].selector} {
                & .tabs-container {
                    flex-direction: row;
                }
            }

            ${hostClasses['vira-tabs-bar-left'].selector},
            ${hostClasses['vira-tabs-bar-right'].selector} {
                & .tabs-container {
                    flex-direction: column;
                }
            }

            li {
                ${noNativeFormStyles};
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                position: relative;
                color: ${cssVars['vira-tabs-inactive-color'].value};
                font-size: ${viraFormCssVars['vira-form-medium-text-size'].value};
                text-decoration: none;
                ${createFocusStyles({
                    renderInside: true,
                    elementBorderSize: '0',
                })}

                &::after {
                    content: '';
                    position: absolute;
                    background-color: transparent;
                }

                &:hover {
                    color: ${cssVars['vira-tabs-inactive-hover-color'].value};
                    background-color: ${viraTheme.colors['vira-grey-on-self-small-body'].background
                        .value};
                }

                &.selected {
                    pointer-events: none;
                    color: ${cssVars['vira-tabs-active-color'].value};

                    &::after {
                        background-color: ${cssVars['vira-tabs-active-color'].value};
                    }
                }

                &.disabled {
                    ${viraDisabledStyles};
                }
            }

            ${hostClasses['vira-tabs-bar-bottom'].selector} {
                border-bottom: 1px solid
                    ${viraTheme.colors['vira-grey-foreground-decoration'].foreground.value};

                & li::after {
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: ${cssVars['vira-tabs-bar-thickness'].value};
                    border-radius: ${cssVars['vira-tabs-bar-thickness'].value}
                        ${cssVars['vira-tabs-bar-thickness'].value} 0 0;
                }
            }

            ${hostClasses['vira-tabs-bar-top'].selector} {
                border-top: 1px solid
                    ${viraTheme.colors['vira-grey-foreground-decoration'].foreground.value};

                & li::after {
                    top: 0;
                    left: 0;
                    right: 0;
                    height: ${cssVars['vira-tabs-bar-thickness'].value};
                    border-radius: 0 0 ${cssVars['vira-tabs-bar-thickness'].value}
                        ${cssVars['vira-tabs-bar-thickness'].value};
                }
            }

            ${hostClasses['vira-tabs-bar-left'].selector} {
                border-left: 1px solid
                    ${viraTheme.colors['vira-grey-foreground-decoration'].foreground.value};

                & li::after {
                    top: 0;
                    bottom: 0;
                    left: 0;
                    width: ${cssVars['vira-tabs-bar-thickness'].value};
                    border-radius: 0 ${cssVars['vira-tabs-bar-thickness'].value}
                        ${cssVars['vira-tabs-bar-thickness'].value} 0;
                }
            }

            ${hostClasses['vira-tabs-bar-right'].selector} {
                border-right: 1px solid
                    ${viraTheme.colors['vira-grey-foreground-decoration'].foreground.value};

                & li::after {
                    top: 0;
                    bottom: 0;
                    right: 0;
                    width: ${cssVars['vira-tabs-bar-thickness'].value};
                    border-radius: ${cssVars['vira-tabs-bar-thickness'].value} 0 0
                        ${cssVars['vira-tabs-bar-thickness'].value};
                }
            }

            ${generateVariantCss()}

            .tab-content {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            ${hostClasses['vira-tabs-icon-layout-vertical'].selector} {
                & .tab-content {
                    flex-direction: column;
                    gap: 4px;
                }
            }

            ${hostClasses['vira-tabs-icon-layout-horizontal'].selector} {
                & .tab-content {
                    flex-direction: row;
                    gap: 8px;
                }
            }

            ${hostClasses['vira-tabs-overflowing'].selector} .tabs-container {
                visibility: hidden;
                height: 0;
            }

            .overflow-menu {
                display: none;
            }

            ${hostClasses['vira-tabs-overflowing'].selector} .overflow-menu {
                display: flex;
                align-items: center;
                width: fit-content;
                padding-left: 8px;
            }

            ${hostClasses['vira-tabs-fill-width'].selector} {
                & .tabs-container {
                    flex-grow: 1;
                }

                & li {
                    flex-grow: 1;
                }

                & .tabs-container ${ViraLink} {
                    flex-grow: 1;
                    justify-content: center;
                }
            }

            ${ViraLink} {
                text-decoration: none;
            }

            .tabs-container ${ViraLink} {
                display: flex;
                padding: 8px 16px;
            }

            ${ViraMenuTrigger} {
                margin: 3px 0;
            }

            .overflow-menu ${ViraButton} {
                flex-shrink: 0;
                white-space: nowrap;
            }
        `;
    },
    cleanup({state}) {
        state.cleanupObserver?.();
    },
    render({inputs, state, updateState, host, dispatch, events}) {
        const tabs = filterMap(
            inputs.tabs,
            (tab) => {
                if (tab.isHidden) {
                    return undefined;
                }

                const isSelected = routeHasPaths(inputs.currentRoute, tab.paths, {
                    exactMatch: tab.exactMatch,
                });

                const iconTemplate = tab.icon
                    ? html`
                          <${ViraIcon.assign({
                              icon: tab.icon,
                          })}></${ViraIcon}>
                      `
                    : nothing;

                const isInert = isSelected || !!tab.isDisabled;

                return html`
                    <li
                        class=${classMap({
                            selected: isSelected,
                            disabled: !!tab.isDisabled,
                        })}
                        role="presentation"
                        ${listen('click', () => {
                            if (!tab.isDisabled) {
                                dispatch(new events.tabSelect(tab));
                            }
                        })}
                    >
                        <${ViraLink.assign({
                            route: {
                                router: inputs.router,
                                route: {
                                    paths: tab.paths.fullPaths,
                                },
                                scrollToTop: true,
                            },
                            disableLinkStyles: true,
                            attributePassthrough: {
                                a: {
                                    role: 'tab',
                                    'aria-selected': String(isSelected),
                                    'aria-disabled': String(!!tab.isDisabled),
                                    tabindex: isInert ? '-1' : undefined,
                                },
                            },
                        })}>
                            <span class="tab-content">
                                ${iconTemplate}
                                <${ViraBoldText.assign({
                                    text: tab.label,
                                    bold: isSelected,
                                })}
                                    class="tab-label"
                                ></${ViraBoldText}>
                            </span>
                        </${ViraLink}>
                    </li>
                `;
            },
            check.isTruthy,
        );
        const selectedTab = inputs.tabs.find((tab) =>
            routeHasPaths(inputs.currentRoute, tab.paths, {
                exactMatch: tab.exactMatch,
            }),
        );

        const menuItems = renderMenuItemEntries(
            filterMap(
                inputs.tabs,
                (tab): ViraMenuItemEntry | undefined => {
                    if (tab.isHidden) {
                        return undefined;
                    }

                    const isSelected = routeHasPaths(inputs.currentRoute, tab.paths, {
                        exactMatch: tab.exactMatch,
                    });

                    const iconTemplate = tab.icon
                        ? html`
                              <${ViraIcon.assign({
                                  icon: tab.icon,
                              })}></${ViraIcon}>
                          `
                        : nothing;

                    return {
                        content: html`
                            <${ViraLink.assign({
                                route: {
                                    router: inputs.router,
                                    route: {
                                        paths: tab.paths.fullPaths,
                                    },
                                    scrollToTop: true,
                                },
                                disableLinkStyles: true,
                                stylePassthrough: {
                                    a: css`
                                        display: flex;
                                        align-items: center;
                                        gap: 8px;
                                    `,
                                },
                            })}>
                                ${iconTemplate} ${tab.label}
                            </${ViraLink}>
                        `,
                        selected: isSelected,
                        disabled: tab.isDisabled,
                        onClick() {
                            if (!tab.isDisabled) {
                                dispatch(new events.tabSelect(tab));
                            }
                        },
                    };
                },
                check.isTruthy,
            ),
        );

        return html`
            <${ViraMenuTrigger.assign({
                horizontalAnchor: inputs.menuHorizontalAnchor,
                isDisabled: inputs.menuIsDisabled,
                popUpOffset: inputs.menuPopUpOffset,
                menuCornerStyle: ViraMenuCornerStyle.AllRounded,
            })}
                class="overflow-menu"
            >
                <${ViraButton.assign({
                    text: selectedTab?.label || '',
                    showMenuCaret: true,
                    color: ViraColorVariant.Neutral,
                })}
                    slot=${ViraMenuTrigger.slotNames['vira-menu-trigger-trigger']}
                ></${ViraButton}>
                ${menuItems}
            </${ViraMenuTrigger}>
            <ul
                class="tabs-container"
                role="tablist"
                ${onDomCreated((tabsElement) => {
                    state.cleanupObserver?.();
                    updateState({
                        cleanupObserver: createOverflowObserver({
                            element: tabsElement,
                            widthElement: host,
                            hysteresisPx: 16,
                            onChange(isOverflowing) {
                                updateState({
                                    isOverflowing,
                                });
                            },
                        }),
                    });
                })}
            >
                ${tabs}
            </ul>
        `;
    },
});
