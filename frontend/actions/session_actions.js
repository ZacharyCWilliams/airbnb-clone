import * as sessionApiUtil from "../util/session_api_util"

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"

const receiveUser = user => {
  return({
    type: RECEIVE_CURRENT_USER,
    user
  });
}
const removeUser = () => {
  return({
    type: LOGOUT_CURRENT_USER
  });
}

const receiveErrors = errors => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors
  })
}

export const login = user => dispatch => {
  sessionApiUtil.login(user).then(user => dispatch(receiveUser(user)))
};

export const logout = () => dispatch => {
  sessionApiUtil.logout().then(() => dispatch(removeUser()))
};

export const signup = user => dispatch => {
  sessionApiUtil.signup(user).then(user => dispatch(receiveUser(user)))
};