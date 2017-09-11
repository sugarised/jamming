import React from 'react';
class Track extends React.Component {
  constructor(props){
    super(props);
    this.addTrack = this.addTrack.bind(this);
  }
  renderAction() {
   //if(isRemoval){
  //   return '<a className="Track-action" onClick={this.removeTrack}>-</a>';
   //} else {
  //   return '<a className="Track-action" onClick={this.addTrack}>+</a>'
//    }
  }
  addTrack() {
    this.props.onAdd = this.props.track;
  }
  onRemove(){
    this.props.onRemove = this.props.track;
  }
  render() {
    return(
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist}</p>
          <p>{this.props.track.album}</p>
        </div>
      </div>
    )
  }
}

export default Track;
