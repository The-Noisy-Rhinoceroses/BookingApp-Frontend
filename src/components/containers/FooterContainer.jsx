import React, { Component } from 'react';
import { FooterView } from '../views';

// Container component;
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <FooterView />
    );
  }
}

// Export by default our store-connected container component;
export default Footer;
