/**
 * @fileoverview no-this-in-setup to avoid this cause error, use func or get params from setup.
 * @author bantang
 */
'use strict'

const docsUrl = require('../../common/docsUrl')

const RULE_NAME = 'no-this-in-setup'
const url = docsUrl(RULE_NAME)

module.exports = {
    name: RULE_NAME,
    meta: {
        docs: {
            description:
                'no-this-in-setup to avoid this cause error, use func or get params from setup',
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
            'no-this-in-setup': 'Don not use this in setup',
        },
    },

    create(context) {
        return {
            'CallExpression[callee.name="defineComponent"] Property[key.name="setup"] ThisExpression':
                function (node) {
                    context.report({
                        node,
                        messageId: 'no-this-in-setup',
                    })
                },
        }
    },
}
