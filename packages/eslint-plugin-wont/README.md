# eslint-plugin-wont

Eslint plugin for wont

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-wont`:

```
$ npm install eslint-plugin-wont --save-dev
```

## Usage

Add `wont` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": ["wont"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "wont/rule-name": 2
    }
}
```

## Supported Rules

-   Fill in provided rules here
