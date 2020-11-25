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
      password : {
            type : String,
            required : true
      }
})

module.exports  = mongoose.model("sign-in",UserSchema)
// module.exports  = mongoose.model("sample-data",UserSchema)