// import '.../App.css';


import { Link } from '@reach/router';
import React, { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

// import Background from './Background';
// import Countdown from '../Countdown';
// import ReactDeadline from '../ReactDeadline';
import PointsBox from "../Components/PointsBox"
// import ActionButton from '../Components/ActionButton';
import ActionPointsButton from "../Components/ActionPointsButton"
import ActionPointsButtonTyped from "../Components/ActionPointsButtonTyped"
// import EmailForm from "../EmailForm";
import ProgressBox from "../Components/ProgressBox"
// import SpotifyPlayBox from "../SpotifyPlayBox"


import { IoIosCheckbox } from "react-icons/io";
import { FaSpotify } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdLibraryMusic } from "react-icons/md";

import { gql, useMutation } from '@apollo/react-hooks';

import {totalPointsContext} from '../Context/TotalPointsContext';

//TODO: Pass Artist ID
//TODO: Pass Track ID
//TODO: Pass Playlist or Album ID

// let pointSetter = 0;
// let totalPoints = 0;

function ViewActionPageCardPreview({joinGroupUrl,sendEmailUrl,followMusicUrl,claimStarterPackUrl,actionJoinGroup,actionClaimStarterPack,actionFollowMusic,actionSendEmail}) {

// const linkUrl = "/secure/referral/"+pageData.actionPageId;
// var orderActionButtons = [];
// if(pageData.actionButtons.items.length > 0){
//   orderActionButtons = pageData.actionButtons.items.sort(function(a, b){return a.position - b.position})
//   console.log("sorted buttons are...")
//   console.log(orderActionButtons)
// }

  const joinGroupToggle = actionJoinGroup ? null : "hide";
  const followMusicToggle = actionFollowMusic ? null : "hide";
  const sendEmailToggle = actionSendEmail ? null : "hide";
  const claimStarterPackToggle = actionClaimStarterPack ? null : "hide";

const myTotalPoints = useContext(totalPointsContext);
const pageTitle="Almost there!";
const heading="Welcome to the VIP community!";
const subheading="Please take 2 mins to complete the following steps";
  
  return (
    
    <div>
      <Card>
        <div className="headline-top margin-reset">
          <div className="flex-top-headline">
            <div className= "left-align top-left-headline">
              {pageTitle}
            </div>
            
            <div className="top-right-countdown center">
            </div>
          </div>
        </div>
        
        <div> 
          <ProgressBox progressStep={3} />
        </div>
        
        <Card.Body>
          <div className="card-container-text">
            <Card.Title className="register-headline">
              <h3> {heading} </h3>
              <hr width="76%" align="left" margin-top="0" fontWeight="bold"/>
              <h4> {subheading} </h4>
            </Card.Title>
              <div className={joinGroupToggle}>
                <ActionPointsButtonTyped 
                  preActionText="Join the VIP Group"
                  postActionText="Joined the VIP Group"
                  actionType="joinGroup"
                  pointValue={10}
                  url= ""//{spotifyFollowArtistUrl}
                  completed={false}
                />
              </div>
              <div className={followMusicToggle}>
                <ActionPointsButtonTyped 
                  preActionText="Follow My Music"
                  postActionText="Followed My Music"
                  actionType="followMusic"
                  pointValue={10}
                  url= ""//{spotifyFollowArtistUrl}
                  completed={false}
                />
              </div>
              <div className={sendEmailToggle}>
                <ActionPointsButtonTyped 
                  preActionText="Send Me An Email"
                  postActionText="Sent Me An Email"
                  actionType="sendEmail"
                  pointValue={10}
                  url= ""//{spotifyFollowArtistUrl}
                  completed={false}
                />
              </div>
              <div className={claimStarterPackToggle}>
                <ActionPointsButtonTyped 
                  preActionText="Claim Your Free Starter Pack"
                  postActionText="Claimed Your Free Starter Pack"
                  actionType="claimStarterPack"
                  pointValue={10}
                  url= ""//{spotifyFollowArtistUrl}
                  completed={false}
                />
              </div>
            
          <div className="register-button-box">
          
        </div>
        </div>
        <PointsBox 
          totalPoints={myTotalPoints.newState}
          includeText={false}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

export default ViewActionPageCardPreview;