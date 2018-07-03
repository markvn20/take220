import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'


class Navigation extends Component {
  render(props) {
    const styleNav = {
      width: '50%',
      float: 'left',
      background: '#777',
      boxSizing: 'border-box',
      padding: '30px',
    }
    return (
      <div style={this.props.style}>
      	<NavLink style={styleNav} to="/">Home</NavLink>
      	<NavLink style={styleNav} to="/Bag">Bag</NavLink>
      	<NavLink style={styleNav} to="/Pokedex">Pokedex</NavLink>
      	<NavLink style={styleNav} to="/Pokemon">Pokemon</NavLink>
      </div>
    )
  }
}

export default Navigation;
