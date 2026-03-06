import {check} from '@augment-vir/assert';
import {type PartialWithUndefined} from '@augment-vir/common';
import {colorCss, ContrastLevelName} from '@electrovir/color';
import {css, type CSSResult, defineElementEvent, html, listen, unsafeCSS} from 'element-vir';
import {themeDefaultKey} from 'theme-vir/dist/color-theme/color-theme.js';
import {type Primitive, type RequireExactlyOne} from 'type-fest';
import {Check16Icon} from '../icons/icon-svgs/16/check-16.icon.js';
import {X16Icon} from '../icons/icon-svgs/16/x-16.icon.js';
import {viraFormCssVars} from '../styles/form-styles.js';
import {
    ViraColorVariant,
    viraColorVariantToColorName,
    ViraEmphasis,
    ViraSize,
    viraSizeHeights,
} from '../styles/form-variants.js';
import {noNativeFormStyles} from '../styles/native-styles.js';
import {noUserSelect} from '../styles/user-select.js';
import {viraThemeByKeys, type ViraThemeColorName} from '../styles/vira-color-theme-object.js';
import {viraTheme} from '../styles/vira-color-theme.js';
import {defineViraElement} from '../util/define-vira-element.js';
import {ViraIcon} from './vira-icon.element.js';

function generateThemeCss(colorVariant: ViraColorVariant): CSSResult | undefined {
    if (!check.hasKey(viraColorVariantToColorName, colorVariant)) {
        throw new Error(`No ViraTag color for variant '${colorVariant}'`);
    }

    const viraThemeColorKey: ViraThemeColorName = viraColorVariantToColorName[colorVariant];

    return css`
        :host(
                .vira-tag-color-${unsafeCSS(colorVariant)}.vira-tag-emphasis-${unsafeCSS(
                        ViraEmphasis.Standard,
                    )}
            )
            button {
            ${colorCss(
                viraThemeByKeys[viraThemeColorKey]['behind-bg'][ContrastLevelName.NonBodyText],
            )}
            border-color: ${viraThemeByKeys[viraThemeColorKey]['behind-bg'][
                ContrastLevelName.NonBodyText
            ].background.value};

            &:hover {
                ${colorCss(
                    viraThemeByKeys[viraThemeColorKey]['behind-bg'][ContrastLevelName.Header],
                )}
                border-color: ${viraThemeByKeys[viraThemeColorKey]['behind-bg'][
                    ContrastLevelName.Header
                ].background.value};
            }
            &:active {
                ${colorCss(
                    viraThemeByKeys[viraThemeColorKey]['behind-bg'][ContrastLevelName.NonBodyText],
                )}
                border-color: ${viraThemeByKeys[viraThemeColorKey]['behind-bg'][
                    ContrastLevelName.NonBodyText
                ].background.value};
            }
        }
        :host(
                .vira-tag-color-${unsafeCSS(colorVariant)}.vira-tag-emphasis-${unsafeCSS(
                        ViraEmphasis.Subtle,
                    )}
            )
            button {
            ${colorCss(viraThemeByKeys[viraThemeColorKey]['on-self'][ContrastLevelName.BodyText])}
            border-color: ${viraThemeByKeys[viraThemeColorKey]['on-self'][
                ContrastLevelName.BodyText
            ].background.value};

            &:hover {
                ${colorCss(
                    viraThemeByKeys[viraThemeColorKey]['on-self'][ContrastLevelName.NonBodyText],
                )}
                border-color: ${viraThemeByKeys[viraThemeColorKey]['on-self'][
                    ContrastLevelName.NonBodyText
                ].background.value};
            }
            &:active {
                ${colorCss(
                    viraThemeByKeys[viraThemeColorKey]['on-self'][ContrastLevelName.BodyText],
                )}
                border-color: ${viraThemeByKeys[viraThemeColorKey]['on-self'][
                    ContrastLevelName.BodyText
                ].background.value};
            }
        }
        :host(
                .vira-tag-color-${unsafeCSS(
                        colorVariant,
                    )}.vira-tag-not-checked.vira-tag-not-checked.vira-tag-not-checked
            )
            button {
            color: ${viraThemeByKeys[viraThemeColorKey]['on-self'][ContrastLevelName.BodyText]
                .foreground.value};
            background-color: transparent;
            border-color: ${viraThemeByKeys[viraThemeColorKey]['on-self'][
                ContrastLevelName.BodyText
            ].background.value};

            &:hover {
                background-color: ${viraThemeByKeys[viraThemeColorKey]['behind-bg'][
                    ContrastLevelName.Invisible
                ].background.value};
            }
            &:active {
                background-color: ${viraThemeByKeys[viraThemeColorKey]['behind-bg'][
                    ContrastLevelName.Decoration
                ].background.value};
            }
        }
    `;
}

