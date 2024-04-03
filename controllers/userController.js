const { foodPickupModel } = require("../models/foodPickupModel");
const { userModel } = require("../models/userModel")

module.exports = {
   signup:(body)=>{
        return new Promise(async(resolve,reject)=>{
          
          let user=await new userModel(body).save()
            resolve(user);

        })
   },
    login: async (body) => {
      try{
        console.log(body);
        let userCheck = await userModel.findOne({ email: body.email, password: body.password }).lean()
       
        console.log(userCheck)
        if (!userCheck) {
            return { status: false, }
        }
        return { ...userCheck, status: true }
      }catch(err){
        console.log(err)
      }
    },
    savePickupDetails: async (body)=>{
        let response = await new foodPickupModel(body).save()
        return response
    }
}
