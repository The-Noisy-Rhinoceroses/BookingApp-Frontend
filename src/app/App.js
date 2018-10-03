import React, { Component } from 'react';
import { HeaderContainer, MainContainer, FooterContainer } from '../components/containers';
import './App.css';
import { BarberAppointmentsContainer } from '../components/containers/modules'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        {/* <BarberAppointmentsContainer /> */}
        <MainContainer />
        <FooterContainer />
      </div>
    );
  }
}

export default App;
