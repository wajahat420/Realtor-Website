import React, { Component } from 'react'
// import home1 from "./imgs/home1.jpeg"

export const MyContext = React.createContext()

export default class context extends Component {
      state = {
            loginUser : {},
            currentHouseDetail  : {},
            homesDetails :[
                  {
                        id : parseInt(Math.random()  * 100),
                        propertyTitle : "This is the title",
                        // imageURL : home2,
                        desc : "this is the desc of the house",
                        price : 2000,
                        bedrooms : 4,
                        bathrooms : 5,
                        area  : "10 sq yd",
                        rentORsale : "rent",
                        location : "Malir 15 near jamia milia road"
                  },
                  {
                        id : parseInt(Math.random()  * 100),
                        propertyTitle : "This is the title",
                        // imageURL : home3,
                        desc : "this is the desc of the house",
                        price : 2000,
                        bedrooms : 4,
                        bathrooms : 5,
                        area  : "10 sq yd",
                        rentORsale : "rent",
                        location : "Gulshan 15 near jamia milia road"
                  },
                  {
                        id : parseInt(Math.random()  * 100),
                        propertyTitle : "This is the title",
                        // imageURL : home4,
                        desc : "this is the desc of the house",
                        price : 2000,
                        bedrooms : 4,
                        bathrooms : 5,
                        area  : "10 sq yd",
                        rentORsale : "sale",
                        location : "Ancholi 15 near jamia milia road"
                  }
            ]

      }
      setLoginUser = (loginUser)=>{
            this.setState({loginUser})
      }
      setCurrentHouseDetail = (houseDetail)=>{
            this.setState({currentHouseDetail : houseDetail})
      }
      setAllHouses = (allHouses)=>{
            this.setState({homesDetails : allHouses})
            
      }
      render() {
            return (
                  <MyContext.Provider value={
                        {...this.state,
                         setLoginUser : this.setLoginUser,
                         setCurrentHouseDetail:  this.setCurrentHouseDetail,
                         setAllHouses : this.setAllHouses
                         }}
                  >

                        {this.props.children}
                  </MyContext.Provider>
            )
      }
}
