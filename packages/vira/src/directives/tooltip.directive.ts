import {assertWrap} from '@augment-vir/assert';
import {type PartialWithUndefined} from '@augment-vir/common';
import {
    assertIsElementPartInfo,
    AsyncDirective,
    directive,
    type HtmlInterpolation,
    type PartInfo,
} from 'element-vir';
import {render} from 'lit';
import {listenTo} from 'typed-event-target';
import {ViraTooltip} from '../elements/popover/vira-tooltip.element.js';
import {PopoverManager, type PopoverOptions, PopoverTrigger} from '../util/popover-manager.js';

const directiveName = 'tooltip';

/**
 * Options for {@link tooltip}.
 *
 * @category Popover
 */
export type TooltipOptions = PartialWithUndefined<{
    /** Defaults to {@link PopoverTrigger.Hover}. `true` or `false` force the tooltip open or closed. */
    trigger: boolean | PopoverTrigger;
}> &
    Pick<PopoverOptions, 'delay' | 'timeout'>;

/**
 * The directive class behind {@link tooltip}.
 *
 * @category Internal
 */
export class TooltipDirective extends AsyncDirective {
    public content: HtmlInterpolation;
    /** Only exists while the tooltip is shown. */
    public tooltipElement: (typeof ViraTooltip)['InstanceType'] | undefined;
    public readonly popoverManager = new PopoverManager();

    constructor(partInfo: PartInfo) {
        super(partInfo);
        assertIsElementPartInfo(partInfo, directiveName);
    }

    /** Applies the latest directive arguments. */
    public override update(
        partInfo: PartInfo,
        [
            content,
            options,
        ]: [
            HtmlInterpolation,
            TooltipOptions?,
        ],
    ) {
        assertIsElementPartInfo(partInfo, directiveName);
        const anchor = assertWrap.instanceOf(partInfo.element, HTMLElement);

        this.content = content;

        if (this.tooltipElement) {
            render(content, this.tooltipElement);
        }

        this.popoverManager.update(anchor, {
            trigger: options?.trigger ?? PopoverTrigger.Hover,
            delay: options?.delay,
            timeout: options?.timeout,
            getPopover: () => this.createTooltipElement(anchor),
        });

        return this.render(content, options);
    }

    /** Creates a new {@link ViraTooltip} after `anchor`, replacing any previous one. */
    protected createTooltipElement(anchor: HTMLElement) {
        this.tooltipElement?.remove();
        const tooltipElement = assertWrap.instanceOf(
            document.createElement(ViraTooltip.tagName),
            ViraTooltip,
        );
        this.tooltipElement = tooltipElement;
        listenTo(tooltipElement, 'toggle', () => {
            if (!tooltipElement.matches(':popover-open')) {
                tooltipElement.remove();

                if (this.tooltipElement === tooltipElement) {
                    this.tooltipElement = undefined;
                }
            }
        });
        this.tooltipElement.assignInputs({
            anchor,
        });
        this.tooltipElement.popover = 'manual';
        this.tooltipElement.role = 'tooltip';
        /**
         * Keeps the tooltip rendered when the anchor is slotted into a named slot, where an
         * unassigned sibling would not be rendered at all.
         */
        this.tooltipElement.slot = anchor.slot;
        /** Rendered into light DOM so that the anchor's shadow root styles the contents. */
        render(this.content, this.tooltipElement);
        anchor.after(this.tooltipElement);

        return this.tooltipElement;
    }

    /** Renders nothing, this directive only attaches behavior to its element. */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public override render(content: HtmlInterpolation, options?: TooltipOptions) {
        return undefined;
    }

    protected override disconnected() {
        this.popoverManager.close();
    }

    /** Re-opens a popover that `trigger` forces open. */
    protected override reconnected() {
        this.popoverManager.applyForcedState();
    }
}

/**
 * Shows a {@link ViraTooltip} with the given contents while the element that this directive is
 * attached to is hovered or focused, or as `options.trigger` describes. The tooltip is centered
 * above the element when it fits, otherwise it is aligned to the element's left or right edge, and
 * it flips below the element when there's no room above. The tooltip is inserted right after the
 * element, so styles from the element's shadow root apply to template contents.
 *
 * @category Popover
 * @category Directives
 * @example
 *
 * ```ts
 * import {html} from 'element-vir';
 * import {tooltip} from 'vira';
 *
 * html`
 *     <button ${tooltip('Mark as resolved')}>Resolve</button>
 * `;
 * ```
 */
export const tooltip = directive(TooltipDirective);
