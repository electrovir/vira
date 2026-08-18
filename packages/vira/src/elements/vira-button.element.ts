import {arrayToObject, getObjectTypedKeys, type PartialWithUndefined} from '@augment-vir/common';
import {ContrastLevelName} from '@electrovir/color/dist/data/contrast/contrast.js';
import {css, html, nothing, unsafeCSS, type CSSResult, type HtmlInterpolation} from 'element-vir';
import {type SingleCssVarDefinition} from 'lit-css-vars';
import {themeDefaultKey} from 'theme-vir/dist/color-theme/color-theme.js';
import {ChevronDown16Icon, type ViraIconSvg} from '../icons/index.js';
import {createFocusStyles} from '../styles/focus.js';
import {viraFormCssVars} from '../styles/form-styles.js';
import {
    standaloneThemeColorNames,
    viraColorVariantToHostClassKey,
    viraEmphasisVariants,
    viraSizeHeights,
    viraSizeVariants,
} from '../styles/form-variants.js';
import {
    noUserSelect,
    ViraColorVariant,
    ViraEmphasis,
    ViraSize,
    viraTheme,
} from '../styles/index.js';
import {noNativeFormStyles} from '../styles/native-styles.js';
import {viraThemeByKeys, ViraThemeColorName} from '../styles/vira-color-theme-object.js';
import {defineViraElement} from '../util/define-vira-element.js';
import {ViraIcon} from './vira-icon.element.js';

type ButtonColorValue = Pick<SingleCssVarDefinition, 'value'>;

const transparentColor: ButtonColorValue = {
    value: css`transparent`,
};

type ButtonColorStateColors = Record<
    'idle' | 'hover' | 'active',
    {
        textColor: ButtonColorValue;
        borderColor: ButtonColorValue;
        backgroundColor: ButtonColorValue;
    }
>;

function buildThemedButtonColors(
    colorName: ViraThemeColorName,
): Record<Exclude<ViraEmphasis, ViraEmphasis.None>, ButtonColorStateColors> {
    const behindBg = viraThemeByKeys[colorName]['behind-bg'];
    const foreground = viraThemeByKeys[colorName].foreground;
    const onSelf = viraThemeByKeys[colorName]['on-self'];

    return {
        [ViraEmphasis.Standard]: {
            idle: {
                backgroundColor: behindBg[ContrastLevelName.NonBodyText].background,
                textColor: behindBg[ContrastLevelName.NonBodyText].foreground,
                borderColor: behindBg[ContrastLevelName.BodyText].background,
            },
            hover: {
                backgroundColor: behindBg[ContrastLevelName.Header].background,
                textColor: behindBg[ContrastLevelName.Header].foreground,
                borderColor: behindBg[ContrastLevelName.BodyText].background,
            },
            active: {
                backgroundColor: behindBg[ContrastLevelName.BodyText].background,
                textColor: behindBg[ContrastLevelName.BodyText].foreground,
                borderColor: behindBg[ContrastLevelName.BodyText].background,
            },
        },
        [ViraEmphasis.Subtle]: {
            idle: {
                backgroundColor: transparentColor,
                textColor: foreground[ContrastLevelName.NonBodyText].foreground,
                borderColor: transparentColor,
            },
            hover: {
                backgroundColor: onSelf[ContrastLevelName.BodyText].background,
                textColor: onSelf[ContrastLevelName.BodyText].foreground,
                borderColor: onSelf[ContrastLevelName.BodyText].foreground,
            },
            active: {
                backgroundColor: onSelf[ContrastLevelName.NonBodyText].background,
                textColor: onSelf[ContrastLevelName.NonBodyText].foreground,
                borderColor: onSelf[ContrastLevelName.NonBodyText].foreground,
            },
        },
    };
}

const plainButtonColors: Record<
    Exclude<ViraEmphasis, ViraEmphasis.None>,
    ButtonColorStateColors
> = {
    [ViraEmphasis.Standard]: {
        idle: {
            backgroundColor: viraTheme.colors[themeDefaultKey].foreground,
            textColor: viraTheme.colors[themeDefaultKey].background,
            borderColor: viraTheme.colors[themeDefaultKey].foreground,
        },
        hover: {
            backgroundColor: viraTheme.colors['vira-grey-behind-bg-non-body'].background,
            textColor: viraTheme.colors['vira-grey-behind-bg-non-body'].foreground,
            borderColor: viraTheme.colors[themeDefaultKey].foreground,
        },
        active: {
            backgroundColor: viraTheme.colors['vira-grey-behind-bg-body'].background,
            textColor: viraTheme.colors['vira-grey-behind-bg-body'].foreground,
            borderColor: viraTheme.colors[themeDefaultKey].foreground,
        },
    },
    [ViraEmphasis.Subtle]: {
        idle: {
            backgroundColor: transparentColor,
            textColor: viraTheme.colors[themeDefaultKey].foreground,
            borderColor: transparentColor,
        },
        hover: {
            backgroundColor: viraTheme.colors['vira-grey-on-self-body'].background,
            textColor: viraTheme.colors['vira-grey-on-self-body'].foreground,
            borderColor: viraTheme.colors['vira-grey-on-self-body'].foreground,
        },
        active: {
            backgroundColor: viraTheme.colors['vira-grey-on-self-non-body'].background,
            textColor: viraTheme.colors['vira-grey-on-self-non-body'].foreground,
            borderColor: viraTheme.colors['vira-grey-on-self-non-body'].foreground,
        },
    },
};

