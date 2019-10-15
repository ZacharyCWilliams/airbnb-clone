import { RECEIVE_HOME, RECEIVE_HOMES } from "../actions/home_actions";

function homesReducer(oldState = {}, action) {
  switch (action.type) {
    case RECEIVE_HOMES:
      return action.homes
    case RECEIVE_HOME:
      return Object.assign({}, oldState, { [action.home.id]: action.home })
    default:
      return oldState
  }
}

export default homesReducer;