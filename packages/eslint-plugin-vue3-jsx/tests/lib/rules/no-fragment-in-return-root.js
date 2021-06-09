/**
 * @fileoverview no-fragment-in-return-root to avoid vue component attributes inherited warn.
 * @author bantang
 */
'use strict'

const rule = require('../../../lib/rules/no-fragment-in-return-root')
const { RuleTester } = require('eslint')
const parserOpt = require('../../../common/parserOptions')

const ruleTester = new RuleTester()

ruleTester.run('no-fragment-in-return-root', rule, {
    valid: [
        // setup
        {
            code: `
                import { defineComponent } from 'vue'

                export default defineComponent({
                    name: 'no-fragment-in-return-root',
                    setup() {
                        return ()=> {
                            return <section>
                                <h4>no-fragment-in-return-root</h4>
                                <>
                                    <span>child1</span>
                                    <span>child2</span>
                                </>
                            </section>
                        }
                    }
                })
            `,
            ...parserOpt,
        },
        // render
        {
            code: `
                import { defineComponent } from 'vue'

                export default defineComponent({
                    name: 'no-fragment-in-return-root',
                    render() {
                        return <section>
                            <h4>no-fragment-in-return-root</h4>
                            <>
                                <span>child1</span>
                                <span>child2</span>
                            </>
                        </section>
                    }
                })
            `,
            ...parserOpt,
        },
        // func
        {
            code: `
                const RootFragment = ()=> <section>
                    <h4>func root fragment</h4>
                    <>
                        <span>child1</span>
                        <span>child2</span>
                    </>
                </section>
            `,
            ...parserOpt,
        },
    ],
    invalid: [
        // setup
        {
            code: `
                import { defineComponent } from 'vue'

                export default defineComponent({
                    name: 'no-fragment-in-return-root',
                    setup() {
                        return ()=> {
                            return <>
                                <h4>no-fragment-in-return-root</h4>
                                <>
                                    <span>child1</span>
                                    <span>child2</span>
                                </>
                            </>
                        }
                    }
                })
            `,
            ...parserOpt,
            errors: [
                {
                    messageId: 'no-fragment-in-return-root',
                },
            ],
        },
        // render
        {
            code: `
                import { defineComponent } from 'vue'

                export default defineComponent({
                    name: 'no-fragment-in-return-root',
                    render() {
                        return <>
                            <h4>no-fragment-in-return-root</h4>
                            <>
                                <span>child1</span>
                                <span>child2</span>
                            </>
                        </>
                    }
                })
            `,
            ...parserOpt,
            errors: [
                {
                    messageId: 'no-fragment-in-return-root',
                },
            ],
        },
        {
            code: `
                const RootFragment = ()=> <>
                    <h4>func root fragment</h4>
                    <>
                        <span>child1</span>
                        <span>child2</span>
                    </>
                </>
            `,
            ...parserOpt,
            errors: [
                {
                    messageId: 'no-fragment-in-return-root',
                },
            ],
        },
    ],
})
