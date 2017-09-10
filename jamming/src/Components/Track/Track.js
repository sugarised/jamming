import React from 'react';

export class Track extends React.Component {
  renderAction() {
//    if(isRemoval){
  //    return '<a className="Track-action">-</a>';
  //  } else {
    //  return '<a className="Track-action">+</a>'
    //}
  }
  render() {
    return(
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist}</p>
          <p>{this.props.track.album}</p>
        </div>
        renderAction();
      </div>
    )
  }
}
