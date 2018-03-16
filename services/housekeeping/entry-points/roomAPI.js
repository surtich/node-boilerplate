const express = require('express')
const util = require('util')
const logger = require('logger')
const Room = require('../domain/room')
const RoomService = require('../domain/roomService')
const router = express.Router()

router.post('/', async (req, res, next) => {
  try {
    logger.debug(
      `Room controller was called to add new Room ${util.inspect(req.body)}`
    )
    const newRoomToAdd = Object.assign(new Room(), req.body)
    const newRomResult = await new RoomService(req.context).add(newRoomToAdd)
    res.json(newRomResult)
  } catch (error) {
    next(error)
  }
})

module.exports = router
