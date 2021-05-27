module.exports = {
    meta: {
        type: 'suggestion',
    },
    create(context) {
        return {
            'CallExpression[callee.name="defineComponent"]>ObjectExpression':
                function (node) {
                    const { properties } = node
                    if (Array.isArray(properties)) {
                        for (const p of properties) {
                            if (p.key && p.key.name === 'name') {
                                return
                            }
                        }
                    }
                    context.report(node, 'component name needed')
                },
        }
    },
}
