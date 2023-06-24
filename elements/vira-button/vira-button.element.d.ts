import { ViraIconSvg } from '../../icons';
export declare enum ViraButtonStyleEnum {
    Default = "vira-button-default",
    Outline = "vira-button-outline"
}
export declare const ViraButton: import("element-vir").DeclarativeElementDefinition<"vira-button", {
    text?: string;
    icon?: undefined | Pick<ViraIconSvg, 'svgTemplate'>;
    disabled?: boolean | undefined;
    buttonStyle?: ViraButtonStyleEnum | undefined;
}, {}, {}, "vira-button-outline-style" | "vira-button-disabled", "vira-button-primary-color" | "vira-button-primary-hover-color" | "vira-button-primary-active-color" | "vira-button-secondary-color" | "vira-button-internal-foreground-color" | "vira-button-internal-background-color" | "vira-button-padding", import("lit-html").HTMLTemplateResult>;
