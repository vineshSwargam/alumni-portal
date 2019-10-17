import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {
  componentDidMount(){
    navbarAnimation();
  }
  render() {
    return (
      <nav id="floatingNav" className="navbar">
        <a href="/">
          <div className="navheader">
            <img src={require("../img/vigil.jpeg")} alt="" />
            <div id="company">
              BCOE
            </div>
          </div>
        </a>
        <div className="navmenu">
          <div className="navitem"></div>
          <a href="/recruiters" className="navitem">Recruiters</a>
          {this.props.location.pathname.slice(1, 5) === 'jobs' ? (
            <div id="sort">
              <select name="eventsFilter">
                <option value="all">All Jobs</option>
                <option value="past">Applied Jobs</option>
                <option value="future">Posted by me</option>
              </select>
            </div>) :
            (<a href="/jobs" className="navitem"> Jobs </a>)
          }
          {this.props.location.pathname.slice(1, 7) === 'events' ? (
            <div id="sort">
              <select name="eventsFilter">
                <option value="all">All Events</option>
                <option value="past">Past Events</option>
                <option value="future">Future Events</option>
              </select>
            </div>) :
            (<a className="navitem" href="/events">Events</a>)
          }
          <a href="/contact" className="navitem">Contact</a>
          <a className="navitem" href="/profile">Profile</a>
          <a id="login" className="navitem" href="/login">Login</a>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar);

const navbarAnimation = () => {
  document.addEventListener('DOMContentLoaded', function() {
  window.onscroll = function () { myFunction() };

  function myFunction() {
    let el2 = document.getElementById('floatingNav');

    if (document.documentElement.scrollTop > window.innerHeight/7) {
      el2.style.transform = "translateY(-20px)"
      el2.style.width = "100%"
      el2.style.border = "0.5px solid rgba(246, 246, 246, 0)";
      el2.style.background = "rgba(20, 20, 20, 1)";
    } else {
      el2.style.width = "95%"
      el2.style.border = "0.5px solid rgba(246, 246, 246, 0.2)";
      el2.style.transform = "translateY(20px)"
      el2.style.background = "rgba(20, 20, 20, 0.2)";
    }
  }
 });
}