// import '.../App.css';


import { Link } from '@reach/router';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

// import Background from './Background';
import Countdown from '../Countdown';
import ReactDeadline from '../ReactDeadline';
import PointsBox from "../PointsBox"
import ActionPointsButton from "../ActionPointsButton"
import ActionPointsButtonTyped from "../ActionPointsButtonTyped"
import EmailForm from "../EmailForm";
import ProgressBox from "../ProgressBox"
import SpotifyPlayBox from "../SpotifyPlayBox"


import { IoIosCheckbox } from "react-icons/io";
import { FaSpotify } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdLibraryMusic } from "react-icons/md";

import { SpotifyAuthorizationScript } from '../SpotifyAuthorizationScript';
import SpotifyWebApi from 'spotify-web-api-node';

import { gql, useMutation } from '@apollo/react-hooks';
import { updateEnduser,updateContestSubscription } from '../../graphql/mutations';

import axios from 'axios';
import SessionVariables from "../../functional-tests/SessionVariables";

//TODO: Pass Artist ID
//TODO: Pass Track ID
//TODO: Pass Playlist or Album ID

const ArtistID = "74ASZWbe4lXaubB36ztrGX";
const TrackID = "5zYIwD8u865sLmcDtORhEn";

const baseURL ='https://accounts.spotify.com/authorize';
const clientID = 'e3d73c4d578b49f185a95fb5dbb09385';
//TODO: Need to update the redirect url to make sure that the right url is queried.
const redirect_uri = 'https:%2F%2Ff1bf79aaf3f3461a991df7b204943be0.vfs.cloud9.us-west-2.amazonaws.com%2F';
const url = baseURL + '?client_id='+ clientID + '&redirect_uri=' + redirect_uri + '&scope=user-follow-modify%20user-library-modify%20user-read-recently-played&response_type=token&state=alfalfa111333';
let content = null;
const getJson = null;
const fetch = require("node-fetch");
//let spotifyToken = null;


let spotifyDailyPlayCount = 0;
let spotifyPlayCountSetter = 0;

let pointSetter = 0;
let totalPoints = 0;

