import React, {Component} from 'react';
import './Navbar.css'

import Signup from './Signup'
import Signin from './Signin'
import Userlogo from './Userlogo'
import Cartlogo from './Cartlogo'

class Navbar extends Component {
	render() {
		return (
				<nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
				<span className="navbar-toggler-icon mr-4"></span>
				<a className="navbar-brand " href="/home"><h4 className="mt-1 pt-1">Amazon</h4></a>

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
