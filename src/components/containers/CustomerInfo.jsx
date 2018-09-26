import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomerInfo from '../views/CustomerInfo';
import moment from 'moment';
import axios from 'axios';

class CustomerInfoContainer extends Component {
  constructor(props) {
    super(props);
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
    const { appointmentDate, firstName, lastName, email } = this.state;
    evt.preventDefault();
    axios
      .post('/api/customers', this.state)
      .then(res => res.data)
      .then(customerId =>
        axios.post('/api/appointments', {
          customerId,
          appointmentDate,
          firstName,
          lastName,
          email,
          barberId: this.props.currentBarber._id
        })
      )
      .catch(err => console.log(err));
  };
  render() {
    return (
      <CustomerInfo
        state={this.state}
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
)(CustomerInfoContainer);
