import React from 'react';
import PropTypes from 'prop-types';
import  { ServicesContainer, CustomerInfoContainer } from '../../../../../containers/modules/Main';

const AppointmentFormView = props => {
  const { handleSubmit, handleDate, handleChange, handleExcludeTimes, appointmentInfo, handleExcludeDates, handleMinTime, handleNextIndex, handlePrevIndex, wizardIndex } = props;
  return (
    <div className="appointment-form text-center">

      <div className="appointment-form-left">
        <div className="header-title small-padding">Book an Appointment</div>
        <div className="header-steps small-padding flex-column">
          <div className="step-1 header-step-title active-step-title">Current step you're on</div>
          <div className="step-2 header-step-title">Next step</div>
          <div className="step-2 header-step-title">Next next step</div>
        </div>
      </div>

      <div className="appointment-form-right">
        <div className="appointment-form-right-main">
        {wizardIndex === 0 && (
          <ServicesContainer
            handleNextIndex={handleNextIndex}
          />
        )}

        {wizardIndex === 1 && (
          <CustomerInfoContainer
          handleSubmit={handleSubmit}
          handleDate={handleDate}
          handleChange={handleChange}
          handleExcludeTimes={handleExcludeTimes}
          appointmentInfo={appointmentInfo}
          handleExcludeDates={handleExcludeDates}
          handleMinTime={handleMinTime}
          handlePrevIndex={handlePrevIndex}
        />
        )}
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
