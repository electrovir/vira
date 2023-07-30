const {baseConfig} = require('virmator/base-configs/base-cspell.js');

module.exports = {
    ...baseConfig,
    ignorePaths: [
        ...baseConfig.ignorePaths,
        '**/book-dist/',
    ],
    words: [
        ...baseConfig.words,
        'postpublish',
    ],
};
