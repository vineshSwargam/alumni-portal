import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Welcome extends Component {

  render() {

    return (
      <section id="welcome">
        <img src={require("../img/vigil.jpeg")} alt="Bharat College Vigil" />
        <div id='greeting'>
          WELCOME TO
        </div>
        <div id="collegeName">
          {/* BCOE &nbspALUMNI &nbspPORTAL */}
          The Alumni Portal
        </div>
        <a href="./signup"><button href='#' class="btn-about">Sign Up<i class="far fa-arrow-alt-circle-right"></i></button></a>
      </section>
    )
  }
}

export default Welcome;