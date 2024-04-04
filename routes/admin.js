var express = require('express');
var router = express.Router();
var adminhelper = require("../controllers/adminControllers");
const { route } = require('./users');
 require("dotenv").config()
const  accountSid = 'ACeedd2bff7688961ebebae472001146cc';
const authToken = '2e5ab47d591d382a65b5455cb887d576';
const client = require('twilio')(accountSid,authToken);
/* GET users listing. */
router.get('/', async function (req, res, next) {
  if (req.session.status == "orderconfimed") {
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

    res.render('admin/admindash', { formattedData, statuschanged: true });

  } else {
    let data2 = await adminhelper.getAlllPickups();


      // Create a new array containing the necessary data for rendering
      let formattedData = data2.map(item => {
          return {
              orderId: item._id,
              time: item.time,
              phone: item.phone,
              latitude: item.latitude,
              longitude: item.longitude,
              meal: item.meal,
              username:item.username
        
          };
      });
      
          res.render('admin/admindash',{formattedData});
    }

});

router.get('/admincall1', (req, res) => {
  adminhelper.googleapi('96dd7725-d12c-4902-a7c0-916e02e04e54').then((data) => {
    // let latitude=data.coords.latitude
    // let longitude=data.coords.longitude
    res.render("admin/map")

  })
})


router.post('/adminlogin1', async function (req, res, next) {
   console.log(req.body)
   let result= await adminhelper.adminvalidation(req.body)
   console.log(result);
   if(result.status==false){
    res.redirect("/admin/adminlogin")
   }else{
    res.redirect("/admin")
   }
});

router.get('/track/:id', async function (req, res, next) {
  console.log(req.params.id)
  let data = await adminhelper.getPickUpData(req.params.id)
  console.log(data)
  res.render('admin/track', { admincommonfun: true, latitude: data.lattitude, longitude: data.longitude });
});

router.post("/picked", (async (req, res) => {
  console.log(req.body)

  let statusdata = await adminhelper.Updatestatus(req.body.id, req.body.value);
  if (req.body.value == "orderpick") {
    client.messages
      .create({
        from: '+13613664750',
        to: '+918136860631',
        body: `📦 Your request has been received successfully!\n\n🚚 Our volunteer will come to pick up the delivery shortly.\n\n❓ If you have any queries, please contact: 8136860691`
      })
      .then(message => console.log(message.sid))
      .catch(error => console.error(error));
  } else {
    client.messages
      .create({
        from: '+13613664750',
        to: '+918136860631',
        body: `❌ Your request has been cancelled. We apologize for the inconvenience. This was done by mistake on our end.\n\nIf you have any queries, please contact: 8136860691`
      })  
        .then(message => console.log(message.sid))
          .catch(error => console.error(error))
    
  }
}))

router.get("/adminlogin",((req,res)=>{
  res.render("admin/adminlogin")
}))




module.exports = router;
