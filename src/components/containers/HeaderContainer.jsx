import React, { Component } from 'react';
import { name } from '../../../package.json';
import { HeaderView } from '../views';
import { LoginFormContainer, LogoutContainer } from './';
import { withRouter } from 'react-router-dom';

// Container component;
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    //Get App Name without '-' symbol.
    const dashIndex = name.indexOf('-');
    const appName = name.slice(0, dashIndex);
    return (
      <div>
        <LoginFormContainer />
        <LogoutContainer />
        <HeaderView appName={appName} />
      </div>
    );
  }
}

// Export by default our store-connected container component;
export default withRouter(Header);
