import { connect } from "react-redux";
import HomeIndex from "./home_index";
import HomeIndexItem from "./home_index_item"
import React from "react";
import { fetchHomes, deleteHome } from "../../actions/home_actions"

const mapStateToProps = state => {
  let homes = state.entities.homes
  return ({
    homes: homes
  })
}

const mapDispatchToProps = dispatch => {

  return ({
    fetchHomes: homes => dispatch(fetchHomes(homes)),
    deleteHome: home => dispatch(deleteHome(home))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeIndex)