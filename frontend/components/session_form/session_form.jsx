import React from "react";
import GreetingContainer from "../greeting/greeting_container";

class SessionForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      name: ""
    };

    this.renderErrors = this.renderErrors.bind(this)
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.processForm(user)
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return(
      <div>
        <GreetingContainer />
        <div className="background-image-div">
          <img className="background-image" src="https://a0.muscache.com/4ea/air/r:w1550-h1037-sfit,e:fjpg-c80/pictures/0ffd8594-f123-43f0-85bb-7ef88c6f0624.jpg" alt="" />
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-box">
            <h1 className="welcome-text">Welcome to my Airbnb clone. {this.props.formType} or {this.props.navLink}.
              {this.renderErrors()}</h1>
            <label className="input-label">
              <p className="input-label-title">Email</p>
              <input className="form-input" placeholder={"Your email"} value={this.state.email} onChange={this.update("email")}/>
            </label>
            <label className="input-label">
              <p className="input-label-title">Password</p>
              <input className="form-input" placeholder={"Minimum length: 6 characters"} value={this.state.password} onChange={this.update("password")}/>
            </label>
            <label className="input-label">
              <p className="input-label-title">Name</p>
              <input className="form-input" placeholder={"Your name"} value={this.state.name} onChange={this.update("name")}/>
            </label>
          <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    )
  }


};

export default SessionForm