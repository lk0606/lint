/**
 * @fileoverview Directives sometimes cause error, for example: v-if
 * @author bantang
 */
"use strict";

const docsUrl = require('../../common/docsUrl')

const RULE_NAME = 'no-directives'
const url = docsUrl(RULE_NAME)

const allowedDirectives = ['v-html', 'v-slots', 'v-model', 'v-models', 'v-show']

const noDirectives = {
    meta: {
        docs: {
            description: "vue3 jsx no directives",
            category: "vue3-jsx",
            recommended: true,
            url,
        },
        type: "problem",
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ],
        // messages: {
        //     noDirectives: 'Directive is not supported in JSX',
        // },
    },

    create(context) {
        return {
            JSXAttribute(node) {
                if (node.name && node.name.name) {
                    const { name } = node.name
                    const isCustomDirective = /^(v-custom)[A-Z]+[a-z]+$/.test(
                        name
                    )
                    const errMsg = `Directive ${name} is not supported in JSX`
                    // noDirectives.meta.messages = errMsg
                    if (
                        name.startsWith('v-') &&
                        !allowedDirectives.includes(name) &&
                        !isCustomDirective
                    ) {
                        context.report({
                            node,
                            message: errMsg,
                            // messageId: 'noDirectives',
                        })
                    }
                }
            },
        }
    },
};

module.exports = noDirectives
