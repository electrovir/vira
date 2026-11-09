import {assertWrap, check} from '@augment-vir/assert';
import {type PartialWithUndefined} from '@augment-vir/common';
import {walkActiveElement} from '@augment-vir/web';
import {type AnyDuration, convertDuration, type Duration, type DurationUnit} from 'date-vir';
import {type Coords, NavActivateEvent, type NavController, NavDirection} from 'device-navigation';
import {listenToPageActivation} from 'page-active';
import {listenTo, listenToGlobal} from 'typed-event-target';
import {anchoredPopoverRetryClass} from './anchored-popover.js';

/**
 * Used to prevent popovers from closing when a text input is active.
 *
 * @category Internal
 */
export function isInputLikeElement(element: Element): boolean {
    return (
        (element instanceof HTMLInputElement &&
            (element.type === 'text' ||
                element.type === 'search' ||
                element.type === 'email' ||
                element.type === 'url' ||
                element.type === 'tel' ||
                element.type === 'password' ||
                element.type === 'number')) ||
        element instanceof HTMLTextAreaElement ||
        (element instanceof HTMLElement && element.isContentEditable)
    );
}

/**
 * Whether a keyboard click (a click with `detail` of `0`) came from pressing Enter in a text input,
 * which browsers turn into a click on the form's first button.
 *
 * @category Internal
 */
export function isTextInputActive() {
    let isActive = false as boolean;

    walkActiveElement(({element}) => {
        isActive = isInputLikeElement(element);
        return isActive;
    });

    return isActive;
}

/**
 * Determines if a mouse event landed on a scrollbar rather than on element content. Scrollbar
 * interactions fire mouse events on the scrolling element itself (or on `<html>` for the page
 * scrollbar), so an outside-click check would otherwise treat dragging a scrollbar as a click away
 * from the popover and dismiss it mid-drag.
 *
 * @category Internal
 */
export function isMouseEventOnScrollbar(event: Readonly<MouseEvent>): boolean {
    const target = event.composedPath()[0];

    if (
        !(target instanceof Element) ||
        /**
         * Inline boxes cannot have scrollbars. Firefox still reports a nonzero scroll size for them
         * while their client size is always 0, so without this every click on inline content (such
         * as a `<b>` in a dropdown label) looks like a scrollbar click.
         */
        globalThis.getComputedStyle(target).display === 'inline'
    ) {
        return false;
    }

    const rect = target.getBoundingClientRect();
    /**
     * `clientLeft` and `clientTop` are the border widths, which also include the scrollbar itself
     * when it's rendered on the leading edge (RTL layouts).
     */
    const clientLeft = rect.left + target.clientLeft;
    const clientTop = rect.top + target.clientTop;

    const outsideHorizontally =
        event.clientX < clientLeft || event.clientX >= clientLeft + target.clientWidth;
    const outsideVertically =
        event.clientY < clientTop || event.clientY >= clientTop + target.clientHeight;

    return (
        (outsideHorizontally && target.scrollHeight > target.clientHeight) ||
        (outsideVertically && target.scrollWidth > target.clientWidth)
    );
}

/** @category Internal */
export type Point = {
    x: number;
    y: number;
};

/** @category Internal */
export type PopoverHoverAreaParams = Readonly<
    Record<
        'anchorRect' | 'popoverRect',
        Readonly<Pick<DOMRectReadOnly, 'top' | 'right' | 'bottom' | 'left'>>
    >
>;

/**
 * The corners, in winding order, of the area that keeps a hover popover open: the popover, the
 * anchor, and the cone from the popover's edge facing the anchor to the anchor's edge facing the
 * popover. Assumes the popover is above or below the anchor.
 *
 * @category Internal
 */
export function getPopoverHoverArea({anchorRect, popoverRect}: PopoverHoverAreaParams) {
    const isPopoverAbove =
        popoverRect.top + popoverRect.bottom < anchorRect.top + anchorRect.bottom;
    const popoverFarY = isPopoverAbove ? popoverRect.top : popoverRect.bottom;
    const popoverNearY = isPopoverAbove ? popoverRect.bottom : popoverRect.top;
    const anchorNearY = isPopoverAbove ? anchorRect.top : anchorRect.bottom;
    const anchorFarY = isPopoverAbove ? anchorRect.bottom : anchorRect.top;

    return [
        {
            x: popoverRect.left,
            y: popoverFarY,
        },
        {
            x: popoverRect.right,
            y: popoverFarY,
        },
        {
            x: popoverRect.right,
            y: popoverNearY,
        },
        {
            x: anchorRect.right,
            y: anchorNearY,
        },
        {
            x: anchorRect.right,
            y: anchorFarY,
        },
        {
            x: anchorRect.left,
            y: anchorFarY,
        },
        {
            x: anchorRect.left,
            y: anchorNearY,
        },
        {
            x: popoverRect.left,
            y: popoverNearY,
        },
    ];
}

