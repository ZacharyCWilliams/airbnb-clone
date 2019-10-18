import React from 'react'
import HomeIndexContainer from "../home_index/home_index_container"
import SearchNavBar from "./search_nav_bar";
import SearchPageIndex from "./search_page_index";
import MarkerManager from "../../util/marker_manager"

const mapOptions = {
  center: { lat: 37.7758, lng: -122.435 }, // this is SF
  zoom: 13
};

class SearchPage extends React.Component {
  constructor(props) {
    super(props)
  }
   
  componentDidMount() {
    this.props.updateFilter();
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.homes)
  }

  ComponentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.homes)
  }

  render() {
    return (
      <div className="search-input-text-div">
        <nav className="nav-div nav-div-home-show">
          <SearchNavBar />
        </nav>
   
        <div className="search-page-container">
          <SearchPageIndex homes={this.props.homes}/>
          <div ref={map => this.mapNode = map} id='map-container'></div>
        </div>
      </div>
    )
  }
}

export default SearchPage;
