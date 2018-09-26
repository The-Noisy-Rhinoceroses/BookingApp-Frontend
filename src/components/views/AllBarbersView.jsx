import React from 'react';
import PropTypes from 'prop-types';

const AllBarbersView = props => {
  return (
    <div className="barber-grid">
      {props.allBarbers.map(barber => (
        <div className="barber-grid-item" key={barber._id}>
          <div className="barber-grid-item-info" onClick={() => props.setBarber(barber._id) && props.openModal()}>
            <h1 className="barber-title">{barber.firstName} {barber.lastName}</h1>
            <img src={barber.imgUrl} alt={`${barber.firstName} ${barber.lastName}`}  />
          </div>
        </div>
      ))}
    </div>
  )
};

AllBarbersView.propTypes = {
  allBarbers: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired
  })).isRequired
};

export default AllBarbersView;
