import React from 'react';
import moment from 'moment';
import BigCalendar, { momentLocalizer } from 'react-big-calendar';
import '../../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css'

const BarberAppointmentsView = props => {
  const localizer = momentLocalizer(moment);
  const events = props.appointments.map(appointment => ({
    title: `${appointment.customer.firstName} ${appointment.customer.lastName} - ${appointment.customer.phoneNumber}`,
    start: new Date(appointment.date),
    end: new Date(moment(appointment.date).add(30, 'minutes').format())
  }));
  return (
    <div style={{height: '100vh'}}>
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
