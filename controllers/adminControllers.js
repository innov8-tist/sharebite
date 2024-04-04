const { foodPickupModel } = require("../models/foodPickupModel")

module.exports = {
    getAlllPickups:async()=>{
        try{
            let data = await foodPickupModel.aggregate([
                {              
                    $lookup:{

                        from:'users',
                        localField:'userId',
                        foreignField:"_id",
                        as:'user'
                    }
                },
                {
                    $unwind: '$user' // Unwind the array field 'user'
                },
                {
                    $project:{
                        username:"$user.name",
                        time:1,
                        phone:1,
                        lattitude:1,
                        longitude:1,
                        meal:1,
                        status:1
                    }
                }
            ])
            console.log(data)
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
