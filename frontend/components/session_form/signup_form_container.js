import { connect } from "react-redux";
import SessionForm from "./session_form";
import React from "react";
import { Link } from "react-router-dom";
import { signup } from "../../actions/session_actions"

const mapStateToProps = state => {
  return({
    errors: state.errors.session,
    formType: "Signup",
    navLink: <Link className={"link-hover"} to={"/login"}>Log in</Link>
  })
}

const mapDispatchToProps = dispatch => {
  return({
    processForm: user => dispatch(signup(user))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)