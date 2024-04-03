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
   // let latitude=data.coords.latitude
   // let longitude=data.coords.longitude
     res.render("admin/map")

   })
 })



  router.get('/dash',async function(req, res, next) {
    let data2 = await adminhelper.getAlllPickups();


// Create a new array containing the necessary data for rendering
let formattedData = data2.map(item => {
    return {
        orderId: item._id,
        time: item.time,
        phone: item.phone,
        latitude: item.latitude,
        longitude: item.longitude,
        meal: item.meal
    };
});

    res.render('admin/admindash',{formattedData});
  });


 

router.get('/track/:id', async function(req, res, next) {
  console.log(req.params.id)
  let data = await adminhelper.getPickUpData(req.params.id)
  console.log(data)
  res.render('admin/track', {admincommonfun: true,latitude:data.lattitude,longitude:data.longitude});
});
module.exports = router;
