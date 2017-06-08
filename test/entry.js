const specs = require.context('.', true, /\.spec/)

const sinonTest = require('sinon-test')
sinon = require('sinon')

sinon.test = sinonTest.configureTest(sinon)

specs.keys().forEach(specs)
