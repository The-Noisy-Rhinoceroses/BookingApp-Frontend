import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LogoutView } from '../views';
import { logout } from '../../thunks';
import { withRouter } from 'react-router-dom';

class LogoutContainer extends Component {
  handleClick = evt => {
    evt.preventDefault();
    this.props.logout();
    this.props.history.push('/home')
  };

  render() {
    return <LogoutView handleClick={this.handleClick} />
  }
}

const mapDispatch = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

LogoutContainer.propTypes = {
  logout: PropTypes.func.isRequired
};

export default withRouter(connect(
  null,
  mapDispatch
)(LogoutContainer));
