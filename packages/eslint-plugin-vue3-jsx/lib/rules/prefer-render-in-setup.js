/**
 * @fileoverview prefer-render-in-setup to ensure use setup api, hug function, improved reusability. avoid use render like vue2.x.
 * @author bantang
 */
'use strict'

const docsUrl = require('../../common/docsUrl')

const RULE_NAME = 'prefer-render-in-setup'
const url = docsUrl(RULE_NAME)

module.exports = {
    name: RULE_NAME,
    meta: {
        docs: {
            description:
                'prefer-render-in-setup to ensure use setup api, hug function, improved reusability. avoid use render like vue2.x.',
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
            'prefer-render-in-setup': 'Please return render function in setup',
        },
    },

    create(context) {
        return {
            'CallExpression[callee.name="defineComponent"] Property[key.name="render"]':
                function (node) {
                    context.report({
                        node,
                        messageId: 'prefer-render-in-setup',
                    })
                },
        }
    },
}
