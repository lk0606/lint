/**
 * @fileoverview prefer-effect to avoid use onBeforeUpdate onUpdated lifecycle, that cause Maximum recursive updates exceeded error
 * @author bantang
 */
'use strict'

const docsUrl = require('../../common/docsUrl')

const RULE_NAME = 'prefer-effect'
const url = docsUrl(RULE_NAME)

const lifecycles = ['onBeforeUpdate', 'onUpdated']

module.exports = {
    name: RULE_NAME,
    meta: {
        docs: {
            description:
                'prefer-effect to avoid use onBeforeUpdate onUpdated lifecycle, that cause Maximum recursive updates exceeded error',
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
            'prefer-effect': 'Consider using watch or watchEffect instead',
        },
    },

    create(context) {
        return {
            'CallExpression[callee.name="defineComponent"] Property[key.name="setup"] FunctionExpression':
                function (node) {
                    const { body = {} } = node

                    if (Array.isArray(body.body)) {
                        body.body.forEach((s) => {
                            if (
                                s.type === 'ExpressionStatement' &&
                                s.expression.type === 'CallExpression' &&
                                lifecycles.includes(s.expression.callee.name)
                            ) {
                                context.report({
                                    node,
                                    messageId: 'prefer-effect',
                                })
                            }
                        })
                    }
                },
        }
    },
}
