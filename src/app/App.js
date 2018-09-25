import React, { Component } from 'react';
import { CustomerInfo, AllBarbersContainer } from '../components';
import './App.css';

// TODO: Relocate the CustomerInfo Component later on;
class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomerInfo />
        <AllBarbersContainer />
      </div>
    );
  }
}

export default App;
