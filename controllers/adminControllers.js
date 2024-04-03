const { foodPickupModel } = require("../models/foodPickupModel")

module.exports = {
    getAlllPickups:async()=>{
        try{
            let data = await foodPickupModel.find()
            return data
        }catch(err){
            console.log(err)
        }
    }
}
