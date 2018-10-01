import React, { Component } from 'react';
import { name } from '../../../package.json';

// Container component;
class Header extends Component {
  constructor(props) {
    super(props);
    this.state ={

    };
  }

  render() {

    //Get App Name without '-' symbol.
    const dashIndex = name.indexOf('-');
    const appName = name.slice(0,dashIndex);

    return (
      <div className="section-header">
        <div className="section-header-overlay">
          <div className="section-header-content text-center">

            <div className="section-header-name header-name">{appName}</div>
            <div className="section-header-description">
              <div className="section-header-title header-title">Best buddy Binghampton barbers built blissfully bashful but blatantly brave</div>
              <div className="section-header-subtitle header-subtitle">Paragraph of some text that will go here. Maybe Binghampton should be where all barbers go to cut hair.</div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

// Export by default our store-connected container component;
export default Header;
