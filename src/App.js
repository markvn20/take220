import React, { Component } from 'react';
import image from './image.jpeg';
import image2 from './image2.jpeg';


var count = 100;
var amount = 100
class App extends Component {
  state = {
    transform: 'translate(0%)',

  }

  left = () => {
    if(count > 2) {
      count = 0;
      amount = 0
    }
    count+=1
    amount-=100
    console.log(count)
    this.setState({
      transform: `translate(${amount}%)`,
    })
  }

  right = () => {
    if(count > 5) {
      count = 0;
    }
    count+=1
    amount+=100
    console.log(count)
    this.setState({
      transform: `translate(${amount}%)`,
    })
  }

  render() {
    return (
      <div className="App">
        <h1 onClick={this.left}>LEFT</h1>
        <h1 onClick={this.right}>right</h1>
        <div className="sliderContainer"  style={this.state}>
          <div className="slider1 slider"><img src={image} /></div>
          <div className="slider2 slider"><img src={image2} /></div>
          <div className="slider3 slider"><img src={image} /></div>
          <div className="slider4 slider"><img src={image2} /></div>
        </div>
      </div>
    );
  }
}

export default App;
