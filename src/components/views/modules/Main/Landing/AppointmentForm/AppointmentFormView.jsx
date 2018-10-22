import React from 'react';
import PropTypes from 'prop-types';
import  { ServicesContainer, CustomerInfoContainer } from '../../../../../containers/modules/Main';

const AppointmentFormView = props => {
  const { handleSubmit, handleDate, handleChange, handleExcludeTimes, appointmentInfo, handleExcludeDates, handleMinTime } = props;
  return (
    <div className="appointment-form text-center">

      <div className="appointment-form-left">
        <div className="header-title">Book an Appointment</div>
        <div className="header-steps">
          <div className="step-1 active-step">Current step you're on</div>
          <div className="step-2">Next step</div>
          <div className="step-2">Next next step</div>
        </div>
      </div>

      <div className="appointment-form-right">
        <div className="appointment-form-right-main">
        <ServicesContainer />
        <CustomerInfoContainer 
            handleSumbit={handleSubmit}
            handleDate={handleDate}
            handleChange={handleChange}
            handleExcludeTimes={handleExcludeTimes}
            appointmentInfo={appointmentInfo}
            handleExcludeDates={handleExcludeDates}
            handleMinTime={handleMinTime}
          />
        </div>

        <div className="appointment-form-right-bottom">
            <div className="appointment-form-right-bottom-description">We are not responsible for loss of hair, bald spots, lack of enthusiasm, general nervousness. Pick your poison.</div>
        </div>

      </div>
    </div>
  );
};

AppointmentFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleDate: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleExcludeTimes: PropTypes.func.isRequired,
  handleExcludeDates: PropTypes.func.isRequired,
  handleMinTime: PropTypes.func.isRequired,
  appointmentInfo: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    appointmentDate: PropTypes.object.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired
};

export default AppointmentFormView;
