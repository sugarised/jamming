import React from 'react';

const cliId ='5cfabe3bbb9143d98ef520a306518cc4';
const redirectUri = 'http://localhost:3000/';
const token = '';

Spotify = {
  getAccessToken() {
    if(token){
      return token;
    } else {
      //if access token not set, check url to see if obtained

      //parse url and get token -window.location.href and .match() /access_token=([^&]*)/
      //parse to get expiration /expires_in=([^&]*)/
      const accessToken = window.location.href.match(/access_token=([^&]*)/)
      const expiration = window.location.href.match(/expires_in=([^&]*)/)

    //clear params from url
    window.setTimeout(() => accessToken = '', expiration * 1000);
    window.history.pushState('Access Token', null, '/');

    //redirect users using
    window.location.href = 'https://accounts.spotify.com/authorize?client_id=' + cliId  + '&response_type=token&scope=playlist-modify-public&redirect_uri='+ redirectUri
  }
  },
  savePlaylist(playlistName, tracks){
    if(playlistName && tracks){
      let accessToken;
    } else {
      return
    }
  }
  search(searchTerm){
    //returns a promise which will resolve to be a list of tracks
    fetch('https://api.spotify.com/v1/search?type=track&q=+'TERM, {
      headers: {Authorization: `Bearer ${accessToken}`}
    }).then(
      response => {
        if(response.ok){
          return response.json();
        }
        throw new Error('Request Failed');
      }, networkError => {
        console.log(networkError.message)
      }
    ).then(jsonResponse =>{
      if(jsonResponse.length < 1){
        return [];
      }else {
        jsonResponse.map(function(item){

        })
      }

    })
  }
}

export default Spotify;
