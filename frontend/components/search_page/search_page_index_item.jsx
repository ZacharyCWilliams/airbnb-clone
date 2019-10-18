import React from 'react';
import { Link } from 'react-router-dom';

class SearchPageIndexItem extends React.Component {

  constructor(props) {
    super(props)
  }
  render() {
    return (
        <Link className="card-search-link-router" to={`/homes/${this.props.home.id}`}>
          <div className="card-container-search-homes">
              <img className="image-card-home-search" src={this.props.home.photoUrls[0]} />
              <h1 className="search-page-index-item-h1">{this.props.home.title}</h1>
          </div>
        </Link>
    )
  }
}

export default SearchPageIndexItem
