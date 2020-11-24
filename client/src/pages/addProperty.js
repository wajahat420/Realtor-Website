import axios from "axios"
import React, { Component } from 'react'
import "../css/addProperty.css"

export default class addProperty extends Component {
      constructor(){
            super()
            this.count = [1,2,3,4,5,6,7,8,9,10]
            this.stateCopy = this.state
      }
      state = {
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
            imageURL : ''
      }
      uploadData=()=>{
            console.log("jjj")
            axios({
                  method: 'post',
                  url: '/sendHouseDeatils',
                  data: this.state
            })
            .then(res=>{
                  // if(res.data == "success"){
                  //       // const duplicat = {...this.state}
                  //       this.state = this.stateCopy
                  //       console.log("res from react",res)
                  // }
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
      render() {
            console.log(this.state)
            return (
                  <div className="col-md-12 addProperty">
                        <div className="col-md-8 ml-auto mr-auto mt-5">
                              <div className="row">
                                    <span className="col-3"><p>purpose</p></span>
                                    <div class=" col-9 p-0" data-toggle="buttons">
                                          
                                          <label onClick={()=>this.setState({rentORsale : "sale"})} class="btn col-3" >
                                                <input type="radio" name="ab" id="1"/>Sale
                                          </label>
                                           
                                          <label onClick={()=>this.setState({rentORsale : "rent"})} class="btn col-3">
                                                <input type="radio" name="ab" id="2"/>Rent
                                          </label>
                                          {/* <input type="checkbox" class="form-check-input" id="3" checked/>
                                          <label class="form-check-label" for="3">Material indeterminate</label> */}
                                    </div>
                              </div>

                              <div className="row">
                                    <span className="col-3"><p>property type</p></span>
                                    <div class="col-9 p-0">
                                          
                                          <label onClick={()=>this.setState({propertyType : "home"})} class="btn col-3">
                                                <input type="radio" name="same" id="home"/>Home
                                          </label>
                                          
                                          <label onClick={()=>this.setState({propertyType : "plot"})} class="btn col-3" >
                                                <input type="radio" name="same" id="plot" />Plot
                                          </label>
                                          
                                          <label onClick={()=>this.setState({propertyType : "commercial"})} class="btn col-3">
                                                <input type="radio" name="same" id="commercial"/>Commercial
                                          </label>
                                    </div>
                              </div>

                              <div className="row">
                                    <span className="col-3"> <p>City</p></span>
                                    <input onChange={(e)=>this.setState({city:e.target.value})} type="text" className="input" />
                              </div>
                              <div className="row">
                                    <span className="col-3"> <p>Location</p></span>
                                    <input onChange={(e)=>this.setState({location:e.target.value})} type="text" className="input" />
                              </div>
                              <div className="row">
                                    <span className="col-3"> <p>Property Title</p></span>
                                    <input onChange={(e)=>this.setState({propertyTitle:e.target.value})} type="text" className="input" />
                              </div>
                              <div className="row">
                                    <span className="col-3"> <p>Description</p></span>
                                    <input onChange={(e)=>this.setState({description:e.target.value})} type="text" className="input" />
                              </div>
                              <div className="row">
                                    <span className="col-3"> <p>Price</p></span>
                                    <input onChange={(e)=>this.setState({price:e.target.value})} type="text" className="input" />
                              </div>
                              <div className="row">
                                    <span className="col-3"> <p>Land Area</p></span>
                                    <input onChange={(e)=>this.setState({landArea:e.target.value})} type="text" className="input" />

                                    <span className="col-3"> <p>Unit</p></span>
                                    <div className="dropdown" >
                                          <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">{this.state.landAreaUnit}</button>
                                          <ul className="dropdown-menu">
                                                <li onClick={()=>this.setState({landAreaUnit : "Sq Yd"})}>Sq Yd</li>
                                                <li onClick={()=>this.setState({landAreaUnit : "Sq Ft"})}>Sq Ft</li>
                                                <li onClick={()=>this.setState({landAreaUnit : "Marla"})}>Marla</li> 
                                                
                                          </ul>
                                    </div>                              
                              </div>
                              <div className="row">   
                                    <span className="col-3"><p>Bedrooms</p></span>
                                    <input onChange={(e)=>this.setState({bedrooms:e.target.value})} type="text" className="input" />

                              </div>
                              <div className="row">   
                                    <span className="col-3"><p>Bathrooms</p></span>
                                    <input onChange={(e)=>this.setState({bathrooms:e.target.value})} type="text" className="input" />

                              </div>
                              <div className="row">   
                                    <span className="col-3"><p>Expires After</p></span>
                                    <div className="dropdown" >
                                          <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">{this.state.expiresAfter}</button>
                                          <ul className="dropdown-menu">
                                                <li onClick={()=>this.setState({expiresAfter : "1 month"})}>1 month</li>
                                                <li onClick={()=>this.setState({expiresAfter : "6 month"})}>6 month</li>
                                                <li onClick={()=>this.setState({expiresAfter : "12 month"})}>12 month</li> 
                                                
                                          </ul>
                                    </div>
                              </div>
                              <div className="row">   
                                    <span className="col-3"><p>Phone no.</p></span>
                                    <input onChange={(e)=>this.setState({phoneNo:e.target.value})} type="text" className="input" />

                              </div>
                              <div className="row">   
                                    <span className="col-3"><p>Email</p></span>
                                    <input onChange={(e)=>this.setState({email:e.target.value})} type="text" className="input" />

                              </div>
                              <div className="row">   
                                    <span className="col-3"><p>Client Address</p></span>
                                    <input onChange={(e)=>this.setState({clientAddress:e.target.value})} type="text" className="input" />

                              </div>
                              <div>
                                    <input type="button" value="Send" className="btn btn-primary" onClick={this.uploadData}/>
                                    
                              </div>
                              <div>
                                    <input onChange={this.file} type="file"/>
                                    <img src={this.state.imageURL}/>
                              </div>
                        </div>
                  </div>
            )
      }
}
