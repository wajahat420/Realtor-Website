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
            homesDetails :
                  [
                        {city:"karachi",heading:"Bahria Town - Ali Block",location:"Bahria Town - Ali Block, Bahria Town - Precinct 12",img:home1,desc:"Ready To Move Brand New Double Storey Villa Available For Sale In Ali Block",price:"1.1 Crore PKR",bedrooms:"4",bathrooms:"4",area:"350 Sq. Yd.",rentORsale:"FOR SALE",type:"House"},
                        {city:"karachi",heading:"Bahria Sports City, Bahria Town",location:"Bahria Sports City, Bahria Town Karachi",img:home2,desc:"Sports City Villa Elite Family Excellence With Soaring Views",price:"1.4 Crore PKR",bedrooms:"4",bathrooms:"4",area:"350 Sq Yd.",rentORsale:"FOR SALE",type:"House"},
                        {city:"karachi",heading:"Sector 15-A/1, North Karachi",location:"Sector 15-A/1, North Karachi",img:home3,desc:"1080 Square Feet House Is Available For Sale In North Karachi",price:"2 Crore PKR",bedrooms:"4",bathrooms:"4",area:"120 Sq Yd.",rentORsale:"FOR SALE",type:"House"},
                        {city:"karachi",heading:"Navy Housing Scheme Karsaz",location:"Navy Housing Scheme Karsaz",img:home4,desc:"Brand New 2nd Floor Tower 5 Apartment In Navy Housing Scheme Karsaz",price:"7.5 Crore PKR",bedrooms:"4",bathrooms:"4",area:"400 Sq Yd.",rentORsale:"FOR SALE",type:"Flat"},
                        {city:"karachi",heading:"DHA Phase 5, DHA Defence",location:"DHA Phase 5, DHA Defence",img:home5,desc:"Fully Renovated Bungalow",price:"3 Lakh PKR",bedrooms:"5",bathrooms:"6",area:"550 Sq Yd.",rentORsale:"FOR RENT",type:"House"},
                        {city:"karachi",heading:"Askari 5, Malir Cantonment",location:"Askari 5, Malir Cantonment",img:home6,desc:"6th Floor Flat Is Available For Rent In G +9 Building",price:"60 Thousand PKR",bedrooms:"3",bathrooms:"3",area:"286 Sq Yd.",rentORsale:"FOR RENT",type:"Flat"},
                        {city:"lahore",heading:"Gulberg 2, Lahore ",location:"Gulberg 2, Gulberg, Lahore, Punjab",img:home7,desc:"Unity Estates Presents A Spectacular Of 2 Kanal 12 Marla House Gulberg 2",price:"16.5 Crore PKR",bedrooms:"4",bathrooms:"5",area:"2.6 kanal",rentORsale:"FOR SALE",type:"House"},
                        {city:"lahore",heading:"Wapda Town, Lahore, Punjab",location:"Wapda Town, Lahore, Punjab",img:home8,desc:"10 Marla Brand New Upper Portion For Rent",price:"40 Thousand PKR",bedrooms:"3",bathrooms:"3 ",area:"10 Marla",rentORsale:"FOR RENT",type:"Upper Portion"},
                        {city:"abbottabad",heading:"Murree Road, Abbottabad",location:"Murree Road, Abbottabad, Khyber Pakhtunkhwa",img:"none",desc:"Green View Hotel Apartments",price:"23.4 Lakh PKR",bedrooms:"1",bathrooms:"1",area:"1.2 Marla",rentORsale:"FOR SALE",type:"Flat"},
                        {city:"abbottabad",heading:"Bhu Mirpur, Abbottabad",location:"Bhu Mirpur, Abbottabad, Khyber Pakhtunkhwa",img:home9,desc:"Apartment At Mirpur",price:"16 Thousand PKR",bedrooms:"2",bathrooms:"",area:"1.3 Marla",rentORsale:"FOR RENT",type:"Flat"},
                        {city:"islamabad",heading:"F-8, Islamabad, Islamabad Capital",location:"F-8, Islamabad, Islamabad Capital",img:home10,desc:"Triple Storey House Is Available For Sale",price:"20 Crore PKR",bedrooms:"7",bathrooms:"8",area:"1.8 Kanal",rentORsale:"FOR SALE",type:"House"},
                        {city:"islamabad",heading:"Bahria Enclave - Sector H",location:"Bahria Enclave - Sector H, Bahria Enclave, Bahria Town, Islamabad",img:home11,desc:"Sector H 5 Marla Brand New House For Rent",price:"40 Thousand PKR",bedrooms:"3",bathrooms:"3",area:"5 Marla",rentORsale:"FOR SALE",type:"House"},
                        {city:"islamabad",heading:"DHA Homes, DHA Valley",location:"DHA Homes, DHA Valley, DHA Defence, Islamabad, Islamabad Capital",img:home12,desc:"Dha Valley Islamabad",price:"64 Thousand PKR",bedrooms:"3",bathrooms:"3",area:"8 Marla",rentORsale:"FOR SALE",type:"House"},
                        {city:"islamabad",heading:"Gulshan-e-Iqbal - Block 13/D-2,",location:"Gulshan-e-Iqbal - Block 13/D-2, Gulshan-e-Iqbal, Gulshan-e-Iqbal Town, Karachi",img:home13,desc:"240 yards",price:"40 Thousand PKR",bedrooms:"2",bathrooms:"2",area:"240 Sq. Yd.",rentORsale:"FOR SALE",type:"House"},
                        {city:"bhawalpur",heading:"Model Town C, Bahawalpur",location:"Model Town C, Bahawalpur, Punjab",img:home14,desc:"Triple Storey House Is Available For Rent",price:"2.3 Lakh PKR",bedrooms:"7",bathrooms:"7",area:"1 kanal",rentORsale:"FOR RENT",type:"House"},
                        {city:"bhawalpur",heading:"Private Farm House",location:"Private Farm House For Rent",img:home15,desc:"Private Farm House For Rent",price:"6 Lakh PKR",bedrooms:"6",bathrooms:"6",area:"56 kanal",rentORsale:"FOR RENT",type:"Farm House"},
                        {city:"bhawalpur",heading:"Balkasar, Chakwal",location:"Balkasar, Chakwal, Punjab",img:home16,desc:"17 Kanal Control Shed For Sale",price:"4.25 Crore PKR",bedrooms:"3",bathrooms:"3",area:"17 kanal",rentORsale:"FOR SALE",type:"Farm House"},

                  ]

      }
      componentWillUnmount(){
            

      }
      componentDidMount(){
            this.state.homesDetails.forEach(elem=>{
                  console.log(elem.city)
                  axios({
                        method: 'post',
                        url: '/sendHomeDetails',
                        data: {
                              city : elem.city,
                              heading: elem.heading,
                              location : elem.location,
                              img: elem.img,
                              desc: elem.desc,
                              price : elem.price,
                              bedrooms : elem.bedrooms,
                              bathrooms : elem.bathrooms,
                              area : elem.area,
                              rentORsale : elem.rentORsale,
                              type : elem.type
                        }
                  })
                  .then(res=>{
                        console.log("res from react",res)
                  }).catch(err=>{
                        console.log("err",err)
                  })
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
                                          location={elem.heading}
                                          img={elem.img}
                                          desc={elem.desc}
                                          price={elem.price}
                                          bedrooms={elem.bedrooms}
                                          bathrooms={elem.bathrooms}
                                          area={elem.area}
                                          rentORsale={elem.rentORsale}
                                          data={this.state.homesDetails}
                                    />
                              )}
                        </div>
                  </div>
            )
      }
}
