const reactivityApis = [
    'reactive',
    'readonly',
    'shallowReactive',
    'shallowReadonly',
    'ref',
    'toRef',
    'toRefs',
    'customRef',
    'shallowRef',
    'triggerRef',
    'computed',
    'watchEffect',
    'watch',
]

// TODO: add custom composition API match

module.exports = {
    meta: {
        type: 'suggestion',
    },
    create (context) {
        return {
            'CallExpression[callee.name="defineComponent"] Property[key.name="setup"] ReturnStatement CallExpression':
                function (node) {
                    if (
                        node.callee &&
                        node.callee.name &&
                        reactivityApis.includes(node.callee.name)
                    ) {
                        context.report(
                            node,
                            'No reactivity api in render function'
                        )
                    }
                },
            'CallExpression[callee.name="defineComponent"] Property[key.name="render"] CallExpression':
                function (node) {
                    if (
                        node.callee &&
                        node.callee.name &&
                        reactivityApis.includes(node.callee.name)
                    ) {
                        context.report(
                            node,
                            'No reactivity api in render function'
                        )
                    }
                },
        }
    },
}
