module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        sourceType: 'module',
        project: 'tsconfig.eslint.json',
        tsconfigRootDir: './',
      },
      settings: {
        'import/resolver': {
          node: {
            paths: ['.'],
          },
        },
      },

      extends: [
        'plugin:@angular-eslint/recommended',
        'airbnb-typescript/base',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
      ],
      rules: {
        'import/named': 'off',
        'no-unused-expressions': 'off',
        'prettier/prettier': [
          'error',
          {
            endOfLine: 'auto',
            printWidth: 140,
          },
        ],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      },
    },

    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {},
    },
    {
      files: ['*.component.ts'],
      extends: ['plugin:@angular-eslint/template/process-inline-templates'],
    },
  ],
};
