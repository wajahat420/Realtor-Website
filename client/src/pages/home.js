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


export default class Home extends React.Component {
      state = {
            homesDetails :
                  [
                        {city:"karachi",location:"Bahria Town - Ali Block, Bahria Town - Precinct 12",img:home1,desc:"Ready To Move Brand New Double Storey Villa Available For Sale In Ali Block",price:"1.1 Crore PKR",bedrooms:"4",bathrooms:"4",area:"350 Sq. Yd.",rentORsale:"FOR SALE",type:"House"},
                        {city:"karachi",location:"Bahria Sports City, Bahria Town Karachi",img:home2,desc:"Sports City Villa Elite Family Excellence With Soaring Views",price:"1.4 Crore PKR",bedrooms:"4",bathrooms:"4",area:"350 Sq Yd.",rentORsale:"FOR SALE",type:"House"},
                        {city:"karachi",location:"Sector 15-A/1, North Karachi - Sector 15A, North Karachi",img:home3,desc:"1080 Square Feet House Is Available For Sale In North Karachi",price:"2 Crore PKR",bedrooms:"4",bathrooms:"4",area:"120 Sq Yd.",rentORsale:"FOR SALE",type:"House"},
                        {city:"karachi",location:"Navy Housing Scheme Karsaz",img:home4,desc:"Brand New 2nd Floor Tower 5 Apartment In Navy Housing Scheme Karsaz",price:"7.5 Crore PKR",bedrooms:"4",bathrooms:"4",area:"400 Sq Yd.",rentORsale:"FOR SALE",type:"Flat"},
                        {city:"karachi",location:"DHA Phase 5, DHA Defence",img:home5,desc:"Fully Renovated Bungalow",price:"3 Lakh PKR",bedrooms:"5",bathrooms:"6",area:"550 Sq Yd.",rentORsale:"FOR RENT",type:"House"},
                        {city:"karachi",location:"Askari 5, Malir Cantonment",img:home6,desc:"6th Floor Flat Is Available For Rent In G +9 Building",price:"60 Thousand PKR",bedrooms:"3",bathrooms:"3",area:"286 Sq Yd.",rentORsale:"FOR RENT",type:"Flat"},
                        {city:"lahore",location:"Gulberg 2, Gulberg, Lahore, Punjab",img:home7,desc:"Unity Estates Presents A Spectacular Of 2 Kanal 12 Marla House Gulberg 2",price:"16.5 Crore PKR",bedrooms:"4",bathrooms:"5",area:"2.6 kanal",rentORsale:"FOR SALE",type:"House"},
                        {city:"lahore",location:"Wapda Town, Lahore, Punjab",img:home8,desc:"10 Marla Brand New Upper Portion For Rent",price:"40 Thousand PKR",bedrooms:"3",bathrooms:"3 ",area:"10 Marla",rentORsale:"FOR RENT",type:"Upper Portion"},
                  ]
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
                                          location={elem.location}
                                          img={elem.img}
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
