import React, { Component } from 'react';

//Import slider images
import image from './slider-image/image.jpg';
import image2 from './slider-image/image2.jpg';
import image3 from './slider-image/image3.jpg';
import image4 from './slider-image/image4.jpg';

//Count and percentage start count
var count = 0;
var amount = 0

class App extends Component {

  //Set state and condition for class
  state = {
    transform: 'translate(0%)',
  }

  //Slide slider to the left
  left = () => {
    count-=1
    amount+=100
    if(count < -4) {
      count = 0;
      amount = 0
    }
   
    this.setState({
      transform: `translate(${amount}%)`,
    })
  }

  //Slide slider to the right
  right = () => {
    count+=1
    amount-=100
    if(count > 3) {
      count = 0;
      amount = 0
    }
    
    this.setState({
      transform: `translate(${amount}%)`,
    })
  }

  // Need tylers help to hide left arrow if count is zero
  test() {
    if(count === 0) {
      return false;
    }
    else {
      return true;
    }
  }

  render() {
    var z  = this.test();
    console.log(this.state.hideArrow)
    return (
      <div className="App">
      <div className="sliderMain">
          <h1 className={`fa fa-chevron-circle-left leftArrow arrow ${z ? 'arrowActive': 'arrowInactive'}`} onClick={this.left}></h1>
          <h1 className={`fa fa-chevron-circle-right rightArrow arrow `}  onClick={this.right}></h1>
          <div className="sliderContainer"  style={this.state}>
            <div className="slider1 slider"><img src={image} /></div>
            <div className="slider2 slider"><img src={image2} /></div>
            <div className="slider3 slider"><img src={image3} /></div>
            <div className="slider4 slider"><img src={image4} /></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
