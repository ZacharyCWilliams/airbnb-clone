import { connect } from "react-redux";
import SessionForm from "./session_form";
import React from "react";
import { Link } from "react-router-dom"
import { login } from "../../actions/session_actions"

const mapStateToProps = state => {
  return({
    errors: state.errors.session,
    formType: "Login Form",
    navLink: <Link to={"/signup"}>Sign up instead</Link>
  })
}

const mapDispatchToProps = dispatch => {
  
  return({
    processForm: user => dispatch(login(user))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)