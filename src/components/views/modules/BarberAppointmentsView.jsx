import React from 'react';
import moment from 'moment';

const BarberAppointmentsView = props => {
  return (
    <div>
      {props.appointments.map(appointment => (
        <h1 key={appointment.date}>
          {moment(appointment.date).format('MMMM Do YYYY, h:mm a')}
        </h1>
      ))}
    </div>
  )
};

export default BarberAppointmentsView;
