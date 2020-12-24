import React, { Component } from 'react'

export const MyContext = React.createContext()

export default class context extends Component {
      state = {
            loginUser : {}
      }
      setLoginUser = (loginUser)=>{
            this.setState({loginUser})
      }
      render() {
            return (
                  <MyContext.Provider value={{...this.state, setLoginUser : this.setLoginUser}}>
                        {this.props.children}
                  </MyContext.Provider>
            )
      }
}
