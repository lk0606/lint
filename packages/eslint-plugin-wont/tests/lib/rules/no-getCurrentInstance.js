/**
 * @fileoverview no-getCurrentInstance desc // TODO Rule to ...
 * @author bantang
 */
'use strict'

const rule = require('../../../lib/rules/no-getCurrentInstance')
const { RuleTester } = require('eslint')
const parserOpt = require('../../../common/parserOptions')

const ruleTester = new RuleTester()

ruleTester.run('no-getCurrentInstance', rule, {
    valid: [
        {
            code: `
                import { defineComponent } from 'vue'

                export default defineComponent({
                    name: 'no-getCurrentInstance',
                    setup() {
                        return ()=> {
                            return <section>no-getCurrentInstance</section>
                        }
                    }
                })
            `,
            ...parserOpt,
        },
    ],
    invalid: [
        {
            code: `
                import { defineComponent, getCurrentInstance } from 'vue'

                export default defineComponent({
                    setup() {
                        const instance = getCurrentInstance()
                        return ()=> {
                            return <section>no-getCurrentInstance</section>
                        }
                    }
                })
            `,
            ...parserOpt,
            errors: [
                {
                    messageId: 'no-getCurrentInstance',
                },
            ],
        },
    ],
})
