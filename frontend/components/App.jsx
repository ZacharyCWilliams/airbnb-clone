import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Switch, Link, HashRouter, Redirect } from "react-router-dom";
import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import HomeIndexContainer from "./home_index/home_index_container"
import HomeShowContainer from "./home_show/home_show_container"
import CreateHomeContainer from "./home_form/create_home_container"
import SearchPageContainer from "./search_page/search_page_container"

 
const App = () => (
  <div>
    {/* <header> */}
      {/* <div className="navbar-div">
        <GreetingContainer/>
        
      </div> */}
      {/* <div className="background-image-div">
        <img className="background-image" src="https://a0.muscache.com/4ea/air/r:w1550-h1037-sfit,e:fjpg-c80/pictures/0ffd8594-f123-43f0-85bb-7ef88c6f0624.jpg" alt=""/>
      </div> */}
    {/* </header> */}

    <Switch>
      <Route exact path="/" component={GreetingContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer}/>
      <AuthRoute exact path="/signup" component={SignupFormContainer}/>
      <Route exact path="/homes" component={HomeIndexContainer} />
      <ProtectedRoute exact path="/homes/new" component={CreateHomeContainer}/> 
      <Route path="/homes/:homeId" component={HomeShowContainer} />
      <Route path="/search" component={SearchPageContainer}/>
    </Switch>
  </div>

)

export default App;