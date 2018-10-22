import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBookedAppointments } from '../../../../../thunks';
import { DashboardView } from '../../../../views/modules/Main';

class DashboardContainer extends Component {
  componentDidMount() {
    this.props.listAppointments(this.props.currentBarber._id);
  }

  render() {
    return (
      <DashboardView appointments={this.props.appointments} />
    )
  }
}

const mapState = state => {
  return {
    currentBarber: state.currentUser,
    appointments: state.bookedAppointments.sort((a, b) => {
      if (a.date === b.date) return 0;
      return a.date > b.date ? 1 : -1; // sorts strings of dates in ascending order
    })
  }
}

const mapDispatch = dispatch => {
  return {
    listAppointments: (barberId) => dispatch(fetchBookedAppointments(barberId))
  }
}

export default connect(mapState, mapDispatch)(DashboardContainer);