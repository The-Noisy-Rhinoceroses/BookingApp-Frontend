import React, { Component } from 'react';
import { MainView } from '../views';

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
      <MainView openModal={this.onOpenModal} closeModal={this.onCloseModal} modalDisplay={this.state.modalDisplay} />
    );
  }
}

// Export by default our store-connected container component;
export default MainContainer;
