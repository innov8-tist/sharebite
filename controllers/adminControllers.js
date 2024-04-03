const { foodPickupModel } = require("../models/foodPickupModel")

module.exports = {
    googleapi:async(delivery_id)=>{
        return new Promise(async(resolve,reject)=>{
            let details= await foodPickupModel.findOne({_id:delivery_id})
            resolve(details)
        })
    }
}
