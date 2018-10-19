//ACTION TYPES

const MOUNT_SELECTED_SERVICES = 'MOUNT_SELECTED_SERVICES';

//ACTION CREATOR

export const mountSelectedServices = (selectedServices) => ({
  type: MOUNT_SELECTED_SERVICES,
  payload: selectedServices
});

//REDUCER

export default (state = {}, action) => {
  switch (action.type) {
    case MOUNT_SELECTED_SERVICES:
      return action.payload;
    default:
      return state;
  }
};
