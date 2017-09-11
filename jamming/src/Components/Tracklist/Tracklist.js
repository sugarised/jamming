import React from 'react';
import Track from '../Track/Track';

class Tracklist extends React.Component {
  render(){
    console.log(this.props.tracks)
    return(
      <div className="TrackList">
        {this.props.tracks.map(track => {
          return <Track onAdd={this.props.onAdd} track={track} onremove={this.props.onRemove}/>
        })}
      </div>
    )
  }
}

export default Tracklist;
