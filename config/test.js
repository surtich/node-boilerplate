const R = require('ramda')
const defaultConfig = require('./defaults')

module.exports = R.mergeDeepRight(defaultConfig, {
  environment: 'test',
  knex: {
    connection: {
      host: 'localhost'
    }
  }
})
