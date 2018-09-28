import React, { Component } from 'react';

// Container component;
class Header extends Component {
  constructor(props) {
    super(props);
    this.state ={

    };
  }

  render() {

    return (
      <div className="section-header">
        <div>This is the Header.</div>
      </div>
    );
  }
}

// Export by default our store-connected container component;
export default Header;
