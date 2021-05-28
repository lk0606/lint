/**
 * @fileoverview Eslint plugin for vue3-jsx
 * @author bantang
 */
'use strict'

const requireIndex = require('requireindex')

// import all rules in lib/rules
module.exports.rules = requireIndex(`${__dirname}/rules`)
