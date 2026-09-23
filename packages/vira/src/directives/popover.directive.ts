import {assertWrap} from '@augment-vir/assert';
import {assertIsElementPartInfo, AsyncDirective, directive, type PartInfo} from 'element-vir';
import {type PopoverManager, type PopoverOptions} from '../util/popover-manager.js';

const directiveName = 'popover';

/**
 * The directive class behind {@link popover}.
 *
 * @category Internal
 */
export class PopoverDirective extends AsyncDirective {
    protected popoverManager: PopoverManager | undefined;

    constructor(partInfo: PartInfo) {
        super(partInfo);
        assertIsElementPartInfo(partInfo, directiveName);
    }

    /** Applies the latest directive arguments. */
    public override update(
        partInfo: PartInfo,
        [
            popoverManager,
            options,
        ]: [
            PopoverManager,
            Readonly<PopoverOptions>,
        ],
    ) {
        assertIsElementPartInfo(partInfo, directiveName);

        if (popoverManager !== this.popoverManager) {
            this.popoverManager?.destroy();
            this.popoverManager = popoverManager;
        }
        popoverManager.update(assertWrap.instanceOf(partInfo.element, HTMLElement), options);

        return this.render(popoverManager, options);
    }

    /** Renders nothing, this directive only attaches behavior to its element. */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public override render(popoverManager: PopoverManager, options: Readonly<PopoverOptions>) {
        return undefined;
    }

    protected override disconnected() {
        this.popoverManager?.close();
    }

    /** Re-opens a popover that `trigger` forces open. */
    protected override reconnected() {
        this.popoverManager?.applyForcedState();
    }
}

/**
 * Connects a {@link PopoverManager} to the element that this directive is attached to, so that the
 * manager's popover opens anchored to that element.
 *
 * @category Popover
 * @category Directives
 */
export const popover = directive(PopoverDirective);
