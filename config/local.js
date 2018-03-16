const deepExtend = require('deep-extend')
const defaultConfig = require('./defaults')

module.exports = deepExtend({}, defaultConfig, {
  environment: 'local',
  knex: {
    connection: {
      host: 'localhost'
    }
  }
})
