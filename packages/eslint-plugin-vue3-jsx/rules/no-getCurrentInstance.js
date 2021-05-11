module.exports = {
    meta: {
        type: 'problem',
    },
    create: function (context) {
        return {
            ImportDeclaration: function (node) {
                if (node.source.value === 'vue') {
                    if (node.specifiers && Array.isArray(node.specifiers)) {
                        // context.report(node, 'Do not use getCurrentInstance')
                        node.specifiers.forEach(function (s) {
                            if (s.imported.name === 'getCurrentInstance') {
                                context.report(
                                    s,
                                    'Do not use getCurrentInstance',
                                )
                            }
                        })
                    }
                }
            },
        }
    },
}
