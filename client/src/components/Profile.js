import React, { Component } from 'react';
import ProfileBanner from './ProfileBanner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faIdCard, faMapMarkerAlt, faHome, faBirthdayCake, faEnvelope, faPhoneAlt, faGraduationCap, faMars } from '@fortawesome/free-solid-svg-icons'
// 
class Profile extends Component {

  render() {

    return (
      <div>
        <ProfileBanner />
        <div id="profileInformation">
          <div className="jobBox profileJobBox">
            <div className="jobTitle">
              <FontAwesomeIcon size={8} icon={faBriefcase} style={{ marginRight: '0.4rem', fontSize: 15 }} /> 
              <div>Work Experience</div>
            </div>
            <div className="jobPadding">
              {[1, 1, 1, 1].map(e => (
                <div className="workBox">
                  <div className="profileJobBoxHeading">
                    Sr Software Engineer
                </div>
                  <div className="workCompany">
                    Microsoft Systems
                </div>
                  <div className="profileJobBoxContent">
                    2012-2016
                </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ flex: '37%'}}>
            <div className="jobBox" id="profileJobBoxTwo">
              <div className="jobTitle">
                <FontAwesomeIcon icon={faGraduationCap} style={{ marginRight: '0.4rem', fontSize: 14 }} /> 
                <div>Education</div>
              </div>
              <div className="jobPadding">
                <div className="profileJobBoxHeading">
                  Bharat College Of Engineering
              </div>
                <div className="workBoxContent">
                  2012-2016
              </div>
              </div>
            </div>
            <div className="jobBox" id="profileJobBoxTwo">
              <div className="jobTitle">
                <FontAwesomeIcon size={12} icon={faBriefcase} style={{ marginRight: '0.4rem', fontSize: 14}}/>
                <div>Basic Information</div>
              </div>
              <div className="jobPadding">
                <div className="workBoxContent">
                  <FontAwesomeIcon size={12} icon={faHome} style={{ marginRight: '0.4rem', fontSize: 14 }} /> 
                  <div>Mumbai, IN</div>
                </div>
                <div className="workBoxContent">
                  <FontAwesomeIcon size={12} icon={faBirthdayCake} style={{ marginRight: '0.4rem', fontSize: 14 }} />
                  <div>Nov 20, 1997</div>
                </div>
                <div className="workBoxContent">
                  <FontAwesomeIcon size={12} icon={faMars} style={{ marginRight: '0.4rem', fontSize: 14 }} />
                  <div>Male</div>
                </div>
                <div className="workBoxContent">
                  <div>Single</div>
                </div>
              </div>
            </div>
            <div className="jobBox" id="profileJobBoxTwo">
              <div className="jobTitle">
                <FontAwesomeIcon size={12} icon={faIdCard} style={{ marginRight: '0.4rem'}}/>
                <div>Contact</div>
              </div>
              <div className="jobPadding">
                <div className="profileJobBoxContent">
                  <FontAwesomeIcon size={12} icon={faEnvelope} style={{ marginRight: '0.4rem' }} />
                  <div>vineshswargam1729@gmail.com</div>
                </div>
                <div className="workBoxContent">
                  <FontAwesomeIcon size={12} icon={faPhoneAlt} style={{ marginRight: '0.4rem' }} />
                  <div>+91 9345890412</div>
                </div>
              </div>
            </div>
          </div>
          <div className="jobBox profileJobBox" >
            <div className="jobTitle">
              <FontAwesomeIcon size={12} icon={faBriefcase} style={{ marginRight: '0.4rem'}}/>
              <div>Skills</div>
            </div>
            <div className="jobPadding" >
              <div className="workSkillBox">
                <div className="workSkill">Node JS</div>
                <div className="workSkill">MongoDB</div>
                <div className="workSkill">Electron</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;