/**
 * Whether `point` is inside {@link getPopoverHoverArea}.
 *
 * @category Internal
 */
export function isPointInPopoverHoverArea({
    point,
    ...rects
}: PopoverHoverAreaParams & Readonly<{point: Readonly<Point>}>) {
    const corners = getPopoverHoverArea(rects);

    /** Ray casting: count the edges that a ray going right from `point` crosses. */
    return corners.reduce((isInside, corner, index) => {
        const previous = assertWrap.isDefined(corners.at(index - 1));
        const crossesEdge =
            corner.y > point.y !== previous.y > point.y &&
            point.x <
                ((previous.x - corner.x) * (point.y - corner.y)) / (previous.y - corner.y) +
                    corner.x;

        return crossesEdge ? !isInside : isInside;
    }, false);
}

/**
 * The interaction on the anchor element that shows and hides a popover.
 *
 * @category Popover
 */
export enum PopoverTrigger {
    /**
     * Shows the popover shortly after the anchor is hovered or focused and hides it when the anchor
     * is no longer hovered or focused. An open popover stays open while the pointer moves from the
     * anchor onto it (through the area between them) and while the pointer is over it.
     */
    Hover = 'hover',
    /** Toggles the popover when the anchor is clicked. An arrow key opens it. */
    Click = 'click',
    /**
     * Toggles the popover as soon as the mouse is pressed on the anchor, so it can be dragged over
     * the popover's contents and released on one of them. Keyboard clicks and arrow keys also
     * work.
     */
    Mousedown = 'mousedown',
    /**
     * Toggles the popover the way a native context menu opens: on a right mousedown, a ctrl+left
     * mousedown, or a touch held still on the anchor. The Menu key and Shift+F10 open it. The
     * browser's own context menu is suppressed. A left click on the anchor while the popover is
     * open closes it without reaching the anchor's contents. Otherwise, left clicks and taps are
     * left to the anchor's contents.
     */
    ContextMenu = 'context-menu',
}

/**
 * Options for {@link PopoverManager.update}, usually passed through the `popover` directive.
 *
 * @category Popover
 */
export type PopoverOptions = {
    /** `true` or `false` force the popover open or closed, ignoring all interactions. */
    trigger: boolean | PopoverTrigger;
    /**
     * Returns the `popover` element to open. Called each time the popover opens, so it may create
     * the element.
     */
    getPopover: () => HTMLElement;
} & PartialWithUndefined<{
    /** Called when the user selects an item in the popover through the `NavController`. */
    onNavSelect: (coords: Coords) => void;
    /**
     * How long to wait after the popover is triggered before opening it. Defaults to 300
     * milliseconds for {@link PopoverTrigger.Hover} and no delay for everything else.
     */
    delay: AnyDuration;
    /** Closes the popover once it has been open this long. By default it stays open. */
    timeout: AnyDuration;
    /**
     * Only for {@link PopoverTrigger.Hover}: hides the popover as soon as the pointer leaves the
     * anchor, instead of keeping it open while the pointer moves onto it.
     */
    closeOnAnchorLeave: boolean;
}>;

const defaultDelays: PartialWithUndefined<
    Record<PopoverTrigger, Duration<DurationUnit.Milliseconds>>
> = {
    [PopoverTrigger.Hover]: {
        milliseconds: 300,
    },
};

function listenToAnchor<const EventName extends keyof HTMLElementEventMap>(
    anchor: HTMLElement,
    eventName: EventName,
    listener: (event: HTMLElementEventMap[EventName]) => void,
) {
    return listenTo(anchor, eventName, (event) => {
        listener(event satisfies Event as HTMLElementEventMap[EventName]);
    });
}

/**
 * How long a touch must be held on a {@link PopoverTrigger.ContextMenu} anchor to open it.
 *
 * @category Internal
 */
