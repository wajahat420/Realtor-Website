import React, { Component } from 'react'
import Home from "../../imgs/home.jpg"
import "./style.css"

export default class homeDetail extends Component {
    render() {
        return (
            <div className="col-11 ml-auto mr-auto mb-5">
                <div className="home-detail row">
                    <div className="col-7">
                        <img src={Home}/>
                    </div>
                    <div className="col-3 p-2 border message">
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Email"/>
                        <input type="text" placeholder="Phone No."/>
                        <input type="text" className="msgTxt" placeholder="Message"/>

                        <input type="button" value="Submit"/>
                        {/* <div className="col-12 button-class mt-2">
                            Call
                        </div>   
                        <div className="col-12 button-class mt-2">
                            message
                        </div>  */}
                    </div>
                </div>
                <div className="col-12 ml-auto mr-auto mt-5 overview">
                    <h3>Overview</h3>
                    <p className="heading">Details</p>
                    <table className="col-6 m-auto p-3">
                        <tr>
                            <td>Type</td>
                            <td>Type</td>
                            <td>Edit</td>

                            <td>Area</td>
                            <td>Area</td>
                            <td>Edit</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>Price</td>
                            <td>Edit</td>

                            <td>Location</td>
                            <td>Location</td>
                            <td>Edit</td>
                        </tr>
                        <tr>
                            <td>Baths</td>
                            <td>Baths</td>
                            <td>Edit</td>

                            <td>Bedrooms</td>
                            <td>Bedrooms</td>
                            <td>Edit</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>Area</td>
                            <td>Edit</td>

                            {/* <td>Realtor Phone Number</td>
                            <td>Realtor Phone Number</td>
                            <td>Edit</td> */}
                        </tr>
                    </table>
                    <div>
                        <p className="heading">Description</p>
                        <p>
                            Corner 10 Marla Double Storey House Is Available For Sale In Bahria Enclave, Sector C1, Islamabad. 
                            Beautiful location,
                            Without Basement, 2 Gates,
                            The location of the property in Bahria Town makes it an ideal place to live. Interested in 2250  Square Feet sized properties? Here is a popular option. Islamabad has many options for all kinds of properties, so stop waiting and start looking. The project comes with different House priced at more or less PKR Rs 32,000,000 that could meet your demands. You can enjoy a lavish lifestyle in the House surrounded by all kinds of activities. Reasonable one-unit house is available for sale, so make a booking today. 

                            Find out the basic features of the property below. 
                            Physical activity is essential for children, so the kids' play area adjoining the property is great for the purpose. 
                            A central air-conditioning system is very beneficial in summers and with the House you can enjoy its benefits. 
                            Stylish yet practical facilities are installed for the differently-abled to navigate in the House. 
                            With a separate study room in the House you have a personal space where you can read in peace. 
                            The property comes with a powder room - adding to its many convenient features. 
                            The steam room in the House helps you detox and makes you feel fresh afterwards. 
                            If you are a large family, the spacious sitting area in this House is perfect for you. 

                            We really suggest you contact us, and we will break down all the details of this property for you.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
