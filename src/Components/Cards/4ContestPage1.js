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
import EmailForm from "../EmailForm";
import ProgressBox from "../ProgressBox"
import SpotifyPlayBox from "../SpotifyPlayBox"


import { IoIosCheckbox } from "react-icons/io";
import { FaSpotify } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdLibraryMusic } from "react-icons/md";



function ContestPage1Card({contestHeadline,contestDescription,buttonText,contestDeadline,contestImg}) {
  
  const [showSpotifyBox, setDisplay] = useState(false);
  const [buttonClickedSpotifyPlay, setClickedSpotifyPlay] = useState(false);
  const [buttonClickedSpotifyFollow, setClickedSpotifyFollow] = useState(false);
  const [buttonClickedSpotifySave, setClickedSpotifySave] = useState(false);
  const [buttonClickedJoinStreetTeam, setClickedJoinStreetTeam] = useState(false);
  //The following code was put in my drew for the spotify play on an iframe from spotify
  /*const Component = React.createClass({
  iframe: function () {
    return {
      __html: this.props.iframe
    }
  },

  render: function() {
    return (
      <div>
        <div dangerouslySetInnerHTML={ this.iframe() } />
      </div>
    );
  }
});
  const iframe = '<iframe src="https://open.spotify.com/embed/playlist/1tyu56QrbQUOYDYTVt5YeQ" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'; 
  ReactDOM.render(
  <Component iframe={iframe} />,
  document.getElementById('container')
);*/
  
  return (
    <div>
      <Card>
        <div className="headline-top margin-reset">
          <div class="flex-top-headline">
            <div className= "left-align top-left-headline">
              {contestHeadline}
            </div>
            <div className="top-right-countdown">
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
              <hr width="76%" align="left" margin-top="0" font-weight="bold"/>
              <h4> Get to the top of the list by completing the following supportive actions </h4>
            </Card.Title>
          <div className="register-button-box">
          {/*
            Now we need to engineer the playing of the song and it returning a number that says it was played by this person,
            and the way for this to be accomplished is to have spotify go and pull recently played with the api call.
            
          */}
          
          {/* Not sure how this will work, but we need to make sure that the path doesn't change the URL when the spotify play button is selected.*/}
            <div onClick={() => { setDisplay(!showSpotifyBox); }}>
              <ActionPointsButton 
                
                text={buttonClickedSpotifyPlay ? "Played on Spotify" : "Play on Spotify"} 
                icon={buttonClickedSpotifyPlay ? FaCheckCircle : FaSpotify}
                path= ""
                points={20}
                textBoxColor={buttonClickedSpotifyPlay ? "spotify-color-gradient clicked" : "spotify-color-gradient"}
                pointsBoxColor={buttonClickedSpotifyPlay ? "spotify-color clicked" : "spotify-color"}
                buttonTextStyle={buttonClickedSpotifyPlay ? "light clicked-text " : "light "}
                buttonIconStyle={buttonClickedSpotifyPlay ? "light clicked-text " : "light "}
                heightClass="button-small-height"
                pointsSize="button-points-total-action"
              />
            </div>
            
            
            {showSpotifyBox ? <div onClick={() => { setClickedSpotifyPlay(true); }}> <SpotifyPlayBox /> </div> : null}
            
            <div onClick={() => { setClickedSpotifyFollow(true); }}>
              <ActionPointsButton 
                text={buttonClickedSpotifyFollow ? "Followed on Spotify" : "Follow on Spotify"} 
                icon={buttonClickedSpotifyFollow ? FaCheckCircle : FaSpotify}
                path= "/spotify-follow-artist"
                points={50}
                textBoxColor={buttonClickedSpotifyFollow ? "spotify-color-gradient clicked" : "spotify-color-gradient"}
                pointsBoxColor={buttonClickedSpotifyFollow ? "spotify-color clicked" : "spotify-color"}
                buttonTextStyle={buttonClickedSpotifyFollow ? "light clicked-text " : "light "}
                buttonIconStyle={buttonClickedSpotifyFollow ? "light clicked-text " : "light "}
                heightClass="button-small-height"
                pointsSize="button-points-total-action"
              />
            </div>
            
            <div onClick={() => { setClickedSpotifySave(true); }}>
              <ActionPointsButton 
                text={buttonClickedSpotifySave ? "Saved on Spotify" : "Save on Spotify"} 
                icon={buttonClickedSpotifySave ? FaCheckCircle : FaSpotify}
                path= "/spotify-save-song"
                points={50}
                textBoxColor={buttonClickedSpotifySave ? "spotify-color-gradient clicked" : "spotify-color-gradient"}
                pointsBoxColor={buttonClickedSpotifySave ? "spotify-color clicked" : "spotify-color"}
                buttonTextStyle={buttonClickedSpotifySave ? "light clicked-text " : "light "}
                buttonIconStyle={buttonClickedSpotifySave ? "light clicked-text " : "light "}
                heightClass="button-small-height"
                pointsSize="button-points-total-action"
              />
            </div>
            
            <div onClick={() => { setClickedJoinStreetTeam(true); }}>
              <ActionPointsButton 
                text={buttonClickedJoinStreetTeam ? "Joined Street Team" : "Join Street Team"} 
                icon={buttonClickedJoinStreetTeam ? FaCheckCircle : MdLibraryMusic}
                path= ""
                points={100}
                textBoxColor={buttonClickedJoinStreetTeam ? "complete-registration-color-gradient clicked" : "complete-registration-color-gradient"}
                pointsBoxColor={buttonClickedJoinStreetTeam ? "complete-registration-color clicked" : "complete-registration-color"}
                buttonTextStyle={buttonClickedJoinStreetTeam ? "light clicked-text " : "dark "}
                buttonIconStyle={buttonClickedJoinStreetTeam ? "light clicked-text " : "dark "}
                heightClass="button-small-height"
                pointsSize="button-points-total-action"
              />
            </div>
          </div>
            <hr class="fade-light" />
            
          <Link className="link-button" to="/referral">
   
            <Button className="btn active btn-default card-container-button button-continue">
              {buttonText} 
            </Button>
         
          </Link>

          </div>
          <PointsBox 
          totalPoints={40} 
          includeText={true}
          userName="Michael Walker"
          totalReferrals={0}
          bonusPoints={0}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

export default ContestPage1Card;
