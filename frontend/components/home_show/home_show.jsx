import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../nav_bar/nav_bar";

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
        <nav className="nav-div nav-div-home-show">
          <NavBar />
        </nav>
        <div className="show-home-container-wrapper">
          <div className="photos-box">
            <img className="show-image-home" src={home.photoUrls[0]}/>
            <img className="show-image-home-second" src={home.photoUrls[1]}/>
            <img className="show-image-home-second" src={home.photoUrls[2]}/>
          </div>
          <div className="set-show-width-contain">
            <div className="price-box">
              <p>${home.price} per night</p>
            </div>
            <div className="info-box">
            
              <ul>
                <h1 className="home-title">{home.title}</h1>
                <li className="home-info-li">Lat: {home.lat}</li>
                <li className="home-info-li">Long: {home.long}</li>
                <li className="home-info-li">{home.description}</li>
                
              </ul>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeShow;