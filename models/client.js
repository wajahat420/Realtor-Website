const mongoose = require("mongoose")
const Schema = mongoose.Schema

let date  = new Date()
date = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
// const time = 

const UserSchema = new Schema({
      mobileNo : {
            type : String,
            required : true
      },
      CNIC : {
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