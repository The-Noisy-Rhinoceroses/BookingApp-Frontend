import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route } from 'react-router-dom';
import { BarberAppointmentsContainer } from './modules';
import { LandingContainer } from './';
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

          {/* Global routes */}
          <Route path="/home" component={LandingContainer} />

          {isLoggedIn && (
            <Switch>

              {/* User routes */}
              <Route
                path="/dashboard"
                component={BarberAppointmentsContainer}
              />
            </Switch>
            )}

            {/* Initial landing component */}
            <Route component={LandingContainer} />

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
