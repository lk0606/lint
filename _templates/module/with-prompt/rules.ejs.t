---
  to: packages/eslint-plugin-vue3-jsx/lib/rules/<%= name %>.js
---
/**
 * @fileoverview <%= name %> desc // TODO Rule to ...
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
            // TODO desc
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
