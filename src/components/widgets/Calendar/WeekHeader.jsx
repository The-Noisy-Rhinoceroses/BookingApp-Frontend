import PropTypes from 'prop-types'
import React from 'react'

const WeekHeader = ({ label }) => {
    const arrLabel = label.split(' ');
  return (
      <div className="day-week-column flex-row flex-center">
        <div className="column-day">{arrLabel[0]}</div>
        <div className="column-week">{arrLabel[1]}</div>

        <div className="column-divider-container flex-row flex-center">
          <div className="column-divider-circle"></div>
        </div>
      </div>
  )
}

WeekHeader.propTypes = {
  label: PropTypes.node,
}

export default WeekHeader