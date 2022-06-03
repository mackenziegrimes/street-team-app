import React, { useState, useEffect } from 'react';

import { FaPlay } from "react-icons/fa";
import { IconContext } from "react-icons";
import Text from "./Text";
import axios from 'axios';

const baseURL ='https://accounts.spotify.com/authorize';
const clientID = 'e3d73c4d578b49f185a95fb5dbb09385';
//TODO: Need to update the redirect url to make sure that the right url is queried.
const redirect_uri = 'https:%2F%2Ff1bf79aaf3f3461a991df7b204943be0.vfs.cloud9.us-west-2.amazonaws.com%2F';
const url1 = baseURL + '?client_id='+ clientID + '&redirect_uri=' + redirect_uri + '&scope=user-follow-modify%20user-library-modify%20user-read-recently-played&response_type=token&state=alfalfa111333';
const ArtistID = "74ASZWbe4lXaubB36ztrGX";
let content = null;
const getJson = null;
const fetch = require("node-fetch");
const spotifyToken = "";
//TODO: Can make a math function to make sure that the person listens to the song all the way through.

function SpotifyPlayBox(parsedSpotifyPlayUrl) {
//   const search = window.location.href;
//   const a = search.search("=");
//   const first = search.substr(a);
//   const b = first.search("&token_type");
//   const spotifyToken = first.substr(1,(b-1));
   
    // if (spotifyToken) {
      
    //   SpotifyHook(spotifyToken);
        
        
    // } else {
    
    //     SpotifyRedirect();
        
    // }
    //SpotifyHook(spotifyToken);
//     console.log(parsedSpotifyPlayUrl)
//  console.log("parsed Spotify Play")
    
    const embedUrl = "https://open.spotify.com/embed/artist/" + parsedSpotifyPlayUrl;
    
    return(
            <div>
                <div className="spotify-play-full-container">
                    <div className="spotify-triangle-up"> </div> 
                </div>
                <div className="spotify-play-container">
                    <div className="spotify-play-box">
                        <div className="spotify-top-text-container">
                            <div className="spotify-top-left-text-box"> <p> <Text color="hsl(0, 0%, 80%, 1)"> Play <Text weight="bold"> 1x </Text> a day </Text> </p>  </div>
                            <div className="spotify-top-right-text-box"> <p> <Text color="hsl(0, 0%, 80%, 1)"> <Text weight="bold"> +20 </Text> each &nbsp; <span className = "spotify-vertical-line"> </span> &nbsp; &nbsp; </Text> </p> 
                            
                            <IconContext.Provider value={{ color: "hsla(141, 74%, 42%, 1)", className: "react-icons" }}>
                            <FaPlay />
                            </IconContext.Provider>
                            <p> &nbsp; <Text color="hsl(0, 0%, 80%, 1)"> <Text weight="bold"> 10 </Text>plays left </Text> </p> </div>
                        </div>
                        <div className="spotify-player"> 
                            <iframe 
                                src={"https://open.spotify.com/embed/artist/" + parsedSpotifyPlayUrl.parsedSpotifyPlayUrl} 
                                width="100%" 
                                height="100%" 
                                frameborder="0" 
                                allowtransparency="true" 
                                allow="encrypted-media">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        )
};







// //This will be the new and improved of what we need for API calling for the player's actual listening

//  async function SpotifyRecentlyPlayedCall(spotifyToken) {
//     axios({
//       url: "https://api.spotify.com/v1/me/player/recently-played?limit=1",
//       method: 'get',
//       headers: { Accept: "application/json",
//                 Authorization: "Bearer " + spotifyToken,
//                 "Content-Type": "application/json",
//                 }
//     })
//       .then(response => {
//           console.log(response.data.items);
//           console.log("This is the track ID: " + response.data.items[0].track.id);
//           console.log("This is the track ID: " + response.data.items[1].track.id);
//           console.log("This is the Artist ID: " + response.data.items[0].track.artists[0].id);

//         });
//   };
//   function URLSearchForToken(){
//       const search = window.location.href;
//         const a = search.search("=");
//         const first = search.substr(a);
//         const b = first.search("&token_type");
//         const spotifyToken = first.substr(1,(b-1));
//   };
//     function SpotifyRedirect() {
//       window.location.href = url1;
    
//   };
//   function SpotifyRedirectToContest() {
//       window.location.href = "https://f1bf79aaf3f3461a991df7b204943be0.vfs.cloud9.us-west-2.amazonaws.com/contest";
    
//   };
//   //TODO: Need to incrment the points box if the user listens to a song, effectively on the same playlist,
//   //and with the same artist ID,(For now I feel that if we do the artist ID is the same and the old track ID is different.)
//   //
//   function SpotifyHook(spotifyToken){
//     const [seconds, setSeconds] = useState(0);
//         useEffect(() => {
//           const interval = setInterval(() => {
//             setSeconds(seconds => seconds + 1);
//               console.log('Interval triggered');
//               SpotifyRecentlyPlayedCall(spotifyToken);
//           }, 10000);
//     return () => clearInterval(interval);
//     }, []);
//   };
  
  






export default SpotifyPlayBox;