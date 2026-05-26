/**
 * Creates an observer that monitors whether an element's content overflows its visible width. Uses
 * a ResizeObserver for size changes and a MutationObserver for DOM content changes.
 *
 * @returns A cleanup function that disconnects all observers.
 */
export function createOverflowObserver({
    element,
    widthElement,
    onChange,
    hysteresisPx = 0,
}: Readonly<{
    /** The element whose `scrollWidth` is measured for content size. */
    element: Element;
    /**
     * Optional separate element whose `clientWidth` is used as the available width. Defaults to
     * `element`. Useful when `element` may be collapsed but the available width should come from a
     * parent.
     */
    widthElement?: Element | undefined;
    onChange: (isOverflowing: boolean) => void;
    /**
     * Pixel margin required to flip the overflow state. Once overflowing, the content must fit
     * within `availableWidth - hysteresisPx` to flip back; once not overflowing, the content must
     * exceed `availableWidth + hysteresisPx` to flip on. Prevents rapid toggling from minute size
     * changes.
     */
    hysteresisPx?: number | undefined;
}>): () => void {
    const availableWidthElement = widthElement || element;
    let isOverflowing = false;

    function checkOverflow() {
        const contentWidth = element.scrollWidth;
        const availableWidth = availableWidthElement.clientWidth;
        const threshold = isOverflowing ? -hysteresisPx : hysteresisPx;
        const nextOverflowing = contentWidth > availableWidth + threshold;

        if (nextOverflowing !== isOverflowing) {
            isOverflowing = nextOverflowing;
            onChange(isOverflowing);
        }
    }

    const resizeObserver = new ResizeObserver(checkOverflow);
    resizeObserver.observe(element);

    if (availableWidthElement !== element) {
        resizeObserver.observe(availableWidthElement);
    }

    const mutationObserver = new MutationObserver(checkOverflow);
    mutationObserver.observe(element, {
        childList: true,
        subtree: true,
        characterData: true,
    });

    checkOverflow();

    return () => {
        resizeObserver.disconnect();
        mutationObserver.disconnect();
    };
}
