import {check} from '@augment-vir/assert';
import {arrayToObject, getObjectTypedKeys, type PartialWithUndefined} from '@augment-vir/common';
import {ContrastLevelName} from '@electrovir/color/dist/data/contrast/contrast.js';
import {css, type CSSResult, defineElementEvent, html, listen, unsafeCSS} from 'element-vir';
import {type SingleCssVarDefinition} from 'lit-css-vars';
import {themeDefaultKey} from 'theme-vir/dist/color-theme/color-theme.js';
import {type Primitive, type RequireExactlyOne} from 'type-fest';
import {Check16Icon} from '../icons/icon-svgs/16/check-16.icon.js';
import {X16Icon} from '../icons/icon-svgs/16/x-16.icon.js';
import {viraFormCssVars} from '../styles/form-styles.js';
import {
    standaloneThemeColorNames,
    ViraColorVariant,
    viraColorVariantToHostClassKey,
    ViraEmphasis,
    viraEmphasisVariants,
    ViraSize,
    viraSizeHeights,
    viraSizeVariants,
} from '../styles/form-variants.js';
import {noNativeFormStyles} from '../styles/native-styles.js';
import {noUserSelect} from '../styles/user-select.js';
import {viraThemeByKeys, ViraThemeColorName} from '../styles/vira-color-theme-object.js';
import {viraTheme} from '../styles/vira-color-theme.js';
import {defineViraElement} from '../util/define-vira-element.js';
import {ViraIcon} from './vira-icon.element.js';

type TagColorValue = Pick<SingleCssVarDefinition, 'value'>;

const transparentColor: TagColorValue = {
    value: css`transparent`,
};

type TagColorStateColors = Record<
    'idle' | 'hover' | 'active',
    {
        textColor: TagColorValue;
        backgroundColor: TagColorValue;
        borderColor: TagColorValue;
    }
>;

function buildThemedTagColors(
    colorName: ViraThemeColorName,
): Record<Exclude<ViraEmphasis, ViraEmphasis.None>, TagColorStateColors> {
    const behindBg = viraThemeByKeys[colorName]['behind-bg'];
    const onSelf = viraThemeByKeys[colorName]['on-self'];

    return {
        [ViraEmphasis.Standard]: {
            idle: {
                textColor: behindBg[ContrastLevelName.NonBodyText].foreground,
                backgroundColor: behindBg[ContrastLevelName.NonBodyText].background,
                borderColor: behindBg[ContrastLevelName.NonBodyText].background,
            },
            hover: {
                textColor: behindBg[ContrastLevelName.Header].foreground,
                backgroundColor: behindBg[ContrastLevelName.Header].background,
                borderColor: behindBg[ContrastLevelName.Header].background,
            },
            active: {
                textColor: behindBg[ContrastLevelName.NonBodyText].foreground,
                backgroundColor: behindBg[ContrastLevelName.NonBodyText].background,
                borderColor: behindBg[ContrastLevelName.NonBodyText].background,
            },
        },
        [ViraEmphasis.Subtle]: {
            idle: {
                textColor: onSelf[ContrastLevelName.BodyText].foreground,
                backgroundColor: onSelf[ContrastLevelName.BodyText].background,
                borderColor: onSelf[ContrastLevelName.BodyText].background,
            },
            hover: {
                textColor: onSelf[ContrastLevelName.NonBodyText].foreground,
                backgroundColor: onSelf[ContrastLevelName.NonBodyText].background,
                borderColor: onSelf[ContrastLevelName.NonBodyText].background,
            },
            active: {
                textColor: onSelf[ContrastLevelName.BodyText].foreground,
                backgroundColor: onSelf[ContrastLevelName.BodyText].background,
                borderColor: onSelf[ContrastLevelName.BodyText].background,
            },
        },
    };
}

function buildThemedNotCheckedColors(colorName: ViraThemeColorName): TagColorStateColors {
    const onSelfBodyText = viraThemeByKeys[colorName]['on-self'][ContrastLevelName.BodyText];

    return {
        idle: {
            textColor: onSelfBodyText.foreground,
            backgroundColor: transparentColor,
            borderColor: onSelfBodyText.background,
        },
        hover: {
            textColor: onSelfBodyText.foreground,
            backgroundColor:
                viraThemeByKeys[colorName]['behind-bg'][ContrastLevelName.Invisible].background,
            borderColor: onSelfBodyText.background,
        },
        active: {
            textColor: onSelfBodyText.foreground,
            backgroundColor:
                viraThemeByKeys[colorName]['behind-bg'][ContrastLevelName.Decoration].background,
            borderColor: onSelfBodyText.background,
        },
    };
}

