const configurationManager = require('configurationManager')
const knex = require('knex')

module.exports = knex(configurationManager.knex)
