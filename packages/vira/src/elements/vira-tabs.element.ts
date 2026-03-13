import {check} from '@augment-vir/assert';
import {filterMap, type PartialWithUndefined} from '@augment-vir/common';
import {classMap, css, html, nothing} from 'element-vir';
import {
    routeHasPaths,
    type FullSpaRoute,
    type GenericTreePaths,
    type SpaRouter,
} from 'spa-router-vir';
import {type ViraIconSvg} from '../icons/icon-svg.js';
import {createFocusStyles} from '../styles/focus.js';
import {viraFormCssVars} from '../styles/form-styles.js';
import {ViraColorVariant} from '../styles/form-variants.js';
import {noNativeFormStyles, noUserSelect, viraDisabledStyles, viraTheme} from '../styles/index.js';
import {defineViraElement} from '../util/define-vira-element.js';
import {renderMenuItemEntries, type ViraMenuItemEntry} from '../util/pop-up-helpers.js';
import {ViraMenuTrigger} from './pop-up/vira-menu-trigger.element.js';
import {ViraMenuCornerStyle} from './pop-up/vira-menu.element.js';
import {type HorizontalAnchor, type PopUpOffset} from './pop-up/vira-pop-up-trigger.element.js';
import {ViraButton} from './vira-button.element.js';
import {ViraIcon} from './vira-icon.element.js';
import {ViraLink} from './vira-link.element.js';
import {ViraOverflowSwitch} from './vira-overflow-switch.element.js';

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
         * Color variant for the tab selection indicator and active tab text.
         *
         * @default ViraColorVariant.Accent
         */
        colorVariant: ViraColorVariant.Accent | ViraColorVariant.Plain;
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
    }>
>()({
    tagName: 'vira-tabs',
    hostClasses: {
        'vira-tabs-bar-top': ({inputs}) => inputs.barDirection === ViraTabsBarDirection.Top,
        'vira-tabs-bar-bottom': ({inputs}) =>
            !inputs.barDirection || inputs.barDirection === ViraTabsBarDirection.Bottom,
        'vira-tabs-bar-left': ({inputs}) => inputs.barDirection === ViraTabsBarDirection.Left,
        'vira-tabs-bar-right': ({inputs}) => inputs.barDirection === ViraTabsBarDirection.Right,
        'vira-tabs-color-accent': ({inputs}) =>
            !inputs.colorVariant || inputs.colorVariant === ViraColorVariant.Accent,
        'vira-tabs-color-plain': ({inputs}) => inputs.colorVariant === ViraColorVariant.Plain,
        'vira-tabs-icon-layout-vertical': ({inputs}) =>
            !inputs.iconLayout || inputs.iconLayout === ViraTabsIconLayout.Vertical,
        'vira-tabs-icon-layout-horizontal': ({inputs}) =>
            inputs.iconLayout === ViraTabsIconLayout.Horizontal,
    },
    cssVars: {
        'vira-tabs-active-color': viraFormCssVars['vira-form-accent-primary-color'].value,
        'vira-tabs-active-hover-color':
            viraFormCssVars['vira-form-accent-primary-hover-color'].value,
        'vira-tabs-inactive-color':
            viraTheme.colors['vira-grey-foreground-header'].foreground.value,
        'vira-tabs-inactive-hover-color':
            viraTheme.colors['vira-grey-foreground-non-body'].foreground.value,
        'vira-tabs-bar-thickness': '3px',
    },

    styles: ({hostClasses, cssVars}) => {
        return css`
            :host {
                display: flex;
                box-sizing: border-box;
                ${noUserSelect};
                width: 100%;
                height: 100%;
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
                & .tabs-container {
                    border-bottom: 1px solid
                        ${viraTheme.colors['vira-grey-foreground-decoration'].foreground.value};
                }

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
                & .tabs-container {
                    border-top: 1px solid
                        ${viraTheme.colors['vira-grey-foreground-decoration'].foreground.value};
                }

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
                & .tabs-container {
                    border-left: 1px solid
                        ${viraTheme.colors['vira-grey-foreground-decoration'].foreground.value};
                }

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
                & .tabs-container {
                    border-right: 1px solid
                        ${viraTheme.colors['vira-grey-foreground-decoration'].foreground.value};
                }

                & li::after {
                    top: 0;
                    bottom: 0;
                    right: 0;
                    width: ${cssVars['vira-tabs-bar-thickness'].value};
                    border-radius: ${cssVars['vira-tabs-bar-thickness'].value} 0 0
                        ${cssVars['vira-tabs-bar-thickness'].value};
                }
            }

            ${hostClasses['vira-tabs-color-plain'].selector} {
                ${cssVars['vira-tabs-active-color'].name}: ${viraTheme.colors[
                    'vira-grey-foreground-small-body'
                ].foreground.value};
                ${cssVars['vira-tabs-active-hover-color'].name}: ${viraTheme.colors[
                    'vira-grey-foreground-body'
                ].foreground.value};
            }

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

            ${ViraOverflowSwitch} {
                max-width: 100%;
            }

            ${ViraLink} {
                text-decoration: none;
            }

            .tabs-container ${ViraLink} {
                display: flex;
                padding: 8px 16px;
            }
        `;
    },
    render({inputs}) {
        const tabs = filterMap(
            inputs.tabs,
            (tab) => {
                if (tab.isHidden) {
                    return undefined;
                }

                const isSelected = routeHasPaths(inputs.currentRoute, tab.paths);

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
                                <span class="tab-label">${tab.label}</span>
                            </span>
                        </${ViraLink}>
                    </li>
                `;
            },
            check.isTruthy,
        );
        const selectedTab = inputs.tabs.find((tab) =>
            routeHasPaths(inputs.currentRoute, tab.paths),
        );

        const menuItems = renderMenuItemEntries(
            filterMap(
                inputs.tabs,
                (tab): ViraMenuItemEntry | undefined => {
                    if (tab.isHidden) {
                        return undefined;
                    }

                    const isSelected = routeHasPaths(inputs.currentRoute, tab.paths);

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
                            })}>
                                ${tab.label}
                            </${ViraLink}>
                        `,
                        selected: isSelected,
                        disabled: tab.isDisabled,
                    };
                },
                check.isTruthy,
            ),
        );

        return html`
            <${ViraOverflowSwitch.assign({
                automaticallySwitch: true,
            })}>
                <ul
                    class="tabs-container"
                    role="tablist"
                    slot=${ViraOverflowSwitch.slotNames.large}
                >
                    ${tabs}
                </ul>
                <${ViraMenuTrigger.assign({
                    horizontalAnchor: inputs.menuHorizontalAnchor,
                    isDisabled: inputs.menuIsDisabled,
                    popUpOffset: inputs.menuPopUpOffset,
                    menuCornerStyle: ViraMenuCornerStyle.AllRounded,
                })}
                    slot=${ViraOverflowSwitch.slotNames.small}
                >
                    <${ViraButton.assign({
                        text: selectedTab?.label || '',
                        showMenuCaret: true,
                        colorVariant: ViraColorVariant.Neutral,
                    })}
                        slot=${ViraMenuTrigger.slotNames.trigger}
                    ></${ViraButton}>
                    ${menuItems}
                </${ViraMenuTrigger}>
            </${ViraOverflowSwitch}>
        `;
    },
});
