const repoUrl =
    'https://github.com/lk0606/lint/blob/master/packages/eslint-plugin-vue3-jsx'

module.exports = function docsUrl(ruleName) {
    return `${repoUrl}/docs/rules/${ruleName}.md`
}
