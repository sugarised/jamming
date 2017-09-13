// eslint-disable-next-line
import React from 'react';

const cliId ='5cfabe3bbb9143d98ef520a306518cc4';
const redirectUri = 'http://localhost:3000/';
let token = '';

const Spotify = {
  getAccessToken() {
    if(token){
      return token;
    }
    //if access token not set, check url to see if obtained
    //parse url and get token -window.location.href and .match() /access_token=([^&]*)/
    //parse to get expiration /expires_in=([^&]*)/
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
    const expirationMatch = window.location.href.match(/expires_in=([^&]*)/)
    if(accessTokenMatch && expirationMatch){
      //if accessTokenMatch and expirationMatch exist
      token = accessTokenMatch[1];
      //set the token to be the received one.
      const expiresIn = Number(expirationMatch[1]);
      //set the expirationMatch
      window.setTimeout(() => token = '', expiresIn * 1000);
      //clear url
      window.history.pushState('Access Token', null, '/');

      return token;
    } else {
      //use what we have
      const access = 'https://accounts.spotify.com/authorize?client_id=' + cliId +'&response_type=token&scope=playlist-modify-public&redirect_uri=$' +redirectUri;
      //redirect the user
      window.location = access;
    };

  },
  savePlaylist(playlistName, tracks){
    if(!playlistName || !tracks.length){
      return;
    }
    const token = Spotify.getAccessToken();
    const headers = {
      Authorization: `Bearer ${token}`
    };
    let user;

    return fetch('https://api.spotify.com/v1/me', {headers: headers}
    ).then(response => response.json()
    ).then(jsonResponse =>{
      user = jsonResponse.id;
      return fetch(`https://api.spotify.com/v1/users/${user}/playlists`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({name: playlistName})
      }).then(jsonResponse => {
        const playlistId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${user}/playlists/${playlistId}/tracks`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({uris: tracks})
        });
      });
    });
  },
  search(searchTerm){
    const token = Spotify.getAccessToken();
    //returns a promise which will resolve to be a list of tracks
    return fetch('https://api.spotify.com/v1/search?type=track&q=+' + searchTerm, {
      headers: {
        Authorization: `Bearer ${token}`}
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
      if(!jsonResponse.tracks){
        return [];
      }
      return jsonResponse.tracks.items.map(item => ({
        id: item.id,
        name: item.name,
        artist: item.artists[0].name,
        album: item.album.name,
        uri: item.uri
      }));

    });
  }
};

export default Spotify;
