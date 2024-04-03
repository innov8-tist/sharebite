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

module.exports = router;

