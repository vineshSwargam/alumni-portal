import React, { Component } from 'react';

const list = [{
  name: 'Graven Whismas',
  organization: 'DirectI Research',
  qualification: 'Computer Science Engineering',
  classOf: 2017,
}, {
  name: 'Graven Whismas',
  organization: 'DirectI Research',
  qualification: 'Computer Science Engineering',
  classOf: 2017,
}, {
  name: 'Graven Whismas',
  organization: 'DirectI Research',
  qualification: 'Computer Science Engineering',
  classOf: 2017,
}, {
  name: 'Graven Whismas',
  organization: 'DirectI Research',
  qualification: 'Computer Science Engineering',
  classOf: 2017,
}, {
  name: 'Graven Whismas',
  organization: 'DirectI Research',
  qualification: 'Computer Science Engineering',
  classOf: 2017,
}, {
  name: 'Graven Whismas',
  organization: 'DirectI Research',
  qualification: 'Computer Science Engineering',
  classOf: 2017,
}, {
  name: 'Graven Whismas',
  organization: 'DirectI Research',
  qualification: 'Computer Science Engineering',
  classOf: 2017,
}];

class Recruiters extends Component{

  render() {
    
    return(
      <>
        <div id="recruiterBanner">
          <div id="bannerTitle">Join Our Alumni Recruitment Programme</div>
          <button id="recruiterBannerButton" className="actionButton">Enroll Your Organization</button>
        </div>
        <div id="recruiters">
          <div id="recruitersTitle">
            Alumni Recruiters
          </div>
          <div id="recruitersContainer">
            {list.map(rec => (
              <div className="recruiterBox">
                <img className="recruiterAvatar" src={require('../img/vision.jpg')} />
                <div className="recruiterDetails">
                  <div className="recruiterName">{rec.name}</div>
                  <div>{rec.organization}</div>
                  <div>{rec.qualification}</div>
                  <div>Class of {rec.classOf}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }
}

export default Recruiters;