import React, { Component } from 'react';

class Contact extends Component{

  componentDidMount() {
    this.initialiseMap();
  }
  
  initialiseMap = () => {
    // let mapOptions = {
    //   zoom: 12,
    //   center: new google.maps.LatLng(this.props.Lat, this.props.Lng)
    // };
    // let mapElement = document.getElementById("map");
    // let map = new google.maps.Map(mapElement, mapOptions);
  }

  render() {
    
    return(
      <div id="contact">
        <div id="contactBox">
          <div id="left">
            <div id="contactTitle">
              Contact Us
            </div>
            <div id="contactAddress">
              BHARAT COLLEGE OF ENGINEERING
              Plot No. 12, Sector-22,
              Opp. Nerul Railway Station,
              Phase-II, Nerul (W),
              Navi Mumbai 400706
            </div>
            <div id="contactContacts">
              <div>Phone: 8369852238</div>
              <div>Fax: 8369852238</div>
              <div>alumni@bharatedu.co.in</div>
              <div>https://www.bharatedu.co.in</div>
            </div>
          </div>
          <div id="map">

          </div>
        </div>
      </div>
    )
  }
}

export default Contact;