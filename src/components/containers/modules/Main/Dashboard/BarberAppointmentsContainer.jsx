import React, { Component } from 'react';
import { BarberAppointmentsView } from '../../../../views/modules/Main';

class BarberAppointmentsContainer extends Component {

  render() {
    const { appointments, handleSelectSlot } = this.props;
    return (
        <BarberAppointmentsView handleSelectSlot={handleSelectSlot} appointments={appointments} />
    )
  }
}

export default BarberAppointmentsContainer;
