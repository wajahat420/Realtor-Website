import React from 'react'
import Header from "../components/header"
import Body from "../components/body"
import Search from "../components/search"
import HomeDiv from "../components/homeDIV"
import home1 from "../imgs/home1.jpeg"
import home2 from "../imgs/home2.jpeg"
import home3 from "../imgs/home3.jpeg"
import home4 from "../imgs/home4.jpeg"
import home5 from "../imgs/home5.jpeg"
import home6 from "../imgs/home6.jpeg"
import home7 from "../imgs/home7.jpeg"
import home8 from "../imgs/home8.jpeg"
import home9 from "../imgs/home9.jpeg"
import home10 from "../imgs/home10.jpeg"
import home11 from "../imgs/home11.jpeg"
import home12 from "../imgs/home12.jpeg"
import home13 from "../imgs/home13.jpeg"
import home14 from "../imgs/home14.jpeg"
import home15 from "../imgs/home15.jpeg"
import home16 from "../imgs/home16.jpeg"

import axios from "axios"

export default class Home extends React.Component {
      state = {
            homesDetails :[]

      }
      componentDidMount(){
            axios.get("/getHouseDetails")
            .then(res=>{
                  console.log("worksss",res.data)
                  const duplicat = [...this.state.homesDetails]
                  res.data.forEach(element => {
                        duplicat.push(element)
                  });
                  this.setState({homesDetails : duplicat})
            })
      }

      render(){

            return (
                  <div>
                        <Header/>
                        <Body/>
                        <Search/>
                        <div className="row m-auto">
                              {this.state.homesDetails.map((elem,key)=>
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
                                    />
                              )}
                        </div>
                  </div>
            )
      }
}
