import React, { Component } from 'react';
import { HeaderContainer, MainContainer, FooterContainer } from '../components/containers';
import './App.css';

// TODO: Relocate the CustomerInfo Component later on;
class App extends Component {

  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <MainContainer />
        <FooterContainer />
      </div>
    );
  }
}

export default App;
