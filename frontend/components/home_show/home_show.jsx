import React from "react";
import { Link } from "react-router-dom";

class HomeShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchHome(this.props.match.params.homeId);
  }

  componentDidUpdate(oldProps) {
    if (this.props.match.params.homeId !== oldProps.match.params.homeId) {
      this.props.fetchHome(this.props.match.params.homeId)
    }
  }

  render(){

    const home = this.props.home
    if (!home) {
      return null
    }
    return(
      <div>
        <nav className="nav-div">
          <Link to="/homes">Homes</Link>
        </nav>
        <div className="photos-box">
          <img src={home.photoUrls[0]}/>
          
        </div>
        <div className="price-box">
          <p>${home.price} per night</p>
        </div>
        <div className="info-box">
         
          <ul>
            <h1 className="home-title">{home.title}</h1>
            <li>Lat: {home.lat}</li>
            <li>Long: {home.long}</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default HomeShow;