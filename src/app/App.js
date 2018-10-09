import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
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
        <BrowserRouter>
          <RoutesContainer />
        </BrowserRouter>
        <FooterContainer />
      </div>
    );
  }
}

export default App;
