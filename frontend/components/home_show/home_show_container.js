import HomeShow from "./home_show";
import { connect } from 'react-redux';
import { fetchHome } from '../../actions/home_actions';
import React from "react";

const mapStateToProps = (state, ownProps) => {
  let homeId = ownProps.match.params.homeId
  let home = state.entities.homes[homeId]
  return ({
    home: home
  });
};

const mapDispatchToProps = dispatch => ({
  fetchHome: home => dispatch(fetchHome(home))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeShow);
