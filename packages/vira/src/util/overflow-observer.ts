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
}>): () => void {
    const availableWidthElement = widthElement || element;

    function checkOverflow() {
        onChange(element.scrollWidth > availableWidthElement.clientWidth);
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
