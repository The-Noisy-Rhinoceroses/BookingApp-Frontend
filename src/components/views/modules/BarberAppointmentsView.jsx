import React from 'react';
import moment from 'moment';
import BigCalendar, { momentLocalizer } from 'react-big-calendar';

const BarberAppointmentsView = props => {
  const localizer = momentLocalizer(moment);
  const events = props.appointments.map(appointment => ({
    title: 'Name of Customer',
    start: moment(appointment.date),
    end: moment(appointment.date).add(30, 'minutes')
  }));
  return (
    <div style={{height: '100vh'}}>
      {/*<div>
      {props.appointments.map(appointment => (
        <h1 key={appointment.date}>
          {moment(appointment.date).format('MMMM Do YYYY, h:mm a')}
        </h1>
      ))}
      </div>*/}
      <BigCalendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        events={events}
      />
    </div>
  );
};

export default BarberAppointmentsView;
