# Directives sometimes cause error, for example: v-if (no-directives)

```js
// allowed official
allowedDirectives = ['v-html', 'v-slots', 'v-model', 'v-models', 'v-show']
// allowed custom
/^(v-custom)[A-Z]+[a-z]+$/.test('directives')
```


## Rule Details

This rule aims to avoid directives cause error, which in vue3 jsx

Examples of **incorrect** code for this rule:
> v-if is not allowed, that cause error

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
> TODO allowed: [], pattern: /^(v-custom)[A-Z]+[a-z]+$/
## When Not To Use It

When you think is unnecessary

