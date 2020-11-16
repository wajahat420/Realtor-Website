import React from 'react'
import "../css/homeDIV.css"
import Image from "../imgs/home.jpg"
export default function homeDIV() {
      return (
            <div className="col-4 position-relative m-auto p-5 m-0  home-div text-center">
                  <img className="col-12 p-0" src={Image}/>
                  <div className="position-absolute msg">
                        <p >message</p>
                  </div>
                  <div className="position-absolute call">
                        <p>call</p>
                  </div>
                  <div className="border">
                        <h4 className="col-12 mt-4">Home in Merrick Way</h4>
                        <p className="col-12 p-0 explain">Enchanting three bedroom, three bath home with spacious one bedroom, one bath… </p>
                        <div className="row p-0 m-0 ">
                              <div>
                                    <p><b>Bedrooms</b></p>
                                    <span><i class="fa fa-bed" aria-hidden="true"></i>3</span>
                              </div>
                              <div>
                                    <p><b>Bathrooms</b></p>
                                    <span><i class="fa fa-bath" aria-hidden="true"></i>4</span>
                              </div>
                              <div>
                                    <p><b>Area</b></p>
                                    <span><i class="fa fa-object-group" aria-hidden="true"></i>5 sq ft</span>
                              </div>     
                        </div>{/* row end  */}
                        <p className="col-12 p-0 sale">For Sale</p>
                        <h3 className="col-12 p-0 ">$540,000</h3>
                  </div>

            </div>
      )
}
