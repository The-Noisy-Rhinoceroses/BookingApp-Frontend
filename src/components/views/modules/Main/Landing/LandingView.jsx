import React from 'react';
import { AppointmentFormContainer, AllBarbersContainer } from '../../../../containers/modules';
import Modal from 'react-responsive-modal';

const LandingView = props => {
  const { openModal, closeModal, modalDisplay } = props;
  return (
    <div className="section-main">
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
