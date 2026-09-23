import {assertWrap} from '@augment-vir/assert';
import {type PartialWithUndefined} from '@augment-vir/common';
import {classMap, css, html, listen, onResize} from 'element-vir';
import {ChevronUp16Icon} from '../../icons/index.js';
import {viraFormCssVars} from '../../styles/form-styles.js';
import {noUserSelect} from '../../styles/index.js';
import {viraShadows} from '../../styles/shadows.js';
import {defineViraElement} from '../../util/define-vira-element.js';
import {ViraIcon} from '../vira-icon.element.js';

/**
 * Possible corner styles for {@link ViraMenu}.
 *
 * @category Internal
 */
export enum ViraMenuCornerStyle {
    /** All of the menus corners should be rounded. */
    Round = 'round',
    /** None of the menus corners should be rounded. */
    Square = 'square',
}

enum ScrollDirection {
    Up = 'up',
    Down = 'down',
}

const defaultHoverScrollSpeed = 24;

function canScroll(scrollArea: Readonly<HTMLElement>, direction: ScrollDirection) {
    const remainingScroll: Record<ScrollDirection, number> = {
        [ScrollDirection.Up]: scrollArea.scrollTop,
        [ScrollDirection.Down]:
            scrollArea.scrollHeight - scrollArea.clientHeight - scrollArea.scrollTop,
    };

    /** Scroll positions can be fractional, so less than a pixel left counts as the end. */
    return remainingScroll[direction] >= 1;
}

/** Item positions relative to the top of `scrollArea`'s content. */
function getItemBounds(scrollArea: Readonly<HTMLElement>, items: ReadonlyArray<Readonly<Element>>) {
    const scrollAreaTop = scrollArea.getBoundingClientRect().top;

    return items.map((item) => {
        const rect = item.getBoundingClientRect();
        const top = rect.top - scrollAreaTop + scrollArea.scrollTop;

        return {
            top,
            bottom: top + rect.height,
        };
    });
}

/** Whether an item in `direction` is more than half scrolled out of view. */
function hasHalfHiddenItem(
    scrollArea: Readonly<HTMLElement>,
    items: ReadonlyArray<Readonly<Element>>,
    direction: ScrollDirection,
) {
    const itemBounds = getItemBounds(scrollArea, items);
    const firstItem = itemBounds[0];
    const lastItem = itemBounds.at(-1);

    if (!firstItem || !lastItem) {
        return canScroll(scrollArea, direction);
    }

    const isHalfHidden: Record<ScrollDirection, () => boolean> = {
        [ScrollDirection.Up]() {
            return (firstItem.top + firstItem.bottom) / 2 < scrollArea.scrollTop;
        },
        [ScrollDirection.Down]() {
            return (
                (lastItem.top + lastItem.bottom) / 2 >
                scrollArea.scrollTop + scrollArea.clientHeight
            );
        },
    };

    return isHalfHidden[direction]();
}

/**
 * Finds the `scrollTop` that fully reveals the next item that is cut off in `direction`, falling
 * back to the end of the scroll area when no item is cut off.
 */
function findNextItemScrollTop(
    scrollArea: Readonly<HTMLElement>,
    items: ReadonlyArray<Readonly<Element>>,
    direction: ScrollDirection,
) {
    const itemBounds = getItemBounds(scrollArea, items);
    const maxScrollTop = scrollArea.scrollHeight - scrollArea.clientHeight;

    const scrollTops: Record<ScrollDirection, () => number> = {
        [ScrollDirection.Up]() {
            const item = itemBounds.findLast((bounds) => bounds.top < scrollArea.scrollTop - 1);

            return Math.max(0, item?.top ?? 0);
        },
        [ScrollDirection.Down]() {
            const item = itemBounds.find(
                (bounds) => bounds.bottom > scrollArea.scrollTop + scrollArea.clientHeight + 1,
            );

            return Math.min(maxScrollTop, (item?.bottom ?? Infinity) - scrollArea.clientHeight);
        },
    };

    return scrollTops[direction]();
}

/**
 * Scrolls `scrollArea` one item at a time until it reaches its end or the returned callback is
 * called.
 */
function scrollByItems({
    scrollArea,
    items,
    direction,
    itemsPerSecond,
}: Readonly<{
    scrollArea: HTMLElement;
    items: ReadonlyArray<Readonly<Element>>;
    direction: ScrollDirection;
    itemsPerSecond: number;
}>) {
    function scrollOneItem() {
        scrollArea.scrollTop = findNextItemScrollTop(scrollArea, items, direction);

        if (!canScroll(scrollArea, direction)) {
            clearInterval(interval);
        }
    }

    const interval = setInterval(scrollOneItem, 1000 / itemsPerSecond);
    scrollOneItem();

    return () => {
        clearInterval(interval);
    };
}

