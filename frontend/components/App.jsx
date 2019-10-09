import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Switch, Link, HashRouter, Redirect } from "react-router-dom";
import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";
import { AuthRoute } from "../util/route_util";

 
const App = () => (
  <div>
    <header>
      <div className="navbar-div">
        <GreetingContainer/>
      </div>
      <div className="background-image-div">
        <img className="background-image" src="https://a0.muscache.com/4ea/air/r:w1550-h1037-sfit,e:fjpg-c80/pictures/0ffd8594-f123-43f0-85bb-7ef88c6f0624.jpg" alt=""/>
      </div>
    </header>

    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer}/>
      <AuthRoute exact path="/signup" component={SignupFormContainer}/>
    </Switch>
  </div>

)

export default App;