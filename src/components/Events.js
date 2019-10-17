import React, { Component } from 'react';

const list = [{
  name: 'Event One',
  venue: 'BKC, Bombay',
  dateTime: new Date()
},{
  name: 'Event One',
  venue: 'BKC, Bombay',
  dateTime: new Date()
}, {
  name: 'Event One',
  venue: 'BKC, Bombay',
  dateTime: new Date()
}, {
  name: 'Event One',
  venue: 'BKC, Bombay',
  dateTime: new Date()
}]
class Events extends Component {

  render() {

    return (
      <div id="events">
        {list.map(event => (
          <div className="eventBox">
            <div className='eventMedia' style={{ backgroundImage: `url(${require('../img/event.jpg')})`, backgroundSize: 'cover' }} ></div>
            <div className="eventDetails">
              <div className="eventName">
                {event.name}
              </div>
              <div className="eventVenue">
                {event.venue}
              </div>
              <div className="eventDateTime">
                {event.dateTime.toString()}
              </div>
              <button>View</button>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Events;