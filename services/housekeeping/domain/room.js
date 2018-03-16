'use strict'
const JSONValidator = require('jsonschema').Validator

class Room {
  static get schema () {
    return {
      id: '/Room',
      type: 'object',
      properties: {
        number: {
          type: 'string'
        },
        createdOn: {
          type: 'date'
        }
      },

      required: ['number', 'createdOn']
    }
  }

  constructor (number, createdOn) {
    this.number = number || '001'
    this.createdOn = createdOn || new Date()
  }

  validate () {
    var v = new JSONValidator()
    return v.validate(this, Room.schema).valid
  }
}

module.exports = Room
