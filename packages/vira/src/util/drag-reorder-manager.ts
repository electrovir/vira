import {Observable} from 'observavir';
import {listenToGlobal} from 'typed-event-target';

/**
 * A finished drag from {@link DragReorderManager}.
 *
 * @category Reorder
 */
export type DragReorderMove = {
    fromIndex: number;
    /**
     * Index, in the order before the move, of the row that the dragged row was dropped in front of.
     * Equals the row count when it was dropped after the last row.
     */
    toIndex: number;
};

/**
 * The current value of a {@link DragReorderManager}.
 *
 * @category Reorder
 */
export type DragReorderState = {
    draggedIndex: number | undefined;
    /**
     * Same meaning as {@link DragReorderMove.toIndex}. `undefined` while the pointer is where a drop
     * would not move the row.
     */
    dropIndex: number | undefined;
    rowCount: number;
    /**
     * Widths of the dragged row's direct children, so a ghost of a table row can keep the real
     * column widths. Empty while nothing is dragged.
     */
    draggedCellWidths: number[];
};

const idleState: Readonly<DragReorderState> = {
    draggedIndex: undefined,
    dropIndex: undefined,
    rowCount: 0,
    draggedCellWidths: [],
};

/**
 * The ghost row replaces the browser's own drag preview, which only shows the handle that the drag
 * started on.
 */
function setEmptyDragImage(dataTransfer: DataTransfer) {
    const emptyImage = document.createElement('div');
    emptyImage.style.position = 'fixed';
    emptyImage.style.top = '0';
    emptyImage.style.left = '0';
    emptyImage.style.width = '1px';
    emptyImage.style.height = '1px';
    emptyImage.style.pointerEvents = 'none';
    document.body.append(emptyImage);
    dataTransfer.setDragImage(emptyImage, 0, 0);
    globalThis.requestAnimationFrame(() => emptyImage.remove());
}

/**
 * Drag-to-reorder for rows that the host element renders itself, so the host keeps its own markup
 * and styles (including table rows). Store one in an element's `state` so the element re-renders as
 * the drag progresses, then attach `dragReorderRows` to the element whose direct children are the
 * rows, `dragReorderHandle` to each row's handle, and `dragReorderGhost` to a copy of the dragged
 * row rendered while `value.draggedIndex` is set. The ghost is positioned over the dragged row and
 * follows the pointer; style its opacity yourself.
 *
 * Nothing is reordered for you: apply each {@link DragReorderMove} to your own data.
 *
 * @category Reorder
 */
export class DragReorderManager extends Observable<DragReorderState> {
    protected rowsElement: HTMLElement | undefined;
    /** The callback given to `attachRows`. */
    protected onReorder: ((move: Readonly<DragReorderMove>) => void) | undefined;
    protected draggedRow: Element | undefined;
    protected ghostElement: HTMLElement | undefined;
    protected pointerStart = {
        x: 0,
        y: 0,
    };
    /** Removes the global listeners that move the ghost. Set only while a drag is in progress. */
    protected stopTrackingPointer: (() => void) | undefined;

    constructor() {
        super({
            defaultValue: idleState,
        });
    }

    /** Whether to draw the drop line above or below the row at `rowIndex`. */
    public readDropLine(rowIndex: number) {
        return {
            isAbove: this.value.dropIndex === rowIndex,
            isBelow:
                rowIndex === this.value.rowCount - 1 &&
                this.value.dropIndex === this.value.rowCount,
        };
    }

    /** Used by `dragReorderRows`. */
    public attachRows(
        rowsElement: HTMLElement,
        onReorder: (move: Readonly<DragReorderMove>) => void,
    ) {
        this.rowsElement = rowsElement;
        this.onReorder = onReorder;
    }

    /** Used by `dragReorderGhost`. */
    public attachGhost(ghostElement: HTMLElement) {
        if (ghostElement === this.ghostElement) {
            return;
        }
        this.ghostElement = ghostElement;
        ghostElement.style.position = 'absolute';
        ghostElement.style.boxSizing = 'border-box';
        ghostElement.style.margin = '0';
        ghostElement.style.pointerEvents = 'none';
        ghostElement.style.visibility = 'hidden';

        /** The ghost is not laid out until after the current render. */
        globalThis.requestAnimationFrame(() => {
            if (ghostElement !== this.ghostElement || !this.draggedRow) {
                return;
            }
            const rowRect = this.draggedRow.getBoundingClientRect();
            const translate = ghostElement.style.translate;
            ghostElement.style.translate = '';
            ghostElement.style.left = '0';
            ghostElement.style.top = '0';
            ghostElement.style.width = `${rowRect.width}px`;
            /**
             * Measuring from a zero offset works whatever the ghost's containing block is, so the
             * host does not have to position anything.
             */
            const ghostRect = ghostElement.getBoundingClientRect();
            ghostElement.style.left = `${rowRect.left - ghostRect.left}px`;
            ghostElement.style.top = `${rowRect.top - ghostRect.top}px`;
            ghostElement.style.translate = translate;
            ghostElement.style.visibility = '';
        });
    }

