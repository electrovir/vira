import {elementsBookChapter} from '../elements/elements.book';
import {viraButtonBookEntries} from '../elements/vira-button/vira-button.element.book';
import {viraIconBookEntries} from '../elements/vira-icon/vira-icon.element.book';
import {iconBookEntries} from '../icons/icons.book';

export const allElementBookEntries = [
    elementsBookChapter,

    ...iconBookEntries,
    ...viraButtonBookEntries,
    ...viraIconBookEntries,
];
