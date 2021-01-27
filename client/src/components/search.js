import React, { Component } from 'react'
import "../css/search.css"

export default class search extends Component {
      constructor(props) {
            super(props);
            this.state = {
              dislayDetailedSearch:"none",
            //   cities:["Abbottabad", "Bhawalpur", "Chakwal", "Charsadda", "Chiniot", "Daska", "Dera Ismail Khan", "Faisalabad", "Gilgit", "Gujranwala", "Hyderabad", "Islamabad", "Jacobabad", "Karachi", "Kohat", "Lahore", "Larkana", "Mardan", "Mianwali", "Mirpur Khas", "Multan", "Nawabshah", "Pakpattan", "Peshawar", "Quetta", "Rawalpindi", "Sahiwal", "Sialkot"],
              cities:["Hyderabad","Karachi", "Larkana","Sahiwal", "Nawabshah", "Daska", "Faisalabad", "Multan"],
              text:"",
              toogleStatusDropdown : false,
              detailedSearch : {
                  propertyType : "Property Type (Any)",
                  propertyStatus : "Property Status (Any)",
                  propertyID : "Property ID",
                  minArea : "Min Area (Sq Yd)",
                  maxArea : "Max Area (Sq Yd)",
                  minBeds : "Min Beds (Any)",
                  minPrice : "Min Price (Any)",
                  maxPrice : "Max Price (Any)",
                  locality : "Locality (Any)",
                  vendors: "Clients (Any)"
              }
            }
            this.copyDetailedSearch = {...this.state.detailedSearch}
            this.status = {
                  "For Rent" : false,
                  "For Sale":false
            }
            this.temp = [...this.state.cities]
            this.oneToten = [1,2,3,4,5,6,7,8,9,10]
            this.propertyType = ["Property Type (Any)","Commercial","-Office","-Shop","Resedential","-Apartment","-Apartment Building","-Condominium","-Single Family","-Villa"]
            // this.propertyStatus = ["Property Status (Any)","For Rent","For Sale"]
            this.minArea = ["Min Area (Sq Yd)",0,10,20,30,40,50,60,70,80,90,100,110,120]
            this.maxArea = ["Max Area (Sq Yd)",80,80,100,110,120,140,200]
            this.minBeds = ["Min Beds (Any)",2,3,4,5,6,7,8,9,10]
            this.minPrice = ["Min Price (Any)","0","5000","10,1000","15,000","20,000","25,2000","30,000","50,000","60,000"]
            this.maxPrice = ["Max Price (Any)","5000","10,1000","15,000","20,000","25,2000","30,000","50,000","60,000","70,000","80,000","90,000","100,000"]
            this.locality = ["Locality (Any)","Gulshan","Jouhar","Nazimabad","Fb Area","Gulshan-e-Maymar","Defence","Steel Town"]
            this.vendors = ["Clients (Any)","Ali Bhai","Aslam bhai","Yousuf","Saleem Flats","Haider"]
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
            return (
                  <div onClick={this.closeDetails} className="search  col-md-9">
                        <div className="row m-0">
                              <div className="col-7 p-0">

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
                                                            <a onClick={()=>this.props.setCity(elem.toLowerCase())} className="dropdown-item" key={key} >{elem}</a>
                                                      )
                                                })
                                          }
                                          
                                    </div>
                              </div>

                              <div  id="status" className="col-5 p-0 status">

                                    {/* <p className="pl-4 pt-2 mb-1"><b>Location</b></p> */}
                                    <button onClick={()=>this.statusDropdownSwitch("button")} type="button" className="btn dropdown-toggle pl-4 text-center" >
                                          Status 
                                    </button>
                                    <div onClick={this.statusDropdownSwitch} id="status-dropdown"   className="dropdown-menu p-3 ">
                                          {
                                                Object.keys(this.status).map((elem,key)=>{
                                                      let status = elem === "For Rent" ? "rent" : "sale"
                                                     
                                                      return(
                                                            <div className="position-relative pb-2" key={key} >
                                                                  <a > {elem} </a>
                                                                  <label onClick={()=>this.props.setStatus(status)} className="switch mb-0">
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