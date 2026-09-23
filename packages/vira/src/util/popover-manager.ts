import {check} from '@augment-vir/assert';
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

    if (!(target instanceof Element)) {
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

/**
 * The interaction on the anchor element that shows and hides a popover.
 *
 * @category Popover
 */
export enum PopoverTrigger {
    /**
     * Shows the popover shortly after the anchor is hovered or focused and hides it when the anchor
     * is no longer hovered or focused.
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
            listenToAnchor(anchor, 'mouseleave', () => {
                popoverManager.hide();
            }),
            listenToAnchor(anchor, 'focusout', () => {
                popoverManager.hide();
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

        if (this.isOpen()) {
            this.popover?.hidePopover();
        }
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
                'mousedown',
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
