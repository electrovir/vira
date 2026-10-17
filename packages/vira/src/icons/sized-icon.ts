import {type ViraIconSvg} from './icon-svg.js';

/**
 * Wraps an existing icon with explicit dimensions and outputs another icon that can be used
 * anywhere the original icon can be used.
 *
 * @category Icon
 */
export function createSizedIcon<const Name extends string>(
    icon: Readonly<ViraIconSvg<Name>>,
    size: number,
): ViraIconSvg<Name> {
    return {
        ...icon,
        size,
    };
}
