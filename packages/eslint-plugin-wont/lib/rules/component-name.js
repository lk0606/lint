/**
 * @fileoverview vue component name needed
 * @author bantang
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "vue component name needed",
            category: "vue",
            recommended: true
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
                            context.report({
                                node,
                                messageId: 'componentNameNeeded',
                            })
                            return
                        }
                    }
                }
            },
        };
    }
};
