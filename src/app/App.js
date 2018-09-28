import React, { Component } from 'react';
import { Header, Main, Footer } from '../components/containers';
import './App.css';

// TODO: Relocate the CustomerInfo Component later on;
class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
