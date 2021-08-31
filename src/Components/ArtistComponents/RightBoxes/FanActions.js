// import '.../App.css';

import { Link} from '@reach/router';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

import ButtonNormal from '../../ButtonNormal';
import { FaFacebook } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { IoIosCheckbox } from "react-icons/io"
import { MdLibraryMusic } from "react-icons/md";


import ArtistNavbar from "../ArtistNavbar"
import NavbarCreateProject from "../NavbarCreateProject"
import ContestPage1Card from "../../Cards/4ContestPage1"

import Text from "../../Text";
import Checkfield from "../../Checkfield";

import ToggleActionButton from "../ToggleActionButton"


function FanActions() {
  
  // const [contestHeadline, setContestHeadline] = useState("Win a Baby");
  // const [contestDescription, setContestDescription] = useState("Enter for a chance to win a happy, healthy baby girl!");
  // const [buttonText, setButtonText] = useState("Enter to Win >");
  // const [contestDeadline, setContestDeadline] = useState("4/13/2021");
  // const [contestImg, setContestImg] = useState("../baby.png");
  
  const [inputValues, setInputValues] = useState({
    contestHeadline: '', 
    contestDescription: '',
    buttonText: '',
    contestDeadline: '',
    contestImg: '',
    streetTeamUrl: '',
    spotifyPlayUrl: '',
    spotifyFollowPlaylistUrl: '',
    spotifyFollowArtistUrl: '',
    spotifySaveUrl: '',
  });

const handleOnChange = event => {
  const { name, value } = event.target;
  setInputValues({ ...inputValues, [name]: value });
};

  const [actionSpotifyPlay, setActionSpotifyPlay] = useState(false);
  const [actionSpotifyFollow, setActionSpotifyFollow] = useState(false);
  const [actionSpotifySave, setActionSpotifySave] = useState(false);
  const [actionStreetTeam, setActionStreetTeam] = useState(false);

const [authenticated, setAuthenticated] = useState(false);
const handleAuthenticated = () => setAuthenticated(true);
  
  return (
          <div> 
            <div class="create-contest-content-header"> Set Up Fan Actions </div>
            <div class="create-contest-content-preview-wrapper">
              <div class="create-contest-content-body">
                <div class="create-contest-connect-facebook-instructions">
                  <div class="facebook-instructions-title t-l"> Fan Actions </div>
                  <div class="facebook-instructions-description t-m"> 
                  Select "fan actions" that someone can take to 
                  <Text weight="bold"> support your music </Text> 
                  and increase their chance to win your giveaway. 
                  </div>
                </div>
<div>
  <form class="form-container">
    <ToggleActionButton
      label="Play on Spotify"
      icon={FaSpotify}
      actionType="spotifyPlay"
      value={actionSpotifyPlay}
      setSave={setActionSpotifyPlay}
      onChange={e => setActionSpotifyPlay(e.target.checked)}
      description="Get more Spotify streams..."
      authenticated={authenticated}
      setAuthenticated={setAuthenticated}
      handleAuthenticated={handleAuthenticated}
      inputValues={inputValues}
      setInputValues={setInputValues}
    />
    
    <ToggleActionButton
      label="Follow on Spotify"
      icon={FaSpotify}
      actionType="spotifyFollow"
      value={actionSpotifyFollow}
      setSave={setActionSpotifyFollow}
      onChange={e => setActionSpotifyFollow(e.target.checked)}
      description="Get new Spotify followers..."
      authenticated={authenticated}
      setAuthenticated={setAuthenticated}
      handleAuthenticated={handleAuthenticated}
      inputValues={inputValues}
      setInputValues={setInputValues}
    />
    
    <ToggleActionButton
      label="Save on Spotify"
      icon={FaSpotify}
      actionType="spotifySave"
      value={actionSpotifySave}
      setSave={setActionSpotifySave}
      onChange={e => setActionSpotifySave(e.target.checked)}
      description="Get new Spotify saves & trigger the algorithm..."
      authenticated={authenticated}
      setAuthenticated={setAuthenticated}
      handleAuthenticated={handleAuthenticated}
      inputValues={inputValues}
      setInputValues={setInputValues}
    />
    
    <ToggleActionButton
      label="Join Street Team"
      icon={ MdLibraryMusic }
      actionType="streetTeamJoin"
      value={actionStreetTeam}
      onChange={e => setActionStreetTeam(e.target.checked)}
      description="Get more email & text subscribers..."
      authenticated={true}
      inputValues={inputValues}
      setInputValues={setInputValues}
      handleOnChange={handleOnChange}
    />
              
              <div class="button-container">
                <Link class="link-button" to="/">
                <Button type="Submit" 
                className="btn-default complete-registration-button button-text-box">
                  <div className= "complete-registration-color-gradient button-text-box dark">
                    <p className="complete-registration-button-text center large dark">
                    Next Step
                    </p>
                  </div>
                </Button>
                </Link>
              </div>
            </form>
        </div>
              </div>
              <div class="create-contest-preview-wrapper"> PREVIEW:
                <div class="create-contest-preview-box"> 
                  <ContestPage1Card 
                    contestHeadline={inputValues.contestHeadline}
                    contestDescription={inputValues.contestDescription}
                    buttonText={inputValues.buttonText}
                    contestDeadline={inputValues.contestDeadline}
                    contestImg={inputValues.contestImg}
                    streetTeamUrl={inputValues.streetTeamUrl}
                    spotifyPlayUrl={inputValues.spotifyPlayUrl}
                    spotifyFollowPlaylistUrl={inputValues.spotifyFollowPlaylistUrl}
                    spotifyFollowArtistUrl={inputValues.spotifyFollowArtistUrl}
                    spotifySaveUrl={inputValues.spotifySaveUrl}
                    actionSpotifyPlay= {actionSpotifyPlay}
                    actionSpotifyFollow={actionSpotifyFollow}
                    actionSpotifySave={actionSpotifySave}
                    actionStreetTeam={actionStreetTeam}
                  />
                </div>
              </div>
            </div>
          </div>
  );
}

export default FanActions;
