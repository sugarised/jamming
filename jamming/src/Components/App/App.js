import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state.SearchResults = {
      SearchResults: [{
        name: ''
      }, {
        artist: ''
      }, {
        album: ''
      }]
    }
    this.state.playlistName = 'Playlist 1';
    this.state.playlistTracks = [
      {
        name: 'Twin Skeletons',
        artist: 'Fall Out Boy',
        album: 'American/Psycho'
      },
      {
        name: 'Victorious',
        artist: 'Panic! At the Disco',
        album: 'Death of a Bachelor'
      },
      {
        name: 'Still into You',
        artist: 'Paramore',
        album: 'Paramore'
      }
    ]
    this.addTrack = this.addTrack.binds(this);
  }
  addTrack(track){
    //Use the track's id property to check if the current song is in the playlistTracks state.

    //If the id is new, add the song to the end of the playlist.

    //Set the new state of the playlist
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          // Add a SearchBar component
          <div className="App-playlist">
            //<SearchResults SearchResults={this.state.SearchResults} />
            //<Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
