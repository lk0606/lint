/**
 * @fileoverview no-reactivity-in-render to avoid Maximum recursive updates exceeded
 * @author bantang
 */
'use strict'

const rule = require('../../../lib/rules/no-reactivity-in-render')
const { RuleTester } = require('eslint')
const parserOpt = require('../../../common/parserOptions')

const ruleTester = new RuleTester()

ruleTester.run('no-reactivity-in-render', rule, {
    valid: [
        {
            code: `
                import { defineComponent, reactive } from 'vue'

                export default defineComponent({
                    name: 'no-reactivity-in-render',
                    setup() {
                        const state = reactive({
                            show: true,
                        })
                        return ()=> {
                            return <section>no-reactivity-in-render</section>
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
                import { defineComponent, reactive } from 'vue'

                export default defineComponent({
                    name: 'no-reactivity-in-render',
                    setup() {
                        return ()=> {
                            const state = reactive({
                                show: true,
                            })
                            return <section>no-reactivity-in-render</section>
                        }
                    }
                })
            `,
            ...parserOpt,
            errors: [
                {
                    messageId: 'no-reactivity-in-render',
                },
            ],
        },
        {
            code: `
                import { defineComponent, reactive } from 'vue'

                export default defineComponent({
                    name: 'no-reactivity-in-render',
                    render() {
                        const state = reactive({
                            show: true,
                        })
                        return <section>no-reactivity-in-render</section>
                    }
                })
            `,
            ...parserOpt,
            errors: [
                {
                    messageId: 'no-reactivity-in-render',
                },
            ],
        },
    ],
})
