var express = require('express');
var router = express.Router();
var adminhelper = require("../controllers/adminControllers")
/* GET users listing. */
router.get('/', function(req, res, next) {
    adminhelper.pagerender("hello").then(() => {
        res.render("admin/oops", { admincommonfun: true });
    })
});


module.exports = router;
