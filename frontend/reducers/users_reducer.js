export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

function usersReducer(oldState = {}, action) {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, { [action.user.id]: action.user })
    default:
      return oldState
  }
}

export default usersReducer;