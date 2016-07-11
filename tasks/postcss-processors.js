const variables = { variables: require('../src/css/defaults.json') }
const customMedia = { mediaQueries: true }

module.exports = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-each'),
  require('postcss-for'),
  require('postcss-simple-vars')(variables),
  require('postcss-calc')(customMedia),
  require('postcss-color-function'),
  require('postcss-custom-media'),
  require('postcss-nested'),
  require('autoprefixer'),
  require('cssnano')
]
