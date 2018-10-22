import React, { Component } from 'react';
import { BarberAppointmentsView } from '../../../../views/modules/Main';

class BarberAppointmentsContainer extends Component {

  render() {
    const { appointments } = this.props;
    return (
        <BarberAppointmentsView appointments={appointments} />
    )
  }
}

export default BarberAppointmentsContainer;
