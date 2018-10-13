import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginFormView } from '../../../views/modules/Header'
import { setUser } from '../../../../thunks';
import { withRouter } from 'react-router-dom';

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
    this.props.setUser(this.state);
    this.props.history.push('/dashboard')
  };

  render() {
    return (
      <LoginFormView
        loginInfo={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatch = dispatch => {
  return {
    setUser: (loginInfo) => dispatch(setUser(loginInfo))
  };
};

export default withRouter(connect(
  null,
  mapDispatch
)(LoginFormContainer));
