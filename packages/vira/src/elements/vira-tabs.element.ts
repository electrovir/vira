import {assertWrap, check} from '@augment-vir/assert';
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
    type HtmlInterpolation,
    type HTMLTemplateResult,
} from 'element-vir';
import {
    routeHasPaths,
    type FullSpaRoute,
    type GenericTreePaths,
    type SpaRouter,
} from 'spa-router-vir';
import {themeDefaultKey} from 'theme-vir/dist/color-theme/color-theme.js';
import {boldText} from '../directives/bold-text.directive.js';
import {type ViraIconSvg} from '../icons/icon-svg.js';
import {internalLucideIcons} from '../icons/internal-lucide-icons.js';
import {createFocusStyles} from '../styles/focus.js';
import {viraFontCssVars} from '../styles/font.js';
import {viraFormCssVars} from '../styles/form-styles.js';
import {
    standaloneThemeColorNames,
    ViraColorVariant,
    viraColorVariantToHostClassKey,
} from '../styles/form-variants.js';
import {noNativeFormStyles, noUserSelect, viraTheme} from '../styles/index.js';
import {viraThemeByKeys, ViraThemeColorName} from '../styles/vira-color-theme-object.js';
import {defineViraElement} from '../util/define-vira-element.js';
import {
    menuGroupLabelStyles,
    renderMenuItemEntries,
    type ViraMenuItemEntry,
} from '../util/menu-helpers.js';
import {PopoverTrigger} from '../util/popover-manager.js';
import {ViraMenuTrigger} from './popover/vira-menu-trigger.element.js';
import {ViraMenuCornerStyle} from './popover/vira-menu.element.js';
import {PopoverAnchor, type PopoverOffset} from './popover/vira-popover-trigger.element.js';
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
 * What {@link ViraTabs} does with tabs that don't fit along its bar.
 *
 * @category Internal
 */
export enum ViraTabsOverflowBehavior {
    /** Collapses the tabs that don't fit into a "more" dropdown menu at the end of the bar. */
    Dropdown = 'dropdown',
    /** Wraps tabs onto more rows (or more columns, for a vertical bar). */
    Wrap = 'wrap',
    /** Scrolls the bar along its length, without showing a scrollbar. */
    Scroll = 'scroll',
}

function isRotatingLabels(
    inputs: Readonly<{
        barDirection?: ViraTabsBarDirection | undefined;
        shouldRotateLabels?: boolean | undefined;
    }>,
) {
    return (
        !!inputs.shouldRotateLabels &&
        (inputs.barDirection === ViraTabsBarDirection.Left ||
            inputs.barDirection === ViraTabsBarDirection.Right)
    );
}

/**
 * A single tab entry for {@link ViraTabs}.
 *
 * @category Internal
 */
