import React from 'react';
import { BarberAppointmentsContainer, WeeklyContainer, DashboardMenuContainer } from '../../../../containers/modules/Main';


const DashboardView = props => {
  const { appointments } = props;
  
  return (
    <div className="dashboard-view flex-row">
        <DashboardMenuContainer />
        <BarberAppointmentsContainer appointments={appointments} />
        <WeeklyContainer appointments={appointments} />
    </div>
  )
};

export default DashboardView;
