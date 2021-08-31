import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
// import { SpotifyApiContext } from 'react-spotify-api';

export const SpotifyAuthorizationScript = input => {

// Spotify App credentials:
//TODO: this is where the redirect uri is substantiated
  //It would be great to be able to open the iframe of the spotify facebook page and then route based on that.
    var clientId = "e3d73c4d578b49f185a95fb5dbb09385";
    var clientSecret = "cc6e042fe3d74f7caea541ede2070525";
    var redirectUri = "https://f1bf79aaf3f3461a991df7b204943be0.vfs.cloud9.us-west-2.amazonaws.com/secure/contest/";

var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken('myAccessToken');
spotifyApi.setRefreshToken('myRefreshToken');
spotifyApi.setRedirectURI('http://www.example.com/test-callback');
spotifyApi.setClientId('myOwnClientId');
spotifyApi.setClientSecret('someSuperSecretString');

// Set all credentials at the same time
spotifyApi.setCredentials({
  accessToken: 'myAccessToken',
  refreshToken: 'myRefreshToken',
  redirectUri: 'http://www.example.com/test-callback',
  'clientId ': 'myClientId',
  clientSecret: 'myClientSecret'
});

// Get the credentials one by one
console.log('The access token is ' + spotifyApi.getAccessToken());
console.log('The refresh token is ' + spotifyApi.getRefreshToken());
console.log('The redirectURI is ' + spotifyApi.getRedirectURI());
console.log('The client ID is ' + spotifyApi.getClientId());
console.log('The client secret is ' + spotifyApi.getClientSecret());

// Get all credentials
console.log('The credentials are ' + spotifyApi.getCredentials());

// Reset the credentials
spotifyApi.resetAccessToken();
spotifyApi.resetRefreshToken();
spotifyApi.resetRedirectURI();
spotifyApi.resetClientId();
spotifyApi.resetClientSecret();
spotifyApi.resetCode();

// Reset all credentials at the same time
spotifyApi.resetCredentials();
// https://accounts.spotify.com/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=token&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice&show_dialog=true
// console.log(authorizeURL);
};

// export default SpotifyAuthorizationScript;