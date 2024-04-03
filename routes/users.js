var express = require('express');
var router = express.Router();
const { login } = require('../controllers/userController.js');

router.get('/', function(req, res, next) {
    console.log("request reevie")
    res.render('user/samples');
});

router.post('/login', async function(req, res, next) {
    let user = await login(req.body)
    if (!user.status) {
        res.send("Login failed")
    }else{
        res.send("Login Success")
    }
});

router.get('/login', function(req, res, next) {
  res.render('user/login');
  console.log("Login Request");
});

router.get('/signup', function(req, res, next) {
  res.render('user/signup');
  console.log("signup Request");
});

router.get('/home', function(req, res, next) {
  res.render('user/home');
  console.log("Home Request");
});


module.exports = router;

