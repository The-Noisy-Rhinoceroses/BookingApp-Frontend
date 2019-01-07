import React from 'react';
import moment from 'moment';
import BigCalendar, { momentLocalizer } from 'react-big-calendar';
import '../../../../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import { Month } from '../../../../widgets';

const WeeklyView = props => {
  const localizer = momentLocalizer(moment);
  const { weekDate } = props.startingDates;

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

  // Testing for custom calendar view render
  
  // const myView = {
  //   title: (date, {formats, culture}) => { return ''},
  //   navigate: (date, action) => { return new Date()}
  // }

  return (
      <div className="dashboard-weekly-view">
        <BigCalendar
          date={weekDate}
          localizer={localizer}
          startAccessor="start"
          defaultView={BigCalendar.Views.WEEK}
          views={["week"]}
          endAccessor="end"
          events={events}
          components={components}
          popup
        />
      </div>
  );
};

export default WeeklyView;
