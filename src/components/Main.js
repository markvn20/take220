import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Bottom from './Bottom';
import Navigation from './Navigation';
import Home from './Home/Home';
import Bag from './Bag/Bag';
import Pokedex from './Pokedex/Pokedex';
import Pokemon from './Pokemon/Pokemon';

class Main extends Component {

  render() {
  	const styleNavigation = {
      overflow: 'auto',
      position: 'absolute',
      left: '0px',
      height: '100%',
      width: '30%',
      background: '#333',
    }
    return (
      <div style={this.props.styles}>
        main
      </div>
    )
  }
}

export default Main;
