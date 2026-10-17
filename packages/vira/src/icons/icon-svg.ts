import {type TemplateResult} from 'element-vir';

/**
 * An individual Vira icon SVG definition.
 *
 * @category Icon
 */
export type ViraIconSvg<Name extends string = string> = {
    name: Name;
    /** An optionally forced icon size. */
    size?: number;
    svgTemplate: TemplateResult;
};

/**
 * A function used to define an individual Vira icon SVG.
 *
 * @category Icon
 */
export function defineIcon<const Name extends string>({
    name,
    svgTemplate,
}: {
    name: Name;
    svgTemplate: TemplateResult;
}): ViraIconSvg<Name> {
    const iconSvg: ViraIconSvg<Name> = {
        name,
        svgTemplate,
    };

    return iconSvg;
}
