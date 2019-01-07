import React, { Component } from 'react';
import { MonthlyView } from '../../../../views/modules/Main';

class MonthlyContainer extends Component {

  render() {
    const { appointments, handleSelectSlot } = this.props;
    return (
        <MonthlyView handleSelectSlot={handleSelectSlot} appointments={appointments} />
    )
  }
}

export default MonthlyContainer;
