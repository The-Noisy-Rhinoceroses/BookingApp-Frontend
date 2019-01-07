import React from 'react';
import moment from 'moment';
import BigCalendar, { momentLocalizer } from 'react-big-calendar';
import '../../../../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import { Month } from '../../../../widgets';

const MonthlyView = props => {
  const { handleSelectSlot } = props;

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
      <div className="dashboard-monthly-view">
        <BigCalendar
          onDrillDown={handleSelectSlot}
          localizer={localizer}
          startAccessor="start"
          views={['month']}
          endAccessor="end"
          events={events}
          components={components}
          popup
        />
      </div>
  );
};

export default MonthlyView;
