# vue component name needed (component-name)

component name needed.


## Rule Details

This rule aims to ensure component name exist for VUE global registration or more...

Examples of **incorrect** code for this rule:

```jsx
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ComponentNameNeeded',
    setup() {
        return ()=> {
            return <section>component name needed</section>
        }
    }
})
```

Examples of **correct** code for this rule:

```jsx
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return ()=> {
            return <section>component name needed</section>
        }
    }
})
```

## When Not To Use It

When you think is not necessary, and disagree the Rule Details
