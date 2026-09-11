/* node:coverage disable */

import {type RequireAtLeastOne} from '@augment-vir/common';
import {type Color} from '@electrovir/color/dist/data/color-class/color.js';
import {css, defineElement, html, unsafeCSS} from 'element-vir';

/**
 * Show a background and/or foreground color. Note that if a foreground color is provided that it is
 * not actually applied to anything, you must provide a child element for it to be applied to.
 *
 * @category Elements
 */
export const ViraColorSwatch = defineElement<
    RequireAtLeastOne<{
        foregroundColor: string | Readonly<Color>;
        backgroundColor: string | Readonly<Color>;
    }>
>()({
    tagName: 'vira-color-swatch',
    styles: css`
        :host {
            display: flex;
            height: 400px;
            width: 400px;
            border: 1px solid black;
            max-height: 100%;
            max-width: 100%;
            container-type: size;
            overflow: hidden;
        }

        div {
            flex-grow: 1;
            height: 100%;
            max-height: 100%;
            width: 100%;
            max-width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    `,
    render({inputs}) {
        const backgroundColor = inputs.backgroundColor || inputs.foregroundColor;
        const foregroundColor = inputs.foregroundColor || 'transparent';

        return html`
            <div
                style=${css`
                    background-color: ${unsafeCSS(backgroundColor)};
                    color: ${unsafeCSS(foregroundColor)};
                `}
            >
                <slot></slot>
            </div>
        `;
    },
});
