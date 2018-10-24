import axios from 'axios';

// ACTION TYPES

const SET_CURRENT_BARBER = 'SET_CURRENT_BARBER';

// ACTION CREATORS
const setCurrentBarber = currentBarber => ({
  type: SET_CURRENT_BARBER,
  payload: currentBarber
});

// THUNKS

export const fetchBarber = barberId => dispatch => {
  return axios
    .get(`/api/barbers/${barberId}`)
    .then(res => res.data)
    .then(foundBarber => {
      dispatch(setCurrentBarber(foundBarber));
    })
    .catch(console.log);
};

// REDUCER

export default (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_BARBER:
      return action.payload;
    default:
      return state;
  }
};
