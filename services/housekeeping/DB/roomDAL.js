const knex = require('dbAccess')
const logger = require('logger')
const util = require('util')
const errorHelpers = require('errorManagement')

class RoomDAL {
  add (newRoom) {
    logger.info(`About to save room in db ${util.inspect(newRoom)}`)
    return knex('rooms')
      .insert(newRoom)
      .then(result => {
        const savedRoom = { id: result[0], ...newRoom }
        logger.info(`Room saved ${util.inspect(savedRoom)}`)
        return savedRoom
      })
      .catch(error => {
        logger.error(`Error when saving room ${util.inspect(error)}`)
        throw errorHelpers.commonErrors.UnknownError('Error when saving room')
      })
  }
}

module.exports = new RoomDAL()
