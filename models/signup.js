const mongoose = require("mongoose")
const Schema = mongoose.Schema

const a  = new Date()
const date = a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear()
// const time = 

const UserSchema = new Schema({
      username : {
            type : String,
            required : true
      },
      email : {
            type : String,
            required : true
      },
      mobileNo : {
            type : String,
            required : true
      },
      address : {
            type : String,
      },
      password : {
            type : String,
            required : true
      },
      clientIDs : {
            type : Array
      }
})

module.exports  = mongoose.model("sign-up",UserSchema)
// module.exports  = mongoose.model("sample-data",UserSchema)