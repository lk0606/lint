exports.rules = {
    'no-getCurrentInstance': require('./rules/no-getCurrentInstance'),
    'no-this-in-setup': require('./rules/no-this-in-setup'),
    'prefer-render-in-setup': require('./rules/prefer-render-in-setup'),
    'component-name': require('./rules/component-name'),
    'prefer-effect': require('./rules/prefer-effect'),
    'no-directives': require('./rules/no-directives'),
    'no-reactivity-in-render': require('./rules/no-reactivity-in-render'),
};

exports.configs = {
    recommended: require('./configs/recommended'),
};
