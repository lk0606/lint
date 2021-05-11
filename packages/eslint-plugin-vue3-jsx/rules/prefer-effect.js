const lifecycles = [
    'onBeforeUpdate',
    'onMounted',
    'onBeforeUpdate',
    'onUpdated',
    'onBeforeUnmount',
    'onUnmounted',
]

module.exports = {
    meta: {
        type: 'suggestion',
    },
    create: function (context) {
        return {
            'CallExpression[callee.name="defineComponent"] Property[key.name="setup"] FunctionExpression': function (
                node,
            ) {
                const body = node.body

                if (Array.isArray(body)) {
                    body.forEach((s) => {
                        if (
                            s.type === 'ExpressionStatement' &&
                            s.expression === 'CallExpression' &&
                            lifecycles.includes(s.expression.callee.name)
                        ) {
                            context.report(
                                node,
                                'Consider using watch or watchEffect instead',
                            )
                        }
                    })
                }
            },
        }
    },
}
