module.exports = {
    meta: {
        type: 'problem',
    },
    create(context) {
        return {
            ImportDeclaration(node) {
                if (node.source.value === 'vue') {
                    if (node.specifiers && Array.isArray(node.specifiers)) {
                        // context.report(node, 'Do not use getCurrentInstance')
                        node.specifiers.forEach((s) => {
                            if (s.imported.name === 'getCurrentInstance') {
                                context.report(
                                    s,
                                    'Do not use getCurrentInstance'
                                )
                            }
                        })
                    }
                }
            },
        }
    },
}
