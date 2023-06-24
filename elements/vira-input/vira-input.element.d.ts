import { ViraIconSvg } from '../../icons';
export declare const ViraInput: import("element-vir").DeclarativeElementDefinition<"vira-input", {
    icon?: undefined | Pick<ViraIconSvg, 'svgTemplate'>;
    value: string;
    /** Shown when no other text is present. Input restrictions do not apply to this property. */
    placeholder?: string;
    /** Set to true to trigger disabled styles and to block all user input. */
    disabled?: boolean;
    /**
     * Only letters in the given string or matches to the given RegExp will be allowed.
     * blockedInputs takes precedence over this input.
     *
     * For example: if allowedInputs is set to "abcd" and blockedInputs is set to "d", only "a",
     * "b", or "c" letters will be allowed.
     */
    allowedInputs?: string | RegExp;
    /** Any letters in the given string or matches to the given RegExp will be blocked. */
    blockedInputs?: string | RegExp;
    /** Disable all browser helps like spellchecking, autocomplete, etc. */
    disableBrowserHelps?: boolean;
    /** A suffix that, if provided, is shown following the user input field. */
    suffix?: string;
    /** Set this to true to make the whole element size to only fit the input text. */
    fitText?: boolean;
}, {
    forcedInputWidth: number;
}, {
    /**
     * Fires whenever a user input created a new value. Does not fire if all input letters are
     * filtered out due to input restrictions.
     */
    valueChange: import("element-vir").DefinedTypedEventNameDefinition<string>;
    /**
     * Fires when inputs are blocked. Useful for showing warnings or error messages to inform
     * the user why their input did not propagate if it was blocked. This does not fire for text
     * that was blocked out of programmatic "value" property assignments.
     */
    inputBlocked: import("element-vir").DefinedTypedEventNameDefinition<string>;
}, "vira-input-disabled" | "vira-input-has-value" | "vira-input-fit-text", "vira-input-placeholder-color" | "vira-input-text-color" | "vira-input-border-color" | "vira-input-focus-border-color" | "vira-input-text-selection-color" | "vira-input-padding-horizontal" | "vira-input-padding-vertical", import("lit-html").HTMLTemplateResult>;
