'use strict'

var cool = require('cool-ascii-faces'),
  express = require('express'),
  app = express(),
  converter = require('./src/converter'),
  globals = require('globals')

app.get('/', function (req, res) {
  res.status(200).send('Welcome to hiiq/nodejs-ci-demo home page...')
})

app.get('/ci-build-servers', function (req, res) {
  res.status(200).send('<b>CONTINUOUS INTEGRATION BUILD SERVERS:</b> <u>Travis CI</u>, <u>CircleCI</u> and <u>Wercker</u>.')
})

app.get('/test', function (req, res) {
  res.status(200).send('You reached the test route.')
})

app.get('/foo', function (req, res) {
  res.send({message: 'foo'})
})

app.get('/cool', function (req, res) {
  res.send(cool())
})

app.get('/rgbToHex', function (req, res) {
  var red = parseInt(req.query.red, 10)
  var green = parseInt(req.query.green, 10)
  var blue = parseInt(req.query.blue, 10)
  var hex = converter.rgbToHex(red, green, blue)
  res.send(hex)
})

app.get('/hexToRgb', function (req, res) {
  var hex = req.query.hex
  var rgb = converter.hexToRgb(hex)
  res.send(JSON.stringify(rgb))
})

app.set('port', process.env.PORT || 8080)

app.listen(app.get('port'), function () {
  console.log('NODE_ENV: ' + process.env.NODE_ENV)
  console.log('NODE_PORT: ' + process.env.NODE_PORT)

  globals.mocha.describe = true
  console.log(globals.mocha)

  console.log('Node app is running on port', app.get('port'))
})

module.exports.app = app
