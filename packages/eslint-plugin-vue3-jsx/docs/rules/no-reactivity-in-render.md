# Type a short description of this rule (no-reactivity-in-render)

no-reactivity-in-render to avoid Maximum recursive updates exceeded.

## Rule Details

This rule aims to avoid Maximum recursive updates exceeded

Examples of **incorrect** code for this rule:

```jsx
import { defineComponent, reactive } from 'vue'

export default defineComponent({
    name: 'no-reactivity-in-render',
    setup() {
        return () => {
            const state = reactive({
                show: true,
            })
            return <section>no-reactivity-in-render</section>
        }
    },
})
```

```jsx
import { defineComponent, reactive } from 'vue'

export default defineComponent({
    name: 'no-reactivity-in-render',
    render() {
        const state = reactive({
            show: true,
        })
        return <section>no-reactivity-in-render</section>
    },
})
```

Examples of **correct** code for this rule:

```jsx
import { defineComponent, reactive } from 'vue'

export default defineComponent({
    name: 'no-reactivity-in-render',
    setup() {
        const state = reactive({
            show: true,
        })
        return () => {
            return <section>no-reactivity-in-render</section>
        }
    },
})
```

## When Not To Use It

When you think is unnecessary, and disagree the Rule Details
