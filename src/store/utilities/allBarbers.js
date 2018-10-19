import axios from 'axios';
import { fetchBarber } from './currentBarber';
// ACTION TYPES
const GET_ALL_BARBERS = 'GET_ALL_BARBERS';

// ACTION CREATORS
const getAllBarbers = barbers => ({
  type: GET_ALL_BARBERS,
  payload: barbers
});

// THUNKS
export const fetchAllBarbers = () => dispatch => {
  return axios
    .get('/api/barbers')
    .then(res => res.data)
    .then(barbers => {
      dispatch(getAllBarbers(barbers))
      dispatch(fetchBarber(barbers[0]._id));
    })
    .catch(console.log);
};

// REDUCER
export default (state = [], action) => {
  switch (action.type) {
    case GET_ALL_BARBERS:
      return action.payload;
    default:
      return state;
  }
};
