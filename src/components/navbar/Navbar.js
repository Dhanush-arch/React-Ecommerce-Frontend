import React, {Component} from 'react';
import './Navbar.css'

import Signup from './Signup'
import Signin from './Signin'
import Userlogo from './Userlogo'
import Cartlogo from './Cartlogo'

class Navbar extends Component {
	render() {
		return (
				<nav className="navbar navbar-expand-lg navbar-light bg-white">
				<span className="navbar-toggler-icon mr-4"></span>
				<a className="navbar-brand " href="#"><h4 className="mt-1 pt-1">Amazon</h4></a>

					<div className="cst-nav cst-right pr-3 py-2">
							<form className="form-inline my-2 my-lg-0">
					      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
					      <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
					    </form>
							<Signin className="nav-items"/>
							<Signup className="nav-items"/>
							<Userlogo className="nav-items" />
							<Cartlogo className="nav-items" />
					</div>
				</nav>
			)
		}
	}

export default Navbar;
