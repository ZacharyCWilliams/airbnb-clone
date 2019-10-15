import { Link } from "react-router-dom";
import React from 'react'
import HomeIndexItem from "./home_index_item"

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
        <nav>

        </nav>
        <div className="homes-container">
          <ul className="home-index-ul">
            {eachHome}
          </ul>
        </div>
      </div>
    )
  }
}

export default HomeIndex
