module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-prettier-scss'],
    plugins: ['stylelint-scss'],
    rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
        'no-descending-specificity': null,
        'no-empty-source': null,
        'rule-empty-line-before': null,
    },
    overrides: [{
        files: ['**/*.scss'],
        customSyntax: 'postcss-scss',
    }, ],
};