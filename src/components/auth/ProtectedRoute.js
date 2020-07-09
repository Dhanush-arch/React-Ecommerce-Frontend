import React from 'react'
import {connect} from 'react-redux'
import {Route, Redirect } from 'react-router-dom'

function ProtectedRoute({component: Component, ...rest}) {
    return (
        <Route {...rest} render={
          (props) =>{
            if(rest.isloggedin){
            return  <Component {...props}/>
          }
          else{
            return <Redirect to={
              {
                pathname:"/"
              }
            }/>
          }
          }
        }/>
    )
}

const mapStateToProps = (state) =>{
  return {
    isloggedin : state.loginReducer.islogedin
  }
}
export default connect(mapStateToProps)(ProtectedRoute)
