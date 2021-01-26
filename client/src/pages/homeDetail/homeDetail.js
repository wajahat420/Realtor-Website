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
        showDelete : false

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
                <div style={{display : this.state.showDelete ? "block" : "none"}} className="delete">
                    <h2 className="mb-4 mt-3 ">Are You Sure ??</h2>
                    <div>
                        <input type="button" value="Cancle" onClick ={()=>{
                            this.setState({showDelete : false})
                        }}/>

                        <input onClick={()=>{
                            const allHomes = [...this.context.homesDetails]
                            allHomes.forEach((elem, index)=>{

                                if(home.id === elem.id){
                                    allHomes.splice(index,1)
                                    this.props.history.push("/")
                                }   
                            })
                            // console.log("details",allHomes)
                            this.context.setAllHouses(allHomes)
                            // this.setState({showDelete : false})
                            this.props.history.push("/")
                        }} type="button" value="Yes"/>
                    </div>
                </div>
                <div className="home-detail row">
                    <div className="col-7">
                        <img src={home.imageURL}/>
                    </div>
                    <div className="col-3 p-2 border message">
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Email"/>
                        <input type="text" placeholder="Phone No."/>
                        <input type="text" className="msgTxt" placeholder="Message"/>

                        <input type="button" value="Submit"/>
                        <input type="button" value="Delete" onClick={()=>{
                            this.setState({showDelete : true})
                        }}/>
                       
                    </div>
                </div>
                <div className="col-12 ml-auto mr-auto mt-5 overview">
                    <h3>Overview</h3>
                    <p className="heading">Details</p>
                    <table className="col-6 m-auto p-3">
                        <tr>
                            <td>Area</td>
                            {area}
                            <td onClick={()=>this.setState({areaEdit : !this.state.areaEdit})} className="edit">Edit</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            {price}
                            <td onClick={()=>this.setState({priceEdit : !this.state.priceEdit})} className="edit">Edit</td>
                        </tr>
                        <tr>
                            <td>Location</td>
                            {location}
                            <td onClick={()=>this.setState({locationEdit : !this.state.locationEdit})}  className="edit">Edit</td>
                        </tr>
                        <tr>
                            <td>Baths</td>
                            {bathrooms}
                            <td onClick={()=>this.setState({bathsEdit : !this.state.bathsEdit})}  className="edit">Edit</td>
                        </tr>
                        <tr>

                            <td>Bedrooms</td>
                            {bedrooms}
                            <td onClick={()=>this.setState({bedroomsEdit : !this.state.bedroomsEdit})}  className="edit">Edit</td>
                        </tr>
                        <tr>
                            <td>For</td>
                            {For}
                            <td onClick={()=>this.setState({forEdit : !this.state.forEdit})}  className="edit">Edit</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td > <input className="p-2" type="button" value="Submit"
                                onClick = {()=>{
                                    const {areaInput, locationInput, forInput, bedroomsInput, bathsInput, priceInput} = this.state
                                    const allHomes = [...this.context.homesDetails]
                                    allHomes.forEach((elem, index)=>{

                                        if(home.id === elem.id){
                                            console.log(home.id, elem.id)
                                            allHomes[index] = {
                                                area : areaInput,
                                                location: locationInput,
                                                price:priceInput,
                                                bathrooms:bathsInput,
                                                bedrooms:bedroomsInput,
                                                rentORsale:forInput
                                            }
                                        }   
                                    })
                                    // console.log("details",allHomes)
                                    this.context.setAllHouses(allHomes)
                                }}
                            /></td>
                            <td className="edit"></td>
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
