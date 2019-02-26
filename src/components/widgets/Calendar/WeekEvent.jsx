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
      <div className="week-appointment-time">{formattedTimeSlot}</div>

      <div className="week-appointment-name flex-column">
        <div className="week-appointment-name-first">{firstName}</div>
        <div className="week-appointment-name-last">{lastName}</div>
      </div>

      <div className="week-appointment-contact flex-column">
        <div className="week-appointment-name-phone"><span className="week-contact-phone">Phone: </span>{phone}</div>
        <div className="week-appointment-name-email"><span className="week-contact-email">Email: </span>{email}</div>
      </div>
    </div>
  )
};

export default WeekEvent;
