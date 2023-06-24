import { ViraIconSvg } from '../../icons/icon-svg';
export declare const ViraIcon: import("element-vir").DeclarativeElementDefinition<"vira-icon", {
    icon: Pick<ViraIconSvg, 'svgTemplate'> | undefined;
    /** Ignores the given icon's embedded size and causes the <svg> element to fill its parent. */
    fitContainer?: boolean | undefined;
}, {}, {}, "vira-icon-fit-container", `vira-icon-${string}`, import("lit-html").TemplateResult | "">;
