const mongoose = require("mongoose")
const Schema = mongoose.Schema

const a  = new Date()
const date = a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear()
// const time = 

const UserSchema = new Schema({
      clientID : {
            type : String,
            default : parseInt(Date.now() * (Math.random() + 1))
      },
      phoneNo : {
            type : String,
            required : true
      },
      email : {
            type : String,
      },
      address : {
            type : String,
            required : true
      },
      propertyIDs : {
            type : Array,
            required : true
      },
      
      Date:{
            type:String,
            default: date
      },
})

module.exports  = mongoose.model("client-details",UserSchema)
// module.exports  = mongoose.model("sample-data",UserSchema)