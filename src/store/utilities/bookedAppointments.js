import axios from 'axios'

// ACTION TYPES
const GET_BOOKED_APPOINTMENTS = 'GET_BOOKED_APPOINTMENTS';

// ACTION CREATORS
export const getBookedAppointments = bookedAppointments => ({
  type: GET_BOOKED_APPOINTMENTS,
  payload: bookedAppointments
});

// HELPER FUNCTION
export const fetchBookedAppointments = barberId => {
    return axios
        .get(`/api/barbers/${barberId}/appointments`)
        .then(res => res.data)
}

// REDUCER

export default (state = [], action) => {
    switch (action.type) {
        case GET_BOOKED_APPOINTMENTS:
            return action.payload;
        default:
            return state;
    }
}
