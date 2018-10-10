import React from 'react';
import moment from 'moment';

const Month = (props) => {
  const formattedTimeSlot = `${moment(props.event.start).format("h:mm a")} - ${moment(props.event.end).format("h:mm a")}`;
  const customerName = props.event.title.split('|')[0];
  return (
    <span>{customerName}{formattedTimeSlot}</span>
  )
};

export default Month;
