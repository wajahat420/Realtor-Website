import "./css/style.css"
import axios from "axios"
import  { MyContext } from '../../context/context'

import React, { Component } from 'react'

export default class login extends Component {
    static contextType = MyContext

    state = {
          username:  "",
          password : ""
    }

    AuthUser = ()=>{
        const signupUser = this.context.signupUser
        const {username, password} = this.state
        if ((username === signupUser.username || username ===  signupUser.email || username === signupUser.password) && password === signupUser.password ){
            this.props.history.push("/")
        }else{
            alert("Inavlid User")
        }
        // axios.post("/signin",this.state)
        // .then(res=>{
        //       console.log(res.data[0])
        //       if(res.data !== "fail"){
        //             // console.log("context",this.context)
        //             this.context.setLoginUser(res.data[0])
        //             this.props.history.push("/")
        //       }
        // })
        // .catch(err=>console.log("error\n",err))
    }
    render() {
        return (
            <>
                <div class="body"></div>
                <div class="grad"></div>
                <div class="header">
                    <div>GET<span>Inside</span></div>
                </div>
                <br/>
                <div class="login">
                        <input onChange={(e)=>this.setState({username:e.target.value})} type="text" placeholder="username / email / mobile no." name="user"/><br/>
                        <input onChange={(e)=>this.setState({password:e.target.value})}  type="password" placeholder="password" name="password"/><br/>
                        <input onClick={this.AuthUser} type="button" value="Login"/>
                </div>
            </>
        )
}
}