/**
 * A simple default style wrapper for popover menus. Consider using `renderMenuItemEntries` to help
 * rendering many menu items. Like a native `<select>` menu, a menu that scrolls shows an arrow at
 * each end that has more items, and hovering an arrow scrolls towards that end.
 *
 * @category Popover
 * @category Elements
 */
export const ViraMenu = defineViraElement<
    PartialWithUndefined<{
        /** @default ViraMenuCornerStyle.Round */
        cornerStyle: ViraMenuCornerStyle;
        /**
         * How many menu items per second hovering a scroll arrow scrolls through.
         *
         * @default 24
         */
        hoverScrollSpeed: number;
    }>
>()({
    tagName: 'vira-menu',
    state() {
        return {
            canScrollUp: false,
            canScrollDown: false,
            /** Stops the scrolling that hovering a scroll arrow started. */
            stopScrolling: undefined as undefined | (() => void),
        };
    },
    cleanup({state}) {
        state.stopScrolling?.();
    },
    hostClasses: {
        'vira-menu-square'({inputs}) {
            return inputs.cornerStyle === ViraMenuCornerStyle.Square;
        },
    },
    styles({hostClasses}) {
        return css`
            :host {
                display: flex;
                flex-direction: column;
                max-width: 100%;
                max-height: 100%;
                overflow: hidden;
                z-index: 99;
                box-sizing: border-box;
                border-radius: ${viraFormCssVars['vira-form-radius'].value};
                background-color: ${viraFormCssVars['vira-form-background-color'].value};
                border: 1px solid ${viraFormCssVars['vira-form-border-color'].value};
                color: ${viraFormCssVars['vira-form-foreground-color'].value};
                ${viraShadows.menuShadow}
            }

            ${hostClasses['vira-menu-square'].selector} {
                border-radius: 0;
            }

            .scroll-area {
                min-height: 0;
                overflow-y: auto;
                overscroll-behavior: contain;
            }

            .scroll-area-content {
                display: flex;
                flex-direction: column;
            }

            .scroll-arrow {
                ${noUserSelect};
                display: flex;
                flex-shrink: 0;
                justify-content: center;
                padding: 2px 0;

                &.hidden {
                    display: none;
                }

                &.down ${ViraIcon} {
                    transform: rotate(180deg);
                }
            }
        `;
    },
    render({inputs, state, updateState, host}) {
        function getScrollArea() {
            return assertWrap.instanceOf(
                host.shadowRoot.querySelector('.scroll-area'),
                HTMLElement,
            );
        }

        function getItems() {
            return assertWrap
                .instanceOf(host.shadowRoot.querySelector('slot'), HTMLSlotElement)
                .assignedElements({
                    flatten: true,
                });
        }

        function updateScrollArrows() {
            updateState({
                canScrollUp: hasHalfHiddenItem(getScrollArea(), getItems(), ScrollDirection.Up),
                canScrollDown: hasHalfHiddenItem(getScrollArea(), getItems(), ScrollDirection.Down),
            });
        }

        function renderScrollArrow(direction: ScrollDirection, isShown: boolean) {
            return html`
                <div
                    class=${classMap({
                        'scroll-arrow': true,
                        [direction]: true,
                        hidden: !isShown,
                    })}
                    aria-hidden="true"
                    ${listen('mouseenter', () => {
                        state.stopScrolling?.();
                        updateState({
                            stopScrolling: scrollByItems({
                                scrollArea: getScrollArea(),
                                items: getItems(),
                                direction,
                                itemsPerSecond: inputs.hoverScrollSpeed ?? defaultHoverScrollSpeed,
                            }),
                        });
                    })}
                    ${listen('mouseleave', () => {
                        state.stopScrolling?.();
                        updateState({
                            stopScrolling: undefined,
                        });
                    })}
                    ${listen('mousedown', (event) => {
                        /** Keeps focus on the current menu item. */
                        event.preventDefault();
                    })}
                    ${listen('click', (event) => {
                        /** Keeps `ViraPopoverTrigger` from closing the menu. */
                        event.stopPropagation();
                    })}
                >
                    <${ViraIcon.assign({
                        icon: ChevronUp16Icon,
                    })}></${ViraIcon}>
                </div>
            `;
        }

        return html`
            ${renderScrollArrow(ScrollDirection.Up, state.canScrollUp)}
            <div
                class="scroll-area"
                ${listen('scroll', () => {
                    updateScrollArrows();
                })}
                ${onResize(() => {
                    /**
                     * Showing or hiding an arrow resizes the scroll area, which inside a
                     * ResizeObserver callback causes a "ResizeObserver loop" error.
                     */
                    requestAnimationFrame(updateScrollArrows);
                })}
            >
                <div
                    class="scroll-area-content"
                    ${onResize(() => {
                        requestAnimationFrame(updateScrollArrows);
                    })}
                >
                    <slot>&nbsp;</slot>
                </div>
            </div>
            ${renderScrollArrow(ScrollDirection.Down, state.canScrollDown)}
        `;
    },
});
