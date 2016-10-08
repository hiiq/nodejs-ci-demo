'use strict'

var request = require('supertest'),
  app = require('../index').app

describe('GET /', function () {
  it('Should return HTTP response with status code 200', function (done) {
    request(app).get('/').expect(200, done)
  })
})

describe('GET /test', function () {
  it('Should return HTTP response with status code 200 and /test body string response', function (done) {
    request(app).get('/test').expect(200).expect('You reached the test route.').end(done)
  })
})

describe('GET /foo', function () {
  it('Should return HTTP response with status code 200 and { message : foo }', function (done) {
    request(app).get('/foo').expect(200).expect({'message': 'foo'}).end(done)
  })
})
