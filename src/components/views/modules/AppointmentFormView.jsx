import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

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
          <form onSubmit={handleSubmit}>

            <div className="appointment-form-group-container">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={appointmentInfo.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="appointment-form-group-container">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={appointmentInfo.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="appointment-form-group-container">
              <label>Phone</label>
              <input
                type="text"
                name="phoneNumber"
                value={appointmentInfo.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div className="appointment-form-group-container">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={appointmentInfo.email}
                onChange={handleChange}
              />
            </div>

            <div className="appointment-form-group-container">
              <label>Date</label>
              <DatePicker
                todayButton="Today"
                selected={appointmentInfo.appointmentDate}
                onChange={handleDate}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={30}
                dateFormat="LLL"
                timeCaption="time"
                minTime={handleMinTime()}
                maxTime={moment().hours(18).minutes(0)}
                minDate={moment()}
                maxDate={moment().add(15, 'days')}
                excludeTimes={handleExcludeTimes()}
                excludeDates={handleExcludeDates()}
              />
            </div>

            <button className="appointment-button orange-button">Book</button>

          </form>
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
