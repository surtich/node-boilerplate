const express = require('express')
const bodyParser = require('body-parser')
const housekeepingComponent = require('./index').API
const errorManagement = require('errorManagement')

console.log(`App is currently starting`)

let app = express()
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())

app.use('/api/housekeeping', housekeepingComponent)
errorManagement.handling.registerAndHandleAllErrors(app)

module.exports = app
