/**
 * @fileoverview no-fragment-in-return-root to avoid vue component attributes inherited warn.
 * @author bantang
 */
'use strict'

const docsUrl = require('../../common/docsUrl')

const RULE_NAME = 'no-fragment-in-return-root'
const url = docsUrl(RULE_NAME)

module.exports = {
    name: RULE_NAME,
    meta: {
        docs: {
            description:
                'no-fragment-in-return-root to avoid vue component attributes inherited warn.',
            category: 'vue3-jsx',
            recommended: true,
            url,
        },
        type: 'suggestion',
        fixable: null, // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ],
        messages: {
            'no-fragment-in-return-root': 'Do not return fragment in root node',
        },
    },

    create(context) {
        return {
            'ReturnStatement>JSXFragment': (node) => {
                context.report({
                    node,
                    messageId: 'no-fragment-in-return-root',
                })
            },
            'ArrowFunctionExpression>JSXFragment': (node) => {
                context.report({
                    node,
                    messageId: 'no-fragment-in-return-root',
                })
            },
        }
    },
}
