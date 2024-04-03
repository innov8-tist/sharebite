var express = require('express');
var router = express.Router();
var adminhelper = require("../controllers/adminControllers")
/* GET users listing. */
router.get('/', function(req, res, next) {

});

router.get('/dash', function(req, res, next) {
    res.render('admin/admindash', {admincommonfun: true});
    console.log("Admin Request");
  });

router.get('/foodpickups',async function(req,res){
    let data2 = await adminhelper.getAlllPickups();
    res.render('admin/foodpickups',{data2:data2})
})

router.get('/track', function(req, res, next) {
  res.render('admin/track', {admincommonfun: true});
});
module.exports = router;
