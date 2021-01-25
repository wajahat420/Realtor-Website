import React from 'react'
import "./css/main.css"
import "./css/daterangepicker.css"
import "./css/select2.min.css"
import {MyContext} from "../../context/context"
import axios from "axios"


export default class signup extends React.Component {  
    static contextType = MyContext

    constructor(){
        super() 
        this.count = [1,2,3,4,5,6,7,8,9,10]
        this.stateCopy = this.state
  }

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
    render(){
    console.log(this.state)
    
    return (
        <div class="page-wrapper bg-blue p-t-100 p-b-100 font-robo">
        <div class="wrapper wrapper--w680">
            <div class="card card-1">
                <div class="card-heading"></div>
                <div class="card-body">
                    <h2 class="title">Registration Info</h2>
                    <form method="POST">
                        <div class="input-group">
                            <input onChange={(e)=>this.setState({username:e.target.value})} class="input--style-1" type="text" placeholder="Username" name="name"/>
                        </div>
                        <div class="input-group">
                            <input onChange={(e)=>this.setState({email:e.target.value})} class="input--style-1" type="text" placeholder="Email" name="name"/>
                        </div>
                        <div class="input-group">
                            <input onChange={(e)=>this.setState({password:e.target.value})} class="input--style-1" type="text" placeholder="Password" name="name"/>
                        </div>
                        <div class="input-group">
                            <input onChange={(e)=>this.setState({mobileNo:e.target.value})} class="input--style-1" type="text" placeholder="Phone Number" name="name"/>
                        </div>
                        <div class="input-group">
                            <input onChange={(e)=>this.setState({address:e.target.value})} class="input--style-1" type="text" placeholder="Address" name="name"/>
                        </div>
                        
                        <div class="p-t-20">
                            <button onClick={this.uploadData} class="btn btn--radius btn--green" type="submit">Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>


    )}
}
