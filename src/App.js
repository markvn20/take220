import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
              <div>
               <Header/>
              <Switch>
               
                <Route path="/" component={Home} exact />
                <Route path="/About" component={About}/>
                <Route path="/Contact" component={Contact} exact />
                <Route path="/About" component={About}/>
                 </Switch>
              </div>
          </BrowserRouter>
        <Footer/>
      </div>
    );
  }
}

export default App;
