import React from 'react';
import Tracklist from '../Tracklist/Tracklist'

class SearchResults extends React.Component {
  render(){
    console.log(this.props)
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <Tracklist tracks={this.props.searchResults} onAdd={this.props.onAdd}/>
      </div>
    )
  }
}

export default SearchResults;
