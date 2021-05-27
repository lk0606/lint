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

Add `wont` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": ["vue3-jsx"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "vue3-jsx/component-name": 2
    }
}
```

## Supported Rules

-   [component-name](https://github.com/lk0606/lint/blob/master/packages/eslint-plugin-vue3-jsx/docs/rules/component-name.md)
