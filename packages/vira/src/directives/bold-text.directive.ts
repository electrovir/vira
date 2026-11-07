import {css, html, type HtmlInterpolation} from 'element-vir';
import {viraFontCssVars} from '../styles/font.js';

const hiddenCopyStyles = css`
    visibility: hidden;
    pointer-events: none;
`;

/**
 * Same as `ViraBoldText` but for any template, not just a string: `content` always takes up its
 * bold width, so toggling `isBold` never shifts the layout around it. `content` is rendered twice,
 * so any template in it is instantiated twice.
 *
 * @category Directives
 */
export function boldText({
    content,
    isBold,
}: Readonly<{
    content: HtmlInterpolation;
    isBold: boolean;
}>) {
    return html`
        <span
            style=${css`
                display: inline-grid;
                vertical-align: top;
            `}
        >
            <span
                aria-hidden=${isBold ? 'false' : 'true'}
                style=${css`
                    grid-area: 1 / 1;
                    display: flex;
                    font-weight: ${viraFontCssVars['vira-font-weight-bold'].value};
                    ${isBold ? css`` : hiddenCopyStyles}
                `}
            >
                ${content}
            </span>
            <span
                aria-hidden=${isBold ? 'true' : 'false'}
                style=${css`
                    grid-area: 1 / 1;
                    display: flex;
                    ${isBold ? hiddenCopyStyles : css``}
                `}
            >
                ${content}
            </span>
        </span>
    `;
}
