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
                        price : "1.5 Crore",
                        bedrooms : 8,
                        bathrooms : 8,
                        area  : "400 sq yd",
                        rentORsale : "sale",
                        location : "Malir 15 near jamia milia road",
                        city : "karachi"
                  },
                  {
                        id : parseInt(Math.random()  * 100),
                        propertyTitle : "This is the title",
                        // imageURL : home2,
                        desc : "this is the desc of the house",
                        price : "2 Crore",
                        bedrooms : 9,
                        bathrooms : 9,
                        area  : "420 sq yd",
                        rentORsale : "sale",
                        location : "Gulshan e Iqbal",
                        city : "karachi"
                  },
                  {
                        id : parseInt(Math.random()  * 100),
                        propertyTitle : "This is the title",
                        // imageURL : home2,
                        desc : "this is the desc of the house",
                        price : "70 lac",
                        bedrooms : 3,
                        bathrooms : 3,
                        area  : "130 sq yd",
                        rentORsale : "sale",
                        location : "Near Main Hyderabad Bazar",
                        city : "Hyderabad"
                  },
                  {
                        id : parseInt(Math.random()  * 100),
                        propertyTitle : "This is the title",
                        // imageURL : home2,
                        desc : "this is the desc of the house",
                        price : "50 Thousand",
                        bedrooms : 6,
                        bathrooms : 6,
                        area  : "300 sq yd",
                        rentORsale : "rent",
                        location : "bhawalpur brige road",
                        city : "bhawalpur"
                  },
                  {
                        id : parseInt(Math.random()  * 100),
                        propertyTitle : "This is the title",
                        // imageURL : home2,
                        desc : "this is the desc of the house",
                        price : "1.75 Crore",
                        bedrooms : 6,
                        bathrooms : 6,
                        area  : "500 sq yd",
                        rentORsale : "sale",
                        location : "backside of faisal Mosque",
                        city : "faisalabad"
                  },
                  {
                        id : parseInt(Math.random()  * 100),
                        propertyTitle : "This is the title",
                        // imageURL : home2,
                        desc : "this is the desc of the house",
                        price : "20 Thousand",
                        bedrooms : 3,
                        bathrooms : 2,
                        area  : "130 sq yd",
                        rentORsale : "rent",
                        location : "Gulshan-e-Maymar",
                        city : "karachi"
                  },
                  {
                        id : parseInt(Math.random()  * 100),
                        propertyTitle : "This is the title",
                        // imageURL : home2,
                        desc : "this is the desc of the house",
                        price : "1 Crore",
                        bedrooms : 3,
                        bathrooms : 3,
                        area  : "130 sq yd",
                        rentORsale : "sale",
                        location : "Bufferzone",
                        city : "karachi"
                  },

            ],
            signupUser : {},
            leads : [                {
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
            },]

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
      setLeads = (allHouses)=>{
            this.setState({leads : allHouses})   
      }
      setSignupUser = (signupUser)=>{
            this.setState({signupUser})
      }
      render() {
            return (
                  <MyContext.Provider value={
                        {...this.state,
                         setLoginUser : this.setLoginUser,
                         setCurrentHouseDetail:  this.setCurrentHouseDetail,
                         setAllHouses : this.setAllHouses,
                         setSignupUser : this.setSignupUser,
                         setLeads : this.setLeads
                         }}
                  >

                        {this.props.children}
                  </MyContext.Provider>
            )
      }
}
