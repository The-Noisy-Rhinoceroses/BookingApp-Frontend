import React, { Component } from 'react';
import RoutesContainer from './RoutesContainer';

// Container component;
class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalDisplay: false
    }
  }

  //following two functions for opening/closing modal on local state
  onOpenModal = () => {
    this.setState({ modalDisplay: true });
  };

  onCloseModal = () => {
    this.setState({ modalDisplay: false });
  };

  render() {
    return (
      <RoutesContainer />
    );
  }
}

// Export by default our store-connected container component;
export default MainContainer;
