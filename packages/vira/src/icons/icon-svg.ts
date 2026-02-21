import {type TemplateResult} from 'element-vir';

/**
 * An individual Vira icon SVG definition.
 *
 * @category Icon
 */
export type ViraIconSvg = {
    name: string;
    svgTemplate: TemplateResult;
};

/**
 * A function used to define an individual Vira icon SVG.
 *
 * @category Icon
 */
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
