/**
 * @fileoverview vue component name needed
 * @author bantang
 */
"use strict";

const docsUrl = require('../../common/docsUrl')

const RULE_NAME = 'component-name'
const url = docsUrl(RULE_NAME)

module.exports = {
    name: RULE_NAME,
    meta: {
        docs: {
            description: "vue component name needed",
            category: "vue",
            recommended: true,
            url,
        },
        type: "suggestion",
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ],
        messages: {
            componentNameNeeded: 'component name needed',
        },
    },

    create(context) {
        return {
            'CallExpression[callee.name="defineComponent"]>ObjectExpression': function (node) {
                const {properties} = node;
                if (Array.isArray(properties)) {
                    for (const p of properties) {
                        if (p.key && p.key.name === 'name') {
                            return
                        }
                    }
                }
                context.report({
                    node,
                    messageId: 'componentNameNeeded',
                })
            },
        };
    }
};
