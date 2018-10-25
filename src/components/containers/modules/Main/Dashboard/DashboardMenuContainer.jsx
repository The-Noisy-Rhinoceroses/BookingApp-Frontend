import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoworkerAppointments } from '../../../../../thunks';
import { DashboardMenuView } from '../../../../views/modules/Main';

class DashboardMenuContainer extends Component {
  handleChange = (evt) => {
    this.props.fetchCoworkerAppointments(evt.target.value);
  }

  render() {
    return (
      <DashboardMenuView allBarbers={this.props.allBarbers} handleChange={this.handleChange} currentUser={this.props.currentUser} />
    )
  }
}

const mapState = state => {
  return {
    allBarbers: state.allBarbers,
    currentUser: state.currentUser
  }
}

const mapDispatch = dispatch => {
  return {
    fetchCoworkerAppointments: (barberId) => dispatch(fetchCoworkerAppointments(barberId))
  }
}

export default connect(mapState, mapDispatch)(DashboardMenuContainer);
