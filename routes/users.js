var express = require('express');
var router = express.Router();
const  userhelper  = require('../controllers/userController.js');


var validitycheckingfun=function(req,res,next){
  if(req.session.userlogin){
   next()
  }else{
    res.redirect('/')
  }

}
router.get('/home',(req,res)=>{
  res.render("user/home");
})

router.get('/', function(req, res, next) {
  if(req.session.loginfail){
    console.log("true going");
    res.render('user/login',{loginfail:true})
    req.session.loginfail=false;
  }else{
    req.session.loginfail=false;
    console.log("false going")
    res.render('user/login',{loginfail:false});
   
  }

});

router.post('/userlogin',async function(req, res, next) {
  console.log(req.body)
   let user = await userhelper.login(req.body)
    if (!user.status) {
        console.log("loginfail")
        req.session.loginfail=true;
        res.redirect("/")
    }else{
        req.session.userse=user._id;
        res.render("user/home")
        console.log("loginned");
    }
});

router.post('/usersignup',async function(req, res, next) {
 await  userhelper.signup(req.body).then((data)=>{
  console.log("heeeeyyyy")
    console.log(data)
  req.session.userse=data._id;

   res.redirect('/home')
   })

});


router.get('/pickupdetails', async function(req, res) {
    res.render('user/getPickupdetails');
})

router.post('/pickupdetails',async function(req,res){
  let response = await userhelper.savePickupDetails(req.body)
  res.json(response)
})

module.exports = router;

