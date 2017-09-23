
const cliId = '5cfabe3bbb9143d98ef520a306518cc4'; // my cli Id.
const redirectUri = 'http://localhost:3000/'; // Have to add this to your accepted Spotify redirect URIs on the Spotify API.

let access;

const Spotify = {
  getAccessToken() {
    if (access) {
      return access;
    }
    //redirect the user
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    //if the accesstoken exists and the expiration exists.
    if (accessTokenMatch && expiresInMatch) {
      access = accessTokenMatch[1];
      const expires = Number(expiresInMatch[1]);
      window.setTimeout(() => access = '', expires * 1000);
      window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
      return access;
    } else {
      const accessUrl = "https://accounts.spotify.com/authorize?client_id=" + cliId + "&response_type=token&scope=playlist-modify-public&redirect_uri=" + redirectUri;
      window.location = accessUrl;
    }
  },

  search(searchTerm) {
    const access = Spotify.getAccessToken();
    return fetch("https://api.spotify.com/v1/search?type=track&q=" + searchTerm, {
      headers: {
        Authorization: `Bearer ${access}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (!jsonResponse.tracks) {
        return [];
      }
      console.log(jsonResponse.tracks.items);
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri,
        preview:track.preview_url,
        art: track.album.images[0].url
      }));
    });
  },

  savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) {
      return;
    }

    const access = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${access}` };
    let userId;

    return fetch('https://api.spotify.com/v1/me', {headers: headers}
    ).then(response => response.json()
    ).then(jsonResponse => {
      userId = jsonResponse.id;
      return fetch("https://api.spotify.com/v1/users/" + userId + "/playlists", {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({name: name})
      }).then(response => response.json()
      ).then(jsonResponse => {
        const playlistId = jsonResponse.id;
        return fetch("https://api.spotify.com/v1/users/"+userId + "/playlists/"+ playlistId + "/tracks", {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({uris: trackUris})
        });
      });
    });
  }
};

export default Spotify;
