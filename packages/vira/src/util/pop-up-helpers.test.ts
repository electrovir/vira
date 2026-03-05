import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {html} from 'element-vir';
import {renderMenuItemEntries, type ViraMenuItemEntry} from './pop-up-helpers.js';

describe(renderMenuItemEntries.name, () => {
    function createEntry(overrides: Partial<ViraMenuItemEntry> = {}): Readonly<ViraMenuItemEntry> {
        return {
            content: html`
                item
            `,
            ...overrides,
        };
    }

    it('filters out items with hidden set to true', () => {
        const items: ReadonlyArray<Readonly<ViraMenuItemEntry>> = [
            createEntry(),
            createEntry({
                hidden: true,
            }),
            createEntry(),
        ];

        const result = renderMenuItemEntries(items);

        assert.isLengthExactly(result, 2);
    });

    it('includes all items when none are hidden', () => {
        const items: ReadonlyArray<Readonly<ViraMenuItemEntry>> = [
            createEntry(),
            createEntry(),
            createEntry(),
        ];

        const result = renderMenuItemEntries(items);

        assert.isLengthExactly(result, 3);
    });

    it('returns empty when all items are hidden', () => {
        const items: ReadonlyArray<Readonly<ViraMenuItemEntry>> = [
            createEntry({
                hidden: true,
            }),
            createEntry({
                hidden: true,
            }),
        ];

        const result = renderMenuItemEntries(items);

        assert.isLengthExactly(result, 0);
    });
});
