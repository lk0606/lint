module.exports = {
    meta: {
        type: 'problem',
    },
    create: function (context) {
        return {
            'CallExpression[callee.name="defineComponent"] Property[key.name="render"]': function (
                node,
            ) {
                context.report(node, 'Please return render function in setup')
            },
        }
    },
}
