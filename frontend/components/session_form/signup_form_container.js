import { connect } from "react-redux";
import SessionForm from "./session_form";
import React from "react";
import { Link } from "react-router-dom";
import { signup } from "../../actions/session_actions"

const mapStateToProps = state => {
  return({
    errors: state.errors.session,
    formType: "Signup Form",
    navLink: <Link to={"/login"}>Log in instead</Link>
  })
}

const mapDispatchToProps = dispatch => {
  return({
    processForm: user => dispatch(signup(user))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)