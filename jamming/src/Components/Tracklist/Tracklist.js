import React from 'react';
import './Tracklist.css'
import Track from '../Track/Track';

class Tracklist extends React.Component {
  render(){
    console.log(this.props.tracks)
    return(
      <div className="TrackList">
        {this.props.tracks.map(track => {
          return <Track
          key={track.id}
          onAdd={this.props.onAdd}
          isRemoval={this.props.isRemoval}
          track={track}
          onremove={this.props.onRemove}/>
        })}
      </div>
    )
  }
}

export default Tracklist;
