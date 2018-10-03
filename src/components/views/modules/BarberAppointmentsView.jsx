import React from 'react';

const BarberAppointmentsView = props => {
  return (
    <div>
      {props.appointments.map(appointment => (
        <h1 key={appointment.date}>
          {appointment.date}
        </h1>
      ))}
    </div>
  )
};

export default BarberAppointmentsView;
