import React from 'react';

const DashboardMenuView = props => {
  const { allBarbers, handleClick, selectedUser } = props;

  return (
    <div className="dashboard-menu">

      <div className="dashboard-barber-grid flex-column text-center">
          {allBarbers.map(barber => {
            const active = selectedUser === barber._id ? 'active' : '';
            // const bgImage = {
            //   backgroundImage: `url(${barber.imgUrl})`
            // }

            return (
              <div key={barber._id} onClick={(event) => handleClick(event)} value={barber._id} className={`dashboard-barber-container flex-column flex-center small-padding ${active}`}>
                {/* <div style={bgImage} className="dashboard-barber-photo"></div> */}
                <i className="dashboard-barber-icon far fa-address-card"></i>
                <div className="dashboard-barber-info flex-column flex-center mini-margin">
                  <div className="dashboard-barber-first">{barber.firstName}</div>
                  <div className="dashboard-barber-last">{barber.lastName}</div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  );
};

export default DashboardMenuView;
