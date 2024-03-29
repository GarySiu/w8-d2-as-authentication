var express = require('express')
var app = express()
var router = express.Router()
// Parses information from POST
var bodyParser = require('body-parser')
// Used to manipulate POST methods
// var methodOverride = require('method-override')
var passport = require("passport")
var usersController = require('../controllers/users')


function authenticatedUser(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/')
}

// router.route('/signup')
//   .get(usersController.getSignup)
//   .post(usersController.postSignup)

// router.route('/login')
//   .get(usersController.getLogin)
//   .post(usersController.postLogin)

// router.route("/logout")
//   .get(usersController.getLogout)

// router.route('/secret')
//   .get(authenticatedUser, usersController.secret)

module.exports = router