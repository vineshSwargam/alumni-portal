import React, { Component } from 'react';
import Welcome from './Welcome';
import About from './About';
import MissionAndVision from './MissionAndVision';

class Home extends Component{

  render() {
    
    return(
      <div>
        <Welcome />
        <About />
        <MissionAndVision />
      </div>
    )
  }
}

export default Home;