function ContestPage1Card({contestId,completedSpotifyPlay,completedSpotifyFollow,completedSpotifySave,completedStreetTeamJoin,userName,totalPoints,contestHeadline,contestDescription,buttonText,artistID,contestDeadline,contestImg,streetTeamUrl,spotifyPlayUrl,spotifyFollowArtistUrl,spotifyFollowPlaylistUrl,spotifySaveUrl,actionSpotifyPlay,actionSpotifyFollow,actionSpotifySave,actionStreetTeam,enduserContestID,referralEnduserId,enduserFullName}) {

    
const linkUrl = "/secure/referral/"+contestId;
    

    
//Variables that need to be parsed:
//spotifyFollowArtistUrl
//spotifyPlayUrl
//spotifyFollowPlaylistUrl
//spotifySaveUrl


// addHttpPrefix

  // useEffect(() => {
    
  // }, []); // <-- empty array means 'run once'

function addHttpPrefix(){
  
}  
  
contestHeadline= (contestHeadline=="") ? "Win a Baby" : contestHeadline;
contestDescription= (contestDescription=="") ? "Enter for a chance to win a happy, healthy baby girl!" : contestDescription;
buttonText= (buttonText=="") ? "Enter to Win >" : buttonText;
contestDeadline= (contestDeadline=="") ? "4/13/2021" : contestDeadline;
contestImg= (contestImg=="") ? "../baby.png" : contestImg;
  
  const [showSpotifyBox, setDisplay] = useState(false);
  // const [completedSpotifyPlay, setCompletedSpotifyPlay] = useState(false);
  // const [completedSpotifyFollow, setCompletedSpotifyFollow] = useState(false);
  // const [completedSpotifySave, setCompletedSpotifySave] = useState(false);
  // const [completedStreetTeamJoin, setcompletedStreetTeamJoin] = useState(false);
  
  const spotifyPlayButton = actionSpotifyPlay ? null : "hide";
  const spotifyFollowButton = actionSpotifyFollow ? null : "hide";
  const spotifySaveButton = actionSpotifySave ? null : "hide";
  const streetTeamButton = actionStreetTeam ? null : "hide";

    // old URL parameters
    //ReactSession.setStoreType("localStorage");
        
    const search1 = window.location.href;
    
    //const a1 = search1.search("=");
    //const first1 = search1.substr(a1);
    //const b = first1.search("&token_type");
    //We aren't going to need this code at all.
    //const spotifyToken = first1.substr(1,(b-1));
    const spotifyToken = SessionVariables.getToken();
    console.log(spotifyToken);
    
    
    // Michael playing around with Session Variables
    // SessionVariables.setCoolId(contestId);
    // const michaelIsCoolId = SessionVariables.getCoolId();
    
    
    const a2 =search1.search("/contest/");
    const sessionContestIdTemp = search1.substr(a2+9);
    
    SessionVariables.setSessionContestId(sessionContestIdTemp);
    console.log(SessionVariables.getSessionContestId());
  
    // const urlParams = new URLSearchParams(queryString);
    // const spotifyToken = urlParams.get('access_token')

    const parsedSpotifySaveUrl = spotifySaveUrl.substring(spotifySaveUrl.lastIndexOf('/')+1);
    const parsedSpotifyFollowArtistUrl = spotifyFollowArtistUrl.substring(spotifyFollowArtistUrl.lastIndexOf('/')+1);
    const parsedSpotifyFollowPlaylistUrl = spotifyFollowPlaylistUrl.substring(spotifyFollowPlaylistUrl.lastIndexOf('/')+1);
    const parsedSpotifyPlayUrl = spotifyPlayUrl.substring(spotifyPlayUrl.lastIndexOf('/')+1);


    // console.log(parsedSpotifySaveUrl);
    // console.log("parsedSpotifySaveUrl");
    
  //Ooo the below is the database action.
const [updateEnduserData] = useMutation(gql(updateEnduser))
const [updateContestSubscriptionData] = useMutation(gql(updateContestSubscription))

  //// HANDLE ACTION FUNCTIONS:

function incrementPoints(pointSetter){
  totalPoints = (totalPoints + pointSetter);
}

console.log("Spotify Daily Playcount: ");
console.log(spotifyDailyPlayCount);

console.log("Enduser Contest ID: ");
console.log(enduserContestID);

console.log(process.env);


function incrementSpotifyPlayCount(spotifyPlayCountSetter){
  if (spotifyDailyPlayCount<10) {
    console.log(spotifyDailyPlayCount);
    console.log("updated Spotify Daily Play Count");
    incrementPoints(20);
    spotifyDailyPlayCount = (spotifyDailyPlayCount + spotifyPlayCountSetter);
    updateContestSubscriptionData({variables:{input :{
        id:enduserContestID,
        enduserPoints:totalPoints,
        // spotifyDailyPlayCount:spotifyDailyPlayCount,
      }}})
  } else {
    console.log("completed the Daily Play Count!")
    completeSpotifyPlay();
  }}
  
function playSpotifyTrack0 (){
  if (!spotifyTrackCompleted0) {
    setSpotifyTrackCompleted0(true);
    incrementSpotifyPlayCount(1);
    console.log("Listened to Track 1!")
  } else return null
}

function playSpotifyTrack1 (){
  if (!spotifyTrackCompleted1) {
    setSpotifyTrackCompleted1(true);
    incrementSpotifyPlayCount(1);
    console.log("Listened to Track 1!")
  } else return null
}

function playSpotifyTrack2 (){
  if (!spotifyTrackCompleted2) {
    setSpotifyTrackCompleted2(true);
    incrementSpotifyPlayCount(1);
    console.log("Listened to Track 2!")
  } else return null
}

function playSpotifyTrack3 (){
  if (!spotifyTrackCompleted3) {
    setSpotifyTrackCompleted3(true);
    incrementSpotifyPlayCount(1);
    console.log("Listened to Track 3!")
  } else return null
}

function playSpotifyTrack4 (){
  if (!spotifyTrackCompleted4) {
    setSpotifyTrackCompleted4(true);
    incrementSpotifyPlayCount(1);
    console.log("Listened to Track 4!")
  } else return null
}

function playSpotifyTrack5 (){
  if (!spotifyTrackCompleted5) {
    setSpotifyTrackCompleted5(true);
    incrementSpotifyPlayCount(1);
    console.log("Listened to Track 5!")
  } else return null
}

function playSpotifyTrack6 (){
  if (!spotifyTrackCompleted6) {
    setSpotifyTrackCompleted6(true);
    incrementSpotifyPlayCount(1);
    console.log("Listened to Track 6!")
  } else return null
}

function playSpotifyTrack7 (){
  if (!spotifyTrackCompleted7) {
    setSpotifyTrackCompleted7(true);
    incrementSpotifyPlayCount(1);
    console.log("Listened to Track 7!")
  } else return null
}

function playSpotifyTrack8 (){
  if (!spotifyTrackCompleted8) {
    setSpotifyTrackCompleted8(true);
    incrementSpotifyPlayCount(1);
    console.log("Listened to Track 8!")
  } else return null
}

function playSpotifyTrack9 (){
  if (!spotifyTrackCompleted9) {
    setSpotifyTrackCompleted9(true);
    incrementSpotifyPlayCount(1);
    console.log("Listened to Track 9!")
  } else return null
}

// SPOTIFY Authorization:
  //TODO: this below code is the issue and the issue that we cant get back to what we need. Becuase of the new api call.
  //TODO: Its also probably why the code isnt actually creating an api call where we need it to.
  //TODO: see if production is inside the node thing in process. yeah.
  const authorizeURL = "https://accounts.spotify.com/authorize?client_id=e3d73c4d578b49f185a95fb5dbb09385&response_type=token&redirect_uri=https://https://app.modern-musician.com/secure/contest/&scope=user-read-private%20user-read-email%20user-follow-modify%20user-library-modify%20user-read-recently-played%20user-read-playback-state%20user-modify-playback-state&state=modernmusician&show_dialog=true"

// Get spotifyToken from URL
    const newUrl = window.location.href;
    const urlParams = new URLSearchParams(newUrl);
    // const spotifyToken = urlParams.get('access_token')
    // const spotifyToken = newUrl.hash;
    
    // console.log(spotifyToken)
    // console.log("^^ Spotify Token")

// Spotify Web API Calls:

var credentials = {
  clientId: 'e3d73c4d578b49f185a95fb5dbb09385',
  clientSecret: 'cc6e042fe3d74f7caea541ede2070525',
  accessToken: spotifyToken
};

var spotifyApi = new SpotifyWebApi(credentials);


// Spotify Play Functions:

const [spotifyEmbeddedTracks, setSpotifyEmbeddedTracks] = useState(null);
const [spotifyRecentlyPlayedTracks, setSpotifyRecentlyPlayedTracks] = useState(null);
// const [RecentlyPlayedTracks, setRecentlyPlayedTracks] = useState(null);

const objSpotifyEmbeddedTracks = {...spotifyEmbeddedTracks};
const objSpotifyRecentlyPlayedTracks = {...spotifyRecentlyPlayedTracks};

// console.log(objSpotifyRecentlyPlayedTracks);

// Cross-reference Spotify Recently Played with Track Listing

const [recentlyPlayedIds, setRecentlyPlayedIds] = useState([]);
const [embeddedTracksIds, setEmbeddedTracksIds] = useState([]);

console.log("Embedded Track Ids:");
console.log(embeddedTracksIds);

console.log("Recently Played Ids:");
console.log(recentlyPlayedIds);

const findmatchedPlayCountListing = (a1, a2) => a1.filter(v => a2.includes(v)).length;

// console.log(findmatchedPlayCountListing(embeddedTracksIds, recentlyPlayedIds));

// const matchedPlayCountListing = findmatchedPlayCountListing(embeddedTracksIds, recentlyPlayedIds);

let map = {};
embeddedTracksIds.forEach(i => map[i] = false);
recentlyPlayedIds.forEach(i => map[i] === false && (map[i] = true));
let matchedPlayCountListing = Object.keys(map).map(k => ({ id: k, match: map[k] }));

console.log("Matched Playcount Listing:");
console.log(matchedPlayCountListing);
const convertArrayToObject = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
};

