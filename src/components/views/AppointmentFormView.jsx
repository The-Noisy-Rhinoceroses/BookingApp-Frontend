import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const AppointmentFormView = props => {
  const{handleSubmit, handleDate, handleChange, appointmentInfo } = props
  return (
    <div className="test-form">
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={appointmentInfo.firstName}
          onChange={handleChange}
        />
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={appointmentInfo.lastName}
          onChange={handleChange}
        />
        <br />
        <label>Phone:</label>
        <input
          type="text"
          name="phoneNumber"
          value={appointmentInfo.phoneNumber}
          onChange={handleChange}
        />
        <br />
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={appointmentInfo.email}
          onChange={handleChange}
        />
        <br />
        <label>Date:</label>
        <DatePicker
          todayButton={'Today'}
          selected={appointmentInfo.appointmentDate}
          onChange={handleDate}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={30}
          dateFormat="LLL"
          timeCaption="time"
          minTime={moment()
            .hours(10)
            .minutes(0)}
          maxTime={moment()
            .hours(18)
            .minutes(0)}
          minDate={moment()}
          maxDate={moment().add(15, 'days')}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AppointmentFormView;
