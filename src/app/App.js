import React, { Component } from 'react';
import {
  HeaderContainer,
  RoutesContainer,
  FooterContainer
} from '../components/containers';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <RoutesContainer />
        <FooterContainer />
      </div>
    );
  }
}

export default App;
