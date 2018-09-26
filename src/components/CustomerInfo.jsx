import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import Modal from 'react-responsive-modal';

export default class CustomerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      appointmentDate: moment(),
      modalOpen: false
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
        axios.post('/api/appointments', { customerId, appointmentDate, firstName, lastName, email })
      )
      .catch(err => console.log(err));
  };

  //following two functions for opening/closing modal on local state
  onOpenModal = () => {
    this.setState({ modalOpen: true });
  };

  onCloseModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <div className="test-form">
        <form onSubmit={this.handleSubmit}>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <label>Phone:</label>
          <input
            type="text"
            name="phoneNumber"
            value={this.state.phoneNumber}
            onChange={this.handleChange}
          />
          <br />
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <label>Date:</label>
          <DatePicker
            todayButton={'Today'}
            selected={this.state.appointmentDate}
            onChange={this.handleDate}
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
          <button onClick={this.onOpenModal}>Open modal</button>
          <Modal open={this.state.modalOpen} onClose={this.onCloseModal} center>
            <h2>Simple centered modal</h2>
          </Modal>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
