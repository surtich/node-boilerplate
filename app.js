const express = require('express')
const helloComponent = require('./services/hello').API
const errorManagement = require('errorManagement')

console.log(`App is currently starting`)

let app = express()

app.use('/api/hello', helloComponent)
errorManagement.handling.registerAndHandleAllErrors(app)

module.exports = app
