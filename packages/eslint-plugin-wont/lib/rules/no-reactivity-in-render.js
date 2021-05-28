/**
 * @fileoverview no-reactivity-in-render to avoid Maximum recursive updates exceeded
 * @author bantang
 */
'use strict'

const docsUrl = require('../../common/docsUrl')

const RULE_NAME = 'no-reactivity-in-render'
const url = docsUrl(RULE_NAME)

const reactivityApis = [
    'reactive',
    'readonly',
    'shallowReactive',
    'shallowReadonly',
    'ref',
    'toRef',
    'toRefs',
    'customRef',
    'shallowRef',
    'triggerRef',
    'computed',
    'watchEffect',
    'watch',
]

module.exports = {
    name: RULE_NAME,
    meta: {
        docs: {
            description:
                'no-reactivity-in-render to avoid Maximum recursive updates exceeded',
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
            'no-reactivity-in-render': 'No reactivity api in render function',
        },
    },

    create(context) {
        return {
            'CallExpression[callee.name="defineComponent"] Property[key.name="setup"] ReturnStatement CallExpression':
                function (node) {
                    if (
                        node.callee &&
                        node.callee.name &&
                        reactivityApis.includes(node.callee.name)
                    ) {
                        context.report({
                            node,
                            messageId: 'no-reactivity-in-render',
                        })
                    }
                },
            'CallExpression[callee.name="defineComponent"] Property[key.name="render"] CallExpression':
                function (node) {
                    if (
                        node.callee &&
                        node.callee.name &&
                        reactivityApis.includes(node.callee.name)
                    ) {
                        context.report({
                            node,
                            messageId: 'no-reactivity-in-render',
                        })
                    }
                },
        }
    },
}
