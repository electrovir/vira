const {baseConfig} = require('virmator/base-configs/base-cspell.js');

module.exports = {
    ...baseConfig,
    ignorePaths: [
        ...baseConfig.ignorePaths,
        '**/dist-book/',
    ],
    words: [
        ...baseConfig.words,
        'postpublish',
    ],
};
