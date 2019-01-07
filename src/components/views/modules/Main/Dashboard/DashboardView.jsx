import React from 'react';
import { BarberAppointmentsContainer, WeeklyContainer, DashboardMenuContainer } from '../../../../containers/modules/Main';


const DashboardView = props => {
  const { appointments, handleSelectSlot, startingDates } = props;
  
  return (
    <div className="dashboard-view flex-row">
        <DashboardMenuContainer />
        <BarberAppointmentsContainer handleSelectSlot={handleSelectSlot} appointments={appointments} />
        <WeeklyContainer startingDates={startingDates} appointments={appointments} />
    </div>
  )
};

export default DashboardView;
