---
  to: packages/eslint-plugin-wont/docs/rules/<%= name %>.md
---
# Type a short description of this rule (<%= name %>)

Please describe the origin of the rule here.


## Rule Details

This rule aims to ...

Examples of **incorrect** code for this rule:

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

### Options

If there are any options, describe them here. Otherwise, delete this section.

## When Not To Use It

When you think is unnecessary
