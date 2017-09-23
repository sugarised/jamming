import React from 'react';
import './MusicPlayer.css';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (

        <audio id="player" src={this.props.onSend.preview} controls>
        </audio>


    )
  }
}

export default MusicPlayer;

// <div className="player">
//    <audio id="player" src={this.props.onSend.trackUri}>
//    </audio>
//      <img className="player__artwork" src={this.props.onSend.albumArt} />
//      <div className="player__main">
//        <div className="player__info">
//          <p className="player__title">Artist: <span className="player__text">{this.props.onSend.trackArtist}</span></p>
//          <p className="player__title">Track:<span className="player__text">{this.props.onSend.trackName}</span></p>
//          <p className="player__title">Album:<span className="player__text">{this.props.onSend.albumName}</span></p>
//          </div>
//          <div className="player__controls">
//            <div id="progress" className="player__progress">
//              <div id="progress-point" className="player__point"></div>
//            </div>
//            <div className="player__buttons">
//              <button className="player__play" id="play">
//              <span className="play-icon"></span></button>
//              <button id="pause" className="player__pause"><span className="pause-icon"></span><span className="pause-icon pause-icon--2"></span></button>
//            </div>
//          </div>
//      </div>
//    </div>

//convert to React to make player work.
//  let player= document.getElementById('player');
  // //audio player
  // let duration = 30;
  // //duration of track;
  //
  // let playBtn = document.getElementById('play');
  // let pauseBtn = document.getElementById('pause');
  // let timeline = document.getElementById('progress');
  // let point = document.getElementById('progress-point');
  // let timelineWidth = timeline.offsetWidth - point.offsetWidth;
  //
  // playBtn.addEventListener("click", play);
  // pauseBtn.addEventListener("click", pause);
  // player.addEventListener("timeupdate", timeUpdate, false);
  //
  // timeline.addEventListener("click", function(e){
  //   movePoint(e);
  //   player.currentTime = duration * clickPercent(e);
  // }, false);
  //
  // function clickPercent(e){
  //   return (e.clientX - getPosition(timeline)) /timelineWidth
  // }
  //
  // point.addEventListener('mouseDown', mouseDown, false);
  // window.addEventListener('mouseUp', mouseUp, false);
  // var onPoint = false;
  //
  // function mouseDown(){
  //   onPoint = true;
  //   window.addEventListener('mousemove', movePoint, true);
  //
  //   player.removeEventListener('timeupdate', timeUpdate, false);
  // }
  //
  // function mouseUp(e){
  //   if(onPoint) {
  //     movePoint(e);
  //
  //     window.removeEventListener('mousemove', movePoint, true);
  //     player.currentTime = duration * clickPercent(e);
  //     player.addEventListener('timeupdate', timeUpdate, false)
  //   }
  //   onPoint = false;
  // }
  //
  // function movePoint(e){
  //   var newMgLeft = e.clientX - getPosition(timeline);
  //
  //   if(newMgLeft >= 0 && newMgLeft <= timelineWidth) {
  //     point.style.marginLeft = newMgLeft + "px";
  //   }
  //
  //   if(newMgLeft < 0){
  //     point.style.marginLeft = "0px;";
  //   }
  //
  //   if(newMgLeft > timelineWidth) {
  //     point.style.marginLeft = timelineWidth + 'px';
  //   }
  // }
  //
  // function timeUpdate() {
  //     let playPercent = timelineWidth * (player.currentTime / duration);
  //   console.log(duration)
  //     point.style.marginLeft = playPercent + "px";
  // }
  //
  // function play(){
  //   player.play();
  // }
  //
  // function pause(){
  //   player.pause();
  // }
  //
  // player.addEventListener("canplaythrough", function(){
  //   duration = music.duration;
  // }, false);
  //
  // function getPosition(el){
  //   return el.getBoundingClientRect().left;
  // }
