// https://github.com/enquirer/enquirer

module.exports = [
    {
        type: 'input',
        name: 'name',
        message: '请输入模块名称，请使用连字符命名',
        validate(val) {
            if (/^[a-z](-[a-z])+$/.test(val)) {
                return true
            }
            return '连字符命名。例如: no-console'
        },
    },
]
