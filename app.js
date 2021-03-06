const express = require('express')
const bodyParser = require('body-parser')
const helloComponent = require('./services/hello').API
const housekeepingComponent = require('./services/housekeeping').API
const errorManagement = require('errorManagement')

console.log(`App is currently starting`)

let app = express()
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())

app.use('/api/hello', helloComponent)
app.use('/api/houseKeeping', housekeepingComponent)
errorManagement.handling.registerAndHandleAllErrors(app)

module.exports = app