export const popoverLongPressDuration: Duration<DurationUnit.Milliseconds> = {
    milliseconds: 500,
};
/**
 * Set on a {@link PopoverTrigger.ContextMenu} anchor while a touch is held on it, until the hold
 * opens the popover or is abandoned. Style it to show that the hold is working. It is removed right
 * before the popover opens, so make leaving the style instant: otherwise the popover is positioned
 * against the anchor while it is still changing back.
 *
 * @category Internal
 */
export const popoverLongPressAttribute = 'data-popover-long-press';
/** How far, in pixels, a touch can drift before it stops counting as a long press. */
const longPressMaxDistance = 10;

const anchorListeners: Record<
    PopoverTrigger,
    (popoverManager: PopoverManager, anchor: HTMLElement) => (() => void)[]
> = {
    [PopoverTrigger.Hover](popoverManager, anchor) {
        return [
            listenToAnchor(anchor, 'mouseenter', () => {
                popoverManager.scheduleShow();
            }),
            listenToAnchor(anchor, 'focusin', () => {
                popoverManager.scheduleShow();
            }),
            listenToAnchor(anchor, 'mouseleave', (event) => {
                popoverManager.hideOnHoverExit(event);
            }),
            listenToAnchor(anchor, 'focusout', () => {
                /** Clicking text in the popover to select it moves focus off the anchor. */
                if (!popoverManager.isHovered()) {
                    popoverManager.hide();
                }
            }),
        ];
    },
    [PopoverTrigger.Click](popoverManager, anchor) {
        return [
            listenToAnchor(anchor, 'click', (event) => {
                if (event.detail !== 0 || !isTextInputActive()) {
                    popoverManager.toggle();
                }
            }),
            listenToAnchor(anchor, 'keydown', (event) => {
                popoverManager.openOnArrow(event);
            }),
        ];
    },
    [PopoverTrigger.Mousedown](popoverManager, anchor) {
        return [
            listenToAnchor(anchor, 'mousedown', (event) => {
                if (event.button === 0 && !isMouseEventOnScrollbar(event)) {
                    const target = event.composedPath()[0];
                    if (!(target instanceof Element && isInputLikeElement(target))) {
                        /**
                         * Without this, WebKit scrolls the anchor's scroll containers when the
                         * pointer is dragged past their edges on the way to a popover item.
                         */
                        event.preventDefault();
                        /** Preventing the default also prevents the focus that mousedown gives. */
                        event
                            .composedPath()
                            .find((eventTarget): eventTarget is HTMLElement => {
                                return (
                                    eventTarget instanceof HTMLElement && eventTarget.tabIndex >= 0
                                );
                            })
                            ?.focus({
                                preventScroll: true,
                                /** Otherwise a mouse click shows the keyboard focus ring. */
                                focusVisible: false,
                            });
                    }
                    popoverManager.toggle();
                }
            }),
            listenToAnchor(anchor, 'click', (event) => {
                /** Mouse clicks were already handled by the mousedown. */
                if (event.detail === 0 && !isTextInputActive()) {
                    popoverManager.toggle();
                }
            }),
            listenToAnchor(anchor, 'keydown', (event) => {
                popoverManager.openOnArrow(event);
            }),
        ];
    },
    [PopoverTrigger.ContextMenu](popoverManager, anchor) {
        /**
         * Set by a press that toggled the popover, so the click some browsers still fire for it
         * (Firefox for a ctrl+click, mobile browsers after a long press) doesn't also activate the
         * anchor's contents. Reset by the next press because browsers that skip that click would
         * otherwise leave it set for a later, real click.
         */
        let isClickSuppressed = false;
        let longPress:
            | {
                  timeout: ReturnType<typeof setTimeout>;
                  pointerId: number;
                  start: Point;
              }
            | undefined;

        function cancelLongPress() {
            clearTimeout(longPress?.timeout);
            longPress = undefined;
            anchor.removeAttribute(popoverLongPressAttribute);
        }

        /**
         * Aborts the listeners that swallow the mouse events a long press's release still fires.
         * Without them, Android and iOS send the release's mouseup and click to whatever the finger
         * lifts over, which is now the popover, so it picks a menu item.
         */
        let releaseSwallower: AbortController | undefined;

        function stopSwallowingRelease() {
            releaseSwallower?.abort();
            releaseSwallower = undefined;
        }

        function swallowRelease() {
            stopSwallowingRelease();
            const controller = new AbortController();
            releaseSwallower = controller;
            function swallow(event: Event) {
                event.stopImmediatePropagation();
                event.preventDefault();
                if (event.type === 'click') {
                    stopSwallowingRelease();
                }
            }
            (
                [
                    'mousedown',
                    'mouseup',
                    'click',
                ] as const
            ).forEach((eventName) => {
                globalThis.addEventListener(eventName, swallow, {
                    capture: true,
                    signal: controller.signal,
                });
            });
            /** A browser that skips the release's click must not swallow the next real press. */
            globalThis.addEventListener('pointerdown', stopSwallowingRelease, {
                capture: true,
                signal: controller.signal,
            });
        }

        return [
            stopSwallowingRelease,
            listenToAnchor(anchor, 'pointerdown', (event) => {
                isClickSuppressed = false;
                cancelLongPress();

                if (event.pointerType !== 'touch') {
                    return;
                }

                longPress = {
                    pointerId: event.pointerId,
                    start: {
                        x: event.clientX,
                        y: event.clientY,
                    },
                    timeout: setTimeout(() => {
                        cancelLongPress();
                        swallowRelease();
                        popoverManager.toggle();
                    }, popoverLongPressDuration.milliseconds),
                };
                anchor.setAttribute(popoverLongPressAttribute, '');
            }),
            listenToAnchor(anchor, 'pointermove', (event) => {
                if (
                    longPress &&
                    event.pointerId === longPress.pointerId &&
                    Math.hypot(
                        event.clientX - longPress.start.x,
                        event.clientY - longPress.start.y,
                    ) > longPressMaxDistance
                ) {
                    cancelLongPress();
                }
            }),
            listenToAnchor(anchor, 'pointerup', cancelLongPress),
            /** Fired when the browser takes the touch over to scroll. */
            listenToAnchor(anchor, 'pointercancel', cancelLongPress),
            listenToAnchor(anchor, 'mousedown', (event) => {
                if (event.button === 2 || (event.button === 0 && event.ctrlKey)) {
                    isClickSuppressed = true;
                    popoverManager.toggle();
                } else if (event.button === 0 && popoverManager.isOpen()) {
                    isClickSuppressed = true;
                    popoverManager.hide();
                }
            }),
            listenToAnchor(anchor, 'contextmenu', (event) => {
                event.preventDefault();
            }),
            listenTo(
                anchor,
                'click',
                (event) => {
                    if (isClickSuppressed) {
                        isClickSuppressed = false;
                        event.stopPropagation();
                        event.preventDefault();
                    }
                },
                {
                    /** So it runs before the listeners on the anchor's contents. */
                    capture: true,
                },
            ),
            listenToAnchor(anchor, 'keydown', (event) => {
                if (event.code === 'ContextMenu' || (event.shiftKey && event.code === 'F10')) {
                    event.preventDefault();
                    popoverManager.scheduleShow();
                }
            }),
        ];
    },
};

