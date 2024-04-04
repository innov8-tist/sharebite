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
    },
    getPickUpData:async function(id){
        try{
            let data = await foodPickupModel.findOne({_id:id})
            return data
        }catch(err){
            console.log(err)
        }
    },
    Updatestatus:async function(id,value){
        let data2 =await foodPickupModel.updateOne({_id:id},
            {$set:{status:value}})
            return data2
    },
}
