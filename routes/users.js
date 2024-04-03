var express = require('express');
var router = express.Router();
var userhelper=require("../controllers/userController")

router.get('/', function(req, res, next) {
  res.render('user/samples');
  console.log("request reevie")
});


module.exports = router;

