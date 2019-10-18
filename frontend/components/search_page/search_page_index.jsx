import React from 'react';
import SearchPageIndexItem from './search_page_index_item';

class SearchPageIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    let eachSearchHome = Object.values(this.props.homes).map((home) => (
      <li className="search-page-home-card" key={home.id}>
        {<SearchPageIndexItem home={home} />}
      </li>
    ));

    
    return (
      <div className="search-page-index-container">
        <div className="img-and-p-tag-search">
          <img className="trophy-champ" src="https://publicdomainvectors.org/photos/1459374657.png" alt=""/>
          <p className="search-page-paragraph">Over 60,000 guest reviews for places to stay, with an average of 4.8 out of 5 stars.</p>

        </div>
        <h1 className="h1-places-to-stay">300+ places to stay</h1>
        {eachSearchHome}
      </div>  
    )
  }
}

export default SearchPageIndex
