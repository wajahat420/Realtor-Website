import React, { Component } from 'react'

export default class search extends Component {
      constructor(props) {
            super(props);
            this.state = {
              displayDeatils:"none"
            };
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
      render() {
            return (
                  <div onClick={this.closeDetails} className="search  col-md-8">
                        <div className="row m-0">
                              <div class="col-7 p-0">
                                    <p className="pl-4 pt-2 mb-1"><b>Location</b></p>
                                    <button  type="button" class="btn dropdown-toggle pl-4 text-left" data-toggle="dropdown">
                                          Any
                                    </button>
                                    <div class="dropdown-menu">
                                          <a class="dropdown-item p-0" ><input type="text"/></a>
                                          <a class="dropdown-item" >Karachi</a>
                                          <a class="dropdown-item" >Lahore</a>
                                    </div>
                              </div>
                              <div onClick={this.details} className="button col-2 p-0 text-center">
                                    
                                    <div>
                                          <i className="fa fa-search-plus" aria-hidden="true"></i>
                                    </div>
                              </div>
                              <div  className="button  col-3 p-0 text-center">
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


// export default class search extends Component {
//       constructor(props) {
//             super(props);
//             this.state = {
//               count: 0
//             };
//           }
//       state = {
//             displayDeatils:"none"
//       }
//       details(){
//             console.log(this.state)
            
//             if(this.state.displayDeatils == "none"){
//                   this.setState({displayDeatils:"block"})
//             }else{
//                   this.setState({displayDeatils:"none"})
//             }
            
//       }
//       render(){

//             return (
//                   <div className="search col-md-6 m-auto">
//                         <div className="row m-0">
//                               <div class="col-7 p-0">
//                                     <p className="pl-4 pt-2 mb-1">Location</p>
//                                     <button type="button" class="btn dropdown-toggle pl-4 text-left" data-toggle="dropdown">
//                                           Any
//                                     </button>
//                                     <div class="dropdown-menu">
//                                           <a class="dropdown-item p-0" href="#"><input type="text"/></a>
//                                           <a class="dropdown-item" href="#">Karachi</a>
//                                           <a class="dropdown-item" href="#">Lahore</a>
//                                     </div>
//                               </div>
//                               <div style={{backgroundColor:"gray"}} onClick={this.details} className="button explore-btn col-2 p-0">
                                    
//                                     <div   data-toggle="dropdown">
//                                           <i className="fa fa-search-plus" aria-hidden="true"></i>
//                                     </div>
//                               </div>
//                               <div  className="button search-btn col-3 p-0">
//                                     <div > 
//                                           <i class="fa fa-search"></i>Search
//                                     </div>
//                               </div>
//                         </div>  {/*  row end  */}
      
//                         {/* Deatils */}
//                         <div className="details col p-0 text-center" style={{backgroundColor:"pink",display:this.state.displayDeatils}}>
//                               {/* <a class="dropdown-item p-0" href="#"><input type="text"/></a> */}
//                               <div style={{display:"flex"}}>
//                                     <a>Karachi</a>
//                                     <a>Lahore</a>
//                                     <a>Karachi</a>
//                                     <a>Lahore</a>
//                               </div>
//                               <div style={{display:"flex"}}>
//                                     <a>Karachi</a>
//                                     <a>Lahore</a>
//                                     <a>Karachi</a>
//                                     <a>Lahore</a>
//                               </div>
//                               <div style={{display:"flex"}}>
//                                     <a>Karachi</a>
//                                     <a>Lahore</a>
//                                     <a>Karachi</a>
//                                     <a>Lahore</a>
//                               </div>
//                               <div style={{display:"flex"}}>
//                                     <a>Karachi</a>
//                                     <a>Lahore</a>
//                                     <a>Karachi</a>
//                                     <a>Lahore</a>
//                               </div>
//                         </div>      
//                   </div>
//             )
//       }
// }
