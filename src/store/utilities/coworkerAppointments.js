import axios from 'axios';

// ACTION TYPES

const GET_COWORKER_APPOINTMENTS = 'GET_COWORKER_APPOINTMENTS';

// ACTION CREATORS
const getCoworkerAppointments = appointments => ({
  type: GET_COWORKER_APPOINTMENTS,
  payload: appointments
});

// THUNKS

export const fetchCoworkerAppointments = barberId => dispatch => {
  return axios
    .get(`/api/barbers/${barberId}/appointments`)
    .then(res => res.data)
    .then(foundAppointments => {
      dispatch(getCoworkerAppointments(foundAppointments));
    })
    .catch(console.log);
};

// REDUCER

export default (state = [], action) => {
  switch (action.type) {
    case GET_COWORKER_APPOINTMENTS:
      return action.payload;
    default:
      return state;
  }
};
