/**
 * @fileoverview Directives sometimes cause error, for example: v-if
 * @author bantang
 */
"use strict";

const rule = require("../../../lib/rules/no-directives")

const { RuleTester } = require("eslint")
const parserOpt = require("../../../common/parserOptions")

const ruleTester = new RuleTester()

ruleTester.run("no-directives", rule, {

    valid: [
        {
            code: `
                import { defineComponent } from 'vue'

                export default defineComponent({
                    name: 'ComponentNameNeeded',
                    setup() {
                        return ()=> {
                            return <section v-show={true}>no-directives</section>
                        }
                    }
                })
            `,
            ...parserOpt,
        }
    ],

    invalid: [
        {
            code: `
                import { defineComponent } from 'vue'

                export default defineComponent({
                    setup() {
                        return ()=> {
                            return <section v-if={true}>no-directives</section>
                        }
                    }
                })
            `,
            ...parserOpt,
            errors: [{
                message: "Directive v-if is not supported in JSX",
            }],
        }
    ]
});
