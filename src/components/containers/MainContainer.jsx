import React, { Component } from 'react';
import MainView from '../views/MainView';

// Container component;
class MainContainer extends Component {

  render() {
    return (
      <MainView />
    );
  }
}

// Export by default our store-connected container component;
export default MainContainer;