// const objMatchedPlayCountListing = convertArrayToObject(matchedPlayCountListing, 'id');
// console.log("Object Matched Playcount Listing:");
// console.log(objMatchedPlayCountListing);

const [spotifyTrackCompleted0, setSpotifyTrackCompleted0] = useState(false);
const [spotifyTrackCompleted1, setSpotifyTrackCompleted1] = useState(false);
const [spotifyTrackCompleted2, setSpotifyTrackCompleted2] = useState(false);
const [spotifyTrackCompleted3, setSpotifyTrackCompleted3] = useState(false);
const [spotifyTrackCompleted4, setSpotifyTrackCompleted4] = useState(false);
const [spotifyTrackCompleted5, setSpotifyTrackCompleted5] = useState(false);
const [spotifyTrackCompleted6, setSpotifyTrackCompleted6] = useState(false);
const [spotifyTrackCompleted7, setSpotifyTrackCompleted7] = useState(false);
const [spotifyTrackCompleted8, setSpotifyTrackCompleted8] = useState(false);
const [spotifyTrackCompleted9, setSpotifyTrackCompleted9] = useState(false);

// console.log("Has this been listened to?")
// console.log(matchedPlayCountListing[0]);
// if(matchedPlayCountListing[0]){
//   console.log(matchedPlayCountListing[0].match)
  
