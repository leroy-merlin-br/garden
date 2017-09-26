const specs = require.context('.', true, /\.spec/)

sinon = require('sinon')
sinon.test = require('sinon-test')(sinon)

specs.keys().forEach(specs)
