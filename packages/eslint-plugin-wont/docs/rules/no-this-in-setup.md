# Type a short description of this rule (no-this-in-setup)

no-this-in-setup to avoid this cause error, use func or get params from setup.

## Rule Details

This rule aims to avoid this cause error, use func or get params from setup.

Examples of **incorrect** code for this rule:

```jsx
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'no-this-in-setup',
    props: {
        msg: 'no-this-in-setup',
    },
    setup() {
        return () => {
            return <section>{this.props.msg}</section>
        }
    },
})
```

Examples of **correct** code for this rule:

```jsx
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'no-this-in-setup',
    props: {
        msg: 'no-this-in-setup',
    },
    setup(props) {
        return () => {
            return <section>{props.msg}</section>
        }
    },
})
```

## When Not To Use It

When you think is unnecessary, and disagree the Rule Details
