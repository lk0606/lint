const allowedDirectives = [
    'v-html',
    'v-slots',
    'v-model',
    'v-models',
    'v-show',
];

module.exports = {
    meta: {
        type: 'suggestion',
    },
    create: function (context) {
        return {
            JSXAttribute: function (node) {
                if (node.name && node.name.name) {
                    const name = node.name.name
                    const isCustomDirective = /^(v-custom)[A-Z]+[a-z]+$/.test(name)
                    const errMsg = `Directive ${name} is not supported in JSX`
                    if (
                        name.startsWith('v-') &&
                        !allowedDirectives.includes(name) &&
                        !isCustomDirective
                    ) {
                        context.report(
                            node,
                            errMsg,
                        );
                    }
                }
            },
        };
    },
};
