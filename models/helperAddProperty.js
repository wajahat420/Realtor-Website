const mongoose = require("mongoose")
const Schema = mongoose.Schema

const a  = new Date()
const date = a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear()

const UserSchema = new Schema({
      properties : {
            type : String,
            required : true
      },
      realtor : {
            type : String,
            required : true
      }
})

module.exports  = mongoose.model("home-details",UserSchema)
// module.exports  = mongoose.model("sample-data",UserSchema)