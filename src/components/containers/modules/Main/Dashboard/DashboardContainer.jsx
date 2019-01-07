import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoworkerAppointments } from '../../../../../thunks';
import { DashboardView } from '../../../../views/modules/Main';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weekDate: null,
      agendaDate: null
    }
  }

  componentDidMount() {
    this.props.listAppointments(this.props.currentBarber._id);
  }

  handleSelectSlot = (date) => {
    let selectedDates = {
      weekDate: date,
      agendaDate: date
    };

    this.setState(selectedDates);
  }

  render() {

    return (
      <DashboardView
        appointments={this.props.appointments}
        allBarbers={this.props.allBarbers}
        handleSelectSlot={this.handleSelectSlot}
        startingDates = {this.state}
      />
    );
  }
}

const mapState = state => {
  return {
    currentBarber: state.currentUser,
    appointments: state.coworkerAppointments.sort((a, b) => {
      if (a.date === b.date) return 0;
      return a.date > b.date ? 1 : -1; // sorts strings of dates in ascending order
    })
  };
};

const mapDispatch = dispatch => {
  return {
    listAppointments: barberId => dispatch(fetchCoworkerAppointments(barberId))
  };
};

export default connect(
  mapState,
  mapDispatch
)(DashboardContainer);
