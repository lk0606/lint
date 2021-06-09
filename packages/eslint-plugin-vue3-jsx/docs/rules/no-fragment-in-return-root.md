# Type a short description of this rule (no-fragment-in-return-root)

no-fragment-in-return-root to avoid vue component attributes inherited warn.

## Rule Details

This rule aims to Vue warn, like Extraneous non-props attributes (id) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.

Examples of **incorrect** code for this rule:

```jsx
// setup
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
// render
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
// function
const RootFragment = ()=> <>
    <h4>func root fragment</h4>
    <>
        <span>child1</span>
        <span>child2</span>
    </>
</>
```

Examples of **correct** code for this rule:

```jsx
// setup
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
// render
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
// function
const RootFragment = ()=> <section>
    <h4>func root fragment</h4>
    <>
        <span>child1</span>
        <span>child2</span>
    </>
</section>
```

## When Not To Use It

When you think is unnecessary, and disagree the Rule Details