function generateAutomaticViraTagThemeVariants(): CSSResult {
    return unsafeCSS(
        [
            ViraColorVariant.Accent,
            ViraColorVariant.Danger,
            ViraColorVariant.Neutral,
            ViraColorVariant.Positive,
            ViraColorVariant.Warning,
        ]
            .map((variant) => generateThemeCss(variant))
            .join(' '),
    );
}

/**
 * A "tag" or "label" or "pill" element. Supports many variations including non-clickable,
 * selectable, and cancellable variations.
 *
 * @category Elements
 * @see https://electrovir.github.io/vira/book/elements/vira-tag
 */
export const ViraTag = defineViraElement<
    {
        text: Primitive;
    } & PartialWithUndefined<{
        isClickable: RequireExactlyOne<{
            /**
             * If set, the tag can be toggled on and off. If toggled on, a checkmark is shown.
             *
             * - `true`: show a checkmark
             * - `false`: hide the checkmark
             */
            selected: boolean;
            /** If set, the tag shows an x. Clicks indicate removing the tag entirely. */
            cancellable: true;
        }>;
        /** @default ViraSize.Medium */
        size: ViraSize;
        /** @default ViraEmphasis.Standard */
        emphasis: ViraEmphasis;
        /** @default ViraColor.Accent */
        color: ViraColorVariant;
        disabled: boolean;
    }>
