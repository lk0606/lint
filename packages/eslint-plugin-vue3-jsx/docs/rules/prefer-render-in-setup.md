# Type a short description of this rule (prefer-render-in-setup)

prefer-render-in-setup to ensure use setup api, hug function, improved reusability. avoid use render like vue2.x.

## Rule Details

This rule aims to ensure render dom, if do not want render, just return null.

Examples of **incorrect** code for this rule:

```jsx
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'prefer-render-in-setup',
    render() {
        return <section>prefer-render-in-setup</section>
    },
})
```

Examples of **correct** code for this rule:

```jsx
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'prefer-render-in-setup',
    setup() {
        return () => <section>prefer-render-in-setup</section>
    },
})
```

## When Not To Use It

When you think is unnecessary, and disagree the Rule Details
