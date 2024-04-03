var express = require('express');
var router = express.Router();
var userhelper=require("../controllers/userController")

router.get('/', function(req, res, next) {
  res.render('user/samples');
  console.log("request reevie")
});

router.get('/login', function(req, res, next) {
  res.render('user/login');
  console.log("Login Request");
});

router.get('/signup', function(req, res, next) {
  res.render('user/signup');
  console.log("signup Request");
});



module.exports = router;

