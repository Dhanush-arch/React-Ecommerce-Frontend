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
      <div className="row">
        <div className="col-md-2 pr-0 pl-0">
          <Sidebar />
        </div>
        <div className="col-md-10 pr-0 pl-0">
          <div className="row">
            <div className="col-md-12">
              <Navbar/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Breadcrumb />
            </div>
          </div>
            {/* <ProductPage/> */}
            {/* <Home/> */}
          <OrderPage />
            <div className="row">
              <div className="col-md-12">
                <Footer />
              </div>
            </div>
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



// {/* <button className="btn btn-primary mt-10" onClick={this.handleClick}>
//    text
//  </button>
//  <h1>{this.props.keys}</h1> */}



// Home component :  <Home/>
