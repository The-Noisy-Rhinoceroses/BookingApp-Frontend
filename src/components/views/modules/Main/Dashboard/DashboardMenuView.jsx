import React from 'react';

const DashboardMenuView = props => {
  const { allBarbers, handleChange, currentUser } = props;
  return (
    <div className="dashboard-menu">
      This is the Dashboard Menu.
      <select name="selectedBarber" onChange={handleChange} value={currentUser._id}>
        {allBarbers.map(barber => (
          <option key={barber._id} value={barber._id}>{barber.firstName} {barber.lastName}</option>
        ))}
      </select>
    </div>
  );
};

export default DashboardMenuView;
