import {type ViraIconSvg} from './icon-svg.js';

/**
 * Wraps an existing icon with explicit dimensions and outputs another icon that can be used
 * anywhere the original icon can be used.
 *
 * @category Icon
 */
export function createSizedIcon(icon: Readonly<ViraIconSvg>, size: number): ViraIconSvg {
    return {
        ...icon,
        size,
    };
}
