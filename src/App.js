import React from 'react';
import './App.css';
import loginAction from './actions/loginAction'
import {connect} from 'react-redux'

import Navbar from './components/navbar/Navbar'
import Sidebar from './components/dashboard/sidebar/Sidebar'
import Dashboard from './components/dashboard/Dashboard'

class App extends React.Component {

  handleClick = (e) => {
    this.props.loginaction()
  }
  render(){
    return(
      <div className='App'>
      <Navbar />
      <div className="row">
        <Sidebar className='col'/>
        <Dashboard className='col'/>
        {/* <button className="btn btn-primary mt-10" onClick={this.handleClick}>
          text
        </button>
        <h1>{this.props.keys}</h1> */}
        </div>
      </div>
  )
}
}

const mapStateTorProps = (state) =>{
  return {
    keys : state.key,
    islogedin : state.islogedin,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    loginaction: () => {dispatch(loginAction())}
  }
}
export default connect(mapStateTorProps,mapDispatchToProps)(App);
