/**
 * @fileoverview prefer-effect to avoid use onBeforeUpdate onUpdated lifecycle, that cause Maximum recursive updates exceeded error
 * @author bantang
 */
'use strict'

const rule = require('../../../lib/rules/prefer-effect')
const { RuleTester } = require('eslint')
const parserOpt = require('../../../common/parserOptions')

const ruleTester = new RuleTester()

ruleTester.run('prefer-effect', rule, {
    valid: [
        {
            code: `
                import { defineComponent, watch } from 'vue'

                export default defineComponent({
                    name: 'prefer-effect',
                    props: {
                        msg: 'prefer-effect'
                    },
                    setup(props) {
                        watch(
                            ()=> props.msg,
                            (preMsg, curMsg)=> {
                                if(preMsg !== curMsg) {
                                    console.log('props.msg emit', preMsg, curMsg)
                                }
                            }
                        )

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
                import { defineComponent, onBeforeUpdate } from 'vue'

                export default defineComponent({
                    name: 'prefer-effect',
                    props: {
                        msg: 'prefer-effect'
                    },
                    setup() {
                        onBeforeUpdate(()=> {
                            console.log('props.msg emit', props.msg)
                        })

                        return ()=> {
                            return <section>{props.msg}</section>
                        }
                    }
                })
            `,
            ...parserOpt,
            errors: [
                {
                    messageId: 'prefer-effect',
                },
            ],
        },
    ],
})
