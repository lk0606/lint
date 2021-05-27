/**
 * @fileoverview vue component name needed
 * @author bantang
 */
"use strict";

const rule = require("../../../lib/rules/component-name")
const { RuleTester } = require("eslint")

const ruleTester = new RuleTester()

ruleTester.run("component-name", rule, {
    valid: [
        {
            code: `
                import { defineComponent } from 'vue'

                export default defineComponent({
                    name: 'ComponentNameNeeded',
                    setup() {
                        return ()=> {
                            return <section>component name needed</section>
                        }
                    }
                })
            `
        }
    ],
    invalid: [
        {
            code: `
                import { defineComponent } from 'vue'

                export default defineComponent({
                    setup() {
                        return ()=> {
                            return <section>component name needed</section>
                        }
                    }
                })
            `,
            errors: [{
                messageId: "componentNameNeeded",
            }],
            parserOptions: {
                ecmaFeatures: {
                jsx: true,
                },
            },
        }
    ]
});
