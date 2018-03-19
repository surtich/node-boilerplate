const R = require('ramda')
const defaultConfig = require('./defaults')

module.exports = R.mergeDeepRight(defaultConfig, {
  environment: 'local',
  knex: {
    connection: {
      host: 'localhost'
    }
  }
})
