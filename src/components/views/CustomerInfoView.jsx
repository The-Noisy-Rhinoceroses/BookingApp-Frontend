import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const CustomerInfoView = props => {
  return (
    <div className="test-form">
      <form onSubmit={props.handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={props.state.firstName}
          onChange={props.handleChange}
        />
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={props.state.lastName}
          onChange={props.handleChange}
        />
        <br />
        <label>Phone:</label>
        <input
          type="text"
          name="phoneNumber"
          value={props.state.phoneNumber}
          onChange={props.handleChange}
        />
        <br />
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={props.state.email}
          onChange={props.handleChange}
        />
        <br />
        <label>Date:</label>
        <DatePicker
          todayButton={'Today'}
          selected={props.state.appointmentDate}
          onChange={props.handleDate}
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

export default CustomerInfoView;
