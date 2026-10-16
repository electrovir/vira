import {LucideCheckIcon} from './lucide/check.icon.js';
import {LucideChevronDownIcon} from './lucide/chevron-down.icon.js';
import {LucideChevronUpIcon} from './lucide/chevron-up.icon.js';
import {LucideCircleXIcon} from './lucide/circle-x.icon.js';
import {LucideCodeXmlIcon} from './lucide/code-xml.icon.js';
import {LucideCopyIcon} from './lucide/copy.icon.js';
import {LucideEyeOffIcon} from './lucide/eye-off.icon.js';
import {LucideEyeIcon} from './lucide/eye.icon.js';
import {LucidePlusIcon} from './lucide/plus.icon.js';
import {LucideXIcon} from './lucide/x.icon.js';
import {createSizedIcon} from './sized-icon.js';

/**
 * Lucide icons used by Vira's own elements. Each is imported individually so that using a Vira
 * element does not bundle every Lucide icon.
 */
export const internalLucideIcons = {
    Check16: LucideCheckIcon,
    ChevronDown16: LucideChevronDownIcon,
    ChevronUp16: LucideChevronUpIcon,
    CircleX16: LucideCircleXIcon,
    CircleX24: createSizedIcon(LucideCircleXIcon, 24),
    CodeXml24: createSizedIcon(LucideCodeXmlIcon, 24),
    Copy16: LucideCopyIcon,
    Eye16: LucideEyeIcon,
    EyeOff16: LucideEyeOffIcon,
    Plus16: LucidePlusIcon,
    X16: LucideXIcon,
    X24: createSizedIcon(LucideXIcon, 24),
};
