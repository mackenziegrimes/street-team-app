// import React from "react";
// import { FaPlay } from "react-icons/fa";
// import { IconContext } from "react-icons";
// import Text from "./Text";
// import axios from 'axios';

// const baseURL ='https://accounts.spotify.com/authorize';
//   const clientID = 'e3d73c4d578b49f185a95fb5dbb09385';
//   const redirect_uri = 'https:%2F%2Ff1bf79aaf3f3461a991df7b204943be0.vfs.cloud9.us-west-2.amazonaws.com%2F';
//   const url1 = baseURL + '?client_id='+ clientID + '&redirect_uri=' + redirect_uri + '&scope=user-follow-modify%20user-library-modify%20user-read-recently-played&response_type=token&state=alfalfa111333';
//   const ArtistID = "74ASZWbe4lXaubB36ztrGX";
//   let content = null;
//   const getJson = null;
//     //TODO: This only need to be called if the spotify play button is selected.(Probably the next task)
// setInterval(() => {
//     console.log('Interval triggered');
//     const search = window.location.href;
//   const a = search.search("=");
//   const first = search.substr(a);
//   const b = first.search("&token_type");
//   const token1 = first.substr(1,(b-1));
//   //TODO: if token is not null then take the token and call the spotify api for following the artist.
//     if (token1) {
//         SpotifyRecentlyPlayedCall(token1);
//         //Don't need the below line, becuase it is already returning correctly.
//         //SpotifyRedirectToContest();
//     } else {
//         SpotifyRedirect();
//     }
//     }, 10000);

// function SpotifyPlayBox() {
//     //TODO: We don't want any of the below running first.
//     const search = window.location.href;
//   const a = search.search("=");
//   const first = search.substr(a);
//   const b = first.search("&token_type");
//   const token1 = first.substr(1,(b-1));
//     if (token1) {
//       //block to have the token available to all the api calls
        
        
//     } else {
//         //if there is no token then redirect to spotify api to get token
        
//         //SpotifyRedirect();
//     }
    
//     return(
        
//             <div>
//                 <div class="spotify-play-full-container">
//                     <div class="spotify-triangle-up"> </div> 
//                 </div>
//                 <div class="spotify-play-container">
//                 </div>
//                     <div class="spotify-play-box">
//                         <div class="spotify-top-text-container">
//                             <div class="spotify-top-left-text-box"> <p> <Text color="hsl(0, 0%, 80%, 1)"> Play <Text weight="bold"> 3x </Text> a day </Text> </p>  </div>
//                             <div class="spotify-top-right-text-box"> <p> <Text color="hsl(0, 0%, 80%, 1)"> <Text weight="bold"> +20 </Text> each &nbsp; <span class = "spotify-vertical-line"> </span> &nbsp; &nbsp; </Text> </p> 
                            
//                             <IconContext.Provider value={{ color: "hsla(141, 74%, 42%, 1)", className: "react-icons" }}>
//                             <FaPlay />
//                             </IconContext.Provider>
//                             <p> &nbsp; <Text color="hsl(0, 0%, 80%, 1)"> <Text weight="bold"> 24 </Text>plays left </Text> </p> </div>
//                         </div>
//                         <div class="spotify-player"> 
//                             <iframe 
//                                 src="https://open.spotify.com/embed/artist/0jXaeFozic6yOdJRGuUcrR" 
//                                 width="100%" 
//                                 height="100%" 
//                                 frameborder="0" 
//                                 allowtransparency="true" 
//                                 allow="encrypted-media">
//                             </iframe>
//                         </div>
//                     </div>
//             </div>
//         )
// }
//  async function SpotifyRecentlyPlayedCall(token1) {
//      //TODO: we are going to need to get the token to be passed here after the spotify login is called.
//      //TODO: we could get all the songs and then get the longest song and then calculate from there.
     
//     console.log(token1);
//     axios({
//       url: "https://api.spotify.com/v1/me/player/recently-played?limit=1",
//       method: 'get',
//       headers: { Accept: "application/json",
//                 Authorization: "Bearer " + token1,
//                 "Content-Type": "application/json",
//                 }
//     })
//       .then(response => {
//           //TODO: Probably hold this track id for later. use against other trackIDs and also could pull more than a few and test against each other.
//           console.log(response.data.items);
//           console.log("This is the track ID: " + response.data.items[0].track.id);
//           console.log("This is the Artist ID: " + response.data.items[0].track.artists[0].id);
//           //TODO: Maybe if the artist id is the same and the last listened to time was in between the api calls.(they could still listen to the same songs, but I think this might work as long as that is true)
//             alert("pass");
//         });
//   }
//     function SpotifyRedirect() {
//       window.location.href = url1;
    
//   }
//   function SpotifyRedirectToContest() {
//       window.location.href = "https://f1bf79aaf3f3461a991df7b204943be0.vfs.cloud9.us-west-2.amazonaws.com/";
    
//   }

// export default SpotifyPlayBox