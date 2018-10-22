import React from 'react';
import { BarberAppointmentsContainer, WeeklyContainer, DashboardMenuContainer } from '../../../../containers/modules/Main';


const DashboardView = props => {
  const { appointments } = props;
  
  return (
    <div className="dashboard-view">
        <DashboardMenuContainer />
        <WeeklyContainer appointments={appointments} />
        <BarberAppointmentsContainer appointments={appointments} />
    </div>
  )
};

export default DashboardView;
