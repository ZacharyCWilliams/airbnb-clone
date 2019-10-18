import { connect } from "react-redux";
import SearchPageIndex from "./search_page_index";
import SearchPage from './search_page';
import React from "react";
import { fetchHomes } from "../../actions/home_actions"
import { updateFilter } from "../../actions/filter_actions"

const mapStateToProps = state => {
  let homes = state.entities.homes
  return ({
    homes: homes
  })
}

const mapDispatchToProps = dispatch => {

  return ({
    // fetchHomes: homes => dispatch(fetchHomes(homes))
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)