import React from 'react';

import loginAction from './actions/loginAction'
import {connect} from 'react-redux'

import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Breadcrumb from './components/dashboard/Breadcrumb/Breadcrumb'
import Footer from './components/dashboard/Footer/Footer'
import Home from './components/home/Home'
import ProductPage from './components/ProductPage/ProductPage'
import OrderPage from './components/OrderPage/OrderPage'
import './App.css';

class App extends React.Component {

  handleClick = (e) => {
    this.props.loginaction()
  }
  

  render(){
    return(
      <div>
        <Sidebar/>

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



// {/* <button className="btn btn-primary mt-10" onClick={this.handleClick}>
//    text
//  </button>
//  <h1>{this.props.keys}</h1> */}



// Home component :  <Home/>
