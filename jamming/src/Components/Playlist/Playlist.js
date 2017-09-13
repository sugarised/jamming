import React from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist'

class Playlist extends React.Component {
  constructor(props){
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange(e){
    this.props.onNameChange(e.target.value);
  }
  render() {
    console.log(this.props)
    return (
      <div className="Playlist">
        <input defaultValue="{'New Playlist'}"
        onChange={this.handleNameChange}/>
        <Tracklist tracks={this.props.playlistTracks}
        isRemoval={true}
        onRemove={this.props.onRemove}/>
        <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    )
  }
}

export default Playlist;
