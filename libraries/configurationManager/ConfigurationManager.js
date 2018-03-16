'use strict'

let configMode = 'development'

if (!process.env.NODE_ENV) {
  process.stdout.write(
    'Config provider might face difficulties since process.env.NODE_ENV was not defined'
  )
} else {
  configMode = process.env.NODE_ENV
}

const mainConfiguration = require(`../../config/${configMode}`)

let ConfigurationManager = new Proxy(mainConfiguration, {
  get (target, property) {
    if (target[property]) return target[property]
    process.stdout.write(`Access to missing configuration: '${property}'!`)
  }
})

module.exports = ConfigurationManager
