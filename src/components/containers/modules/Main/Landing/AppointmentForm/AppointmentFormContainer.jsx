import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AppointmentFormView } from '../../../../../views/modules/Main';
import moment from 'moment';
import axios from 'axios';

class AppointmentFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      appointmentDate: moment(),
      wizardIndex: 0
    };
  }

  handleNextIndex = () => {
    const oldIndex = this.state.wizardIndex;
    const wizardIndex = oldIndex + 1;

    this.setState({
      wizardIndex
    })
  }

  handlePrevIndex = () => {
    const oldIndex = this.state.wizardIndex;
    const wizardIndex = oldIndex - 1;
    
    this.setState({
      wizardIndex
    })
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleDate = date => {
    this.setState({
      appointmentDate: date
    });
  };

  handleExcludeTimes = () => {
    const { appointmentDate } = this.state;
    const { bookedAppointments } = this.props;
    return bookedAppointments.filter(bookedAppointment =>
      appointmentDate.isSame(bookedAppointment, 'day'));
  };

  handleExcludeDates = () => {
    let datesToExclude = [];

    const frequencyObj = {};
    const { bookedAppointments } = this.props;

    for (let i = 0; i < bookedAppointments.length; i++) {
      let appointment = bookedAppointments[i].format('MM DD YYYY');
      frequencyObj[appointment] = frequencyObj[appointment] + 1 || 1;
    }

    for (let date in frequencyObj) {
      let counter = frequencyObj[date];
      if (counter >= 16) datesToExclude.push(moment(date)); // TODO: Strict check for 16 slots;
    }

    return datesToExclude;
  };

  handleMinTime = () => {
    const { appointmentDate } = this.state;
    const selectedDay = appointmentDate.format('MM-DD-YYYY');
    const today = moment().format('MM-DD-YYYY');
    let minTime = moment()
      .hours(10)
      .minutes(0);

    if (selectedDay === today) {
      const currentTime = moment();
      const difference = currentTime.diff(minTime, 'hours');
      if (difference > 0) minTime = currentTime;
      // NOTE: It should not be acceptable for a past time slot to be an available option;
      // NOTE: If a user views the time slots after the store has opened, then that currentTime will be set as the minimum time;
      // NOTE: If the difference is greater than 8, then the currentTime exceeds the store's closing time;
      // NOTE: As a result, the minTime will be set to the currentTime, which will be greater than the maxTime;
      // NOTE: The outcome is: all times for the day are grayed out and are unavailable to be selected;
      // TODO: In the event that a barber requires an appointment to be booked at least some x amount of time beforehand, handle the logic for graying out available times where a customer is cutting it close/booking last-minute;
    }

    return minTime;
  };

  sendCustomer = () => {
    return axios
      .post('/api/customers', this.state)
      .then(res => res.data)
      .catch(err => console.log(err));
  };

  sendAppointment = customerId => {
    const barberId = this.props.currentBarber._id;
    const { appointmentDate, email, firstName, lastName } = this.state;
    const barberFirstName = this.props.currentBarber.firstName;
    const barberLastName = this.props.currentBarber.lastName;
    const { selectedServices } = this.props;

    axios
      .post('/api/appointments', {
        barberId,
        appointmentDate,
        customerId,
        email,
        firstName,
        lastName,
        barberFirstName,
        barberLastName,
        selectedServices
      })
      .catch(err => console.log(err));
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.sendCustomer()
      .then(customerId => this.sendAppointment(customerId))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <AppointmentFormView
        appointmentInfo={this.state}
        handleChange={this.handleChange}
        handleDate={this.handleDate}
        handleSubmit={this.handleSubmit}
        handleExcludeTimes={this.handleExcludeTimes}
        handleExcludeDates={this.handleExcludeDates}
        handleMinTime={this.handleMinTime}
        handleNextIndex={this.handleNextIndex}
        handlePrevIndex={this.handlePrevIndex}
        wizardIndex={this.state.wizardIndex}
      />
    );
  }
}

// Map state to props;
const mapState = state => {
  return {
    currentBarber: state.currentBarber,
    bookedAppointments: state.bookedAppointments.map(appointment =>
      moment(appointment.date)),
    selectedServices: state.selectedServices
  };
};

// Type check incoming props from Redux store;
AppointmentFormContainer.propTypes = {
  currentBarber: PropTypes.object.isRequired,
  bookedAppointments: PropTypes.arrayOf(PropTypes.object).isRequired
};

// Export by default our store-connected container component;
export default connect(
  mapState,
  null
)(AppointmentFormContainer);
