var express = require('express')
var router = express.Router()

var moongoose = require('mongoose')
var User = require('../models/user')

var bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: true }))

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