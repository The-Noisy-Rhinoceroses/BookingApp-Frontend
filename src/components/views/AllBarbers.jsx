import React from 'react';
import PropTypes from 'prop-types';


const AllBarbers = props => {
  return (
    <div className="barber-grid">
      {props.allBarbers.map(barber => (
        <div className="barber-grid-item" key={barber._id}>
          <h1>{barber.firstName} {barber.lastName}</h1>
          <img src={barber.imgUrl} alt={`${barber.firstName} ${barber.lastName}`} onClick={() => props.setBarber(barber._id)}  />
        </div>
      ))}
    </div>
  )
};

AllBarbers.propTypes = {
  allBarbers: PropTypes.array.isRequired
};

export default AllBarbers;
