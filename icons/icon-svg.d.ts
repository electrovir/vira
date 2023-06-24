import { TemplateResult } from 'element-vir';
export type ViraIconSvg = {
    name: string;
    svgTemplate: TemplateResult;
};
export declare function defineIcon({ name, svgTemplate, }: {
    name: string;
    svgTemplate: TemplateResult;
}): ViraIconSvg;
