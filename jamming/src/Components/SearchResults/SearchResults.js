import React from 'react';
import Tracklist from '../Tracklist/Tracklist'

class SearchResults extends React.Component {
  render(){
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <Tracklist tracks={this.props.SearchResults}/>
      </div>
    )
  }
}

export default SearchResults;
