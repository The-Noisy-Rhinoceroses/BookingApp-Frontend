import React from 'react';
import { MonthlyContainer, WeeklyContainer, DashboardMenuContainer } from '../../../../containers/modules/Main';


const DashboardView = props => {
  const { appointments, handleSelectSlot, startingDates } = props;
  
  return (
    <div className="dashboard-view flex-row">
        <DashboardMenuContainer />
        <MonthlyContainer startingDates={startingDates} handleSelectSlot={handleSelectSlot} appointments={appointments} />
        <WeeklyContainer startingDates={startingDates} appointments={appointments} />
    </div>
  )
};

export default DashboardView;
