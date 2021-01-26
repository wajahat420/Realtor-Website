import React from 'react'
import "./css/bootstrap.css"
import { Route } from 'react-router-dom'
// import AddProperty from "./pages/addProperty"
// import Signin from "./pages/signin"
// import Signup  from "./pages/signup"
import Home from "./pages/home"
import Signin from "./pages/login/login"
import AddProperty from "./pages/addProperty/addProperty"
import Signup from "./pages/signup/signup"
import Header from "./components/header"
import HomeDetail from "./pages/homeDetail/homeDetail"

export default function App() {
    return (
            <div>
                {/* <IndexRoute component = {Home} /> */}
                {/* <Route path = "home" component = {Home} /> */}
                <Route  path = "/" component = {Header} />   
                <Route exact path = "/" component = {Home} />   
                <Route exact path = "/addProperty" component = {AddProperty} />
                <Route path = "/signin" component = {Signin} />
                <Route path = "/signup" component = {Signup} />
                <Route path = "/homeDetail" component = {HomeDetail} />

            </div>
    )
}
