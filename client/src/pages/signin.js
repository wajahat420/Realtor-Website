import axios from 'axios'
import React, { Component } from 'react'

export default class signin extends Component {
      state = {
            username:  "",
            password : ""
      }
      AuthUser = ()=>{
            axios.post("/signin",this.state)
            .then(res=>{
                  console.log(res)
            })
            .catch(err=>console.log("error\n",err))
      }
      render() {
            return (
                  <div className="col-md-6 ml-auto mr-auto text-center mb-5">
                        <input onChange={(e)=>this.setState({username:e.target.value})} placeholder="Username"/>
                        <br />
                        <input onChange={(e)=>this.setState({password:e.target.value})} type="text" placeholder="Password"/>
                        <br/>
                        <br/>
                        <button onClick={this.AuthUser}>Login</button>
                  </div>
            )
      }
}
