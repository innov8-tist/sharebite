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
router.get('/home',validitycheckingfun,(req,res)=>{
  console.log(req.session.user1)
  res.render("user/home2");
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

router.post('/userlogin', async function(req, res, next) {
  console.log(req.body)
   let user = await userhelper.login(req.body)
    if (!user.status) {
        console.log("loginfail")
    }else{
      console.log(user)
        req.session.user1=user._id;
        console.log(req.session.user1)
        req.session.userlogin=true
        res.render("user/home",{user:true})

        console.log("loginned");
    }
});


router.post('/usersignup', async function(req, res, next) {
 await  userhelper.signup(req.body).then((data)=>{
  console.log("heeeeyyyy")
    console.log(data)
    req.session.userlogin=true

     console.log("home calling  11111111")
   res.redirect('/home')
   })

});

router.get("/regform",validitycheckingfun,(req,res)=>{
  res.render("user/getPickupdetails")
})


router.get('/wallet', function(req, res, next) {
  res.render('user/wallet', {user:true});
  console.log("wallet Request");
});
router.post('/pickupdetails',async function(req,res){
  console.log(req.session.user1);
  console.log(req.session.user1);

  let response = await userhelper.savePickupDetails({...req.body,userId:req.session.user1})
  res.json(response)
})



module.exports = router;

