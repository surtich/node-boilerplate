const express = require('express')
const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    console.log(`Hello controller was called`)
    res.send('Hello World!')
  } catch (error) {
    next(error)
  }
})

module.exports = router
