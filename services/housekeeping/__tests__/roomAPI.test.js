const request = require('supertest')
const app = require('../app')

jest.mock('logger')

describe('Test the root path', () => {
  test('It should response the GET method', () => {
    return request(app)
      .post('/api/housekeeping/room')
      .send('number=1000')
      .then(response => {
        expect(response.statusCode).toBe(200)
      })
  })
})
