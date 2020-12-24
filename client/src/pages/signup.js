import axios from 'axios'
import React, { Component } from 'react'

export default class signup extends Component {
      state = {
            username:  "",
            email : "",
            mobileNo:  "",
            address : "",
            password : ""
      }
      AuthUser = ()=>{
            axios.post("/signup",this.state)
            .then(res=>{
                  if(res.data === "error"){
                        alert("Error in sending Check your fields")
                  }else if(res.data == "already"){
                        alert("Account already exist, change email / username / phone number")
                  }else{
                        this.props.history.push("/")
                  }
            })
      }
      render() {
            return (
                  <div className="col-md-3 ml-auto mr-auto text-center mb-5">
                        <input className="col-10 p-2" onChange={(e)=>this.setState({username:e.target.value})} placeholder="Username"/>
                        <br />
                        <input className="col-10 p-2" onChange={(e)=>this.setState({email:e.target.value})} type="email" placeholder="Email"/>
                        <br />
                        <input className="col-10 p-2" onChange={(e)=>this.setState({mobileNo:e.target.value})} placeholder="Mobile No."/>
                        <br />
                        <input className="col-10 p-2" onChange={(e)=>this.setState({address:e.target.value})} placeholder="Address"/>
                        <br />
                        <input className="col-10 p-2" onChange={(e)=>this.setState({password:e.target.value})} placeholder="Password"/>
                        <br/>
                        <br/>
                        <button className="col-10 p-2" onClick={this.AuthUser}>Signup</button>
                  </div>
            )
      }
}
