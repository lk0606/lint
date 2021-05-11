<a name="top"></a>

A plugin to strict keep the style of using JSX in Vue3 project.

<a name="rules"></a>

## Rules

-   [prefer-effect](#rule-prefer-effect)
-   [prefer-render-in-setup](#rule-prefer-render-in-setup)
-   [no-this-in-setup](#rule-no-this-in-setup)
-   [no-getCurrentInstance](#rule-no-getCurrentInstance)
-   [component-nam](#rule-component-name)

## Each Rule

<a name="rule-prefer-effect"></a>

### prefer-effect

When using composition API, mostly you will not need to use lifecyle methods. Or maybe you should just use effects to preform actions.

You may want to fetch data when component mounted:

```js
onMounted(() => {
    fetchData(props.id)
})
```

This will rise a problem, how to fetch data when `props.id` updated. So you may face two situations:

-   the `props.id` never change
-   you have to watch `props.id` to fetch data again

So the best pratice is:

```js
watchEffect(() => {
    fetchData(props.id)
})
```

Whenever `props.id` changed, `fetchData` invoked. If `props.id` never changed, then the `effect` will peform only once.
