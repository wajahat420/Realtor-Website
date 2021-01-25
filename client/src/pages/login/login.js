import React from 'react'
import "./css/style.css"

export default function login() {
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
