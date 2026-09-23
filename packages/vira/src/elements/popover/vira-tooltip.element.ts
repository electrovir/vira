import {colorCss} from '@electrovir/color';
import {css, html} from 'element-vir';
import {listenTo} from 'typed-event-target';
import {viraFormCssVars} from '../../styles/form-styles.js';
import {viraTheme} from '../../styles/vira-color-theme.js';
import {createAnchoredPopoverStyles} from '../../util/anchored-popover.js';
import {defineViraElement} from '../../util/define-vira-element.js';

/**
 * Centered with insets instead of `position-area`, because browsers shift a centered
 * `position-area` box back onto the screen rather than moving on to the next
 * `position-try-fallbacks` entry. These insets leave a space that is centered on the anchor and as
 * wide as possible, and `unsafe` stops the browser from shifting the tooltip, so a tooltip wider
 * than that space overflows it and moves on to an aligned fallback. Each `anchor(center)` is
 * measured from the side its inset is on, so the same formula works for `left` and `right`.
 */
const centeredStyles = css`
    position-area: none;
    top: 0;
    bottom: anchor(top);
    left: max(0px, 2 * anchor(center) - 100%);
    right: max(0px, 2 * anchor(center) - 100%);
    align-self: end;
    justify-self: unsafe center;
`;

/** `unsafe` for the same reason as {@link centeredStyles}. */
const leftAlignedStyles = css`
    position-area: block-start span-inline-end;
    inset: auto;
    align-self: normal;
    justify-self: unsafe start;
`;

/** `unsafe` for the same reason as {@link centeredStyles}. */
const rightAlignedStyles = css`
    position-area: block-start span-inline-start;
    inset: auto;
    align-self: normal;
    justify-self: unsafe end;
`;

/**
 * Centered but shifted to stay on the screen. For a tooltip that fits on neither side of the
 * anchor.
 */
const shiftedStyles = css`
    position-area: block-start span-all;
    inset: auto;
    align-self: normal;
    justify-self: anchor-center;
`;

/**
 * The popover rendered by the `tooltip` directive. The element itself is the popover, centered
 * above `anchor` when there's room. Its children are the tooltip contents.
 *
 * @category Popover
 * @category Elements
 */
export const ViraTooltip = defineViraElement<{
    anchor: HTMLElement;
}>()({
    tagName: 'vira-tooltip',
    styles: css`
        ${createAnchoredPopoverStyles({
            fallbacks: [
                {
                    name: 'vira-tooltip-above-left-aligned',
                    styles: leftAlignedStyles,
                },
                {
                    name: 'vira-tooltip-above-right-aligned',
                    styles: rightAlignedStyles,
                },
                {
                    name: 'vira-tooltip-below-centered',
                    styles: centeredStyles,
                    flipBlock: true,
                },
                {
                    name: 'vira-tooltip-below-left-aligned',
                    styles: leftAlignedStyles,
                    flipBlock: true,
                },
                {
                    name: 'vira-tooltip-below-right-aligned',
                    styles: rightAlignedStyles,
                    flipBlock: true,
                },
                {
                    name: 'vira-tooltip-above-shifted',
                    styles: shiftedStyles,
                },
                {
                    name: 'vira-tooltip-below-shifted',
                    styles: shiftedStyles,
                    flipBlock: true,
                },
            ],
        })}

        :host {
            anchor-name: --vira-tooltip;
            ${colorCss(viraTheme.colors['vira-grey-behind-bg-highest-contrast'])};
            ${centeredStyles}
            margin-bottom: 7px;
            padding: 4px 8px;
            border-radius: 6px;
            box-sizing: border-box;
            width: max-content;
            /*
                Not 100%, which is the width of the current position-area. A tooltip limited to that
                width shrinks to fit it rather than overflowing onto the next fallback.
            */
            max-width: min(300px, 100vw);
            font-size: ${viraFormCssVars['vira-form-small-text-size'].value};
            overflow-wrap: break-word;
            pointer-events: none;
        }

        /*
            Separate popovers rather than children or pseudo-elements of the tooltip, because those can't
            use anchor() to reach the anchor element from inside the tooltip's top-layer box.
        */
        .caret {
            position: fixed;
            inset: auto;
            margin: 0;
            padding: 0;
            border: none;
            height: auto;
            width: 10px;
            left: calc(anchor(center) - 5px);
            background-color: ${viraTheme.colors['vira-grey-behind-bg-highest-contrast'].background
                .value};
            pointer-events: none;
        }

        /*
            Each caret spans the gap between the tooltip and the anchor on its own side, so the caret
            on the side without the tooltip gets a negative height, which renders as nothing. This
            follows the tooltip's position-try-fallbacks choice without knowing which one won.
        */
        .caret-down {
            top: anchor(--vira-tooltip bottom);
            bottom: calc(anchor(top) + 2px);
            clip-path: polygon(0 0, 100% 0, 50% 100%);
        }

        .caret-up {
            bottom: anchor(--vira-tooltip top);
            top: calc(anchor(bottom) + 2px);
            clip-path: polygon(50% 0, 100% 100%, 0 100%);
        }
    `,
    init({host}) {
        /** The carets must open after the tooltip so they can anchor to it. */
        listenTo(host, 'toggle', () => {
            if (!host.matches(':popover-open')) {
                return;
            }

            host.shadowRoot.querySelectorAll('.caret').forEach((caret) => {
                if (caret instanceof HTMLElement && !caret.matches(':popover-open')) {
                    caret.showPopover({
                        source: host.instanceInputs.anchor,
                    });
                }
            });
        });
    },
    render() {
        return html`
            <slot></slot>
            <div class="caret caret-down" popover="manual"></div>
            <div class="caret caret-up" popover="manual"></div>
        `;
    },
});
