/**
 * Checks if every non-whitespace character of `search` appears in `text`, in order, ignoring case.
 * An empty `search` matches everything.
 *
 * @category Internal
 * @example
 *
 * ```ts
 * fuzzyMatch({search: 'opa', text: 'Option A'}); // true
 * fuzzyMatch({search: 'apo', text: 'Option A'}); // false
 * ```
 */
export function fuzzyMatch({
    search,
    text,
}: Readonly<{
    search: string;
    text: string;
}>) {
    const lowerText = text.toLowerCase();

    return (
        search
            .replaceAll(/\s/g, '')
            .toLowerCase()
            .split('')
            .reduce((textIndex, character) => {
                return textIndex < 0
                    ? textIndex
                    : lowerText.indexOf(character, textIndex) + 1 || -1;
            }, 0 as number) >= 0
    );
}
