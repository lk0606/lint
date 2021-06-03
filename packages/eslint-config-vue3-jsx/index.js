// use airbnb-typescript and eslint-plugin-react, but not eslint-plugin-jsx-a11y
const a11yOff = Object.keys(require('eslint-plugin-jsx-a11y').rules).reduce(
    (acc, rule) => {
        acc[`jsx-a11y/${rule}`] = 'off'
        return acc
    },
    {}
)

module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        es6: true,
        node: true,
        mocha: true,
        jest: true,
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript',
        'plugin:vue/vue3-recommended',
        'plugin:vue3-jsx/recommended',
        // unused airbnb-typescript already extends airbnb-base
        // 'airbnb-base',
        'prettier',
    ],
    plugins: ['vue', '@typescript-eslint'],
    parserOptions: {
        ecmaVersion: 10,
        ecmaFeatures: {
            tsx: true,
            jsx: true,
        },
        project: ['tsconfig.json'],
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    rules: {
        // 'arrow-body-style': 'off',
        // 'no-nested-ternary': 'off',
        // 'no-restricted-syntax': 'off',
        // 'no-script-url': 'off',

        // jsx
        'react/react-in-jsx-scope': 'off',
        'react/no-unknown-property': [2, { ignore: ['class'] }],
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-key': 'error',
        ...a11yOff,
        // base
        semi: ['error', 'never'],
        curly: ['error', 'all'],
        'react/no-unused-prop-types': 0,
        'no-underscore-dangle': 0,
        'no-unused-expressions': 0,
        // TODO 先关掉 参数不可重新复制
        'no-param-reassign': 0,
        // 'no-empty-function': 'off',
        'import/extensions': 0,
        'no-console': 1,
        'no-debugger': 2,
        'max-len': 0,
        'import/prefer-default-export': 0,
        'import/no-unresolved': 0,
        'import/no-extraneous-dependencies': 0,
        'arrow-body-style': 0,
        'no-return-assign': 0,
        'no-use-before-define': 0,
        'no-multiple-empty-lines': [
            'error',
            {
                max: 2,
                maxBOF: 1,
            },
        ],
        'object-curly-newline': [
            'error',
            {
                ImportDeclaration: {
                    multiline: true,
                    minProperties: 2,
                },
                ExportDeclaration: {
                    multiline: true,
                    minProperties: 2,
                },
            },
        ],
        'prefer-const': [
            'error',
            {
                destructuring: 'all',
                ignoreReadBeforeAssign: false,
            },
        ],
        camelcase: [0, { properties: 'never' }],
        // ts
        '@typescript-eslint/no-empty-function': 1,
        // 表达式 func&&func(), 可直接使用func?.()
        '@typescript-eslint/no-unused-expressions': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        // hack
        indent: 0,
        '@typescript-eslint/indent': [
            'error',
            4,
            {
                ignoreComments: true,
            },
        ],
        // TODO enum https://github.com/typescript-eslint/typescript-eslint/issues/2484
        // "no-shadow": [2, { "builtinGlobals": true, "hoist": "all", "allow": [] }],
        // "@typescript-eslint/no-shadow": [2, { "builtinGlobals": true, "hoist": "all", "allow": [] }],
    },
    settings: {
        react: {
            version: '16.9',
        },
    },
}
