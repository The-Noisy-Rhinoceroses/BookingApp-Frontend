import React, { Component } from 'react';
import { LineGraphView } from '../../../../views/modules/Main';

class LineGraphContainer extends Component {

  render() {
    const { appointments, startingDates } = this.props;

    return (
        <LineGraphView startingDates={startingDates} appointments={appointments} />
    )
  }
}

export default LineGraphContainer;
