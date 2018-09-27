import axios from 'axios'

// ACTION TYPES
const GET_BOOKED_APPOINTMENTS = 'GET_BOOKED_APPOINTMENTS';

// ACTION CREATORS
export const getBookedAppointments = bookedAppointments => ({
  type: GET_BOOKED_APPOINTMENTS,
  payload: bookedAppointments
});

// THUNKS
export const fetchBookedAppointments = barberId => dispatch => {
    return axios
        .get(`/api/barbers/${barberId}/appointments`)
        .then(res => res.data)
        .then(foundBookedAppointments => dispatch(getBookedAppointments(foundBookedAppointments)))
        .catch(console.log)
};

// REDUCER

export default (state = [], action) => {
    switch (action.type) {
        case GET_BOOKED_APPOINTMENTS:
            return action.payload;
        default:
            return state;
    }
}
