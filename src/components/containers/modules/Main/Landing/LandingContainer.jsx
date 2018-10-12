import React, { Component } from 'react';
import { LandingView } from '../../../../views/modules/Main';

// Container component;
class LandingContainer extends Component {
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
      <LandingView openModal={this.onOpenModal} closeModal={this.onCloseModal} modalDisplay={this.state.modalDisplay} />
    );
  }
}

// Export by default our store-connected container component;
export default LandingContainer;
