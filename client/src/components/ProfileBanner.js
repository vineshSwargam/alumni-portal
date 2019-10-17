import React, { Component } from 'react';

class ProfileBanner extends Component {

  render() {

    return (
      <div id="profile">
        <div id="profileContainer">
          <div id="profileAvatar" style={{ backgroundImage: `url(${require('../img/girl.jpg')})` }} />
          <div id="profileDetails">
            <div id="profileName">
              Graven Whismas
            </div>
            <div id="profileClass">
              Class of 2018
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileBanner;