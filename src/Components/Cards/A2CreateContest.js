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


import Text from "../Text";

  const TABS = {
    'connect-account': <ConnectAccount />,
    'enter-details': <EnterDetails />,
    'fan-actions': null,
    'add-integrations': null,
    'review-contest': null,
  }

function CreateContest({contestHeadline,contestDescription,buttonText,contestDeadline,contestImg}) {
  
  const [selectedTab, setSelectedTab] = useState('enter-details');
  
  return (
    <div class="artist-wrapper"> <hr class="navbar-divider" />
      <div class="create-contest-wrapper"> 
        <div class="create-contest-left-container">
          <NavbarCreateProject setSelectedTab={setSelectedTab} selectedTab={selectedTab}/>
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
