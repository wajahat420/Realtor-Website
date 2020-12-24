import axios from 'axios'
import React, { Component } from 'react'
import { MyContext } from '../context/context'

export default class signin extends Component {
      static contextType = MyContext

      state = {
            username:  "",
            password : ""
      }
      AuthUser = ()=>{
            axios.post("/signin",this.state)
            .then(res=>{
                  console.log(res.data[0])
                  if(res.data !== "fail"){
                        // console.log("context",this.context)
                        this.context.setLoginUser(res.data[0])
                        this.props.history.push("/")
                  }
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
