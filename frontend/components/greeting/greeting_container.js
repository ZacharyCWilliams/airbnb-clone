import { connect } from "react-redux"
import Greeting from "./greeting"
import {demoLogin} from "./greeting"
import { logout, login } from "../../actions/session_actions"

const mapStateToProps = ({ session, entities: {users} }) => {
  return({
    currentUser: users[session.id]
  })
}

const mapDispatchToProps = dispatch => {
  return({
    logout: () => dispatch(logout()),
    login: user => dispatch(login(user))
  })  
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)