import React, { Component } from 'react';
import { WeeklyView } from '../../../../views/modules/Main';

class WeeklyContainer extends Component {

  render() {
    const { appointments, startingDates } = this.props;

    return (
        <WeeklyView startingDates={startingDates} appointments={appointments} />
    )
  }
}

export default WeeklyContainer;
