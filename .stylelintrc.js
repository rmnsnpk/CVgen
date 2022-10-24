module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier-scss'],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'no-descending-specificity': null,
    'no-empty-source': null,
    'rule-empty-line-before': null,
    'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['ng-deep'] }],
    'color-function-notation': 'legacy',
  },
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
};
