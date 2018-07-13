import React, { Component } from 'react';

import Section1 from './Home/Section1';
import Section2 from './Home/Section2';

const height = {
  height: '100%',
}

class Home extends Component {
  render() {
    return (
      <div style={height}>
        <Section1 />
        <Section2 />

      </div>
    );
  }
}

export default Home;
