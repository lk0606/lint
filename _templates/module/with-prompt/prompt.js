// https://github.com/enquirer/enquirer

module.exports = [
    {
        type: 'input',
        name: 'name',
        message: '请输入模块名称，请使用lower-case命名',
        validate(val) {
            if (/^[a-z]+(-([a-zA-Z]+))+$/.test(val)) {
                return true
            }
            return 'lower-case命名。例如: no-console'
        },
    },
]
