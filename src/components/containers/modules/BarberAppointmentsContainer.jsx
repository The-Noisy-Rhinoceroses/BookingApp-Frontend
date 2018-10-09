import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBookedAppointments } from '../../../thunks';
import { BarberAppointmentsView } from '../../views/modules';

class BarberAppointmentsContainer extends Component {
  componentDidMount() {
    this.props.listAppointments(this.props.currentBarber._id);
  }

  render() {
    return (
      <div>
        <BarberAppointmentsView appointments={this.props.appointments} />
      </div>
    )
  }
}

const mapState = state => {
  return {
    currentBarber: state.currentUser,
    appointments: state.bookedAppointments
  }
}

const mapDispatch = dispatch => {
  return {
    listAppointments: (barberId) => dispatch(fetchBookedAppointments(barberId))
  }
}

export default connect(mapState, mapDispatch)(BarberAppointmentsContainer);