const neutralButtonColors: Record<
    Exclude<ViraEmphasis, ViraEmphasis.None>,
    ButtonColorStateColors
> = {
    [ViraEmphasis.Standard]: {
        idle: {
            backgroundColor: viraTheme.colors[themeDefaultKey].background,
            textColor: viraTheme.colors[themeDefaultKey].foreground,
            borderColor: viraFormCssVars['vira-form-border-color'],
        },
        hover: {
            backgroundColor: viraTheme.colors['vira-grey-behind-fg-small-body'].background,
            textColor: viraTheme.colors['vira-grey-behind-fg-small-body'].foreground,
            borderColor: viraFormCssVars['vira-form-border-color'],
        },
        active: {
            backgroundColor: viraTheme.colors['vira-grey-behind-fg-body'].background,
            textColor: viraTheme.colors['vira-grey-behind-fg-body'].foreground,
            borderColor: viraFormCssVars['vira-form-border-color'],
        },
    },
    [ViraEmphasis.Subtle]: buildThemedButtonColors(ViraThemeColorName.grey)[ViraEmphasis.Subtle],
};

/**
 * A custom button with default styling.
 *
 * @category Button
 * @category Elements
 * @see https://electrovir.github.io/vira/book/elements/vira-button
 */
export const ViraButton = defineViraElement<
    PartialWithUndefined<{
        text: string;
        icon: Readonly<ViraIconSvg>;
        /** @default false */
        isDisabled: boolean;
        /**
         * Set a predefined emphasis variant. Set to `ViraEmphasis.None` for maximum customization.
         *
         * @default ViraEmphasis.Standard
         */
        buttonEmphasis: ViraEmphasis;
        /**
         * Set a predefined size variant. Set to `ViraSize.None` for maximum customization. In that
         * case, you will need to set a `height`.
         *
         * @default ViraSize.Medium
         */
        buttonSize: ViraSize;
        /**
         * Set a predefined color variant or a raw {@link ViraThemeColorName} (e.g.,
         * `ViraThemeColorName.blue`). Set to `ViraColorVariant.Custom` for maximum customization.
         * In that case, you will need to use this element's CSS vars to customize the colors.
         *
         * @default ViraColorVariant.Plain
         */
        color: ViraColorVariant | ViraThemeColorName;
        /**
         * Set to `true` to render `icon` after `text` instead of before it.
         *
         * @default false
         */
        showIconOnRight: boolean;
        /**
         * Set to `true` to append a downwards chevron after the button's text.
         *
         * @deprecated Set `icon` to `ChevronDown16Icon` and `showIconOnRight` to `true` instead.
         * @default false
         */
        showMenuCaret: boolean;
    }>
