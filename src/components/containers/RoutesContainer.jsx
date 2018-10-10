import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route } from 'react-router-dom';
import { BarberAppointmentsContainer } from './modules';
import { MainContainer } from './'
import PropTypes from 'prop-types';
import { me } from '../../thunks';

class RoutesContainer extends Component {
  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
        <Switch>
          <Route path="/home" component={MainContainer} />
          {isLoggedIn && (
            <Switch>
              <Route
                path="/dashboard"
                component={BarberAppointmentsContainer}
              />
            </Switch>
            )}
            <Route component={MainContainer} />
        </Switch>
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
