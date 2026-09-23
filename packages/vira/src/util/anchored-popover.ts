import {type PartialWithUndefined} from '@augment-vir/common';
import {css, unsafeCSS, type CSSResult} from 'element-vir';

/**
 * The class that `PopoverManager` toggles on a popover to make the browser re-run its
 * `position-try-fallbacks` from the first entry.
 *
 * @category Internal
 */
export const anchoredPopoverRetryClass = 'retry-position';

/**
 * A single `position-try-fallbacks` entry for {@link createAnchoredPopoverStyles}.
 *
 * @category Popover
 */
export type AnchoredPopoverFallback = {
    /**
     * The `@position-try` rule name, without the leading `--`. Only needs to be unique within the
     * shadow root that the styles are used in.
     */
    name: string;
    /** Only the properties that `@position-try` rules accept have any effect here. */
    styles: CSSResult;
} & PartialWithUndefined<{
    /** Adds `flip-block` to this entry, which mirrors it (and its block margins) vertically. */
    flipBlock: boolean;
}>;

function createFallbackEntry({name, flipBlock}: Readonly<AnchoredPopoverFallback>) {
    return flipBlock ? `--${name} flip-block` : `--${name}`;
}

/**
 * Creates the shared styles for a `popover` element that is positioned with CSS anchor positioning
 * and opened through `PopoverManager`. Put the popover's default position (such as `position-area`)
 * in a rule _after_ these styles. `fallbacks` are tried in order whenever the default position
 * overflows the viewport.
 *
 * @category Popover
 */
export function createAnchoredPopoverStyles({
    selector,
    fallbacks,
}: Readonly<
    {
        fallbacks: ReadonlyArray<Readonly<AnchoredPopoverFallback>>;
    } & PartialWithUndefined<{
        /** Selects the popover element. Omit this when the host element itself is the popover. */
        selector: CSSResult | string;
    }>
>) {
    const fallbackEntries = fallbacks.map((fallback) => createFallbackEntry(fallback));
    const retryClass = unsafeCSS(anchoredPopoverRetryClass);

    return css`
        /*
            Anchored through showPopover({source}) rather than position-anchor, whose initial value
            differs between browsers.
        */
        ${selector ? unsafeCSS(selector) : unsafeCSS(':host')} {
            /* Override the browser's default popover styles. */
            position: fixed;
            inset: auto;
            margin: 0;
            padding: 0;
            border: none;
            height: auto;
            overflow: visible;
            background: none;
            color: inherit;

            position-try-fallbacks: ${unsafeCSS(fallbackEntries.join(', ') || 'none')};
        }

        /*
            Browsers keep using the last position-try-fallbacks entry that fit until it no longer
            fits, even when an earlier entry fits again, so without this the popover would not return
            to its default position after a resize or scroll. Changing the computed
            position-try-fallbacks value is what makes browsers start over from the first entry, so
            this repeats an entry, which does not change the result.
        */
        ${selector
            ? css`
                  ${unsafeCSS(selector)}.${retryClass}
              `
            : unsafeCSS(`:host(.${anchoredPopoverRetryClass})`)} {
            position-try-fallbacks: ${unsafeCSS(
                [
                    ...fallbackEntries,
                    ...fallbackEntries.slice(-1),
                ].join(', ') || 'none',
            )};
        }

        ${unsafeCSS(
            fallbacks
                .map(({name, styles}) => {
                    return `@position-try --${name} {${styles.cssText}}`;
                })
                .join('\n'),
        )}
    `;
}
