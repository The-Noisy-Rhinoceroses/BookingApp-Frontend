import React from 'react';

const HeaderView = props => {
  const { appName } = props;
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
  )
};

export default HeaderView;
