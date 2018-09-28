import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AppointmentFormView } from '../views';
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
      appointmentDate: moment()
    };
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
      appointmentDate.isSame(bookedAppointment, 'day')
    );
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
      // TODO: Strict check for 16 slots;
      if (counter >= 16) datesToExclude.push(moment(date));
    }

    return datesToExclude;
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { appointmentDate, firstName, lastName, email } = this.state;
    const barberId = this.props.currentBarber._id;
    const barberFirstName = this.props.currentBarber.firstName;
    const barberLastName = this.props.currentBarber.lastName;

    axios
      .post('/api/customers', this.state)
      .then(res => res.data)
      .then(customerId =>
        axios.post('/api/appointments', {
          barberId,
          appointmentDate,
          customerId,
          email,
          firstName,
          lastName,
          barberFirstName,
          barberLastName
        })
      )
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
      />
    );
  }
}

// Map state to props;
const mapState = state => {
  return {
    currentBarber: state.currentBarber,
    bookedAppointments: state.bookedAppointments.map(appointment =>
      moment(appointment.date)
    )
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
