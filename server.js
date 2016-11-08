var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var app = express()

mongoose.connect('mongodb://chatchat:chatchat@ds147377.mlab.com:47377/mean')

var Schema = mongoose.Schema
var thingSchema = new Schema({}, { strict: false })
var Account = mongoose.model('Accounts', thingSchema)

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/api', function (req, res) {
  Account.find({}, function (err, done) {
    if (err) console.log(err)
    res.send(done)
  })
})

app.post('/api', function (req, res) {
  var Obj = new Account(req.body)
  Obj.save(function (err) {
    if (err) console.log(err)
    else res.send(req.body)
  })
})

app.get('/api/:id', function (req, res) {
  Account.findOne({ _id: req.params.id }, function (err, done) {
    if (err) console.log(err)
    res.send(done)
  })
})

app.put('/api/:id', function (req, res) {
  Account.findOneAndUpdate(
    { _id: req.params.id },
    { $set: {name: req.body.NAME, age: req.body.AGE, country: req.body.COUNTRY} },
    { new: true },
    function (err, done) {
      if (err) console.log(err)
      res.send(done)
    })
})

app.delete('/api/:id', function (req, res) {
  Account.findOneAndRemove({ _id: req.params.id }, function (err, done) {
    if (err) console.log(err)
    res.send(done)
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
