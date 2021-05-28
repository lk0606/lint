---
  to: packages/eslint-plugin-wont/docs/rules/<%= name %>.md
---
# Type a short description of this rule (<%= name %>)
// TODO description
Please describe the origin of the rule here.


## Rule Details

// TODO Rule Details
This rule aims to ...

Examples of **incorrect** code for this rule:

// TODO incorrect copy from test
```jsx
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return ()=> {
            return <section v-if={true}>no-directives</section>
        }
    }
})
```

Examples of **correct** code for this rule:

// TODO correct copy from test
```jsx
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ComponentNameNeeded',
    setup() {
        return ()=> {
            return <section v-show={true}>no-directives</section>
        }
    }
})
```

## When Not To Use It

When you think is unnecessary, and disagree the Rule Details

## Further Reading

If there are other links that describe the issue this rule addresses, please include them here in a bulleted list.
