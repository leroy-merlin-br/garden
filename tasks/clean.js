const paths = require('./paths')
const del = require('del')

module.exports = () => del([paths.public], {force: true})
