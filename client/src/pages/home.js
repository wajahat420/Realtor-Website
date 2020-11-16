import React from 'react'
import Header from "../components/header"
import Body from "../components/body"
import Search from "../components/search"
import HomeDiv from "../components/homeDIV"

export default function home() {
      return (
            <div>
                  <Header/>
                  <Body/>
                  <Search/>
                  <div className="row m-auto">
                        
                              <HomeDiv/>
                              <HomeDiv/>
                              <HomeDiv/>
                              <HomeDiv/>
                              <HomeDiv/>
           
                  </div>
            </div>
      )
}
