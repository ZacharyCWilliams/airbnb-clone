import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
 
  const sendLinks = () => {
    return (
    <nav className="nav-ul">
      <Link className="link-li" to={"/signup"}>Sign up</Link>
      <Link className="link-li" to={"/login"}>Log in</Link>
    </nav>
    )
  }

  const personalGreeting = () => {
    return(
      <div>
        <h1>Welcome {currentUser.name}!</h1>
        <nav>
          <button onClick={logout}>Logout</button>
        </nav>
      </div>
    )
  }

  return currentUser ? personalGreeting() : sendLinks()

}

export default Greeting