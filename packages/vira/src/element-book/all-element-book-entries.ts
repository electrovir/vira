import {elementsBookChapter} from '../elements/elements.book';
import {viraButtonBookEntries} from '../elements/vira-button/vira-button.element.book';
import {viraCollapsibleBookEntries} from '../elements/vira-collapsible/vira-collapsible-wrapper.element.book';
import {viraIconBookEntries} from '../elements/vira-icon/vira-icon.element.book';
import {viraInputBookEntries} from '../elements/vira-input/vira-input.element.book';
import {iconBookEntries} from '../icons/icons.book';

export const allElementBookEntries = [
    elementsBookChapter,

    ...iconBookEntries,
    ...viraButtonBookEntries,
    ...viraCollapsibleBookEntries,
    ...viraIconBookEntries,
    ...viraInputBookEntries,
];
