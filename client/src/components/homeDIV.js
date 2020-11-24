import React from 'react'
import "../css/homeDIV.css"
import Image from "../imgs/home.jpg"
export default function  homeDIV(props) {
      return (
            <div className="col-4 position-relative m-auto p-5 m-0  home-div text-center">
                  <img className="col-12 p-0" src={props.imageURL}/>
                  <div className="position-absolute msg">
                        <p >message</p>
                  </div>
                  <div className="position-absolute call">
                        <p>call</p>
                  </div>
                  <div className="border">
                        <h4 className="col-12 mt-4">{props.propertyTitle}</h4>
                        <p className="col-12 p-0 explain">{props.desc}</p>
                        <div className="row p-0 m-0 ">
                              <div>
                                    <p><b>Bedrooms</b></p>
                                    <span><i class="fa fa-bed" aria-hidden="true"></i>{props.bedrooms}</span>
                              </div>
                              <div>
                                    <p><b>Bathrooms</b></p>
                                    <span><i class="fa fa-bath" aria-hidden="true"></i>{props.bathrooms}</span>
                              </div>
                              <div>
                                    <p><b>Area</b></p>
                                    <span><i class="fa fa-object-group" aria-hidden="true"></i>{props.area}</span>
                              </div>     
                        </div>{/* row end  */}
                        <p className="col-12 p-0 mt-4 mb-2 sale">{props.rentORsale}</p>
                        <h3 className="col-12 p-0 ">{props.price}</h3>
                  </div>

            </div>
      )
}
