import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {fuzzyMatch} from './fuzzy-match.js';

describe(fuzzyMatch.name, () => {
    it('matches characters in order with gaps, ignoring case and whitespace', () => {
        assert.isTrue(
            fuzzyMatch({
                search: 'o pA',
                text: 'Option A',
            }),
        );
    });

    it('rejects characters out of order', () => {
        assert.isFalse(
            fuzzyMatch({
                search: 'apo',
                text: 'Option A',
            }),
        );
    });

    it('rejects a repeated character that only appears once', () => {
        assert.isFalse(
            fuzzyMatch({
                search: 'aa',
                text: 'Option A',
            }),
        );
    });

    it('matches everything with an empty search', () => {
        assert.isTrue(
            fuzzyMatch({
                search: '',
                text: 'Option A',
            }),
        );
    });
});
