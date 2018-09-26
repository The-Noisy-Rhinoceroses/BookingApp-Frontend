import React, { Component } from 'react';
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

  handleSubmit = evt => {
    evt.preventDefault();

    const { appointmentDate, firstName, lastName, email } = this.state;
    const { barberId } = this.props.currentBarber._id;
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
      />
    );
  }
}

// Map state to props;
const mapState = state => {
  return {
    currentBarber: state.currentBarber
  };
};

// Export by default our store-connected container component;
export default connect(
  mapState,
  null
)(AppointmentFormContainer);
