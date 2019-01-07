import React, { Component } from 'react';
import { AgendaView } from '../../../../views/modules/Main';

class AgendaContainer extends Component {

  render() {
    const { appointments, startingDates } = this.props;

    return (
        <AgendaView startingDates={startingDates} appointments={appointments} />
    )
  }
}

export default AgendaContainer;
