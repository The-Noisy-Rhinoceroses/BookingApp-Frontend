import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBookedAppointments } from '../../../thunks';
import { BarberAppointmentsView } from '../../views/modules'

class BarberAppointmentsContainer extends Component {
  constructor() {
    super();
    this.state = {
      click: false
    }
  }

  handleClick = () => {
    console.log("hiii from container", this.state)
    this.setState({click: true}); // TODO: REMOVE THIS;
    this.props.listAppointments(this.props.currentBarber._id);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Reset everything</button>
        {this.state.click
        ? <BarberAppointmentsView appointments={this.props.appointments} handleClick={this.handleClick} clickState={this.state.click} />
        : <p>Hahahaha</p>
        }
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
