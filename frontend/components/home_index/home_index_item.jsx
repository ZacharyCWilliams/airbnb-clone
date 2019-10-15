import React from "react";
import { Link } from "react-router-dom";
import HomeIndex from "./home_index"

class HomeIndexItem extends React.Component {

  constructor(props) {
    super(props)
  }


  handleSubmit() {

  }

  render() {
    const homePhotos = this.props.home.photoUrls[0]
    if (!homePhotos) {
      return null
    }
    return (
      <ul className="home-index-ul">
      <Link className="link-to-home-show" to={`/homes/${this.props.home.id}`}>
        <img className="image-li" src={homePhotos} alt="" />
        <li className="home-index-title">{this.props.home.title}</li>
        <li className="home-price-index">${this.props.home.price}/night</li>
        {/* { photoImage } */}
        {console.log(homePhotos)}
        {/* {<button onClick={this.props.deleteHome}>Delete</button>} */}
      </Link>
      </ul>      
    )
  }
}

export default HomeIndexItem
