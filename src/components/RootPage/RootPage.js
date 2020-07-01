import React from 'react'
import Img from '../../assets/sidebarpic.jpg'
import Signin from '../navbar/Signin'
import Signup from '../navbar/Signup'
import Userlogo from '../navbar/Userlogo'
import Cartlogo from '../navbar/Cartlogo'
import Breadcrumb from '../dashboard/Breadcrumb/Breadcrumb'
import Searchbar from '../dashboard/Searchbar/Searchbar'
import Footer from '../dashboard/Footer/Footer'
// Replacables
import Home from '../home/Home'
import ProductPage from '../ProductPage/ProductPage'
import OrderPage from '../OrderPage/OrderPage'

import './RootPage.css'


    function handlecloseclick(e){
      document.getElementById("sidebar-id").classList.remove("display-sidebar")
      document.getElementById('close-btn').classList.remove("display-close-btn")
      document.getElementById("content-id").classList.remove("move-content")
    }

    function handleopenClick(e){
          console.log(e)
          document.getElementById("sidebar-id").classList.add("display-sidebar");
          document.getElementById('close-btn').classList.add("display-close-btn")
          document.getElementById("content-id").classList.add("move-content")
        }



function RootPage() {
    return (
      <div className="main row">
        <div className="sidebar " id="sidebar-id">
          <ul>
            <li>
              <button className="btn btn-info close-btn pt-4" id="close-btn" onClick={handlecloseclick}>
                <i class="fa fa-times" aria-hidden="true"></i>
              </button>
            </li>
            <li className="link pt-5 mt-4"><a href="#" className="">Home</a>
            </li>
            <li className="link"><a href="#" className="">Product</a></li>
            <li className="link"><a href="#" className="">Order</a></li>
            <li className="link"><a href="#" className="">Helpline</a></li>
          </ul>
        </div>

      <div className="content" id="content-id">
        <div className="row" >
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top w-100  cst-nav col-12 py-0" >
          <div className="cst-left">
            <button className="btn btn-info open-btn" id="op-btn" onClick={handleopenClick}>
              <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
            <a className="navbar-brand " href="/home"><h4 className="mt-1 pt-1 pl-2">Amazon</h4></a>
          </div>
          <div className="cst-nav-end cst-right pr-3 py-2">

            <Signin className="nav-items"/>
            <Signup className="nav-items"/>
            <Userlogo className="nav-items" />
            <Cartlogo className="nav-items" />
              <br/>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-6">
            <Breadcrumb/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <Searchbar />
          </div>
        </div>
          <hr/>
        <Home/>
        {/* <ProductPage/> */}
        {/* <OrderPage/> */}
        <Footer />
      </div>
    </div>
    )
}

export default RootPage



// <div className="sidebar">
//     <ul className="menu-items pl-5">
//       <li className="py-4 pr-4"><a href="/home">Home</a></li>
//       <li className="py-4 pr-4"><a href="/home">Products</a></li>
//       <li className="py-4 pr-4"><a href="/orders">Your Orders</a></li>
//       <li className="py-4 pr-4"><a href="/cc">Customer Care</a></li>
//     </ul>
// </div>
