import React from 'react';

const HeaderView = props => {
  const { appName } = props;
  return (
    <div className="section-header-landing">
        <div className="section-header-overlay">
          <div className="section-header-content flex-column flex-center text-center">

            <div className="section-header-name-title header-name-title">{appName}</div>
            <div className="section-header-description flex-column flex-center small-padding">
              <div className="section-header-title narrow-content small-padding header-title small-padding">Best buddy Binghampton barbers built blissfully bashful but blatantly brave</div>
              <div className="section-header-subtitle narrow-content-smaller mini-padding header-subtitle mini-padding">Paragraph of some text that will go here. Maybe Binghampton should be where all barbers go to cut hair.</div>
            </div>

          </div>
        </div>
      </div>
  )
};

export default HeaderView;
