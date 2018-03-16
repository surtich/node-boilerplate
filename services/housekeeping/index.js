const express = require('express')
const router = express.Router()
const roomAPI = require('./entry-points/roomAPI')

router.use('/room', roomAPI)

module.exports.API = router
