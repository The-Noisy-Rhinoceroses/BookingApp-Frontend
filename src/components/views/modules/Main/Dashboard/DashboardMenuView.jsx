import React from 'react';

const DashboardMenuView = props => {
  const { allBarbers, handleChange, currentUser } = props;
  return (
    <div className="dashboard-menu">
      This is the Dashboard Menu.
      <select name="selectedBarber" onChange={handleChange}>
        {allBarbers.map(barber => (
          <option selected={currentUser._id === barber._id} value={barber._id}>{barber.firstName} {barber.lastName}</option>
        ))}
      </select>
    </div>
  );
};

export default DashboardMenuView;
