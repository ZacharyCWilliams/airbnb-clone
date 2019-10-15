import { connect } from "react-redux";
import HomeForm from "./home_form";
import React from "react";
import { Link } from "react-router-dom"
import { createHome } from "../../actions/home_actions"

const mapStateToProps = state => {
  return ({
    formType: "Add Home",
    navLink: <Link className={"link-hover"} to={"/homes/new"}>Add Home</Link>
  })
}

const mapDispatchToProps = dispatch => {

  return ({
    createHome: home => dispatch(createHome(home))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeForm)