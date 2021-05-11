const allowedDirectives = [
    'v-html',
    'v-slots',
    'v-model',
    'v-models',
    // 'v-show'
];

module.exports = {
    meta: {
        type: 'suggestion',
    },
    create: function (context) {
        return {
            JSXAttribute: function (node) {
                if (node.name && node.name.name) {
                    if (
                        node.name.name.startsWith('v-') &&
                        !allowedDirectives.includes(node.name.name)
                    ) {
                        context.report(
                            node,
                            ['v-model', 'v-models'].includes(node.name.name)
                                ? `${node.name.name} is not recommended, use controlled inputs instead`
                                : `Directive ${node.name.name} is not supported in JSX`,
                        );
                    }
                }
            },
        };
    },
};
