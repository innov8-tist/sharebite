var express = require('express');
var router = express.Router();
const  userhelper  = require('../controllers/userController.js');

router.get('/', function(req, res, next) {
    console.log("request reevie")
    res.render('user/samples');
});

router.post('/userlogin', async function(req, res, next) {
  console.log(req.body)
   let user = await userhelper.login(req.body)
    if (!user.status) {
        console.log("loginfail")
    }else{
        console.log("loginned");
    }


});

router.get('/login', function(req, res, next) {
  res.render('user/login')
});

router.post('/usersignup', async function(req, res, next) {
 await  userhelper.signup(req.body).then((data)=>{
    console.log(data);
    console.log("successsfully completed");
   })

});

router.get('/home', function(req, res, next) {
  res.render('user/home');
  console.log("Home Request");
});

router.get('/pickupdetails', async function(req, res) {
    res.render('user/getPickupdetails');
})

router.post('/pickupdetails',async function(req,res){
  let response = await userhelper.savePickupDetails(req.body)
  res.json(response)
})

module.exports = router;

