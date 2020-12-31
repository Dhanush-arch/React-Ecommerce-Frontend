import React from 'react';

import Navbar from './components/navbar/Navbar'
import RootPage from './components/RootPage/RootPage'
import Breadcrumb from './components/dashboard/Breadcrumb/Breadcrumb'
import Footer from './components/dashboard/Footer/Footer'
import Home from './components/home/Home'
import ProductPage from './components/ProductPage/ProductPage'
import OrderPage from './components/OrderPage/OrderPage'
import './App.css';

class App extends React.Component {

  render(){
    return(
      <div>
        <RootPage/>
      </div>
  )
}
}

export default App;



// {/* <button className="btn btn-primary mt-10" onClick={this.handleClick}>
//    text
//  </button>
//  <h1>{this.props.keys}</h1> */}



// Home component :  <Home/>
