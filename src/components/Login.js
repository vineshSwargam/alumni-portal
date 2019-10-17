import React, { Component } from 'react';

class Login extends Component {

  render() {

    return (
      <section id="signup">
        <div id="signupBox">
          <div id="header">
            Login
          </div>
          <input type="text" name="usernameOrEmail" placeholder="Username or Email" />
          <input type="password" name="password" placeholder="Password" />
          <div id="loginBoxFooter">
            <button id="btnLogin">Login</button>
            <div id="forgotPassword">Forgot Password?</div>
          </div>
        </div>
      </section>
    )
  }
}

export default Login;