express = require("express")
app = express()
const mongoose = require('mongoose')
const bodyParser = require("body-parser")

const homeDetails = require("./models/homeDetails")
const clientDetails = require("./models/client")

const url = "mongodb+srv://wajahat:node123@first.uba9r.mongodb.net/realtor?retryWrites=true&w=majority"
const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}

mongoose.connect(url,connectionParams)
.then( () => {
    console.log('Connected to database ')
})
.catch( (err) => {
    console.error(`Error connecting to the database. \n${err}`);
})

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post("/sendHouseDeatils",(req,res)=>{
    console.log("phoneNo",req.body.phoneNo)
    const id = Date.now()

    let home = new homeDetails({
        propertyID :id,
        city : req.body.city,
        propertyTitle: req.body.propertyTitle,
        location : req.body.location,
        img: req.body.img,
        desc: req.body.description,
        price : req.body.price,
        bedrooms : req.body.bedrooms,
        bathrooms : req.body.bathrooms,
        landArea : req.body.landArea,
        landAreaUnit : req.body.landAreaUnit,
        rentORsale : req.body.rentORsale,
        propertyType : req.body.propertyType,
        propertyTitle : req.body.propertyTitle   
    })


    // find a phone number of client in a DB if it exits then home propertyID append in the client array otherwise whole object append in client
    async function findAndUpdate(){
        home.save()
        .then(()=>console.log("home-details send to DB"))
        .catch(err=>console.log("error =>",err)) 
    
        var found = null
        await clientDetails.findOneAndUpdate({phoneNo:req.body.phoneNo}, {$push: { propertyIDs: id }},{new: true},(err, doc) => {
            if (err) {
                console.log("Something wrong when updating data!",err);
            }else{
                found = doc
                console.log("property =",doc)
            }
        });
        
        if(found == null){
            console.log("found = ")

            let client = new clientDetails({
                phoneNo : req.body.phoneNo,
                email : req.body.email,
                address : req.body.clientAddress,
                propertyIDs : [id]
            }) 
            client.save()
            .then(()=>console.log("client-details send to DB"))
            .catch(err=>console.log("error =>",err))
        }
    }
    findAndUpdate()

})

app.post("/addProperty",(req,res)=>{
    console.log("res",req.body)
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`server running on port ${port}`))