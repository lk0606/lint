/**
 * @fileoverview no-getCurrentInstance disallow getCurrentInstance, that cause global pollution, use self useProxyRef instead
 * @author bantang
 */
'use strict'

const docsUrl = require('../../common/docsUrl')

const RULE_NAME = 'no-getCurrentInstance'
const url = docsUrl(RULE_NAME)

module.exports = {
    name: RULE_NAME,
    meta: {
        docs: {
            description:
                'no-getCurrentInstance disallow getCurrentInstance, that cause global pollution, use self useProxyRef instead ',
            category: 'vue3-jsx',
            recommended: true,
            url,
        },
        type: 'problem',
        fixable: null, // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ],
        messages: {
            noGetCurrentInstance:
                'Disallow getCurrentInstance, that cause global pollution, use self useProxyRef instead',
        },
    },

    create(context) {
        return {
            ImportDeclaration(node) {
                if (node.source.value === 'vue') {
                    if (node.specifiers && Array.isArray(node.specifiers)) {
                        node.specifiers.forEach((s) => {
                            if (s.imported.name === 'getCurrentInstance') {
                                context.report({
                                    node: s,
                                    messageId: 'noGetCurrentInstance',
                                })
                            }
                        })
                    }
                }
            },
        }
    },
}
