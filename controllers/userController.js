const { userModel } = require("../models/userModel")

module.exports = {
   signup:(body)=>{
        return new Promise(async(resolve,reject)=>{
          
          let user=await new userModel(body).save()
            resolve(user);

        })
   },
    login: async (body) => {
       console.log(body);
        let userCheck = await userModel.findOne({ email: body.email, password: body.password })
       
        console.log(userCheck)
        if (!userCheck) {
            return { status: false, }
        }
        return { ...userCheck, status: true }
    },
    
}
