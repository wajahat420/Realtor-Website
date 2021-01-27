import React from 'react'
import Header from "../components/header"
import Body from "../components/body"
import Search from "../components/search"
import HomeDiv from "../components/homeDIV"
// import home1 from "../imgs/home1.jpeg"
import home2 from "../imgs/home2.jpeg"
import home3 from "../imgs/home3.jpeg"
import home4 from "../imgs/home4.jpeg"
import home5 from "../imgs/home5.jpeg"
import home6 from "../imgs/home6.jpeg"
import home7 from "../imgs/home7.jpeg"
import home8 from "../imgs/home8.jpeg"
import home9 from "../imgs/home9.jpeg"
import home10 from "../imgs/home10.jpeg"
// import home11 from "../imgs/home11.jpeg"
// import home12 from "../imgs/home12.jpeg"
// import home13 from "../imgs/home13.jpeg"
// import home14 from "../imgs/home14.jpeg"
// import home15 from "../imgs/home15.jpeg"
// import home16 from "../imgs/home16.jpeg"

import axios from "axios"
import { MyContext } from '../context/context'

export default class Home extends React.Component {
      static contextType = MyContext
      homes = [home2, home3, home4, home5, home6, home7, home8, home9, home10]
      state = {
            status : "",
            city : "",
            homesDetails :[
                  // {
                  //       id : parseInt(Math.random()  * 100),
                  //       propertyTitle : "This is the title",
                  //       imageURL : home2,
                  //       desc : "this is the desc of the house",
                  //       price : 2000,
                  //       bedrooms : 4,
                  //       bathrooms : 5,
                  //       area  : "10 sq yd",
                  //       rentORsale : "rent",
                  //       location : "Malir 15 near jamia milia road"
                  // },
                  // {
                  //       id : parseInt(Math.random()  * 100),
                  //       propertyTitle : "This is the title",
                  //       imageURL : home3,
                  //       desc : "this is the desc of the house",
                  //       price : 2000,
                  //       bedrooms : 4,
                  //       bathrooms : 5,
                  //       area  : "10 sq yd",
                  //       rentORsale : "rent",
                  //       location : "Gulshan 15 near jamia milia road"
                  // },
                  // {
                  //       id : parseInt(Math.random()  * 100),
                  //       propertyTitle : "This is the title",
                  //       imageURL : home4,
                  //       desc : "this is the desc of the house",
                  //       price : 2000,
                  //       bedrooms : 4,
                  //       bathrooms : 5,
                  //       area  : "10 sq yd",
                  //       rentORsale : "sale",
                  //       location : "Ancholi 15 near jamia milia road"
                  // }
            ]

      }
      componentDidMount(){
            // console.log("ababab")
            // axios.get("/getHouseDetails")
            // .then(res=>{
            //       const duplicat = [...this.state.homesDetails]
            //       res.data.forEach(element => {
            //             duplicat.push(element)
            //       });
            //       this.setState({homesDetails : duplicat})
            // })
            const homes = this.context.homesDetails.map((elem,index)=>{
                  let home = elem
                  home["imageURL"] = this.homes[index]
                  return home
            })

            this.context.setAllHouses(homes)
            // console.log("homes",this.context.homesDetails)
            this.setState({homesDetails : this.context.homesDetails})
            // })
            // this.setState({homesDetails : this.context.homesDetails})
      }
      filterHomes = (elem) =>{
            const {city, status} = this.state
            if(city === "" && status === "" ){
                  return true
            }
            else if(city !== "" && status !== ""){
                  if (status === elem.rentORsale && city === elem.city){
                        return true
                  }
            }
            else if(status !== ""){
                  if(status === elem.rentORsale){
                        return true
                  }
            }
            else if(city !== ""){
                  if(city === elem.city){
                        return true
                  }
            }
      }
      render(){

            return (
                  <div>
                        {/* <Header/> */}
                        <Body/>
                        <Search
                              setCity = {(city)=>this.setState({city})}
                              setStatus = {(status)=>this.setState({status})}
                        />
                        <div className="row m-auto">
                              {this.state.homesDetails.filter(elem=>this.filterHomes(elem)).map((elem,key)=>
                                    <HomeDiv 
                                          key={key}
                                          propertyTitle={elem.propertyTitle}
                                          imageURL={elem.imageURL}
                                          desc={elem.desc}
                                          price={elem.price}
                                          bedrooms={elem.bedrooms}
                                          bathrooms={elem.bathrooms}
                                          area={elem.area}
                                          rentORsale={elem.rentORsale}
                                          clicked = {()=>{
                                                this.context.setCurrentHouseDetail(elem)
                                                this.props.history.push("/homeDetail")
                                          }}
                                    />
                              )}
                        </div>
                  </div>
            )
      }
}
