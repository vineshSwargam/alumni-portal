import React, { Component } from 'react';

class Signup extends Component {

  render() {

    return (
      <section id="signup">
        <div id="signupBox">
          <div id="header">
            Sign Up
          </div>
          <input type="text" name="email" placeholder="Email Id" />
          <input type="text" name="username" placeholder="Username"/>
          <input type="password" name="password" placeholder="Password" />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" />
          <button id="btnSignup">Sign Up</button>
        </div>
      </section>
    )
  }
}

export default Signup;