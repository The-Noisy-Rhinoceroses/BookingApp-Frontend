import React, { Component } from 'react';
import {
  HeaderContainer,
  MainContainer,
  FooterContainer
} from '../components/containers';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App flex-column">
        <HeaderContainer />
        <MainContainer />
        <FooterContainer />
      </div>
    );
  }
}

export default App;
