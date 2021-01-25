import React from 'react'
import "./css/main.css"
import "./css/daterangepicker.css"
// import "./css/font-awesome.min.css"
import "./css/select2.min.css"
import Home from "../../imgs/home.jpg"
import {MyContext} from "../../context/context"
import axios from "axios"


export default class signup extends React.Component {  
    static contextType = MyContext

    constructor(){
        super() 
        this.count = [1,2,3,4,5,6,7,8,9,10]
        this.stateCopy = this.state
  }
    state = {
        clientName : "",
        rentORsale: "",
        propertyType : "",
        location : "",
        propertyTitle :"",
        description : "",
        price : "",
        landArea : "",
        landAreaUnit : "Sq Yd",
        bedrooms : "",
        bathrooms: "",
        expiresAfter: "1 month",
        city : "",
        phoneNo:  "",
        email : "",
        clientAddress : "",
        imageURL : '',
        CNIC : ""
  }   
    uploadData=()=>{
        let data = this.state 
        data["realtorMobileNo"] = this.context.loginUser.mobileNo
        axios({
            method: 'post',
            url: '/sendHouseDeatils',
            data: data
        })
        .then(res=>{
            if(res.data == "error"){
                    alert("Error in sending Check your fields")
            }
        }).catch(err=>{
            console.log("err",err)
        })
    }
     file = (event) =>  {
        const input = event.target;
        // console.log("event",event.target.value)
        const reader = new FileReader();
        reader.onload = () => {
            // console.log("onload ")

            const dataURL = reader.result;
        
            this.setState({imageURL : dataURL})
        

        }
        reader.readAsDataURL(input.files[0]);

        reader.onloadstart = () => {
            this.setState({loading  : true})
            console.log("load start")
        }
        reader.onloadend = () => {
        //     this.setState({loading  : false,showImg : true})
            console.log("load end")
        } 

    }
    render(){
        console.log(this.state)
    
    return (
        <div class="page-wrapper bg-blue p-t-100 p-b-100 font-robo">
        <div class="wrapper wrapper--w680">
            <div class="card card-1">
                <div class="card-heading"></div>
                <div class="card-body">
                    <h2 class="title">Registration Info</h2>
                    <form method="POST">
                        <div class="input-group">
                            <input onChange={(e)=>this.setState({clientName:e.target.value})} class="input--style-1" type="text" placeholder="Client Name" name="name"/>
                        </div>
                        <div class="input-group">
                            <input onChange={(e)=>this.setState({location:e.target.value})} class="input--style-1" type="text" placeholder="Location" name="name"/>
                        </div>
                        <div class="input-group">
                            <input onChange={(e)=>this.setState({city:e.target.value})} class="input--style-1" type="text" placeholder="City" name="name"/>
                        </div>
                        <div class="input-group">
                            <input onChange={(e)=>this.setState({propertyTitle:e.target.value})} class="input--style-1" type="text" placeholder="Property Title" name="name"/>
                        </div>

                        <div class="row row-space">
                            <div class="col-3">
                                <div class="input-group">
                                    <input onChange={(e)=>this.setState({landArea:e.target.value})} class="input--style-1 js-datepicker" type="text" placeholder="Area" name="birthday"/>
                                    <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="input-group">
                                    <div class="rs-select2 js-select-simple select--no-search">
                                        <select name="gender" 
                                        onChange={(e)=>{
                                            this.setState({landAreaUnit : e.target.value})
                                        }}>
                                            <option disabled="disabled" selected="selected">Unit</option>
                                            <option value="sq. ft">Sq. ft</option>
                                            <option value="marla">Marla</option>
                                        </select>
                                        <div class="select-dropdown"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row row-space">
                            <div class="col-3">
                                <div class="input-group">
                                    <input onChange={(e)=>this.setState({price:e.target.value})} class="input--style-1 js-datepicker" type="text" placeholder="Price" name="birthday"/>
                                    <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="input-group">
                                    <div class="rs-select2 js-select-simple select--no-search">
                                    <select name="gender" 
                                        onChange={(e)=>{
                                            this.setState({rentORsale : e.target.value})
                                        }}>                                            <option disabled="disabled" selected="selected">Rent Or Sale</option>
                                            <option value="rent">Rent</option>
                                            <option value="sale">Sale</option>
                                        </select>
                                        <div class="select-dropdown"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row row-space">
                            <div class="col-3">
                                <div class="input-group">
                                    <input onChange={(e)=>this.setState({bedrooms:e.target.value})} class="input--style-1 js-datepicker" type="text" placeholder="Bedrooms" name="birthday"/>
                                    <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                </div>
                            </div>

                            <div class="col-2">
                                <div class="input-group">
                                    <div class="rs-select2 js-select-simple select--no-search">
                                    <select name="gender" 
                                        onChange={(e)=>{
                                            this.setState({propertyType : e.target.value})
                                        }}>                                            <option disabled="disabled" selected="selected">Type</option>
                                            <option value="house">House</option>
                                            <option value="flat">Flat</option>
                                        </select>
                                        <div class="select-dropdown"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row row-space">
                            <div class="col-3">
                                <div class="input-group">
                                    <input onChange={(e)=>this.setState({bathrooms:e.target.value})} class="input--style-1 js-datepicker" type="text" placeholder="Bathrooms" name="birthday"/>
                                    <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                </div>
                            </div>
                        </div>

                        <div class="input-group">
                            <input onChange={(e)=>this.setState({CNIC:e.target.value})} class="input--style-1" type="text" placeholder="Client CNIC" name="name"/>
                        </div>
                        <div class="input-group">
                            <input onChange={(e)=>this.setState({clientAddress:e.target.value})} class="input--style-1" type="text" placeholder="Client Address" name="name"/>
                        </div>
                        <div class="input-group">
                            <input onChange={(e)=>this.setState({phoneNo:e.target.value})} class="input--style-1" type="text" placeholder="Phone Number" name="name"/>
                        </div>

                        <div class="input-group">
                            <input onChange={(e)=>this.setState({email:e.target.value})} class="input--style-1" type="text" placeholder="Email" name="name"/>
                        </div>

                        <div className="description">
                            <textarea onChange={(e)=>this.setState({description:e.target.value})} placeholder="jjjj" rows="5"/>
                                
                        </div>
     
                        <div className="image">
                            <input onChange={this.file} type="file"/>
                            <div>
                                <img src={this.state.imageURL}/> 
                                {/* <img src={Home}/> */}
                            </div>
                        </div>
                        <div class="p-t-20">
                            <button onClick={this.uploadData} class="btn btn--radius btn--green" type="submit">Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>


    )}
}
