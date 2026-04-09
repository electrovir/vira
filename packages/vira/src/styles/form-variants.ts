import {ViraThemeColorName} from './vira-color-theme-object.js';

/**
 * All available variants for controlling vira form colors.
 *
 * @category Internal
 */
export enum ViraColorVariant {
    /**
     * This is the default.
     *
     * @default blue colored
     */
    Info = 'info',
    /** @default black colored */
    Plain = 'plain',
    /** @default grey colored */
    Neutral = 'neutral',
    /** @default red colored */
    Danger = 'danger',
    /** @default orange colored */
    Warning = 'warning',
    /** @default green colored */
    Positive = 'positive',
    /**
     * No color variant styles will be applied at all. All related CSS vars are free to customize to
     * your wishes.
     */
    None = 'none',
}

/**
 * Maps {@link ViraColorVariant} values that support colors to their respective vira theme color
 * keys.
 *
 * @category Internal
 */
export const viraColorVariantToColorName: Record<ViraColorVariant, ViraThemeColorName> = {
    [ViraColorVariant.Info]: ViraThemeColorName.blue,
    [ViraColorVariant.Neutral]: ViraThemeColorName.grey,
    [ViraColorVariant.Danger]: ViraThemeColorName.red,
    [ViraColorVariant.Warning]: ViraThemeColorName.yellow,
    [ViraColorVariant.Positive]: ViraThemeColorName.green,
    [ViraColorVariant.Plain]: ViraThemeColorName.grey,
    [ViraColorVariant.None]: ViraThemeColorName.grey,
};

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
] as const;

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