export type ViraTab = {
    /**
     * Any template, not just text. It renders inline, in the overflow menu, and on the overflow
     * trigger when the selected tab is collapsed, so it must render the same in all three.
     */
    label: HtmlInterpolation;
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
     * Opens a menu of these entries when the tab is right clicked or touch held. Tabs collapsed
     * into the {@link ViraTabsOverflowBehavior.Dropdown} menu don't get one.
     */
    contextMenuEntries: ReadonlyArray<Readonly<ViraMenuItemEntry>>;
    /**
     * Optional cluster label. Consecutive tabs sharing the same `group` string render together
     * under that label, separated from other clusters by an inset divider (on a vertical bar
     * without `shouldRotateLabels`, a line under the label instead). Tabs with no `group` render
     * standalone (no label, no divider). Grouping only affects rendering when at least one tab has
     * a `group`.
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
        const nextCluster = clusters[clusterIndex + 1];
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
                      <span
                          class=${classMap({
                              'tab-group-label': true,
                              truncated: nextCluster?.group != undefined,
                          })}
                      >
                          ${cluster.group}
                      </span>
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
        /** Whether the dropdown trigger is disabled. Only used when tabs overflow into a dropdown. */
        menuIsDisabled: boolean;
        /** Offset for the dropdown popover. Only used when tabs overflow into a dropdown. */
        menuPopoverOffset: Readonly<PopoverOffset>;
        /** Offset for each tab's context menu, from the pointer that opened it. */
        contextMenuPopoverOffset: Readonly<PopoverOffset>;
        /** @default ViraTabsOverflowBehavior.Dropdown */
        overflowBehavior: ViraTabsOverflowBehavior;
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
        /**
         * Turns each tab's content sideways, with the bottoms of the letters facing the selection
         * bar, so a vertical bar is only as wide as one line of text. Tabs stay in order from top
         * to bottom. Only applies when `barDirection` is `Left` or `Right`.
         */
        shouldRotateLabels: boolean;
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
        'vira-tabs-bar-top'({inputs}) {
            return inputs.barDirection === ViraTabsBarDirection.Top;
        },
        'vira-tabs-bar-bottom'({inputs}) {
            return !inputs.barDirection || inputs.barDirection === ViraTabsBarDirection.Bottom;
        },
        'vira-tabs-bar-left'({inputs}) {
            return inputs.barDirection === ViraTabsBarDirection.Left;
        },
        'vira-tabs-bar-right'({inputs}) {
            return inputs.barDirection === ViraTabsBarDirection.Right;
        },
        ...arrayToObject(
            getObjectTypedKeys(viraColorVariantToHostClassKey),
            (colorVariant) => {
                const colorKey = viraColorVariantToHostClassKey[colorVariant];
                return {
                    key: `vira-tabs-color-${colorKey}` as const,
                    value({
                        inputs,
                    }: {
                        inputs: Readonly<
                            PartialWithUndefined<{color: ViraColorVariant | ViraThemeColorName}>
                        >;
                    }) {
                        return inputs.color === colorVariant || inputs.color === colorKey;
                    },
                };
            },
            {
                useRequired: true,
            },
        ),
        'vira-tabs-color-plain'({
            inputs,
        }: {
            inputs: Readonly<PartialWithUndefined<{color: ViraColorVariant | ViraThemeColorName}>>;
        }) {
            return !inputs.color || inputs.color === ViraColorVariant.Plain;
        },
        'vira-tabs-color-neutral'({
            inputs,
        }: {
            inputs: Readonly<PartialWithUndefined<{color: ViraColorVariant | ViraThemeColorName}>>;
        }) {
            return inputs.color === ViraColorVariant.Neutral;
        },
        'vira-tabs-color-muted'({
            inputs,
        }: {
            inputs: Readonly<PartialWithUndefined<{color: ViraColorVariant | ViraThemeColorName}>>;
        }) {
            return inputs.color === ViraColorVariant.Muted;
        },
        ...arrayToObject(
            standaloneThemeColorNames,
            (colorName) => {
                return {
                    key: `vira-tabs-color-${colorName}` as const,
                    value({
                        inputs,
                    }: {
                        inputs: Readonly<
                            PartialWithUndefined<{color: ViraColorVariant | ViraThemeColorName}>
                        >;
                    }) {
                        return inputs.color === colorName;
                    },
                };
            },
            {
                useRequired: true,
            },
        ),
        'vira-tabs-icon-layout-vertical'({inputs}) {
            return !inputs.iconLayout || inputs.iconLayout === ViraTabsIconLayout.Vertical;
        },
        'vira-tabs-icon-layout-horizontal'({inputs}) {
            return inputs.iconLayout === ViraTabsIconLayout.Horizontal;
        },
        'vira-tabs-fill-width'({inputs}) {
            return !!inputs.shouldFillWidth;
        },
        'vira-tabs-rotate-labels'({inputs}) {
            return isRotatingLabels(inputs);
        },
        'vira-tabs-overflow-wrap'({inputs}) {
            return inputs.overflowBehavior === ViraTabsOverflowBehavior.Wrap;
        },
        'vira-tabs-overflow-scroll'({inputs}) {
            return inputs.overflowBehavior === ViraTabsOverflowBehavior.Scroll;
        },
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
        /** Space on each side of a tab's label, across its text. Applies along the bar's length. */
        'vira-tabs-tab-padding-block': '6px',
        /** Space before and after a tab's label, along its text, including when labels are rotated. */
        'vira-tabs-tab-padding-inline': '12px',
        'vira-tabs-font-size': viraFormCssVars['vira-form-small-text-size'].value,
    },

    styles({hostClasses, cssVars}) {
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
            const mutedStyle = buildVariantCssRule(
                hostClasses['vira-tabs-color-muted'].selector,
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
                    mutedStyle,
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
                font-size: ${cssVars['vira-tabs-font-size'].value};
                font-weight: ${viraFontCssVars['vira-font-weight-medium'].value};

                & ${ViraButton} {
                    font: inherit;
                }
            }

            ${hostClasses['vira-tabs-overflow-wrap'].selector},
            ${hostClasses['vira-tabs-overflow-scroll'].selector} {
                & .tabs-container {
                    min-width: 0;
                    min-height: 0;
                }
            }

            ${hostClasses['vira-tabs-overflow-wrap'].selector} {
                & .tabs-container,
                & .tab-cluster-tabs {
                    flex-wrap: wrap;
                }
            }

            ${hostClasses['vira-tabs-overflow-scroll'].selector} {
                & .tabs-container {
                    overflow: auto;
                    scrollbar-width: none;

                    &::-webkit-scrollbar {
                        display: none;
                    }
                }

                & .tab-item,
                & .tab-cluster,
                & .tab-cluster-divider {
                    flex-shrink: 0;
                }
            }

            .tabs-measure {
                position: absolute;
                top: 0;
                left: 0;
                overflow: visible;
                /**
                 * visibility:hidden keeps the mirror's links out of the tab order, but a label
                 * template that sets visibility:visible on itself would override the inherited
                 * hidden state and paint the label. opacity:0 cannot be overridden by a
                 * descendant, so it keeps the mirror invisible while still allowing width
                 * measurement.
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

                    /** Lets the selected tab still open its context menu. */
                    &.has-context-menu {
                        pointer-events: auto;
                        cursor: default;
                        background-color: transparent;
                    }

                    & ${ViraLink} {
                        pointer-events: none;
                    }
                }

                &.disabled {
                    pointer-events: none;
                    cursor: not-allowed;
                    color: ${viraTheme.colors['vira-disabled'].foreground.value};
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

                /** Keeps the tabs against the selection bar, with group labels on the far side. */
                & .tabs-container.grouped {
                    align-items: flex-start;
                }

                & .tab-cluster {
                    flex-direction: column-reverse;
                }

                & .tab-group-label {
                    padding-block: 4px 6px;
                }

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
                /** Keeps the tabs against the selection bar when they don't fill the width. */
                justify-content: flex-end;
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

            .tab-item ${ViraMenuTrigger} {
                flex-grow: 1;
            }

            .context-menu-trigger {
                display: flex;
                justify-content: center;
            }

            .tab-item ${ViraLink} {
                display: flex;
                padding: ${cssVars['vira-tabs-tab-padding-block'].value}
                    ${cssVars['vira-tabs-tab-padding-inline'].value};
            }

            .menu-group-label {
                ${menuGroupLabelStyles};
            }

            .more-button-content {
                display: flex;
                align-items: center;
                gap: 8px;
            }

            ${hostClasses['vira-tabs-rotate-labels'].selector} {
                & .tab-item ${ViraLink} {
                    padding: ${cssVars['vira-tabs-tab-padding-inline'].value}
                        ${cssVars['vira-tabs-tab-padding-block'].value};
                }

                & .tab-content {
                    flex-direction: row;
                    gap: 8px;
                }

                & .tab-content,
                & .tab-more ${ViraButton}, & .tabs-measure ${ViraButton} {
                    writing-mode: vertical-rl;
                }

                /** Writing mode leaves icons upright. This turns them to match the text. */
                & .tab-content ${ViraIcon}, & .more-button-content ${ViraIcon} {
                    transform: rotate(90deg);
                }
            }

            .tab-more {
                display: flex;
                flex-shrink: 0;
                align-items: center;

                & ${ViraButton} {
                    flex-shrink: 0;
                }
            }

            /**
             * WebKit sizes a rotated button to zero width when it sits directly in the menu
             * trigger's block wrapper. A flex parent gets its real width.
             */
            .more-button-wrapper {
                display: flex;
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
                box-sizing: border-box;
                width: 0;
                min-width: 100%;
                white-space: nowrap;
                font-size: 10px;
                font-weight: ${viraFontCssVars['vira-font-weight-medium'].value};
                padding-block: 6px 4px;
                padding-inline: 12px;
                color: ${viraTheme.colors['vira-grey-foreground-header'].foreground.value};

                &.truncated {
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }

            .tab-cluster-divider {
                flex-shrink: 0;
                align-self: stretch;
                width: 1px;
                margin: 8px 0;
                background-color: ${viraTheme.colors['vira-grey-foreground-decoration'].foreground
                    .value};
            }

            ${hostClasses['vira-tabs-bar-left'].selector},
            ${hostClasses['vira-tabs-bar-right'].selector} {
                & .tabs-container.grouped {
                    align-items: stretch;
                }

                & .tab-cluster-tabs {
                    flex-direction: column;
                }

                & .tab-cluster-divider {
                    width: auto;
                    height: 1px;
                    margin: 0 8px;
                }
            }

            :host(
                    .${hostClasses['vira-tabs-bar-left'].name}:not(.${hostClasses[
                            'vira-tabs-rotate-labels'
                        ].name})
                ),
            :host(
                    .${hostClasses['vira-tabs-bar-right'].name}:not(.${hostClasses[
                            'vira-tabs-rotate-labels'
                        ].name})
                ) {
                & .tab-cluster-divider {
                    display: none;
                }

                & .tab-group-label {
                    position: relative;

                    &::after {
                        content: '';
                        position: absolute;
                        left: 8px;
                        right: 8px;
                        bottom: 0;
                        height: 1px;
                        background-color: ${viraTheme.colors['vira-grey-foreground-decoration']
                            .foreground.value};
                    }
                }
            }

            :host(
                    .${hostClasses['vira-tabs-bar-left'].name}:not(.${hostClasses[
                            'vira-tabs-rotate-labels'
                        ].name})
                ) {
                /** Lines each tab's label up against the selection bar. */
                & .tab-item,
                & .tab-item ${ViraLink}, & .context-menu-trigger {
                    justify-content: flex-start;
                }

                & .tab-item,
                & .tab-group-label {
                    text-align: left;
                }
            }

            :host(
                    .${hostClasses['vira-tabs-bar-right'].name}:not(.${hostClasses[
                            'vira-tabs-rotate-labels'
                        ].name})
                ) {
                /** Lines each tab's label up against the selection bar. */
                & .tab-item,
                & .tab-item ${ViraLink}, & .context-menu-trigger {
                    justify-content: flex-end;
                }

                & .tab-item,
                & .tab-group-label {
                    text-align: right;
                }
            }

            ${hostClasses['vira-tabs-rotate-labels'].selector} {
                /** Lines the overflow trigger up with the tabs rather than the group labels. */
                & .tabs-container.grouped {
                    align-items: flex-start;
                }

                /** The group label sits beside its tabs, on the side the tops of the letters face. */
                & .tab-cluster {
                    flex-direction: row-reverse;
                }

                & .tab-group-label {
                    writing-mode: vertical-rl;
                    width: auto;
                    min-width: 0;
                    /**
                     * Keeps the label from lengthening its cluster: it stretches to the length of
                     * the cluster's tabs instead, and truncates past that.
                     */
                    contain: inline-size;
                }
            }

            :host(
                    .${hostClasses['vira-tabs-rotate-labels'].name}.${hostClasses[
                            'vira-tabs-bar-right'
                        ].name}
                ) {
                /** Keeps the bottoms of the letters facing the selection bar. */
                & .tab-content,
                & .tab-more ${ViraButton}, & .tabs-measure ${ViraButton}, & .tab-group-label {
                    transform: rotate(180deg);
                }

                & .tabs-container.grouped {
                    align-items: flex-end;
                }

                & .tab-cluster {
                    flex-direction: row;
                }
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
                            <span class="tab-label">
                                ${boldText({
                                    content: tab.label,
                                    isBold: isSelected,
                                })}
                            </span>
                        </span>
                    </${ViraLink}>
                `,
            };
        }

        function handleTabClick(tab: Readonly<ViraTab>) {
            if (!tab.isDisabled) {
                dispatch(
                    new events.tabSelect({
                        detail: tab,
                    }),
                );
            }
        }

        function renderTabItem(tab: Readonly<ViraTab>) {
            const {isSelected, content} = renderTabInner(tab, false);
            const hasContextMenu = !!tab.contextMenuEntries?.length && !tab.isDisabled;
            return html`
                <div
                    class=${classMap({
                        'tab-item': true,
                        selected: isSelected,
                        disabled: !!tab.isDisabled,
                        'has-context-menu': hasContextMenu,
                    })}
                    role="presentation"
                    ${listen('click', (event) => {
                        /** Clicks on the context menu's items bubble up through the tab. */
                        const isFromContextMenu =
                            hasContextMenu &&
                            !event.composedPath().some((node) => {
                                return (
                                    node instanceof HTMLElement &&
                                    node.classList.contains('context-menu-trigger')
                                );
                            });
                        if (!isSelected && !isFromContextMenu) {
                            handleTabClick(tab);
                        }
                    })}
                >
                    ${hasContextMenu
                        ? html`
                              <${ViraMenuTrigger.assign({
                                  trigger: PopoverTrigger.ContextMenu,
                                  popoverAnchor: PopoverAnchor.Mouse,
                                  popoverOffset: inputs.contextMenuPopoverOffset,
                                  useInsideFocus: true,
                              })}>
                                  <span
                                      class="context-menu-trigger"
                                      slot=${ViraMenuTrigger.slotNames['vira-menu-trigger-trigger']}
                                  >
                                      ${content}
                                  </span>
                                  ${renderMenuItemEntries(tab.contextMenuEntries)}
                              </${ViraMenuTrigger}>
                          `
                        : content}
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
            /** Vertical (left/right) tab bars stack their tabs in a column, so they fill height. */
            const isVertical = globalThis
                .getComputedStyle(mirrorElement)
                .flexDirection.startsWith('column');

            /** Size along the bar: height in a vertical bar, width in a horizontal one. */
            function measureLength(element: Element | null) {
                const rect = element?.getBoundingClientRect();
                return rect ? (isVertical ? rect.height : rect.width) : 0;
            }

            function measureStart(element: Element) {
                const rect = element.getBoundingClientRect();
                return isVertical ? rect.top : rect.left;
            }

            const availableLength = isVertical ? host.clientHeight : host.clientWidth;
            if (!availableLength) {
                return;
            }

            const tabElements = Array.from(mirrorElement.querySelectorAll('.tab-item'));
            const tabCount = tabElements.length;
            if (!tabCount) {
                return;
            }

            const tabLengths = tabElements.map(measureLength);

            /**
             * In grouped mode a partially-shown cluster still renders its leading divider, so its
             * inline length is not a bare sum of tab lengths. Capture each tab's cluster geometry
             * (in tab order) so the inline length for any leading count can be derived from what is
             * actually rendered.
             */
            const clusterElements = Array.from(mirrorElement.querySelectorAll('.tab-cluster'));
            const containerStart = measureStart(mirrorElement);
            const tabClusterInfo = clusterElements.flatMap((clusterElement) => {
                /**
                 * Measured from the cluster's tabs rather than the cluster, since a vertical bar
                 * stacks the group label before the tabs along the bar.
                 */
                const clusterStart =
                    measureStart(
                        assertWrap.isDefined(clusterElement.querySelector('.tab-cluster-tabs')),
                    ) - containerStart;
                return Array.from(clusterElement.querySelectorAll('.tab-item')).map(
                    (tabElement, indexInCluster) => {
                        return {
                            clusterStart,
                            indexInCluster,
                            length: measureLength(tabElement),
                        };
                    },
                );
            });

            /** Length of the inline area when the first `count` tabs are shown. */
            function inlineLengthForCount(count: number) {
                if (count <= 0) {
                    return 0;
                } else if (!clusterElements.length) {
                    return tabLengths.slice(0, count).reduce((sum, length) => sum + length, 0);
                }

                const lastInfo = tabClusterInfo[count - 1];
                if (!lastInfo) {
                    return 0;
                }
                const inlineTabsInLastCluster = tabClusterInfo
                    .slice(count - 1 - lastInfo.indexInCluster, count)
                    .reduce((sum, info) => sum + info.length, 0);
                return lastInfo.clusterStart + inlineTabsInLastCluster;
            }

            const totalLength = inlineLengthForCount(tabCount);

            /**
             * Largest number of leading tabs whose inline length fits within the available length
             * minus the given reserve (the length the "more" button will occupy). Can return 0.
             */
            function maxInlineForReserve(reservePx: number) {
                const limit = availableLength - reservePx;
                return tabElements.reduce((fittingCount, _tabElement, index) => {
                    return inlineLengthForCount(index + 1) <= limit ? index + 1 : fittingCount;
                }, 0);
            }

            /** When every tab fits on its own, there is no overflow and no "more" button. */
            if (totalLength <= availableLength) {
                if (state.overflowCount !== 0) {
                    updateState({
                        overflowCount: 0,
                    });
                }
                return;
            }

            const defaultButtonLength = measureLength(
                mirrorElement.querySelector('.measure-more-default'),
            );
            const labeledButtonLength = measureLength(
                mirrorElement.querySelector('.measure-more-labeled'),
            );

            const selectedElement = mirrorElement.querySelector('.tab-item.measure-selected');
            const selectedIndex = selectedElement ? tabElements.indexOf(selectedElement) : -1;

            /**
             * Reserving the default ("more") trigger reveals whether the selected tab would end up
             * collapsed.
             */
            const defaultInlineCount = maxInlineForReserve(defaultButtonLength);
            const selectedIsCollapsed = selectedIndex >= 0 && selectedIndex >= defaultInlineCount;

            /**
             * When the selected tab is collapsed, the trigger always shows that tab's own label
             * (with a checkmark), reserving its length even when it cannot fully fit (it is allowed
             * to overflow rather than hide which tab is selected). Otherwise the trigger shows the
             * plain default overflow label.
             */
            const inlineCount = selectedIsCollapsed
                ? maxInlineForReserve(labeledButtonLength)
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

        const isDropdownOverflow =
            !inputs.overflowBehavior ||
            inputs.overflowBehavior === ViraTabsOverflowBehavior.Dropdown;
        if (!isDropdownOverflow) {
            state.cleanupObserver?.();
        }

        const overflowCount = isDropdownOverflow
            ? Math.min(visibleTabs.length, Math.max(0, state.overflowCount))
            : 0;
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

        function renderMoreButton({
            isLabeled,
            className,
        }: Readonly<{
            /** Shows the selected tab's label with a checkmark instead of the overflow label. */
            isLabeled: boolean;
            className: string;
        }>) {
            const text = isLabeled ? selectedTab?.label : overflowLabel;
            const icon = isLabeled ? internalLucideIcons.Check16 : undefined;

            return html`
                <${ViraButton.assign({
                    color: ViraColorVariant.Neutral,
                })}
                    class=${className}
                >
                    <span class="more-button-content">
                        ${icon
                            ? html`
                                  <${ViraIcon.assign({
                                      icon,
                                  })}></${ViraIcon}>
                              `
                            : nothing}
                        <span>${text}</span>
                        <${ViraIcon.assign({
                            icon: internalLucideIcons.ChevronDown16,
                        })}></${ViraIcon}>
                    </span>
                </${ViraButton}>
            `;
        }

        /**
         * Hidden copies of the "more" button in each of its possible shapes, rendered inside the
         * measurement mirror so their true lengths along the bar can be measured before choosing
         * which one fits: the default overflow label, and the collapsed selected tab's own label
         * (with a checkmark and caret).
         */
        const measureMoreButtons = html`
            ${renderMoreButton({
                isLabeled: false,
                className: 'measure-more-default',
            })}
            ${selectedTab
                ? renderMoreButton({
                      isLabeled: true,
                      className: 'measure-more-labeled',
                  })
                : nothing}
        `;

        const overflowMenuTemplate = overflowTabs.length
            ? html`
                  <div class="tab-more">
                      <${ViraMenuTrigger.assign({
                          isDisabled: inputs.menuIsDisabled,
                          popoverOffset: inputs.menuPopoverOffset,
                          menuCornerStyle: ViraMenuCornerStyle.Round,
                      })}>
                          <span
                              class="more-button-wrapper"
                              slot=${ViraMenuTrigger.slotNames['vira-menu-trigger-trigger']}
                          >
                              ${renderMoreButton({
                                  isLabeled: selectedIsCollapsed,
                                  className: '',
                              })}
                          </span>
                          ${buildClusters(overflowTabs).map((cluster) => {
                              return html`
                                  ${cluster.group == undefined
                                      ? nothing
                                      : html`
                                            <div class="menu-group-label">${cluster.group}</div>
                                        `}
                                  ${buildMenuItems(cluster.tabs)}
                              `;
                          })}
                      </${ViraMenuTrigger}>
                  </div>
              `
            : nothing;

        return html`
            ${isDropdownOverflow
                ? html`
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
                  `
                : nothing}
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