const plainTagColors: Record<Exclude<ViraEmphasis, ViraEmphasis.None>, TagColorStateColors> = {
    [ViraEmphasis.Standard]: {
        idle: {
            backgroundColor: viraTheme.colors[themeDefaultKey].foreground,
            textColor: viraTheme.colors[themeDefaultKey].background,
            borderColor: viraTheme.colors[themeDefaultKey].foreground,
        },
        hover: {
            backgroundColor: viraTheme.colors['vira-grey-behind-bg-body'].background,
            textColor: viraTheme.colors['vira-grey-behind-bg-body'].foreground,
            borderColor: viraTheme.colors['vira-grey-behind-bg-body'].background,
        },
        active: {
            backgroundColor: viraTheme.colors[themeDefaultKey].foreground,
            textColor: viraTheme.colors[themeDefaultKey].background,
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
            backgroundColor: viraTheme.colors['vira-grey-behind-fg-small-body'].background,
            textColor: viraTheme.colors['vira-grey-behind-fg-small-body'].foreground,
            borderColor: viraTheme.colors['vira-grey-behind-fg-small-body'].background,
        },
        active: {
            backgroundColor: viraTheme.colors['vira-grey-behind-fg-body'].background,
            textColor: viraTheme.colors['vira-grey-behind-fg-body'].foreground,
            borderColor: viraTheme.colors['vira-grey-behind-fg-body'].background,
        },
    },
};

const plainNotCheckedColors: TagColorStateColors = {
    idle: {
        textColor: viraTheme.colors[themeDefaultKey].foreground,
        backgroundColor: transparentColor,
        borderColor: viraTheme.colors['vira-grey-on-self-body'].background,
    },
    hover: {
        backgroundColor: viraTheme.colors['vira-grey-behind-fg-small-body'].background,
        textColor: viraTheme.colors['vira-grey-behind-fg-small-body'].foreground,
        borderColor: viraTheme.colors['vira-grey-on-self-body'].background,
    },
    active: {
        backgroundColor: viraTheme.colors['vira-grey-behind-fg-body'].background,
        textColor: viraTheme.colors['vira-grey-behind-fg-body'].foreground,
        borderColor: viraTheme.colors['vira-grey-on-self-body'].background,
    },
};

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
        /**
         * Color scheme. Accepts any {@link ViraColorVariant} or a {@link ViraThemeColorName} (e.g.,
         * `ViraThemeColorName.blue`).
         *
         * @default ViraColorVariant.Plain
         */
        color: ViraColorVariant | ViraThemeColorName;
        disabled: boolean;
    }>
