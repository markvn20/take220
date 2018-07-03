import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Navigation from './components/Navigation';
import Main from './components/Main';
import Bottom from './components/Bottom';


import Home from './components/Home/Home';
import Bag from './components/Bag/Bag';
import Pokedex from './components/Pokedex/Pokedex';
import Pokemon from './components/Pokemon/Pokemon';


class App extends Component {
  render() {
    const styleNavigation = {
      position: 'absolute',
      left: '0px',
      height: '100%',
      width: '30%',
      background: '#333',
    }

    const styleMain = {
      position: 'absolute',
      top: '0px',
      right: '0px',
      height: '100%',
      width: '70%',
      background: '#345',
    }

    const stylebottom = {
      display: 'none',
      position: 'absolute',
      bottom: '0px',
      right: '0px',
      height: '30%',
      width: '70%',
      background: '#777',
    }
   
    return (
      <div className="App">
        <BrowserRouter>
        <div>
          <Navigation style={styleNavigation}/>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/Pokedex" component={Pokedex} />
            <Route path="/Pokemon" component={Pokemon} />
            <Route path="/Bag" component={Bag} />
          </Switch>
          <Bottom styles={stylebottom} />
        </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;


