const express = require('express')
const helloComponent = require('./index').API

console.log(`App is currently starting`)

let app = express()

app.use('/api/hello', helloComponent)

module.exports = app
