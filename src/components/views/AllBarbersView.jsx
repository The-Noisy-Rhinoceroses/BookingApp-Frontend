import React from 'react';
import PropTypes from 'prop-types';

const AllBarbersView = props => {
  const { setBarber, openModal, allBarbers } = props;
  return (
    <div className="barber-grid">
      {allBarbers.map(barber => (
        <div className="barber-grid-item" key={barber._id}>
          <div className="barber-grid-item-info" onClick={() => setBarber(barber._id) && openModal()}>
            <h1 className="barber-title">{barber.firstName} {barber.lastName}</h1>
            <img src={barber.imgUrl} alt={`${barber.firstName} ${barber.lastName}`}  />
          </div>
        </div>
      ))}
    </div>
  )
};

AllBarbersView.propTypes = {
  setBarber: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  allBarbers: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired
  })).isRequired
};

export default AllBarbersView;
