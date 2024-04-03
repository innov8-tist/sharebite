var express = require('express');
var router = express.Router();
var adminhelper = require("../controllers/adminControllers")
/* GET users listing. */
router.get('/', function(req, res, next) {

});

router.get('/foodpickups',async function(req,res){
    let data2 = await adminhelper.getAlllPickups();
    res.render('admin/foodpickups',{data2:data2})
})

module.exports = router;
