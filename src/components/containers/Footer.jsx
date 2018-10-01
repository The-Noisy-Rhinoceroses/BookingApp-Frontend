import React, { Component } from 'react';

// Container component;
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state ={

    };
  }

  render() {

    return (
      <div className="section-footer section-shade-dark">
        <div className="header-title text-center">This is the footer.</div>
      </div>
    );
  }
}

// Export by default our store-connected container component;
export default Footer;