>()({
    tagName: 'vira-tag',
    cssVars: {
        'vira-tag-text-color': 'white',
        'vira-tag-background-color': 'black',
        'vira-tag-border-radius': '1000px',
        'vira-tag-gap': '6px',
        'vira-tag-horizontal-padding': '12px',
        'vira-tag-border-width': '2px',
    },
    events: {
        toggle: defineElementEvent<boolean>(),
        cancel: defineElementEvent<void>(),
    },
    hostClasses: {
        'vira-tag-selectable': ({inputs}) => check.isBoolean(inputs.isClickable?.selected),
        'vira-tag-checked': ({inputs}) => !!inputs.isClickable?.selected,
        'vira-tag-not-checked': ({inputs}) => inputs.isClickable?.selected === false,
        'vira-tag-cancellable': ({inputs}) => !!inputs.isClickable?.cancellable,
        'vira-tag-not-clickable': ({inputs}) => !inputs.isClickable,
        'vira-tag-disabled': ({inputs}) => !!inputs.disabled,

        'vira-tag-size-large': ({inputs}) => inputs.size === ViraSize.Large,
        'vira-tag-size-medium': ({inputs}) => !inputs.size || inputs.size === ViraSize.Medium,
        'vira-tag-size-small': ({inputs}) => inputs.size === ViraSize.Small,

        'vira-tag-emphasis-standard': ({inputs}) =>
            !inputs.emphasis || inputs.emphasis === ViraEmphasis.Standard,
        'vira-tag-emphasis-subtle': ({inputs}) => inputs.emphasis === ViraEmphasis.Subtle,

        'vira-tag-color-accent': ({inputs}) =>
            !inputs.color || inputs.color === ViraColorVariant.Accent,
        'vira-tag-color-plain': ({inputs}) => inputs.color === ViraColorVariant.Plain,
        'vira-tag-color-neutral': ({inputs}) => inputs.color === ViraColorVariant.Neutral,
        'vira-tag-color-danger': ({inputs}) => inputs.color === ViraColorVariant.Danger,
        'vira-tag-color-warning': ({inputs}) => inputs.color === ViraColorVariant.Warning,
        'vira-tag-color-positive': ({inputs}) => inputs.color === ViraColorVariant.Positive,
    },
    styles: ({cssVars, hostClasses}) => css`
        :host {
            display: inline-flex;
        }

        button {
            ${noNativeFormStyles}
            flex-shrink: 0;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: ${cssVars['vira-tag-gap'].value};
            border-radius: ${cssVars['vira-tag-border-radius'].value};
            border-width: ${cssVars['vira-tag-border-width'].value};
            border-style: solid;
            border-color: transparent;
            color: ${cssVars['vira-tag-text-color'].value};
            background-color: ${cssVars['vira-tag-background-color'].value};
            box-sizing: border-box;
            padding: 0 ${cssVars['vira-tag-horizontal-padding'].value};

            &[disabled] {
                cursor: default;
                pointer-events: none;
            }
        }

        .cancel-x,
        .selected-check,
        .text {
            height: 0;
            display: flex;
            align-items: center;
        }

        .cancel-x {
            display: none;
            margin-right: -2px;
        }

        .selected-check {
            margin-left: -2px;
            display: none;
            visibility: hidden;
        }

        ${hostClasses['vira-tag-selectable'].selector} .selected-check {
            display: flex;
        }
        ${hostClasses['vira-tag-checked'].selector} .selected-check {
            visibility: visible;
        }
        ${hostClasses['vira-tag-cancellable'].selector} .cancel-x {
            display: flex;
        }
        ${hostClasses['vira-tag-size-large'].selector} button {
            height: ${viraSizeHeights[ViraSize.Large]}px;
            font-size: ${viraFormCssVars['vira-form-large-text-size'].value};
            padding: 0 var(${cssVars['vira-tag-horizontal-padding'].name}, 16px);
        }
        ${hostClasses['vira-tag-size-medium'].selector} button {
            height: ${viraSizeHeights[ViraSize.Medium]}px;
            font-size: ${viraFormCssVars['vira-form-medium-text-size'].value};
        }
        ${hostClasses['vira-tag-size-small'].selector} button {
            height: ${viraSizeHeights[ViraSize.Small]}px;
            font-size: ${viraFormCssVars['vira-form-small-text-size'].value};
        }

        ${generateAutomaticViraTagThemeVariants()}

        :host(.${hostClasses['vira-tag-disabled'].name}.${hostClasses['vira-tag-disabled']
            .name}.${hostClasses['vira-tag-disabled'].name}.${hostClasses['vira-tag-disabled']
            .name}) {
            cursor: not-allowed;
            ${noUserSelect}

            & button {
                ${colorCss(viraTheme.colors['vira-grey-behind-bg-decoration'])}
                border-color: ${viraTheme.colors['vira-grey-behind-bg-decoration'].background.value}
            }

            &.${hostClasses['vira-tag-emphasis-subtle'].name} button {
                ${colorCss(viraTheme.colors['vira-grey-behind-bg-decoration'])}
                border-color: ${viraTheme.colors['vira-grey-behind-bg-decoration'].background.value}
            }
        }

        :host(
                .${hostClasses['vira-tag-color-plain'].name}.vira-tag-emphasis-${unsafeCSS(
                        ViraEmphasis.Standard,
                    )}
            )
            button {
            ${colorCss(viraTheme.inverse[themeDefaultKey])};
            border-color: ${viraTheme.inverse[themeDefaultKey].background.value};

            &:hover {
                ${colorCss(viraTheme.colors['vira-grey-behind-bg-non-body'])};
                border-color: ${viraTheme.colors['vira-grey-behind-bg-non-body'].background.value};
            }
            &:active {
                ${colorCss(viraTheme.inverse[themeDefaultKey])};
                border-color: ${viraTheme.inverse[themeDefaultKey].background.value};
            }
        }
        :host(
                .${hostClasses['vira-tag-color-plain'].name}.vira-tag-emphasis-${unsafeCSS(
                        ViraEmphasis.Subtle,
                    )}
            )
            button {
            background-color: transparent;
            color: ${viraTheme.colors[themeDefaultKey].foreground.value};
            border-color: transparent;
        }
        :host(
                .${hostClasses['vira-tag-color-plain'].name}.${hostClasses['vira-tag-not-checked']
                        .name}.${hostClasses['vira-tag-not-checked'].name}.${hostClasses[
                        'vira-tag-not-checked'
                    ].name}
            )
            button {
            color: ${viraTheme.colors[themeDefaultKey].foreground.value};
            background-color: transparent;
            border-color: transparent;
        }
        :host(
                .${hostClasses['vira-tag-color-plain'].name}.vira-tag-emphasis-${unsafeCSS(
                        ViraEmphasis.Subtle,
                    )}
            )
            button,
        :host(
                .${hostClasses['vira-tag-color-plain'].name}.${hostClasses['vira-tag-not-checked']
                        .name}.${hostClasses['vira-tag-not-checked'].name}.${hostClasses[
                        'vira-tag-not-checked'
                    ].name}
            )
            button {
            &:hover {
                ${colorCss(viraTheme.colors['vira-grey-behind-fg-small-body'])}
                border-color: ${viraTheme.colors['vira-grey-behind-fg-small-body'].background
                    .value};
            }
            &:active {
                ${colorCss(viraTheme.colors['vira-grey-behind-fg-body'])}
                border-color: ${viraTheme.colors['vira-grey-behind-fg-body'].background.value};
            }
        }
    `,
    render({inputs, dispatch, events}) {
        const disabled: boolean = !inputs.isClickable || !!inputs.disabled;
        return html`
            <button
                ?disabled=${disabled}
                ${listen('click', () => {
                    if (disabled) {
                        return;
                    } else if (inputs.isClickable?.selected != undefined) {
                        dispatch(new events.toggle(!inputs.isClickable.selected));
                    } else if (inputs.isClickable?.cancellable) {
                        dispatch(new events.cancel());
                    }
                })}
            >
                <${ViraIcon.assign({
                    icon: Check16Icon,
                })}
                    class="selected-check"
                ></${ViraIcon}>
                <span class="text">${String(inputs.text)}</span>
                <${ViraIcon.assign({
                    icon: X16Icon,
                })}
                    class="cancel-x"
                ></${ViraIcon}>
            </button>
        `;
    },
});
