// import '.../App.css';

import { Link } from '@reach/router';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

// import Background from './Background';
import Countdown from '../Countdown';
import ReactDeadline from '../ReactDeadline';
import PointsBox from "../PointsBox"
import ActionPointsButton from "../ActionPointsButton"
import ReferralForm from "../ReferralForm";
import ProgressBox from "../ProgressBox"
import SpotifyPlayBox from "../SpotifyPlayBox"


import { IoIosCheckbox } from "react-icons/io";
import { FaSpotify } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdLibraryMusic } from "react-icons/md";

import Text from "../Text"

function ReferralCard({contestHeadline,contestDescription,buttonText,contestDeadline,contestImg}) {
  
  const [buttonClickedSpotifyFollow, setClickedSpotifyFollow] = useState(false);
  
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
          <ProgressBox progressStep={4} />
        </div>
        
        <Card.Body>
          <div className="card-container-text">
            <Card.Title className="register-headline">
              <h3> Thanks for Entering! </h3>
              <hr width="46%" align="left" margin-top="0" font-weight="bold"/>
              <Text family="Open Sans" base="14" color="white">
              <p>
              Explode your points and multiply your chances of winning 
              for every friend you sign up. Earn <Text weight="bold" color="white" base="14"> 3x bonus points for every point they earn 
              and 2x </Text> of the friends they sign up.
              </p>
              </Text>
            </Card.Title>
            <div className="register-button-box">
              <ReferralForm refUrl="streetteam.modernmusician.me/win-a-baby?referrer=1" />
            </div>
            <p class="referral-terms-text"> *Points are only awarded when a friend enters with your link <Text weight="600"> using a valid account </Text>.* </p>
          </div>
          <PointsBox 
          totalPoints={720} 
          includeText={true}
          userName="Michael Walker"
          totalReferrals={3}
          bonusPoints={520}
          />
        </Card.Body>
      </Card>
      </div>
  );
}

export default ReferralCard;
