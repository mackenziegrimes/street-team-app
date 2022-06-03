// import '.../App.css';

import { Link} from '@reach/router';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

// import Background from './Background';
import Countdown from '../Countdown';
import ReactDeadline from '../ReactDeadline';
import ButtonNormal from '../ButtonNormal';
import { FaFacebook } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { FaTrophy } from "react-icons/fa";
import { MdLaunch } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";

import ArtistNavbar from "../ArtistComponents/ArtistNavbar"
import NavbarCreateProject from "../ArtistComponents/NavbarCreateProject"
import ConnectAccount from "../ArtistComponents/RightBoxes/ConnectAccount"
import EnterDetails from "../ArtistComponents/RightBoxes/EnterDetails"
import FanActions from "../ArtistComponents/RightBoxes/FanActions"
import ReviewContest from "../ArtistComponents/RightBoxes/ReviewContest"
import GetStarted from "../ArtistComponents/RightBoxes/GetStarted"


import Text from "../Text";

const CreateContest = ({contestHeadline,contestDescription,buttonText,contestDeadline,contestImg}) => {
  
  const [selectedTab, setSelectedTab] = useState('fan-actions');
  const [activeStep, setActiveStep] = useState(3);
  
  const TABS = {
    'get-started': <GetStarted />,
    'connect-account': <ConnectAccount />,
    'enter-details': <EnterDetails />,
    'fan-actions': <FanActions />,
    'add-integrations': null,
    'review-contest': <ReviewContest activeStep={activeStep} />,
  }
  
  return (
    <div class="artist-wrapper"> <hr class="navbar-divider" />
      <div class="create-contest-wrapper"> 
        <div class="create-contest-left-container">
          <NavbarCreateProject activeStep={activeStep} setActiveStep={setActiveStep} setSelectedTab={setSelectedTab} selectedTab={selectedTab}/>
        </div>
        <div class="create-contest-right-container"> 
          <div class="create-contest-right-box"> 
            {TABS[selectedTab]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateContest;
