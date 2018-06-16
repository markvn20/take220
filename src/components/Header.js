import React, { Component } from 'react';
import Navigation from './header/Navigation'
import Logo from './header/Logo'


class Header extends Component {
  render() {
    return (
      <header>
        <Logo />
        <Navigation />
      </header>
    );
  }
}

export default Header;