/**
 * Opens and closes a single `popover` element that is anchored to another element: it opens the
 * popover in response to the anchor's interactions (see {@link PopoverTrigger}) and closes it on
 * Escape, an outside mousedown, or the page going inactive. Style the popover with
 * `createAnchoredPopoverStyles`.
 *
 * @category Popover
 */
export class PopoverManager {
    protected anchor: HTMLElement | undefined;
    protected options: Readonly<PopoverOptions> | undefined;
    /** The most recently opened popover. */
    protected popover: HTMLElement | undefined;
    protected showTimeout: ReturnType<typeof setTimeout> | undefined;
    /** Closes the popover after `options.timeout`. */
    protected hideTimeout: ReturnType<typeof setTimeout> | undefined;
    /** Removes the listeners for the current anchor and `trigger`. */
    protected removeAnchorListeners: (() => void) | undefined;
    /** Removes the global listeners attached while the popover is open. */
    protected removeOpenListeners: (() => void) | undefined;
    /** Removes the pointer listener attached by {@link PopoverManager.hideOnHoverExit}. */
    protected removeHoverListener: (() => void) | undefined;

    constructor(
        /**
         * Enables arrow key navigation within the open popover. Omit this for popovers that have
         * nothing to navigate, like tooltips.
         */
        public readonly navController?: NavController | undefined,
    ) {}

