import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, BrowserRouter, Switch } from 'react-router-dom';
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
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={MainContainer}></Route>
          {isLoggedIn && (
            <Switch>
              <Route
                path="/dashboard"
                component={BarberAppointmentsContainer}
              />
            </Switch>
          )}
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.currentUser
  };
};

const mapDispatch = dispatch => {
  return {
    loadUser: dispatch(me())
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
  )(RouterContainer)
);
