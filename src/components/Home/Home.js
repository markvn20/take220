import React, { Component } from 'react';

class Home extends Component {
  render(props) {
 	const styleMain = {
    position: 'absolute',
    top: '0px',
    right: '0px',
    height: '100%',
    width: '70%',
    background: '#345',
  }
    return (
      <div style={styleMain}>
      	Home
        {this.props.home}
      </div>
    )
  }
}

export default Home;
