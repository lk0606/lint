/**
 * @fileoverview no-this-in-setup to avoid this cause error, use func or get params from setup
 * @author bantang
 */
'use strict'

const rule = require('../../../lib/rules/no-this-in-setup')
const { RuleTester } = require('eslint')
const parserOpt = require('../../../common/parserOptions')

const ruleTester = new RuleTester()

ruleTester.run('no-this-in-setup', rule, {
    valid: [
        {
            code: `
                import { defineComponent } from 'vue'

                export default defineComponent({
                    name: 'no-this-in-setup',
                    props: {
                        msg: 'no-this-in-setup',
                    },
                    setup(props) {
                        return ()=> {
                            return <section>{props.msg}</section>
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
                import { defineComponent } from 'vue'

                export default defineComponent({
                    name: 'no-this-in-setup',
                    props: {
                        msg: 'no-this-in-setup',
                    },
                    setup() {
                        return ()=> {
                            return <section>{this.props.msg}</section>
                        }
                    }
                })
            `,
            ...parserOpt,
            errors: [
                {
                    messageId: 'no-this-in-setup',
                },
            ],
        },
    ],
})
