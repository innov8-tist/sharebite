const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema({
    _id:{type:String,default:uuidv4()},
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
})

const userModel = mongoose.model('users',userSchema)

module.exports={userModel}