// }

const checkMatchedPlayCount = () => {
  if(matchedPlayCountListing[0]){
  // console.log("checked the Match Count!")
  if (matchedPlayCountListing[0].match) {playSpotifyTrack0()}
  if (matchedPlayCountListing[1].match) {playSpotifyTrack1()}
  if (matchedPlayCountListing[2].match) {playSpotifyTrack2()}
  if (matchedPlayCountListing[3].match) {playSpotifyTrack3()}
  if (matchedPlayCountListing[4].match) {playSpotifyTrack4()}
  if (matchedPlayCountListing[5].match) {playSpotifyTrack5()}
  if (matchedPlayCountListing[6].match) {playSpotifyTrack6()}
  if (matchedPlayCountListing[7].match) {playSpotifyTrack7()}
  if (matchedPlayCountListing[8].match) {playSpotifyTrack8()}
  if (matchedPlayCountListing[9].match) {playSpotifyTrack9()}

  }
}

  useEffect(() => {
    if (spotifyToken) {
    spotifyApi.getArtistTopTracks(parsedSpotifyPlayUrl, 'US')
      .then(function(data) {
          console.log("Artist's Top 10 Tracks");
          data.body.tracks.forEach(tracks => console.log("Track ID: " + tracks.id + "\nName: " + tracks.name + "\nArtist: " + tracks.artists[0].name + "\nDuration(ms): " + tracks.duration_ms));
          // data.body.tracks.forEach(tracks => console.log(tracks));
          setSpotifyEmbeddedTracks(data.body.tracks);
          setEmbeddedTracksIds(data.body.tracks.map(item=> item.id));
        // console.log(data.body);
        }, function(err) {
        console.log('Something went wrong!', err);
      });
    setInterval(checkMatchedPlayCount(), 35000);
  }
  }, []); // <-- empty array means 'run once'

// console.log(spotifyEmbeddedTracks +  " << spotifyEmbeddedTracks")
// console.log(spotifyRecentlyPlayedTracks);
// console.log(objSpotifyEmbeddedTracks + " < object form");

// const recentlyPlayedIds = spotifyRecentlyPlayedTracks.map(item => item.track.id );
// console.log("Recently Played Ids")
// console.log(recentlyPlayedIds)

