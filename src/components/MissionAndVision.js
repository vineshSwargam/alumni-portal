import React, { Component } from 'react';

class MissionAndVision extends Component {

  render() {

    return (
      <section class="services">
        <div class="services-content">
          <h1>Our Mission</h1>
          <p>
            To become one of the most effective educational institute which creates positive change agents for society
          </p>
        </div>
        <div class="services-card">
          <img src={require("../img/mission.jpg")} alt="Mission" />
            <div class="services-card-content">
              <div>
                To Impart state of the art technical education, meeting the current needs of emerging India and world at large.
              </div>
              <div>
                To become a centre of meaningful and relevant research.
              </div>
              <div>
                To create a culture of Innovation and out of the box thinking.
              </div>
              <div>
                To impart practical education with the help of industry partnership.
              </div>
              <div>
                To cultivate an environment promoting values and character development in students.
              </div>
            </div>
        </div>
        <div class="services-content">
          <h1>Our Vision</h1>
          {/* <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, id.
          </p> */}
        </div>
        <div class="services-card">
          <img src={require("../img/vision.jpg")} alt="Vision" />
          <div class="services-card-content">
            <p>
              To become a premier institute in greater Mumbai, India and the world, which will impart quality education to every
              student, moulding them to become perfect instruments and catalysts of progressive change for the organization and the
              society they go into.
            </p>
          </div>
        </div>
      </section>
    )
  }
}
      
export default MissionAndVision;