import React from 'react';
import { AppointmentFormContainer, AllBarbersContainer } from '../../../../containers/modules/Main';
import Modal from 'react-responsive-modal';

const LandingView = props => {
  const { openModal, closeModal, modalDisplay } = props;
  return (
    <div className="landing-view palette-two">
        <AllBarbersContainer
          openModal={openModal}
        />
        <Modal open={modalDisplay} onClose={closeModal} onOpen={openModal} center>
          <AppointmentFormContainer />
        </Modal>
      </div>
  )
};

export default LandingView;