// HANDLE SPOTIFY BUTTONS ONCLICK
   
  
  const handleSpotifyPlay = () => {
    
    if (spotifyToken) {
    setDisplay(true);
      spotifyApi.getMyRecentlyPlayedTracks({
        limit : 10
      }).then(function(data) {
          // Output items
          console.log("Your 10 most recently played tracks are:");
          data.body.items.forEach(item => console.log("Track ID: " + item.track.id + "\nName: " + item.track.name + "\nArtist: " + item.track.artists[0].name + "\nDuration(ms): " + item.track.duration_ms));
          // data.body.items.map(item => setSpotifyRecentlyPlayedTracks(item.track.id))
          setSpotifyRecentlyPlayedTracks(data.body.items);
          setRecentlyPlayedIds(data.body.items.map(item => item.track.id ));
          checkMatchedPlayCount();
          // console.log("Was this listened to?")
          // console.log(matchedPlayCountListing[0].match)
          //TODO: 
              //if in artists top tracks and not in our array then add to the array and increment points and set the play score down one.
              //1)check if in the tracks array,
          // const RecentlyPlayedTrackMatches = data.body.items.filter(item => { let RecentlyPlayedTrackMatches1 = spotifyEmbeddedTracks.find(tracks => tracks.id == item.track.id)
          //                                 return RecentlyPlayedTrackMatches1
          //                                 });
          
          //Spotify()
          // console.log("RecentlyPlayedTrackMatches: " + JSON.stringify(RecentlyPlayedTrackMatches));
          // const spotifyRecentlyPlayedTrackIds = spotifyRecentlyPlayedTracks.find(item => item.track.id == track.id);
          // setSpotifyRecentlyPlayedTracks(data.body.items);
          
              //2)check if in our array, if not in our array
                  //can probably do the filter move again
               //RecentlyPlayedTracks.push(RecentlyPlayedTrackMatches);
              //3)add to array and increment points and subract one from play count.
              //then increment if all true
              
              
          
          //RecentlyPlayedTracks = spotifyEmbeddedTracks.tracks.find(tracks => tracks.id == data.body.items.forEach(item => item.track.id)) 
          //console.log(RecentlyPlayedTracks);
          //enduserContestInfo = enduserInfo.subscriptions.items.find(element => element.contestID == contestId)
          
          
        }, function(err) {
          console.log('Something went wrong!', err);
        });
    }
    else {
      window.open(authorizeURL)
      }
  }

  const handleSpotifyFollow = () => {
    if (spotifyToken) {
      spotifyApi.followArtists(['0jXaeFozic6yOdJRGuUcrR'])
        .then(function(data) {
          console.log('Successfully followed Artist!');
          completeSpotifyFollow()
         
          //TODO: Hold token variable in session.
        }, function(err) {
          console.log('Something went wrong!', err);
        });
      spotifyApi.followPlaylist('3vRwYfK7l3vdJCHjmmdAum',
        {
          'public' : false
        }).then(function(data) {
           console.log('Successfully followed Playlist (privately)!');
           
          //TODO: Hold token variable in session.
        }, function(err) {
          console.log('Something went wrong!', err);
        });
      } else {
      window.open(authorizeURL)
      }
    }
  
  const handleSpotifySave = () => {
    if (spotifyToken) {
    spotifyApi.addToMySavedTracks(["0RvJZiIHkhOWkiqaAZnvSD"])
      .then(function(data) {
        console.log('Successfully added track!');
        //TODO: Hold token variable in session.
        completeSpotifySave()
      }, function(err) {
        console.log('Something went wrong!', err);
      });
    } else {
    window.open(authorizeURL)
    }
  }
  
  const handleStreetTeamJoin = () => {
    completeStreetTeamJoin()
  }
  
    // if (!completedSpotifyFollow) {
    // console.log("We are getting hit");
    //   if (spotifyToken) {
    //     SpotifyFollowAPICall(spotifyToken);
    // } else {
    //     SpotifyRedirect();
    //   }
    // }
    
  //// COMPLETE ACTIONS FUNCTIONS:
  
    const completeSpotifyPlay = () => {
      if (!completedSpotifyPlay) {
        incrementPoints(100);
        updateContestSubscriptionData({variables:{input :{
          id:enduserContestID,
          enduserPoints:totalPoints,
          // spotifyDailyPlayCount:spotifyDailyPlayCount,
        }}}
        
        );
        console.log({completedSpotifySave});
      }
    }

  const completeSpotifyFollow = () => {
    if (!completedSpotifyFollow) {
      incrementPoints(50);
      updateContestSubscriptionData({variables:{input :{
        id:enduserContestID,
        enduserPoints:totalPoints,
        completeSpotifyFollow: true
      }}});
      console.log({completedSpotifyFollow});
      
  }}
  
  const completeSpotifySave = () => {
    
    if (!completedSpotifySave) {
      incrementPoints(50);
      updateContestSubscriptionData({variables:{input :{
        id:enduserContestID,
        enduserPoints:totalPoints,
        completeSpotifySave: true
      }}});
      console.log({completedSpotifySave});
      
  }}
  
    const completeStreetTeamJoin = () => {
      if (!completedStreetTeamJoin) {
        incrementPoints(100);
        updateContestSubscriptionData({variables:{input :{
          id:enduserContestID,
          enduserPoints:totalPoints,
          completeStreetTeamJoin: true
        }}});
        //because of our data structure, we need to update the referring user's points here as well
        console.log({completedStreetTeamJoin});
      }
        window.open(streetTeamUrl, '_blank');
  }
    

  //   if (!completedSpotifySave) {
      
  //     if (spotifyToken) {
        
  //       SpotifySaveAPICall(spotifyToken);
  //       incrementPoints(50);
  //   } else {
  //       setCompletedSpotifySave(false);
  //       SpotifyRedirect();
       
  //   }
        
  // }
  
  return (
    <div>
      <Card>
        <div className="headline-top margin-reset">
          <div className="flex-top-headline">
            <div className= "left-align top-left-headline">
              {contestHeadline}
            </div>
            
            <div className="top-right-countdown center">
            <ReactDeadline startDate={contestDeadline} />
            </div>
          </div>
        </div>
        
        <div> 
          <ProgressBox progressStep={3} />
        </div>
        
        <Card.Body>
          <div className="card-container-text">
            <Card.Title className="register-headline">
              <h3> Increase Your Chances of Winning </h3>
              <hr width="76%" align="left" margin-top="0" fontWeight="bold"/>
              <h4> Get to the top of the list by completing the following supportive actions </h4>
            </Card.Title>
          <div className="register-button-box">
          {/*
            Now we need to engineer the playing of the song and it returning a number that says it was played by this person,
            and the way for this to be accomplished is to have spotify go and pull recently played with the api call.
            
          */}
          
          {/*TODO: We need to implement the api calls to run as the spotify play box is beginning to start playing.*/}
            <div className={spotifyPlayButton} onClick={handleSpotifyPlay}>
              <ActionPointsButtonTyped 
                preActionText="Play on Spotify"
                postActionText="Played on Spotify"
                actionType="spotifyPlay"
                pointValue={20}
                url= {spotifyPlayUrl}
                completed={completedSpotifyPlay}
              />
            </div>
            
            
            {showSpotifyBox ? 
            <div> 
              <SpotifyPlayBox 
                parsedSpotifyPlayUrl={parsedSpotifyPlayUrl} /> 
            </div> : null}
            
            <div className={spotifyFollowButton} onClick={handleSpotifyFollow}>
              <ActionPointsButtonTyped 
                preActionText="Follow on Spotify"
                postActionText="Followed on Spotify"
                actionType="spotifyFollow"
                pointValue={50}
                url= ""//{spotifyFollowArtistUrl}
                completed={completedSpotifyFollow}
              />
            </div>
            
            <div className={spotifySaveButton} onClick={handleSpotifySave}>
              <ActionPointsButtonTyped 
                preActionText="Save on Spotify"
                postActionText="Saved on Spotify"
                actionType="spotifySave"
                pointValue={50}
                url= "https://www.facebook.com"//TODO:  we will use no url for this, becuase the call is ont he client side.
                completed={completedSpotifySave}
              />
            </div>
            
            <div className={streetTeamButton} onClick={handleStreetTeamJoin}>
              <ActionPointsButtonTyped 
                preActionText="Join Street Team"
                postActionText="Joined Street Team"
                actionType="streetTeamJoin"
                pointValue={100}
                url= {streetTeamUrl}
                completed={completedStreetTeamJoin}
              />
            </div>
          </div>
            <hr className="fade-light" />
            
          {/* TO DO: switch to unique URL routing system */}
          {/*<Link className="link-button" to={"/referral/" + contestId}>*/}
          <Link className="link-button" to={linkUrl}>
   
            <Button className="btn active btn-default card-container-button button-continue">
              {buttonText} 
            </Button>
         
          </Link>

          </div>
          <PointsBox 
          totalPoints={totalPoints} 
          includeText={true}
          enduserFullName={enduserFullName}
          totalReferrals={0}
          bonusPoints={0}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

  async function SpotifyFollowAPICall(spotifyToken) {
    console.log(spotifyToken);
    
    axios({
      //TODO: We need to pass in the ArtistID from the DB.
      url: "https://api.spotify.com/v1/me/following?type=artist&ids=" + ArtistID,
      method: 'put',
      headers: { Accept: "application/json",
                Authorization: "Bearer " + spotifyToken,
                "Content-Type": "application/json",
                }
    })
      .then(res => {
        console.log(`Axios Call completed`);
        });
  }
  async function SpotifySaveAPICall(spotifyToken) {
    console.log(spotifyToken);
    axios({
      url: "https://api.spotify.com/v1/me/tracks?ids=" + TrackID,
      method: 'put',
      headers: { Accept: "application/json",
                Authorization: "Bearer " + spotifyToken,
                "Content-Type": "application/json",
                }
    })
      .then(res => {
        console.log(`Axios Call completed`)
        });
  }
  function SpotifyRedirect() {
      window.location.href = url;
    
  }
  function SpotifyRedirectToContest() {
  
    
    const search1 = window.location.href;
    const a1 = search1.search("#");
    const first1 = search1.substr(a1);
    //TODO: Will need to change back to the /contest url to 
    window.location.href = "https://f1bf79aaf3f3461a991df7b204943be0.vfs.cloud9.us-west-2.amazonaws.com/" + first1;
    
  }

export default ContestPage1Card;