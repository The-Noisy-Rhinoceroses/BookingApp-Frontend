import React from 'react';
import moment from 'moment';
import BigCalendar, { momentLocalizer } from 'react-big-calendar';
import '../../../../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import { WeekEvent } from '../../../../widgets';
import { WeekHeader } from '../../../../widgets';

const WeeklyView = props => {
  const localizer = momentLocalizer(moment);
  const { weekDate } = props.startingDates;

  const events = props.appointments.map(appointment => ({
    title: `${appointment.customer.firstName} ${appointment.customer.lastName} | ${appointment.customer.phoneNumber} | ${appointment.customer.email}`,
    start: new Date(appointment.date),
    end: new Date(moment(appointment.date).add(30, 'minutes').format())
  }));

  let components = {
    week: {
      header: WeekHeader,
      event: WeekEvent
    }
  }

  //To Do: Fix Back and Next buttons
  return (
      <div className="dashboard-weekly-view">
        <BigCalendar
          date={weekDate}
          header={WeekHeader}
          localizer={localizer}
          startAccessor="start"
          defaultView={BigCalendar.Views.WEEK}
          views={["week"]}
          endAccessor="end"
          events={events}
          components={components}
          step={720}
          popup
        />
      </div>
  );
};

export default WeeklyView;
