import {dynamicElementsBookPage} from './entries/dynamic-elements.book.js';
import {viraMenuItemBookPage} from './entries/pop-up/vira-menu-item.element.book.js';
import {viraMenuTriggerBookPage} from './entries/pop-up/vira-menu-trigger.element.book.js';
import {viraMenuOptionsBookPage} from './entries/pop-up/vira-menu.element.book.js';
import {viraPopUpMenuBookPage} from './entries/pop-up/vira-pop-up-menu.element.book.js';
import {viraPopUpTriggerBookPage} from './entries/pop-up/vira-pop-up-trigger.element.book.js';
import {shadowBookPage} from './entries/shadow.book.js';
import {viraBoldTextPage} from './entries/vira-bold-text.element.book.js';
import {viraButtonBookPage} from './entries/vira-button.element.book.js';
import {viraCardBookPage} from './entries/vira-card.element.book.js';
import {viraCheckboxBookPage} from './entries/vira-checkbox.element.book.js';
import {viraCollapsibleBookPage} from './entries/vira-collapsible-wrapper.element.book.js';
import {viraDropdownPage} from './entries/vira-dropdown.element.book.js';
import {viraErrorBookPage} from './entries/vira-error.element.book.js';
import {viraFormBookPage} from './entries/vira-form.element.book.js';
import {viraIconBookPage} from './entries/vira-icon.element.book.js';
import {viraImageBookPage} from './entries/vira-image.element.book.js';
import {viraInputBookPage} from './entries/vira-input.element.book.js';
import {viraLinkBookPage} from './entries/vira-link.element.book.js';
import {viraModalBookPage} from './entries/vira-modal.element.book.js';
import {viraOverflowSwitchBookPage} from './entries/vira-overflow-switch.element.book.js';
import {viraProgressBookPage} from './entries/vira-progress.element.book.js';
import {viraSelectBookPage} from './entries/vira-select.element.book.js';
import {elementsBookPage, iconsBookPage, stylesBookPage, utilBookPage} from './top-level-pages.js';

const topLevelPages = [
    elementsBookPage,
    iconsBookPage,
    stylesBookPage,
    utilBookPage,
];

const allPages = [
    viraBoldTextPage,
    viraButtonBookPage,
    viraCardBookPage,
    viraCheckboxBookPage,
    viraCollapsibleBookPage,
    viraDropdownPage,
    viraErrorBookPage,
    viraFormBookPage,
    viraIconBookPage,
    viraImageBookPage,
    viraInputBookPage,
    viraLinkBookPage,
    viraMenuItemBookPage,
    viraMenuOptionsBookPage,
    viraMenuTriggerBookPage,
    viraModalBookPage,
    viraOverflowSwitchBookPage,
    viraPopUpMenuBookPage,
    viraPopUpTriggerBookPage,
    viraProgressBookPage,
    viraSelectBookPage,

    dynamicElementsBookPage,

    shadowBookPage,
].sort((a, b) => a.title.localeCompare(b.title));

export const viraBookPages = [
    ...topLevelPages,
    ...allPages,
];
