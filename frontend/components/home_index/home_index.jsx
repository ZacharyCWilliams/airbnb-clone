import { Link } from "react-router-dom";
import React from 'react'
import HomeIndexItem from "./home_index_item"
import NavBar from "../nav_bar/nav_bar";

class HomeIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchHomes();
  }

  render() {
    let eachHome = Object.values(this.props.homes).map((home) => (
      <li className="home-index-li" key={home.id}>
        {<HomeIndexItem home={home} />}
      </li>
    )
    );

    return (
      <div>
        <nav className="nav-div nav-div-home-show">
          <NavBar />
        </nav>
        <div className="homes-container">
          <h3 className="welcome-text-for-homes">What can we help you find?</h3>
          <ul className="home-index-ul">
            {eachHome}
          </ul>
        </div>
      </div>
    )
  }
}

export default HomeIndex
