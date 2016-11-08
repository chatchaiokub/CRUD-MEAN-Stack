var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var Account = require('./models/Account/Account.route.js')
var app = express()

mongoose.connect('mongodb://chatchat:chatchat@ds147377.mlab.com:47377/mean')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', Account)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