    /** Whether the popover is open. */
    public isOpen() {
        return !!this.popover?.matches(':popover-open');
    }

    /** Call this each time the anchor or options might have changed. The `popover` directive does. */
    public update(anchor: HTMLElement, options: Readonly<PopoverOptions>) {
        const previousTrigger = this.options?.trigger;
        this.options = options;

        if (anchor === this.anchor && options.trigger === previousTrigger) {
            return;
        }

        this.removeAnchorListeners?.();
        this.anchor = anchor;
        const removeListeners = check.isBoolean(options.trigger)
            ? []
            : anchorListeners[options.trigger](this, anchor);
        this.removeAnchorListeners = () => {
            removeListeners.forEach((removeListener) => removeListener());
        };
        this.applyForcedState();
    }

    /** Opens or closes the popover when `trigger` is `true` or `false`. */
    public applyForcedState() {
        if (this.options?.trigger === true) {
            /**
             * Deferred because on first render lit updates directives before inserting the template
             * into the document, and a disconnected popover cannot open.
             */
            queueMicrotask(() => {
                if (this.options?.trigger === true) {
                    this.scheduleShow();
                }
            });
        } else if (this.options?.trigger === false) {
            this.close();
        }
    }

    /** Opens the popover right away. */
    public show() {
        clearTimeout(this.showTimeout);
        this.showTimeout = undefined;

        if (!this.anchor || !this.options || this.isOpen()) {
            return;
        }

        this.popover = this.options.getPopover();
        this.popover.showPopover({
            source: this.anchor,
        });
        this.removeOpenListeners = this.attachOpenListeners();

        if (this.options.timeout) {
            this.hideTimeout = setTimeout(
                () => {
                    this.hide();
                },
                convertDuration(this.options.timeout, {
                    milliseconds: true,
                }).milliseconds,
            );
        }
    }

    /** Closes the popover, unless `trigger` forces it open, and cancels a scheduled show. */
    public hide() {
        if (this.options?.trigger !== true) {
            this.close();
        }
    }

    /**
     * Whether the pointer is over the anchor, or over the open popover or the area between them
     * after leaving the anchor.
     */
    public isHovered() {
        return !!this.removeHoverListener || !!this.anchor?.matches(':hover');
    }

    /**
     * Call this when the pointer leaves the anchor. Hides the popover once the pointer is outside
     * of the anchor, the popover, and the area between them, so the pointer can travel to the
     * popover without closing it.
     */
    public hideOnHoverExit(event: Readonly<MouseEvent>) {
        if (!this.isOpen() || this.options?.closeOnAnchorLeave || !this.isInHoverArea(event)) {
            this.hide();
            return;
        }

        this.removeHoverListener ||= listenToGlobal(
            'mousemove',
            (moveEvent) => {
                if (!this.isInHoverArea(moveEvent)) {
                    this.removeHoverListener?.();
                    this.removeHoverListener = undefined;
                    this.hide();
                }
            },
            {
                capture: true,
                passive: true,
            },
        );
    }

    /** Opens the popover after `options.delay`. */
    public scheduleShow() {
        if (this.showTimeout || this.isOpen() || !this.options) {
            return;
        }

        const rawDelay =
            this.options.delay ||
            (check.isBoolean(this.options.trigger) ? {} : defaultDelays[this.options.trigger]);

        const delay =
            rawDelay &&
            convertDuration(rawDelay, {
                milliseconds: true,
            });

        if (delay && delay.milliseconds > 0) {
            this.showTimeout = setTimeout(() => {
                this.show();
            }, delay.milliseconds);
        } else {
            this.show();
        }
    }

    /** Opens the popover, or closes it (and cancels a delayed open). */
    public toggle() {
        if (this.isOpen() || this.showTimeout) {
            this.hide();
        } else {
            this.scheduleShow();
        }
    }

    /** Opens a closed popover when an arrow key is pressed. */
    public openOnArrow(event: Readonly<KeyboardEvent>) {
        if (event.code.startsWith('Arrow')) {
            this.scheduleShow();
        }
    }

    /** Closes the popover and removes all listeners. */
    public destroy() {
        this.removeAnchorListeners?.();
        this.removeAnchorListeners = undefined;
        this.anchor = undefined;
        this.close();
    }

