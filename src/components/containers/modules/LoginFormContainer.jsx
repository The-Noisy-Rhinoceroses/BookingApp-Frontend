import React, { Component } from 'react';
import LoginFormView from '../../views/modules/LoginFormView';
import axios from 'axios';

class LoginFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    axios.post('/auth/login', this.state)
      .then(res => res.data)
      .then(user => console.log(user))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <LoginFormView loginInfo={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
    );
  }
}

export default LoginFormContainer;
