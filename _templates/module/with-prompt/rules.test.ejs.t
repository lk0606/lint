---
  to: packages/eslint-plugin-wont/tests/lib/rules/<%= name %>.js
---
/**
 * @fileoverview <%= name %> desc
 * @author bantang
 */
"use strict";

const rule = require("../../../lib/rules/<%= name %>")
const { RuleTester } = require("eslint")
const parserOpt = require("../../../common/parserOptions")

const ruleTester = new RuleTester()

ruleTester.run("<%= name %>", rule, {
    valid: [
        // TODO some example success
        {
            code: `
                import { defineComponent } from 'vue'

                export default defineComponent({
                    name: 'ComponentNameNeeded',
                    setup() {
                        return ()=> {
                            return <section><%= name %></section>
                        }
                    }
                })
            `,
            ...parserOpt,
        }
    ],
    invalid: [
        // TODO some example fail
        {
            code: `
                import { defineComponent } from 'vue'

                export default defineComponent({
                    setup() {
                        return ()=> {
                            return <section><%= name %></section>
                        }
                    }
                })
            `,
            ...parserOpt,
            // TODO 更换 messageId
            errors: [{
                messageId: "componentNameNeeded",
            }],
        }
    ]
});
