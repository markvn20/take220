import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

//Router Components
import Home from './Components/Home';
import About from './Components/About';
import Investment from './Components/Investment';
import Gallery from './Components/Gallery';

import  Header from './Components/Header';
import  Footer from './Components/Footer';


import './App.css';


const height = {
  height: '100%',
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div style={height}>
            <Header />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/About" component={About} />
              <Route path="/Investment" component={Investment} />
              <Route path="/Gallery" component={Gallery} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
