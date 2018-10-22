import React from 'react';
import RoutesContainer from '../containers/RoutesContainer';
import ServicesContainer from '../containers/modules/ServicesContainer';

const MainView = props => {
  return (
    <div className="section-main">
      <RoutesContainer />
      <ServicesContainer />
    </div>
  )
};

export default MainView;
