# Type a short description of this rule (prefer-effect)

prefer-effect to avoid use onBeforeUpdate onUpdated lifecycle, that cause Maximum recursive updates exceeded error.

## Rule Details

This rule aims to avoid use onBeforeUpdate onUpdated lifecycle, that cause Maximum recursive updates exceeded error.

Examples of **incorrect** code for this rule:

```jsx
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
    name: 'prefer-effect',
    props: {
        msg: 'prefer-effect',
    },
    setup() {
        onMounted(() => {
            console.log('props.msg emit', props.msg)
        })

        return () => {
            return <section>{props.msg}</section>
        }
    },
})
```

Examples of **correct** code for this rule:

```jsx
import { defineComponent, watch } from 'vue'

export default defineComponent({
    name: 'prefer-effect',
    props: {
        msg: 'prefer-effect',
    },
    setup(props) {
        watch(
            () => props.msg,
            (preMsg, curMsg) => {
                if (preMsg !== curMsg) {
                    console.log('props.msg emit', preMsg, curMsg)
                }
            }
        )

        return () => {
            return <section>{props.msg}</section>
        }
    },
})
```

## When Not To Use It

When you think is unnecessary, and disagree the Rule Details
