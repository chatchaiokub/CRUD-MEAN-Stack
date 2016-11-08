;(function () {
  'use strict'
  var mongoose = require('mongoose')
  var Schema = mongoose.Schema
  var thingSchema = new Schema({}, { strict: false })
  module.exports = mongoose.model('Accounts', thingSchema)
})()
