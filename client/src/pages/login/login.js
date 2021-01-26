import React from 'react'
import "./css/style.css"
import axios from "axios"

export default function login() {
    const AuthUser = ()=>{
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
    return (
        <>
            <div class="body"></div>
            <div class="grad"></div>
            <div class="header">
                <div>GET<span>Inside</span></div>
            </div>
            <br/>
            <div class="login">
                    <input type="text" placeholder="username" name="user"/><br/>
                    <input type="password" placeholder="password" name="password"/><br/>
                    <input type="button" value="Login"/>
            </div>
        </>
    )
}
