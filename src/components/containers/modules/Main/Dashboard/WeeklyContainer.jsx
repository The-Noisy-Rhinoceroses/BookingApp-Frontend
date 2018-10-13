import React, { Component } from 'react';
import { WeeklyView } from '../../../../views/modules/Main';

class WeeklyContainer extends Component {

  render() {
    const { appointments } = this.props;

    return (
        <WeeklyView appointments={appointments} />
    )
  }
}

export default WeeklyContainer;
