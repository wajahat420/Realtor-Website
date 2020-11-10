import React, { Component } from 'react'

export default class search extends Component {
      constructor(props) {
            super(props);
            this.state = {
              displayDeatils:"none",
            //   cities:["Abbottabad", "Bhawalpur", "Chakwal", "Charsadda", "Chiniot", "Daska", "Dera Ismail Khan", "Faisalabad", "Gilgit", "Gujranwala", "Hyderabad", "Islamabad", "Jacobabad", "Karachi", "Kohat", "Lahore", "Larkana", "Mardan", "Mianwali", "Mirpur Khas", "Multan", "Nawabshah", "Pakpattan", "Peshawar", "Quetta", "Rawalpindi", "Sahiwal", "Sialkot"],
              cities:["Abbottabad","Ajwa", "Bhawalpur","brew", "Charsadda", "Daska", "Faisalabad", "Multan"],
              text:"",
              toogleStatusDropdown : false
            }
            this.status = {
                  Featured : false,
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
            // console.log("jjj",this.temp.sort())
      }
      details=()=>{
            if(this.state.displayDeatils == "none"){
                  this.setState({displayDeatils:"block"})
            }else{
                  this.setState({displayDeatils:"none"})
            }
            
      }
      closeDetails = ()=>{
            if(this.state.displayDeatils == "block"){
                  this.setState({displayDeatils:"none"})
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

      render() {
            return (
                  <div onClick={this.closeDetails} className="search  col-md-10">
                        <div className="row m-0">
                              <div className="col-5 p-0">

                                    <p className="pl-4 pt-2 mb-1"><b>Location</b></p>
                                    <button  type="button" class="btn dropdown-toggle pl-4 text-left" data-toggle="dropdown">
                                          Any
                                    </button>
                                    <div className="dropdown-menu">
                                          <a className="dropdown-item p-0 input text-center" ><input onChange={(e)=>this.setState({text:e.target.value})} type="text"/></a>
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
                        <div className="details col p-0 text-center" style={{display:this.state.displayDeatils}}>
                              {/* <a class="dropdown-item p-0" href="#"><input type="text"/></a> */}
                              <div>
                                    <a>Islamabad</a>
                                    <a>Lahore</a>
                                    <a>Karachi</a>
                                    <a>Lahore</a>
                              </div>
                              <div>
                                    <a>Karachi</a>
                                    <a>Lahore</a>
                                    <a>Karachi</a>
                                    <a>Lahore</a>
                              </div>
                              <div>
                                    <a>Karachi</a>
                                    <a>Lahore</a>
                                    <a>Karachi</a>
                                    <a>Lahore</a>
                              </div>
                              <div>
                                    <a>Karachi</a>
                                    <a>Lahore</a>
                                    <a>Karachi</a>
                                    <a>Lahore</a>
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