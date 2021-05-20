const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    root: true,
    extends: ['standard'],
    rules: {
        'no-console': isProd ? 'error' : 'warn',
        'no-debugger': isProd ? 'error' : 'warn',
        'comma-dangle': 'off',
        indent: 'off',
        semi: 'off',
        '@typescript-eslint/explicit-module-boundary-types': 0,
    },
};
