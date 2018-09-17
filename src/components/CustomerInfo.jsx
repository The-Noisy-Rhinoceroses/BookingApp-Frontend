import React, { Component } from 'react';
import axios from 'axios';

export default class CustomerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: ""
    }
  }

  handleChange = evt => {
    this.setState({[evt.target.name]: evt.target.value});
  }

  handleSubmit = evt => {
    evt.preventDefault();
    axios.post("/api/customers", this.state)
      .then(res => res.data)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>First Name:</label>
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
          <br></br>
          <label>Last Name:</label>
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
          <br></br>
          <label>Phone:</label>
          <input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} />
          <br></br>
          <label>Email:</label>
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          <br></br>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
