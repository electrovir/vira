import {type PartialWithUndefined} from '@augment-vir/common';
import {css, html, nothing, unsafeCSS, type CSSResult} from 'element-vir';
import {type SingleCssVarDefinition} from 'lit-css-vars';
import {themeDefaultKey} from 'theme-vir/dist/color-theme/color-theme.js';
import {ChevronDown16Icon, type ViraIconSvg} from '../icons/index.js';
import {createFocusStyles} from '../styles/focus.js';
import {viraFormCssVars} from '../styles/form-styles.js';
import {
    viraColorVariants,
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
import {defineViraElement} from '../util/define-vira-element.js';
import {ViraIcon} from './vira-icon.element.js';

type ButtonColorValue = Pick<SingleCssVarDefinition, 'value'>;

const transparentColor: ButtonColorValue = {
    value: css`transparent`,
};

const colorVariantColors: Record<
    Exclude<ViraColorVariant, ViraColorVariant.None>,
    Record<
        Exclude<ViraEmphasis, ViraEmphasis.None>,
        Record<
            'idle' | 'hover' | 'active',
            {
                textColor: ButtonColorValue;
                borderColor: ButtonColorValue;
                backgroundColor: ButtonColorValue;
            }
        >
    >
> = {
    [ViraColorVariant.Plain]: {
        [ViraEmphasis.Standard]: {
            idle: {
                backgroundColor: viraTheme.inverse[themeDefaultKey].background,
                textColor: viraTheme.inverse[themeDefaultKey].foreground,
                borderColor: viraTheme.inverse[themeDefaultKey].background,
            },
            hover: {
                backgroundColor: viraTheme.colors['vira-grey-behind-bg-non-body'].background,
                textColor: viraTheme.colors['vira-grey-behind-bg-non-body'].foreground,
                borderColor: viraTheme.inverse[themeDefaultKey].background,
            },
            active: {
                backgroundColor: viraTheme.colors['vira-grey-behind-bg-body'].background,
                textColor: viraTheme.colors['vira-grey-behind-bg-body'].foreground,
                borderColor: viraTheme.inverse[themeDefaultKey].background,
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
    },
    [ViraColorVariant.Accent]: {
        [ViraEmphasis.Standard]: {
            idle: {
                backgroundColor: viraTheme.colors['vira-accent-behind-bg-non-body'].background,
                textColor: viraTheme.colors['vira-accent-behind-bg-non-body'].foreground,
                borderColor: viraTheme.colors['vira-accent-behind-bg-body'].background,
            },
            hover: {
                backgroundColor: viraTheme.colors['vira-accent-behind-bg-header'].background,
                textColor: viraTheme.colors['vira-accent-behind-bg-header'].foreground,
                borderColor: viraTheme.colors['vira-accent-behind-bg-body'].background,
            },
            active: {
                backgroundColor: viraTheme.colors['vira-accent-behind-bg-body'].background,
                textColor: viraTheme.colors['vira-accent-behind-bg-body'].foreground,
                borderColor: viraTheme.colors['vira-accent-behind-bg-body'].background,
            },
        },
        [ViraEmphasis.Subtle]: {
            idle: {
                backgroundColor: transparentColor,
                textColor: viraTheme.colors['vira-accent-foreground-non-body'].foreground,
                borderColor: transparentColor,
            },
            hover: {
                backgroundColor: viraTheme.colors['vira-accent-on-self-body'].background,
                textColor: viraTheme.colors['vira-accent-on-self-body'].foreground,
                borderColor: viraTheme.colors['vira-accent-on-self-body'].foreground,
            },
            active: {
                backgroundColor: viraTheme.colors['vira-accent-on-self-non-body'].background,
                textColor: viraTheme.colors['vira-accent-on-self-non-body'].foreground,
                borderColor: viraTheme.colors['vira-accent-on-self-non-body'].foreground,
            },
        },
    },
    [ViraColorVariant.Neutral]: {
        [ViraEmphasis.Standard]: {
            idle: {
                backgroundColor: viraTheme.colors[themeDefaultKey].background,
                textColor: viraTheme.colors[themeDefaultKey].foreground,
                borderColor: viraTheme.colors[themeDefaultKey].foreground,
            },
            hover: {
                backgroundColor: viraTheme.colors['vira-grey-behind-fg-small-body'].background,
                textColor: viraTheme.colors['vira-grey-behind-fg-small-body'].foreground,
                borderColor: viraTheme.colors[themeDefaultKey].foreground,
            },
            active: {
                backgroundColor: viraTheme.colors['vira-grey-behind-fg-body'].background,
                textColor: viraTheme.colors['vira-grey-behind-fg-body'].foreground,
                borderColor: viraTheme.colors[themeDefaultKey].foreground,
            },
        },
        [ViraEmphasis.Subtle]: {
            idle: {
                backgroundColor: transparentColor,
                textColor: viraTheme.colors['vira-grey-foreground-non-body'].foreground,
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
    },
    [ViraColorVariant.Danger]: {
        [ViraEmphasis.Standard]: {
            idle: {
                backgroundColor: viraTheme.colors['vira-red-behind-bg-non-body'].background,
                textColor: viraTheme.colors['vira-red-behind-bg-non-body'].foreground,
                borderColor: viraTheme.colors['vira-red-behind-bg-body'].background,
            },
            hover: {
                backgroundColor: viraTheme.colors['vira-red-behind-bg-header'].background,
                textColor: viraTheme.colors['vira-red-behind-bg-header'].foreground,
                borderColor: viraTheme.colors['vira-red-behind-bg-body'].background,
            },
            active: {
                backgroundColor: viraTheme.colors['vira-red-behind-bg-body'].background,
                textColor: viraTheme.colors['vira-red-behind-bg-body'].foreground,
                borderColor: viraTheme.colors['vira-red-behind-bg-body'].background,
            },
        },
        [ViraEmphasis.Subtle]: {
            idle: {
                backgroundColor: transparentColor,
                textColor: viraTheme.colors['vira-red-foreground-non-body'].foreground,
                borderColor: transparentColor,
            },
            hover: {
                backgroundColor: viraTheme.colors['vira-red-on-self-body'].background,
                textColor: viraTheme.colors['vira-red-on-self-body'].foreground,
                borderColor: viraTheme.colors['vira-red-on-self-body'].foreground,
            },
            active: {
                backgroundColor: viraTheme.colors['vira-red-on-self-non-body'].background,
                textColor: viraTheme.colors['vira-red-on-self-non-body'].foreground,
                borderColor: viraTheme.colors['vira-red-on-self-non-body'].foreground,
            },
        },
    },
    [ViraColorVariant.Warning]: {
        [ViraEmphasis.Standard]: {
            idle: {
                backgroundColor: viraTheme.colors['vira-yellow-behind-bg-non-body'].background,
                textColor: viraTheme.colors['vira-yellow-behind-bg-non-body'].foreground,
                borderColor: viraTheme.colors['vira-yellow-behind-bg-body'].background,
            },
            hover: {
                backgroundColor: viraTheme.colors['vira-yellow-behind-bg-header'].background,
                textColor: viraTheme.colors['vira-yellow-behind-bg-header'].foreground,
                borderColor: viraTheme.colors['vira-yellow-behind-bg-body'].background,
            },
            active: {
                backgroundColor: viraTheme.colors['vira-yellow-behind-bg-body'].background,
                textColor: viraTheme.colors['vira-yellow-behind-bg-body'].foreground,
                borderColor: viraTheme.colors['vira-yellow-behind-bg-body'].background,
            },
        },
        [ViraEmphasis.Subtle]: {
            idle: {
                backgroundColor: transparentColor,
                textColor: viraTheme.colors['vira-yellow-foreground-non-body'].foreground,
                borderColor: transparentColor,
            },
            hover: {
                backgroundColor: viraTheme.colors['vira-yellow-on-self-body'].background,
                textColor: viraTheme.colors['vira-yellow-on-self-body'].foreground,
                borderColor: viraTheme.colors['vira-yellow-on-self-body'].foreground,
            },
            active: {
                backgroundColor: viraTheme.colors['vira-yellow-on-self-non-body'].background,
                textColor: viraTheme.colors['vira-yellow-on-self-non-body'].foreground,
                borderColor: viraTheme.colors['vira-yellow-on-self-non-body'].foreground,
            },
        },
    },
    [ViraColorVariant.Positive]: {
        [ViraEmphasis.Standard]: {
            idle: {
                backgroundColor: viraTheme.colors['vira-green-behind-bg-non-body'].background,
                textColor: viraTheme.colors['vira-green-behind-bg-non-body'].foreground,
                borderColor: viraTheme.colors['vira-green-behind-bg-body'].background,
            },
            hover: {
                backgroundColor: viraTheme.colors['vira-green-behind-bg-header'].background,
                textColor: viraTheme.colors['vira-green-behind-bg-header'].foreground,
                borderColor: viraTheme.colors['vira-green-behind-bg-body'].background,
            },
            active: {
                backgroundColor: viraTheme.colors['vira-green-behind-bg-body'].background,
                textColor: viraTheme.colors['vira-green-behind-bg-body'].foreground,
                borderColor: viraTheme.colors['vira-green-behind-bg-body'].background,
            },
        },
        [ViraEmphasis.Subtle]: {
            idle: {
                backgroundColor: transparentColor,
                textColor: viraTheme.colors['vira-green-foreground-non-body'].foreground,
                borderColor: transparentColor,
            },
            hover: {
                backgroundColor: viraTheme.colors['vira-green-on-self-body'].background,
                textColor: viraTheme.colors['vira-green-on-self-body'].foreground,
                borderColor: viraTheme.colors['vira-green-on-self-body'].foreground,
            },
            active: {
                backgroundColor: viraTheme.colors['vira-green-on-self-non-body'].background,
                textColor: viraTheme.colors['vira-green-on-self-non-body'].foreground,
                borderColor: viraTheme.colors['vira-green-on-self-non-body'].foreground,
            },
        },
    },
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
         * Set a predefined color variant. Set to `ViraColorVariant.None` for maximum customization.
         * In that case, you will need to use this element's CSS vars to customize the colors.
         *
         * @default ViraColorVariant.Accent,
         */
        colorVariant: ViraColorVariant;
        /**
         * Set to `true`
         *
         * @default false
         */
        showMenuCaret: boolean;
    }>
>()({
    tagName: 'vira-button',
    hostClasses: {
        'vira-button-with-menu-caret': ({inputs}) => !!inputs.showMenuCaret,

        'vira-button-size-large': ({inputs}) => inputs.buttonSize === ViraSize.Large,
        'vira-button-size-medium': ({inputs}) =>
            !inputs.buttonSize || inputs.buttonSize === ViraSize.Medium,
        'vira-button-size-small': ({inputs}) => inputs.buttonSize === ViraSize.Small,

        'vira-button-emphasis-standard': ({inputs}) =>
            !inputs.buttonEmphasis || inputs.buttonEmphasis === ViraEmphasis.Standard,
        'vira-button-emphasis-subtle': ({inputs}) => inputs.buttonEmphasis === ViraEmphasis.Subtle,

        'vira-button-color-accent': ({inputs}) =>
            !inputs.colorVariant || inputs.colorVariant === ViraColorVariant.Accent,
        'vira-button-color-plain': ({inputs}) => inputs.colorVariant === ViraColorVariant.Plain,
        'vira-button-color-neutral': ({inputs}) => inputs.colorVariant === ViraColorVariant.Neutral,
        'vira-button-color-danger': ({inputs}) => inputs.colorVariant === ViraColorVariant.Danger,
        'vira-button-color-warning': ({inputs}) => inputs.colorVariant === ViraColorVariant.Warning,
        'vira-button-color-positive': ({inputs}) =>
            inputs.colorVariant === ViraColorVariant.Positive,

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
            viraTheme.colors['vira-grey-behind-bg-invisible'].foreground.value,
        'vira-button-disabled-background-color':
            viraTheme.colors['vira-grey-behind-bg-invisible'].background.value,
        'vira-button-disabled-border-color':
            viraTheme.colors['vira-grey-behind-bg-invisible'].background.value,

        'vira-button-border-width': '1px',
        'vira-button-border-radius': viraFormCssVars['vira-form-radius'].value,
    },
    styles: ({hostClasses, cssVars}) => {
        function generateVariantCss(): CSSResult {
            const allStyles = viraEmphasisVariants.flatMap((emphasis) => {
                return viraColorVariants.map((colorVariant) => {
                    const colors = colorVariantColors[colorVariant][emphasis];
                    const variantSelector =
                        hostClasses[`vira-button-color-${colorVariant}`].selector;
                    const emphasisSelector =
                        hostClasses[`vira-button-emphasis-${emphasis}`].selector;

                    return css`
                        ${variantSelector}${emphasisSelector} {
                            ${cssVars['vira-button-background-color'].name}: ${colors.idle
                                .backgroundColor.value};
                            ${cssVars['vira-button-text-color'].name}: ${colors.idle.textColor
                                .value};
                            ${cssVars['vira-button-border-color'].name}: ${colors.idle.borderColor
                                .value};

                            ${cssVars['vira-button-hover-background-color'].name}: ${colors.hover
                                .backgroundColor.value};
                            ${cssVars['vira-button-hover-text-color'].name}: ${colors.hover
                                .textColor.value};
                            ${cssVars['vira-button-hover-border-color'].name}: ${colors.hover
                                .borderColor.value};

                            ${cssVars['vira-button-active-background-color'].name}: ${colors.active
                                .backgroundColor.value};
                            ${cssVars['vira-button-active-text-color'].name}: ${colors.active
                                .textColor.value};
                            ${cssVars['vira-button-active-border-color'].name}: ${colors.active
                                .borderColor.value};
                        }
                    `;
                });
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

            button ${ViraIcon} + .text-template {
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
            }

            ${hostClasses['vira-button-icon-only'].selector} {
                aspect-ratio: 1;

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

        const caretIconTemplate = inputs.showMenuCaret
            ? html`
                  <${ViraIcon.assign({
                      icon: ChevronDown16Icon,
                  })}
                      class="caret-icon"
                  ></${ViraIcon}>
              `
            : nothing;

        return html`
            <button ?disabled=${inputs.isDisabled}>
                ${iconTemplate}${textTemplate}${caretIconTemplate}
            </button>
        `;
    },
});
