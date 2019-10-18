import * as HomeApiUtil from "../util/home_api_util";

export const RECEIVE_HOMES = "RECEIVE_HOMES";
export const RECEIVE_HOME = "RECEIVE_HOME";
export const REMOVE_HOME = "REMOVE_HOME";

const receiveHomes = homes => {
  return({
    type: RECEIVE_HOMES,
    homes
  })
}

const receiveHome = home => {
  return({
    type: RECEIVE_HOME,
    home
  })
}

const removeHome = homeId => {
  return({
    type: REMOVE_HOME,
    homeId
  })
}

export const fetchHomes = filters => dispatch => (
  HomeApiUtil.fetchHomes(filters).then(homes => dispatch(receiveHomes(homes)))
)

export const fetchHome = home => dispatch => (
  HomeApiUtil.fetchHome(home).then(home => dispatch(receiveHome(home)))
)

export const createHome = home => dispatch => (
  HomeApiUtil.createHome(home).then(home => dispatch(receiveHome(home)))
)

export const updateHome = home => dispatch => (
  HomeApiUtil.updateHome(home).then(home => dispatch(receiveHome(home)))
)

export const deleteHome = home => dispatch => (
  HomeApiUtil.deleteHome(home).then(home => dispatch(removeHome(home.id)))
)