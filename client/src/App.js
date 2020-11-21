import Home from "./pages/home"
import React from 'react'
import "./css/bootstrap.css"
import { Route } from 'react-router-dom'
import AddProperty from "./pages/addProperty"

export default function App() {
    return (
            <div>
                {/* <IndexRoute component = {AddProperty} /> */}
                {/* <Route path = "home" component = {Home} /> */}
                <Route path = "/" component = {AddProperty} />

            </div>
    )
}
