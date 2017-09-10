import React from 'react';
import Track from '../Track/Track';

class Tracklist extends React.Component {
  render(){
    return(
      <div className="TrackList">
          this.props.Tracks.map(
            function(){
              console.log()
              //<Track track={track.id} />
            }
          )
      </div>
    )
  }
}

export default Tracklist;
