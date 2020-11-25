express = require("express")
app = express()
const mongoose = require('mongoose')
const bodyParser = require("body-parser")

const homeDetails = require("./models/homeDetails")
const clientDetails = require("./models/client")
const signup = require("./models/signup")
const signin = require("./models/signin")

const url = "mongodb+srv://wajahat:node123@first.uba9r.mongodb.net/realtor?retryWrites=true&w=majority"
// const url = "mongodb://db1.example.net:27017,db2.example.net:2500/?replicaSet=test&connectTimeoutMS=300000"
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
// parameterLimit: 100000,
// limit: '50mb',
// extended: true
app.post("/signup",(req,res)=>{
    console.log("req",req.body)
    let signupData = new signup({
        username : req.body.username,
        email:req.body.email,
        mobileNo: req.body.mobileNo,
        password: req.body.password,
        address: req.body.mobileNo
    })
    signup.find(
        {
            $or: [{ email: req.body.email }, { username: req.body.username }, { mobileNo: req.body.mobileNo }]
        },function(err,data){
            if(data.length == 0){
                signupData.save()
                .then(()=>console.log("signup data send to DB"))
                .catch((err)=>console.log("error \n",err))
            }
        })
})
app.use("/signin",(req,res)=>{
    const username = req.body.username
    const password = req.body.password

    signup.find(
        {
            $and: [
                    {$or: [{ email: username }, { username: username }, { mobileNo: username }]},
                    {password : password}
                ],
        },function(err,data){
            if(data.length == 0){
                res.send("fail")
            }else{
                res.send("success")
            }
        })
})
app.post("/sendHouseDeatils",(req,res)=>{
    console.log("phoneNo",req.body.phoneNo)
    const id = Date.now()

    let home = new homeDetails({
        propertyID :id,
        city : req.body.city,
        propertyTitle: req.body.propertyTitle,
        location : req.body.location,
        img: req.body.imageURL,
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
    
        await clientDetails.findOneAndUpdate({phoneNo:req.body.phoneNo}, {$push: { propertyIDs: id }},{new: true})
        .then(data=>{
            console.log("res = ",data)
            if(data == null){
    
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
            res.send("success")
        })
        
        
    }
    findAndUpdate()

})

app.get("/getHouseDetails",(req,res)=>{
    homeDetails.find({},function(err, home){
        // console.log("res",home)
        const data = []
        home.forEach(elem=>{
            const obj = {
                propertyID : elem.propertyID,
                city : elem.city,
                propertyTitle : elem.propertyTitle,
                desc : elem.desc,
                imageURL : elem.img,
                price : elem.price,
                bedrooms : elem.bedrooms,
                bathrooms : elem.bathrooms,
                rentORsale : elem.rentORsale,
                area : elem.landArea + elem.landAreaUnit
            }
            data.push(obj)
        })
        res.send(data)
    })
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`server running on port ${port}`))