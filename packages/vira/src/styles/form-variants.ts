/** All available variants for controlling vira form colors. */
export enum ViraColor {
    /**
     * This is the default.
     *
     * @default blue colored
     */
    Accent = 'accent',
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
     * No color variant styles applied at all. All related CSS vars are free to customize to your
     * wishes.
     */
    None = 'none',
}

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
    /** No size styles applied at all. All related CSS vars are free to customize to your wishes. */
    None = 'none',
}
/**
 * All available variants for controlling vira form emphasis.
 *
 * @category Internal
 */
export enum ViraEmphasis {
    /** This is the default. */
    Standard = 'standard',
    Subtle = 'subtle',
    /** No emphasis styles applied at all. All related CSS vars are free to customize to your wishes. */
    None = 'none',
}
