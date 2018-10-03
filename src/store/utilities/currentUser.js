import axios from 'axios';

//ACTION TYPES

const SET_USER = 'SET_USER';

//ACTION CREATOR

const setCurrentUser = currentUser => ({
  type: SET_USER,
  payload: currentUser
});

//THUNKS
export const setUser = loginInfo => dispatch => {
  return axios
    .post('/auth/login', loginInfo)
    .then(res => res.data)
    .then(user => {
      if (user._id) {
        dispatch(setCurrentUser(user));
      } else {
        console.log(user);
      }
    })
    .catch(err => console.log(err));
};

//REDUCER

export default (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};
