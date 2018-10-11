import axios from 'axios';

//ACTION TYPES

const SET_USER = 'SET_USER';
const REMOVE_USER = 'REMOVE_USER';

//ACTION CREATOR

const setCurrentUser = currentUser => ({
  type: SET_USER,
  payload: currentUser
});

const removeCurrentUser = () => ({
  type: REMOVE_USER
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

export const logout = () => dispatch => {
  return axios
    .post('/auth/logout')
    .then(res => res.data)
    .then(() => dispatch(removeCurrentUser()))
    .catch(err => console.log(err))
};

export const me = () => dispatch => {
  return axios
    .get('/auth/me')
    .then(res => res.data)
    .then(user => dispatch(setCurrentUser(user)))
    .catch(console.log);
}

//REDUCER

export default (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case REMOVE_USER:
      return {};
    default:
      return state;
  }
};
