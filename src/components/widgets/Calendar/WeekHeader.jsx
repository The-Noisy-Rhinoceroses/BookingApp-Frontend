import PropTypes from 'prop-types'
import React from 'react'

const WeekHeader = ({ label }) => {
    const arrLabel = label.split(' ');
  return (
      <div className="day-week-column flex-column flex-center">
        <div className="column-day">{arrLabel[0]}</div>
        <div className="column-week">{arrLabel[1]}</div>
      </div>
  )
}

WeekHeader.propTypes = {
  label: PropTypes.node,
}

export default WeekHeader