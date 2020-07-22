import React,{useState} from 'react'
import Img from '../../assets/sidebarpic(1).jpg'
import Signin from '../navbar/Signin'
import Signup from '../navbar/Signup'
import SigninModal from '../navbar/SigninModal'
import Userlogo from '../navbar/Userlogo'
import Cartlogo from '../navbar/Cartlogo'
import Breadcrumb from '../dashboard/Breadcrumb/Breadcrumb'
import Searchbar from '../dashboard/Searchbar/Searchbar'
import Footer from '../dashboard/Footer/Footer'
// Replacables
import Home from '../home/Home'
import ProductPage from '../ProductPage/ProductPage'
import OrderPage from '../OrderPage/OrderPage'

//React-router setup
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {useSelector, connect} from 'react-redux'
import loginAction from '../../actions/loginAction';
import userIdAction from '../../actions/userIdAction'
import getOrdersNoAction from '../../actions/getOrdersNoAction'
import ProtectedRoute from '../auth/ProtectedRoute'
import './RootPage.css'

class RootPage extends React.Component {

  handlecloseclick = (e) => {
    document.getElementById("sidebar-id").classList.remove("display-sidebar")
    document.getElementById('close-btn').classList.remove("display-close-btn")
    document.getElementById("content-id").classList.remove("move-content")
  }

  handleopenClick = (e) => {
        console.log(e)
        document.getElementById("sidebar-id").classList.add("display-sidebar");
        document.getElementById('close-btn').classList.add("display-close-btn")
        document.getElementById("content-id").classList.add("move-content")
      }

  render(){
    console.log("render")
    console.log(this.props)
    if(this.props.isloggedin){
      this.props.useridaction(this.props.keys)
      if(this.props.userid){
        if(this.props.ordersLength === null){
          this.props.getOrderslength(this.props.userid, this.props.keys)
        }
      }
    }
    return (
    <Router>
      <div className="main row">
        <div className="sidebar " id="sidebar-id">
          <ul>
            <li>
              <button className="btn btn-info close-btn pt-4" id="close-btn" onClick={this.handlecloseclick}>
                <i className="fa fa-times" aria-hidden="true"></i>
              </button>
            </li>
            <Link to="/">
            <li className="link pt-5 mt-4"><a>Home</a></li>
            </Link>
            <Link to="/"><li className="link"><a href="#">Product</a></li></Link>
            <Link to="/orders"><li className="link"><a href="#" >Order</a></li></Link>
            <li className="link"><a href="#">Helpline</a></li>
          </ul>
        </div>

      <div className="content" id="content-id">
        <div className="row" >
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top w-100  cst-nav col-12 py-0" >
          <div className="cst-left">
            <button className="btn btn-info open-btn" id="op-btn" onClick={this.handleopenClick}>
              <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
            <a className="navbar-brand " href="/home"><h4 className="mt-1 pt-1 pl-2">Amazon</h4></a>
          </div>
          <div className="cst-nav-end cst-right pr-3 py-2" id="logincred">
            {(this.props.isloggedin)?<Userlogo className="nav-items" />:<Signin className="nav-items"/>}
            {(this.props.isloggedin)?<Cartlogo className="nav-items" />:<Signup className="nav-items"/>}
              <br/>
            </div>
          </nav>
          <SigninModal/>
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
          <Switch>
            <Route path="/" exact component={Home}/>
            <ProtectedRoute path="/orders" component={OrderPage}/>
            <Route path="/Product/:id" component={ProductPage}/>
          </Switch>
        <Footer />
      </div>
    </div>
  </Router>
    )
}
}


const mapStateToProps = (state) => {
	return {
		keys: state.loginReducer.key,
		isloggedin: state.loginReducer.islogedin,
    userid : state.userIdReducer.userId,
    ordersLength : state.getOrdersNoReducer.orders_length,
	}
}

const mapDispatchToProps = (dispatch) =>{
  return{
    loginaction: (email,password) => {dispatch(loginAction(email, password))},
    useridaction : (key) => {dispatch(userIdAction(key))},
    getOrderslength : (id, key) => {dispatch(getOrdersNoAction(id, key))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootPage);
