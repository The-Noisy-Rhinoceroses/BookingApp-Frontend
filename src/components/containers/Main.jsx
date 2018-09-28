import React, { Component } from 'react';
import { AppointmentFormContainer, AllBarbersContainer } from '../containers/modules';
import Modal from 'react-responsive-modal';

// Container component;
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    }
  }

  //following two functions for opening/closing modal on local state
  onOpenModal = () => {
    this.setState({ modalOpen: true });
  };

  onCloseModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {

    return (
      <div className="section-main">
        <h1>Choose your Barbermon:</h1>
        <AllBarbersContainer
          openModal={this.onOpenModal}
        />
        <Modal open={this.state.modalOpen} onClose={this.onCloseModal} center>
          <AppointmentFormContainer />
        </Modal>
      </div>
    );
  }
}

// Export by default our store-connected container component;
export default Main;
