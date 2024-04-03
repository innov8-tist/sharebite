var express = require('express');
var router = express.Router();
var adminhelper = require("../controllers/adminControllers")
/* GET users listing. */
router.get('/', function(req, res, next) {
        res.render("admin/oops", { admincommonfun: true });
    
});
router.get('/admincall',(req,res)=>{
   res.render("admin/test")
})
router.get('/admincall1',(req,res)=>{
   adminhelper.googleapi('96dd7725-d12c-4902-a7c0-916e02e04e54').then((data)=>{
    let latitude=data.coords.latitude
    let longitude=data.coords.longitude
     res.render("admin/map",{latitude,longitude})

   })
 })

router.get('/dash', function(req, res, next) {
    res.render('admin/admindash', {admincommonfun: true});
    console.log("Admin Request");
  });

router.get('/foodpickups',async function(req,res){
    let data2 = await adminhelper.getAlllPickups();
    console.log(data2)
    let newdata=data2.map((data)=>{
        return data
    })
    console.log(newdata);
    res.render('admin/foodpickups',{newdata})
})
 

module.exports = router;
