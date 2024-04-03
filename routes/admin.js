var express = require('express');
var router = express.Router();
var adminhelper = require("../controllers/adminControllers")
/* GET users listing. */
router.get('/', function(req, res, next) {
    adminhelper.pagerender("hello").then(() => {
        res.render("admin/oops", { admincommonfun: true });
    })
});

router.get('/dash', function(req, res, next) {
    res.render('admin/admindash', {admincommonfun: true});
    console.log("Admin Request");
  });


module.exports = router;
