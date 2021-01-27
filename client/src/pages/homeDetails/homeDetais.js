import React, { Component } from 'react'
import { MyContext } from '../../context/context'
import Home from "../../imgs/home.jpg"
import "./style.css"

export default class homeDetail extends Component {
    static contextType = MyContext

    state = {
        areaEdit : false,
        priceEdit : false,
        locationEdit : false,
        bathsEdit : false,
        bedroomsEdit : false,
        forEdit : false,

        areaInput : "",
        priceInput : "",
        locationInput : "",
        bathsInput : "",
        bedroomsInput : "",
        forInput : "",
        showDelete : false,

        name : "",
        email : "",
        phoneNo  : "",
        msg : ""

    }
    componentDidMount(){
        const home = {...this.context.currentHouseDetail }
        this.setState({
            areaInput : home.area,
            priceInput : home.price,
            locationInput : home.location,
            bathsInput : home.bathrooms,
            bedroomsInput : home.bedrooms,
            forInput : home.rentORsale,
        })
    }
    render() {

        const home = {...this.context.currentHouseDetail }
        // console.log("home = ",this.context.homesDetails )
        console.log("home",this.state)
        const {areaEdit, priceEdit, locationEdit, bathsEdit, bedroomsEdit, forEdit} = this.state

        let area =  areaEdit ?
        <td className="input"><input onChange={(e)=>this.setState({areaInput : e.target.value})} type="text" value={this.state.areaInput}/></td>
        :
        <td>{home.area}</td>
        
        let price =  priceEdit ?
        <td className="input"><input onChange={(e)=>this.setState({priceInput : e.target.value})} type="text" value={this.state.priceInput}/></td>
        :
        <td>{home.price}</td>
        
        let location =  locationEdit ? 
        <td className="input"><input onChange={(e)=>this.setState({locationInput : e.target.value})} type="text" value={this.state.locationInput}/></td>
        :
        <td>{home.location}</td>
        
        let bathrooms =  bathsEdit ?
        <td className="input"><input onChange={(e)=>this.setState({bathsInput : e.target.value})} type="text" value={this.state.bathsInput}/></td>
        :
        <td>{home.bathrooms}</td>
        
        let bedrooms =  bedroomsEdit ?
        <td className="input"><input onChange={(e)=>this.setState({bedroomsInput : e.target.value})} type="text" value={this.state.bedroomsInput}/></td>
        :
        <td>{home.bedrooms}</td>
        
        let For =  forEdit ?
        <td className="input"><input onChange={(e)=>this.setState({forInput : e.target.value})} type="text" value={this.state.forInput}/></td>
        :
        <td>{home.rentORsale}</td>
        

        return (
            <div className="col-11 ml-auto mr-auto mb-5">
        
                <div className="home-detail row">
                    <div className="col-7">
                        <img src={home.imageURL}/>
                    </div>
                    <div className="col-3 p-2 border message">
                        <input onChange={(e)=>this.setState({name : e.target.value })} value={this.state.name} type="text" placeholder="Name"/>
                        <input onChange={(e)=>this.setState({email : e.target.value })} value={this.state.email} type="text" placeholder="Email"/>
                        <input onChange={(e)=>this.setState({phoneNo : e.target.value })} value={this.state.phoneNo} type="text" placeholder="Phone No."/>
                        <input onChange={(e)=>this.setState({msg : e.target.value })} value={this.state.msg} type="text" className="msgTxt" placeholder="Message"/>

                        <input onClick={()=>this.setState({name:"",email:"",phoneNo:"",msg: ""})} type="button" value="Submit"/>
                       
                    </div>
                </div>
                <div className="col-12 ml-auto mr-auto mt-5 overview">
                    <h3>Overview</h3>
                    <p className="heading">Details</p>
                    <table className="col-6 m-auto p-3">
                        <tr>
                            <td>Area</td>
                            {area}
                            
                        </tr>
                        <tr>
                            <td>Price</td>
                            {price}
                            
                        </tr>
                        <tr>
                            <td>Location</td>
                            {location}
                            
                        </tr>
                        <tr>
                            <td>Baths</td>
                            {bathrooms}
                            
                        </tr>
                        <tr>

                            <td>Bedrooms</td>
                            {bedrooms}
                            
                        </tr>
                        <tr>
                            <td>For</td>
                            {For}
                            
                        </tr>
            
                    </table>
                    <div>
                        <p className="heading">Description</p>
                        <p>
                            {home.desc}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
