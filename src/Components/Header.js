import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


class Header extends Component {
  render() {
    return (
    	<nav>
    		<NavLink to="/">Home</NavLink>
      	<NavLink to="/About">About Us</NavLink>
      	<NavLink to="/Investment">Investment</NavLink>
      	<NavLink to="/Gallery">Gallery</NavLink>
    	</nav>
    );
  }
}

export default Header;
