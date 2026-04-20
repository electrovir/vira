import {check} from '@augment-vir/assert';
import {type ArrayElement, getObjectTypedValues} from '@augment-vir/common';
import {ViraThemeColorName} from './vira-color-theme-object.js';

/**
 * All available variants for controlling vira form colors.
 *
 * @category Internal
 */
export enum ViraColorVariant {
    /** @default blue colored */
    Info = 'info',
    /**
     * Applied when no `color` input is set on a color-aware element.
     *
     * @default black colored
     */
    Plain = 'plain',
    /** @default grey colored */
    Neutral = 'neutral',
    /** @default red colored */
    Danger = 'danger',
    /** @default orange colored */
    Warning = 'warning',
    /** @default green colored */
    Positive = 'positive',
    /** @default brand colored */
    Brand = 'brand',
    /** @default purple colored */
    Special = 'special',
    /**
     * No color variant styles will be applied at all, allowing the element's colors to be fully
     * customized via its CSS vars.
     */
    Custom = 'custom',
}

/**
 * All defined color variants starting with the default.
 *
 * @category Internal
 */
export const viraColorVariants = [
    ViraColorVariant.Info,
    ViraColorVariant.Plain,
    ViraColorVariant.Neutral,
    ViraColorVariant.Danger,
    ViraColorVariant.Warning,
    ViraColorVariant.Positive,
    ViraColorVariant.Brand,
    ViraColorVariant.Special,
] as const;

/**
 * Maps themed {@link ViraColorVariant} members to the {@link ViraThemeColorName} used as their host
 * class suffix on color-aware elements (`vira-*-color-${themeColor}`). `Plain` and `Neutral` are
 * intentionally omitted: they are always special-cased by each element so their host classes stay
 * distinct from any theme color class (including `grey`).
 *
 * @category Internal
 */
export const viraColorVariantToHostClassKey = {
    [ViraColorVariant.Info]: ViraThemeColorName.blue,
    [ViraColorVariant.Danger]: ViraThemeColorName.red,
    [ViraColorVariant.Warning]: ViraThemeColorName.yellow,
    [ViraColorVariant.Positive]: ViraThemeColorName.green,
    [ViraColorVariant.Brand]: ViraThemeColorName.brand,
    [ViraColorVariant.Special]: ViraThemeColorName.purple,
} as const satisfies Partial<Record<ArrayElement<typeof viraColorVariants>, ViraThemeColorName>>;

/**
 * {@link ViraThemeColorName} values that have no corresponding themed {@link ViraColorVariant} in
 * {@link viraColorVariantToHostClassKey}. Color-aware elements generate a standalone host class for
 * each so every {@link ViraThemeColorName} (including `grey`) can be passed as a `color` input.
 *
 * @category Internal
 */
export const standaloneThemeColorNames = getObjectTypedValues(ViraThemeColorName).filter(
    (colorName) => !check.hasValue(getObjectTypedValues(viraColorVariantToHostClassKey), colorName),
);

/**
 * All available variants for controlling vira form sizes.
 *
 * @category Internal
 */
export enum ViraSize {
    /** @default 40px tall */
    Large = 'large',
    /**
     * This is the default.
     *
     * @default 32px tall
     */
    Medium = 'medium',
    /** @default 24px tall */
    Small = 'small',
    /**
     * No size styles will be applied at all. All related CSS vars are free to customize to your
     * wishes.
     */
    None = 'none',
}

/**
 * All defined size variants starting with the default.
 *
 * @category Internal
 */
export const viraSizeVariants = [
    ViraSize.Small,
    ViraSize.Medium,
    ViraSize.Large,
] as const;

/**
 * All available variants for controlling vira form emphasis.
 *
 * @category Internal
 */
export enum ViraEmphasis {
    /** This is the default. */
    Standard = 'standard',
    Subtle = 'subtle',
    /**
     * No emphasis styles will be applied at all. All related CSS vars are free to customize to your
     * wishes.
     */
    None = 'none',
}

/**
 * All defined emphasis variants starting with the default.
 *
 * @category Internal
 */
export const viraEmphasisVariants = [
    ViraEmphasis.Standard,
    ViraEmphasis.Subtle,
] as const;

/**
 * Default heights for {@link ViraSize} values.
 *
 * @category Internal
 */
export const viraSizeHeights: Record<Exclude<ViraSize, ViraSize.None>, number> = {
    [ViraSize.Large]: 40,
    [ViraSize.Medium]: 32,
    [ViraSize.Small]: 24,
};
