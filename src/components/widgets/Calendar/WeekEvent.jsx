import React from 'react';
import moment from 'moment';

const WeekEvent = (props) => {
  const formattedTimeSlot = `${moment(props.event.start).format("h:mm a")} - ${moment(props.event.end).format("h:mm a")}`;
  const customerName = props.event.title.split('|')[0].split(' ');
  const phone = props.event.title.split('|')[1];
  const email = props.event.title.split('|')[2];
  const firstName = customerName[0];
  const lastName = customerName[1];

  return (
    <div className="week-appointment-container flex-column">
      <div className="week-appointment-inline-container">
        <div className="week-appointment-time week-appointment-inline">{formattedTimeSlot}</div>
      </div>

      <div className="week-appointment-name flex-column">
        <div className="week-appointment-inline-container">
          <div className="week-appointment-name-first week-appointment-inline">{firstName}</div>
        </div>
        
        <div className="week-appointment-inline-container">
          <div className="week-appointment-name-last week-appointment-inline">{lastName}</div>
        </div>
      </div>

      <div className="week-appointment-contact flex-column">
        <div className="week-appointment-name-phone week-appointment-inline"><span className="week-contact-phone">Phone: </span>{phone}</div>
        <div className="week-appointment-name-email week-appointment-inline"><span className="week-contact-email">Email: </span>{email}</div>
      </div>
    </div>
  )
};

export default WeekEvent;
