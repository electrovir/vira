import {TemplateResult} from 'element-vir';

export type ViraIconSvg = {
    name: string;
    svgTemplate: TemplateResult;
};

export function defineIcon({
    name,
    svgTemplate,
}: {
    name: string;
    svgTemplate: TemplateResult;
}): ViraIconSvg {
    const iconSvg: ViraIconSvg = {
        name,
        svgTemplate,
    };

    return iconSvg;
}
