import React, { Component } from 'react';
import { MonthlyView } from '../../../../views/modules/Main';

class MonthlyContainer extends Component {

  render() {
    const { appointments, handleSelectSlot, startingDates } = this.props;
    return (
        <MonthlyView startingDates={startingDates} handleSelectSlot={handleSelectSlot} appointments={appointments} />
    )
  }
}

export default MonthlyContainer;
