import React, { Component } from 'react';
import { name } from '../../../package.json';
import { HeaderView } from '../views';
import { LoginFormContainer, LogoutContainer } from './modules/Header';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

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
    const { isLoggedIn } = this.props;
    return (
      <div className="section-header palette-two">
        { isLoggedIn ?
          <div className="header-user">
            <LogoutContainer />
          </div>
        : 
          <div className="header-guest">
            <LoginFormContainer />
            <HeaderView appName={appName} />
          </div>
        }
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.currentUser._id
  }
};

// Export by default our store-connected container component;
export default withRouter(connect(mapState, null)(Header));
