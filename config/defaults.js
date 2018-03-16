'use strict'

module.exports = {
  knex: {
    client: 'mysql',
    connection: {
      host: 'apirato-mysql',
      user: 'root',
      password: 'root',
      database: 'housekeeping'
    },
    pool: { min: 0, max: 7 }
  }
}
