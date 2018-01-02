

import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class HomePage extends Component {

  render() {
    return (
      <div className="jumbo">
        <h1>React Learning</h1>
        <p>Testing testing</p>
        <Link to="about"/>
      </div>
    );
  }
}

export default HomePage;
