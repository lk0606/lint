# Type a short description of this rule (no-getCurrentInstance)

no-getCurrentInstance disallow getCurrentInstance, that cause global pollution, use self useProxyRef instead.

## Rule Details

This rule aims to avoid vue instance global pollution

Examples of **incorrect** code for this rule:

```jsx
import { defineComponent, getCurrentInstance } from 'vue'

export default defineComponent({
    setup() {
        const instance = getCurrentInstance()
        return () => {
            return <section>no-getCurrentInstance</section>
        }
    },
})
```

Examples of **correct** code for this rule:

```jsx
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'no-getCurrentInstance',
    setup() {
        return () => {
            return <section>no-getCurrentInstance</section>
        }
    },
})
```

### Options

If there are any options, describe them here. Otherwise, delete this section.

## When Not To Use It

When you think is unnecessary
