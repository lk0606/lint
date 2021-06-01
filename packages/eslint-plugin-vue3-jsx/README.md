# eslint-plugin-vue3-jsx

Eslint plugin for vue3-jsx

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-vue3-jsx`:

```
$ npm install eslint-plugin-vue3-jsx --save-dev
```

## Usage

Add `vue3-jsx` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": ["vue3-jsx"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "vue3-jsx/no-getCurrentInstance": 2,
        "vue3-jsx/prefer-effect": 2,
        "vue3-jsx/no-this-in-setup": 2,
        "vue3-jsx/prefer-render-in-setup": 2,
        "vue3-jsx/component-name": 2,
        "vue3-jsx/no-directives": 2,
        "vue3-jsx/no-reactivity-in-render": 2
    }
}
```

## Supported Rules

-   [no-getCurrentInstance](https://github.com/lk0606/lint/blob/master/packages/eslint-plugin-vue3-jsx/docs/rules/no-getCurrentInstance.md)
-   [prefer-effect](https://github.com/lk0606/lint/blob/master/packages/eslint-plugin-vue3-jsx/docs/rules/prefer-effect.md)
-   [no-this-in-setup](https://github.com/lk0606/lint/blob/master/packages/eslint-plugin-vue3-jsx/docs/rules/no-this-in-setup.md)
-   [prefer-render-in-setup](https://github.com/lk0606/lint/blob/master/packages/eslint-plugin-vue3-jsx/docs/rules/prefer-render-in-setup.md)
-   [component-name](https://github.com/lk0606/lint/blob/master/packages/eslint-plugin-vue3-jsx/docs/rules/component-name.md)
-   [no-directives](https://github.com/lk0606/lint/blob/master/packages/eslint-plugin-vue3-jsx/docs/rules/no-directives.md)
-   [no-reactivity-in-render](https://github.com/lk0606/lint/blob/master/packages/eslint-plugin-vue3-jsx/docs/rules/no-reactivity-in-render.md)
