import React from 'react';
import moment from 'moment';
import BigCalendar, { momentLocalizer } from 'react-big-calendar';
import '../../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css'
import Month from './calendar/Month';

const BarberAppointmentsView = props => {
  const localizer = momentLocalizer(moment);

  const events = props.appointments.map(appointment => ({
    title: `${appointment.customer.firstName} ${appointment.customer.lastName} | ${appointment.customer.phoneNumber} | ${appointment.customer.email}`,
    start: new Date(appointment.date),
    end: new Date(moment(appointment.date).add(30, 'minutes').format())
  }));

  let components = {
    month: {
      event: Month
    }
  }

  return (
    <div style={{height: '100vh'}}>
      <BigCalendar
        localizer={localizer}
        startAccessor="start"
        views={['month', 'agenda']}
        endAccessor="end"
        events={events}
        components={components}
        popup
      />
    </div>
  );
};

export default BarberAppointmentsView;
