'use strict'

const logger = require('logger')
const errorHelpers = require('errorManagement')
const DAL = require('../DB/roomDAL')

class RoomService {
  async add (newRoom) {
    logger.info(
      `Room service is about to add new room ${JSON.stringify(newRoom)}`
    )

    if (!newRoom.validate()) {
      throw errorHelpers.commonErrors.InvalidInputError('Invalid room')
    }

    const theSavedRoom = await DAL.add(newRoom)

    return theSavedRoom
  }
}

module.exports = RoomService
