import React, { Component } from 'react'
import "../css/search.css"

export default class search extends Component {
      constructor(props) {
            super(props);
            this.state = {
              dislayDetailedSearch:"none",
            //   cities:["Abbottabad", "Bhawalpur", "Chakwal", "Charsadda", "Chiniot", "Daska", "Dera Ismail Khan", "Faisalabad", "Gilgit", "Gujranwala", "Hyderabad", "Islamabad", "Jacobabad", "Karachi", "Kohat", "Lahore", "Larkana", "Mardan", "Mianwali", "Mirpur Khas", "Multan", "Nawabshah", "Pakpattan", "Peshawar", "Quetta", "Rawalpindi", "Sahiwal", "Sialkot"],
              cities:["Abbottabad","Ajwa", "Bhawalpur","brew", "Charsadda", "Daska", "Faisalabad", "Multan"],
              text:"",
              toogleStatusDropdown : false,
              detailedSearch : {
                  propertyType : "",
                  propertyStatus : "",
                  propertyID : "",
                  minArea : "",
                  maxArea : "",
                  minBeds : "",
                  minPrice : "",
                  maxPrice : "",
                  locality : "",
                  vendors: ""
              }
            }
            this.copyDetailedSearch = {...this.state.detailedSearch}
            this.status = {
                  "For Rent" : false,
                  "For Sale":false,
                  Leased : false,
                  "New Addition": false,
                  "Open House" : false,
                  Reduced: false,
                  Rental: false,
                  Sold: false
            }
            
            this.temp = [...this.state.cities]
            this.oneToten = [1,2,3,4,5,6,7,8,9,10]
            this.propertyType = ["Property Type (Any)","Commercial","-Office","-Shop","Resedential","-Apartment","-Apartment Building","-Condominium","-Single Family","-Villa"]
            this.propertyStatus = ["Property Status (Any)","For Rent","For Sale"]
            this.minArea = ["Min Area (Any)",0,10,20,30,40,50,60,70,80,90,100,110,120]
            this.maxArea = ["Max Area (Any)",80,80,100,110,120,140,200]
            this.minBeds = ["Min Beds (Any)",2,3,4,5,6,7,8,9,10]
            this.minPrice = ["Min Area (Any)","0","5000","10,1000","15,000","20,000","25,2000","30,000","50,000","60,000"]
            this.maxPrice = ["Min Area (Any)","5000","10,1000","15,000","20,000","25,2000","30,000","50,000","60,000","70,000","80,000","90,000","100,000"]
            this.locality = ["Gulshan","Jouhar","Nazimabad","Fb Area","Gulshan-e-Maymar","Defence","Steel Town"]
            this.vendors = ["Ali Bhai","Aslam bhai","Yousuf","Saleem Flats","Haider"]
      }
      details=()=>{
            if(this.state.dislayDetailedSearch == "none"){
                  this.setState({dislayDetailedSearch:"block"})
            }else{
                  this.setState({dislayDetailedSearch:"none"})
            }  
      }
      closeDetails = ()=>{
            if(this.state.dislayDetailedSearch == "block"){
                  this.setState({dislayDetailedSearch:"none"})
            }
      }
      filterCities = (item)=>{
            const text = this.state.text.toLowerCase()
            item = item.toLowerCase()
            if(text == ""){
                  return true
            }

            return item.includes(text)
      }
      statusDropdownSwitch =(button=null)=>{
            let status = document.getElementById('status');
            let status_dropdown = document.getElementById('status-dropdown');

            document.onclick = function(e){
                  let target =  e.target ;
                  let display = 'none';
                  while (target.parentNode) {
                        if (target == status) {
                              display ='block';
                              break;
                        }
                        target = target.parentNode;
                  }
                  if(button == "button" && status_dropdown.style.display == "block"){
                        display = "none"
                  }
                  status_dropdown.style.display = display
            }  
      }
      changeValueOfDetailedSearch = (option,optionValue,inputFieldValue = "",type = "select")=>{
            if(type == "input"){
                  this.copyDetailedSearch[option] = inputFieldValue
                  console.log(this.copyDetailedSearch)
            }else{
                  let copyDetailedSearchObj = {...this.state.detailedSearch}
                  copyDetailedSearchObj[option] = optionValue
                  this.setState({detailedSearch:copyDetailedSearchObj})
            }
            
      }
      render() {
            console.log(this.state.detailedSearch)

            return (
                  <div onClick={this.closeDetails} className="search  col-md-10">
                        <div className="row m-0">
                              <div className="col-5 p-0">

                                    <p className="pl-4 pt-2 mb-1"><b>Location</b></p>
                                    <button  type="button" class="btn dropdown-toggle pl-4 text-left" data-toggle="dropdown">
                                          Any
                                    </button>
                                    <div className="dropdown-menu">
                                          <a className="dropdown-item p-0 input text-center" >
                                                <input onChange={(e)=>this.setState({text:e.target.value})} type="text"/>
                                          </a>
                                          {
                                                this.state.cities.filter(elem=>this.filterCities(elem)).map((elem,key)=>{
                                                      return(
                                                            <a className="dropdown-item" key={key} >{elem}</a>
                                                      )
                                                })
                                          }
                                          
                                    </div>
                              </div>

                              <div  id="status" className="col-3 p-0 status">

                                    {/* <p className="pl-4 pt-2 mb-1"><b>Location</b></p> */}
                                    <button onClick={()=>this.statusDropdownSwitch("button")} type="button" className="btn dropdown-toggle pl-4 text-center" >
                                          Status 
                                    </button>
                                    <div onClick={this.statusDropdownSwitch} id="status-dropdown"   className="dropdown-menu p-3 ">
                                          {
                                                Object.keys(this.status).map((elem,key)=>{
                                          
                                                      return(
                                                            <div className="position-relative pb-2" key={key} >
                                                                  <a  >{elem}</a>
                                                                  <label onClick={()=>console.log("works")} className="switch mb-0">
                                                                        <input 
                                                                              type="checkbox" 
                                                                              checked={this.status[elem] == true ? "checked" : null}
                                                                              onClick={()=>this.status[elem] = !this.status[elem]}
                                                                        />
                                                                        <span className="slider round"></span>
                                                                  </label>
                                                            </div>
                                                      )
                                                })
                                          }
                                          
                                    </div>
                              </div>
                              
                              <div onClick={this.details} className="button col-2 p-0 text-center">
                                    
                                    <div>
                                          <i className="fa fa-search-plus" aria-hidden="true"></i>
                                    </div>
                              </div>
                              <div  className="button  col-2 p-0 text-center">
                                    <div > 
                                          <i class="fa fa-search pr-2"></i>Search
                                    </div>
                              </div>
                        </div>  {/*  row end  */}
      
                        {/* Deatils */}
                        <div className="details col p-0 text-center" style={{display:"block"}}>

                              <div>
                                   
                                    <div className="dropdown " >
                                          <button type="button" class="btn dropdown-toggle " data-toggle="dropdown">Property Type (Any)</button>

                                          <ul className="dropdown-menu">
                                                <li><input onChange={(e)=>this.changeValueOfDetailedSearch("propertyType","",e.target.value,"input")} type="text"/></li>
                                                {this.propertyType.map((elem,key)=>
                                                      <li onClick={()=>this.changeValueOfDetailedSearch("propertyType",elem)}key={key}>{elem}</li>
                                                )}
                                          </ul>
                                    </div>
                                    <div className="dropdown " >
                                          <button type="button" class="btn dropdown-toggle " data-toggle="dropdown">Property Status (Any)</button>
                                          <ul className="dropdown-menu">
                                          <li><input onChange={(e)=>this.changeValueOfDetailedSearch("propertyStatus","",e.target.value,"input")} type="text"/></li>
                                                {this.propertyStatus.map((elem,key)=>
                                                      <li onClick={()=>this.changeValueOfDetailedSearch("propertyStatus",elem)}key={key}>{elem}</li>
                                                )}
                                                
                                          </ul>
                                    </div>
                                    <div className="dropdown " >
                                          <input type="text" class="btn " placeholder="Property id"/>
                                    </div>
                                    <div className="dropdown " >
                                          <button type="button" class="btn dropdown-toggle " data-toggle="dropdown">Min Area (SQ. YD.)</button>
                                          <ul className="dropdown-menu">
                                          <li><input onChange={(e)=>this.changeValueOfDetailedSearch("minArea","",e.target.value,"input")} type="text"/></li>
                                                {this.minArea.map((elem,key)=>
                                                      <li onClick={()=>this.changeValueOfDetailedSearch("minArea",elem)}key={key}>{elem}</li>
                                                )}
                                          </ul> 
                                    </div>
                                    <div className="dropdown " >
                                          <button type="button" class="btn dropdown-toggle " data-toggle="dropdown">Max Area (SQ. YD.)</button>
                                          <ul className="dropdown-menu">
                                          <li><input onChange={(e)=>this.changeValueOfDetailedSearch("maxArea","",e.target.value,"input")} type="text"/></li>
                                                {this.maxArea.map((elem,key)=>
                                                      <li onClick={()=>this.changeValueOfDetailedSearch("maxArea",elem)}key={key}>{elem}</li>
                                                )}
                                          </ul>                                    </div>
                                    <div className="dropdown " >
                                          <button type="button" class="btn dropdown-toggle " data-toggle="dropdown">Min Beds (Any)</button>
                                          <ul className="dropdown-menu">
                                                <li><input onChange={(e)=>this.changeValueOfDetailedSearch("minBeds","",e.target.value,"input")} type="text"/></li>
                                                {this.minBeds.map((elem,key)=>
                                                      <li onClick={()=>this.changeValueOfDetailedSearch("minBeds",elem)}key={key}>{elem}</li>
                                                )}
                                          </ul>
                                    </div>
                                    <div className="dropdown " >
                                          <button type="button" class="btn dropdown-toggle " data-toggle="dropdown">Min Price (Any)</button>
                                          <ul className="dropdown-menu">
                                          <li><input onChange={(e)=>this.changeValueOfDetailedSearch("minPrice","",e.target.value,"input")} type="text"/></li>
                                                {this.minPrice.map((elem,key)=>
                                                      <li onClick={()=>this.changeValueOfDetailedSearch("minPrice",elem)}key={key}>{elem}</li>
                                                )}
                                          </ul>
                                    </div>
                                    <div className="dropdown " >
                                          <button type="button" class="btn dropdown-toggle " data-toggle="dropdown">Max Price (Any)</button>
                                          <ul className="dropdown-menu">
                                                <li><input onChange={(e)=>this.changeValueOfDetailedSearch("maxPrice","",e.target.value,"input")} type="text"/></li>
                                                {this.maxPrice.map((elem,key)=>
                                                      <li onClick={()=>this.changeValueOfDetailedSearch("maxPrice",elem)}key={key}>{elem}</li>
                                                )}
                                          </ul>
                                    </div>
                                    <div className="dropdown " >
                                          <button type="button" class="btn dropdown-toggle " data-toggle="dropdown">Locality (Any)</button>
                                          <ul className="dropdown-menu">
                                                <li><input onChange={(e)=>this.changeValueOfDetailedSearch("locality","",e.target.value,"input")} type="text"/></li>
                                                {this.locality.map((elem,key)=>
                                                      <li onClick={()=>this.changeValueOfDetailedSearch("locality",elem)}key={key}>{elem}</li>
                                                )}
                                          </ul>
                                    </div>
                                    <div className="dropdown " >
                                          <button type="button" class="btn dropdown-toggle " data-toggle="dropdown">Vendors (Any)</button>
                                          <ul className="dropdown-menu">
                                                <li><input onChange={(e)=>this.changeValueOfDetailedSearch("vendors","",e.target.value,"input")} type="text"/></li>
                                                {this.vendors.map((elem,key)=>
                                                      <li onClick={()=>this.changeValueOfDetailedSearch("vendors",elem)}key={key}>{elem}</li>
                                                )}
                                          </ul>
                                    </div>
                              </div>
                  
                        </div>      
            
                  </div>
            )
      }
}
 
      // binarySearch(){
      //       let {text,cities} = this.state
      //       text = text.toLowerCase()
      //       const compTextIndex = text.length -1 
      //       let  i = 1
      //       let start = 0  
      //       let end = cities.length - 1
      //       let mid = Math.floor((end - start) / 2)

      //       console.log(text[compTextIndex],cities[mid][compTextIndex])

      //       while(text[compTextIndex] != cities[mid][compTextIndex].toLowerCase() && end > start + 1){
      //             mid = start + Math.floor((end - start) / 2)
      //             const elem =  cities[mid].toLowerCase()
      //             console.log(elem,start,end,elem[0].charCodeAt(),text[0].charCodeAt())
      //             if(text[compTextIndex].charCodeAt() <= elem[compTextIndex].charCodeAt()){
      //                   end = start +  mid
      //                   console.log("if",start,end)
      //             }else{
      //                   start = start +  mid + 1
      //                   console.log("else",start,end)
      //             }
 
      //       }
            // if(cities[start][compTextIndex] == text[compTextIndex]){
            //       let loopStartIndex = start
            // }else{
            //       let loopStartIndex = end
            // }
      // }