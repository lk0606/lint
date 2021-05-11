const a11yOff = Object.keys(require('eslint-plugin-jsx-a11y').rules).reduce(
    (acc, rule) => {
        acc[`jsx-a11y/${rule}`] = 'off';
        return acc;
    },
    {},
);

module.exports = {
    extends: ['airbnb-typescript', 'plugin:vue3-jsx/recommended'],
    rules: {
        'arrow-body-style': 'off',
        'no-nested-ternary': 'off',
        'no-restricted-syntax': 'off',
        'no-script-url': 'off',

        // jsx
        'react/react-in-jsx-scope': 'off',
        'react/no-unknown-property': [2, { ignore: ['class'] }],
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-key': 'error',

        'jsx-a11y/anchor-is-valid': 'off',
        ...a11yOff,
        '@typescript-eslint/no-unused-expressions': 0,
    },
    settings: {
        react: {
            version: '16.9',
        },
    },
};
