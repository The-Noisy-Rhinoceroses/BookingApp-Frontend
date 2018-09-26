import React, { Component } from 'react';
import { CustomerInfo, AllBarbersContainer } from '../components';
import './App.css';
import Modal from 'react-responsive-modal';

// TODO: Relocate the CustomerInfo Component later on;
class App extends Component {
  constructor() {
    super();
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
      <div className="App">
        <AllBarbersContainer
          openModal={this.onOpenModal}
        />
        <Modal open={this.state.modalOpen} onClose={this.onCloseModal} center>
          <CustomerInfo />
        </Modal>
      </div>
    );
  }
}

export default App;
