---
  to: packages/eslint-plugin-wont/lib/rules/<%= name %>.js
---
/**
 * @fileoverview <%= name %> desc
 * @author bantang
 */
"use strict";

const docsUrl = require('../../common/docsUrl')

const RULE_NAME = '<%= name %>'
const url = docsUrl(RULE_NAME)

module.exports = {
    name: RULE_NAME,
    meta: {
        docs: {
            description: "<%= name %> desc",
            category: "vue3-jsx",
            recommended: true,
            url,
        },
        type: "suggestion",
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ],
        messages: {
            // TODO messageId <%= name %> need cameCase
            '<%= name %>': '<%= name %> error message',
        },
    },

    create(context) {
        return {
            'CallExpression[callee.name="defineComponent"]>ObjectExpression': function (node) {
                context.report({
                    node,
                    messageId: '<%= name %>',
                })
            },
        };
    }
};
