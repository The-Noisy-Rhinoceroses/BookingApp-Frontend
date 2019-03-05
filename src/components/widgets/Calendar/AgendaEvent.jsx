import React from 'react';
import moment from 'moment';

const AgendaEvent = (props) => {
  const formattedTimeSlot = `${moment(props.event.start).format("h:mm a")} - ${moment(props.event.end).format("h:mm a")}`;
  const customerName = props.event.title.split('|')[0];
  const phone = props.event.title.split('|')[1];
  const email = props.event.title.split('|')[2];

  console.log(customerName)

  return (
    <div className="week-appointment-container flex-column">
      <div className="week-appointment-name">{customerName}</div>

      <div className="week-appointment-contact flex-column">
        <div className="week-appointment-time week-appointment-inline">{formattedTimeSlot}</div>
        <div className="week-appointment-name-phone week-appointment-inline"><span className="week-contact-phone">Phone: </span>{phone}</div>
        <div className="week-appointment-name-email week-appointment-inline"><span className="week-contact-email">Email: </span>{email}</div>
      </div>
    </div>
  )
};

export default AgendaEvent;
