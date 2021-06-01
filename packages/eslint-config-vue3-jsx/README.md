# eslint-config-vue3-jsx

A config preset for develop vue3, which using jsx

## Installation

```bash
$ npm i eslint-config-vue3-jsx -D
```

## Usage

Add `vue3-jsx` to the extends section of your `.eslintrc` configuration file. You can omit the `eslint-config-` prefix:

```js
module.exports = {
    extends: ['vue3-jsx'],
}
```

需保证项目已安装 `typescript` 依赖，另外如果项目的 TS 配置文件不是 `./tsconfig.json`，则需要设置 `.eslintrc` 中的 [parserOptions.project](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject) 字段 ，例如：

```js
module.exports = {
    extends: ['vue3-jsx'],
    parserOptions: {
        project: './tsconfig.eslint.json',
    },
}
```

## Others

 项目中已经内置了 `prettier`,  你只需根据个人喜好或 复制 [.prettierignore](https://github.com/lk0606/lint/blob/master/.prettierignore)和[.prettierrc.js](https://github.com/lk0606/lint/blob/master/.prettierrc.js)文件到你的根项目即可

如果`vscode`不能正确显示报错信息，请打开`settings.json`, 键入

```json
    "eslint.validate": ["javascript", "javascriptreact", "typescriptreact"]
```