    /** Used by `dragReorderHandle`. */
    public startDrag(event: DragEvent, handle: Element) {
        const rows = [...(this.rowsElement?.children || [])];
        const draggedIndex = rows.findIndex((row) => row.contains(handle));
        const draggedRow = rows[draggedIndex];
        if (!draggedRow) {
            return;
        }

        this.stopTrackingPointer?.();
        this.draggedRow = draggedRow;
        this.pointerStart = {
            x: event.clientX,
            y: event.clientY,
        };

        if (event.dataTransfer) {
            event.dataTransfer.setData('text/plain', '');
            event.dataTransfer.effectAllowed = 'move';
            setEmptyDragImage(event.dataTransfer);
        }

        const stopListeners = [
            listenToGlobal('dragover', (dragEvent) => {
                /**
                 * Accepting the drop everywhere stops the browser from animating its drag preview
                 * back to the start when the pointer is released.
                 */
                dragEvent.preventDefault();
                if (this.ghostElement) {
                    this.ghostElement.style.translate = [
                        `${dragEvent.clientX - this.pointerStart.x}px`,
                        `${dragEvent.clientY - this.pointerStart.y}px`,
                    ].join(' ');
                }
            }),
            listenToGlobal('drop', (dropEvent) => dropEvent.preventDefault()),
        ];
        this.stopTrackingPointer = () => {
            stopListeners.forEach((stopListener) => stopListener());
        };

        this.setValue({
            draggedIndex,
            dropIndex: undefined,
            rowCount: rows.length,
            draggedCellWidths: [...draggedRow.children].map(
                (cell) => cell.getBoundingClientRect().width,
            ),
        });
    }

    /** Used by `dragReorderRows`. */
    public dragOver(event: DragEvent) {
        if (this.value.draggedIndex == undefined) {
            return;
        }
        event.preventDefault();
        if (event.dataTransfer) {
            event.dataTransfer.dropEffect = 'move';
        }
        const dropIndex = this.readDropIndex(event.clientY);
        if (dropIndex !== this.value.dropIndex) {
            this.setValue({
                ...this.value,
                dropIndex,
            });
        }
    }

    /** Used by `dragReorderRows`. */
    public drop(event: DragEvent) {
        if (this.value.draggedIndex == undefined) {
            return;
        }
        event.preventDefault();
        this.finishDrag(this.readDropIndex(event.clientY));
    }

    /**
     * Used by `dragReorderHandle`. A release outside the rows still lands where the drop line was
     * last drawn.
     */
    public endDrag() {
        this.finishDrag(this.value.dropIndex);
    }

    public override destroy() {
        this.stopTrackingPointer?.();
        super.destroy();
    }

    /** Counts the rows whose vertical midpoint is above the pointer. */
    protected readDropIndex(clientY: number) {
        const draggedIndex = this.value.draggedIndex;
        const dropIndex = [...(this.rowsElement?.children || [])].filter((row) => {
            const rect = row.getBoundingClientRect();
            return clientY >= rect.top + rect.height / 2;
        }).length;

        /** Dropping a row directly above or below itself would not move it. */
        return dropIndex === draggedIndex ||
            draggedIndex == undefined ||
            dropIndex === draggedIndex + 1
            ? undefined
            : dropIndex;
    }

    /** Resets to the idle state and only calls `onReorder` when `dropIndex` is defined. */
    protected finishDrag(dropIndex: number | undefined) {
        const fromIndex = this.value.draggedIndex;
        this.stopTrackingPointer?.();
        this.stopTrackingPointer = undefined;
        this.draggedRow = undefined;
        this.ghostElement = undefined;
        if (fromIndex == undefined) {
            return;
        }
        this.setValue(idleState);

        if (dropIndex != undefined) {
            this.onReorder?.({
                fromIndex,
                toIndex: dropIndex,
            });
        }
    }
}
