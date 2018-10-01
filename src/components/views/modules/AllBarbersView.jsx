import React from 'react';
import PropTypes from 'prop-types';
import { Switcher } from '../../widgets';

const AllBarbersView = props => {
  const { setBarber, openModal, allBarbers, currentBarber } = props;
  return (
    <div className="all-barbers">
      <Switcher items={allBarbers} activeItem={currentBarber} setItem={setBarber} openModal={openModal}/>
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
