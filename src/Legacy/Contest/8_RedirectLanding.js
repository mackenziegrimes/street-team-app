
import React from 'react';
import axios from 'axios';
import SessionVariables from '../functional-tests/SessionVariables';
import { useLocation } from "@reach/router"

 function RedirectLanding() {
   
  const search = window.location.href;
  const a = search.search("=");
  const first = search.substr(a);
  const b = first.search("&token_type");
  const spotifyToken = first.substr(1,(b-1));
   
//   const useQuery = (queryParam) => {
//     const search = new URLSearchParams(useLocation().search);
//     return search.get(queryParam);
//   };
  
//   const spotifyToken = useQuery("access_token");
  
  
   
    if (spotifyToken) {
        SessionVariables.setToken(spotifyToken);
        SpotifyRedirectToContest();
        //if token is not null then take the token and call the spotify api for following the artist.
        
    } else {
        //if there is no token then redirect back to Contest Page
        SpotifyRedirectToContest();
    }
  return (
    <div>
    </div>
  )
}

export default RedirectLanding
  
  function SpotifyRedirectToContest() {
      
      let sessionContestId = SessionVariables.getSessionContestId();
      
      let location  = window.location.hostname
      
      window.location.href = sessionContestId;
        
  }


