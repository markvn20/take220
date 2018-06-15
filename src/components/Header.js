import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

class Header extends Component {
	render() {
		return(
			<div>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/About">About</NavLink>
				<NavLink to="/Contact">Contact</NavLink>
			</div>
		)
	}
}

export default Header