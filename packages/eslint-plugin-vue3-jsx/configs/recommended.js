module.exports = {
    plugins: ['vue3-jsx'],
    rules: {
        'vue3-jsx/no-getCurrentInstance': 'error',
        'vue3-jsx/prefer-effect': 'error',
        'vue3-jsx/no-this-in-setup': 'error',
        'vue3-jsx/prefer-render-in-setup': 'error',
        'vue3-jsx/component-name': 'error',
        'vue3-jsx/no-directives': 'error',
        'vue3-jsx/no-reactivity-in-render': 'error',
    },
}
