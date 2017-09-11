import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.search = this.search.bind(this);
  }
  search(){
    this.props.onSearch(this.state.term);
  }
  handleTermChange(e){
    e.preventDefault();
    this.setState({
      term: e.target.value
    })
  }
  render(){
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
        <a>SEARCH</a>
      </div>
    )
  }
}

export default SearchBar;
