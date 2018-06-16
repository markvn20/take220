import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';



class App extends Component {
  render() {
    return (
      <div className="App">
    	<BrowserRouter>
    		<div>
	    		<Header/>
	    		<Switch>
		      		<Route path="/" component={Home} exact />
		      		<Route path="/about" component={About} />
		      		<Route path="/services" component={Services} />
		      		<Route path="/contact" component={Contact} />
	      		</Switch>
      		</div>
      	</BrowserRouter>
        <Footer/>
      </div>
    );
  }
}

export default App;
