;(function () {
  'use strict'
  var express = require('express')
  var router = express.Router()
  var Account = require('./Account.schema.js')

  router.get('/api', function (req, res) {
    Account.find({}, function (err, done) {
      if (err) console.log(err)
      res.send(done)
    })
  })

  router.post('/api', function (req, res) {
    var Obj = new Account(req.body)
    Obj.save(function (err) {
      if (err) console.log(err)
      else res.send(req.body)
    })
  })

  router.get('/api/:id', function (req, res) {
    Account.findOne({ _id: req.params.id }, function (err, done) {
      if (err) console.log(err)
      res.send(done)
    })
  })

  router.put('/api/:id', function (req, res) {
    Account.findOneAndUpdate(
      { _id: req.params.id },
      { $set: {name: req.body.NAME, age: req.body.AGE, country: req.body.COUNTRY} },
      { new: true },
      function (err, done) {
        if (err) console.log(err)
        res.send(done)
      })
  })

  router.delete('/api/:id', function (req, res) {
    Account.findOneAndRemove({ _id: req.params.id }, function (err, done) {
      if (err) console.log(err)
      res.send(done)
    })
  })

  module.exports = router
})()
