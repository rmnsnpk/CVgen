module.exports = {
  root: true,

  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
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
        // 'prettier/@typescript-eslint',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
      ],
      rules: {
        'import/named': 'off',
        'prettier/prettier': [
          'error',
          {
            endOfLine: 'auto',
          },
        ],
      },
    },
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {
        'max-len': ['error', { code: 140 }],
      },
    },
    {
      files: ['*.component.ts'],
      extends: ['plugin:@angular-eslint/template/process-inline-templates'],
    },
  ],
};
