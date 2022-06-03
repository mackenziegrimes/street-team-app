import React from 'react';
import axios from 'axios';

  const baseURL ='https://accounts.spotify.com/authorize';
  const clientID = 'e3d73c4d578b49f185a95fb5dbb09385';
  const redirect_uri = 'https:%2F%2Ff1bf79aaf3f3461a991df7b204943be0.vfs.cloud9.us-west-2.amazonaws.com%2Fspotify-save-song';
  const url = baseURL + '?client_id='+ clientID + '&redirect_uri=' + redirect_uri + '&scope=user-follow-modify%20user-library-modify&response_type=token&state=alfalfa111333';
  let content = null;
  //TODO: The track id needs to be pulled in from somewhere else
  const TrackID = "6bN5CoWlycVchylHNV706m";
function SpotifySaveSong() {
   
   const search = window.location.href;
   const a = search.search("=");
   const first = search.substr(a);
   const b = first.search("&token_type");
   const token1 = first.substr(1,(b-1));
    if (token1) {
      //if token is not null then take the token and call the spotify api for following the artist.
        SpotifyAPISaveSongCall(token1);
        SpotifyRedirectToContest();
    } else {
        //if there is no token then redirect to spotify api to get token
        SpotifyRedirectBack();
    }
  return (
    <div>
      <div>
        <p></p>
      </div>
    </div>
  )
}
   
  async function SpotifyAPISaveSongCall(token1) {
    console.log(token1)
    axios({
      url: "https://api.spotify.com/v1/me/tracks?ids=" + TrackID,
      method: 'put',
      headers: { Accept: "application/json",
                Authorization: "Bearer " + token1,
                "Content-Type": "application/json",
                }
    })
      .then(res => {
        console.log(`Axios Call completed`)
        });
  }
  
  
  function SpotifyRedirectBack() {
      window.location.href = url;
    
  }
  function SpotifyRedirectToContest() {
    
      const search1 = window.location.href;
      const a1 = search1.search("#");
      const first1 = search1.substr(a1);
      window.location.href = "https://f1bf79aaf3f3461a991df7b204943be0.vfs.cloud9.us-west-2.amazonaws.com/contest/"+first1;
    
  }


export default SpotifySaveSong