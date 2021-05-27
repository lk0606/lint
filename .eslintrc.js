const isProd = process.env.NODE_ENV === 'production'
console.log('isProd :>> ', isProd)
module.exports = {
    root: true,
    extends: ['eslint-config-ali', 'prettier'],
    rules: {
        'no-console': isProd ? 2 : 1,
        'no-debugger': isProd ? 2 : 1,
    },
}
