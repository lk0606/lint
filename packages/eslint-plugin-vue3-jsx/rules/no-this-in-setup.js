module.exports = {
    meta: {
        type: 'problem',
    },
    create: function (context) {
        return {
            'CallExpression[callee.name="defineComponent"] Property[key.name="setup"] ThisExpression': function (
                node,
            ) {
                context.report(node, 'Don not use this in setup')
            },
        }
    },
}
