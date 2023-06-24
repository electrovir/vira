import { isTruthy, joinUrlParts } from '@augment-vir/common';
const potentialBasePath = '/vira';
export function createElementBookUrl(...urlParts) {
    const hasBasePath = globalThis.location.pathname.startsWith(potentialBasePath);
    const allParts = [
        hasBasePath ? potentialBasePath : '',
        ...urlParts,
    ].filter(isTruthy);
    return joinUrlParts(...allParts);
}
