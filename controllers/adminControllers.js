const { foodPickupModel } = require("../models/foodPickupModel")

module.exports = {
    getAlllPickups:async()=>{
        try{
            let data = await foodPickupModel.find()
            return data
        }catch(err){
            console.log(err)
        }
    },
    googleapi:async(delivery_id)=>{
        return new Promise(async(resolve,reject)=>{
            let details= await foodPickupModel.findOne({_id:delivery_id})
            resolve(details)
        })
    }
}