    /** Closes the popover even when `trigger` forces it open. */
    public close() {
        clearTimeout(this.showTimeout);
        this.showTimeout = undefined;
        clearTimeout(this.hideTimeout);
        this.hideTimeout = undefined;
        this.removeOpenListeners?.();
        this.removeOpenListeners = undefined;
        this.removeHoverListener?.();
        this.removeHoverListener = undefined;

        if (this.isOpen()) {
            this.popover?.hidePopover();
        }
    }

    /** Whether the pointer is inside {@link getPopoverHoverArea}. */
    protected isInHoverArea(event: Readonly<MouseEvent>) {
        if (!this.anchor || !this.popover) {
            return false;
        }

        return isPointInPopoverHoverArea({
            point: {
                x: event.clientX,
                y: event.clientY,
            },
            anchorRect: this.anchor.getBoundingClientRect(),
            popoverRect: this.popover.getBoundingClientRect(),
        });
    }

    /** Attaches the global listeners that only matter while the popover is open. */
    protected attachOpenListeners() {
        const navController = this.navController;

        const removeListeners = [
            listenToGlobal(
                'resize',
                () => {
                    this.popover?.classList.toggle(anchoredPopoverRetryClass);
                    /** `nearest` does not scroll at all when the anchor is already fully visible. */
                    this.anchor?.scrollIntoView({
                        block: 'nearest',
                        inline: 'nearest',
                    });
                },
                {
                    passive: true,
                },
            ),
            listenToGlobal(
                'scroll',
                () => {
                    this.popover?.classList.toggle(anchoredPopoverRetryClass);
                },
                {
                    /** Scroll events do not bubble, so this catches scrolling in any element. */
                    capture: true,
                    passive: true,
                },
            ),
            listenToPageActivation(false, (isPageActive) => {
                if (!isPageActive) {
                    this.hide();
                }
            }),
            navController?.listen(NavActivateEvent, (event) => {
                const target = event.composedPath()[0];

                if (target instanceof Element && isInputLikeElement(target)) {
                    return;
                }

                if (event.detail.success) {
                    this.options?.onNavSelect?.(event.detail.coords);
                    navController.currentNavEntry?.entry.focus(true);
                    event.stopImmediatePropagation();
                    event.preventDefault();
                }
            }),
            listenToGlobal(
                /**
                 * Not `mousedown`: iOS Safari only fires mouse events for taps on elements it
                 * considers clickable, so a tap on plain content would leave the popover open.
                 */
                'pointerdown',
                (event) => {
                    const path = event.composedPath();

                    if (
                        (this.anchor && path.includes(this.anchor)) ||
                        (this.popover && path.includes(this.popover)) ||
                        isMouseEventOnScrollbar(event)
                    ) {
                        return;
                    }
                    this.hide();
                },
                {
                    passive: true,
                },
            ),
            listenToGlobal('keydown', (event) => {
                const keyCode = event.code;

                if (keyCode === 'Escape') {
                    this.hide();
                } else if (navController) {
                    const target = event.composedPath()[0];

                    if (target instanceof Element && isInputLikeElement(target)) {
                        return;
                    }

                    if (keyCode === 'ArrowDown') {
                        event.stopImmediatePropagation();
                        event.preventDefault();

                        navController.navigate({
                            direction: NavDirection.Down,
                            allowWrapping: false,
                        });
                    } else if (keyCode === 'ArrowUp') {
                        event.stopImmediatePropagation();
                        event.preventDefault();

                        navController.navigate({
                            direction: NavDirection.Up,
                            allowWrapping: false,
                        });
                    } else if (keyCode === 'ArrowLeft') {
                        event.stopImmediatePropagation();
                        event.preventDefault();

                        navController.navigate({
                            direction: NavDirection.Left,
                            allowWrapping: false,
                        });
                    } else if (keyCode === 'ArrowRight') {
                        event.stopImmediatePropagation();
                        event.preventDefault();

                        navController.navigate({
                            direction: NavDirection.Right,
                            allowWrapping: false,
                        });
                    } else if (
                        (keyCode === 'Enter' || keyCode === 'Return' || keyCode === 'Space') &&
                        navController.enterInto({
                            fallbackToActivate: true,
                        }).success
                    ) {
                        event.stopImmediatePropagation();
                        event.preventDefault();
                    }
                }
            }),
        ].filter(check.isDefined);

        return () => {
            removeListeners.forEach((removeListener) => removeListener());
        };
    }
}
