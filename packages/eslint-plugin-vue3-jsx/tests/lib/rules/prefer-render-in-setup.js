/**
 * @fileoverview prefer-render-in-setup to ensure use setup api, hug function, improved reusability. avoid use render like vue2.x.
 * @author bantang
 */
'use strict'

const rule = require('../../../lib/rules/prefer-render-in-setup')
const { RuleTester } = require('eslint')
const parserOpt = require('../../../common/parserOptions')

const ruleTester = new RuleTester()

ruleTester.run('prefer-render-in-setup', rule, {
    valid: [
        {
            code: `
                import { defineComponent } from 'vue'

                export default defineComponent({
                    name: 'prefer-render-in-setup',
                    setup() {
                        return ()=> (
                            <section>prefer-render-in-setup</section>
                        )
                    }
                })
            `,
            ...parserOpt,
        },
    ],
    invalid: [
        {
            code: `
                import { defineComponent } from 'vue'

                export default defineComponent({
                    name: 'prefer-render-in-setup',
                    render() {
                        return <section>prefer-render-in-setup</section>
                    }
                })
            `,
            ...parserOpt,
            errors: [
                {
                    messageId: 'prefer-render-in-setup',
                },
            ],
        },
    ],
})
