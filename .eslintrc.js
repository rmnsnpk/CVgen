module.exports = {
    root: true,
    overrides: [{
            files: ['*.ts'],
            parserOptions: {
                project: 'tsconfig.json',
                tsconfigRootDir: __dirname,
                sourceType: 'module',
            },
            extends: [
                'plugin:@angular-eslint/recommended',
                'airbnb-typescript/base',
                // 'prettier/@typescript-eslint',
                'plugin:import/recommended',
                'plugin:prettier/recommended',
            ],
            rules: {
                'import/named': 0,
            },
        },
        {
            files: ['*.component.html'],
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