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
    type HTMLTemplateResult,
} from 'element-vir';
import {
    routeHasPaths,
    type FullSpaRoute,
    type GenericTreePaths,
    type SpaRouter,
} from 'spa-router-vir';
import {themeDefaultKey} from 'theme-vir/dist/color-theme/color-theme.js';
import {type ViraIconSvg} from '../icons/icon-svg.js';
import {Check24Icon} from '../icons/icon-svgs/24/check-24.icon.js';
import {createFocusStyles} from '../styles/focus.js';
import {viraFontCssVars} from '../styles/font.js';
import {viraFormCssVars} from '../styles/form-styles.js';
import {
    standaloneThemeColorNames,
    ViraColorVariant,
    viraColorVariantToHostClassKey,
} from '../styles/form-variants.js';
import {noNativeFormStyles, noUserSelect, viraDisabledStyles, viraTheme} from '../styles/index.js';
import {viraThemeByKeys, ViraThemeColorName} from '../styles/vira-color-theme-object.js';
import {defineViraElement} from '../util/define-vira-element.js';
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

function measureElementWidth(mirrorElement: Element, selector: string) {
    const element = mirrorElement.querySelector(selector);
    return element ? element.getBoundingClientRect().width : 0;
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
    /**
     * Optional cluster label. Consecutive tabs sharing the same `group` string render together
     * under that label, separated from other clusters by an inset vertical divider. Tabs with no
     * `group` render standalone (no label, no divider). Grouping only affects rendering when at
     * least one tab has a `group`.
     */
    group: string;
}>;

/**
 * Groups a flat list of tabs into clusters. Consecutive tabs sharing the same `group` string are
 * merged into a single cluster; ungrouped tabs (and tabs whose `group` differs from their
 * predecessor) each start a new cluster.
 *
 * @category Internal
 */
export function buildClusters(tabList: ReadonlyArray<Readonly<ViraTab>>) {
    return tabList.reduce<
        {
            group: string | undefined;
            tabs: ReadonlyArray<Readonly<ViraTab>>;
        }[]
    >((accumulatedClusters, tab) => {
        const lastCluster = accumulatedClusters[accumulatedClusters.length - 1];
        if (tab.group != undefined && lastCluster && lastCluster.group === tab.group) {
            return [
                ...accumulatedClusters.slice(0, -1),
                {
                    group: lastCluster.group,
                    tabs: [
                        ...lastCluster.tabs,
                        tab,
                    ],
                },
            ];
        }
        return [
            ...accumulatedClusters,
            {
                group: tab.group,
                tabs: [tab],
            },
        ];
    }, []);
}

