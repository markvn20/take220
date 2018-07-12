import React, { Component } from 'react';

import Section1 from './Home/Section1';
import Section2 from './Home/Section2';


class Home extends Component {
  render() {
    return (
      <div>
        <Section1 />
        <Section2 />

      </div>
    );
  }
}

export default Home;
