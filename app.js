var express = require('express')
var app = express()
var path = require('path')
var debug = require("debug")
var logger = require('morgan')
var expressLayouts = require('express-ejs-layouts')
var moongoose = require('mongoose')
moongoose.connect('mongodb://localhost/animalshelter');

var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy

app.use(logger('dev'))
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(__dirname + '/public'))
app.use(expressLayouts)
app.engine('ejs', require('ejs').renderFile)
app.set('view engine', 'ejs')

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// setup modular routing
// app.use(require('./config/routes'))
app.use('/', require('./controllers/statics'))
app.use('/animals', require('./controllers/animals'))

app.listen(3000)