function renderGroupedContent(
    tabList: ReadonlyArray<Readonly<ViraTab>>,
    renderItem: (tab: Readonly<ViraTab>) => HTMLTemplateResult,
) {
    const clusters = buildClusters(tabList);
    return clusters.map((cluster, clusterIndex) => {
        const previousCluster = clusters[clusterIndex - 1];
        const dividerTemplate =
            previousCluster && previousCluster.group != undefined && cluster.group != undefined
                ? html`
                      <span class="tab-cluster-divider"></span>
                  `
                : nothing;
        const labelTemplate =
            cluster.group == undefined
                ? nothing
                : html`
                      <span class="tab-group-label">${cluster.group}</span>
                  `;
        return html`
            ${dividerTemplate}
            <div
                class=${classMap({
                    'tab-cluster': true,
                    standalone: cluster.group == undefined,
                })}
            >
                ${labelTemplate}
                <div class="tab-cluster-tabs">${cluster.tabs.map(renderItem)}</div>
            </div>
        `;
    });
}

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
        /**
         * Text shown on the overflow "more" trigger when the selected tab is _not_ collapsed into
         * the menu. When the selected tab _is_ collapsed, the trigger shows that tab's label (with
         * a checkmark) instead. Set this to a localized string; it defaults to `'More'`.
         *
         * @default 'More'
         */
        overflowLabel: string;
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
            /** How many of the visible tabs are collapsed into the overflow "more" menu. */
            overflowCount: 0,
            /** A callback to remove all internal observers. */
            cleanupObserver: undefined as undefined | (() => void),
        };
    },
    hostClasses: {
        'vira-tabs-bar-top': ({inputs}) => inputs.barDirection === ViraTabsBarDirection.Top,
        'vira-tabs-bar-bottom': ({inputs}) => {
            return !inputs.barDirection || inputs.barDirection === ViraTabsBarDirection.Bottom;
        },
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
        'vira-tabs-icon-layout-vertical': ({inputs}) => {
            return !inputs.iconLayout || inputs.iconLayout === ViraTabsIconLayout.Vertical;
        },
        'vira-tabs-icon-layout-horizontal': ({inputs}) => {
            return inputs.iconLayout === ViraTabsIconLayout.Horizontal;
        },
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
        'vira-tabs-inactive-color': viraTheme.colors[themeDefaultKey].foreground.value,
        'vira-tabs-inactive-hover-color': viraTheme.colors[themeDefaultKey].foreground.value,
        'vira-tabs-bar-thickness': '2px',
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
                /** Tab labels, the overflow trigger, and menu items never wrap to a second line. */
                white-space: nowrap;
            }

            .tabs-container {
                display: flex;
                position: relative;
                margin: 0;
                padding: 0;
            }

            .tabs-measure {
                position: absolute;
                top: 0;
                left: 0;
                overflow: visible;
                /**
                 * visibility:hidden keeps the mirror's links out of the tab order, but a selected
                 * tab's label re-sets visibility:visible on itself (see ViraBoldText), which would
                 * override the inherited hidden state and paint the label. opacity:0 cannot be
                 * overridden by a descendant, so it keeps the mirror invisible while still allowing
                 * width measurement.
                 */
                visibility: hidden;
                opacity: 0;
                pointer-events: none;
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

            .tab-item {
                ${noNativeFormStyles};
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                position: relative;
                color: ${cssVars['vira-tabs-inactive-color'].value};
                font-size: ${viraFormCssVars['vira-form-small-text-size'].value};
                font-weight: ${viraFontCssVars['vira-font-weight-medium'].value};
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

                & .tab-item::after {
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: ${cssVars['vira-tabs-bar-thickness'].value};
                    border-radius: 0;
                }
            }

            ${hostClasses['vira-tabs-bar-top'].selector} {
                border-top: 1px solid
                    ${viraTheme.colors['vira-grey-foreground-decoration'].foreground.value};

                & .tab-item::after {
                    top: 0;
                    left: 0;
                    right: 0;
                    height: ${cssVars['vira-tabs-bar-thickness'].value};
                    border-radius: 0;
                }
            }

            ${hostClasses['vira-tabs-bar-left'].selector} {
                border-left: 1px solid
                    ${viraTheme.colors['vira-grey-foreground-decoration'].foreground.value};

                & .tab-item::after {
                    top: 0;
                    bottom: 0;
                    left: 0;
                    width: ${cssVars['vira-tabs-bar-thickness'].value};
                    border-radius: 0;
                }
            }

            ${hostClasses['vira-tabs-bar-right'].selector} {
                border-right: 1px solid
                    ${viraTheme.colors['vira-grey-foreground-decoration'].foreground.value};

                & .tab-item::after {
                    top: 0;
                    bottom: 0;
                    right: 0;
                    width: ${cssVars['vira-tabs-bar-thickness'].value};
                    border-radius: 0;
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

            ${hostClasses['vira-tabs-fill-width'].selector} {
                & .tabs-container {
                    flex-grow: 1;
                }

                & .tab-item {
                    flex-grow: 1;
                }

                & .tab-item ${ViraLink} {
                    flex-grow: 1;
                    justify-content: center;
                }
            }

            ${ViraLink} {
                text-decoration: none;
            }

            .tab-item ${ViraLink} {
                display: flex;
                padding: 8px 16px;
            }

            .tab-more {
                display: flex;
                flex-shrink: 0;
                align-items: center;

                & ${ViraButton} {
                    flex-shrink: 0;
                }
            }

            .tabs-container.grouped {
                align-items: flex-end;
            }

            .tab-cluster {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
            }

            .tab-cluster-tabs {
                display: flex;
                flex-direction: row;
            }

            .tab-group-label {
                font-size: 11px;
                font-weight: ${viraFontCssVars['vira-font-weight-medium'].value};
                padding: 8px 16px 4px;
                color: ${viraTheme.colors['vira-grey-foreground-header'].foreground.value};
            }

            .tab-cluster-divider {
                flex-shrink: 0;
                align-self: stretch;
                width: 1px;
                margin: 8px 0;
                background-color: ${viraTheme.colors['vira-grey-foreground-decoration'].foreground
                    .value};
            }
        `;
    },
    cleanup({state}) {
        state.cleanupObserver?.();
    },
    render({inputs, state, updateState, host, dispatch, events}) {
        function renderTabInner(tab: Readonly<ViraTab>, forMeasurement: boolean) {
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

            return {
                isSelected,
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
                        attributePassthrough: forMeasurement
                            ? undefined
                            : {
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
                `,
            };
        }

        function handleTabClick(tab: Readonly<ViraTab>) {
            if (!tab.isDisabled) {
                dispatch(new events.tabSelect(tab));
            }
        }

        function renderTabItem(tab: Readonly<ViraTab>) {
            const {isSelected, content} = renderTabInner(tab, false);
            return html`
                <div
                    class=${classMap({
                        'tab-item': true,
                        selected: isSelected,
                        disabled: !!tab.isDisabled,
                    })}
                    role="presentation"
                    ${listen('click', () => handleTabClick(tab))}
                >
                    ${content}
                </div>
            `;
        }

        function renderMeasureTabItem(tab: Readonly<ViraTab>) {
            const {isSelected, content} = renderTabInner(tab, true);
            return html`
                <div
                    class=${classMap({
                        'tab-item': true,
                        'measure-selected': isSelected,
                    })}
                >
                    ${content}
                </div>
            `;
        }

        function buildMenuItems(tabList: ReadonlyArray<Readonly<ViraTab>>) {
            return renderMenuItemEntries(
                filterMap(
                    tabList,
                    (tab): ViraMenuItemEntry | undefined => {
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
                                handleTabClick(tab);
                            },
                        };
                    },
                    check.isTruthy,
                ),
            );
        }

        function measureOverflow(mirrorElement: Element) {
            const availableWidth = host.clientWidth;
            if (!availableWidth) {
                return;
            }

            /**
             * Vertical (left/right) tab bars stack their tabs in a column, so horizontal
             * width-based overflow does not apply: keep every tab inline.
             */
            const isVertical = globalThis
                .getComputedStyle(mirrorElement)
                .flexDirection.startsWith('column');
            if (isVertical) {
                if (state.overflowCount !== 0) {
                    updateState({
                        overflowCount: 0,
                    });
                }
                return;
            }

            const tabElements = Array.from(mirrorElement.querySelectorAll('.tab-item'));
            const tabCount = tabElements.length;
            if (!tabCount) {
                return;
            }

            const tabWidths = tabElements.map((element) => element.getBoundingClientRect().width);

            /**
             * In grouped mode a partially-shown cluster still renders its group label and its
             * leading divider, so its inline width is `max(labelWidth, shownTabsWidth)` rather than
             * a bare sum of tab widths. Capture each tab's cluster geometry (in tab order) so the
             * inline width for any leading count can be derived from what is actually rendered.
             */
            const clusterElements = Array.from(mirrorElement.querySelectorAll('.tab-cluster'));
            const containerLeft = mirrorElement.getBoundingClientRect().left;
            const tabClusterInfo = clusterElements.flatMap((clusterElement) => {
                const clusterLeft = clusterElement.getBoundingClientRect().left - containerLeft;
                const labelElement = clusterElement.querySelector('.tab-group-label');
                const clusterLabelWidth = labelElement
                    ? labelElement.getBoundingClientRect().width
                    : 0;
                return Array.from(clusterElement.querySelectorAll('.tab-item')).map(
                    (tabElement, indexInCluster) => {
                        return {
                            clusterLeft,
                            clusterLabelWidth,
                            indexInCluster,
                            width: tabElement.getBoundingClientRect().width,
                        };
                    },
                );
            });

            /** Width of the inline area when the first `count` tabs are shown. */
            function inlineWidthForCount(count: number) {
                if (count <= 0) {
                    return 0;
                } else if (!clusterElements.length) {
                    return tabWidths.slice(0, count).reduce((sum, width) => sum + width, 0);
                }

                const lastInfo = tabClusterInfo[count - 1];
                if (!lastInfo) {
                    return 0;
                }
                const inlineTabsInLastCluster = tabClusterInfo
                    .slice(count - 1 - lastInfo.indexInCluster, count)
                    .reduce((sum, info) => sum + info.width, 0);
                return (
                    lastInfo.clusterLeft +
                    Math.max(lastInfo.clusterLabelWidth, inlineTabsInLastCluster)
                );
            }

            const totalWidth = inlineWidthForCount(tabCount);

            /**
             * Largest number of leading tabs whose inline width fits within the available width
             * minus the given reserve (the width the "more" button will occupy). Can return 0.
             */
            function maxInlineForReserve(reservePx: number) {
                const limit = availableWidth - reservePx;
                return tabElements.reduce((fittingCount, _tabElement, index) => {
                    return inlineWidthForCount(index + 1) <= limit ? index + 1 : fittingCount;
                }, 0);
            }

            /** When every tab fits on its own, there is no overflow and no "more" button. */
            if (totalWidth <= availableWidth) {
                if (state.overflowCount !== 0) {
                    updateState({
                        overflowCount: 0,
                    });
                }
                return;
            }

            const defaultButtonWidth = measureElementWidth(mirrorElement, '.measure-more-default');
            const labeledButtonWidth = measureElementWidth(mirrorElement, '.measure-more-labeled');

            const selectedElement = mirrorElement.querySelector('.tab-item.measure-selected');
            const selectedIndex = selectedElement ? tabElements.indexOf(selectedElement) : -1;

            /**
             * Reserving the default ("more") trigger reveals whether the selected tab would end up
             * collapsed.
             */
            const defaultInlineCount = maxInlineForReserve(defaultButtonWidth);
            const selectedIsCollapsed = selectedIndex >= 0 && selectedIndex >= defaultInlineCount;

            /**
             * When the selected tab is collapsed, the trigger always shows that tab's own label
             * (with a checkmark), reserving its width even when it cannot fully fit (it is allowed
             * to overflow rather than hide which tab is selected). Otherwise the trigger shows the
             * plain default overflow label.
             */
            const inlineCount = selectedIsCollapsed
                ? maxInlineForReserve(labeledButtonWidth)
                : defaultInlineCount;

            const newOverflowCount = Math.max(1, tabCount - inlineCount);

            if (newOverflowCount !== state.overflowCount) {
                updateState({
                    overflowCount: newOverflowCount,
                });
            }
        }

        function setUpOverflowMeasurement(mirrorElement: Element) {
            state.cleanupObserver?.();

            let frameId: number | undefined = undefined;
            function scheduleMeasure() {
                if (frameId != undefined) {
                    return;
                }
                frameId = requestAnimationFrame(() => {
                    frameId = undefined;
                    measureOverflow(mirrorElement);
                });
            }

            const resizeObserver = new ResizeObserver(scheduleMeasure);
            resizeObserver.observe(host);
            /**
             * Observing the (out-of-flow) measurement mirror catches late layout of its async
             * `ViraButton` children, whose real widths drive the overflow math.
             */
            resizeObserver.observe(mirrorElement);
            const mutationObserver = new MutationObserver(scheduleMeasure);
            mutationObserver.observe(mirrorElement, {
                childList: true,
                subtree: true,
                characterData: true,
            });
            scheduleMeasure();

            updateState({
                cleanupObserver() {
                    if (frameId != undefined) {
                        cancelAnimationFrame(frameId);
                    }
                    resizeObserver.disconnect();
                    mutationObserver.disconnect();
                },
            });
        }

        const visibleTabs = inputs.tabs.filter((tab) => !tab.isHidden);
        const hasGroups = visibleTabs.some((tab) => tab.group != undefined);

        const overflowCount = Math.min(visibleTabs.length, Math.max(0, state.overflowCount));
        const inlineCount = visibleTabs.length - overflowCount;
        const inlineTabs = visibleTabs.slice(0, inlineCount);
        const overflowTabs = visibleTabs.slice(inlineCount);

        const selectedIndex = visibleTabs.findIndex((tab) => {
            return routeHasPaths(inputs.currentRoute, tab.paths, {
                exactMatch: tab.exactMatch,
            });
        });
        const selectedTab = selectedIndex >= 0 ? visibleTabs[selectedIndex] : undefined;
        /** Whether the selected tab is currently collapsed into the overflow menu. */
        const selectedIsCollapsed = selectedIndex >= 0 && selectedIndex >= inlineCount;

        const inlineContent = hasGroups
            ? renderGroupedContent(inlineTabs, renderTabItem)
            : inlineTabs.map(renderTabItem);
        const measureContent = hasGroups
            ? renderGroupedContent(visibleTabs, renderMeasureTabItem)
            : visibleTabs.map(renderMeasureTabItem);

        const overflowLabel = inputs.overflowLabel || 'More';

        /**
         * Hidden copies of the "more" button in each of its possible shapes, rendered inside the
         * measurement mirror so their true widths can be measured before choosing which one fits:
         * the default overflow label, and the collapsed selected tab's own label (with a
         * checkmark).
         */
        const measureMoreButtons = html`
            <${ViraButton.assign({
                text: overflowLabel,
                showMenuCaret: true,
                color: ViraColorVariant.Neutral,
            })}
                class="measure-more-default"
            ></${ViraButton}>
            ${selectedTab
                ? html`
                      <${ViraButton.assign({
                          text: selectedTab.label,
                          icon: Check24Icon,
                          showMenuCaret: true,
                          color: ViraColorVariant.Neutral,
                      })}
                          class="measure-more-labeled"
                      ></${ViraButton}>
                  `
                : nothing}
        `;

        const overflowMenuTemplate = overflowTabs.length
            ? html`
                  <div class="tab-more">
                      <${ViraMenuTrigger.assign({
                          horizontalAnchor: inputs.menuHorizontalAnchor,
                          isDisabled: inputs.menuIsDisabled,
                          popUpOffset: inputs.menuPopUpOffset,
                          menuCornerStyle: ViraMenuCornerStyle.AllRounded,
                      })}>
                          <${ViraButton.assign({
                              text: selectedIsCollapsed ? selectedTab?.label : overflowLabel,
                              icon: selectedIsCollapsed ? Check24Icon : undefined,
                              showMenuCaret: true,
                              color: ViraColorVariant.Neutral,
                          })}
                              slot=${ViraMenuTrigger.slotNames['vira-menu-trigger-trigger']}
                          ></${ViraButton}>
                          ${buildMenuItems(overflowTabs)}
                      </${ViraMenuTrigger}>
                  </div>
              `
            : nothing;

        return html`
            <div
                class=${classMap({
                    'tabs-container': true,
                    'tabs-measure': true,
                    grouped: hasGroups,
                })}
                aria-hidden="true"
                ${onDomCreated(setUpOverflowMeasurement)}
            >
                ${measureContent} ${measureMoreButtons}
            </div>
            <div
                class=${classMap({
                    'tabs-container': true,
                    grouped: hasGroups,
                })}
                role="tablist"
            >
                ${inlineContent} ${overflowMenuTemplate}
            </div>
        `;
    },
});
