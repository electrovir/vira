import {assertWrap} from '@augment-vir/assert';
import {assertIsElementPartInfo, directive, Directive, type PartInfo} from 'element-vir';
import {type DragReorderManager, type DragReorderMove} from '../util/drag-reorder-manager.js';

/**
 * The directive class behind {@link dragReorderHandle}.
 *
 * @category Internal
 */
export class DragReorderHandleDirective extends Directive {
    protected manager: DragReorderManager | undefined;
    protected element: HTMLElement | undefined;

    constructor(partInfo: PartInfo) {
        super(partInfo);
        assertIsElementPartInfo(partInfo, 'dragReorderHandle');
    }

    /** Applies the latest directive arguments. */
    public override update(partInfo: PartInfo, [manager]: [DragReorderManager]) {
        assertIsElementPartInfo(partInfo, 'dragReorderHandle');
        this.manager = manager;
        const element = assertWrap.instanceOf(partInfo.element, HTMLElement);
        if (element !== this.element) {
            this.element = element;
            element.draggable = true;
            element.addEventListener('dragstart', (event) => {
                this.manager?.startDrag(event, element);
            });
            element.addEventListener('dragend', () => this.manager?.endDrag());
        }

        return this.render(manager);
    }

    /** Renders nothing, this directive only attaches behavior to its element. */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public override render(manager: DragReorderManager) {
        return undefined;
    }
}

/**
 * Makes the element it is attached to start dragging the row that contains it. That row must be a
 * direct child of the element that `dragReorderRows` with the same manager is attached to.
 *
 * @category Reorder
 */
export const dragReorderHandle = directive(DragReorderHandleDirective);

/**
 * The directive class behind {@link dragReorderRows}.
 *
 * @category Internal
 */
export class DragReorderRowsDirective extends Directive {
    protected manager: DragReorderManager | undefined;
    protected element: HTMLElement | undefined;

    constructor(partInfo: PartInfo) {
        super(partInfo);
        assertIsElementPartInfo(partInfo, 'dragReorderRows');
    }

    /** Applies the latest directive arguments. */
    public override update(
        partInfo: PartInfo,
        [
            manager,
            onReorder,
        ]: [
            DragReorderManager,
            (move: Readonly<DragReorderMove>) => void,
        ],
    ) {
        assertIsElementPartInfo(partInfo, 'dragReorderRows');
        this.manager = manager;
        const element = assertWrap.instanceOf(partInfo.element, HTMLElement);
        manager.attachRows(element, onReorder);
        if (element !== this.element) {
            this.element = element;
            element.addEventListener('dragover', (event) => this.manager?.dragOver(event));
            element.addEventListener('drop', (event) => this.manager?.drop(event));
        }

        return this.render(manager, onReorder);
    }

    /** Renders nothing, this directive only attaches behavior to its element. */
    public override render(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        manager: DragReorderManager,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onReorder: (move: Readonly<DragReorderMove>) => void,
    ) {
        return undefined;
    }
}

/**
 * Marks the element whose direct children are the reorderable rows, and receives every finished
 * {@link DragReorderMove}. Indexes count those children, so render nothing (not an empty wrapper)
 * for rows that should not take part.
 *
 * @category Reorder
 */
export const dragReorderRows = directive(DragReorderRowsDirective);

/**
 * The directive class behind {@link dragReorderGhost}.
 *
 * @category Internal
 */
export class DragReorderGhostDirective extends Directive {
    constructor(partInfo: PartInfo) {
        super(partInfo);
        assertIsElementPartInfo(partInfo, 'dragReorderGhost');
    }

    /** Applies the latest directive arguments. */
    public override update(partInfo: PartInfo, [manager]: [DragReorderManager]) {
        assertIsElementPartInfo(partInfo, 'dragReorderGhost');
        manager.attachGhost(assertWrap.instanceOf(partInfo.element, HTMLElement));

        return this.render(manager);
    }

    /** Renders nothing, this directive only attaches behavior to its element. */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public override render(manager: DragReorderManager) {
        return undefined;
    }
}

/**
 * Turns the element it is attached to into the translucent copy of the dragged row: it is
 * absolutely positioned over the dragged row and then follows the pointer. Render it only while the
 * manager's `value.draggedIndex` is set, with a copy of that row inside it.
 *
 * @category Reorder
 */
export const dragReorderGhost = directive(DragReorderGhostDirective);
