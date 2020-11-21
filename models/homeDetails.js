const mongoose = require("mongoose")
const Schema = mongoose.Schema

const a  = new Date()
const date = a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear()

const UserSchema = new Schema({
      propertyID : {
            type : String,
            required : true
      },
      propertyTitle : {
            type : String,
            required : true
      },
      img : {
            type : String,
            // required : true
      },
      desc : {
            type : String,
            // required : true
      },
      location : {
            type : String,
            required : true
      },
      bedrooms : {
            type : String,
            required : true
      },
      bathrooms : {
            type : String,
            required : true
      },
      landArea : {
            type : String,
            required : true
      },
      landAreaUnit : {
            type : String,
            required : true
      },
      rentORsale: {
            type:String,
            required:true
      },
      city: {
            type:String,
            required:true
      },
      price: {
            type: String,
            required:true
      },
      propertyType: {
            type:String,
            required:true
      },
      propertyTitle: {
            type:String,
            // required:true
      },
      Date:{
            type:String,
            default: date
      }
})

module.exports  = mongoose.model("home-details",UserSchema)
// module.exports  = mongoose.model("sample-data",UserSchema)