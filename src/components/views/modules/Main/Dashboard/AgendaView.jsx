import React from 'react';
import moment from 'moment';
import BigCalendar, { momentLocalizer } from 'react-big-calendar';
import '../../../../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import { AgendaEvent } from '../../../../widgets';

const AgendaView = props => {
  const localizer = momentLocalizer(moment);
  const { agendaDate } = props.startingDates;

  const events = props.appointments.map(appointment => ({
    title: `${appointment.customer.firstName} ${appointment.customer.lastName} | ${appointment.customer.phoneNumber} | ${appointment.customer.email}`,
    start: new Date(appointment.date),
    end: new Date(moment(appointment.date).add(30, 'minutes').format())
  }));

  let components = {
    agenda: {
      event: AgendaEvent
    }
  }

  //To Do: Fix Back and Next buttons
  return (
      <div className="dashboard-agenda-view flex-column">
        <div className="dashboard-agenda-view-title">Agenda</div>

        <BigCalendar
          date={agendaDate}
          localizer={localizer}
          startAccessor="start"
          defaultView={BigCalendar.Views.AGENDA}
          views={["agenda"]}
          endAccessor="end"
          events={events}
          components={components}
          toolbar={false}
        />
      </div>
  );
};

export default AgendaView;
