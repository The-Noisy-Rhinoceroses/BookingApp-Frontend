import React from 'react';
import PropTypes from 'prop-types';

const LogoutView = props => {
  const { handleClick } = props;
  return (
    <button onClick={handleClick}>Logout</button>
  )
};

LogoutView.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default LogoutView;