>()({
    tagName: 'vira-tag',
    cssVars: {
        'vira-tag-text-color': 'transparent',
        'vira-tag-background-color': 'transparent',
        'vira-tag-border-color': 'transparent',

        'vira-tag-hover-text-color': 'transparent',
        'vira-tag-hover-background-color': 'transparent',
        'vira-tag-hover-border-color': 'transparent',

        'vira-tag-active-text-color': 'transparent',
        'vira-tag-active-background-color': 'transparent',
        'vira-tag-active-border-color': 'transparent',

        'vira-tag-disabled-text-color':
            viraTheme.colors['vira-grey-behind-bg-decoration'].foreground.value,
        'vira-tag-disabled-background-color':
            viraTheme.colors['vira-grey-behind-bg-decoration'].background.value,
        'vira-tag-disabled-border-color':
            viraTheme.colors['vira-grey-behind-bg-decoration'].background.value,

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

        ...arrayToObject(
            getObjectTypedKeys(viraColorVariantToHostClassKey),
            (colorVariant) => {
                const colorKey = viraColorVariantToHostClassKey[colorVariant];
                return {
                    key: `vira-tag-color-${colorKey}` as const,
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
        'vira-tag-color-plain': ({
            inputs,
        }: {
            inputs: Readonly<PartialWithUndefined<{color: ViraColorVariant | ViraThemeColorName}>>;
        }) => !inputs.color || inputs.color === ViraColorVariant.Plain,
        'vira-tag-color-neutral': ({
            inputs,
        }: {
            inputs: Readonly<PartialWithUndefined<{color: ViraColorVariant | ViraThemeColorName}>>;
        }) => inputs.color === ViraColorVariant.Neutral,
        ...arrayToObject(
            standaloneThemeColorNames,
            (colorName) => {
                return {
                    key: `vira-tag-color-${colorName}` as const,
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
    },
    styles: ({cssVars, hostClasses}) => {
        function buildVariantCssRule(
            variantSelector: CSSResult,
            emphasisSelector: CSSResult,
            colors: TagColorStateColors,
        ): CSSResult {
            return css`
                ${variantSelector}${emphasisSelector} {
                    ${cssVars['vira-tag-background-color'].name}: ${colors.idle.backgroundColor
                        .value};
                    ${cssVars['vira-tag-text-color'].name}: ${colors.idle.textColor.value};
                    ${cssVars['vira-tag-border-color'].name}: ${colors.idle.borderColor.value};

                    ${cssVars['vira-tag-hover-background-color'].name}: ${colors.hover
                        .backgroundColor.value};
                    ${cssVars['vira-tag-hover-text-color'].name}: ${colors.hover.textColor.value};
                    ${cssVars['vira-tag-hover-border-color'].name}: ${colors.hover.borderColor
                        .value};

                    ${cssVars['vira-tag-active-background-color'].name}: ${colors.active
                        .backgroundColor.value};
                    ${cssVars['vira-tag-active-text-color'].name}: ${colors.active.textColor.value};
                    ${cssVars['vira-tag-active-border-color'].name}: ${colors.active.borderColor
                        .value};
                }
            `;
        }

        function generateVariantCss(): CSSResult {
            const allStyles = viraEmphasisVariants.flatMap((emphasis) => {
                const emphasisSelector = hostClasses[`vira-tag-emphasis-${emphasis}`].selector;
                const themedStyles = getObjectTypedKeys(viraColorVariantToHostClassKey).map(
                    (colorVariant) => {
                        const colorKey = viraColorVariantToHostClassKey[colorVariant];
                        const colors = buildThemedTagColors(colorKey)[emphasis];
                        const variantSelector = hostClasses[`vira-tag-color-${colorKey}`].selector;
                        return buildVariantCssRule(variantSelector, emphasisSelector, colors);
                    },
                );
                const plainStyle = buildVariantCssRule(
                    hostClasses['vira-tag-color-plain'].selector,
                    emphasisSelector,
                    plainTagColors[emphasis],
                );
                const neutralStyle = buildVariantCssRule(
                    hostClasses['vira-tag-color-neutral'].selector,
                    emphasisSelector,
                    buildThemedTagColors(ViraThemeColorName.grey)[emphasis],
                );
                const standaloneStyles = standaloneThemeColorNames.map((colorName) => {
                    const colors = buildThemedTagColors(colorName)[emphasis];
                    const variantSelector = hostClasses[`vira-tag-color-${colorName}`].selector;
                    return buildVariantCssRule(variantSelector, emphasisSelector, colors);
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

        function buildNotCheckedCssRule(
            variantSelector: CSSResult,
            colors: TagColorStateColors,
        ): CSSResult {
            const notCheckedSelector = hostClasses['vira-tag-not-checked'].selector;
            return css`
                ${variantSelector}${notCheckedSelector}${notCheckedSelector}${notCheckedSelector} {
                    ${cssVars['vira-tag-background-color'].name}: ${colors.idle.backgroundColor
                        .value};
                    ${cssVars['vira-tag-text-color'].name}: ${colors.idle.textColor.value};
                    ${cssVars['vira-tag-border-color'].name}: ${colors.idle.borderColor.value};

                    ${cssVars['vira-tag-hover-background-color'].name}: ${colors.hover
                        .backgroundColor.value};
                    ${cssVars['vira-tag-hover-text-color'].name}: ${colors.hover.textColor.value};
                    ${cssVars['vira-tag-hover-border-color'].name}: ${colors.hover.borderColor
                        .value};

                    ${cssVars['vira-tag-active-background-color'].name}: ${colors.active
                        .backgroundColor.value};
                    ${cssVars['vira-tag-active-text-color'].name}: ${colors.active.textColor.value};
                    ${cssVars['vira-tag-active-border-color'].name}: ${colors.active.borderColor
                        .value};
                }
            `;
        }

        function generateNotCheckedCss(): CSSResult {
            const themedStyles = getObjectTypedKeys(viraColorVariantToHostClassKey).map(
                (colorVariant) => {
                    const colorKey = viraColorVariantToHostClassKey[colorVariant];
                    const colors = buildThemedNotCheckedColors(colorKey);
                    const variantSelector = hostClasses[`vira-tag-color-${colorKey}`].selector;
                    return buildNotCheckedCssRule(variantSelector, colors);
                },
            );
            const plainStyle = buildNotCheckedCssRule(
                hostClasses['vira-tag-color-plain'].selector,
                plainNotCheckedColors,
            );
            const neutralStyle = buildNotCheckedCssRule(
                hostClasses['vira-tag-color-neutral'].selector,
                buildThemedNotCheckedColors(ViraThemeColorName.grey),
            );
            const standaloneStyles = standaloneThemeColorNames.map((colorName) => {
                const colors = buildThemedNotCheckedColors(colorName);
                const variantSelector = hostClasses[`vira-tag-color-${colorName}`].selector;
                return buildNotCheckedCssRule(variantSelector, colors);
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

        function generateSizeVariantCss(): CSSResult {
            const styles = viraSizeVariants.map((sizeVariant) => {
                return css`
                    ${hostClasses[`vira-tag-size-${sizeVariant}`].selector} button {
                        height: ${viraSizeHeights[sizeVariant]}px;
                        font-size: ${viraFormCssVars[`vira-form-${sizeVariant}-text-size`].value};
                    }
                `;
            });

            return unsafeCSS(styles.join('\n'));
        }

        return css`
            :host {
                display: inline-flex;
            }

            ${generateSizeVariantCss()}
            ${generateVariantCss()}
            ${generateNotCheckedCss()}

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
                border-color: ${cssVars['vira-tag-border-color'].value};
                color: ${cssVars['vira-tag-text-color'].value};
                background-color: ${cssVars['vira-tag-background-color'].value};
                box-sizing: border-box;
                padding: 0 ${cssVars['vira-tag-horizontal-padding'].value};

                &[disabled] {
                    cursor: default;
                    pointer-events: none;
                }
            }

            button:hover {
                background-color: ${cssVars['vira-tag-hover-background-color'].value};
                color: ${cssVars['vira-tag-hover-text-color'].value};
                border-color: ${cssVars['vira-tag-hover-border-color'].value};
            }

            button:active {
                background-color: ${cssVars['vira-tag-active-background-color'].value};
                color: ${cssVars['vira-tag-active-text-color'].value};
                border-color: ${cssVars['vira-tag-active-border-color'].value};
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

            ${hostClasses['vira-tag-selectable'].selector} {
                & button {
                    padding: 0 calc(${cssVars['vira-tag-horizontal-padding'].value} + 5px);
                    margin-left: calc(4px + ${cssVars['vira-tag-gap'].value});
                }
            }
            ${hostClasses['vira-tag-checked'].selector} {
                & button {
                    padding: 0 ${cssVars['vira-tag-horizontal-padding'].value};
                    margin-left: 0;
                }

                & .selected-check {
                    display: flex;
                    visibility: visible;
                }
            }

            ${hostClasses['vira-tag-cancellable'].selector} .cancel-x {
                display: flex;
            }

            ${hostClasses['vira-tag-size-small'].selector} {
                ${cssVars['vira-tag-gap'].name}: 4px;
                ${cssVars['vira-tag-horizontal-padding'].name}: 8px;
            }

            ${hostClasses['vira-tag-size-large'].selector} {
                ${cssVars['vira-tag-horizontal-padding'].name}: 16px;
            }

            ${hostClasses['vira-tag-disabled'].selector} {
                cursor: not-allowed;
                ${noUserSelect}

                & button {
                    color: ${cssVars['vira-tag-disabled-text-color'].value};
                    background-color: ${cssVars['vira-tag-disabled-background-color'].value};
                    border-color: ${cssVars['vira-tag-disabled-border-color'].value};
                }
            }
        `;
    },
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
