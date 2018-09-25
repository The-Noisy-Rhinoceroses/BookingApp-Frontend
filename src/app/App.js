import React, { Component } from 'react';
import { CustomerInfoContainer, AllBarbersContainer } from '../components';
import './App.css';

// TODO: Relocate the CustomerInfo Component later on;
class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomerInfoContainer />
        <AllBarbersContainer />
      </div>
    );
  }
}

export default App;
