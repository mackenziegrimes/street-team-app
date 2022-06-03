import React from 'react';


/*this is the beginneing of the api call(maybe revert back to using a base address and then add strings onto this.)*/
  const url ='https://accounts.spotify.com/authorize/'
  const clientID = 'e3d73c4d578b49f185a95fb5dbb09385'
  const url1 = 'https://accounts.spotify.com/authorize?client_id='+ clientID + '&response_type=code&redirect_uri=https%3A%2F%2Ff1bf79aaf3f3461a991df7b204943be0.vfs.cloud9.us-west-2.amazonaws.com%2Fcallback%2F&scope=user-read-private%20user-read-email&state=alfalfa111333'

// https://accounts.spotify.com/authorize?client_id=e3d73c4d578b49f185a95fb5dbb09385&response_type=code&redirect_uri=https%3A%2F%2Ff1bf79aaf3f3461a991df7b204943be0.vfs.cloud9.us-west-2.amazonaws.com%2Fcallback%2F&scope=user-read-private%20user-read-email&state=alfalfa111333


function cardSpotifyFollowArtist() {
  return (
    <div>
      <h1>Following the artist Page</h1>
    </div>
  )
}

export default SpotifyFollowArtist
