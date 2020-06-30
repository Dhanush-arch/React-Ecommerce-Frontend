import React, {Component} from 'react';
import './Navbar.css'

import Signup from './Signup'
import Signin from './Signin'
import Userlogo from './Userlogo'
import Cartlogo from './Cartlogo'

class Navbar extends Component {
	render() {
		return (
				<nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top w-100 ">
				<div className="cst-left">
				
					<a className="navbar-brand " href="/home"><h4 className="mt-1 pt-1 cst-left">Amazon</h4></a>
				</div>
					<div className="cst-nav cst-right pr-3 py-2">

							<Signin className="nav-items"/>
							<Signup className="nav-items"/>
							<Userlogo className="nav-items" />
							<Cartlogo className="nav-items" />
							<br/>
					</div>
				</nav>
			)
		}
	}

export default Navbar;