>()({
    tagName: 'vira-button',
    hostClasses: {
        // eslint-disable-next-line @typescript-eslint/no-deprecated
        'vira-button-with-menu-caret': ({inputs}) => !!inputs.showMenuCaret,

        'vira-button-size-large': ({inputs}) => inputs.buttonSize === ViraSize.Large,
        'vira-button-size-medium': ({inputs}) => {
            return !inputs.buttonSize || inputs.buttonSize === ViraSize.Medium;
        },
        'vira-button-size-small': ({inputs}) => inputs.buttonSize === ViraSize.Small,

        'vira-button-emphasis-standard': ({inputs}) => {
            return !inputs.buttonEmphasis || inputs.buttonEmphasis === ViraEmphasis.Standard;
        },
        'vira-button-emphasis-subtle': ({inputs}) => inputs.buttonEmphasis === ViraEmphasis.Subtle,

        ...arrayToObject(
            getObjectTypedKeys(viraColorVariantToHostClassKey),
            (colorVariant) => {
                const colorKey = viraColorVariantToHostClassKey[colorVariant];
                return {
                    key: `vira-button-color-${colorKey}` as const,
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
        'vira-button-color-plain': ({
            inputs,
        }: {
            inputs: Readonly<PartialWithUndefined<{color: ViraColorVariant | ViraThemeColorName}>>;
        }) => !inputs.color || inputs.color === ViraColorVariant.Plain,
        'vira-button-color-neutral': ({
            inputs,
        }: {
            inputs: Readonly<PartialWithUndefined<{color: ViraColorVariant | ViraThemeColorName}>>;
        }) => inputs.color === ViraColorVariant.Neutral,
        ...arrayToObject(
            standaloneThemeColorNames,
            (colorName) => {
                return {
                    key: `vira-button-color-${colorName}` as const,
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

        'vira-button-disabled': ({inputs}) => !!inputs.isDisabled,
        'vira-button-icon-only': ({inputs}) => !inputs.text && !!inputs.icon,
    },
    cssVars: {
        'vira-button-text-color': 'transparent',
        'vira-button-background-color': 'transparent',
        'vira-button-border-color': 'transparent',

        'vira-button-hover-text-color': 'transparent',
        'vira-button-hover-background-color': 'transparent',
        'vira-button-hover-border-color': 'transparent',

        'vira-button-active-text-color': 'transparent',
        'vira-button-active-background-color': 'transparent',
        'vira-button-active-border-color': 'transparent',

        'vira-button-disabled-text-color':
            viraTheme.colors['vira-grey-behind-bg-decoration'].foreground.value,
        'vira-button-disabled-background-color':
            viraTheme.colors['vira-grey-behind-bg-decoration'].background.value,
        'vira-button-disabled-border-color':
            viraTheme.colors['vira-grey-behind-bg-decoration'].background.value,

        'vira-button-border-width': '1px',
        'vira-button-border-radius': viraFormCssVars['vira-form-radius'].value,
    },
    styles: ({hostClasses, cssVars}) => {
        function buildVariantCssRule({
            variantSelector,
            emphasisSelector,
            colors,
        }: Readonly<{
            variantSelector: CSSResult;
            emphasisSelector: CSSResult;
            colors: ButtonColorStateColors;
        }>): CSSResult {
            return css`
                ${variantSelector}${emphasisSelector} {
                    ${cssVars['vira-button-background-color'].name}: ${colors.idle.backgroundColor
                        .value};
                    ${cssVars['vira-button-text-color'].name}: ${colors.idle.textColor.value};
                    ${cssVars['vira-button-border-color'].name}: ${colors.idle.borderColor.value};

                    ${cssVars['vira-button-hover-background-color'].name}: ${colors.hover
                        .backgroundColor.value};
                    ${cssVars['vira-button-hover-text-color'].name}: ${colors.hover.textColor
                        .value};
                    ${cssVars['vira-button-hover-border-color'].name}: ${colors.hover.borderColor
                        .value};

                    ${cssVars['vira-button-active-background-color'].name}: ${colors.active
                        .backgroundColor.value};
                    ${cssVars['vira-button-active-text-color'].name}: ${colors.active.textColor
                        .value};
                    ${cssVars['vira-button-active-border-color'].name}: ${colors.active.borderColor
                        .value};
                }
            `;
        }

        function generateVariantCss(): CSSResult {
            const allStyles = viraEmphasisVariants.flatMap((emphasis) => {
                const emphasisSelector = hostClasses[`vira-button-emphasis-${emphasis}`].selector;
                const themedStyles = getObjectTypedKeys(viraColorVariantToHostClassKey).map(
                    (colorVariant) => {
                        const colorKey = viraColorVariantToHostClassKey[colorVariant];
                        const colors = buildThemedButtonColors(colorKey)[emphasis];
                        const variantSelector =
                            hostClasses[`vira-button-color-${colorKey}`].selector;
                        return buildVariantCssRule({
                            variantSelector,
                            emphasisSelector,
                            colors,
                        });
                    },
                );
                const plainStyle = buildVariantCssRule({
                    variantSelector: hostClasses['vira-button-color-plain'].selector,
                    emphasisSelector,
                    colors: plainButtonColors[emphasis],
                });
                const neutralStyle = buildVariantCssRule({
                    variantSelector: hostClasses['vira-button-color-neutral'].selector,
                    emphasisSelector,
                    colors: neutralButtonColors[emphasis],
                });
                const standaloneStyles = standaloneThemeColorNames.map((colorName) => {
                    const colors = buildThemedButtonColors(colorName)[emphasis];
                    const variantSelector = hostClasses[`vira-button-color-${colorName}`].selector;
                    return buildVariantCssRule({
                        variantSelector,
                        emphasisSelector,
                        colors,
                    });
                });
                return [
                    ...themedStyles,
                    plainStyle,
                    neutralStyle,
                    ...standaloneStyles,
                ];
            });

            return unsafeCSS(allStyles.join('\n'));
        }

        function generateSizeVariantCss(): CSSResult {
            const styles = viraSizeVariants.map((sizeVariant) => {
                return css`
                    ${hostClasses[`vira-button-size-${sizeVariant}`].selector} {
                        font-size: ${viraFormCssVars[`vira-form-${sizeVariant}-text-size`].value};

                        button {
                            min-height: ${viraSizeHeights[sizeVariant]}px;
                            padding: 2px
                                ${viraFormCssVars[`vira-form-${sizeVariant}-text-size`].value};
                        }

                        &${hostClasses['vira-button-icon-only'].selector} {
                            min-width: ${viraSizeHeights[sizeVariant]}px;
                        }
                    }
                `;
            });

            return unsafeCSS(styles.join('\n'));
        }

        return css`
            :host {
                cursor: pointer;
                display: inline-flex;
                position: relative;
                vertical-align: middle;
                align-items: center;
                box-sizing: border-box;
                ${noUserSelect};
                ${viraFormCssVars['vira-form-focus-outline-color'].name}: ${viraFormCssVars[
                    'vira-form-accent-primary-hover-color'
                ].value}
            }

            ${generateSizeVariantCss()}
            ${generateVariantCss()}

            button {
                ${noNativeFormStyles};
                flex-shrink: 0;
                position: relative;
                cursor: pointer;

                width: 100%;
                height: 100%;

                border-width: ${cssVars['vira-button-border-width'].value};
                border-style: solid;
                border-color: ${cssVars['vira-button-border-color'].value};

                box-sizing: border-box;
                display: inline-flex;
                justify-content: center;
                align-items: center;

                border-radius: ${cssVars['vira-button-border-radius'].value};

                background-color: ${cssVars['vira-button-background-color'].value};
                color: ${cssVars['vira-button-text-color'].value};

                ${createFocusStyles({
                    elementBorderSize: cssVars['vira-button-border-width'],
                })}
            }

            :host(:hover) button,
            & button:hover {
                background-color: ${cssVars['vira-button-hover-background-color'].value};
                color: ${cssVars['vira-button-hover-text-color'].value};
                border-color: ${cssVars['vira-button-hover-border-color'].value};
            }

            :host(:active) button,
            & button:active {
                background-color: ${cssVars['vira-button-active-background-color'].value};
                color: ${cssVars['vira-button-active-text-color'].value};
                border-color: ${cssVars['vira-button-active-border-color'].value};
            }

            .empty-text {
                width: 0;
            }

            button ${ViraIcon} + .text-template,
            button .text-template + ${ViraIcon} {
                margin-left: 8px;
            }

            ${ViraIcon} {
                height: 0;
                display: flex;
                align-items: center;
            }

            .caret-icon {
                margin-left: 8px;
            }

            ${hostClasses['vira-button-with-menu-caret'].selector} {
                button {
                    padding-right: 6px;
                }
            }

            ${hostClasses['vira-button-disabled'].selector} {
                cursor: not-allowed;

                & button {
                    pointer-events: none;
                    color: ${cssVars['vira-button-disabled-text-color'].value};
                    background-color: ${cssVars['vira-button-disabled-background-color'].value};
                    border-color: ${cssVars['vira-button-disabled-border-color'].value};
                }

                &${hostClasses['vira-button-emphasis-subtle'].selector} button {
                    color: ${viraTheme.colors['vira-grey-foreground-decoration'].foreground.value};
                    background-color: transparent;
                    border-color: transparent;
                }
            }

            ${hostClasses['vira-button-icon-only'].selector} {
                button {
                    padding: 0;
                }
            }
        `;
    },
    render: ({inputs}) => {
        const iconTemplate = inputs.icon
            ? html`
                  <${ViraIcon.assign({
                      icon: inputs.icon,
                  })}></${ViraIcon}>
              `
            : nothing;
        const textTemplate = inputs.text
            ? html`
                  <span class="text-template">${inputs.text}</span>
              `
            : html`
                  <span class="empty-text">&nbsp;</span>
              `;

        // eslint-disable-next-line @typescript-eslint/no-deprecated
        const caretIconTemplate = inputs.showMenuCaret
            ? html`
                  <${ViraIcon.assign({
                      icon: ChevronDown16Icon,
                  })}
                      class="caret-icon"
                  ></${ViraIcon}>
              `
            : nothing;

        /* Both templates are interpolated with no whitespace between them so `+` selectors match. */
        const templates: HtmlInterpolation[] = inputs.showIconOnRight
            ? [
                  textTemplate,
                  iconTemplate,
              ]
            : [
                  iconTemplate,
                  textTemplate,
              ];

        return html`
            <button ?disabled=${inputs.isDisabled}>${templates}${caretIconTemplate}</button>
        `;
    },
});
