import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
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
      Pokemon
      </div>
    )
  }
}

export default Pokemon;
