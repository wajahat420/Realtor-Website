import Home from "./pages/home"
import React from 'react'
import "./css/bootstrap.css"
import { Route } from 'react-router-dom'
import AddProperty from "./pages/addProperty"
import Signin from "./pages/signin"
import Signup  from "./pages/signup"

export default function App() {
    return (
            <div>
                {/* <IndexRoute component = {AddProperty} /> */}
                {/* <Route path = "home" component = {Home} /> */}
                <Route  path = "/" component = {Home} />
                <Route path = "/addProperty" component = {AddProperty} />
                <Route path = "/signin" component = {Signin} />
                <Route path = "/signup" component = {Signup} />

            </div>
    )
}
