import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { me } from '../../thunks';
import { RoutesView } from '../views';

class RoutesContainer extends Component {
  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
        <RoutesView
          isLoggedIn={isLoggedIn}
          Switch={Switch}
          Route={Route}
        />
    );
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.currentUser._id
  };
};

const mapDispatch = dispatch => {
  return {
    loadUser: () => dispatch(me())
  };
};

RoutesContainer.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  loadUser: PropTypes.func.isRequired
};

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(RoutesContainer)
);
