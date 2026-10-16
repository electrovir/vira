const {baseConfig} = require('@virmator/spellcheck/configs/cspell.config.base.cjs');

module.exports = {
    ...baseConfig,
    ignorePaths: [
        ...baseConfig.ignorePaths,
        'packages/vira/src/icons/lucide/',
    ],
    words: [
        ...baseConfig.words,
        'valuenow',
    ],
};
